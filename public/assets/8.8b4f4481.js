(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{232:function(e,t,a){"use strict";var r=a(17);t.a=async(e,t,a)=>{await r.a.post("/api/client/servers/".concat(e,"/files/write"),a,{params:{file:t},headers:{"Content-Type":"text/plain"}})}},403:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),o=a.n(n),i=a(50),c=a(165),l=a(52),s=a(232),u=a(51),d=a(153),m=a(168);t.default=()=>{const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(!1),l=i.a.useStoreState((e=>e.server.data.uuid)),u=i.a.useStoreState((e=>e.status.value)),{clearFlashes:_,clearAndAddHttpError:E}=Object(d.a)(),{connected:O,instance:S}=i.a.useStoreState((e=>e.socket));Object(n.useEffect)((()=>{if(!O||!S||"running"===u)return;const e=e=>{e.toLowerCase().indexOf("you need to agree to the eula in order to run the server")>=0&&t(!0)};return S.addListener(m.a.CONSOLE_OUTPUT,e),()=>{S.removeListener(m.a.CONSOLE_OUTPUT,e)}}),[O,S,u]);return Object(n.useEffect)((()=>{_("feature:eula")}),[]),o.a.createElement(c.b,{visible:e,onDismissed:()=>t(!1),closeOnBackground:!1,showSpinnerOverlay:a},o.a.createElement(p,{key:"feature:eula"}),o.a.createElement(f,null,"Accept Minecraft® EULA"),o.a.createElement(y,null,"By pressing ",'"I Accept"'," below you are indicating your agreement to the ",o.a.createElement(w,{target:"_blank",rel:"noreferrer noopener",href:"https://account.mojang.com/documents/minecraft_eula"},"Minecraft® EULA"),"."),o.a.createElement(h,null,o.a.createElement(g,{isSecondary:!0,onClick:()=>t(!1)},"Cancel"),o.a.createElement(b,{onClick:()=>{r(!0),_("feature:eula"),Object(s.a)(l,"eula.txt","eula=true").then((()=>{"offline"===u&&S&&S.send(m.b.SET_STATE,"restart"),r(!1),t(!1)})).catch((e=>{console.error(e),E({key:"feature:eula",error:e})})).then((()=>r(!1)))}},"I Accept")))};var p=Object(r.c)(u.a).withConfig({displayName:"EulaModalFeature___StyledFlashMessageRender",componentId:"sc-43378k-0"})({marginBottom:"1rem"}),f=Object(r.c)("h2").withConfig({displayName:"EulaModalFeature___StyledH",componentId:"sc-43378k-1"})({fontSize:"1.5rem",lineHeight:"2rem",marginBottom:"1rem","--tw-text-opacity":"1",color:"hsla(214, 15%, 91%, var(--tw-text-opacity))"}),y=Object(r.c)("p").withConfig({displayName:"EulaModalFeature___StyledP",componentId:"sc-43378k-2"})({"--tw-text-opacity":"1",color:"hsla(210, 16%, 82%, var(--tw-text-opacity))"}),w=Object(r.c)("a").withConfig({displayName:"EulaModalFeature___StyledA",componentId:"sc-43378k-3"})({"--tw-text-opacity":"1",color:"rgba(147, 197, 253, var(--tw-text-opacity))",textDecoration:"underline",transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgba(96, 165, 250, var(--tw-text-opacity))"}}),h=Object(r.c)("div").withConfig({displayName:"EulaModalFeature___StyledDiv",componentId:"sc-43378k-4"})({marginTop:"2rem",alignItems:"center",justifyContent:"flex-end","@media (min-width: 640px)":{display:"flex"}}),g=Object(r.c)(l.a).withConfig({displayName:"EulaModalFeature___StyledButton",componentId:"sc-43378k-5"})({width:"100%",borderColor:"rgba(0, 0, 0, 0)","@media (min-width: 640px)":{width:"auto"}}),b=Object(r.c)(l.a).withConfig({displayName:"EulaModalFeature___StyledButton2",componentId:"sc-43378k-6"})({marginTop:"1rem",width:"100%","@media (min-width: 640px)":{marginTop:"0px",marginLeft:"1rem",width:"auto"}})}}]);