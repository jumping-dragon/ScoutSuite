(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[108],{549:function(e,t,a){"use strict";a.r(t);var n=a(1),r=(a(0),a(697)),c=a(66);t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.c,{label:"Name",valuePath:"name",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Resource ID",valuePath:"resource_id",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Creation Date",valuePath:"creation_time",renderValue:c.h}),Object(n.jsx)(r.c,{label:"Flow Log Status",valuePath:"flow_log_status",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Deliver Logs Status",valuePath:"deliver_logs_status",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Deliver Logs Error Messages",valuePath:"deliver_logs_error_message",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Traffic Type",valuePath:"traffic_type",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Log Destination Type",valuePath:"log_destination_type",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Log Destination",valuePath:"log_destination",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Log Format",valuePath:"log_format",renderValue:c.q}),Object(n.jsx)(r.c,{label:"Max Aggregation Interval",valuePath:"max_aggregation_interval",renderValue:c.q})]})}},694:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i}));var n=a(0),r=a.n(n),c={path_to_issue:[],item:{}},l=r.a.createContext(c),o=r.a.createContext(""),i=r.a.createContext((function(){}))},695:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a(694),l=a(66);t.a=function(e){var t=e.path,a=e.children,o=Object(r.useContext)(c.b);return Object(n.jsx)(c.b.Provider,{value:Object(l.a)(o,t),children:a})}},696:function(e,t,a){"use strict";var n=a(11),r=a(1),c=a(0),l=a(690),o=a(7),i=a.n(o),u=a(13),s=a.n(u),b=a(10),d=a.n(b),v=a(694),j=a(66),f=a(67),p=(a(698),a(686)),h=a(204),x=a.n(h),O=a(699),g=a.n(O),m=a(205),P=a(140),_=function(e){var t=e.service,a=e.finding,n=e.path,o=Object(c.useContext)(P.a),i=o.exceptions,u=o.addException,b=o.removeException,d=Object(m.b)().enqueueSnackbar,v=s()(i,[t,a],[]).includes(n);return Object(r.jsx)(l.a,{title:v?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:v?function(){b(t,a,n),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,a,n),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:v?Object(r.jsx)(g.a,{}):Object(r.jsx)(x.a,{})})})},V=a(30),q=function(e){var t,a=e.label,o=e.separator,u=e.valuePath,b=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,g=e.renderValue,m=e.basePathOverwrite,P=Object(V.g)(),q=Object(c.useContext)(v.a),C=Object(c.useContext)(v.b),D=Object(c.useContext)(v.c),y=Object(j.a)(m||C,u),E=g(e.value||s()(q.item,y,e.value));("boolean"===typeof E&&(E=String(E)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(j.a)(m||C,e)})):t=[y];var L=t.some((function(e){return q.path_to_issues.includes(e)})),w=q.level;if(Object(c.useEffect)((function(){L&&D(w)}),[w]),void 0===E||null===E)return null;var A=Object(r.jsx)(_,{service:P.service,finding:P.finding,path:"".concat(q.path,".").concat(t[0])}),N=Object(r.jsxs)("span",{className:i()(L&&i()("issue",w)),children:[E,L&&A]});return Object(r.jsx)(f.a,{className:i()(p,"partial-value",{inline:h}),label:a,separator:o,value:x?Object(r.jsx)(l.a,Object(n.a)(Object(n.a)({title:E},O),{},{children:N})):N})};q.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=q},697:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l.a})),a.d(t,"c",(function(){return o.a}));var n=a(1),r=(a(0),a(694)),c=(a(66),function(e){var t=e.data,a=e.children;return console.info("PARTIAL DATA",t),Object(n.jsx)(r.a.Provider,{value:t,children:a})}),l=a(695),o=a(696)},698:function(e,t,a){},699:function(e,t,a){"use strict";var n=a(35),r=a(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),l=(0,n(a(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=l}}]);
//# sourceMappingURL=108.305d30de.chunk.js.map