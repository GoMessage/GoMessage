(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function i(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-0e2cb720":"d634f462","chunk-2d22497a":"dd8e6611","chunk-3048ecd2":"f10030f1","chunk-95805e7e":"ff404e9b","chunk-c6427194":"a2277e1e"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-0e2cb720":1,"chunk-3048ecd2":1,"chunk-95805e7e":1,"chunk-c6427194":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="static/css/"+({}[e]||e)+"."+{"chunk-0e2cb720":"ff6e444e","chunk-2d22497a":"31d6cfe0","chunk-3048ecd2":"13d04c7a","chunk-95805e7e":"0a962cd6","chunk-c6427194":"59b158a8"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],p.parentNode.removeChild(p),a(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4360:function(e,t,a){"use strict";var n=a("2b0e"),r=a("2f62");n["default"].use(r["a"]),t["a"]=new r["a"].Store({state:{StepsActive:0,DrawerStatus:!1,Namespace:"default",NamespaceInfo:{},Token:""},getters:{getNamespace:e=>e.Namespace,getNamespaceInfo:e=>e.NamespaceInfo,getToken:e=>e.Token},mutations:{updateStepsActive(e,t){e.StepsActive=t},updateToken(e,t){e.Token=t},updateDrawerStatus(e,t){e.DrawerStatus=t},updateNamespace(e,t){e.Namespace=t},updateNamespaceInfo(e,t){e.NamespaceInfo=t}},actions:{},modules:{}})},"47e3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=(a("be3b"),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("el-container",{attrs:{id:"MyContainer-Container"}},[t("el-header",{attrs:{id:"MyContainer-Header"}},[t("NavHeader")],1),t("el-container",[e.showHeader?t("el-aside",{attrs:{id:"MyContainer-Aside",width:"275px"}},[t("NavAside")],1):e._e(),t("el-main",{attrs:{id:"MyContainer-Main"}},[e.isRouterAlive?t("router-view"):e._e()],1)],1),t("el-footer",{attrs:{id:"MyContainer-Footer"}},[t("NavFooter")],1)],1)],1)}),o=[],s=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-demo",attrs:{id:"NavFooter-Footer",mode:"horizontal","background-color":"#161823","text-color":"#fff","active-text-color":"#ffd04b","collapse-transition":!0},on:{select:e.handleSelect}},[t("el-row",{attrs:{type:"flex",justify:"center",id:"my-row"}},[t("el-menu-item",{attrs:{id:"NavFooter-menu-item",disabled:""}},[t("el-link",{attrs:{href:"https://github.com/gomessage/gomessage",type:"primary"}},[e._v("@ 2020~2024  ")]),t("el-link",{attrs:{href:"https://opensource.org/licenses/MIT",type:"primary"}},[e._v("MIT License   ")]),t("el-link",{attrs:{href:"https://github.com/gomessage/gomessage",type:"primary"}},[e._v("Github ")]),e._v(" or "),t("el-link",{attrs:{href:"https://gitee.com/gomessage/gomessage",type:"primary"}},[e._v(" Gitee  ")]),e._v(" Version: "),t("el-link",{attrs:{href:"https://github.com/gomessage/gomessage/releases",type:"primary"}},[e._v("v"+e._s(e.version)+"  ")]),e._v(" Give feedback and Suggestions to the author: "),t("el-link",{attrs:{href:"mailto:taycc3223@gmail.com",type:"primary"}},[e._v("Email")])],1)],1)],1)},i=[],c={name:"NavFooter",data(){return{version:"",activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect(e,t){console.log(e,t)}},created(){this.version="2.3.17"}},l=c,u=(a("d061"),a("2877")),d=Object(u["a"])(l,s,i,!1,null,"987f980a",null),p=d.exports,m=function(){var e=this,t=e._self._c;return t("el-menu",{staticStyle:{height:"100%","border-right":"solid 0 red"},attrs:{"default-active":e.getStoreNamespace,"active-text-color":"#ffd04b","background-color":"#41555d","text-color":"#fff"}},[t("br"),t("el-menu-item",{staticStyle:{"text-align":"left"},attrs:{index:"998"}},[t("el-button",{staticStyle:{"padding-right":"35px"},attrs:{icon:"el-icon-setting",plain:"",size:"mini"},on:{click:function(t){e.dialogFormVisible222=!0}}},[e._v("管理推送通道 ")])],1),t("br"),e._l(e.namespaceList,(function(a,n){return t("el-menu-item",{key:n,staticStyle:{"text-align":"left"},attrs:{index:a.name},on:{click:function(t){return e.updateNamespace(a,t)}}},[t("i",{staticClass:"el-icon-menu"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.name))])])})),t("el-dialog",{attrs:{visible:e.dialogFormVisible222,title:"消息推送通道",modal:"",width:"60%",top:"10vh","lock-scroll":""},on:{"update:visible":function(t){e.dialogFormVisible222=t}}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.namespaceList,border:"","header-cell-style":{background:"#2f2f35",color:"#fff"}}},[t("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"}}),t("el-table-column",{attrs:{prop:"description",label:"描述"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"small",type:"danger"},nativeOn:{click:function(t){return t.preventDefault(),e.deleteOneNamespace(a.$index,e.namespaceList)}}},[e._v("删除 ")])]}}])})],1),t("br"),t("p",{staticClass:"authorStatement2"},[e._v(' GoMessage v2 版本支持多通道并发，可以同时存在多个"通道"，互不干扰的进行消息转发。 ')]),t("br"),t("el-divider",{attrs:{"content-position":"left"}},[t("i",{staticClass:"el-icon-circle-plus-outline"},[e._v(" 新增通道")])]),t("el-form",{ref:"namespaceForm",staticStyle:{width:"60%"},attrs:{model:e.namespaceForm,rules:e.namespaceRules}},[t("el-form-item",{attrs:{label:"通道名称","label-width":"105px",prop:"name"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"请输入通道名称（只能是纯英文名称，不限大小写）"},model:{value:e.namespaceForm.name,callback:function(t){e.$set(e.namespaceForm,"name",t)},expression:"namespaceForm.name"}})],1),t("el-form-item",{attrs:{label:"通道描述","label-width":"105px"}},[t("el-input",{attrs:{autocomplete:"off",type:"textarea",rows:3,placeholder:"请输入推送通道的描述信息"},model:{value:e.namespaceForm.description,callback:function(t){e.$set(e.namespaceForm,"description",t)},expression:"namespaceForm.description"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogFormVisible222=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addNamespace}},[e._v("确 定")])],1)],1)],2)},f=[],h=a("6cac"),g=a("61f7"),v={name:"NavAside",data(){return{namespaceList:[{name:"default",description:"default",is_active:!0,is_renders:!1}],dialogFormVisible222:!1,namespaceForm:{name:"",description:"",is_active:!0},namespaceRules:{name:[{required:!0,message:"name不能为空",trigger:"blur"},{validator:g["a"],trigger:"blur"},{validator:g["b"],trigger:"blur"},{validator:g["c"],trigger:"blur"}]}}},inject:["reload"],methods:{pullNamespace:function(){Object(h["e"])().then(e=>{if(1===e.data.code){this.namespaceList=e.data.result;let t=this.$store.getters.getNamespace;this.namespaceList.forEach(e=>{e["name"]===t&&this.$store.commit("updateNamespaceInfo",e)})}}).catch(e=>{console.log(e)})},updateNamespace:function(e,t){let a=e.name;console.log(a,t),this.$store.commit("updateNamespace",a),this.$store.commit("updateNamespaceInfo",e),this.reload()},addNamespace:function(){this.$refs["namespaceForm"].validate(e=>{e&&(this.dialogFormVisible222=!1,this.namespaceForm.is_active=!0,Object(h["l"])(this.namespaceForm).then(e=>{console.log(e),this.reload()}))})},deleteOneNamespace(e,t){let a=t[e].id;Object(h["b"])(a).then(a=>{1===a.data.code?(this.$message.success("删除一行数据成功..."),t.splice(e,1)):this.$message.error("删除数据失败...")}).catch(e=>{console.log(e)})},activeNamespace:function(){this.namespaceList.forEach(e=>{Object(h["q"])(e.id,e).then(e=>{console.log(e.data.result)}).catch(e=>{console.log(e)})}),this.$message.success("数据更新成功...")}},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace}},created(){this.pullNamespace()}},b=v,y=(a("af3d"),Object(u["a"])(b,m,f,!1,null,"2cab73d4",null)),k=y.exports,_=function(){var e=this,t=e._self._c;return t("el-menu",{staticStyle:{height:"100%"},attrs:{"collapse-transition":!0,"default-active":e.$route.name,"active-text-color":"#ffd04b","background-color":"#161823",mode:"horizontal",router:"","text-color":"#fff"},on:{select:e.handleSelect}},[t("el-menu-item",{staticStyle:{"text-decoration":"none","border-bottom":"none"}},[t("router-link",{attrs:{to:"/"}},[t("img",{attrs:{height:"90%",src:a("9b19")}}),e._v("    "),t("span",{staticStyle:{"font-size":"15px"}},[e._v("GoMessage · 消息转发器")])])],1),t("el-menu-item",{staticStyle:{padding:"0","text-decoration":"none","border-bottom":"none"}},[t("router-link",{attrs:{to:"/"}},[t("el-button",{staticStyle:{color:"#fff","margin-left":"10px"},attrs:{type:"text",icon:"el-icon-location"}},[e._v(" "+e._s(e.getStoreNamespace)+" ")])],1)],1),t("el-row",{attrs:{justify:"end",type:"flex"}},[t("router-link",{attrs:{to:"/main/"}},[t("el-menu-item",{attrs:{index:"1-1"}},[t("i",{staticClass:"el-icon-position"}),e._v("消息入口")])],1),t("router-link",{attrs:{to:"/renders"}},[t("el-menu-item",{attrs:{index:"2-1"}},[t("i",{staticClass:"el-icon-set-up"}),e._v("数据渲染")])],1),t("router-link",{attrs:{to:"/clients"}},[t("el-menu-item",{attrs:{index:"3-1"}},[t("i",{staticClass:"el-icon-chat-dot-square"}),e._v("接收客户端")])],1),t("el-menu-item",[t("el-link",{attrs:{underline:!1,href:"https://www.yuque.com/osoc/gomessage",target:"_blank",type:"primary"}},[t("i",{staticClass:"el-icon-document"}),e._v("文档 ")])],1),t("el-dropdown",[t("el-menu-item",[e.isToken?t("el-avatar",{attrs:{src:e.image001}}):t("el-avatar",[e._v("User")])],1),t("el-dropdown-menu",[e.isToken?t("el-dropdown-item",[t("el-button",{attrs:{type:"text"},on:{click:e.user_logout}},[e._v("退出登录")])],1):t("el-dropdown-item",[t("el-button",{attrs:{type:"text"},on:{click:e.router2login}},[e._v("用户登录")])],1)],1)],1)],1)],1)},S=[],w=(a("14d9"),a("a3b5")),N=a.n(w),x={name:"NavHeader",data(){return{image001:N.a}},components:{},computed:{getStoreNamespace:function(){return this.$store.getters.getNamespace},isToken:function(){let e=this.$store.getters.getToken;return""!==e}},methods:{handleSelect(e,t){console.log(e,t)},user_logout(){Object(h["i"])({demo:"demo"}).then(e=>{1===e.data.code?(this.$store.commit("updateToken",""),this.$message.success("注销成功...")):this.$message.error("退出登录失败...")})},router2login(){this.$router.push("/login")}}},j=x,O=(a("e76e"),Object(u["a"])(j,_,S,!1,null,"3d706a30",null)),F=O.exports,$={name:"app",data(){return{isRouterAlive:!0,showHeader:!1}},components:{NavHeader:F,NavAside:k,NavFooter:p},provide(){return{reload:this.reload}},methods:{reload(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},watch:{$route:{immediate:!0,handler(e){this.showHeader=!["/login","/crontab"].includes(e.path)}}},created(){sessionStorage.getItem("store")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),window.addEventListener("beforeunload",()=>{sessionStorage.setItem("store",JSON.stringify(this.$store.state))})}},P=$,T=(a("fe5a"),Object(u["a"])(P,r,o,!1,null,null,null)),C=T.exports,A=a("a18c"),I=a("4360"),M=a("5c96"),L=a.n(M);a("0fae");n["default"].use(L.a),n["default"].config.productionTip=!1,new n["default"]({router:A["a"],store:I["a"],render:e=>e(C)}).$mount("#app"),n["default"].prototype.dateFormat=function(e){console.log(e);const t=e;if(null!=t){const e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),o=e.getHours(),s=e.getMinutes(),i=e.getSeconds();return a+"-"+(n<10?"0":"")+n+"-"+(r<10?"0":"")+r+(o<10?"0":"")+" "+o+":"+(s<10?"0":"")+s+":"+(i<10?"0":"")+i}}},"61f7":function(e,t,a){"use strict";function n(e,t,a){let n=/^[0-9]+$/,r=n.test(t.toString());r&&a("不能以数字开头"),a()}function r(e,t,a){t.length<3&&a("长度不能小于3个字符"),a()}function o(e,t,a){let n=/^[A-Za-z0-9]+$/,r=n.test(t.toString());r||a("只能是字母或数字，不能包含特殊符号"),a()}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o}))},"6cac":function(e,t,a){"use strict";a.d(t,"k",(function(){return r})),a.d(t,"s",(function(){return o})),a.d(t,"t",(function(){return s})),a.d(t,"n",(function(){return i})),a.d(t,"r",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"m",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"j",(function(){return p})),a.d(t,"d",(function(){return m})),a.d(t,"p",(function(){return f})),a.d(t,"o",(function(){return h})),a.d(t,"a",(function(){return g})),a.d(t,"e",(function(){return v})),a.d(t,"l",(function(){return b})),a.d(t,"f",(function(){return y})),a.d(t,"b",(function(){return k})),a.d(t,"q",(function(){return _})),a.d(t,"h",(function(){return S})),a.d(t,"i",(function(){return w}));var n=a("be3b");const r=(e,t)=>n["a"].Post("/go/"+e,t),o=(e,t)=>n["a"].Get("/api/v1/"+e+"/json",t),s=(e,t)=>n["a"].Get("/api/v1/"+e+"/vars",t),i=(e,t)=>n["a"].Post("/api/v1/"+e+"/vars",t),c=(e,t)=>n["a"].Get("/api/v1/"+e+"/flattening",t),l=(e,t)=>n["a"].Get("/api/v1/"+e+"/template",t),u=(e,t)=>n["a"].Post("/api/v1/"+e+"/template",t),d=(e,t)=>n["a"].Get("/api/v1/"+e+"/client",t),p=(e,t)=>n["a"].Post("/api/v1/"+e+"/client",t),m=(e,t,a)=>n["a"].Get("/api/v1/"+e+"/client/"+t,a),f=(e,t,a)=>n["a"].Put("/api/v1/"+e+"/client/"+t,a),h=(e,t,a)=>n["a"].Put("/api/v1/"+e+"/client-info/"+t,a),g=(e,t,a)=>n["a"].Delete("/api/v1/"+e+"/client/"+t,a),v=e=>n["a"].Get("/api/v1/namespace",e),b=e=>n["a"].Post("/api/v1/namespace",e),y=(e,t)=>n["a"].Get("/api/v1/namespace/"+e,t),k=e=>n["a"].Delete("/api/v1/namespace/"+e),_=(e,t)=>n["a"].Put("/api/v1/namespace/"+e,t),S=e=>n["a"].Post("/auth/login",e),w=e=>n["a"].Post("/auth/logout",e)},"7c96":function(e,t,a){},"9b19":function(e,t,a){e.exports=a.p+"static/img/logo.45c29d20.svg"},a18c:function(e,t,a){"use strict";var n=a("2b0e"),r=a("8c4f"),o=a("4360");n["default"].use(r["a"]);const s=[{path:"/",redirect:"/main/"},{path:"/main",name:"1-1",component:()=>a.e("chunk-95805e7e").then(a.bind(null,"4c85"))},{path:"/renders",name:"2-1",component:()=>a.e("chunk-3048ecd2").then(a.bind(null,"859a"))},{path:"/clients",name:"3-1",component:()=>a.e("chunk-c6427194").then(a.bind(null,"efba"))},{path:"/crontab",name:"4-1",component:()=>a.e("chunk-2d22497a").then(a.bind(null,"e191"))},{path:"/login",name:"login",component:()=>a.e("chunk-0e2cb720").then(a.bind(null,"dd7b"))}],i=new r["a"]({routes:s});i.beforeEach(async(e,t,a)=>{let n=!1,r=o["a"].getters.getToken;""===r?sessionStorage.getItem("store")&&(await o["a"].replaceState(Object.assign({},o["a"].state,JSON.parse(sessionStorage.getItem("store")))),n=!0):n=!0,"/login"===e.path||n?a():"/login"!==t.path?a("/login"):a(!1)}),t["a"]=i},a3b5:function(e,t,a){e.exports=a.p+"static/img/image001.545e79a6.jpeg"},af3d:function(e,t,a){"use strict";a("7c96")},be3b:function(e,t,a){"use strict";a("14d9");var n=a("bc3a"),r=a.n(n),o=a("4360"),s=a("a18c");const i=r.a.create({baseURL:"",timeout:6e4});i.interceptors.request.use(e=>{let t=o["a"].getters.getToken;return""===t?s["a"].push("/login"):e.headers={"Content-Type":"application/json",Authorization:t},e},e=>Promise.reject(e)),i.interceptors.response.use(e=>e,e=>{switch(e.response.status){case 403:console.log("没有权限"),s["a"].push("/login");break;case 401:console.log("没有权限"),s["a"].push("/login");break;default:break}return Promise.reject(e)}),t["a"]={Get(e,t,a){return i({method:"get",url:e,headers:a,params:t})},Delete(e,t,a){return i({method:"delete",url:e,headers:a,params:t})},Post(e,t,a){return i({method:"post",url:e,headers:a,data:t})},Put(e,t,a){return i({method:"put",url:e,headers:a,data:t})}}},ceb3:function(e,t,a){},d061:function(e,t,a){"use strict";a("ceb3")},e76e:function(e,t,a){"use strict";a("fbc2")},fbc2:function(e,t,a){},fe5a:function(e,t,a){"use strict";a("47e3")}});
//# sourceMappingURL=app.b6e96669.js.map