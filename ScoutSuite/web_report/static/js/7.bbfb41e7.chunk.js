(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7,87],{533:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(697));n(712);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.c,{label:"Name",valuePath:"name"}),Object(a.jsx)(c.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(c.c,{label:"Actions Enabled",valuePath:"ActionsEnabled"}),Object(a.jsx)(c.c,{label:"State",valuePath:"StateValue"}),Object(a.jsxs)("div",{className:"alarm-metrics",children:[Object(a.jsx)(c.c,{label:"Metric",valuePath:"Namespace"}),Object(a.jsx)("span",{children:"::"}),Object(a.jsx)(c.c,{valuePath:"MetricName"})]})]})}},562:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(13)),r=n.n(c),i=n(29),s=n.n(i),o=n(66),l=n(697),u=n(702),j=n(700),d=n(533),b=n(704);t.default=function(e){var t=e.data;if(!t)return null;var n=r()(t,["item","AlarmActions"]),c=r()(t,["item","InsufficientDataActions"],[]);return Object(a.jsxs)(l.a,{data:t,children:[Object(a.jsx)(j.a,{children:Object(a.jsx)(d.default,{})}),Object(a.jsxs)(u.b,{children:[Object(a.jsx)(u.a,{title:"Alarm Actions",children:s()(n)?Object(a.jsx)(l.c,{errorPath:"NoActions",renderValue:function(){return Object(a.jsx)(b.a,{message:"No actions have been configured for this alarm."})}}):Object(o.l)(n)}),Object(a.jsx)(u.a,{title:"Insufficient Data Actions",disabled:s()(c),children:Object(o.l)(c)})]})]})}},694:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var a=n(0),c=n.n(a),r={path_to_issue:[],item:{}},i=c.a.createContext(r),s=c.a.createContext(""),o=c.a.createContext((function(){}))},695:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(694),i=n(66);t.a=function(e){var t=e.path,n=e.children,s=Object(c.useContext)(r.b);return Object(a.jsx)(r.b.Provider,{value:Object(i.a)(s,t),children:n})}},696:function(e,t,n){"use strict";var a=n(11),c=n(1),r=n(0),i=n(690),s=n(7),o=n.n(s),l=n(13),u=n.n(l),j=n(10),d=n.n(j),b=n(694),f=n(66),v=n(67),h=(n(698),n(686)),O=n(204),x=n.n(O),p=n(699),m=n.n(p),g=n(205),P=n(140),N=function(e){var t=e.service,n=e.finding,a=e.path,s=Object(r.useContext)(P.a),o=s.exceptions,l=s.addException,j=s.removeException,d=Object(g.b)().enqueueSnackbar,b=u()(o,[t,n],[]).includes(a);return Object(c.jsx)(i.a,{title:b?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(c.jsx)(h.a,{size:"small",className:"exception-btn",onClick:b?function(){j(t,n,a),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){l(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:b?Object(c.jsx)(m.a,{}):Object(c.jsx)(x.a,{})})})},A=n(30),C=function(e){var t,n=e.label,s=e.separator,l=e.valuePath,j=e.errorPath,h=e.className,O=e.inline,x=e.tooltip,p=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,P=Object(A.g)(),C=Object(r.useContext)(b.a),E=Object(r.useContext)(b.b),S=Object(r.useContext)(b.c),k=Object(f.a)(g||E,l),w=m(e.value||u()(C.item,k,e.value));("boolean"===typeof w&&(w=String(w)),j)?t=(d()(j)?j:[j]).map((function(e){return Object(f.a)(g||E,e)})):t=[k];var _=t.some((function(e){return C.path_to_issues.includes(e)})),z=C.level;if(Object(r.useEffect)((function(){_&&S(z)}),[z]),void 0===w||null===w)return null;var D=Object(c.jsx)(N,{service:P.service,finding:P.finding,path:"".concat(C.path,".").concat(t[0])}),I=Object(c.jsxs)("span",{className:o()(_&&o()("issue",z)),children:[w,_&&D]});return Object(c.jsx)(v.a,{className:o()(h,"partial-value",{inline:O}),label:n,separator:s,value:x?Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},p),{},{children:I})):I})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return s.a}));var a=n(1),c=(n(0),n(694)),r=(n(66),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(c.a.Provider,{value:t,children:n})}),i=n(695),s=n(696)},698:function(e,t,n){},699:function(e,t,n){"use strict";var a=n(35),c=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),i=(0,a(n(38)).default)(r.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},700:function(e,t,n){"use strict";var a=n(1);n(0),n(701);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},701:function(e,t,n){},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return o.b}));var a=n(1),c=n(18),r=n(0),i=n(7),s=n.n(i),o=n(114),l=n(694),u=n(58),j=(n(703),function(e){var t=e.title,n=e.isSelected,i=e.disabled,j=e.onClick,d=e.children,b=Object(r.useState)(""),f=Object(c.a)(b,2),v=f[0],h=f[1],O=v?Object(a.jsxs)(a.Fragment,{children:[t,u.a[v].icon]}):t;return Object(a.jsx)(l.c.Provider,{value:h,children:Object(a.jsx)(o.a,{title:O,className:s()("partial-tab-pane",v),isSelected:n,disabled:i,onClick:j,children:d})})})},703:function(e,t,n){},704:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(7)),r=n.n(c),i=n(115),s=n.n(i),o=(n(705),{icon:Object(a.jsx)(s.a,{fontSize:"inherit"})}),l=function(e){var t=e.message,n=e.icon,c=e.className;return Object(a.jsxs)("div",{className:r()("warning-message",c),children:[n,t]})};l.defaultProps=o,t.a=l},705:function(e,t,n){},712:function(e,t,n){}}]);
//# sourceMappingURL=7.bbfb41e7.chunk.js.map