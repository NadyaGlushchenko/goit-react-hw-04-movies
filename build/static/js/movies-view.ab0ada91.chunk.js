(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var n=a(1),c=a(81),i=a(68),r=a(0),o=a(3),s=a(11),u=a(65),l=a(84),m=a.n(l),p=a(116),f=a(72),b=a(66),j=a(18),g=a(69),h=a(19),d=a(95),v=a.n(d);var O=function(e){var t=e.onHandleSubmit,a=Object(r.useState)(""),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(n.jsxs)("form",{className:v.a.form,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return h.b.info("\ud83d\ude31 Please enter a value for search movies!");t(o.trim()),s("")},children:[Object(n.jsx)("input",{className:v.a.input,type:"text",value:o,autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",onChange:function(e){var t=e.target;return s(t.value)}}),Object(n.jsx)("button",{type:"submit",className:v.a.btn,children:Object(n.jsx)("span",{className:v.a.label,children:"Search"})})]})},_=a(70),x=a(96),E=a.n(x);var M=function(){var e,t=Object(f.a)(),a=Object(o.f)(),l=Object(o.g)(),h=Object(o.i)().url,d=Object(r.useState)(""),v=Object(i.a)(d,2),x=v[0],M=v[1],w=Object(r.useState)(0),P=Object(i.a)(w,2),N=P[0],y=P[1],S=Object(r.useState)(null),I=Object(i.a)(S,2),D=I[0],L=I[1],k=Object(r.useState)(null),R=Object(i.a)(k,2),T=R[0],V=R[1],C=Object(r.useState)(b.a.IDLE),q=Object(i.a)(C,2),J=q[0],B=q[1],F=null!==(e=new URLSearchParams(l.search).get("page"))&&void 0!==e?e:1;return Object(r.useEffect)((function(){if(""!==l.search){var e=new URLSearchParams(l.search).get("query");M(e,F)}}),[l.search,F]),Object(r.useEffect)((function(){x&&(B(b.a.PENDING),u.e(x,F).then((function(e){var t=e.results,a=e.total_pages;if(0===t.length)return V("No results were found for ".concat(x,"!")),void B(b.a.REJECTED);L(t),y(a),B(b.a.RESOLVED)})).catch((function(e){console.log(e),V(e.message),B(b.a.REJECTED)})))}),[x,F]),Object(n.jsxs)("main",{className:E.a.main,children:[Object(n.jsx)(O,{onHandleSubmit:function(e){x!==e&&(M(e),L(null),V(null),B(b.a.IDLE),a.push(Object(c.a)(Object(c.a)({},l),{},{search:"query=".concat(e,"&page=1")})))}}),J===b.a.PENDING&&Object(n.jsx)(j.a,{}),J===b.a.REJECTED&&Object(n.jsx)(g.a,{message:T}),J===b.a.RESOLVED&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:E.a.moviesList,children:D.map((function(e){return Object(n.jsxs)("li",{className:E.a.moviesItem,children:[Object(n.jsx)(s.b,{to:{pathname:"".concat(h,"/").concat((t="".concat(e.title," ").concat(e.id),m()(t,{lower:!0}))),state:{from:l}},children:Object(n.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):_.a,alt:e.title,className:E.a.poster})}),Object(n.jsx)("span",{className:E.a.movieTitle,children:e.title})]},e.id);var t}))}),N>1&&Object(n.jsx)(p.a,{className:t.root,count:N,onChange:function(e,t){a.push(Object(c.a)(Object(c.a)({},l),{},{search:"query=".concat(x,"&page=").concat(t)}))},page:Number(F),showFirstButton:!0,showLastButton:!0,size:"large"})]})]})}},65:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return b}));var n=a(75),c=a.n(n),i=a(76),r="https://api.themoviedb.org/3",o="6914e86918040074e2fe382ba8e8cb5e";function s(){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(c.a.mark((function e(){var t,a,n,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",a=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,a);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("404 The resource you requested could not be found \ud83e\udd7a"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return s("".concat(r,"/trending/movie/day?api_key=").concat(o,"&page=").concat(e))}function m(e,t){return s("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=").concat(t))}function p(e){return s("".concat(r,"/movie/").concat(e,"?api_key=").concat(o))}function f(e){return s("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(o))}function b(e,t){return s("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&page=").concat(t))}},66:function(e,t,a){"use strict";t.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},67:function(e,t,a){"use strict";t.a=a.p+"static/media/error.ecc6f277.png"},69:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),c=a(67),i=a(73),r=a.n(i);var o=function(e){var t=e.message;return Object(n.jsxs)("div",{role:"alert",className:r.a.wrapper,children:[Object(n.jsx)("img",{src:c.a,width:"650",alt:"sadcat",className:r.a.img}),Object(n.jsx)("p",{text:t,className:r.a.text,children:t})]})}},70:function(e,t,a){"use strict";t.a=a.p+"static/media/no-image.8fbb00d8.jpg"},72:function(e,t,a){"use strict";var n=a(113),c=Object(n.a)({root:{display:"flex",justifyContent:"center","& .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible,  & .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{backgroundColor:"#fa7584"},"& .MuiPaginationItem-root":{color:"#fff"},"& .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible":{opacity:"0.7"},"& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible":{opacity:"1"},"& .MuiPagination-ul":{justifyContent:"center"}}});t.a=c},73:function(e,t,a){e.exports={wrapper:"ErrorView_wrapper__1YN3X",img:"ErrorView_img__3uz1D",text:"ErrorView_text__22naq"}},95:function(e,t,a){e.exports={form:"SearchBar_form__2wxHV",input:"SearchBar_input__2dH3l",label:"SearchBar_label__2JvpF",btn:"SearchBar_btn__2csTT"}},96:function(e,t,a){e.exports={main:"MoviesPage_main__20L16",moviesList:"MoviesPage_moviesList__4gnkF",moviesItem:"MoviesPage_moviesItem__3UqRR",poster:"MoviesPage_poster__1AOtb",movieTitle:"MoviesPage_movieTitle__2TaoL"}}}]);
//# sourceMappingURL=movies-view.ab0ada91.chunk.js.map