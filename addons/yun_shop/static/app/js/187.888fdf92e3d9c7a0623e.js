webpackJsonp([187],{A9ru:function(t,e,n){var i=n("xVUm");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("b4541cb2",i,!0,{})},VtKZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Pexp"),a=n("Tg7E"),s={data:function(){return{titlew:"",content:""}},methods:{getBalance:function(){var t=this;$http.get("plugin.love.Frontend.Controllers.explain.index",{},"加载中").then(function(e){1===e.result?(t.content=e.data.content,t.titlew=e.data.title,t.fun.setWXTitle(t.titlew)):a.MessageBox.alert(e.msg)},function(t){a.MessageBox.alert(t)})}},activated:function(){this.getBalance()},components:{cTitle:i.a}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"love_explain"}},[e("c-title",{attrs:{hide:!1,text:this.titlew}}),this._v(" "),e("div",{staticStyle:{height:"40px"}}),this._v(" "),e("div",{staticClass:"text",domProps:{innerHTML:this._s(this.content)}})],1)},staticRenderFns:[]};var l=n("VU/8")(s,o,!1,function(t){n("A9ru")},"data-v-da26f600",null);e.default=l.exports},xVUm:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#love_explain[data-v-da26f600] {\n  background: #ffffff;\n}\n#love_explain .text[data-v-da26f600] {\n    padding: 0;\n}\n",""])}});