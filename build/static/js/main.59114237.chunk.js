(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{54:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(12),c=n(14),i=n.n(c),o=n(4),l=n(10),u=n(13),j=n(15),p=n(20),d=n(16),h=n(19),b=n(63),x=n(18),m=n.n(x),f=(n(54),n(2)),O=function(){return Object(f.jsxs)("nav",{className:"header-container",children:[Object(f.jsx)("p",{className:"head-logo",children:"Registration"}),Object(f.jsxs)("div",{className:"link-container",children:[Object(f.jsx)(r.b,{to:"/",className:"link-item",children:"Register"}),Object(f.jsx)(r.b,{to:"/users",className:"link-item",children:"Users"})]})]})},g=(n(59),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",age:"",contact:"",password:"",isError:!1,errorMsg:"",isLoading:!1},e.onName=function(t){e.setState({name:t.target.value})},e.onPassword=function(t){e.setState({password:t.target.value})},e.onAge=function(t){e.setState({age:t.target.value})},e.onContact=function(t){e.setState({contact:t.target.value})},e.onForm=function(){var t=Object(u.a)(Object(l.a)().mark((function t(n){var a,s,r,c,i,o,u,j,p,d;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.setState({isLoading:!0}),a=e.state,s=a.name,r=a.age,c=a.contact,i=a.password,o={name:s,age:parseInt(r),contact:c,password:i,id:Object(b.a)()},"http://localhost:5000/",u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},t.prev=6,t.next=9,fetch("http://localhost:5000/",u);case 9:if(!0!==(j=t.sent).ok){t.next=14;break}e.setState({isLoading:!1,name:"",password:"",age:"",contact:"",isError:!1,errorMsg:""}),t.next=19;break;case 14:return t.next=16,j.json();case 16:p=t.sent,d=p.message,e.setState({isError:!0,errorMsg:d,isLoading:!1});case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(6),e.setState({isError:!0,errorMsg:"Something went wrong. Please try again later.",isLoading:!1});case 24:case"end":return t.stop()}}),t,null,[[6,21]])})));return function(e){return t.apply(this,arguments)}}(),e.renderInitial=function(){var t=e.state,n=t.isError,a=t.errorMsg;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:"button",type:"submit",children:"Submit"}),n&&Object(f.jsx)("p",{className:"error",children:a})]})},e.renderLoader=function(){return Object(f.jsx)("button",{className:"button back",type:"button",disabled:!0,children:Object(f.jsx)(m.a,{type:"Oval",color:"#ffffff",height:25,width:25})})},e.renderButton=function(){switch(e.state.isLoading){case!1:return e.renderInitial();case!0:return e.renderLoader();default:return null}},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.age,a=e.contact,s=e.password;return Object(f.jsxs)("div",{className:"bg-container",children:[Object(f.jsx)(O,{}),Object(f.jsx)("div",{className:"app-container",children:Object(f.jsxs)("form",{className:"form-container",onSubmit:this.onForm,children:[Object(f.jsx)("h1",{className:"head",children:"Register"}),Object(f.jsx)("input",{className:"input",type:"text",placeholder:"Enter username",onChange:this.onName,value:t}),Object(f.jsx)("input",{className:"input",type:"password",placeholder:"Enter password",onChange:this.onPassword,value:s}),Object(f.jsx)("input",{className:"input",type:"text",placeholder:"Enter Age",onChange:this.onAge,value:n}),Object(f.jsx)("input",{className:"input",type:"text",placeholder:"+91 ",onChange:this.onContact,value:a}),this.renderButton()]})})]})}}]),n}(a.Component)),v=g,N=n(27),S=n(29),w=n(28),k=(n(60),"INITIAL"),y="PROGRESS",L="SUCCESS",C="FAILURE",E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={apiStatus:k,userList:[]},e.componentDidMount=function(){e.getUsers()},e.getUsers=Object(u.a)(Object(l.a)().mark((function t(){var n,a;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:y}),t.prev=1,"http://localhost:5000/users/",t.next=5,fetch("http://localhost:5000/users/");case 5:if(!0!==(n=t.sent).ok){t.next=13;break}return t.next=9,n.json();case 9:a=t.sent,e.setState({apiStatus:L,userList:a.users}),t.next=14;break;case 13:e.setState({apiStatus:C});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),e.setState({apiStatus:C});case 19:case"end":return t.stop()}}),t,null,[[1,16]])}))),e.onDelete=function(){var t=Object(u.a)(Object(l.a)().mark((function t(n){var a,s,r,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:y}),t.prev=1,a="http://localhost:5000/delete/".concat(n),s={method:"DELETE"},t.next=6,fetch(a,s);case 6:if(!0!==(r=t.sent).ok){t.next=15;break}return t.next=10,r.json();case 10:c=t.sent,console.log(c),e.setState((function(e){return{userList:e.userList.filter((function(e){return e.id!==n})),apiStatus:L}})),t.next=16;break;case 15:e.setState({apiStatus:C});case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),e.setState({apiStatus:C});case 21:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(e){return t.apply(this,arguments)}}(),e.renderLoader=function(){return Object(f.jsx)("div",{className:"app-container-user",children:Object(f.jsx)(m.a,{type:"Oval",color:"#ffffff",height:50,width:80})})},e.renderPopup=function(e){return Object(f.jsx)(N.a,{modal:!0,trigger:Object(f.jsx)("button",{type:"button",className:"preview",children:"Preview"}),children:function(t){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"modal-container",children:[Object(f.jsx)(w.a,{className:"icon-close",onClick:function(){return t()}}),Object(f.jsxs)("p",{className:"text-popup",children:["Id: ",e.id]}),Object(f.jsxs)("p",{className:"text-popup",children:["Name: ",e.name]}),Object(f.jsxs)("p",{className:"text-popup",children:["Age: ",e.age]}),Object(f.jsxs)("p",{className:"text-popup",children:["Contact: ",e.contact]})]})})}})},e.renderSuccess=function(){var t=e.state.userList,n=0===t.length;return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)("div",{className:"app-container-user",children:Object(f.jsx)("h1",{className:"name",children:"No Users!"})}),!n&&Object(f.jsxs)("ul",{className:"app-container-user",children:[Object(f.jsxs)("li",{className:"list-item-user",children:[Object(f.jsx)("p",{className:"text height",children:"Name"}),Object(f.jsx)("p",{className:"text height",children:"Age"}),Object(f.jsx)("p",{className:"text height",children:"Contact"}),Object(f.jsx)("p",{className:"text height",children:"Preview"}),Object(f.jsx)("p",{className:"text height",children:"Delete"})]},"column"),t.map((function(t){return Object(f.jsxs)("li",{className:"list-item-user",children:[Object(f.jsx)("p",{className:"text",children:t.name}),Object(f.jsx)("p",{className:"text",children:t.age}),Object(f.jsx)("p",{className:"text",children:t.contact}),e.renderPopup(t),Object(f.jsx)(S.a,{color:"#ffffff",size:20,className:"icon",onClick:function(){return e.onDelete(t.id)}})]},t.id)}))]})]})},e.renderFailure=function(){return Object(f.jsxs)("div",{className:"app-container-user",children:[Object(f.jsx)("h1",{className:"name",children:"Something went wrong.Try Again"}),Object(f.jsx)("button",{className:"button-retry",type:"button",onClick:e.getUsers,children:"Retry"})]})},e.renderResult=function(){switch(e.state.apiStatus){case y:return e.renderLoader();case L:return e.renderSuccess();case C:return e.renderFailure();default:return null}},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{}),this.renderResult()]})}}]),n}(a.Component),A=E,F=function(){return Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(f.jsx)(o.a,{exact:!0,path:"/users",component:A})]})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(F,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.59114237.chunk.js.map