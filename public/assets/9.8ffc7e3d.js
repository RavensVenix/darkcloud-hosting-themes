(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{232:function(e,t,a){"use strict";var i=a(17);t.a=async(e,t,a)=>{await i.a.post("/api/client/servers/".concat(e,"/files/write"),a,{params:{file:t},headers:{"Content-Type":"text/plain"}})}},411:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(0),o=a.n(n),m=a(17),r=a(159),l=a(232),s=a(264),c=a(15),d=a(19),p=a.n(d),x=a(7),u=a.n(x),h=a(165),g=a(155),f=a(163),b=a(158),y=a(50),C=a(189),v=a(52),w=e=>{let{onFileNamed:t,onDismissed:a}=e,i=u()(e,["onFileNamed","onDismissed"]);const n=y.a.useStoreState((e=>e.files.directory));return o.a.createElement(g.c,{onSubmit:(e,a)=>{let{setSubmitting:i}=a;t(Object(C.join)(n,e.fileName)),i(!1)},initialValues:{fileName:""},validationSchema:Object(f.d)().shape({fileName:Object(f.f)().required().min(1)})},(e=>{let{resetForm:t}=e;return o.a.createElement(h.b,p()({onDismissed:()=>{t(),a()}},i),o.a.createElement(g.b,null,o.a.createElement(b.a,{id:"fileName",name:"fileName",label:"File Name",description:"Enter the name that this file should be saved as.",autoFocus:!0}),o.a.createElement(j,null,o.a.createElement(v.a,null,"Create File"))))}))},j=Object(i.c)("div").withConfig({displayName:"FileNameModal___StyledDiv",componentId:"sc-11rjmp3-0"})({marginTop:"1.5rem",textAlign:"right"}),S=a(156),E=a(51),O=a(57),_=a(56),k=a(186);var N=[{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp","cs"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"Diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"Git Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history|license).md$/i},{name:"Golang",mime:"text/x-go",mode:"go",ext:["go"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"JavaScript",mime:"text/javascript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mime:"application/json",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"MariaDB",mime:"text/x-mariadb",mode:"sql"},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"PHP",mime:"text/x-php",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PostgreSQL",mime:"text/x-pgsql",mode:"sql"},{name:"Properties",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"Pug",mime:"text/x-pug",mimes:["text/x-pug","text/x-jade"],mode:"null",ext:["pug"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"Sass",mime:"text/x-sass",mode:"sass",ext:["sass"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mime:"text/x-sh",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"Vue",mime:"script/x-vue",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"]},{name:"XML",mime:"application/xml",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"YAML",mime:"text/x-yaml",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]}],F=a(153),M=a(59),L=a(29),z=a(151),I=a.n(z);a(333),a(335),a(337),a(338),a(339),a(340),a(341),a(271),a(342),a(344),a(345),a(346),a(347),a(348),a(233),a(349),a(350),a(351),a(352),a(354),a(355),a(272),a(206),a(356),a(234),a(274),a(358),a(359),a(361),a(362),a(363),a(364),a(275),a(366),a(235),a(367),a(236),a(190),a(368),a(369),a(370),a(371),a(372),a(374),a(278),a(375),a(207),a(376),a(198),a(377),a(378),a(379),a(276),a(380),a(381),a(382),a(383),a(384),a(279),a(385),a(386),a(387),a(388),a(280),a(389),a(390),a(273),a(391),a(392),a(393),a(394),a(197),a(397);const D=i.c.div.withConfig({displayName:"CodemirrorEditor__EditorContainer",componentId:"sc-1dzlt6m-0"})(["min-height:16rem;height:calc(100vh - 20rem);",";> div{",";}.CodeMirror{font-size:12px;line-height:1.375rem;}.CodeMirror-linenumber{padding:1px 12px 0 12px !important;}.CodeMirror-foldmarker{color:#cbccc6;text-shadow:none;margin-left:0.25rem;margin-right:0.25rem;}"],{position:"relative"},{borderRadius:"0.25rem",height:"100%"});var B=e=>{let{style:t,initialContent:a,filename:i,mode:m,fetchContent:r,onContentSaved:l,onModeChanged:s}=e;const[c,d]=Object(n.useState)(),p=Object(n.useCallback)((e=>{if(!e)return;const t=I.a.fromTextArea(e,{mode:"text/plain",theme:"ayu-mirage",indentUnit:4,smartIndent:!0,tabSize:4,indentWithTabs:!1,lineWrapping:!0,lineNumbers:!0,foldGutter:!0,fixedGutter:!0,scrollbarStyle:"overlay",coverGutterNextToScrollbar:!1,readOnly:!1,showCursorWhenSelecting:!1,autofocus:!1,spellcheck:!0,autocorrect:!1,autocapitalize:!1,lint:!1,autoCloseBrackets:!0,matchBrackets:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]});d(t)}),[]);return Object(n.useEffect)((()=>{var e;void 0!==i&&s((null===(e=(e=>{for(let t=0;t<N.length;t++){const a=N[t];if(a.file&&a.file.test(e))return a}const t=e.lastIndexOf("."),a=t>-1&&e.substring(t+1,e.length);if(a)for(let e=0;e<N.length;e++){const t=N[e];if(t.ext)for(let e=0;e<t.ext.length;e++)if(t.ext[e]===a)return t}})(i))||void 0===e?void 0:e.mime)||"text/plain")}),[i]),Object(n.useEffect)((()=>{c&&c.setOption("mode",m)}),[c,m]),Object(n.useEffect)((()=>{c&&c.setValue(a||"")}),[c,a]),Object(n.useEffect)((()=>{c?(c.addKeyMap({"Ctrl-S":()=>l(),"Cmd-S":()=>l()}),r((()=>Promise.resolve(c.getValue())))):r((()=>Promise.reject(new Error("no editor session has been configured"))))}),[c,r,l]),o.a.createElement(D,{style:t},o.a.createElement("textarea",{ref:p}))},R=(t.default=()=>{const[e,t]=Object(n.useState)(""),{action:a}=Object(c.i)(),[i,d]=Object(n.useState)("edit"===a),[p,x]=Object(n.useState)(""),[u,h]=Object(n.useState)(!1),[g,f]=Object(n.useState)("text/plain"),b=Object(c.g)(),{hash:v}=Object(c.h)(),j=y.a.useStoreState((e=>e.server.data.id)),E=y.a.useStoreState((e=>e.server.data.uuid)),z=y.a.useStoreActions((e=>e.files.setDirectory)),{addError:I,clearFlashes:D}=Object(F.a)();let K=null;Object(n.useEffect)((()=>{if("new"===a)return;t(""),d(!0);const e=Object(L.d)(v);var i,n;z(Object(C.dirname)(e)),(i=E,n=e,new Promise(((e,t)=>{m.a.get("/api/client/servers/".concat(i,"/files/contents"),{params:{file:n},transformResponse:e=>e,responseType:"text"}).then((t=>{let{data:a}=t;return e(a)})).catch(t)}))).then(x).catch((e=>{console.error(e),t(Object(m.c)(e))})).then((()=>d(!1)))}),[a,E,v]);const V=e=>{K&&(d(!0),D("files:view"),K().then((t=>Object(l.a)(E,e||Object(L.d)(v),t))).then((()=>{if(!e)return Promise.resolve();b.push("/server/".concat(j,"/files/edit#/").concat(Object(L.b)(e)))})).catch((e=>{console.error(e),I({message:Object(m.c)(e),key:"files:view"})})).then((()=>d(!1))))};return e?o.a.createElement(_.b,{message:e,onBack:()=>b.goBack()}):o.a.createElement(O.a,null,o.a.createElement(R,{byKey:"files:view"}),o.a.createElement(M.a,null,o.a.createElement(T,null,o.a.createElement(s.a,{withinFileEditor:!0,isNewFile:"edit"!==a}))),v.replace(/^#/,"").endsWith(".pteroignore")&&o.a.createElement(q,null,o.a.createElement(P,null,"You're editing a ",o.a.createElement(G,null,".pteroignore")," ","file. Any files or directories listed in here will be excluded from backups. Wildcards are supported by using an asterisk (",o.a.createElement(Q,null,"*"),"). You can negate a prior rule by prepending an exclamation point (",o.a.createElement(W,null,"!"),").")),o.a.createElement(w,{visible:u,onDismissed:()=>h(!1),onFileNamed:e=>{h(!1),V(e)}}),o.a.createElement(A,null,o.a.createElement(r.a,{visible:i}),o.a.createElement(B,{mode:g,filename:v.replace(/^#/,""),onModeChanged:f,initialContent:p,fetchContent:e=>{K=e},onContentSaved:()=>{"edit"!==a?h(!0):V()}})),o.a.createElement(U,null,o.a.createElement($,null,o.a.createElement(k.a,{value:g,onChange:e=>f(e.currentTarget.value)},N.map((e=>o.a.createElement("option",{key:"".concat(e.name,"_").concat(e.mime),value:e.mime},e.name))))),"edit"===a?o.a.createElement(S.a,{action:"file.update"},o.a.createElement(H,{onClick:()=>V()},"Save Content")):o.a.createElement(S.a,{action:"file.create"},o.a.createElement(J,{onClick:()=>h(!0)},"Create File"))))},Object(i.c)(E.a).withConfig({displayName:"FileEditContainer___StyledFlashMessageRender",componentId:"sc-48rzpu-0"})({marginBottom:"1rem"})),T=Object(i.c)("div").withConfig({displayName:"FileEditContainer___StyledDiv",componentId:"sc-48rzpu-1"})({marginBottom:"1rem"}),q=Object(i.c)("div").withConfig({displayName:"FileEditContainer___StyledDiv2",componentId:"sc-48rzpu-2"})({marginBottom:"1rem",padding:"1rem",borderLeftWidth:"4px","--tw-bg-opacity":"1",backgroundColor:"hsla(210, 24%, 16%, var(--tw-bg-opacity))",borderRadius:"0.25rem","--tw-border-opacity":"1",borderColor:"rgba(34, 211, 238, var(--tw-border-opacity))"}),P=Object(i.c)("p").withConfig({displayName:"FileEditContainer___StyledP",componentId:"sc-48rzpu-3"})({"--tw-text-opacity":"1",color:"hsla(211, 13%, 65%, var(--tw-text-opacity))",fontSize:"0.875rem",lineHeight:"1.25rem"}),G=Object(i.c)("code").withConfig({displayName:"FileEditContainer___StyledCode",componentId:"sc-48rzpu-4"})({fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"--tw-bg-opacity":"1",backgroundColor:"rgba(19, 26, 32, var(--tw-bg-opacity))",borderRadius:"0.25rem",paddingTop:"1px",paddingBottom:"1px",paddingLeft:"0.25rem",paddingRight:"0.25rem"}),Q=Object(i.c)("code").withConfig({displayName:"FileEditContainer___StyledCode2",componentId:"sc-48rzpu-5"})({fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"--tw-bg-opacity":"1",backgroundColor:"rgba(19, 26, 32, var(--tw-bg-opacity))",borderRadius:"0.25rem",paddingTop:"1px",paddingBottom:"1px",paddingLeft:"0.25rem",paddingRight:"0.25rem"}),W=Object(i.c)("code").withConfig({displayName:"FileEditContainer___StyledCode3",componentId:"sc-48rzpu-6"})({fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',"--tw-bg-opacity":"1",backgroundColor:"rgba(19, 26, 32, var(--tw-bg-opacity))",borderRadius:"0.25rem",paddingTop:"1px",paddingBottom:"1px",paddingLeft:"0.25rem",paddingRight:"0.25rem"}),A=Object(i.c)("div").withConfig({displayName:"FileEditContainer___StyledDiv3",componentId:"sc-48rzpu-7"})({position:"relative"}),U=Object(i.c)("div").withConfig({displayName:"FileEditContainer___StyledDiv4",componentId:"sc-48rzpu-8"})({display:"flex",justifyContent:"flex-end",marginTop:"1rem"}),$=Object(i.c)("div").withConfig({displayName:"FileEditContainer___StyledDiv5",componentId:"sc-48rzpu-9"})({flex:"1 1 0%",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"hsla(210, 24%, 16%, var(--tw-bg-opacity))",marginRight:"1rem","@media (min-width: 640px)":{flex:"none"}}),H=Object(i.c)(v.a).withConfig({displayName:"FileEditContainer___StyledButton",componentId:"sc-48rzpu-10"})({flex:"1 1 0%","@media (min-width: 640px)":{flex:"none"}}),J=Object(i.c)(v.a).withConfig({displayName:"FileEditContainer___StyledButton2",componentId:"sc-48rzpu-11"})({flex:"1 1 0%","@media (min-width: 640px)":{flex:"none"}})}}]);