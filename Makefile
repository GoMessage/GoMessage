# 编译新版本时只需修改<VERSION>的变量值即可（格式：x.x.x）
#
# 常用命令：
#
#	make all  --->  同时编译linux、mac、windows三个环境的tar包
#
#	make docker --->  编译docker镜像
#
#	make package_push
#
#	make swagger
#




######################################
# 全局变量
######################################
#要编译的命令名称
NAME := gomessage
#版本
VERSION := 2.3.8
#编译输出目录
OUTPUT_PATH := ./build/${VERSION}
#是否开启cgo（0代表不开启，1代表开启）
CGO_STATUS := 1
#当前时间
DATE_NOW := $(shell date "+%Y%m%d_%H%M%S")


######################################
# 指定缺省状态下执行哪些Target
######################################
all: clean start swagger build_mac_arm64 build_windows build_linux end


######################################
# Target：清理开发目录
######################################
.PHONY: clean
clean:
	mkdir -p "${OUTPUT_PATH}"
	echo "编译输出目录为：${OUTPUT_PATH}"
	rm -rf ./tmp
	rm -rf ./build/*
	rm -rf ./*.log
	rm -rf ./*.db
	rm -rf ./*.tar.gz
	rm -rf ./config/*.db
	rm -rf ./*.tgz


######################################
# Target：处理依赖
######################################
.PHONY: start
start:
	go mod tidy


######################################
# Target：生成swagger文件
######################################
.PHONY: swagger
swagger:
	go install github.com/swaggo/swag/cmd/swag@v1.8.12
	mkdir -p assets
	swag init -o assets/docs


######################################
# Target：编译为Mac发行版（本地调试使用）
######################################
.PHONY: build_mac
build_mac: packageName:=${NAME}-${VERSION}-mac-amd64
build_mac:
	mkdir -p "${OUTPUT_PATH}/${packageName}"
	GOARCH=amd64 \
	GOOS=darwin \
	CGO_ENABLED=${CGO_STATUS} \
	go build -ldflags='-s -w' -o "${OUTPUT_PATH}/${packageName}/${NAME}" ./main.go
	cp -rf ./config "${OUTPUT_PATH}/${packageName}/"
	cp -rf ./assets "${OUTPUT_PATH}/${packageName}/"
	tar -zcvf "${OUTPUT_PATH}/${packageName}.tar.gz" -C ${OUTPUT_PATH} ${packageName}
	ls -alh "${OUTPUT_PATH}/${packageName}/"


######################################
# Target：编译为Mac的arm发行版（本地调试使用）
######################################
.PHONY: build_mac_arm64
build_mac_arm64: packageName:=${NAME}-${VERSION}-mac-arm64
build_mac_arm64:
	mkdir -p "${OUTPUT_PATH}/${packageName}"
	GOARCH=arm64 \
	GOOS=darwin \
	CGO_ENABLED=${CGO_STATUS} \
	go build -ldflags='-s -w' -o "${OUTPUT_PATH}/${packageName}/${NAME}" ./main.go
	cp -rf ./config "${OUTPUT_PATH}/${packageName}/"
	cp -rf ./assets "${OUTPUT_PATH}/${packageName}/"
	tar -zcvf "${OUTPUT_PATH}/${packageName}.tar.gz" -C ${OUTPUT_PATH} ${packageName}
	ls -alh "${OUTPUT_PATH}/${packageName}/"


######################################
# Target：编译为Windows发行版
######################################
.PHONY: build_windows
build_windows: packageName:=${NAME}-${VERSION}-windows-amd64
build_windows:
	mkdir -p "${OUTPUT_PATH}/${packageName}"
	GOARCH=amd64 \
	GOOS=windows \
	CGO_CFLAGS="-g -O2 -Wno-return-local-addr" \
	CC=x86_64-w64-mingw32-gcc \
	CXX=x86_64-w64-mingw32-g++ \
	CGO_ENABLED=${CGO_STATUS} \
	go build -ldflags='-s -w -extldflags "-static"' -o "${OUTPUT_PATH}/${packageName}/${NAME}.exe" ./main.go
	cp -rf ./config "${OUTPUT_PATH}/${packageName}/"
	cp -rf ./assets "${OUTPUT_PATH}/${packageName}/"
	tar -zcvf "${OUTPUT_PATH}/${packageName}.tar.gz" -C ${OUTPUT_PATH} ${packageName}
	ls -alh "${OUTPUT_PATH}/${packageName}/"


######################################
# Target：编译为Linux发行版（实际封装到容器里的内容）
######################################
.PHONY: build_linux
build_linux: packageName:=${NAME}-${VERSION}-linux-amd64
build_linux:
	mkdir -p "${OUTPUT_PATH}/${packageName}"
	GOARCH=amd64 \
	GOOS=linux \
	CGO_LDFLAGS="-static" \
	CC=x86_64-linux-musl-gcc \
	CXX=x86_64-linux-musl-g++ \
	CGO_ENABLED=${CGO_STATUS} \
	go build -ldflags='-s -w -extldflags "-static"' -o "${OUTPUT_PATH}/${packageName}/${NAME}" ./main.go
	cp -rf ./config "${OUTPUT_PATH}/${packageName}/"
	cp -rf ./assets "${OUTPUT_PATH}/${packageName}/"
	tar -zcvf "${OUTPUT_PATH}/${packageName}.tar.gz" -C ${OUTPUT_PATH} ${packageName}
	ls -alh "${OUTPUT_PATH}/${packageName}/"


######################################
# Target：结束之前做些什么
######################################
.PHONY: end
end:
	ls -alh ${OUTPUT_PATH}


######################################
# Target：编译docker镜像
######################################
.PHONY: docker
docker: DOCKER_SCAN_SUGGEST := False
docker: packageName := ${NAME}-${VERSION}-linux-amd64
docker:
	docker login --username=$(DOCKER_HUB_USERNAME)
	@echo "\n---------版本latest---------\n"
	@docker buildx build --platform linux/arm64,linux/amd64 -t gomessage/gomessage:latest -f ./docker/Dockerfile  "${OUTPUT_PATH}/${packageName}" --push
	@echo "\n---------开始制作镜像，版本${VERSION}---------\n"
	@docker buildx build --platform linux/arm64,linux/amd64 -t gomessage/gomessage:${VERSION} -f ./docker/Dockerfile  "${OUTPUT_PATH}/${packageName}" --push
	@echo "\n---------镜像制作完成，版本${VERSION}---------\n"
	###@docker push gomessage/gomessage:${VERSION}
	###@echo "\n---------推送镜像完成，版本${VERSION}---------\n"
	###@docker push gomessage/gomessage:latest
	###@echo "\n---------推送镜像完成，版本latest---------\n"
	@echo
	@gsed -i '/version:/c version: ${VERSION}' ./docker/helm/Chart.yaml
	@gsed -i '/appVersion:/c appVersion: ${VERSION}' ./docker/helm/Chart.yaml
	helm package ./docker/helm
	helm coding-push gomessage-${VERSION}.tgz gomessage
	rm -rf ./*.tgz
	@echo "\n---------制作Helm Chart完成，版本${VERSION}---------\n"


######################################
# Target：推送docker镜像
######################################
#.PHONY: docker_push
#docker_push: DOCKER_SCAN_SUGGEST := False
#docker_push: packageName := ${NAME}-${VERSION}-linux-amd64
#docker_push:
#	docker login --username=$(DOCKER_HUB_USERNAME)




######################################
# Target：推送package到github
######################################
.PHONY: package_push
package_push:
	@go run uploads.go --version=${VERSION}
