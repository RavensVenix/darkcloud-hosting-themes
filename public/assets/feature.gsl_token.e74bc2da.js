(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{349:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),r=n(1),i=n(0),c=n.n(i),l=n(3),s=n(29),m=n(6),u=n(17),d=n(13),p=n(45),f=n(15),g=n(153),k=n(8),S=Object(r.c)(u.a).withConfig({displayName:"GSLTokenModalFeature___StyledFlashMessageRender",componentId:"sc-1r409kx-0"})({marginBottom:"1rem"}),T=r.c.h2.withConfig({displayName:"GSLTokenModalFeature___StyledH",componentId:"sc-1r409kx-1"})({fontSize:"1.5rem",lineHeight:"2rem",marginBottom:"1rem","--tw-text-opacity":"1",color:"rgba(228.60750000000002, 231.591, 235.4925, var(--tw-text-opacity))"}),y=r.c.p.withConfig({displayName:"GSLTokenModalFeature___StyledP",componentId:"sc-1r409kx-2"})({marginTop:"1rem"}),h=r.c.p.withConfig({displayName:"GSLTokenModalFeature___StyledP2",componentId:"sc-1r409kx-3"})({marginTop:"1rem"}),_=r.c.div.withConfig({displayName:"GSLTokenModalFeature___StyledDiv",componentId:"sc-1r409kx-4"})({alignItems:"center",marginTop:"1rem","@media (min-width: 640px)":{display:"flex"}}),w=r.c.div.withConfig({displayName:"GSLTokenModalFeature___StyledDiv2",componentId:"sc-1r409kx-5"})({marginTop:"2rem",alignItems:"center",justifyContent:"flex-end","@media (min-width: 640px)":{display:"flex"}}),b=Object(r.c)(m.b).withConfig({displayName:"GSLTokenModalFeature___StyledButton",componentId:"sc-1r409kx-6"})({marginTop:"1rem",width:"100%","@media (min-width: 640px)":{marginTop:"0px",marginLeft:"1rem",width:"auto"}});t.default=function(){var e=Object(i.useState)(!1),t=o()(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),m=o()(r,2),u=m[0],v=m[1],E=l.a.useStoreState((function(e){return e.server.data.uuid})),x=l.a.useStoreState((function(e){return e.status.value})),L=Object(d.a)(),O=L.clearFlashes,C=L.clearAndAddHttpError,G=l.a.useStoreState((function(e){return e.socket})),I=G.connected,F=G.instance;Object(i.useEffect)((function(){if(I&&F&&"running"!==x){var e=["(gsl token expired)","(account not found)"],t=function(t){e.some((function(e){return t.toLowerCase().includes(e)}))&&a(!0)};return F.addListener(p.a.CONSOLE_OUTPUT,t),function(){F.removeListener(p.a.CONSOLE_OUTPUT,t)}}}),[I,F,x]);return Object(i.useEffect)((function(){O("feature:gslToken")}),[]),c.a.createElement(k.c,{onSubmit:function(e){v(!0),O("feature:gslToken"),Object(g.a)(E,"STEAM_ACC",e.gslToken).then((function(){F&&F.send(p.b.SET_STATE,"restart"),v(!1),a(!1)})).catch((function(e){console.error(e),C({key:"feature:gslToken",error:e})})).then((function(){return v(!1)}))},initialValues:{gslToken:""}},c.a.createElement(s.b,{visible:n,onDismissed:function(){return a(!1)},closeOnBackground:!1,showSpinnerOverlay:u},c.a.createElement(S,{key:"feature:gslToken"}),c.a.createElement(k.b,null,c.a.createElement(T,null,"Invalid GSL token!"),c.a.createElement(y,null,"It seems like your Gameserver Login Token (GSL token) is invalid or has expired."),c.a.createElement(h,null,"You can either generate a new one and enter it below or leave the field blank to remove it completely."),c.a.createElement(_,null,c.a.createElement(f.a,{name:"gslToken",label:"GSL Token",description:"Visit https://steamcommunity.com/dev/managegameservers to generate a token.",autoFocus:!0})),c.a.createElement(w,null,c.a.createElement(b,{type:"submit"},"Update GSL Token")))))}}}]);