(this["webpackJsonpapply-hov"]=this["webpackJsonpapply-hov"]||[]).push([[0],{161:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(16),o=n.n(i),l=n(51),s=n(221),d=n(224),j=n(220),u=n(18),b=n(216),O=n(210),h=n(208),g=n(41),m=n(23),p=n(11),v=n(202),f=(n(203),function(e,t){var n=t.loading,a=t.client,r=t.variables;if(n)try{return Boolean(a.readQuery({query:e,variables:r}))}catch(c){return!1}}),x=n(103),P=n(222),y=Object(P.a)(a||(a=Object(x.a)(["\n  query getAnime(\n    $page: Int = 1,\n    $perPage: Int = 50,\n    $search: String,\n    $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC, TITLE_ROMAJI]\n  ) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(search: $search, sort: $sort) {\n        id\n        description\n        title {\n          romaji\n          english\n          native\n        }\n        coverImage {\n          large\n        }\n        siteUrl\n        bannerImage\n        isAdult\n        meanScore\n        popularity\n        startDate {\n          year\n          month\n        }\n      }\n    }\n  }\n"]))),C={search:""},S=n(71),w=n.n(S),I=n(31),k=n(90),E=n(223),A=n(48),R=n(117),T=n(165),D=n(4),_=Object(h.a)((function(e){return{root:{flexShrink:0,minHeight:"2rem",padding:"0.5rem",display:"flex",alignItems:"center"}}})),F=function(e){var t=e.children,n=_();return Object(D.jsx)(T.a,{elevation:2,classes:{root:n.root},children:t})},U=Object(r.memo)(F),W=n(206),L=n(110),N=n.n(L),V=function(e){var t=Object(u.f)();return Object(D.jsx)(W.a,Object(p.a)(Object(p.a)({onClick:function(){return t.push("/")}},e),{},{children:Object(D.jsx)(N.a,{})}))},$=Object(r.memo)(V),B=n(209),q=n(111),H=n.n(q),J=function(e){return Object(D.jsx)(B.a,Object(p.a)(Object(p.a)({variant:"contained",color:"primary",size:"large",endIcon:Object(D.jsx)(H.a,{})},e),{},{children:"Search"}))},z=Object(r.memo)(J),K=n(225),M=["currentPage","lastPage","changePage","disabled"],Q=function(e){var t=e.currentPage,n=e.lastPage,a=e.changePage,r=e.disabled,c=Object(I.a)(e,M);return Object(D.jsx)(K.a,Object(p.a)({page:t,count:n,color:"primary",onChange:function(e,t){r||a(t)},disabled:r},c))};Q.defaultProps={currentPage:1,lastPage:1,changePage:m.noop,disabled:!1};var G=Object(r.memo)(Q),Y=["search"],X=function(e){return Object(D.jsx)(E.a,Object(p.a)({component:"span"},e))},Z=function(e){var t=e.refetch,n=e.currentPage,a=e.setCurrentPage,r=e.lastPage,c=e.initialValues,i=e.setInitialValues,o=e.hidePagination,l=e.loading,s=function(){var e=Object(k.a)(w.a.mark((function e(n){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.search,r=Object(I.a)(n,Y),e.next=4,t(Object(p.a)(Object(p.a)({},r),{},{search:a||void 0,page:1}));case 4:i(n),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),window.alert("Error fetching data!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)(A.b,{initialValues:c,enableReinitialize:!0,onSubmit:s,children:function(e){var c=e.submitForm,i=function(e){var c=e.resetForm;return function(){var e=Object(k.a)(w.a.mark((function e(i){var o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),o=n,e.prev=2,a(i),e.next=6,t({page:Object(m.clamp)(i,1,r)});case 6:e.next=13;break;case 8:e.prev=8,e.t0=e.catch(2),a(o),console.error(e.t0),window.alert("Error fetching more data!");case 13:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}({resetForm:e.resetForm});return Object(D.jsxs)(U,{children:[Object(D.jsx)(X,{mr:4,children:Object(D.jsx)($,{})}),Object(D.jsx)(X,{mr:2,children:Object(D.jsx)(A.a,{component:R.a,name:"search",placeholder:"All shows",variant:"outlined",onKeyDown:function(e){"Enter"===e.key&&c()}})}),Object(D.jsx)(z,{onClick:c,disabled:l}),!o&&Object(D.jsx)(G,{currentPage:n,lastPage:r,changePage:i,disabled:l})]})}})};Z.defaultProps={refetch:m.noop,currentPage:1,lastPage:1,initialValues:C,setInitialValues:m.noop,hidePagination:!0,loading:!1};var ee=Object(r.memo)(Z),te=n(211),ne=n(212),ae=Object(h.a)((function(e){return{container:{flex:1,height:"100%"}}})),re=function(e){var t=e.children,n=ae();return Object(D.jsx)(O.a,{classes:{root:n.container},children:Object(D.jsx)(te.a,{container:!0,classes:{root:n.container},spacing:0,align:"center",justify:"center",direction:"column",children:Object(D.jsx)(te.a,{item:!0,children:t})})})},ce=Object(r.memo)(re),ie=function(e){var t=e.data,n=e.loading,a=e.inCache,r=e.error,c=e.children;return!a&&n?Object(D.jsx)(ce,{children:Object(D.jsx)(ne.a,{})}):r?Object(D.jsx)(ce,{children:"Error loading data"}):Object(m.isEmpty)(t)?Object(D.jsx)(ce,{children:"No data found"}):c};ie.defaultProps={loading:!0,inCache:!1,children:null};var oe=Object(r.memo)(ie),le=n(214),se=n(215),de=n(207),je=n(114),ue=n.n(je),be=n(113),Oe=n.n(be),he=n(115),ge=n.n(he),me=n(112),pe=n(67),ve=n(213),fe=n(5),xe=["url"],Pe=Object(h.a)({media:{height:"10rem"},mediaAdult:{filter:"blur(1rem)","&:hover":{filter:"none"}}}),ye=Object(r.memo)((function(e){var t,n=e.imageUrl,a=e.isAdult,r=e.title,c=Pe();return Object(D.jsx)(ve.a,{className:Object(fe.a)((t={},Object(pe.a)(t,c.media,!0),Object(pe.a)(t,c.mediaAdult,a),t)),image:n,title:r})})),Ce=function(e){var t=e.url,n=Object(I.a)(e,xe);return t?Object(D.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(D.jsx)(ye,Object(p.a)({},n))}):Object(D.jsx)(ye,Object(p.a)({},n))};Ce.defaultProps={isAdult:!1};var Se=Object(r.memo)(Ce),we=["children"],Ie=function(e){var t=e.children,n=Object(I.a)(e,we);return Object(D.jsx)(te.a,Object(p.a)(Object(p.a)({container:!0,justify:"center",alignItems:"center"},n),{},{children:t}))},ke=Object(h.a)({cardRoot:{minWidth:"15rem",maxWidth:"20rem"},gridContainerRoot:{marginTop:"1rem"}}),Ee=function(e){var t=e.titleEnglish,n=e.titleRomaji,a=e.titleJapanese,r=e.imageUrl,c=e.url,i=e.isAdult,o=e.description,l=e.score,s=e.popularity,d=e.startDate,j=ke(),u=Object(m.uniq)([t,n,a]).filter((function(e){return e})),b=u.length>1?"".concat(u[0]," (").concat(u[1],")"):"".concat(u[0]),O="";try{O=Object(m.truncate)(Object(me.stripHtml)(o).result,{length:160,omission:"..."})}catch(g){}var h=d.month&&d.year?"".concat(d.month,"/").concat(d.year):"";return Object(D.jsxs)(le.a,{className:j.cardRoot,children:[Object(D.jsx)(Se,{imageUrl:r,url:c,isAdult:i,title:b}),Object(D.jsxs)(se.a,{children:[Object(D.jsx)(de.a,{gutterBottom:!0,variant:"h6",component:"h2",children:b}),O&&Object(D.jsx)(de.a,{variant:"body2",color:"textSecondary",component:"p",children:O}),Object(D.jsxs)(Ie,{classes:{root:j.gridContainerRoot},children:[Object(D.jsxs)(Ie,{item:!0,xs:4,children:[Object(D.jsx)(Oe.a,{})," ",s]}),Object(D.jsxs)(Ie,{item:!0,xs:4,children:[Object(D.jsx)(ue.a,{})," ",l]}),Object(D.jsx)(Ie,{item:!0,xs:4,children:h&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ge.a,{})," ",h]})})]})]})]})};Ee.defaultProps={isAdult:!1,score:0,popularity:0,startDate:{}};var Ae=Object(r.memo)(Ee),Re=["data"],Te=function(e){var t=e.data,n=Object(I.a)(e,Re);return Object(D.jsx)(oe,Object(p.a)(Object(p.a)({data:t},n),{},{children:Object(D.jsx)(te.a,{container:!0,spacing:4,children:t.map((function(e){var t,n,a,r;return Object(D.jsx)(te.a,{item:!0,children:Object(D.jsx)(Ae,{titleEnglish:null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.english,titleRomaji:null===e||void 0===e||null===(n=e.title)||void 0===n?void 0:n.romaji,titleJapanese:null===e||void 0===e||null===(a=e.title)||void 0===a?void 0:a.native,imageUrl:null===e||void 0===e||null===(r=e.coverImage)||void 0===r?void 0:r.large,url:null===e||void 0===e?void 0:e.siteUrl,description:null===e||void 0===e?void 0:e.description,isAdult:null===e||void 0===e?void 0:e.isAdult,score:null===e||void 0===e?void 0:e.meanScore,popularity:null===e||void 0===e?void 0:e.popularity,startDate:null===e||void 0===e?void 0:e.startDate})},e.id)}))})}))};Te.defaultProps={data:[],loading:!1,inCache:!1};var De=Object(r.memo)(Te),_e=Object(h.a)((function(e){return{container:{flex:1,display:"flex",flexDirection:"column",flexWrap:"nowrap",height:"100vh"},content:{flex:1,paddingTop:"2rem",paddingBottom:"2rem",paddingLeft:"4rem",paddingRight:"4rem",overflow:"auto"}}})),Fe=function(){var e=_e(),t=Object(r.useState)(C),n=Object(g.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!0),o=Object(g.a)(i,2),l=o[0],s=o[1],d=Object(r.useState)(1),j=Object(g.a)(d,2),u=j[0],b=j[1],h=Object(r.useState)(1),x=Object(g.a)(h,2),P=x[0],S=x[1],w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(v.a)(e,Object(p.a)({notifyOnNetworkStatusChange:!0},t));return Object(p.a)(Object(p.a)({},n),{},{inCache:f(e,n)})}(y,{variables:Object(m.omitBy)(C,m.isEmpty),onCompleted:function(){s(!1),b(Object(m.get)(w,"data.Page.pageInfo.currentPage",1)),S(Object(m.get)(w,"data.Page.pageInfo.lastPage",1))}}),I=Object(m.get)(w,"data.Page.media",[]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ee,{refetch:null===w||void 0===w?void 0:w.refetch,currentPage:u,setCurrentPage:b,lastPage:P,initialValues:a,setInitialValues:c,hidePagination:l,loading:(null===w||void 0===w?void 0:w.loading)&&!(null===w||void 0===w?void 0:w.inCache)}),Object(D.jsx)(O.a,{className:e.content,maxWidth:"xl",children:Object(D.jsx)(De,{data:I,loading:null===w||void 0===w?void 0:w.loading,inCache:null===w||void 0===w?void 0:w.inCache,error:null===w||void 0===w?void 0:w.error})})]})},Ue=Object(r.memo)(Fe),We=["to","disabled","onClick","classes","children"],Le=Object(h.a)((function(e){return{buttonRoot:{padding:"1rem",margin:"1rem"}}})),Ne=function(e){var t=e.to,n=e.disabled,a=e.onClick,r=e.classes,c=e.children,i=Object(I.a)(e,We),o=Le(),l=Object(u.f)(),s=a||(t?function(){return l.push(t)}:void 0);return Object(D.jsx)(B.a,Object(p.a)(Object(p.a)({orientation:"vertical",variant:"contained",size:"large",color:"primary",fullWidth:!0,disabled:n,onClick:s,classes:Object(m.merge)({root:o.buttonRoot},r)},i),{},{children:c}))};Ne.defaultProps={disabled:!1};var Ve=Object(r.memo)(Ne),$e=function(){return Object(D.jsxs)(ce,{children:[Object(D.jsx)(Ve,{to:"/anilist",children:"List of Anime"}),Object(D.jsx)(Ve,{to:"/qwerty",children:"This button will 404"}),Object(D.jsx)(Ve,{to:"/azerty",color:"secondary",children:"This button will also 404"}),Object(D.jsx)(Ve,{onClick:function(){return window.alert("!")},variant:"outlined",children:"This button will alert"}),Object(D.jsx)(Ve,{disabled:!0,children:"Disabled button"})]})},Be=Object(r.memo)($e),qe=function(){var e=Object(u.f)(),t=Object(r.useState)(3),n=Object(g.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=setInterval((function(){var n=a-1;c(n),n<=0&&(e.push("/"),clearInterval(t))}),1e3);return function(){return clearInterval(t)}})),Object(D.jsxs)(ce,{children:[Object(D.jsxs)(E.a,{mb:4,children:["Page not found! Redirecting back to the home page in ",a," second",a>1?"s":"","."]}),Object(D.jsxs)(E.a,{children:["Or click ",Object(D.jsx)(l.b,{to:"/",children:"here"}),"."]})]})},He=Object(r.memo)(qe),Je=Object(h.a)((function(e){return{container:{flex:1,display:"flex",flexDirection:"column",flexWrap:"nowrap",height:"100vh"}}}));function ze(){var e=Je();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(b.a,{}),Object(D.jsx)(O.a,{maxWidth:!1,disableGutters:!0,className:e.container,id:"app-container",children:Object(D.jsxs)(u.c,{children:[Object(D.jsx)(u.a,{path:"/anilist",component:Ue}),Object(D.jsx)(u.a,{exact:!0,path:"/",component:Be}),Object(D.jsx)(u.a,{component:He})]})})]})}var Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,228)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Me={fetchPolicy:"cache-and-network",errorPolicy:"all"},Qe=new s.a({uri:Object({NODE_ENV:"production",PUBLIC_URL:"/apply-hov",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).GRAPHQL_URI||"https://graphql.anilist.co",cache:new d.a({typePolicies:{Page:{keyArgs:["pageInfo.page","pageInfo.perPage","media.search"]},Media:{keyArgs:["search","sort"]}}})});Qe.defaultOptions={watchQuery:Me,query:Me},o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(j.a,{client:Qe,children:Object(D.jsx)(l.a,{children:Object(D.jsx)(ze,{})})})}),document.getElementById("root")),Ke()}},[[161,1,2]]]);
//# sourceMappingURL=main.e68e8334.chunk.js.map