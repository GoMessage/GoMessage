(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdb339ac"],{"0b42":function(t,e,n){var i=n("da84"),l=n("e8b5"),o=n("68ee"),c=n("861d"),r=n("b622"),a=r("species"),s=i.Array;t.exports=function(t){var e;return l(t)&&(e=t.constructor,o(e)&&(e===s||l(e.prototype))?e=void 0:c(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?s:e}},"159b":function(t,e,n){var i=n("da84"),l=n("fdbc"),o=n("785a"),c=n("17c2"),r=n("9112"),a=function(t){if(t&&t.forEach!==c)try{r(t,"forEach",c)}catch(e){t.forEach=c}};for(var s in l)l[s]&&a(i[s]&&i[s].prototype);a(o)},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,l=n("a640"),o=l("forEach");t.exports=o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var i=n("d039"),l=n("b622"),o=n("2d00"),c=l("species");t.exports=function(t){return o>=51||!i((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3059:function(t,e,n){"use strict";n("95af")},"37fb":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[n("el-col",{attrs:{offset:4,span:16}},[n("CDrawer",{attrs:{getClientList:t.GetClientList,OperateType:"create"}}),n("CDrawerOneDataInfo2",{attrs:{CloseBeforeFunc:t.thisClose,isShow:t.visibleStatus,OneClientObject:t.clientOneInfo,OneClientType:t.clientOneInfo.client_type,OperateType:"show"}}),n("el-card",{staticStyle:{"box-shadow":"#ccc 0px 30px 30px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"padding-left":"50px"}},[t._v("客户端 · 列表")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.GetClientList}},[t._v("刷新列表")])],1),n("el-table",{staticStyle:{width:"100%"},attrs:{border:!0,data:t.clientList,"header-cell-style":{background:"#2f2f35",color:"#fff"},stripe:!0}},[n("el-table-column",{attrs:{label:"客户端名称",prop:"client_name"}}),n("el-table-column",{attrs:{label:"客户端描述",prop:"client_description"}}),n("el-table-column",{attrs:{label:"客户端类型",prop:"client_annotation"}}),n("el-table-column",{attrs:{label:"是否激活",prop:"is_active"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{on:{change:t.saveActiveStatus},model:{value:e.row.is_active,callback:function(n){t.$set(e.row,"is_active",n)},expression:"scope.row.is_active"}},[t._v("激活")])]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(n){return n.preventDefault(),t.getOneClient(e.$index,t.clientList)}}},[t._v("详情 ")]),n("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(n){return n.preventDefault(),t.deleteOneClient(e.$index,t.clientList)}}},[t._v(" 移除 ")])]}}])})],1),n("br"),n("br"),n("br"),n("el-button",{attrs:{round:"",type:"primary"},on:{click:t.addClient}},[t._v("添加新客户端")])],1)],1)],1)},l=[],o=(n("d3b7"),n("159b"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-drawer",{attrs:{title:"添加客户端",visible:t.getDrawerStatus,"before-close":t.handleClose,"destroy-on-close":!0,size:"40%"}},[n("el-tabs",{staticStyle:{margin:"1px 20px"},attrs:{"tab-position":t.tabPosition}},[n("el-tab-pane",{attrs:{label:"钉钉 · 群机器人"}},[n("clientDingtalk",t._b({},"clientDingtalk",t.$attrs,!1))],1),n("el-tab-pane",{attrs:{label:"飞书 · 群机器人"}},[n("clientFeishu",t._b({},"clientFeishu",t.$attrs,!1))],1),n("el-tab-pane",{attrs:{label:"企微 · 群机器人"}},[n("clientWechatRobot",t._b({},"clientWechatRobot",t.$attrs,!1))],1),n("el-tab-pane",{attrs:{label:"企微 · 应用号"}},[n("clientWechat",t._b({},"clientWechat",t.$attrs,!1))],1),n("el-tab-pane",{staticStyle:{"text-align":"left"},attrs:{label:"其它"}},[n("clientOther",t._b({},"clientOther",t.$attrs,!1))],1)],1)],1)}),c=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{staticStyle:{"text-align":"left",padding:"0 20px"},attrs:{"label-position":"right",model:t.client,rules:t.clientRules,"label-width":"100px"}},["show"===t.OperateType?n("el-form-item",{attrs:{label:"客户端ID:",prop:"id"}},[n("el-input",{attrs:{disabled:""},model:{value:t.client.id,callback:function(e){t.$set(t.client,"id",e)},expression:"client.id"}})],1):t._e(),"show"===t.OperateType?n("el-form-item",{attrs:{label:"所属通道:",prop:"namespace"}},[n("el-input",{attrs:{disabled:""},model:{value:t.client.namespace,callback:function(e){t.$set(t.client,"namespace",e)},expression:"client.namespace"}})],1):t._e(),n("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_name,callback:function(e){t.$set(t.client,"client_name",e)},expression:"client.client_name"}})],1),n("el-form-item",{attrs:{label:"客户端描述:"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_description,callback:function(e){t.$set(t.client,"client_description",e)},expression:"client.client_description"}})],1),n("el-form-item",{attrs:{label:"客户端类型:"}},[n("el-input",{attrs:{disabled:""},model:{value:t.client.client_type,callback:function(e){t.$set(t.client,"client_type",e)},expression:"client.client_type"}})],1),"show"===t.OperateType?n("el-form-item",{attrs:{label:"是否激活:",prop:"is_active"}},[n("el-radio-group",{model:{value:t.client.is_active,callback:function(e){t.$set(t.client,"is_active",e)},expression:"client.is_active"}},[n("el-radio",{attrs:{label:!0}},[t._v("激活")]),n("el-radio",{attrs:{label:!1}},[t._v("未激活")])],1)],1):t._e(),n("el-divider",{attrs:{"content-position":"center"}},[t._v("机器人")]),n("el-form-item",{attrs:{label:"放行关键字:"}},[n("el-input",{attrs:{placeholder:"要和机器人界面设置的放行关键词保持一直"},model:{value:t.client.client_info.robot_keyword,callback:function(e){t.$set(t.client.client_info,"robot_keyword",e)},expression:"client.client_info.robot_keyword"}})],1),t._l(t.client.client_info.robot_url_list,(function(e,i){return n("div",{key:i},[n("el-form-item",{attrs:{label:"机器人URL:"}},[n("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"从钉钉上粘贴而来的机器人URL地址"},model:{value:e.url,callback:function(n){t.$set(e,"url",n)},expression:"list.url"}}),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{circle:"",icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(e){return t.input_delete(i)}}})],1)],1)})),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"text"},on:{click:t.input_add}},[t._v(" 再添加一个机器人 ")])],1),n("p",{attrs:{id:"text_stype"}},[t._v(" 此处可以添加多个机器人，推送消息时会从中随机挑选一个URL来使用，可以避免单个机器人消息推送时（每分钟）的次数限制，避免重要报警信息被漏送的可能。 ")]),n("br"),n("br"),"show"===this.OperateType?n("el-form-item",[n("el-button",{attrs:{type:"info",round:""},on:{click:t.updateClient}},[t._v("立即修改")]),n("el-button",{attrs:{type:"danger",round:""},on:{click:t.deleteClient}},[t._v("删除")])],1):"create"===this.OperateType?n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.createClient}},[t._v("立即创建")]),n("el-button",{on:{click:t.closeDrawer}},[t._v("取消")])],1):t._e()],2)},a=[],s=n("6cac"),u={name:"clientDingtalk",data:function(){return{client:{client_name:"",client_description:"",client_type:"dingtalk",is_active:!1,client_info:{robot_keyword:"",robot_url_list:[{url:""}]},typeDescription:"钉钉·机器人"},clientRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},props:{getClientList:Function,OneClientObject:Object,OperateType:String},methods:{updateClient:function(){},deleteClient:function(){var t=this;Object(s["a"])(this.$store.getters.getNamespace,this.OneClientObject.id,null).then((function(e){1===e.data.code?(t.$message.success("删除客户端成功..."),t.getClientList()):t.$message.error("删除失败...")})).catch((function(t){console.log(t)}))},createClient:function(){var t=this;Object(s["j"])(this.$store.getters.getNamespace,this.client).then((function(e){1===e.data.code?(t.$message.success("添加成功..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1)):(t.$message.error("添加失败..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1))})).catch((function(t){console.log(t)}))},input_add:function(){var t={url:""};this.client.client_info.robot_url_list.push(t);for(var e=0;e<this.client.client_info.robot_url_list.length;e++)console.log(this.client.client_info.robot_url_list[e])},input_delete:function(t){this.client.client_info.robot_url_list.splice(t,1)},closeDrawer:function(){this.getClientList(),this.$store.commit("updateDrawerStatus",!1)},initClientInfo:function(){"show"===this.OperateType?this.client=this.OneClientObject:console.log("123")}},created:function(){this.initClientInfo()},watch:{OneClientObject:{handler:function(t,e){console.log(t,e),"show"===this.OperateType?this.client=this.OneClientObject:console.log("222")},deep:!0}}},p=u,f=(n("d0f2"),n("2877")),d=Object(f["a"])(p,r,a,!1,null,"309e4972",null),b=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{staticStyle:{"text-align":"left"},attrs:{"label-position":t.labelPosition,"label-width":"100px",model:t.client,rules:t.wechatRules}},[n("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_name,callback:function(e){t.$set(t.client,"client_name",e)},expression:"client.client_name"}})],1),n("el-form-item",{attrs:{label:"客户端描述:"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_description,callback:function(e){t.$set(t.client,"client_description",e)},expression:"client.client_description"}})],1),n("el-form-item",{attrs:{label:"客户端类型:"}},[n("el-input",{attrs:{disabled:""},model:{value:t.client.typeDescription,callback:function(e){t.$set(t.client,"typeDescription",e)},expression:"client.typeDescription"}})],1),n("el-divider",{attrs:{"content-position":"center"}},[t._v("应用号")]),n("el-form-item",{attrs:{label:"企业ID:"}},[n("el-input",{attrs:{placeholder:"请联系企业微信管理员获取"},model:{value:t.client.client_info.corp_id,callback:function(e){t.$set(t.client.client_info,"corp_id",e)},expression:"client.client_info.corp_id"}})],1),n("el-form-item",{attrs:{label:"应用AgentId:"}},[n("el-input",{attrs:{placeholder:"请联系企业微信管理员获取"},model:{value:t.client.client_info.agent_id,callback:function(e){t.$set(t.client.client_info,"agent_id",e)},expression:"client.client_info.agent_id"}})],1),n("el-form-item",{attrs:{label:"应用Secret:"}},[n("el-input",{attrs:{placeholder:"请联系企业微信管理员获取","show-password":""},model:{value:t.client.client_info.secret,callback:function(e){t.$set(t.client.client_info,"secret",e)},expression:"client.client_info.secret"}})],1),n("el-form-item",{attrs:{label:"接收用户:"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"可以填写多个用户账号，用 | 分割开 （例如：aaa|bbb）"},model:{value:t.client.client_info.touser,callback:function(e){t.$set(t.client.client_info,"touser",e)},expression:"client.client_info.touser"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")]),n("el-button",{on:{click:t.closeDrawer}},[t._v("取消")])],1)],1)},_=[],h={name:"clientWechat",data:function(){return{labelPosition:"right",client:{client_name:"",client_description:"",client_type:"wechat",is_active:!1,client_info:{corp_id:"",agent_id:"",secret:"",touser:""},typeDescription:"企业微信·应用号"},wechatRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},props:{getClientList:Function},methods:{onSubmit:function(){var t=this,e=this.client.client_info.secret;e.length<=5?this.$message.error("应用Secret的输入长度不符合要求..."):Object(s["j"])(this.$store.getters.getNamespace,this.client).then((function(e){e.data.result?(t.$message.success("添加成功..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1)):(t.$message.error("添加失败..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1))})).catch((function(t){console.log(t)}))},closeDrawer:function(){this.getClientList(),this.$store.commit("updateDrawerStatus",!1)}}},v=h,g=Object(f["a"])(v,m,_,!1,null,"32eb6ed6",null),y=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("p",{staticClass:"authorStatement"},[t._v("GoMessage永久开源且免费，任何人都可以进行二次开发与封装...")]),n("br"),n("p",{staticClass:"authorStatement"},[t._v("平时只能用业余时间开发，更新进度可能比较慢，希望小伙伴们理解万岁...")]),n("br"),n("p",{staticClass:"authorStatement"},[t._v(" 如果您喜欢GoMessage，并且希望GoMessage能兼容对接到其它客户端，可直接联系我们进行反馈，我们会尽快满足小伙伴们的各种实际使用场景...")]),n("br"),n("p",{staticClass:"authorStatement"},[t._v("有问题直接提，互相学习，共同进步哈~ (*^__^*)")]),n("br"),n("el-divider",{attrs:{"content-position":"center"}},[t._v("常用联系方式")]),n("el-table",{attrs:{data:t.author}},[n("el-table-column",{attrs:{prop:"name",label:"名称",width:"100px"}}),n("el-table-column",{attrs:{prop:"wechat",label:"微信"}}),n("el-table-column",{attrs:{prop:"qq",label:"QQ"}})],1)],1)},x=[],$={name:"clientOther",data:function(){return{author:[{name:"古寒飞",wechat:"SPE3SRU3STAY",qq:"237663347"},{name:"yesuu",wechat:"ACFOLPTPZXIZ",qq:"791581230"}]}}},k=$,C=(n("3059"),Object(f["a"])(k,w,x,!1,null,"035975af",null)),S=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{staticStyle:{"text-align":"left"},attrs:{"label-position":t.labelPosition,"label-width":"100px",model:t.client,rules:t.feishuRules}},[n("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_name,callback:function(e){t.$set(t.client,"client_name",e)},expression:"client.client_name"}})],1),n("el-form-item",{attrs:{label:"客户端描述:"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_description,callback:function(e){t.$set(t.client,"client_description",e)},expression:"client.client_description"}})],1),n("el-form-item",{attrs:{label:"客户端类型:"}},[n("el-input",{attrs:{disabled:""},model:{value:t.client.typeDescription,callback:function(e){t.$set(t.client,"typeDescription",e)},expression:"client.typeDescription"}})],1),n("el-divider",{attrs:{"content-position":"center"}},[t._v("机器人")]),n("el-form-item",{attrs:{label:"标题名称:"}},[n("el-input",{attrs:{placeholder:"标题中要包含机器人的放行关键词"},model:{value:t.client.client_info.robot_keyword,callback:function(e){t.$set(t.client.client_info,"robot_keyword",e)},expression:"client.client_info.robot_keyword"}})],1),n("el-form-item",{attrs:{label:"标题颜色:"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.client.client_info.title_color,callback:function(e){t.$set(t.client.client_info,"title_color",e)},expression:"client.client_info.title_color"}},t._l(t.all_title_color,(function(t){return n("el-option",{key:t.color,attrs:{label:t.label,value:t.color}})})),1)],1),t._l(t.client.client_info.robot_url_list,(function(e,i){return n("div",{key:i},[n("el-form-item",{attrs:{label:"机器人URL:"}},[n("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"从飞书上粘贴而来的机器人URL地址"},model:{value:e.url,callback:function(n){t.$set(e,"url",n)},expression:"list.url"}}),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(e){return t.del(i)}}})],1)],1)})),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{type:"text",icon:"el-icon-plus",size:"mini"},on:{click:t.add}},[t._v("再添加一个机器人")])],1),n("p",{attrs:{id:"textStype"}},[t._v(" 此处可以添加多个机器人，推送消息时会从中随机挑选一个URL来使用，可以避免单个机器人消息推送时（每分钟）的次数限制，避免重要报警信息被漏送的可能。")]),n("br"),n("br"),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")]),n("el-button",{on:{click:t.closeDrawer}},[t._v("取消")])],1)],2)},D=[],L={name:"clientFeishu",data:function(){return{labelPosition:"right",client:{client_name:"",client_description:"",client_type:"feishu",is_active:!1,client_info:{robot_keyword:"",robot_url_list:[{url:""}],title_color:"grey"},typeDescription:"飞书·机器人"},feishuRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]},all_title_color:[{color:"grey",label:"灰色（默认）"},{color:"blue",label:"蓝色"},{color:"wathet",label:"浅蓝色"},{color:"turquoise",label:"松石绿"},{color:"green",label:"绿色"},{color:"yellow",label:"黄色"},{color:"orange",label:"橘色"},{color:"red",label:"红色"},{color:"carmine",label:"胭脂红"},{color:"violet",label:"紫罗兰色"},{color:"purple",label:"紫色"},{color:"indigo",label:"靛青"}]}},props:{getClientList:Function},methods:{onSubmit:function(){var t=this;Object(s["j"])(this.$store.getters.getNamespace,this.client).then((function(e){e.data.result?(t.$message.success("添加成功..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1)):(t.$message.error("添加失败..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1))})).catch((function(t){console.log(t)}))},add:function(){var t={url:""};this.client.client_info.robot_url_list.push(t);for(var e=0;e<this.client.client_info.robot_url_list.length;e++)console.log(this.client.client_info.robot_url_list[e])},del:function(t){this.client.client_info.robot_url_list.splice(t,1)},closeDrawer:function(){this.getClientList(),this.$store.commit("updateDrawerStatus",!1)}}},j=L,R=(n("5a5d"),Object(f["a"])(j,O,D,!1,null,"3b0f2a48",null)),P=R.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{staticStyle:{"text-align":"left"},attrs:{"label-position":t.labelPosition,model:t.client,rules:t.clientRules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_name,callback:function(e){t.$set(t.client,"client_name",e)},expression:"client.client_name"}})],1),n("el-form-item",{attrs:{label:"客户端描述:"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.client.client_description,callback:function(e){t.$set(t.client,"client_description",e)},expression:"client.client_description"}})],1),n("el-form-item",{attrs:{label:"客户端类型:"}},[n("el-input",{attrs:{disabled:""},model:{value:t.client.typeDescription,callback:function(e){t.$set(t.client,"typeDescription",e)},expression:"client.typeDescription"}})],1),n("el-divider",{attrs:{"content-position":"center"}},[t._v("机器人")]),t._l(t.client.client_info.robot_url_list,(function(e,i){return n("div",{key:i},[n("el-form-item",{attrs:{label:"机器人URL:"}},[n("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"机器人URL地址"},model:{value:e.url,callback:function(n){t.$set(e,"url",n)},expression:"list.url"}}),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{circle:"",icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(e){return t.del(i)}}})],1)],1)})),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"text"},on:{click:t.add}},[t._v("再添加一个机器人")])],1),n("p",{attrs:{id:"textStype"}},[t._v(" 此处可以添加多个机器人，推送消息时会从中随机挑选一个URL来使用，可以避免单个机器人消息推送时（每分钟）的次数限制，避免重要报警信息被漏送的可能。")]),n("br"),n("br"),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")]),n("el-button",{on:{click:t.closeDrawer}},[t._v("取消")])],1)],2)},T=[],F={name:"clientWechatRobot",data:function(){return{labelPosition:"right",client:{client_name:"",client_description:"",client_type:"wechat_robot",is_active:!1,client_info:{robot_keyword:"",robot_url_list:[{url:""}]},typeDescription:"企业微信·群机器人"},clientRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},props:{getClientList:Function},methods:{onSubmit:function(){var t=this;Object(s["j"])(this.$store.getters.getNamespace,this.client).then((function(e){1===e.data.code?(t.$message.success("添加成功..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1)):(t.$message.error("添加失败..."),t.getClientList(),t.$store.commit("updateDrawerStatus",!1))})).catch((function(t){console.log(t)}))},add:function(){var t={url:""};this.client.client_info.robot_url_list.push(t);for(var e=0;e<this.client.client_info.robot_url_list.length;e++)console.log(this.client.client_info.robot_url_list[e])},del:function(t){this.client.client_info.robot_url_list.splice(t,1)},closeDrawer:function(){this.getClientList(),this.$store.commit("updateDrawerStatus",!1)}}},G=F,I=(n("bdec"),Object(f["a"])(G,E,T,!1,null,"54f55088",null)),W=I.exports,A={name:"cDrawer",data:function(){return{tabPosition:"top"}},components:{clientDingtalk:b,clientWechat:y,clientOther:S,clientFeishu:P,clientWechatRobot:W},computed:{getDrawerStatus:function(){return this.$store.state.DrawerStatus}},methods:{handleClose:function(t){var e=this;this.$confirm("确认关闭？").then((function(n){console.log(n),e.$store.commit("updateDrawerStatus",!1),t()})).catch((function(t){console.log(t)}))}}},q=A,z=Object(f["a"])(q,o,c,!1,null,null,null),U=z.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-drawer",{attrs:{title:"客户端信息查看","destroy-on-close":!0,visible:t.isShow,"before-close":t.CloseBeforeFunc},on:{"update:visible":function(e){t.isShow=e}}},["dingtalk"===t.OneClientType?n("ClientDingtalk",t._b({},"ClientDingtalk",t.$attrs,!1)):"feishu"===t.OneClientType?n("ClientFeishu",t._b({},"ClientFeishu",t.$attrs,!1)):"wechat_robot"===t.OneClientType?n("ClientWechatRobot",t._b({},"ClientWechatRobot",t.$attrs,!1)):"wechat"===t.OneClientType?n("ClientWechat",t._b({},"ClientWechat",t.$attrs,!1)):t._e()],1)},M=[],B={name:"cDrawerOneDataInfo2",props:{isShow:Boolean,CloseBeforeFunc:Function,OneClientType:String},components:{ClientDingtalk:b,ClientFeishu:P,ClientWechatRobot:W,ClientWechat:y}},J=B,Q=Object(f["a"])(J,N,M,!1,null,null,null),Z=Q.exports,V={name:"ViewClient",data:function(){return{visibleStatus:!1,clientList:[],clientOneInfo:{id:null,client_name:null,client_description:null,is_active:null,client_type:"dingtalk",client_annotation:"",client_info:{}}}},components:{CDrawer:U,CDrawerOneDataInfo2:Z},methods:{getAnnotation:function(t){var e={dingtalk:"钉钉·机器人",wechat:"企业微信·应用号",wechat_robot:"企业微信·机器人",feishu:"飞书·机器人"};return e[t]},saveActiveStatus:function(){var t=this;this.clientList.forEach((function(e){!1===e.demo_data&&Object(s["o"])(t.$store.getters.getNamespace,e.id,e).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))})),this.$message.success("激活状态保存成功...")},addClient:function(){this.$store.commit("updateDrawerStatus",!0)},thisClose:function(){this.visibleStatus=!1},deleteOneClient:function(t,e){var n=this;if(console.log(e),e["demo_data"])console.log("进入到了这里"),e.splice(t,1);else{var i=e[t].id;console.log(e),Object(s["a"])(this.$store.getters.getNamespace,i,null).then((function(i){1===i.data.code?(n.$message.success("删除一行数据成功..."),e.splice(t,1)):n.$message.error("删除数据失败...")})).catch((function(t){console.log(t)}))}},getOneClient:function(t,e){var n=this,i=e[t].id;Object(s["d"])(this.$store.getters.getNamespace,i,null).then((function(t){console.log(t.data.result),n.clientOneInfo=t.data.result})).catch((function(t){console.log(t)})),this.visibleStatus=!0},GetClientList:function(){var t=this;Object(s["c"])(this.$store.getters.getNamespace,null).then((function(e){0===e.data.result.length?(console.log("数据库里没有数据"),t.$message.info("当前通道中，还没有添加客户端....")):(t.clientList=e.data.result,t.clientList.forEach((function(e){e.client_annotation=t.getAnnotation(e.client_type),e.demo_data=!1})))})).catch((function(t){console.log(t)}))}},created:function(){this.$store.commit("updateStepsActive",3),this.GetClientList()}},X=V,Y=(n("990f"),Object(f["a"])(X,i,l,!1,null,"1d0c25ee",null));e["default"]=Y.exports},"5a5d":function(t,e,n){"use strict";n("be10")},"5ba4":function(t,e,n){},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"6cac":function(t,e,n){"use strict";n.d(e,"k",(function(){return l})),n.d(e,"r",(function(){return o})),n.d(e,"s",(function(){return c})),n.d(e,"n",(function(){return r})),n.d(e,"q",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"m",(function(){return u})),n.d(e,"c",(function(){return p})),n.d(e,"j",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"o",(function(){return b})),n.d(e,"a",(function(){return m})),n.d(e,"e",(function(){return _})),n.d(e,"l",(function(){return h})),n.d(e,"f",(function(){return v})),n.d(e,"b",(function(){return g})),n.d(e,"p",(function(){return y})),n.d(e,"h",(function(){return w})),n.d(e,"i",(function(){return x}));var i=n("be3b"),l=function(t,e){return i["a"].Post("/go/"+t,e)},o=function(t,e){return i["a"].Get("/api/v1/"+t+"/json",e)},c=function(t,e){return i["a"].Get("/api/v1/"+t+"/vars",e)},r=function(t,e){return i["a"].Post("/api/v1/"+t+"/vars",e)},a=function(t,e){return i["a"].Get("/api/v1/"+t+"/flattening",e)},s=function(t,e){return i["a"].Get("/api/v1/"+t+"/template",e)},u=function(t,e){return i["a"].Post("/api/v1/"+t+"/template",e)},p=function(t,e){return i["a"].Get("/api/v1/"+t+"/client",e)},f=function(t,e){return i["a"].Post("/api/v1/"+t+"/client",e)},d=function(t,e,n){return i["a"].Get("/api/v1/"+t+"/client/"+e,n)},b=function(t,e,n){return i["a"].Put("/api/v1/"+t+"/client/"+e,n)},m=function(t,e,n){return i["a"].Delete("/api/v1/"+t+"/client/"+e,n)},_=function(t){return i["a"].Get("/api/v1/namespace",t)},h=function(t){return i["a"].Post("/api/v1/namespace",t)},v=function(t,e){return i["a"].Get("/api/v1/namespace/"+t,e)},g=function(t){return i["a"].Delete("/api/v1/namespace/"+t)},y=function(t,e){return i["a"].Put("/api/v1/namespace/"+t,e)},w=function(t){return i["a"].Post("/auth/login",t)},x=function(t){return i["a"].Post("/auth/logout",t)}},"7f7f":function(t,e,n){},8418:function(t,e,n){"use strict";var i=n("a04b"),l=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var c=i(e);c in t?l.f(t,c,o(0,n)):t[c]=n}},"95af":function(t,e,n){},"990f":function(t,e,n){"use strict";n("7f7f")},a434:function(t,e,n){"use strict";var i=n("23e7"),l=n("da84"),o=n("23cb"),c=n("5926"),r=n("07fa"),a=n("7b0b"),s=n("65f0"),u=n("8418"),p=n("1dde"),f=p("splice"),d=l.TypeError,b=Math.max,m=Math.min,_=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,i,l,p,f,v,g=a(this),y=r(g),w=o(t,y),x=arguments.length;if(0===x?n=i=0:1===x?(n=0,i=y-w):(n=x-2,i=m(b(c(e),0),y-w)),y+n-i>_)throw d(h);for(l=s(g,i),p=0;p<i;p++)f=w+p,f in g&&u(l,p,g[f]);if(l.length=i,n<i){for(p=w;p<y-i;p++)f=p+i,v=p+n,f in g?g[v]=g[f]:delete g[v];for(p=y;p>y-i+n;p--)delete g[p-1]}else if(n>i)for(p=y-i;p>w;p--)f=p+i-1,v=p+n-1,f in g?g[v]=g[f]:delete g[v];for(p=0;p<n;p++)g[p+w]=arguments[p+2];return g.length=y-i+n,l}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var i=n("0366"),l=n("e330"),o=n("44ad"),c=n("7b0b"),r=n("07fa"),a=n("65f0"),s=l([].push),u=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,p=6==t,f=7==t,d=5==t||p;return function(b,m,_,h){for(var v,g,y=c(b),w=o(y),x=i(m,_),$=r(w),k=0,C=h||a,S=e?C(b,$):n||f?C(b,0):void 0;$>k;k++)if((d||k in w)&&(v=w[k],g=x(v,k,y),t))if(e)S[k]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:s(S,v)}else switch(t){case 4:return!1;case 7:s(S,v)}return p?-1:l||u?u:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bdec:function(t,e,n){"use strict";n("5ba4")},be10:function(t,e,n){},d0f2:function(t,e,n){"use strict";n("ee12")},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},ee12:function(t,e,n){}}]);
//# sourceMappingURL=chunk-fdb339ac.dfc40c0a.js.map