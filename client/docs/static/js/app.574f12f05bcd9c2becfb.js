webpackJsonp([1],{"1BT5":function(t,e){},"4Iz/":function(t,e){},CwgE:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mtWM"),a=n.n(s),i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(t){n("OAHZ")},null,null).exports,l=n("/ocq"),u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("p",{staticClass:"logo__icon"},[e("img",{attrs:{src:n("Zs8R"),alt:""}})]),this._v(" "),e("div",{staticClass:"logo__title"},[e("p",{staticClass:"logo__word"},[this._v("Word")]),this._v(" "),e("p",{staticClass:"logo__hunter"},[this._v("Hunter")])])])}]};var c=n("VU/8")({name:"Logo"},u,!1,function(t){n("4Iz/")},"data-v-0015873f",null).exports,d=n("Xxa5"),m=n.n(d),p=n("exGp"),v=n.n(p),h=n("Dd8w"),f=n.n(h),U=n("NYxO"),_={name:"CustomInputText",props:{seq:{type:String,default:"0"},label:{type:String,default:""},max:{type:String,default:"10"},placeholder:{type:String,default:""},value:{type:String,default:""},isPassword:{type:String,default:"false"}},data:function(){return{}},computed:{type:function(){return"true"===this.isPassword?"password":"text"}},methods:{updateValue:function(t){this.$emit("input",t)}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customInput"},[t.label?n("label",{staticClass:"customInput__label",attrs:{for:"customInput"+t.seq}},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("input",{staticClass:"customInput__input",attrs:{type:t.type,id:"customInput"+t.seq,max:t.max,placeholder:t.placeholder},on:{input:function(e){return t.updateValue(e.target.value)}}})])},staticRenderFns:[]};var V=n("VU/8")(_,g,!1,function(t){n("1BT5")},"data-v-0aa72715",null).exports,F={name:"LoginForm",components:{"custom-input-text":V},data:function(){return{loginData:{name:"",password:""}}},computed:f()({},Object(U.c)({errorState:"getErrorState"})),methods:f()({},Object(U.b)(["login"]),{onSubmit:function(){var t=this;return v()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.login(t.loginData);case 3:e.sent&&t.goToMain(),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},goToMain:function(){this.$router.push("/main")}})},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form login__form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("custom-input-text",{attrs:{seq:"LoginForm0",label:"User name",max:"9"},model:{value:t.loginData.name,callback:function(e){t.$set(t.loginData,"name",e)},expression:"loginData.name"}}),t._v(" "),n("custom-input-text",{attrs:{seq:"LoginForm1",isPassword:"true",label:"Password"},model:{value:t.loginData.password,callback:function(e){t.$set(t.loginData,"password",e)},expression:"loginData.password"}}),t._v(" "),n("button",{staticClass:"btn login__button login__button--signIn",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),n("p",{staticClass:"login__button login__button--signUp"},[t._v("If this is your first time, please\n    "),n("router-link",{staticClass:"btn__anchor",attrs:{to:"/signup"}},[t._v("sign up")])],1)],1)},staticRenderFns:[]};var b={name:"Login",components:{"login-logo":c,"login-form":n("VU/8")(F,R,!1,function(t){n("TSIT")},"data-v-582f0136",null).exports},computed:{childCounter:function(){return this.$store.getters.getCounter}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login"},[e("header",{staticClass:"login__logo"},[e("login-logo")],1),this._v(" "),e("div",{staticClass:"login__box"},[e("login-form")],1)])},staticRenderFns:[]};var S=n("VU/8")(b,x,!1,function(t){n("REBr")},"data-v-e4afa2dc",null).exports,w={name:"SignUpForm",components:{"custom-input-text":V},data:function(){return{uid:"",password:"",nickname:"",email:""}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form signUp__form",attrs:{action:"#"}},[n("custom-input-text",{attrs:{seq:"SignUpForm0",label:"User name"},model:{value:t.uid,callback:function(e){t.uid=e},expression:"uid"}}),t._v(" "),n("custom-input-text",{attrs:{seq:"SignUpForm1",isPassword:"true",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("custom-input-text",{attrs:{seq:"SignUpForm2",label:"Nickname"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}}),t._v(" "),n("custom-input-text",{attrs:{seq:"SignUpForm3",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("button",{staticClass:"btn signUp__button signUp__button--signIn",attrs:{type:"submit"}},[t._v("Sign up")])],1)},staticRenderFns:[]};var E={name:"SignUp",components:{"signup-logo":c,"signup-form":n("VU/8")(w,Z,!1,function(t){n("yrFM")},"data-v-364655d8",null).exports}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"signUp"},[e("header",{staticClass:"signUp__logo"},[e("signup-logo")],1),this._v(" "),e("div",{staticClass:"signUp__box"},[e("signup-form")],1)])},staticRenderFns:[]};var N=n("VU/8")(E,W,!1,function(t){n("RcfS")},"data-v-6adf2a0c",null).exports,y={name:"Header",components:{"header-logo":c}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header__logo"},[e("header-logo")],1)},staticRenderFns:[]};var C=n("VU/8")(y,T,!1,function(t){n("p0r8")},"data-v-1af5310a",null).exports,k={name:"StudyHistory",props:{value:{type:Boolean,required:!0,default:!1}},computed:{isShow:function(){return this.value}},methods:{hide:function(){this.$emit("input",!1)}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"studyHistory"},[this._m(0),this._v(" "),e("button",{staticClass:"btn studyHistory__close",attrs:{type:"button"},on:{click:this.hide}},[this._v("Close")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"studyHistory__details"},[n("dt",[t._v("Learning days")]),t._v(" "),n("dd",[t._v("30")]),t._v(" "),n("dt",[t._v("Memorized words")]),t._v(" "),n("dd",[t._v("50")]),t._v(" "),n("dt",[t._v("Remaining words")]),t._v(" "),n("dd",[t._v("80")])])}]};var M={name:"Profile",components:{"study-history":n("VU/8")(k,B,!1,function(t){n("WE/z")},"data-v-31fdaaf4",null).exports},data:function(){return{showStudyHistory:!1,isMobile:!0}},methods:{openStudyHistory:function(){this.showStudyHistory=!0},closeStudyHistory:function(){this.showStudyHistory=!1},handleResize:function(){window.innerWidth>767?(this.isMobile&&this.openStudyHistory(),this.isMobile=!1):(this.isMobile||this.closeStudyHistory(),this.isMobile=!0)}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("div",{staticClass:"profile__main"},[n("p",{staticClass:"profile__picture"}),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],staticClass:"btn profile__openStudyHistory",attrs:{type:"button"},on:{click:t.openStudyHistory}},[t._v("Study history")])]),t._v(" "),n("study-history",{staticClass:"profile__studyHistory",model:{value:t.showStudyHistory,callback:function(e){t.showStudyHistory=e},expression:"showStudyHistory"}})],1)},staticRenderFns:[]};var I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("div",{staticClass:"menu__item menu__item--training"},[e("i",{staticClass:"fas fa-running"})]),this._v(" "),e("div",{staticClass:"menu__item menu__item--wholeWord"},[e("i",{staticClass:"fas fa-list"})]),this._v(" "),e("div",{staticClass:"menu__item menu__item--enterWord"},[e("i",{staticClass:"fas fa-edit"})])])}]};var H={name:"Main",components:{"main-header":C,"main-profile":n("VU/8")(M,Q,!1,function(t){n("xKLg")},"data-v-700d65d3",null).exports,"main-menu":n("VU/8")({name:"Menu"},I,!1,function(t){n("CwgE")},"data-v-d61ed9f8",null).exports}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("main-header",{staticClass:"main__header"}),this._v(" "),e("main-profile",{staticClass:"main__profile"}),this._v(" "),e("main-menu",{staticClass:"main__menu"})],1)},staticRenderFns:[]};var G,J=n("VU/8")(H,z,!1,function(t){n("d5Kk")},"data-v-d4c8ae9a",null).exports,Y=n("//Fk"),X=n.n(Y),L=n("d7EF"),D=n.n(L),A=function(t,e){return a.a.post("/api/login",{params:{name:t,password:e}})},K={login:function(t,e){var n=this;return v()(m.a.mark(function s(){var a,i,r,o;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A(t,e);case 3:return a=n.sent,n.next=6,X.a.all([a]);case 6:if(i=n.sent,r=D()(i,1),0!==(o=r[0]).length){n.next=11;break}return n.abrupt("return","noAuth");case 11:return n.abrupt("return",o);case 14:throw n.prev=14,n.t0=n.catch(0),new Error(n.t0);case 17:case"end":return n.stop()}},s,n,[[0,14]])}))()}},j={login:function(t,e){var n=this;return v()(m.a.mark(function s(){var a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K.login(t,e);case 3:return a=n.sent,n.abrupt("return",a);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0);case 10:case"end":return n.stop()}},s,n,[[0,7]])}))()}},O=function(t,e){(0,t.commit)("ERROR_STATE",e)},P=function(t,e){(0,t.commit)("IS_AUTH",e)},$=function(t,e){switch(e){case"noAuth":O(t,"Wrong name or Password"),P(t,!1);break;default:n=t,s=e.NAME,(0,n.commit)("NAME",s),O(t,""),P(t,!0)}var n,s},q={login:function(t,e){var n=this;return v()(m.a.mark(function s(){var a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.login(e.name,e.password);case 2:return a=n.sent,$(t,a),n.abrupt("return",t.getters.getIsAuth);case 5:case"end":return n.stop()}},s,n)}))()}},tt=n("bOdI"),et=n.n(tt),nt=(G={},et()(G,"NAME",function(t,e){t.name=e}),et()(G,"ERROR_STATE",function(t,e){t.errorState=e}),et()(G,"IS_AUTH",function(t,e){t.isAuth=e}),G);i.a.use(U.a);var st=new U.a.Store({state:{name:"",errorState:"",isAuth:!1},mutations:nt,getters:{getUid:function(t){return t.name},getErrorState:function(t){return t.errorState},getIsAuth:function(t){return t.isAuth}},actions:q});i.a.use(l.a);var at=new l.a({mode:"history",routes:[{path:"/",name:"Login",component:S},{path:"/signup",name:"SignUp",component:N},{path:"/main",name:"Main",component:J,beforeEnter:function(t,e,n){return st.getters.getIsAuth?n():n("/")}}]});i.a.prototype.$http=a.a,i.a.config.productionTip=!1,new i.a({el:"#app",store:st,router:at,components:{App:o},template:"<App/>"})},OAHZ:function(t,e){},REBr:function(t,e){},RcfS:function(t,e){},TSIT:function(t,e){},"WE/z":function(t,e){},Zs8R:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxNTBweCIgaGVpZ2h0PSIxNTBweCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB4PSIwIiB5PSIwIgogICAgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFKWUFBQUNXQkFNQUFBRE9MMnpSQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUVsQk1WRVgvLy84QUFBQUFBQUQvLy8vNgpsTGoxN3VicmZIWEpBQUFBQW5SU1RsTUFBSGFUelRnQUFBQUJZa3RIUkFDSUJSMUlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZCkFBQUFCM1JKVFVVSDR3UUNEUVUwVjVZK1pBQUFBMlJKUkVGVWFON3RtbTF5M0NBTWhsMmZvTWtKWEhsOUFkd1RwRDRCTTc3L1ZXcU0KdllCQWZFbmIyWmxVZjVMSmhzZXZYZ1FZbG1INEpnRUF2NlJZODdvQ3lLREdnN1dxR0RhQ2phbUZ0WnBRVXdSWmJTandZNnBncmJjdwpCMG1HbzNwUG5ueldkZ2tyZ1B4UWxqQ2FCajdyOTdZWllRQnpMZW1VT0Ywb2p6VmJsbW9qbmJaWWxHTU5GMnR0UlpsZVdSRUxEdGFmClZvNkZIWTgzTW53V0k3YnQwT0g3SmNmaW9FNnJsWkF1WXpYODlNYzJCM2JJa21LWk1wTmorY05ka01YelBwaXRtRFVSenFKTVZtRFgKdTdLNC9SaXdXUE1FWXZHU1ZBR0xsNlFhQ0ZZSE5WeWt2Y0luck1zdGRXR0tubDltQXI4YUt0ZGVMYnVtRkNPNy9HY2VvS01oR05TKwozeDhzKy82RVlZV2tYYmJaMGZCQW1wKzIzZm5yYmxkUFdDd1UwcXd4WnQxaEJKb01MUXpXOHdrR3BwNXR3aHlEOGdwWkJnRHVUK0JVCkU5NW5XVVJvaWpYTHNZWU9sc3N4VXhPVkxQZDRWQk1qaHdWRmxpWlNXeUxXVkdKcElGaUFXY2l1MkMvdDFWUmFtR09GcUxnZk5lbWEKYm1ZVlFLMnNSSllhb0l2bHQzUEdwMWhUa1JVTTZSeXJYQk5CTzVmajBzV2lxNkxBOHBQTUkvNHRhNVJrY2VhSjBuaHNZUFdPb1ZlegpRSkExdlpERjhSNnpPRFdodmdGTHN1NHhxNzBteUZlVGpuY21KaXRZTTl0WmJxTFdhQzFwWnoyMnIrdW82N0Z0bS84SitmcEZlZytiCkY4RzY1RnJVempuYVEzMHRhUmFlYzZqNjBnOUNWbVlaSXV2ZXdkREs2NFpRL1R6eFBHZGNLTmFReVpGNElVUzFSck44NzFVVml5eUoKWUs5d2IzNnlRZTFnOEhhN0pzbTVrbFVoVE5leUttWUt2NjlVbGxWTU10Z3VxNHozRlVrR20rVGNlQ3dMQzNmeGtHZmxoZWx3N3o1bApjelQ3ODlvTVMvMll6eEtkcGFzaWkxYUdqK1Z6UyswVGxwU21veFArQ2wzbkNReFNCTWxEblJvVy92cUYrczZoMUk4dGdlZlZOMkZsCjUxVW1pK01YVHBGempJbFpuT1BWVjNZalJ4ZjIvbE9TeFVqeWxmWDFMcldLV1pMOXlKRDF0aXpKNlV0d0RFVXN4aGlLU2xXU3haZ0wKSnpsV1pCZkQreWhGUmsyQUlDdEtzVC9IMks3K21ramNkK2xteGJLNmF5THV4WDRXeUxFU3puZXowamVOWmpGWm5jS0lDMUE5aXhvaApxeXRKOGw1Vzh5VWZXbGJIa014ZEYydUVaV1RkVjV4RVpEWENTbGZWR2dwREZWQU5NRlZ4VDY4V1ZuWGxyODZ6Y29aWGFaUnBOUm5lCjBrQUtaV216RU1wbVNxbHJSbDNxRXZvNmJtMStYUEVKT083LytQSFJvZTkvaFBFWGtSOUVrbjFkWTlvQUFBQWxkRVZZZEdSaGRHVTYKWTNKbFlYUmxBREl3TVRrdE1EUXRNREpVTVRNNk1EVTZOVElyTURNNk1EQ3gvTVBSQUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeQpNREU1TFRBMExUQXlWREV6T2pBMU9qVXlLekF6T2pBd3dLRjdiUUFBQUFCSlJVNUVya0pnZ2c9PSIgLz4KPC9zdmc+Cg=="},d5Kk:function(t,e){},p0r8:function(t,e){},xKLg:function(t,e){},yrFM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.574f12f05bcd9c2becfb.js.map