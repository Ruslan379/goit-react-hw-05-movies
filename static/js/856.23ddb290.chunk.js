/*! For license information please see 856.23ddb290.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[856],{1396:function(t,e,n){n.d(e,{M1:function(){return C},T9:function(){return b},TP:function(){return U},V0:function(){return w},tx:function(){return N}});var a=n(5861),r=n(4687),c=n.n(r),o=n(4569),u=n.n(o),s="https://api.themoviedb.org/3",i="41b230c5977baa736e324532e16fdadb",l="search/movie",p="movie",f=616037,h="movie",g="credits",m="movie",d="reviews",v="".concat(s,"/").concat("trending/all/day","?api_key=").concat(i);console.log("url_1: ",v);var _="".concat(s,"/").concat(l,"?api_key=").concat(i,"&language=en-US&query=").concat("avatar","&page=").concat(1,"&include_adult=false");console.log("url_2: ",_);var y="".concat(s,"/").concat(p,"/").concat(f,"?api_key=").concat(i,"&language=en-US");console.log("url_3: ",y);var S="".concat(s,"/").concat(h,"/").concat(f,"/").concat(g,"?api_key=").concat(i,"&language=en-US");console.log("url_4: ",S);var x="".concat(s,"/").concat(m,"/").concat(f,"/").concat(d,"?api_key=").concat(i,"&language=en-US&page=").concat(1);function b(){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get(v);case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return j.apply(this,arguments)}function j(){return j=(0,a.Z)(c().mark((function t(e){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"/").concat(l,"?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,a=n.data.results,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}function U(t){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"/").concat(p,"/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}function C(t){return q.apply(this,arguments)}function q(){return q=(0,a.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"/").concat(h,"/").concat(e,"/").concat(g,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),q.apply(this,arguments)}function N(t){return T.apply(this,arguments)}function T(){return T=(0,a.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(s,"/").concat(m,"/").concat(e,"/").concat(d,"?api_key=").concat(i,"&language=en-US&page=").concat(1));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}console.log("url_5: ",x)},8856:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=n(885),r=n(2791),c=n(501),o=n(6871),u=n(6066),s=n(1396),i=n(828),l="Searchbar_Searchbar__WRZnT",p="Searchbar_SearchForm__yRiNg",f="Searchbar_SearchFormButton__WO7HP",h="Searchbar_SearchFormInput__eSeBg",g=n(184),m=function(t){var e=t.onSubmit,n=(0,r.useState)(""),c=(0,a.Z)(n,2),o=c[0],s=c[1];return(0,g.jsx)("header",{className:l,children:(0,g.jsxs)("form",{className:p,onSubmit:function(t){if(t.preventDefault(),""===t.target.elements.query.value.trim())return u.Am.error("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),void t.target.reset();e(o),t.target.reset()},children:[(0,g.jsx)("input",{className:h,type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(t){s(t.currentTarget.value.toLowerCase())}}),(0,g.jsxs)("button",{type:"submit",className:f,children:[(0,g.jsx)(i.Yfv,{style:{marginRight:8}}),(0,g.jsx)("span",{children:"Search"})]})]})})},d=function(){var t,e=(0,o.TH)(),n=(0,r.useState)([]),i=(0,a.Z)(n,2),l=i[0],p=i[1],f=(0,c.lr)(),h=(0,a.Z)(f,2),d=h[0],v=h[1],_=null!==(t=d.get("query"))&&void 0!==t?t:"";return(0,r.useEffect)((function(){_&&(0,s.V0)(_).then((function(t){if(0===t.length)return u.Am.warning("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0444\u0438\u043b\u044c\u043c\u0430: ".concat(_)),void p([]);p(t)})).catch((function(t){console.log(t.message),u.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(t.message),{position:"top-center",autoClose:2e3})}))}),[_]),l?(0,g.jsxs)("main",{children:[(0,g.jsx)(m,{onSubmit:function(t){v(""!==t?{query:t}:{})}}),l.length>0&&(0,g.jsx)("div",{children:l.map((function(t){var n=t.id,a=t.title,r=t.name;return(0,g.jsx)(c.rU,{to:"".concat(n),state:{from:e},children:(0,g.jsx)("p",{children:a?a.toUpperCase():r})},n)}))})]}):null}}}]);
//# sourceMappingURL=856.23ddb290.chunk.js.map