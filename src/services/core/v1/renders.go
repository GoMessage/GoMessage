package v1

import (
	"bytes"
	"fmt"
	"github.com/tidwall/gjson"
	"gomessage/src/pkg/log/loggers"
	"gomessage/src/pkg/utils"
	"html/template"
	"strconv"
	"strings"
)

// CompleteMessage 完整的内容渲染
func CompleteMessage(thisTemplate string, dataList []map[string]string) []string {
	var templateList []string

	for _, data := range dataList {

		//创建一个字节缓冲器
		var buf bytes.Buffer

		//以 K8sMessageTemplate 为蓝本，新建一个模板，新起一个名字叫tmplNewName
		tmpl, err := template.New("tmplNewName").Parse(thisTemplate)
		if err != nil {
			fmt.Println(err)
		}
		//实例化属性
		//tmplData := data
		//fmt.Println(data)

		//渲染tmpl模板，渲染的过程中把tmplData的值填充到模板之内，最后把渲染后的结果存入到buf这个字节缓冲器中
		if err = tmpl.Execute(&buf, data); err != nil {
			panic(err)
		}

		//格式化字节缓冲器中的内容为String串，然后返回给调用方
		//return buf.String()
		templateList = append(templateList, buf.String())
	}
	return templateList
}

func AnalysisData(keyValueList []map[string]string, requestData []byte) []map[string]string {
	/*
	 * 这一段代码，只是从原始数据中拿到【用户需求字段】中长度最长的那一个度量单位，不对原始数据做任何处理和拆分
	 * 同时这段代码，只关注用户关注的变量，其它多余的变量都会被舍弃
	 * 最后，这段代码只关注变量对应的value，不关注key的处理
	 */
	dataLength := 0
	for _, dict := range keyValueList {
		for _, v := range dict {
			tmpKey := v                                     //此时v里面存放的内容是这种形式的：alert.#.label.name
			tmpValue := gjson.GetBytes(requestData, tmpKey) //gjson支持 aaa.#.bbb这种形式的取值，取到的内容是：[bbb1,bbb2,bbb3,bbb4,bbb5]这种形式的
			if len(tmpValue.Array()) >= dataLength {        //拿到当前这个子元素中，最长数据的长度，这个数字用来做下文遍历使用
				dataLength = len(tmpValue.Array()) //让for循环外面声明的那个dataLength的长度，达到当前实际取值中的最大值（而且只关注用户关注的值），用户不关注的值我们也可以放弃掉
			}
		}
	}

	//下面这个代码，会根绝lenNum的长度遍历多次，每一次都拼装好一个完整的dict，然后追加进dataList中。
	var dataList []map[string]string
	for i := 0; i < dataLength; i++ {
		oneDataMapping := make(map[string]string)
		for _, dict := range keyValueList {
			for k, v := range dict {
				tmpKey := strings.ReplaceAll(v, "#", strconv.Itoa(i))
				tmpValue := gjson.GetBytes(requestData, tmpKey) //此时的：tmpKey是：【alert.0.label.name】 这种形式，取到的是一个具体值
				oneDataMapping[k] = tmpValue.String()
			}
		}
		dataList = append(dataList, oneDataMapping)
	}

	//返回一个list，里面包含了若干个dict类型
	return dataList
}

// MessageJoint 按照不同的客户端类型，选择不同的拼接和聚合形式
func MessageJoint(messageList []string, thisType string) string {
	var msg string

	switch thisType {
	case utils.VarDingtalk:
		msg = strings.Join(messageList, "\n * * * \n")

	case utils.VarFeishu:
		msg = strings.Join(messageList, "\n --------------- \n")

	case utils.VarWechatRobot:
		msg = strings.Join(messageList, "\n\n \n\n")

	case utils.VarWechatApplication:
		msg = strings.Join(messageList, "\n · \n")

	default:
		loggers.DefaultLogger.Errorln("消息聚合时，客户端类型错误")
	}

	return msg
}
