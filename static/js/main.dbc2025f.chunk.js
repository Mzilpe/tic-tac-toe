(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={card:"Card_card__1D64W"}},function(e,n,t){e.exports={button:"Button_button__GDzc5"}},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(3),i=t.n(a),o=(t(14),t.p,t(15),t(7)),s=t(2);t(16),t(17);var l=t(0),j=function(e){var n=e.value,t=e.onClick,c=n?"squares ".concat(n):"squares";return Object(l.jsx)("button",{className:c,onClick:t,children:n})},u=(t(19),function(e){var n=e.grid,t=e.onClick;return Object(l.jsx)("div",{className:"board",children:n.map((function(e,n){return Object(l.jsx)(j,{value:e,onClick:function(){return t(n)}},n)}))})}),b=(t(20),t(8)),d=t.n(b),O=function(e){return Object(l.jsx)("div",{className:"".concat(d.a.card," ").concat(e.className),children:e.children})},h=t(9),f=t.n(h),m=function(e){return Object(l.jsx)("button",{className:f.a.button,onClick:e.onClick,children:e.children})},x=function(e){return Object(l.jsx)("div",{className:"backdrop",onClick:e.onConfirm})},g=function(e){return Object(l.jsxs)(O,{className:"modal",children:[Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h2",{children:e.title})}),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("p",{children:e.message})}),Object(l.jsx)("footer",{className:"actions",children:Object(l.jsx)(m,{onClick:e.onConfirm,children:"Play Again"})})]})},C=function(e){return Object(l.jsxs)(r.a.Fragment,{children:[i.a.createPortal(Object(l.jsx)(x,{onConfirm:e.onConfirm}),document.getElementById("backdrop-root")),i.a.createPortal(Object(l.jsx)(g,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root"))]})},v=function(){var e=Object(c.useState)([Array(9).fill(null)]),n=Object(s.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(0),j=Object(s.a)(i,2),b=j[0],d=j[1],O=Object(c.useState)(!0),h=Object(s.a)(O,2),f=h[0],m=h[1],x=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var c=Object(s.a)(n[t],3),r=c[0],a=c[1],i=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[i])return e[r]}return null}(t[b]),g=f?"X":"O",v=Object(c.useState)(!1),k=Object(s.a)(v,2),N=k[0],p=k[1];return Object(l.jsxs)(r.a.Fragment,{children:[x&&Object(l.jsxs)("div",{className:"winner-container",children:[Object(l.jsx)("h3",{children:"Congratulations..."}),Object(l.jsx)("h1",{className:"winner-h",children:x}),Object(l.jsx)("h2",{children:" You WON..."}),Object(l.jsx)("button",{className:"btn-play",onClick:function(){a([Array(9).fill(null)]),d(0),m(!0)},children:"Play Again"})]}),N&&Object(l.jsx)(C,{title:"Game Over",message:"It was nice Game !",onConfirm:function(){p(!1),a([Array(9).fill(null)]),d(0),m(!0)}}),!x&&Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("h1",{children:"Tic Tac Toe"}),Object(l.jsx)(u,{grid:t[b],onClick:function(e){var n=t.slice(0,b+1),c=n[b],r=Object(o.a)(c);x||r[e]||(r[e]=g,a([].concat(Object(o.a)(n),[r])),d(n.length),m(!f),9===n.length&&(console.log("check"),p(!0)))}})]})]})};var k=function(){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)(v,{})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),N()}],[[21,1,2]]]);
//# sourceMappingURL=main.dbc2025f.chunk.js.map