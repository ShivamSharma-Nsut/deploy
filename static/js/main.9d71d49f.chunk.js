(this["webpackJsonpjutsu-example"]=this["webpackJsonpjutsu-example"]||[]).push([[0],{19:function(e,t,n){e.exports=n(40)},26:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),l=(n(26),n(5)),c=n(1),s=n.n(c),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{!a&&l.return&&l.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p=function(e){var t=e.domain,n=void 0===t?"meet.jit.si":t,r=e.parentNode,o=e.subject,i=e.password,l=e.displayName,c=e.onMeetingEnd,s=m(e,["domain","parentNode","subject","password","displayName","onMeetingEnd"]),p=Object(a.useState)(!0),h=d(p,2),f=h[0],E=h[1],b=Object(a.useState)(null),v=d(b,2),g=v[0],j=v[1],y=Object(a.useState)(null),w=d(y,2),O=w[0],N=w[1];return Object(a.useEffect)((function(){if(window.JitsiMeetExternalAPI){if(s.parentNode=document.getElementById(r),s.parentNode){var e=new window.JitsiMeetExternalAPI(n,u({},s));return N(e),E(!1),j(null),o&&e.executeCommand("subject",o),e.addEventListener("videoConferenceJoined",(function(){i&&e.executeCommand("password",i),l&&e.executeCommand("displayName",l)})),e.addEventListener("passwordRequired",(function(){i&&e.executeCommand("password",i)})),c&&e.addEventListener("readyToClose",c),function(){return O&&O.dispose()}}j('Parent node is not available, check container have the correct id: "'+r+'"')}else j("JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded")}),[window.JitsiMeetExternalAPI]),{jitsi:O,error:g,loading:f}};p.propTypes={options:s.a.shape({domain:s.a.string,roomName:s.a.string.isRequired,subject:s.a.string,password:s.a.string,displayName:s.a.string,onMeetingEnd:s.a.func,width:s.a.string,height:s.a.string,parentNode:s.a.string,configOverwrite:s.a.object,interfaceConfigOverwrite:s.a.object,noSSL:s.a.bool,jwt:s.a.string,onload:s.a.func,invitees:s.a.array,devices:s.a.object,userInfo:s.a.object})};var h=function(e){var t=e.loadingComponent,n=e.errorComponent,o=e.containerStyles,i=e.jitsiContainerStyles,l=e.onError,c=e.onJitsi,s=m(e,["loadingComponent","errorComponent","containerStyles","jitsiContainerStyles","onError","onJitsi"]),d=p(u({parentNode:"jitsi-container"},s)),h=d.loading,f=d.error,E=d.jitsi;return Object(a.useEffect)((function(){E&&c&&c(E)}),[E]),Object(a.useEffect)((function(){f&&l&&l(f)}),[f]),r.a.createElement("div",{style:u({width:"800px",height:"400px"},o)},f&&(n||r.a.createElement("p",null,f)),!f&&h&&(t||r.a.createElement("p",null,"Loading ...")),r.a.createElement("div",{id:"jitsi-container",style:u({display:h?"none":"block",width:"100%",height:"100%"},i)}))};h.propTypes={jwt:s.a.string,domain:s.a.string,subject:s.a.string,password:s.a.string,roomName:s.a.string.isRequired,displayName:s.a.string,onMeetingEnd:s.a.func,loadingComponent:s.a.object,errorComponent:s.a.object,containerStyles:s.a.object,jitsiContainerStyles:s.a.object,configOverwrite:s.a.object,interfaceConfigOverwrite:s.a.object,onError:s.a.func,onJitsi:s.a.func};var f=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),s=c[0],u=c[1],m=Object(a.useState)(!1),d=Object(l.a)(m,2),p=d[0],f=d[1],E=Object(a.useState)(""),b=Object(l.a)(E,2),v=b[0],g=b[1],j=Object(a.useState)({}),y=Object(l.a)(j,2),w=y[0],O=y[1],N=Object(a.useState)({}),S=Object(l.a)(N,2),x=S[0],C=S[1],M=function(){var e={},t={},a=!0;return 0===n.trim().length&&(e.roomNameNotFound="Room ID is requried",a=!1),0===s.trim().length&&(t.nameNotFound="Name is requried",a=!1),O(e),C(t),a};return r.a.createElement("div",{className:"main"},r.a.createElement("h2",{className:"heading"},"MS Teams"),p?r.a.createElement(h,{height:"100%",width:"100%",className:"jutsu",roomName:n,password:v,displayName:s,onMeetingEnd:function(){return console.log("Meeting has ended")},loadingComponent:r.a.createElement("p",null,"Meet is loading ...")}):r.a.createElement("form",{className:"form"},r.a.createElement("input",{id:"room",type:"text",placeholder:"Room*",value:n,onChange:function(e){return o(e.target.value)},required:!0}),Object.keys(w).map((function(e){return r.a.createElement("div",{style:{color:"red"}},w[e])})),r.a.createElement("input",{id:"name",type:"text",placeholder:"Name*",value:s,onChange:function(e){return u(e.target.value)}}),Object.keys(x).map((function(e){return r.a.createElement("div",{style:{color:"red"}},x[e])})),r.a.createElement("input",{id:"password",type:"text",placeholder:"Password (optional)",value:v,onChange:function(e){return g(e.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),M()&&f(!0)},type:"submit"},"Start / Join")))},E=n(6),b=function(e){var t={color:"white",margin:"auto",padding:"5px 0",textDecoration:"none"};return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(E.b,{style:{color:"white",padding:"5px 0",textDecoration:"none"},to:"/"},r.a.createElement("h3",null,"Microsoft")),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(E.b,{style:t,to:"/about"},r.a.createElement("li",null,"About")),r.a.createElement(E.b,{style:t,to:"/doc"},r.a.createElement("li",null,"Doc")))))},v=n(15),g=n(16),j=n(18),y=n(17),w=function(e){Object(j.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Made with ",r.a.createElement("span",null,"\u2764")," by ",r.a.createElement("a",{href:"https://github.com/ShivamSharma-Nsut"},"Shivam Sharma")))}}]),n}(a.Component);function O(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"About MS Teams"),r.a.createElement("p",{className:"texts"},"This app is used to perform video chat between multiple persons. You have to create a Room Name and share that room name with your friend to chat. For securing and privacy of chat you can also apply password and share that password along with Romm Name to the person you want to connect."),r.a.createElement("br",null),r.a.createElement("h2",null,"Key Features of the App"),r.a.createElement("ul",null,r.a.createElement("li",null,"You can On/Off your video as per your convenience"),r.a.createElement("li",null,"You can share your dextop screen with the person/persons in meet"),r.a.createElement("li",null,"You can chat with text also in the chat room"),r.a.createElement("li",null,"You can send invite to your friends with a link via mail"),r.a.createElement("li",null,"And Much More ",r.a.createElement("span",null,"\ud83d\ude0a"))))}function N(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Docs of MS Teams"),r.a.createElement("p",null,"You can find this app ",r.a.createElement("a",{className:"here",href:"https://github.com/ShivamSharma-Nsut"},"here")," You can Clone it and run this in your local Computer"))}var S=n(2);var x=function(){return r.a.createElement(E.a,null,r.a.createElement(b,null),r.a.createElement(S.a,{path:"/",exact:!0,component:f}),r.a.createElement(S.a,{path:"/MicrosoftTeamsProject",component:f}),r.a.createElement(S.a,{path:"/about",component:O}),r.a.createElement(S.a,{path:"/doc",component:N}),r.a.createElement(w,null))};i.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9d71d49f.chunk.js.map