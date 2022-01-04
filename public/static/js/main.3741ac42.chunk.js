(this["webpackJsonpcalendar-app-ts"]=this["webpackJsonpcalendar-app-ts"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),o=n(7),s=n(25),i=n(57),l=n(5),u="[UI] Open modal",j="[UI] Close modal",d="[EVENT] Set active event",b="[EVENT] Clean event",m="[EVENT] Add new event",f="[EVENT] Delete event",p="[EVENT] Clear active event",O="[EVENT] Update event",v="[EVENT] Event loaded",h="[AUTH] Finish checking login state",x="[AUTH] Start login",g="[AUTH] Login",y="[AUTH] Logout",N={checking:!0},E=n(46),w={events:[],activeEvent:null},k={modalOpen:!1},S=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(E.a)(e.events),[t.payload])});case p:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case O:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(l.a)(Object(l.a)({},e),{},{events:Object(E.a)(t.payload)});case b:return Object(l.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{uid:t.payload.uid,name:t.payload.name});case g:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,T=Object(s.d)(S,C(Object(s.a)(i.a))),D=n(31),I=n(6),P=n(12),V=n.n(P),A=n(18),U=n(15),_=n.n(U),H="https://calendar-app-mern-a.herokuapp.com:42775/api",R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(H,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(H,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{start:new Date(e.start),end:new Date(e.end)})}))},L=function(e){return{type:m,payload:e}},J=function(e){return{type:d,payload:e}},M=function(){return{type:p}},q=function(e){return{type:O,payload:e}},B=function(){return{type:f}},X=function(e){return{type:v,payload:e}},z=function(){return function(e){localStorage.clear(),e(W()),e({type:b})}},K=function(e){return{type:g,payload:e}},Q=function(){return{type:h}},W=function(){return{type:y}},Y=n(11),Z=n(23),$=function(e){var t=Object(a.useState)(e),n=Object(Y.a)(t,2),r=n[0],c=n[1];return[r,function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(Z.a)({},t.name,t.value)))},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)}]},ee=(n(80),n(2)),te=function(){var e=Object(o.b)(),t=$({lEmail:"pipo@gmail.com",lPassword:"123456"}),n=Object(Y.a)(t,2),a=n[0],r=n[1],c=$({rName:"Chiquillo",rEmail:"Chiquillo@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(Y.a)(c,2),i=s[0],l=s[1],u=a.lEmail,j=a.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,f=i.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(A.a)(V.a.mark((function e(t){var r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:c.uid,name:c.name}))):_.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==f)return _.a.fire("Error","Passwords don't match","error");var n,a,r;e((n=d,a=b,r=m,function(){var e=Object(A.a)(V.a.mark((function e(t){var c,o;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:o.uid,name:o.name}))):_.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:f,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(45),ae=n(20),re=n.n(ae),ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(z())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},se=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsxs)("span",{children:[" - ",a.name]})]})},ie=n(42),le=n.n(ie),ue=n(43),je=n.n(ue),de=function(){return{type:u}},be={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};le.a.setAppElement("#root");var me=re()().minute(0).seconds(0).add(1,"hours"),fe=me.clone().add(1,"hours"),pe={title:"",notes:"",start:me.toDate(),end:fe.toDate()},Oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(me.toDate()),c=Object(Y.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(fe.toDate()),d=Object(Y.a)(u,2),b=d[0],m=d[1],f=Object(a.useState)(!0),p=Object(Y.a)(f,2),O=p[0],v=p[1],h=Object(a.useState)(pe),x=Object(Y.a)(h,2),g=x[0],y=x[1],N=g.notes,E=g.title,w=g.start,k=g.end;Object(a.useEffect)((function(){y(n||pe)}),[n,y]);var S=function(e){var t=e.target;y(Object(l.a)(Object(l.a)({},g),{},Object(Z.a)({},t.name,t.value)))},C=function(){e({type:j}),e(M()),y(pe)};return Object(ee.jsxs)(le.a,{isOpen:t,onRequestClose:C,style:be,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[n?Object(ee.jsx)("h1",{children:" Editar evento "}):Object(ee.jsx)("h1",{children:" Nuevo evento "}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=re()(w),c=re()(k);r.isSameOrAfter(c)?_.a.fire({title:"Error",text:"Fecha de fin debe ser posterior a la fecha de inicio",icon:"error",confirmButtonText:"OK"}):E.trim().length<2?v(!1):(e(n?(a=g,function(){var e=Object(A.a)(V.a.mark((function e(t){var n,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(q(a)):_.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(A.a)(V.a.mark((function t(n,a){var r,c,o,s,i;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,F("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:c,name:o},console.log(e),n(L(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),v(!0),C())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(je.a,{onChange:function(e){i(e),y(Object(l.a)(Object(l.a)({},g),{},{start:e}))},value:s,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(je.a,{onChange:function(e){m(e),y(Object(l.a)(Object(l.a)({},g),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"T\xedtulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:E,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Descripci\xf3n del evento",rows:"5",name:"notes",value:N,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},ve=(n(112),n(113),function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(M()),e(de())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})}),he=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(A.a)(V.a.mark((function e(t,n){var a,r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,F("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(B()):_.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Borrar evento "})]})};re.a.locale("es");var xe=Object(ne.b)(re.a),ge=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(Y.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(A.a)(V.a.mark((function e(t){var n,a,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=G(a.event),t(X(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),_.a.fire("Error",e.t0.message,"error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ce,{}),Object(ee.jsx)(ne.a,{localizer:xe,events:n,startAccessor:"start",endAccessor:"end",messages:oe,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadiums:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(J(t)),e(de())},onSelectEvent:function(t){e(J(t))},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(M())},selectable:!0,view:l,components:{event:se}}),Object(ee.jsx)(ve,{}),r&&Object(ee.jsx)(he,{}),Object(ee.jsx)(Oe,{})]})},ye=function(e){var t=e.children;return Object(o.c)((function(e){return e.auth})).uid?t:Object(ee.jsx)(I.a,{to:"/login"})},Ne=function(e){var t=e.children;return Object(o.c)((function(e){return e.auth})).uid?Object(ee.jsx)(I.a,{to:"/"}):t},Ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).checking;return Object(a.useEffect)((function(){e(function(){var e=Object(A.a)(V.a.mark((function e(t){var n,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:a.uid,name:a.name}))):t(Q());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object(ee.jsx)("h5",{children:"Loading..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsxs)(I.d,{children:[Object(ee.jsx)(I.b,{path:"/login",element:Object(ee.jsx)(Ne,{children:Object(ee.jsx)(te,{})})}),Object(ee.jsx)(I.b,{path:"/*",element:Object(ee.jsx)(ye,{children:Object(ee.jsx)(ge,{})})})]})})},we=function(){return Object(ee.jsx)(o.a,{store:T,children:Object(ee.jsx)(Ee,{})})};n(114);c.a.render(Object(ee.jsx)(we,{}),document.getElementById("root"))},80:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.3741ac42.chunk.js.map