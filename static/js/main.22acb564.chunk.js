(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var n=s(1),o=s.n(n),l=s(3),a=s.n(l),r=(s(9),s(0)),p=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("h1",{children:"Simple Calculator"})})},c=s(4),u=function(e){return Object(r.jsx)("div",{className:"screen",children:Object(r.jsx)("h3",{children:e.display})})},b=function(e){var t=Object(n.useState)({display:""}),s=Object(c.a)(t,2),o=s[0],l=s[1],a=function(t){e.expression.push(t.target.value),l({display:e.expression}),console.log(e.expression)};return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(u,{display:o.display}),Object(r.jsxs)("div",{className:"keypad",children:[Object(r.jsx)("input",{type:"button",value:"AC",style:{backgroundColor:"rgb(255, 00, 00)"},className:"button",onClick:function(t){t.preventDefault(),e.expression.length=0,l({display:e.expression}),console.log("cleared")}}),Object(r.jsx)("input",{type:"button",value:"C",style:{backgroundColor:"rgb(255, 250, 00)"},className:"button",onClick:function(t){t.preventDefault(),e.expression.pop(),l({display:e.expression}),console.log(e.expression)}}),Object(r.jsx)("input",{type:"button",value:"%",style:{backgroundColor:"rgb(47, 255, 99)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"/",style:{backgroundColor:"rgb(47, 255, 99)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"7",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"8",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"9",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"x",style:{backgroundColor:"rgb(47, 255, 99)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"4",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"5",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"6",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"+",style:{backgroundColor:"rgb(47, 255, 99)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"1",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"2",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"3",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"-",style:{backgroundColor:"rgb(47, 255, 99)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"00",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"0",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:".",style:{backgroundColor:"rgb(158, 255, 47)"},className:"button",onClick:a}),Object(r.jsx)("input",{type:"button",value:"=",style:{backgroundColor:"rgb(47, 255, 99)"},className:"button",onClick:function(){var t=0;console.log("evaluated");for(var s=0;s<e.expression.length;s++)"+"===e.expression[s]||"-"===e.expression[s]||"/"===e.expression[s]||"*"===e.expression[s]||"%"===e.expression[s]||"+"===e.expression[s-1]||"-"===e.expression[s-1]||"/"===e.expression[s-1]||"*"===e.expression[s-1]||"%"===e.expression[s-1]?e.evalexp.push(e.expression[s]):(e.expression[s-1]=e.expression[s-1]+e.expression[s],e.evalexp.pop(),e.evalexp.push(e.expression[s-1]));console.log(e.evalexp);for(var n=0;n<e.evalexp.length;n++)"+"===e.evalexp[n]&&(t=parseFloat(e.evalexp[n-1])+parseFloat(e.evalexp[n+1]),l({display:t}),e.expression.length=0,e.evalexp.length=0),"-"===e.evalexp[n]&&(t=parseFloat(e.evalexp[n-1])-parseFloat(e.evalexp[n+1]),l({display:t}),e.expression.length=0,e.evalexp.length=0),"*"===e.evalexp[n]&&(t=parseFloat(e.evalexp[n-1])*parseFloat(e.evalexp[n+1]),l({display:t}),e.expression.length=0,e.evalexp.length=0),"/"===e.evalexp[n]&&(t=parseFloat(e.evalexp[n-1])/parseFloat(e.evalexp[n+1]),l({display:t}),e.expression.length=0,e.evalexp.length=0),"%"===e.evalexp[n]&&(t=parseFloat(e.evalexp[n-1])%parseFloat(e.evalexp[n+1]),l({display:t}),e.expression.length=0,e.evalexp.length=0)}})]})]})},i=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(p,{}),Object(r.jsx)(b,{expression:[],evalexp:[]})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,a=t.getTTFB;s(e),n(e),o(e),l(e),a(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(i,{})}),document.getElementById("root")),x()},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.22acb564.chunk.js.map