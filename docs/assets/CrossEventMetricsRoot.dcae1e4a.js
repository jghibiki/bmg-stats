import{x as Q,s as h,k as l,y as I,l as v,d as t,D as P,p as _,z as de,A as ge,B as pe,_ as N,E as fe,a as g,c as z,b as x,e as y,R as E,C as u,h as $,F as Y,f as K,i as T,j as me,g as U,M as S,m as w,t as R}from"./index.deae5561.js";import{a as he,V as ve,b as Pe}from"./WinLossMetrics.891f3d5c.js";function X(n,e){return Array.isArray(n)?n.includes(e):n===e}const _e=Q({}),O=_e,xe={as:"div"},ye=n=>{const[e,s]=h(l(xe,n),["as","bsPrefix","class","className","children","eventKey"]),a=I(O),r=v(e.bsPrefix,"accordion-collapse");return t(de,l({get in(){return X(a.activeEventKey,e.eventKey)}},s,{get children(){return t(P,{get component(){return e.as},get class(){return _(e.class,e.className,r)},get children(){return e.children}})}}))},Z=ye,Se=Q({eventKey:""}),k=Se,be={as:"div"},Ce=n=>{const[e,s]=h(l(be,n),["as","bsPrefix","class","className"]),a=v(e.bsPrefix,"accordion-body"),r=I(k);return t(Z,{get eventKey(){return r.eventKey},get children(){return t(P,l({get component(){return e.as}},s,{get class(){return _(e.class,e.className,a)}}))}})},Ne=Ce;function Ie(n,e){const s=I(O);return a=>{let r=n===s.activeEventKey?null:n;s.alwaysOpen&&(Array.isArray(s.activeEventKey)?s.activeEventKey.includes(n)?r=s.activeEventKey.filter(p=>p!==n):r=[...s.activeEventKey,n]:r=[n]),s.onSelect?.(r,a),ge(e,a)}}const Ae={as:"button"},Ee=n=>{const[e,s]=h(l(Ae,n),["as","bsPrefix","class","className","onClick"]),a=v(e.bsPrefix,"accordion-button"),r=I(k),p=Ie(r.eventKey,e.onClick),m=I(O);return t(P,l({get component(){return e.as},onClick:p},s,{get type(){return e.as==="button"?"button":void 0},get["aria-expanded"](){return r.eventKey===m.activeEventKey},get class(){return _(e.class,e.className,a,!X(m.activeEventKey,r.eventKey)&&"collapsed")}}))},ee=Ee,$e={as:"h2"},Me=n=>{const[e,s]=h(l($e,n),["as","bsPrefix","class","className","children","onClick"]),a=v(e.bsPrefix,"accordion-header");return t(P,l({get component(){return e.as}},s,{get class(){return _(e.class,e.className,a)},get children(){return t(ee,{get onClick(){return e.onClick},get children(){return e.children}})}}))},Re=Me,Oe={as:"div"},Le=n=>{const[e,s]=h(l(Oe,n),["as","bsPrefix","class","className","eventKey"]),a=v(e.bsPrefix,"accordion-item"),r={get eventKey(){return e.eventKey}};return t(k.Provider,{value:r,get children(){return t(P,l({get component(){return e.as}},s,{get class(){return _(e.class,e.className,a)}}))}})},Ke=Le,Te={as:"div"},we=n=>{const[e,s]=h(l(Te,n),["as","activeKey","alwaysOpen","bsPrefix","class","className","defaultActiveKey","onSelect","flush"]),[a,r]=pe(()=>e.activeKey,()=>e.defaultActiveKey,e.onSelect),p=v(e.bsPrefix,"accordion"),m={get activeEventKey(){return a()},get alwaysOpen(){return e.alwaysOpen},get onSelect(){return r}};return t(O.Provider,{value:m,get children(){return t(P,l({get component(){return e.as}},s,{get class(){return _(e.class,e.className,p,e.flush&&`${p}-flush`)}}))}})},M=Object.assign(we,{Button:ee,Collapse:Z,Item:Ke,Header:Re,Body:Ne}),ke={as:"div"},Ve=n=>{const[e,s]=h(l(ke,n),["as","bsPrefix","variant","animation","size","class","className"]),r=`${v(e.bsPrefix,"spinner")}-${e.animation}`;return t(P,l({get component(){return e.as}},s,{get class(){return _(e.class,e.className,r,e.size&&`${r}-${e.size}`,e.variant&&`text-${e.variant}`)}}))},je=Ve,Be=R("<h3>Season Stats</h3>"),De=R('<span class="visually-hidden">Loading...</span>'),He=R("<span> </span>"),Fe=R("<option></option>"),q=Object.assign({"../events/Long Halloween 2022.json":()=>N(()=>import("./Long Halloween 2022.4d1c7b5f.js"),[]),"../events/Renegade - Spring Up GT.json":()=>N(()=>import("./Renegade - Spring Up GT.7881c959.js"),[]),"../events/Renegade - Summer Meltdown - Sunday Slam.json":()=>N(()=>import("./Renegade - Summer Meltdown - Sunday Slam.13421d63.js"),[]),"../events/Renegade - Summer Meltdown.json":()=>N(()=>import("./Renegade - Summer Meltdown.73028817.js"),[])});Object.assign({"../supplimentary_event_data/Long Halloween 2022.json":()=>N(()=>import("./Long Halloween 2022.687d5567.js"),[])});var f;(function(n){n[n.SIMPLE_RANKING=0]="SIMPLE_RANKING",n[n.VICTORY_POINT_PLOT=1]="VICTORY_POINT_PLOT",n[n.WIN_LOSS_METRICS=2]="WIN_LOSS_METRICS"})(f||(f={}));const J=[{name:"Ranking",type:f.SIMPLE_RANKING},{name:"Victory Point Metrics",type:f.VICTORY_POINT_PLOT},{name:"Win Loss Metrics",type:f.WIN_LOSS_METRICS}],ze=()=>{const[n,e]=fe(),[s,a]=g(n.format||""),r=z(()=>n.slugs||""),[p,m]=g(null),[te,ne]=g(0),[V,j]=g(0),[re,B]=g(!1),[D,H]=g(new Array);g(0),g(!1),g(new Array);const se=z(()=>r()===""?[]:r()?.split("|")||[]),b=()=>({stats:D()}),[L,F]=g(!1);function ce(c){H([...c,...D()])}function G(){let c=r()?.split("|")||[],i=d=>c.includes(d.slug);return K.filter(i)}function oe(){let c=!1,i;if(s()!==void 0&&s()!==""){let d=C=>C.format.slug===n.format;c=!0,i=K.filter(d)}else i=G();let o=i.map(d=>d.slug).sort().join("|");c&&(m(o),a(""))}x(()=>{if(re()&&!L()){B(!1);let c=G();F(c.length>0),ne(c.length),j(0),H([]),c.map(i=>{const o="../events/"+i.stats;o in q&&q[o]().then(d=>{console.log(`loaded file ${o}`),j(1+V());let C=d.stats.map(ue=>({...ue,tornament_slug:i.slug}));ce(C),te()===V()&&setTimeout(()=>{F(!1)},200)})})}});function W(){return r()===""?[]:r()?.split("|")||[]}function ae(c,i){let o=n.slugs?.split("|")||[],d=o.indexOf(c);d>=0?o.splice(d,1):o.push(c);let C=o.sort().join("|");m(C)}x(()=>{oe()}),x(()=>{a(n.format)}),x(()=>{console.log(`current slug updated: ${r()}`)}),x(()=>{r(),B(!0)}),x(()=>{console.log(`Update Params. current: ${r()} Slug:${p()} format: ${s()}`),p()!==null&&(e({slugs:p(),format:s()}),m(null))});const[A,le]=g(f.SIMPLE_RANKING);function ie(c){const i=+c.target.value;for(var o of J)i===o.type&&le(o.type)}return t(y,{fluid:!0,get children(){return[t(y,{class:"text-center",fluid:!0,get children(){return Be.cloneNode(!0)}}),t(y,{get children(){return t(E,{get children(){return[t(u,{fluid:!0}),t(u,{md:6,get children(){return t(M,{style:{"margin-top":"10px","margin-bottom":"20px"},get children(){return t(M.Item,{eventKey:"0",get children(){return[t(M.Header,{children:"Event Selection"}),t(M.Body,{get children(){return t($,{get children(){return t(Y,{each:K,children:(c,i)=>t($.Check,{type:"checkbox",get id(){return c.slug},get label(){return(()=>{const o=He.cloneNode(!0),d=o.firstChild;return T(o,()=>c.name,d),T(o,()=>c.date,null),o})()},get checked(){return se().includes(c.slug)},get onClick(){return[ae,c.slug]}})})}})}})]}})}})}}),t(u,{md:2,get children(){return t($,{get children(){return t($.Select,{style:{padding:"10px","margin-top":"10px","margin-bottom":"15px","max-width":"300px",display:"inline"},onChange:ie,get value(){return A()},get children(){return t(Y,{each:J,children:(c,i)=>(()=>{const o=Fe.cloneNode(!0);return T(o,()=>c.name),me(()=>o.value=c.type),o})()})}})}})}}),t(u,{fluid:!0})]}})}}),t(y,{fluid:!0,get children(){return t(E,{get children(){return[t(u,{xs:2}),t(u,{get children(){return t(U,{get children(){return[t(S,{get when(){return w(()=>W().length===0,!0)()&&!L()},get children(){return t(y,{get children(){return t(E,{get children(){return[t(u,{fluid:!0}),t(u,{children:"Select an event to begin."}),t(u,{fluid:!0})]}})}})}}),t(S,{get when(){return w(()=>W().length!==0,!0)()&&L()},get children(){return t(y,{get children(){return t(E,{get children(){return[t(u,{fluid:!0}),t(u,{className:"text-center",get children(){return t(je,{animation:"border",role:"status",get children(){return De.cloneNode(!0)}})}}),t(u,{fluid:!0})]}})}})}}),t(S,{get when(){return w(()=>b()!==void 0,!0)()&&b().stats.length>0},get children(){return t(U,{get children(){return[t(S,{get when(){return A()===f.SIMPLE_RANKING},get children(){return t(he,{event:null,get metrics(){return b()},hideRoundResults:!0,excludeMaskedPlayers:!0})}}),t(S,{get when(){return A()===f.VICTORY_POINT_PLOT},get children(){return t(ve,{event:null,get metrics(){return b()},excludeMaskedPlayers:!0})}}),t(S,{get when(){return A()===f.WIN_LOSS_METRICS},get children(){return t(Pe,{event:null,get metrics(){return b()}})}})]}})}})]}})}}),t(u,{xs:2})]}})}})]}})};export{ze as default};
