(this["webpackJsonpreact-memo-app"]=this["webpackJsonpreact-memo-app"]||[]).push([[0],{125:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),i=c(11),a=c.n(i),r=(c(97),c(151)),O=c(160),d=c(24),s=c(13),_=c(30),j=c(25),l=c(161),b=c(158),S=c(165),E=c(166),T=c(159),m=c(51),u=c(153),h=c(155),p=c(156),R=c(157),C=c(3),P=Object(r.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},margin:{marginBottom:e.spacing(2)}}})),x=function(){var e=P();return Object(C.jsx)(u.a,{className:e.margin,position:"static",children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(b.a,{variant:"h6",className:e.title,children:"MEMO\u5e33"}),Object(C.jsx)(T.a,{color:"inherit",children:"Login"})]})})},D=c(52),v=c.n(D),A=c(53),g=(c(126),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,".firebaseapp.com"),databaseURL:"https://".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,".firebaseapp.com"),projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,".appspot.com"),messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MEASUREMENT_ID});A.a.initializeApp(g);var f=A.a,N=A.a.firestore(),W=function(){var e=Object(o.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(o.useEffect)((function(){"local"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENVIRONMENT?v.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LOCAL_DB_URL).then((function(e){n(e.data),console.log("fetching ".concat(e.data.length," memo data."))})).catch((function(e){console.error(e)})):"production"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENVIRONMENT&&N.collection("memos").orderBy("createdAt","desc").get().then((function(e){n(e.docs.map((function(e){return e.data()}))),console.log("fetching ".concat(e.docs.length," memo data."))})).catch((function(e){console.error(e)}))}),[]),c},K=function(){var e=Object(m.a)(),t=e.register,c=e.handleSubmit,n=e.errors,i=Object(o.useState)(),a=Object(j.a)(i,2),r=a[0],u=a[1],h=Object(s.e)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x,{}),Object(C.jsx)(O.a,{children:Object(C.jsxs)(l.a,{container:!0,spacing:3,children:[Object(C.jsx)(l.a,{item:!0,children:Object(C.jsx)(b.a,{variant:"h4",component:"h2",children:"\u65b0\u898f\u30e1\u30e2\u8ffd\u52a0"})}),Object(C.jsxs)("form",{autoComplete:"off",onSubmit:c((function(e){console.log(e),function(e){"local"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENVIRONMENT?v.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LOCAL_DB_URL,{title:e.title,body:e.body},{headers:{"Content-Type":"application/json"}}).catch((function(e){console.error(e)})):"production"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENVIRONMENT&&N.collection("memos").add({title:e.title,body:e.body,createdAt:f.firestore.FieldValue.serverTimestamp()}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error(e)}))}(r),h.push("/")})),style:{width:"100%"},children:[Object(C.jsx)(l.a,{item:!0,children:Object(C.jsx)(S.a,{label:"title",margin:"dense",fullWidth:!0,name:"title",helperText:n.title&&n.title.message,inputRef:t({required:"title\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059",maxLength:{value:30,message:"title\u306f30\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}}),onChange:function(e){return u(Object(_.a)(Object(_.a)({},r),{},{title:e.target.value}))}})}),Object(C.jsx)(l.a,{item:!0,children:Object(C.jsx)(S.a,{label:"body",margin:"dense",fullWidth:!0,name:"body",helperText:n.body&&n.body.message,inputRef:t({required:"body\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059",minLength:{value:10,message:"body\u306f10\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}}),onChange:function(e){return u(Object(_.a)(Object(_.a)({},r),{},{body:e.target.value}))}})}),Object(C.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"\u4fdd\u5b58"})]})]})}),Object(C.jsx)(E.a,{my:2,children:Object(C.jsx)(d.b,{to:"/",children:Object(C.jsx)(T.a,{type:"button",children:"\u4e00\u89a7\u30da\u30fc\u30b8\u306b\u623b\u308b"})})})]})},L=function(){var e=Object(s.f)().state;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x,{}),Object(C.jsx)("h1",{children:"\u8a73\u7d30\u30da\u30fc\u30b8"}),Object(C.jsxs)("table",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"\u30bf\u30a4\u30c8\u30eb"}),Object(C.jsx)("td",{children:e.title})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"\u672c\u6587"}),Object(C.jsx)("td",{children:e.body})]})]}),Object(C.jsx)(d.b,{to:"/",children:Object(C.jsx)("button",{type:"button",children:"\u4e00\u89a7\u30da\u30fc\u30b8\u306b\u623b\u308b"})}),Object(C.jsx)("button",{type:"button",children:"\u524a\u9664"}),Object(C.jsx)(d.b,{to:{pathname:"/edit",state:e},children:Object(C.jsx)("button",{type:"button",children:"\u7de8\u96c6"})})]})},H=function(){var e=Object(m.a)(),t=e.register,c=e.handleSubmit,n=e.errors,i=Object(s.e)(),a=Object(s.f)().state,r=Object(o.useState)(a),u=Object(j.a)(r,2),h=u[0],p=u[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x,{}),Object(C.jsx)(O.a,{children:Object(C.jsxs)(l.a,{container:!0,spacing:3,children:[Object(C.jsx)(l.a,{item:!0,children:Object(C.jsx)(b.a,{variant:"h4",component:"h2",children:"\u30e1\u30e2\u7de8\u96c6"})}),Object(C.jsxs)("form",{autoComplete:"off",onSubmit:c((function(){console.log(h),function(e){"local"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENVIRONMENT?v.a.put("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LOCAL_DB_URL,"/").concat(e.id),{title:e.title,body:e.body},{headers:{"Content-Type":"application/json"}}).catch((function(e){console.error(e)})):"production"===Object({NODE_ENV:"production",PUBLIC_URL:"/react-memo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENVIRONMENT&&N.collection("memos").doc(e.id).set({title:e.title,body:e.body,createdAt:f.firestore.FieldValue.serverTimestamp()}).then((function(){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error(e)}))}(h),i.push({pathname:"/detail",state:h})})),style:{width:"100%"},children:[Object(C.jsx)(l.a,{item:!0,children:Object(C.jsx)(S.a,{label:"title",margin:"dense",fullWidth:!0,name:"title",helperText:n.title&&n.title.message,value:h.title,inputRef:t({required:"title\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059",maxLength:{value:30,message:"title\u306f30\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}}),onChange:function(e){return p(Object(_.a)(Object(_.a)({},h),{},{title:e.target.value}))}})}),Object(C.jsx)(l.a,{item:!0,children:Object(C.jsx)(S.a,{label:"body",margin:"dense",fullWidth:!0,name:"body",helperText:n.body&&n.body.message,value:h.body,inputRef:t({required:"body\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059",minLength:{value:10,message:"body\u306f10\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}}),onChange:function(e){return p(Object(_.a)(Object(_.a)({},h),{},{body:e.target.value}))}})}),Object(C.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"\u4fdd\u5b58"})]})]})}),Object(C.jsx)(E.a,{my:2,children:Object(C.jsx)(d.b,{to:"/",children:Object(C.jsx)(T.a,{type:"button",children:"\u4e00\u89a7\u30da\u30fc\u30b8\u306b\u623b\u308b"})})})]})},F=c(162),y=c(164),I=c(163),U=Object(r.a)((function(){return{card:{height:180,width:180},createButton:{height:"100%",width:"100%"},detailButton:{height:"100%",width:"100%","& a":{textDecoration:"none",color:"inherit"}}}})),B=function(){var e=U(),t=W();return Object(C.jsxs)("div",{className:"List",children:[Object(C.jsx)(x,{}),Object(C.jsxs)(l.a,{container:!0,direction:"row",spacing:3,children:[Object(C.jsx)(l.a,{item:!0,spacing:3,children:Object(C.jsx)(F.a,{className:e.card,children:Object(C.jsx)(T.a,{className:e.createButton,children:Object(C.jsx)(d.b,{to:"/create",children:Object(C.jsx)(I.a,{fontSize:"large"})})})})}),t.map((function(t){return Object(C.jsx)(l.a,{item:!0,spacing:3,children:Object(C.jsx)(F.a,{className:e.card,children:Object(C.jsx)(T.a,{className:e.detailButton,children:Object(C.jsx)(d.b,{to:{pathname:"/detail",state:t},children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(b.a,{variant:"h6",component:"h2",children:t.title}),Object(C.jsx)(b.a,{children:t.body})]})})})})},t.id)}))]})]})},V=function(){return Object(C.jsx)(d.a,{basename:"/react-memo-app",children:Object(C.jsxs)("div",{children:[Object(C.jsx)(s.a,{path:"/",exact:!0,component:B}),Object(C.jsx)(s.a,{path:"/create",component:K}),Object(C.jsx)(s.a,{path:"/detail",component:L}),Object(C.jsx)(s.a,{path:"/edit",component:H})]})})},w=Object(r.a)((function(){return{root:{margin:"20px 0"}}}));var M=function(){var e=w();return Object(C.jsx)(O.a,{className:e.root,children:Object(C.jsx)(V,{})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,169)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),o(e),n(e),i(e),a(e)}))};a.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(M,{})}),document.getElementById("root")),J()},97:function(e,t,c){}},[[125,1,2]]]);
//# sourceMappingURL=main.82bba090.chunk.js.map