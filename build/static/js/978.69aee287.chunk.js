"use strict";(self.webpackChunkmew_shop=self.webpackChunkmew_shop||[]).push([[978,198],{9198:function(e,t,n){n.r(t);var r=n(2791),c=n(7983),i=n(184);t.default=function(e){var t=e.loading;return(0,r.useEffect)((function(){document.body.style.overflow=t?"hidden":"auto"}),[t]),(0,i.jsx)(r.Fragment,{children:t&&(0,i.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e5,background:"#fff"},children:(0,i.jsxs)("div",{className:"loading__box",children:[(0,i.jsx)("img",{src:c,alt:"logo page"}),(0,i.jsx)("span",{className:"loader"})]})})})}},1751:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2791),c=n(7689),i=n(1087),a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAxoQKBkBEKu9AAAA3ElEQVRo3u2YsQ7BUBhGTxk8A6Fs4gFEvIMVk8WsEu/CJp7Dy9BBWDyCtNfSSAcDCf2W73Tp1HNuenOT+4Mxxoip//yLY+ZkXFULmpETyFipAo4EAoFclbAvAmQJTVJ1QsyplLB2ghOcUEpInOAEJzjhXUIEtOkTVZTQZUejeA8k7GDJ41VV9ZOziLjRVPyNgmuNXKgH6tyZ/OF28BmBJAJaDCrbhD22pU24ZlvtisUnQczZepW+a731Kn1qvUrfs16n73DRDqkO6hmZfFA5VY9qYcSGoU5vjDFf8wTZxTeRQSqF9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMy0yNlQxNTo0MDoyNSswMTowMGixDN0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDMtMjZUMTU6NDA6MjUrMDE6MDAZ7LRhAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",o=n(184),s=function(e){var t=e.node1,n=e.node2,s=e.urlNode1,l=e.type2,d=(0,c.s0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:l?"bread_crumb type_2 container":"bread_crumb container",children:[(0,o.jsx)(i.rU,{to:"/",children:"Trang ch\u1ee7"}),(0,o.jsx)("img",{src:a,alt:"",width:"12",height:"12"}),t&&!n&&(0,o.jsx)("span",{children:t}),t&&n&&(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("span",{children:(0,o.jsx)("a",{onClick:function(){d(s||-1)},children:t})}),(0,o.jsx)("img",{src:a,alt:"",width:"12",height:"12"}),(0,o.jsx)("span",{children:n})]})]})})}},8978:function(e,t,n){n.r(t);var r=n(9439),c=n(2791),i=n(8686),a=n(9603),o=n(7689),s=n(1087),l=n(9434),d=n(1751),u=n(9198),f=n(2426),p=n.n(f),A=n(184);t.default=function(){var e=(0,o.UO)(),t=(0,l.I0)(),n=e.url,f=(0,c.useState)({content:""}),m=(0,r.Z)(f,2),v=m[0],h=m[1],x=(0,c.useState)([]),g=(0,r.Z)(x,2),Z=g[0],y=g[1],b=(0,c.useState)(!0),j=(0,r.Z)(b,2),w=j[0],N=j[1];(0,c.useEffect)((function(){E(),O()}),[]);var E=function(){t({type:"article/getOneUrl",payload:{id:n},callback:function(e){if(N(!1),null!==e&&void 0!==e&&e.success){var t=e.results.list;h(t)}}})},O=function(){var e={filter:JSON.stringify({status:1,websiteId:1,url:"",categoryId:8}),range:JSON.stringify([0,5]),sort:JSON.stringify(["createdAt","DESC"]),attributes:"id,title,images,description,createdAt,url"};t({type:"article/fetch",payload:e,callback:function(e){if(N(!1),null!==e&&void 0!==e&&e.success){var t=e.results.list;y(t)}}})},C=function(e){switch(e){case 0:return"article one";case 1:return"article two";case 2:return"article three";case 3:return"article four";default:return"article five"}};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(d.Z,{node1:"Tin t\u1ee9c",type2:!0,urlNode1:"/articles",node2:null===v||void 0===v?void 0:v.title}),(0,A.jsx)("section",{className:"article_details_page container",children:(0,A.jsxs)(i.Z,{gutter:[48,32],children:[(0,A.jsxs)(a.Z,{xl:16,lg:16,md:24,xs:24,className:"details",children:[(0,A.jsx)("p",{className:"title_article_details",children:null===v||void 0===v?void 0:v.title}),(0,A.jsx)("div",{className:"descriptions",children:(0,A.jsx)("div",{dangerouslySetInnerHTML:{__html:null===v||void 0===v?void 0:v.content}})})]}),(0,A.jsx)(a.Z,{xl:8,lg:8,md:24,xs:24,children:(0,A.jsxs)("div",{className:"part_one",children:[(0,A.jsxs)("p",{className:"articles_page_title",children:["Tin t\u1ee9c ","&"," s\u1ef1 ki\u1ec7n"]}),(0,A.jsx)("div",{className:"divider"}),(0,A.jsx)("div",{className:"articles_box",children:null===Z||void 0===Z?void 0:Z.map((function(e,t){return(0,A.jsxs)("div",{className:C(t),children:[(0,A.jsx)("div",{className:"image_box"}),(0,A.jsxs)("div",{className:"content",children:[(0,A.jsx)(s.rU,{to:"/article/".concat(null===e||void 0===e?void 0:e.url),className:"article_title",children:null===e||void 0===e?void 0:e.title}),(0,A.jsxs)("p",{className:"date",children:["Ng\xe0y \u0111\u0103ng: ",p()(null===e||void 0===e?void 0:e.createdAt).format("DD/MM/YYYY")]})]})]})}))})]})})]})}),(0,A.jsx)(u.default,{loading:w})]})}},9911:function(e,t,n){var r=n(9439),c=n(2791),i=n(6096);t.Z=function(){var e=c.useState(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1];return c.useEffect((function(){a((0,i.fk)())}),[]),n}},8295:function(e,t,n){n.d(t,{c4:function(){return i}});var r=n(4942),c=n(7462),i=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,s=-1,l={},d={matchHandlers:{},dispatch:function(e){return l=e,o.forEach((function(e){return e(l)})),o.size>=1},subscribe:function(e){return o.size||this.register(),s+=1,o.set(s,e),e(l),s},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),o.clear()},register:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],i=function(n){var i=n.matches;e.dispatch((0,c.Z)((0,c.Z)({},l),(0,r.Z)({},t,i)))},o=window.matchMedia(n);o.addListener(i),e.matchHandlers[n]={mql:o,listener:i},i(o)}))}};t.ZP=d},6096:function(e,t,n){n.d(t,{fk:function(){return a},jD:function(){return i}});var r,c=n(4937),i=function(){return(0,c.Z)()&&window.document.documentElement},a=function(){if(!i())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},9393:function(e,t,n){n.d(t,{b:function(){return r}});var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},9603:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(4942),c=n(7462),i=n(1002),a=n(1694),o=n.n(a),s=n(2791),l=n(1929),d=n(9426),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var f=["xs","sm","md","lg","xl","xxl"];var p=s.forwardRef((function(e,t){var n,a=s.useContext(l.E_),p=a.getPrefixCls,A=a.direction,m=s.useContext(d.Z),v=m.gutter,h=m.wrap,x=m.supportFlexGap,g=e.prefixCls,Z=e.span,y=e.order,b=e.offset,j=e.push,w=e.pull,N=e.className,E=e.children,O=e.flex,C=e.style,S=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=p("col",g),U={};f.forEach((function(t){var n,a={},o=e[t];"number"===typeof o?a.span=o:"object"===(0,i.Z)(o)&&(a=o||{}),delete S[t],U=(0,c.Z)((0,c.Z)({},U),(n={},(0,r.Z)(n,"".concat(k,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(k,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(k,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(k,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(k,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(k,"-rtl"),"rtl"===A),n))}));var D=o()(k,(n={},(0,r.Z)(n,"".concat(k,"-").concat(Z),void 0!==Z),(0,r.Z)(n,"".concat(k,"-order-").concat(y),y),(0,r.Z)(n,"".concat(k,"-offset-").concat(b),b),(0,r.Z)(n,"".concat(k,"-push-").concat(j),j),(0,r.Z)(n,"".concat(k,"-pull-").concat(w),w),n),N,U),T={};if(v&&v[0]>0){var M=v[0]/2;T.paddingLeft=M,T.paddingRight=M}if(v&&v[1]>0&&!x){var _=v[1]/2;T.paddingTop=_,T.paddingBottom=_}return O&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(O),!1!==h||T.minWidth||(T.minWidth=0)),s.createElement("div",(0,c.Z)({},S,{style:(0,c.Z)((0,c.Z)({},T),C),className:D,ref:t}),E)}))},9426:function(e,t,n){var r=(0,n(2791).createContext)({});t.Z=r},8686:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7462),c=n(4942),i=n(1002),a=n(9439),o=n(1694),s=n.n(o),l=n(2791),d=n(1929),u=n(9911),f=n(8295),p=n(9393),A=n(9426),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");function v(e,t){var n=l.useState("string"===typeof e?e:""),r=(0,a.Z)(n,2),c=r[0],o=r[1];return l.useEffect((function(){!function(){if("object"===(0,i.Z)(e))for(var n=0;n<f.c4.length;n++){var r=f.c4[n];if(t[r]){var c=e[r];if(void 0!==c)return void o(c)}}}()}),[JSON.stringify(e),t]),c}var h=l.forwardRef((function(e,t){var n,o=e.prefixCls,p=e.justify,h=e.align,x=e.className,g=e.style,Z=e.children,y=e.gutter,b=void 0===y?0:y,j=e.wrap,w=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=l.useContext(d.E_),E=N.getPrefixCls,O=N.direction,C=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,a.Z)(C,2),k=S[0],U=S[1],D=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),T=(0,a.Z)(D,2),M=T[0],_=T[1],B=v(h,M),F=v(p,M),G=(0,u.Z)(),J=l.useRef(b);l.useEffect((function(){var e=f.ZP.subscribe((function(e){_(e);var t=J.current||0;(!Array.isArray(t)&&"object"===(0,i.Z)(t)||Array.isArray(t)&&("object"===(0,i.Z)(t[0])||"object"===(0,i.Z)(t[1])))&&U(e)}));return function(){return f.ZP.unsubscribe(e)}}),[]);var R=E("row",o),Q=function(){var e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach((function(t,n){if("object"===(0,i.Z)(t))for(var r=0;r<f.c4.length;r++){var c=f.c4[r];if(k[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t})),e}(),P=s()(R,(n={},(0,c.Z)(n,"".concat(R,"-no-wrap"),!1===j),(0,c.Z)(n,"".concat(R,"-").concat(F),F),(0,c.Z)(n,"".concat(R,"-").concat(B),B),(0,c.Z)(n,"".concat(R,"-rtl"),"rtl"===O),n),x),I={},V=null!=Q[0]&&Q[0]>0?Q[0]/-2:void 0,L=null!=Q[1]&&Q[1]>0?Q[1]/-2:void 0;if(V&&(I.marginLeft=V,I.marginRight=V),G){var W=(0,a.Z)(Q,2);I.rowGap=W[1]}else L&&(I.marginTop=L,I.marginBottom=L);var Y=(0,a.Z)(Q,2),H=Y[0],z=Y[1],q=l.useMemo((function(){return{gutter:[H,z],wrap:j,supportFlexGap:G}}),[H,z,j,G]);return l.createElement(A.Z.Provider,{value:q},l.createElement("div",(0,r.Z)({},w,{className:P,style:(0,r.Z)((0,r.Z)({},I),g),ref:t}),Z))}))},7983:function(e,t,n){e.exports=n.p+"static/media/logo.7191b1b61b38b1d4bf4c.png"}}]);
//# sourceMappingURL=978.69aee287.chunk.js.map