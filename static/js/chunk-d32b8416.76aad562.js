(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d32b8416"],{"59fa":function(t,e,a){"use strict";a("c7eb")},a7d2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"MessageTemplateContent"}},[a("el-card",{staticClass:"box-card",attrs:{id:"MessageTemplateCard",shadow:"always"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("                        消息模板 ")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0","margin-left":"15px"},attrs:{type:"text"},on:{click:function(e){return t.pushTemplateData()}}},[t._v("推送")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.pullTemplateData()}}},[t._v("拉取")])],1),a("div",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:200},placeholder:"请输入Golang语法的模板内容",resize:"none"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)])],1)},o=[],l={name:"MessageTemplate",data:function(){return{textarea:"点击拉取按钮，获取示例模板"}},methods:{printData:function(){console.log(this.textarea)},copyCode:function(){var t=document.getElementById("templateContent");window.getSelection().selectAllChildren(t),document.execCommand("Copy"),alert("已复制好，可以贴粘...")},handlePaste:function(t){var e=t.clipboardData.getData("Text");this.text=e,console.log(e)},pushTemplateData:function(){console.log(this.textarea),this.axios.post("/web/template",{message_template:this.textarea}).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))},pullTemplateData:function(){var t=this;this.axios.get("/web/template").then((function(e){t.textarea=e.data["MessageTemplate"],console.log(e.data)})).catch((function(t){console.log(t)}))}},created:function(){this.pullTemplateData()}},s=l,c=(a("59fa"),a("2877")),i=Object(c["a"])(s,n,o,!1,null,"70954d66",null);e["default"]=i.exports},c7eb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-d32b8416.76aad562.js.map