(function(e){function t(t){for(var n,o,l=t[0],s=t[1],u=t[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={app:0},r=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f7da6747"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(e);var u=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(c);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}i[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1035:function(e,t,a){},2395:function(e,t,a){},"4bd5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("5c96"),r=a.n(i),o=(a("0fae"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),l=[],s={},u=s,c=(a("7c55"),a("2877")),d=Object(c["a"])(u,o,l,!1,null,null,null),p=d.exports,f=(a("d3b7"),a("8c4f")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("今日美业收银系统")]),a("div",{staticClass:"title"},[a("div",{staticClass:"id"},[e._v(e._s(e.streamId))]),a("div",{staticClass:"date"},[e._v(" "+e._s((new Date).getFullYear())+"年"+e._s((new Date).getMonth())+"月"+e._s((new Date).getDay())+"日 ")])]),a("div",{staticClass:"main"},[a("div",{staticClass:"left"},[e._l(e.pros,(function(t){return a("div",{key:t.title,staticClass:"left-item"},[a("div",[e._v(e._s(t.title))]),a("div",[a("el-input",{attrs:{placeholder:"请输入价格"},model:{value:t.price,callback:function(a){e.$set(t,"price",a)},expression:"item.price"}})],1)])})),a("div",{staticClass:"left-item"},[a("div",[a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary",align:"left"},on:{click:e.addItem}},[e._v(" 增加 ")])],1),a("div",[a("el-input",{attrs:{placeholder:"请输入项目"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)])],2),a("div",{staticClass:"right"},[a("div",{staticClass:"left-item"},[a("div",[a("el-button",{attrs:{type:"primary",align:"left"},on:{click:e.searchVip}},[e._v(" 查找 ")])],1),a("div",[a("el-input",{attrs:{placeholder:"请输入客户号"},model:{value:e.uid,callback:function(t){e.uid=t},expression:"uid"}})],1)]),a("div",{staticClass:"left-item"},[a("div",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("指定")]),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("非指定")])],1)]),a("div",{staticClass:"left-item"},[a("div",[e._v(" 付款方式 ")]),a("div",[a("el-radio",{attrs:{label:"1"},model:{value:e.chekout,callback:function(t){e.chekout=t},expression:"chekout"}},[e._v("支付宝")]),a("el-radio",{attrs:{label:"2"},model:{value:e.chekout,callback:function(t){e.chekout=t},expression:"chekout"}},[e._v("微信")]),a("el-radio",{attrs:{label:"3"},model:{value:e.chekout,callback:function(t){e.chekout=t},expression:"chekout"}},[e._v("现金")])],1)]),a("div",{staticClass:"left-item"},[a("div",[e._v(" 余额 ")]),a("div",[a("el-input",{attrs:{placeholder:"余额"},model:{value:e.restmoney,callback:function(t){e.restmoney=t},expression:"restmoney"}})],1)]),a("div",{staticClass:"left-item"},[a("div",[e._v(" 收银员 ")]),a("div",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},e._l(e.staffus,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"sub-btn"},[a("el-button",{attrs:{type:"primary",align:"right"},on:{click:e.doSubBtn}},[e._v(" 确认点单 ")])],1)])])])},m=[],h=(a("4160"),a("b0c0"),a("159b"),{name:"Home",components:{},data:function(){return{streamId:1e4,pros:[{title:"洗吹",price:""},{title:"洗剪吹",price:""},{title:"单剪",price:""},{title:"儿童剪",price:""},{title:"老人剪",price:""},{title:"焗油",price:""},{title:"护理",price:""},{title:"直发",price:""},{title:"接发",price:""},{title:"毛巾",price:""},{title:"其他",price:""}],title:"",uid:"",options:[{value:"高级发型师",label:"高级发型师"},{value:"中级发型师",label:"中级发型师"},{value:"助理级发型师",label:"助理级发型师"},{value:"资深发型师",label:"资深发型师"},{value:"总监发型师",label:"总监发型师"}],staffus:[{value:"李四",label:"李四"},{value:"张三",label:"张三"}],value:"",radio:"1",chekout:"1",restmoney:"500",name:""}},beforeCreate:function(){localStorage.getItem("login")||this.$router.push({path:"/"})},mounted:function(){var e=this;setTimeout((function(){localStorage.removeItem("login"),e.$router.push({path:"/"})}),3e5)},methods:{addItem:function(){if(this.title){var e={title:this.title,price:""};this.pros.push(e)}else this.$message.warning("请输入项目名称")},searchVip:function(){this.uid?this.$router.push({path:"/about"}):this.$message.warning("请输入客户号")},doSubBtn:function(){var e=this;this.$confirm("确定点单？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.streamId+=1,e.pros.forEach((function(e){e.price=""})),e.title="",e.uid="",e.value="",e.radio="1",e.chekout="1",e.restmoney="500",e.name=""})).catch((function(){}))}}}),b=h,g=(a("6236"),Object(c["a"])(b,v,m,!1,null,"1704dfc0",null)),y=g.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"username"},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("div",{staticClass:"password"},[a("el-input",{attrs:{type:"password",placeholder:"请输入用户名密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{attrs:{align:"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)])},_=[],w={name:"Home",components:{},data:function(){return{username:"",password:""}},mounted:function(){localStorage.getItem("login")&&this.$router.push({path:"/home"})},methods:{login:function(){"test"===this.username&&"test"===this.password?(this.$router.push({path:"/home"}),localStorage.setItem("login","logined")):this.$message.warning("请输入正确的账号密码")}}},x=w,C=(a("d4e8"),Object(c["a"])(x,k,_,!1,null,"2b8cdab2",null)),j=C.exports;n["default"].use(f["a"]);var O=[{path:"/",name:"Login",component:j},{path:"/home",name:"Home",component:y},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],$=new f["a"]({mode:"history",base:"/",routes:O}),S=$,I=a("2f62");n["default"].use(I["a"]);var P=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,n["default"].use(r.a),new n["default"]({router:S,store:P,render:function(e){return e(p)}}).$mount("#app")},6236:function(e,t,a){"use strict";var n=a("4bd5"),i=a.n(n);i.a},"7c55":function(e,t,a){"use strict";var n=a("2395"),i=a.n(n);i.a},d4e8:function(e,t,a){"use strict";var n=a("1035"),i=a.n(n);i.a}});
//# sourceMappingURL=app.e23114d6.js.map