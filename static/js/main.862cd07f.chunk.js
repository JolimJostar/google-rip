(this["webpackJsonpgoogle-rip"]=this["webpackJsonpgoogle-rip"]||[]).push([[0],{32:function(e,t,r){},75:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r.n(s),a=r(22),n=r.n(a),l=r(11),i=(r(32),r(10)),d=r(77),j=r(1),o=[{url:"/search",text:"\ud83d\udd0e All"},{url:"/news",text:"\ud83d\udcf0 News"},{url:"/images",text:"\ud83d\udcf8 Images"},{url:"/videos",text:"\ud83d\udcfa Videos"}],u=function(){return Object(j.jsx)("div",{className:"flex justify-between items-center mt-4 sm:justify-between",children:o.map((function(e){var t=e.url,r=e.text;return Object(j.jsx)(l.c,{to:t,className:"m-2",activeClassName:"text-blue-700 border-b-2 border-blue-700 pb-2 dark:text-blue-300",children:r})}))})},b=r(16),x=r.n(b),h=r(25),m=Object(s.createContext)(),f=function(e){var t=e.children,r=Object(s.useState)([]),c=Object(i.a)(r,2),a=c[0],n=c[1],l=Object(s.useState)(!1),d=Object(i.a)(l,2),o=d[0],u=d[1],b=Object(s.useState)(""),f=Object(i.a)(b,2),p=f[0],O=f[1],v=function(){var e=Object(h.a)(x.a.mark((function e(t){var r,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("".concat("https://google-search3.p.rapidapi.com/api/v1").concat(t),{method:"GET",headers:{"x-user-agent":"desktop","x-rapidapi-host":"google-search3.p.rapidapi.com","x-rapidapi-key":"23f6545f22msh416ddfe9cd9a41ep1cbff4jsn07628abf7be6"}});case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,n(s),u(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(m.Provider,{value:{getResults:v,results:a,searchTerm:p,setSearchTerm:O,isLoading:o},children:t})},p=function(){return Object(s.useContext)(m)},O=function(e){var t=e.text,r=e.setText,c=p().setSearchTerm,a=Object(d.a)(t,600),n=Object(i.a)(a,1)[0];return Object(s.useEffect)((function(){n&&c(n)}),[n]),Object(j.jsxs)("div",{className:"relative mt-3 sm:ml-48 sm:-mt-10 md:ml-72 ",children:[Object(j.jsx)("input",{value:t,type:"text",className:"w-80 h-10 border rounded-full shadow-sm outline-none p-6 text-black dark:bg-gray-200 hover:shadow-lg",placeholder:"\u0412\u0432\u043e\u0434\u0438 \u0441\u044e\u0434\u0430! :)",onChange:function(e){return r(e.target.value)},id:"TextInput"}),t&&Object(j.jsx)("button",{type:"button",className:"absolute top-1.5 right-4 text-2xl text-gray-500",onClick:function(){return r("")},children:"X"}),Object(j.jsx)(u,{})]})},v=function(e){var t=e.darkTheme,r=e.setDarkTheme,c=Object(s.useState)(""),a=Object(i.a)(c,2),n=a[0],d=a[1];return Object(j.jsxs)("div",{className:"p-3 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-600 sm:justify-between",children:[Object(j.jsxs)("div",{className:"flex justify-between items-center space-x-5 w-screen",children:[Object(j.jsx)(l.b,{to:"/search",children:Object(j.jsx)("button",{className:"text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500",children:"\u042f\u043d\u0443\u0433\u043b \ud83d\udd0d"})}),Object(j.jsx)("button",{type:"button",className:"text-xl bg-white border rounded-full px-2 py-1 dark:bg-gray-50 dark:text-gray-900 hover:shadow-lg",onClick:function(){return r(!t)},children:t?"Light \ud83d\udca1":"Dark \ud83c\udf19"})]}),Object(j.jsx)(O,{text:n,setText:d})]})},g=function(){return Object(j.jsx)("div",{className:"text-center p-10 mt-10 border-t border-gray-200 dark:border-gray-700",children:Object(j.jsx)("h1",{children:"Damn, that's some nice Footer"})})},k=r(3),w=r(26),N=r.n(w),y=r(27),T=r.n(y),S=function(){return Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)(T.a,{type:"Puff",color:"#00BFFF",height:550,width:80})})},_=function(){var e,t,r,c,a=p(),n=a.results,l=a.isLoading,i=a.getResults,d=a.searchTerm,o=Object(k.g)();if(Object(s.useEffect)((function(){if(""!==d)if("/videos"===o.pathname)i("/search/q=".concat(d," videos"));else{if("/google-rip"===o.pathname)return;i("".concat(o.pathname,"/q=").concat(d,"&num=40"))}}),[d,o.pathname]),l)return Object(j.jsx)(S,{});switch(o.pathname){case"/google-rip":return Object(j.jsxs)("div",{className:"flex justify-center align-middle flex-col",children:[Object(j.jsx)("h1",{className:"text-xl md:text-7xl text-black dark:text-white mx-2 my-5 text-center",children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0438\u043a \u042f\u043d\u0430"}),Object(j.jsx)("p",{className:"text-sm md:text-3xl text-center text-gray-800 dark:text-gray-300",children:'\u0412\u0432\u0435\u0434\u0438 \u0447\u0442\u043e-\u0442\u043e \u0438 \u043d\u0430\u0436\u043c\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 "\u042f\u043d\u0443\u0433\u043b"'})]});case"/search":return Object(j.jsx)("div",{className:"justify-between gap-10 sm:px-24 grid grid-cols-1",children:null===n||void 0===n||null===(e=n.results)||void 0===e?void 0:e.map((function(e,t){var r=e.link,s=e.title,c=e.description;return Object(j.jsx)("div",{className:"md:w-3/5 w-full",children:Object(j.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("p",{className:"text-lg hover:underline dark:text-blue-300 text-blue-700  ",children:s}),Object(j.jsx)("p",{className:"text-xs",children:r.length>30?r.substring(0,30):r}),Object(j.jsx)("p",{className:"text-sm text-blue-900 dark:text-blue-500",children:c})]})},t)}))});case"/images":return Object(j.jsx)("div",{className:"flex flex-wrap justify-center items-center",children:null===n||void 0===n||null===(t=n.image_results)||void 0===t?void 0:t.map((function(e,t){var r=e.image,s=e.link,c=s.href,a=s.title;return Object(j.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",className:"sm:p-3 p-5",children:[Object(j.jsx)("img",{src:null===r||void 0===r?void 0:r.src,alt:a,loading:"lazy"}),Object(j.jsx)("p",{className:"sm:w-36 w-36 break-words text-sm mt-2",children:a})]},t)}))});case"/news":return Object(j.jsx)("div",{className:"justify-between gap-10 sm:px-24 grid grid-cols-1 md:grid-cols-2",children:null===n||void 0===n||null===(r=n.entries)||void 0===r?void 0:r.map((function(e){var t=e.id,r=e.links,s=e.source,c=e.title;return Object(j.jsxs)("div",{className:"md:w-4/5 w-full ",children:[Object(j.jsx)("a",{href:null===r||void 0===r?void 0:r[0].href,target:"_blank",rel:"noreferrer ",className:"hover:underline ",children:Object(j.jsx)("p",{className:"text-lg dark:text-blue-300 text-blue-700",children:c})}),Object(j.jsx)("div",{className:"flex gap-4",children:Object(j.jsxs)("a",{href:null===s||void 0===s?void 0:s.href,target:"_blank",rel:"noreferrer",className:"hover:underline hover:text-blue-300",children:[" ",null===s||void 0===s?void 0:s.href]})})]},t)}))});case"/videos":return Object(j.jsx)("div",{className:"flex flex-wrap",children:null===n||void 0===n||null===(c=n.results)||void 0===c?void 0:c.map((function(e,t){var r,s;return Object(j.jsx)("div",{className:"p-2",children:(null===e||void 0===e||null===(r=e.additional_links)||void 0===r?void 0:r[0].href)&&Object(j.jsx)(N.a,{url:null===(s=e.additional_links)||void 0===s?void 0:s[0].href,controls:!0,width:"355px",height:"200px"})},t)}))});default:return"Default"}},C=function(){return Object(j.jsx)("div",{className:"p-4",children:Object(j.jsxs)(k.d,{children:[Object(j.jsx)(k.b,{exact:!0,path:"/",children:Object(j.jsx)(k.a,{to:"/search"})}),Object(j.jsx)(k.b,{exact:!0,path:"/google-rip",children:Object(j.jsx)(_,{})}),Object(j.jsx)(k.b,{exact:!0,path:"/search",children:Object(j.jsx)(_,{})}),Object(j.jsx)(k.b,{path:"/images",children:Object(j.jsx)(_,{})}),Object(j.jsx)(k.b,{path:"/news",children:Object(j.jsx)(_,{})}),Object(j.jsx)(k.b,{path:"/videos",children:Object(j.jsx)(_,{})})]})})};var D=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(j.jsx)("div",{className:r?"dark":"",children:Object(j.jsxs)("div",{className:"bg-white dark:bg-gray-900 text-blue-400 min-h-screen",children:[Object(j.jsx)(v,{darkTheme:r,setDarkTheme:c}),Object(j.jsx)(C,{}),Object(j.jsx)(g,{})]})})};n.a.render(Object(j.jsx)(f,{children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(D,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.862cd07f.chunk.js.map