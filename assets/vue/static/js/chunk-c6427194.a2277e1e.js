(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6427194"],{"279e":function(e,t,l){},"346f":function(e,t,l){"use strict";l("4b07")},"4b07":function(e,t,l){},"4e61":function(e,t,l){"use strict";l("279e")},9671:function(e,t,l){"use strict";l("db33")},a768:function(e,t,l){"use strict";l("f167")},d24a:function(e,t,l){"use strict";l("ef14")},db33:function(e,t,l){},ef14:function(e,t,l){},efba:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e._self._c;return t("el-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[t("el-col",{attrs:{offset:4,span:16}},[t("CDrawerAll",{attrs:{cli_GetClientList:e.GetClientList,cli_OperateType:"create"}}),t("CDrawerOne",{attrs:{cd_isShow:e.visibleStatus,cd_closeBeforeFunc:e.thisClose,cd_clientType:e.clientOneInfo.client_type,cli_OneClientObject:e.clientOneInfo,cli_OperateType:"show",cli_GetClientList:e.GetClientList}}),t("el-card",{staticStyle:{"box-shadow":"#ccc 0px 30px 30px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticStyle:{"padding-left":"50px"}},[e._v("客户端 · 列表")]),t("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.GetClientList}},[e._v("刷新列表")])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{border:!0,data:e.clientList,"header-cell-style":{background:"#2f2f35",color:"#fff"},stripe:!0}},[t("el-table-column",{attrs:{label:"客户端名称",prop:"client_name"}}),t("el-table-column",{attrs:{label:"客户端描述",prop:"client_description"}}),t("el-table-column",{attrs:{label:"客户端类型",prop:"client_annotation"}}),t("el-table-column",{attrs:{label:"是否激活",prop:"is_active"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-checkbox",{on:{change:e.saveActiveStatus},model:{value:l.row.is_active,callback:function(t){e.$set(l.row,"is_active",t)},expression:"scope.row.is_active"}},[e._v("激活")])]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(t){return t.preventDefault(),e.getOneClient(l.$index,e.clientList)}}},[e._v("详情 ")]),t("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(t){return t.preventDefault(),e.deleteOneClient(l.$index,e.clientList)}}},[e._v(" 移除 ")])]}}])})],1),t("br"),t("br"),t("br"),t("el-button",{attrs:{round:"",type:"primary"},on:{click:e.addClient}},[e._v("添加新客户端")])],1)],1)],1)},n=[],c=function(){var e=this,t=e._self._c;return t("el-drawer",{attrs:{title:"添加客户端",visible:e.getDrawerStatus,"before-close":e.handleClose,"destroy-on-close":!0,size:"40%"}},[t("el-tabs",{staticStyle:{margin:"1px 20px"},attrs:{"tab-position":"top"}},[t("el-tab-pane",{attrs:{label:"钉钉 · 群机器人"}},[t("clientDingtalk",e._b({},"clientDingtalk",e.$attrs,!1))],1),t("el-tab-pane",{attrs:{label:"飞书 · 群机器人"}},[t("clientFeishu",e._b({},"clientFeishu",e.$attrs,!1))],1),t("el-tab-pane",{attrs:{label:"企微 · 群机器人"}},[t("clientWechatRobot",e._b({},"clientWechatRobot",e.$attrs,!1))],1),t("el-tab-pane",{attrs:{label:"企微 · 应用号"}},[t("clientWechat",e._b({},"clientWechat",e.$attrs,!1))],1),t("el-tab-pane",{staticStyle:{"text-align":"left"},attrs:{label:"其它"}},[t("clientOther",e._b({},"clientOther",e.$attrs,!1))],1)],1)],1)},s=[],a=function(){var e=this,t=e._self._c;return t("el-form",{staticStyle:{"text-align":"left",padding:"0 20px"},attrs:{"label-position":"right",model:e.client,rules:e.clientRules,"label-width":"100px"}},["show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"客户端ID:",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.id,callback:function(t){e.$set(e.client,"id",t)},expression:"client.id"}})],1):e._e(),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"所属通道:",prop:"namespace"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.namespace,callback:function(t){e.$set(e.client,"namespace",t)},expression:"client.namespace"}})],1):e._e(),t("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_name,callback:function(t){e.$set(e.client,"client_name",t)},expression:"client.client_name"}})],1),t("el-form-item",{attrs:{label:"客户端描述:"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_description,callback:function(t){e.$set(e.client,"client_description",t)},expression:"client.client_description"}})],1),t("el-form-item",{attrs:{label:"客户端类型:"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.client_type,callback:function(t){e.$set(e.client,"client_type",t)},expression:"client.client_type"}})],1),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"是否激活:",prop:"is_active"}},[t("el-radio-group",{model:{value:e.client.is_active,callback:function(t){e.$set(e.client,"is_active",t)},expression:"client.is_active"}},[t("el-radio",{attrs:{label:!0}},[e._v("激活")]),t("el-radio",{attrs:{label:!1}},[e._v("未激活")])],1)],1):e._e(),t("el-divider",{attrs:{"content-position":"center"}},[e._v("机器人")]),t("el-form-item",{attrs:{label:"放行关键字:"}},[t("el-input",{attrs:{placeholder:"要和机器人界面设置的放行关键词保持一直"},model:{value:e.client.client_info.robot_keyword,callback:function(t){e.$set(e.client.client_info,"robot_keyword",t)},expression:"client.client_info.robot_keyword"}})],1),e._l(e.client.client_info.robot_url_list,(function(l,i){return t("div",{key:i},[t("el-form-item",{attrs:{label:"机器人URL:"}},[t("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"从钉钉上粘贴而来的机器人URL地址"},model:{value:l.url,callback:function(t){e.$set(l,"url",t)},expression:"list.url"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{circle:"",icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(t){return e.input_delete(i)}}})],1)],1)})),t("div",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"text"},on:{click:e.input_add}},[e._v(" 再添加一个机器人 ")])],1),t("p",{attrs:{id:"text_stype"}},[e._v(" 此处可以添加多个机器人，推送消息时会从中随机挑选一个URL来使用，可以避免单个机器人消息推送时（每分钟）的次数限制，避免重要报警信息被漏送的可能。 ")]),t("br"),t("br"),"show"===this.cli_OperateType?t("el-form-item",[t("el-button",{attrs:{type:"info",round:""},on:{click:e.updateClient}},[e._v("立即修改")]),t("el-button",{attrs:{type:"danger",round:""},on:{click:e.deleteClient}},[e._v("删除")])],1):t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.createClient}},[e._v("立即创建")]),t("el-button",{on:{click:e.closeDrawer}},[e._v("取消")])],1)],2)},o=[],r=(l("14d9"),l("6cac")),u={name:"clientDingtalk",data(){return{client:{client_name:"",client_description:"",client_type:"dingtalk",is_active:!1,client_info:{robot_url_list:[{url:""}],robot_keyword:""},typeDescription:"钉钉·机器人"},clientRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},props:{cli_GetClientList:Function,cli_OneClientObject:Object,cli_OperateType:String},methods:{createClient:function(){Object(r["j"])(this.$store.getters.getNamespace,this.client).then(e=>{1===e.data.code?(this.$message.success("添加成功..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)):(this.$message.error("添加失败..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1))}).catch(e=>{console.log(e)})},updateClient:function(){Object(r["o"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,this.client).then(e=>{1===e.data.code&&(this.$message.success("数据更新成功"),this.cli_GetClientList())}).catch(e=>{console.log(e)})},deleteClient:function(){Object(r["a"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,null).then(e=>{1===e.data.code?(this.$message.success("删除客户端成功..."),this.cli_GetClientList()):this.$message.error("删除失败...")}).catch(e=>{console.log(e)})},input_add:function(){let e={url:""};this.client.client_info.robot_url_list.push(e);for(let t=0;t<this.client.client_info.robot_url_list.length;t++)console.log(this.client.client_info.robot_url_list[t])},input_delete:function(e){this.client.client_info.robot_url_list.splice(e,1)},closeDrawer:function(){this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)}},created(){"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},watch:{cli_OneClientObject:{handler(e,t){console.log(e,t),"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},deep:!0}}},p=u,d=(l("346f"),l("2877")),_=Object(d["a"])(p,a,o,!1,null,"a57c85b2",null),h=_.exports,b=function(){var e=this,t=e._self._c;return t("el-form",{staticStyle:{"text-align":"left"},attrs:{"label-position":"right","label-width":"100px",model:e.client,rules:e.wechatRules}},["show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"客户端ID:",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.id,callback:function(t){e.$set(e.client,"id",t)},expression:"client.id"}})],1):e._e(),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"所属通道:",prop:"namespace"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.namespace,callback:function(t){e.$set(e.client,"namespace",t)},expression:"client.namespace"}})],1):e._e(),t("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_name,callback:function(t){e.$set(e.client,"client_name",t)},expression:"client.client_name"}})],1),t("el-form-item",{attrs:{label:"客户端描述:"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_description,callback:function(t){e.$set(e.client,"client_description",t)},expression:"client.client_description"}})],1),t("el-form-item",{attrs:{label:"客户端类型:"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.client_type,callback:function(t){e.$set(e.client,"client_type",t)},expression:"client.client_type"}})],1),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"是否激活:",prop:"is_active"}},[t("el-radio-group",{model:{value:e.client.is_active,callback:function(t){e.$set(e.client,"is_active",t)},expression:"client.is_active"}},[t("el-radio",{attrs:{label:!0}},[e._v("激活")]),t("el-radio",{attrs:{label:!1}},[e._v("未激活")])],1)],1):e._e(),t("el-divider",{attrs:{"content-position":"center"}},[e._v("应用号")]),t("el-form-item",{attrs:{label:"企业ID:"}},[t("el-input",{attrs:{placeholder:"请联系企业微信管理员获取"},model:{value:e.client.client_info.corp_id,callback:function(t){e.$set(e.client.client_info,"corp_id",t)},expression:"client.client_info.corp_id"}})],1),t("el-form-item",{attrs:{label:"应用AgentId:"}},[t("el-input",{attrs:{placeholder:"请联系企业微信管理员获取"},model:{value:e.client.client_info.agent_id,callback:function(t){e.$set(e.client.client_info,"agent_id",t)},expression:"client.client_info.agent_id"}})],1),t("el-form-item",{attrs:{label:"应用Secret:"}},[t("el-input",{attrs:{placeholder:"请联系企业微信管理员获取","show-password":""},model:{value:e.client.client_info.secret,callback:function(t){e.$set(e.client.client_info,"secret",t)},expression:"client.client_info.secret"}})],1),t("el-form-item",{attrs:{label:"接收用户:"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"可以填写多个用户账号，用 | 分割开 （例如：aaa|bbb）"},model:{value:e.client.client_info.touser,callback:function(t){e.$set(e.client.client_info,"touser",t)},expression:"client.client_info.touser"}})],1),t("br"),t("br"),"show"===this.cli_OperateType?t("el-form-item",[t("el-button",{attrs:{type:"info",round:""},on:{click:e.updateClient}},[e._v("立即修改")]),t("el-button",{attrs:{type:"danger",round:""},on:{click:e.deleteClient}},[e._v("删除")])],1):t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.createClient}},[e._v("立即创建")]),t("el-button",{on:{click:e.closeDrawer}},[e._v("取消")])],1)],1)},m=[],f={name:"clientWechat",data(){return{client:{client_name:"",client_description:"",client_type:"wechat",is_active:!1,client_info:{corp_id:"",agent_id:"",secret:"",touser:""},typeDescription:"企业微信·应用号"},wechatRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},props:{cli_GetClientList:Function,cli_OneClientObject:Object,cli_OperateType:String},methods:{createClient:function(){let e=this.client.client_info.secret;e.length<=5?this.$message.error("应用Secret的输入长度不符合要求..."):Object(r["j"])(this.$store.getters.getNamespace,this.client).then(e=>{e.data.result?(this.$message.success("添加成功..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)):(this.$message.error("添加失败..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1))}).catch(e=>{console.log(e)})},updateClient:function(){Object(r["o"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,this.client).then(e=>{1===e.data.code&&(this.$message.success("数据更新成功"),this.cli_GetClientList())}).catch(e=>{console.log(e)})},deleteClient:function(){Object(r["a"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,null).then(e=>{1===e.data.code?(this.$message.success("删除客户端成功..."),this.cli_GetClientList()):this.$message.error("删除失败...")}).catch(e=>{console.log(e)})},closeDrawer:function(){this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)}},created(){"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},watch:{cli_OneClientObject:{handler(e,t){console.log(e,t),"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},deep:!0}}},g=f,v=Object(d["a"])(g,b,m,!1,null,"1e0d1742",null),y=v.exports,O=function(){var e=this,t=e._self._c;return t("div",[t("br"),t("p",{staticClass:"authorStatement"},[e._v("GoMessage永久开源且免费，任何人都可以进行二次开发与封装...")]),t("br"),t("p",{staticClass:"authorStatement"},[e._v("平时只能用业余时间开发，更新进度可能比较慢，希望小伙伴们理解万岁...")]),t("br"),t("p",{staticClass:"authorStatement"},[e._v(" 如果您喜欢GoMessage，并且希望GoMessage能兼容对接到其它客户端，可直接联系我们进行反馈，我们会尽快满足小伙伴们的各种实际使用场景...")]),t("br"),t("p",{staticClass:"authorStatement"},[e._v("有问题直接提，互相学习，共同进步哈~ (*^__^*)")]),t("br"),t("el-divider",{attrs:{"content-position":"center"}},[e._v("常用联系方式")]),t("el-table",{attrs:{data:e.author}},[t("el-table-column",{attrs:{prop:"name",label:"名称",width:"100px"}}),t("el-table-column",{attrs:{prop:"wechat",label:"微信"}}),t("el-table-column",{attrs:{prop:"qq",label:"QQ"}})],1)],1)},w=[],C={name:"clientOther",data(){return{author:[{name:"古寒飞",wechat:"SPE3SRU3STAY",qq:"237663347"},{name:"yesuu",wechat:"ACFOLPTPZXIZ",qq:"791581230"}]}}},$=C,k=(l("4e61"),Object(d["a"])($,O,w,!1,null,"035975af",null)),x=k.exports,S=function(){var e=this,t=e._self._c;return t("el-form",{staticStyle:{"text-align":"left",padding:"0 20px"},attrs:{"label-position":"right","label-width":"100px",model:e.client,rules:e.feishuRules}},["show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"客户端ID:",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.id,callback:function(t){e.$set(e.client,"id",t)},expression:"client.id"}})],1):e._e(),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"所属通道:",prop:"namespace"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.namespace,callback:function(t){e.$set(e.client,"namespace",t)},expression:"client.namespace"}})],1):e._e(),t("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_name,callback:function(t){e.$set(e.client,"client_name",t)},expression:"client.client_name"}})],1),t("el-form-item",{attrs:{label:"客户端描述:"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_description,callback:function(t){e.$set(e.client,"client_description",t)},expression:"client.client_description"}})],1),t("el-form-item",{attrs:{label:"客户端类型:"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.client_type,callback:function(t){e.$set(e.client,"client_type",t)},expression:"client.client_type"}})],1),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"是否激活:",prop:"is_active"}},[t("el-radio-group",{model:{value:e.client.is_active,callback:function(t){e.$set(e.client,"is_active",t)},expression:"client.is_active"}},[t("el-radio",{attrs:{label:!0}},[e._v("激活")]),t("el-radio",{attrs:{label:!1}},[e._v("未激活")])],1)],1):e._e(),t("el-divider",{attrs:{"content-position":"center"}},[e._v("机器人")]),t("el-form-item",{attrs:{label:"标题名称:"}},[t("el-input",{attrs:{placeholder:"标题中要包含机器人的放行关键词"},model:{value:e.client.client_info.robot_keyword,callback:function(t){e.$set(e.client.client_info,"robot_keyword",t)},expression:"client.client_info.robot_keyword"}})],1),t("el-form-item",{attrs:{label:"标题颜色:"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.client.client_info.title_color,callback:function(t){e.$set(e.client.client_info,"title_color",t)},expression:"client.client_info.title_color"}},e._l(e.all_title_color,(function(e){return t("el-option",{key:e.color,attrs:{label:e.label,value:e.color}})})),1)],1),e._l(e.client.client_info.robot_url_list,(function(l,i){return t("div",{key:i},[t("el-form-item",{attrs:{label:"机器人URL:"}},[t("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"从飞书上粘贴而来的机器人URL地址"},model:{value:l.url,callback:function(t){e.$set(l,"url",t)},expression:"list.url"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(t){return e.del(i)}}})],1)],1)})),t("div",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{type:"text",icon:"el-icon-plus",size:"mini"},on:{click:e.add}},[e._v("再添加一个机器人")])],1),t("p",{attrs:{id:"textStype"}},[e._v(" 此处可以添加多个机器人，推送消息时会从中随机挑选一个URL来使用，可以避免单个机器人消息推送时（每分钟）的次数限制，避免重要报警信息被漏送的可能。 ")]),t("br"),t("br"),"show"===this.cli_OperateType?t("el-form-item",[t("el-button",{attrs:{type:"info",round:""},on:{click:e.updateClient}},[e._v("立即修改")]),t("el-button",{attrs:{type:"danger",round:""},on:{click:e.deleteClient}},[e._v("删除")])],1):t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.createClient}},[e._v("立即创建")]),t("el-button",{on:{click:e.closeDrawer}},[e._v("取消")])],1)],2)},j=[],D={name:"clientFeishu",data(){return{client:{client_name:"",client_description:"",client_type:"feishu",is_active:!1,client_info:{robot_keyword:"",robot_url_list:[{url:""}],title_color:"grey"},typeDescription:"飞书·机器人"},feishuRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]},all_title_color:[{color:"grey",label:"灰色（默认）"},{color:"blue",label:"蓝色"},{color:"wathet",label:"浅蓝色"},{color:"turquoise",label:"松石绿"},{color:"green",label:"绿色"},{color:"yellow",label:"黄色"},{color:"orange",label:"橘色"},{color:"red",label:"红色"},{color:"carmine",label:"胭脂红"},{color:"violet",label:"紫罗兰色"},{color:"purple",label:"紫色"},{color:"indigo",label:"靛青"}]}},props:{cli_GetClientList:Function,cli_OneClientObject:Object,cli_OperateType:String},methods:{createClient:function(){Object(r["j"])(this.$store.getters.getNamespace,this.client).then(e=>{1===e.data.code?(this.$message.success("添加成功..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)):(this.$message.error("添加失败..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1))}).catch(e=>{console.log(e)})},updateClient:function(){Object(r["o"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,this.client).then(e=>{1===e.data.code&&(this.$message.success("数据更新成功"),this.cli_GetClientList())}).catch(e=>{console.log(e)})},deleteClient:function(){Object(r["a"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,null).then(e=>{1===e.data.code?(this.$message.success("删除客户端成功..."),this.cli_GetClientList()):this.$message.error("删除失败...")}).catch(e=>{console.log(e)})},add:function(){let e={url:""};this.client.client_info.robot_url_list.push(e);for(let t=0;t<this.client.client_info.robot_url_list.length;t++)console.log(this.client.client_info.robot_url_list[t])},del:function(e){this.client.client_info.robot_url_list.splice(e,1)},closeDrawer:function(){this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)}},created(){"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},watch:{cli_OneClientObject:{handler(e,t){console.log(e,t),"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},deep:!0}}},L=D,T=(l("d24a"),Object(d["a"])(L,S,j,!1,null,"578f97ca",null)),G=T.exports,R=function(){var e=this,t=e._self._c;return t("el-form",{staticStyle:{"text-align":"left",padding:"0 20px"},attrs:{"label-position":"right",model:e.client,rules:e.clientRules,"label-width":"100px"}},["show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"客户端ID:",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.id,callback:function(t){e.$set(e.client,"id",t)},expression:"client.id"}})],1):e._e(),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"所属通道:",prop:"namespace"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.namespace,callback:function(t){e.$set(e.client,"namespace",t)},expression:"client.namespace"}})],1):e._e(),t("el-form-item",{attrs:{label:"客户端名称:",prop:"client_name"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_name,callback:function(t){e.$set(e.client,"client_name",t)},expression:"client.client_name"}})],1),t("el-form-item",{attrs:{label:"客户端描述:"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.client.client_description,callback:function(t){e.$set(e.client,"client_description",t)},expression:"client.client_description"}})],1),t("el-form-item",{attrs:{label:"客户端类型:"}},[t("el-input",{attrs:{disabled:""},model:{value:e.client.client_type,callback:function(t){e.$set(e.client,"client_type",t)},expression:"client.client_type"}})],1),"show"===e.cli_OperateType?t("el-form-item",{attrs:{label:"是否激活:",prop:"is_active"}},[t("el-radio-group",{model:{value:e.client.is_active,callback:function(t){e.$set(e.client,"is_active",t)},expression:"client.is_active"}},[t("el-radio",{attrs:{label:!0}},[e._v("激活")]),t("el-radio",{attrs:{label:!1}},[e._v("未激活")])],1)],1):e._e(),t("el-divider",{attrs:{"content-position":"center"}},[e._v("机器人")]),e._l(e.client.client_info.robot_url_list,(function(l,i){return t("div",{key:i},[t("el-form-item",{attrs:{label:"机器人URL:"}},[t("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"机器人URL地址"},model:{value:l.url,callback:function(t){e.$set(l,"url",t)},expression:"list.url"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{circle:"",icon:"el-icon-delete",size:"mini",type:"danger"},on:{click:function(t){return e.del(i)}}})],1)],1)})),t("div",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"text"},on:{click:e.add}},[e._v("再添加一个机器人")])],1),t("p",{attrs:{id:"textStype"}},[e._v(" 此处可以添加多个机器人，推送消息时会从中随机挑选一个URL来使用，可以避免单个机器人消息推送时（每分钟）的次数限制，避免重要报警信息被漏送的可能。 ")]),t("br"),t("br"),"show"===this.cli_OperateType?t("el-form-item",[t("el-button",{attrs:{type:"info",round:""},on:{click:e.updateClient}},[e._v("立即修改")]),t("el-button",{attrs:{type:"danger",round:""},on:{click:e.deleteClient}},[e._v("删除")])],1):t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.createClient}},[e._v("立即创建")]),t("el-button",{on:{click:e.closeDrawer}},[e._v("取消")])],1)],2)},F=[],N={name:"clientWechatRobot",data(){return{client:{client_name:"",client_description:"",client_type:"wechat_robot",is_active:!1,client_info:{robot_keyword:"",robot_url_list:[{url:""}]},typeDescription:"企业微信·群机器人"},clientRules:{client_name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},props:{cli_GetClientList:Function,cli_OneClientObject:Object,cli_OperateType:String},methods:{createClient:function(){Object(r["j"])(this.$store.getters.getNamespace,this.client).then(e=>{1===e.data.code?(this.$message.success("添加成功..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)):(this.$message.error("添加失败..."),this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1))}).catch(e=>{console.log(e)})},updateClient:function(){Object(r["o"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,this.client).then(e=>{1===e.data.code&&(this.$message.success("数据更新成功"),this.cli_GetClientList())}).catch(e=>{console.log(e)})},deleteClient:function(){Object(r["a"])(this.$store.getters.getNamespace,this.cli_OneClientObject.id,null).then(e=>{1===e.data.code?(this.$message.success("删除客户端成功..."),this.cli_GetClientList()):this.$message.error("删除失败...")}).catch(e=>{console.log(e)})},add:function(){let e={url:""};this.client.client_info.robot_url_list.push(e);for(let t=0;t<this.client.client_info.robot_url_list.length;t++)console.log(this.client.client_info.robot_url_list[t])},del:function(e){this.client.client_info.robot_url_list.splice(e,1)},closeDrawer:function(){this.cli_GetClientList(),this.$store.commit("updateDrawerStatus",!1)}},created(){"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},watch:{cli_OneClientObject:{handler(e,t){console.log(e,t),"show"===this.cli_OperateType&&(this.client=this.cli_OneClientObject)},deep:!0}}},W=N,q=(l("9671"),Object(d["a"])(W,R,F,!1,null,"50c4de2d",null)),A=q.exports,I={name:"cDrawerAll",components:{clientDingtalk:h,clientWechat:y,clientOther:x,clientFeishu:G,clientWechatRobot:A},computed:{getDrawerStatus:function(){return this.$store.state.DrawerStatus}},methods:{handleClose(e){this.$confirm("确认关闭？").then(t=>{console.log(t),this.$store.commit("updateDrawerStatus",!1),e()}).catch(e=>{console.log(e)})}}},z=I,U=Object(d["a"])(z,c,s,!1,null,null,null),B=U.exports,E=function(){var e=this,t=e._self._c;return t("el-drawer",{attrs:{title:"客户端信息查看","destroy-on-close":!0,visible:e.cd_isShow,"before-close":e.cd_closeBeforeFunc},on:{"update:visible":function(t){e.cd_isShow=t}}},["dingtalk"===e.cd_clientType?t("ClientDingtalk",e._b({},"ClientDingtalk",e.$attrs,!1)):"feishu"===e.cd_clientType?t("ClientFeishu",e._b({},"ClientFeishu",e.$attrs,!1)):"wechat_robot"===e.cd_clientType?t("ClientWechatRobot",e._b({},"ClientWechatRobot",e.$attrs,!1)):"wechat"===e.cd_clientType?t("ClientWechat",e._b({},"ClientWechat",e.$attrs,!1)):e._e()],1)},M=[],P={name:"cDrawerOne",props:{cd_isShow:Boolean,cd_closeBeforeFunc:Function,cd_clientType:String},components:{ClientDingtalk:h,ClientFeishu:G,ClientWechatRobot:A,ClientWechat:y}},J=P,Q=Object(d["a"])(J,E,M,!1,null,null,null),Z=Q.exports,V={name:"ViewClient",data(){return{visibleStatus:!1,clientList:[],clientOneInfo:{id:null,client_name:null,client_description:null,is_active:null,client_type:"dingtalk",client_annotation:"",client_info:{}}}},components:{CDrawerAll:B,CDrawerOne:Z},methods:{getAnnotation:function(e){let t={dingtalk:"钉钉·机器人",wechat:"企业微信·应用号",wechat_robot:"企业微信·机器人",feishu:"飞书·机器人"};return t[e]},saveActiveStatus:function(){this.clientList.forEach(e=>{!1===e.demo_data&&Object(r["p"])(this.$store.getters.getNamespace,e.id,e).then(e=>{console.log(e.data)}).catch(e=>{console.log(e)})}),this.$message.success("激活状态保存成功...")},addClient:function(){this.$store.commit("updateDrawerStatus",!0)},thisClose:function(){this.visibleStatus=!1},deleteOneClient(e,t){if(console.log(t),t["demo_data"])console.log("进入到了这里"),t.splice(e,1);else{let l=t[e].id;console.log(t),Object(r["a"])(this.$store.getters.getNamespace,l,null).then(l=>{1===l.data.code?(this.$message.success("删除一行数据成功..."),t.splice(e,1)):this.$message.error("删除数据失败...")}).catch(e=>{console.log(e)})}},getOneClient:function(e,t){let l=t[e].id;Object(r["d"])(this.$store.getters.getNamespace,l,null).then(e=>{console.log(e.data.result),this.clientOneInfo=e.data.result}).catch(e=>{console.log(e)}),this.visibleStatus=!0},GetClientList:function(){Object(r["c"])(this.$store.getters.getNamespace,null).then(e=>{0===e.data.result.length?(console.log("数据库里没有数据"),this.$message.info("当前通道中，还没有添加客户端....")):(this.clientList=e.data.result,this.clientList.forEach(e=>{e.client_annotation=this.getAnnotation(e.client_type),e.demo_data=!1}))}).catch(e=>{console.log(e)})}},created(){this.$store.commit("updateStepsActive",3),this.GetClientList()}},X=V,Y=(l("a768"),Object(d["a"])(X,i,n,!1,null,"682ed734",null));t["default"]=Y.exports},f167:function(e,t,l){}}]);
//# sourceMappingURL=chunk-c6427194.a2277e1e.js.map