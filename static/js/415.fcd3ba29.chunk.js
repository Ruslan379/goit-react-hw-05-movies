/*! For license information please see 415.fcd3ba29.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5415:function(n,t,e){e.r(t);var a=e(885),c=e(2791),r=e(6871),o=e(501),u=e(6066),i=e(369),s=e(184);t.default=function(){var n=(0,r.TH)(),t=(0,c.useState)([]),e=(0,a.Z)(t,2),p=e[0],l=e[1];return(0,c.useEffect)((function(){(0,i.T9)().then((function(n){l(n)})).catch((function(n){console.log(n.message),u.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430: ".concat(n.message),{position:"top-center",autoClose:2e3})}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("div",{children:p.map((function(t){var e=t.id,a=t.title;t.name;return(0,s.jsx)(o.rU,{to:"movies/".concat(e),state:{from:n},children:(0,s.jsx)("p",{children:a})},e)}))})]})}},369:function(n,t,e){e.d(t,{M1:function(){return T},T9:function(){return x},TP:function(){return Z},V0:function(){return S},tx:function(){return q}});var a=e(5861),c=e(4687),r=e.n(c),o=e(4569),u=e.n(o),i="https://api.themoviedb.org/3",s="41b230c5977baa736e324532e16fdadb",p="search/movie",l="movie",f=616037,g="movie",h="credits",d="movie",v="reviews",m="".concat(i,"/").concat("trending/movie/week","?api_key=").concat(s);console.log("url_1: ",m);var y="".concat(i,"/").concat(p,"?api_key=").concat(s,"&language=en-US&query=").concat("avatar","&page=").concat(1,"&include_adult=false");console.log("url_2: ",y);var k="".concat(i,"/").concat(l,"/").concat(f,"?api_key=").concat(s,"&language=en-US");console.log("url_3: ",k);var _="".concat(i,"/").concat(g,"/").concat(f,"/").concat(h,"?api_key=").concat(s,"&language=en-US");console.log("url_4: ",_);var w="".concat(i,"/").concat(d,"/").concat(f,"/").concat(v,"?api_key=").concat(s,"&language=en-US&page=").concat(1);function x(){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(r().mark((function n(){var t,e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get(m);case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(n){return U.apply(this,arguments)}function U(){return U=(0,a.Z)(r().mark((function n(t){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(i,"/").concat(p,"?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,a=e.data.results,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)}))),U.apply(this,arguments)}function Z(n){return j.apply(this,arguments)}function j(){return j=(0,a.Z)(r().mark((function n(t){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(i,"/").concat(l,"/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)}))),j.apply(this,arguments)}function T(n){return C.apply(this,arguments)}function C(){return C=(0,a.Z)(r().mark((function n(t){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(i,"/").concat(g,"/").concat(t,"/").concat(h,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)}))),C.apply(this,arguments)}function q(n){return A.apply(this,arguments)}function A(){return A=(0,a.Z)(r().mark((function n(t){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(i,"/").concat(d,"/").concat(t,"/").concat(v,"?api_key=").concat(s,"&language=en-US&page=").concat(1));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)}))),A.apply(this,arguments)}console.log("url_5: ",w)}}]);
//# sourceMappingURL=415.fcd3ba29.chunk.js.map