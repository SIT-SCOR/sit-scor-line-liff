(this["webpackJsonpsit-scor-line-liff"]=this["webpackJsonpsit-scor-line-liff"]||[]).push([[0],{22:function(e,t,c){},63:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);c(35),c(36),c(37);var i=c(0),s=c.n(i),a=c(31),n=c.n(a),r=(c(63),c(22),c(9)),d=c(2),A=c(11),b=c.n(A),j=c(18),o=c(12),l=c.p+"static/media/Logo.ca6111e2.png",h=c.p+"static/media/register.6b52f6bb.png",w=c.p+"static/media/feedback.72304cef.png",g=c(32),O=c.n(g),u=c(1),p=window.liff;function f(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(""),n=Object(o.a)(a,2),d=n[0],A=n[1],g=Object(i.useState)(""),f=Object(o.a)(g,2),x=f[0],m=f[1],B=Object(i.useState)(!1),C=Object(o.a)(B,2),I=C[0],v=C[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://us-central1-sit-scor-b4c38.cloudfunctions.net/app/api/liff/checkregister/".concat(d));case 2:t=e.sent,v(t.data.alreadyHaved);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p.init(Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getProfile();case 2:t=e.sent,s(t.displayName),A(t.userId),m(t.pictureUrl);case 6:case"end":return e.stop()}}),e)})))),e()}),[d]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"container background-header",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("img",{src:l,alt:"logo",width:"90px",height:"95px"})})})}),Object(u.jsxs)("header",{className:"App-header gap-3",children:[Object(u.jsx)("div",{className:"container-fluid p-3",children:Object(u.jsx)("div",{className:"card maincard-background",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-5",children:x&&""!==x?Object(u.jsx)("img",{width:"35%",src:x,alt:"user profile",style:{borderRadius:"50%"}}):Object(u.jsx)("img",{width:"35%",src:"data:image/png;base64,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",alt:"user loading"})}),Object(u.jsx)("div",{className:"col-7 d-flex align-items-center",style:{fontSize:"20px"},children:c&&""!==c?Object(u.jsx)("span",{children:c}):Object(u.jsx)("span",{children:"Loading"})})]})})})}),Object(u.jsx)("div",{className:"container-fluid p-3",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:!1===I?Object(u.jsx)(r.b,{to:{pathname:"/Register",state:{userLineID:d}},children:Object(u.jsxs)("button",{type:"button",className:"btn btn-outline-primary",style:{backgroundColor:"white",width:"100%",height:"22vh",borderRadius:"15px",border:"5px solid #4E5FC6"},children:[Object(u.jsx)("img",{src:h,alt:"Register",width:"37%"}),Object(u.jsx)("p",{children:"Register"})]})}):Object(u.jsx)(r.b,{to:{pathname:"/EditInfo",state:{userLineID:d}},children:Object(u.jsxs)("button",{type:"button",className:"btn btn-outline-primary",style:{backgroundColor:"white",width:"100%",height:"22vh",borderRadius:"15px",border:"5px solid #4E5FC6"},children:[Object(u.jsx)("img",{src:h,alt:"Edit",width:"37%"}),Object(u.jsx)("p",{children:"Edit"})]})})})})}),Object(u.jsx)("div",{className:"container-fluid p-3",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(r.b,{to:{pathname:"/Feedback",state:{userLineID:d,name:c,pictureUrl:x}},children:Object(u.jsxs)("button",{type:"button",className:"btn btn-outline-primary",style:{backgroundColor:"white",width:"100%",height:"22vh",borderRadius:"15px",border:"5px solid #4E5FC6"},children:[Object(u.jsx)("img",{src:w,alt:"Feedback",width:"37%"}),Object(u.jsx)("p",{children:"Feedback"})]})})})})}),Object(u.jsx)("p",{children:d})]})]})}function x(){return Object(u.jsx)("div",{children:"Hello"})}function m(){return Object(u.jsx)("div",{children:"Feedback"})}function B(){return Object(u.jsx)("div",{children:"Edit Info"})}var C=function(){return Object(u.jsx)(r.a,{basename:"/sit-scor-line-liff",children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/EditInfo",component:B}),Object(u.jsx)(d.a,{exact:!0,path:"/Feedback",component:m}),Object(u.jsx)(d.a,{exact:!0,path:"/Register",component:x}),Object(u.jsx)(d.a,{exact:!0,path:"/",component:f})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),i(e),s(e),a(e),n(e)}))};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),I()}},[[92,1,2]]]);
//# sourceMappingURL=main.970d37a6.chunk.js.map