!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=8)}([function(t,n){t.exports=function(t,n,e,r,o,c){var i,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,a=t.default);var s="function"==typeof a?a.options:a;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._compiled=!0),e&&(s.functional=!0),o&&(s._scopeId=o);var f;if(c?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=f):r&&(f=r),f){var d=s.functional,l=d?s.render:s.beforeCreate;d?(s._injectStyles=f,s.render=function(t,n){return f.call(n),l(t,n)}):s.beforeCreate=l?[].concat(l,f):[f]}return{esModule:i,exports:a,options:s}}},function(t,n,e){"use strict";function r(t){e(15)}var o=e(6),c=e(23),i=e(0),a=r,u=i(o.a,c.a,!1,a,null,null);n.a=u.exports},function(t,n,e){"use strict";function r(t){e(16)}var o=e(4),c=e(24),i=e(0),a=r,u=i(o.a,c.a,!1,a,null,null);n.a=u.exports},function(t,n){t.exports=Vue},function(t,n,e){"use strict";var r=e(9),o=e.n(r),c=e(12),i=(e.n(c),e(13)),a=(e.n(i),e(1)),u=e(21),s=e(20),f={viewModel:Object,__window__:Object};n.a={name:"app",props:f,components:{commandButton:a.a,counter:u.a,rawDisplay:s.a},data:function(){return this.viewModel},computed:{bigVm:function(){return o()(this.viewModel.Big,null,2)}}}},function(t,n,e){"use strict";n.a={props:{object:String}}},function(t,n,e){"use strict";var r=e(18);n.a={mixins:[r.a],props:{name:String}}},function(t,n,e){"use strict";var r=e(1);n.a={props:{counter:Number,state:String,command:Object},components:{commandButton:r.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(3),o=e.n(r),c=e(2);o.a.component("app",c.a)},function(t,n,e){t.exports={default:e(10),__esModule:!0}},function(t,n,e){var r=e(11),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){"use strict";const r={props:{command:{required:!0,validator:function(t){return"object"==typeof t}},arg:{required:!1,default:null}},computed:{canExecute:function(){return null!==this.command&&(!this.command.hasOwnProperty("CanExecuteValue")||this.command.CanExecuteValue)}},watch:{"command.CanExecuteCount":function(){this.computeCanExecute()},arg:function(){this.computeCanExecute()}},methods:{computeCanExecute:function(){null!==this.command&&this.command.CanExecute&&this.command.CanExecute(this.arg)},execute:function(){if(this.canExecute){const t=this.arg,n={arg:t,cancel:!1};this.$emit("beforeExecute",n),n.cancel||(this.command.Execute(t),this.$emit("afterExecute",t))}}}};n.a=r},function(t,n,e){t.exports=e.p+"810a1b930979de83478be0f458b51dd8.png"},function(t,n,e){"use strict";function r(t){e(14)}var o=e(5),c=e(22),i=e(0),a=r,u=i(o.a,c.a,!1,a,null,null);n.a=u.exports},function(t,n,e){"use strict";function r(t){e(17)}var o=e(7),c=e(25),i=e(0),a=r,u=i(o.a,c.a,!1,a,null,null);n.a=u.exports},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;return(t._self._c||n)("pre",[t._v(t._s(t.object))])},o=[],c={render:r,staticRenderFns:o};n.a=c},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.execute}},[t._v(t._s(t.name))])},o=[],c={render:r,staticRenderFns:o};n.a=c},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fluid container",attrs:{id:"app"}},[t._m(0),t._v(" "),e("div",{staticClass:"list-group col-md-3"},[e("counter",{attrs:{counter:t.Counter,state:t.State,command:t.Count}})],1),t._v(" "),e("div",{staticClass:"list-group col-md-3"},[e("raw-display",{attrs:{object:t.bigVm}})],1),t._v(" "),e("command-button",{attrs:{command:t.BuildBigModel,name:"Build Big Model"}})],1)},o=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"jumbotron logo",attrs:{id:"main-menu"}},[r("img",{attrs:{src:e(19)}}),t._v(" "),r("p",[t._v("Neutronium Demo Perf Application")])])}],c={render:r,staticRenderFns:o};n.a=c},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("\n        "+t._s(t.counter)+"\n    ")]),t._v(" "),e("div",[t._v("\n        "+t._s(t.state)+"\n    ")]),t._v(" "),e("command-button",{attrs:{command:t.command,name:"Run"}})],1)},o=[],c={render:r,staticRenderFns:o};n.a=c}]);