(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bfd1f34"],{"0c13":function(e,t,o){"use strict";o("89da")},2017:function(e,t,o){"use strict";o("cafe")},"89da":function(e,t,o){},"9ed6":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{directives:[{name:"show",rawName:"v-show",value:0==e.showIndex,expression:"showIndex==0"}],ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"}),o("el-form-item",{staticStyle:{"background-color":"#E8F0FE"},attrs:{prop:"mobile"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"mobile",attrs:{placeholder:"请输入手机号",name:"mobile",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"11",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.mobile,callback:function(t){e.$set(e.loginForm,"mobile",t)},expression:"loginForm.mobile"}})],1),o("el-form-item",{staticStyle:{"background-color":"#E8F0FE"},attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{ref:"password",attrs:{placeholder:"请输入密码",name:"password",minlength:"4",tabindex:"2","auto-complete":"on",type:e.passwordType},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),o("el-button",{staticStyle:{width:"100%",margin:"10px 0"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")]),o("el-button",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._v("注册")])],1),o("el-form",{directives:[{name:"show",rawName:"v-show",value:1==e.showIndex,expression:"showIndex==1"}],ref:"invitForm",staticClass:"login-form",attrs:{model:e.invitForm,rules:e.invitRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("注册")])]),o("el-form-item",{staticStyle:{"background-color":"#E8F0FE"},attrs:{prop:"mobile"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"mobile",attrs:{placeholder:"请输入手机号",name:"mobile",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"11",tabindex:"1","auto-complete":"on"},model:{value:e.invitForm.mobile,callback:function(t){e.$set(e.invitForm,"mobile",t)},expression:"invitForm.mobile"}})],1),o("el-form-item",{staticStyle:{"background-color":"#E8F0FE"},attrs:{prop:"invite_code"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{ref:"invite_code",attrs:{placeholder:"请输入邀请码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextStep(t)}},model:{value:e.invitForm.invite_code,callback:function(t){e.$set(e.invitForm,"invite_code",t)},expression:"invitForm.invite_code"}})],1),o("el-button",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.nextStep(t)}}},[e._v("下一步")])],1),o("el-form",{directives:[{name:"show",rawName:"v-show",value:2==e.showIndex,expression:"showIndex==2"}],ref:"registerForm",staticClass:"login-form",attrs:{model:e.registerForm,rules:e.registerRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("注册")])]),o("el-form-item",{staticStyle:{"background-color":"#E8F0FE"},attrs:{prop:"mobile"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"mobile",attrs:{placeholder:"请输入手机号",name:"mobile",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"11",tabindex:"1","auto-complete":"on",readonly:""},model:{value:e.registerForm.mobile,callback:function(t){e.$set(e.registerForm,"mobile",t)},expression:"registerForm.mobile"}})],1),o("el-form-item",{staticStyle:{"background-color":"#E8F0FE"},attrs:{prop:"reg_code"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{ref:"reg_code",staticStyle:{width:"50%"},attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"4",placeholder:"请输入验证码",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextStep(t)}},model:{value:e.registerForm.reg_code,callback:function(t){e.$set(e.registerForm,"reg_code",t)},expression:"registerForm.reg_code"}}),o("el-button",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticStyle:{float:"right","margin-top":"6px"},attrs:{type:"primary"},on:{click:e.getCode}},[e._v("获取验证码")]),o("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],staticStyle:{float:"right","margin-top":"6px",width:"112px"},attrs:{disabled:""}},[e._v(e._s(e.count)+" s")])],1),o("el-form-item",{staticStyle:{"background-color":"#E8F0FE"},attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{ref:"password",attrs:{placeholder:"请输入密码",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextStep(t)}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),o("el-button",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.nextStep(t)}}},[e._v("下一步")])],1)],1)},n=[],r=o("5530"),s=(o("ac1f"),o("00b4"),o("e9c4"),o("caf6")),a=(o("5f87"),o("2f62")),l={name:"Login",data:function(){var e=function(e,t,o){var i=/^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;i.test(t)?o():o(new Error("请输入正确的手机号"))},t=function(e,t,o){!t||t.length<4?o(new Error("请输入正确的密码")):o()},o=function(e,t,o){!t||t.length<4?o(new Error("请输入正确的邀请码")):o()};return{loginForm:{mobile:void 0,password:void 0,domain:"jb.yueli.com"},loginRules:{mobile:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},invitForm:{mobile:void 0,invite_code:void 0,domain:"jb.yueli.com"},invitRules:{mobile:[{required:!0,trigger:"blur",validator:e}],invite_code:[{required:!0,trigger:"blur",validator:o}]},registerForm:{mobile:void 0,reg_code:void 0,password:void 0,domain:"jb.yueli.com"},registerRules:{mobile:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}],reg_code:[{required:!0,trigger:"blur",validator:o}]},loading:!1,passwordType:"password",redirect:void 0,showIndex:0,show:!0,count:0}},computed:Object(r["a"])({},Object(a["c"])(["admin"])),watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])(["setHomeInfo"])),{},{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,Object(s["b"])({mobile:e.loginForm.mobile,code:e.loginForm.password}).then((function(e){setTimeout((function(){this.loading=!1}),100)})).catch((function(e){console.log("error=="+JSON.stringify(e))})),Object(s["c"])(e.loginForm).then((function(e){setTimeout((function(){this.loading=!1}),100)})).catch((function(t){console.log("error=="+JSON.stringify(t)),e.loading=!1}))}))},handleRegister:function(){this.showIndex=1},nextStep:function(){var e=this;1===this.showIndex?(this.registerForm.mobile=this.invitForm.mobile,this.$refs.invitForm.validate((function(t){t&&(e.loading=!0,Object(s["f"])(e.invitForm).then((function(e){setTimeout((function(){this.loading=!1,this.showIndex=2}),100)})).catch((function(t){e.loading=!1,console.log("error=="+JSON.stringify(t))})))}))):2==this.showIndex&&this.$refs.registerForm.validate((function(t){t&&(e.loading=!0,Object(s["d"])(e.registerForm).then((function(e){setTimeout((function(){this.loading=!1}),100)})).catch((function(t){e.loading=!1,console.log("error=="+JSON.stringify(t))})))}))},getCode:function(){Object(s["e"])(this.invitForm).then((function(e){setTimeout((function(){var e=this,t=30;this.timer||(this.count=t,this.show=!1,this.timer=setInterval((function(){e.count>0&&e.count<=t?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null)}),1e3))}),100)})).catch((function(e){console.log("error=="+JSON.stringify(e))}))}})},c=l,d=(o("2017"),o("0c13"),o("2877")),u=Object(d["a"])(c,i,n,!1,null,"54b1f445",null);t["default"]=u.exports},cafe:function(e,t,o){}}]);