(this["webpackJsonpitop1000-test"]=this["webpackJsonpitop1000-test"]||[]).push([[0],{18:function(t,e,c){t.exports={timer:"Timer_timer__3OKGs"}},24:function(t,e,c){"use strict";c.r(e);var n=c(5),s=c.n(n),i=c(17),o=c.n(i),r=c(15),a=c(29),u=c(28),b=c(27),j=c(18),l=c.n(j),O=c(4),p=function(){var t=Object(n.useState)(0),e=Object(r.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)("stop"),o=Object(r.a)(i,2),j=o[0],p=o[1],d=Object(n.useState)(0),f=Object(r.a)(d,2),m=f[0],x=f[1];Object(n.useEffect)((function(){var t=new a.a;return Object(u.a)(1e3).pipe(Object(b.a)(t)).subscribe((function(){"run"===j&&s((function(t){return t+1e3}))})),function(){t.next(),t.complete()}}),[j]);var h=Object(n.useCallback)((function(){p("run")}),[]),k=Object(n.useCallback)((function(){p("stop"),s(0)}),[]),v=Object(n.useCallback)((function(){s(0)}),[]),C=Object(n.useCallback)((function(){var t;x((function(t){return t+1})),0===m&&(t=setTimeout((function(){x(0)}),300)),1===m&&(p("wait"),clearTimeout(t),x(0)),console.log(m)}),[m]);return Object(O.jsxs)("div",{className:l.a.timer,children:[Object(O.jsxs)("span",{children:[" ",new Date(c).toISOString().slice(11,19)]}),Object(O.jsxs)("div",{children:["run"===j?Object(O.jsx)("button",{className:"stop-button",onClick:k,children:"Stop"}):Object(O.jsx)("button",{className:"start-button",onClick:h,children:"Start"}),Object(O.jsx)("button",{onClick:v,children:"Reset"}),Object(O.jsx)("button",{onClick:C,children:"Wait"})]})]})};var d=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(p,{})})};o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(d,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d3caf1a2.chunk.js.map