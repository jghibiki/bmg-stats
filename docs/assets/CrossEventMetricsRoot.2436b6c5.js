import{x as Q,s as _,k as l,y as I,l as h,d as t,D as v,p as P,z as de,A as ge,B as pe,_ as R,E as me,a as g,c as z,b as x,e as y,R as A,C as u,h as E,F as Y,f as K,i as T,j as fe,g as U,M as S,m as w,t as $}from"./index.6de588da.js";import{a as _e,V as he,b as ve}from"./WinLossMetrics.edadc0a0.js";function X(n,e){return Array.isArray(n)?n.includes(e):n===e}const Pe=Q({}),M=Pe,xe={as:"div"},ye=n=>{const[e,s]=_(l(xe,n),["as","bsPrefix","class","className","children","eventKey"]),a=I(M),r=h(e.bsPrefix,"accordion-collapse");return t(de,l({get in(){return X(a.activeEventKey,e.eventKey)}},s,{get children(){return t(v,{get component(){return e.as},get class(){return P(e.class,e.className,r)},get children(){return e.children}})}}))},Z=ye,Se=Q({eventKey:""}),k=Se,Re={as:"div"},be=n=>{const[e,s]=_(l(Re,n),["as","bsPrefix","class","className"]),a=h(e.bsPrefix,"accordion-body"),r=I(k);return t(Z,{get eventKey(){return r.eventKey},get children(){return t(v,l({get component(){return e.as}},s,{get class(){return P(e.class,e.className,a)}}))}})},Ce=be;function Ie(n,e){const s=I(M);return a=>{let r=n===s.activeEventKey?null:n;s.alwaysOpen&&(Array.isArray(s.activeEventKey)?s.activeEventKey.includes(n)?r=s.activeEventKey.filter(p=>p!==n):r=[...s.activeEventKey,n]:r=[n]),s.onSelect?.(r,a),ge(e,a)}}const Ne={as:"button"},Ae=n=>{const[e,s]=_(l(Ne,n),["as","bsPrefix","class","className","onClick"]),a=h(e.bsPrefix,"accordion-button"),r=I(k),p=Ie(r.eventKey,e.onClick),f=I(M);return t(v,l({get component(){return e.as},onClick:p},s,{get type(){return e.as==="button"?"button":void 0},get["aria-expanded"](){return r.eventKey===f.activeEventKey},get class(){return P(e.class,e.className,a,!X(f.activeEventKey,r.eventKey)&&"collapsed")}}))},ee=Ae,Ee={as:"h2"},Oe=n=>{const[e,s]=_(l(Ee,n),["as","bsPrefix","class","className","children","onClick"]),a=h(e.bsPrefix,"accordion-header");return t(v,l({get component(){return e.as}},s,{get class(){return P(e.class,e.className,a)},get children(){return t(ee,{get onClick(){return e.onClick},get children(){return e.children}})}}))},$e=Oe,Me={as:"div"},Le=n=>{const[e,s]=_(l(Me,n),["as","bsPrefix","class","className","eventKey"]),a=h(e.bsPrefix,"accordion-item"),r={get eventKey(){return e.eventKey}};return t(k.Provider,{value:r,get children(){return t(v,l({get component(){return e.as}},s,{get class(){return P(e.class,e.className,a)}}))}})},Ke=Le,Te={as:"div"},we=n=>{const[e,s]=_(l(Te,n),["as","activeKey","alwaysOpen","bsPrefix","class","className","defaultActiveKey","onSelect","flush"]),[a,r]=pe(()=>e.activeKey,()=>e.defaultActiveKey,e.onSelect),p=h(e.bsPrefix,"accordion"),f={get activeEventKey(){return a()},get alwaysOpen(){return e.alwaysOpen},get onSelect(){return r}};return t(M.Provider,{value:f,get children(){return t(v,l({get component(){return e.as}},s,{get class(){return P(e.class,e.className,p,e.flush&&`${p}-flush`)}}))}})},O=Object.assign(we,{Button:ee,Collapse:Z,Item:Ke,Header:$e,Body:Ce}),ke={as:"div"},Ve=n=>{const[e,s]=_(l(ke,n),["as","bsPrefix","variant","animation","size","class","className"]),r=`${h(e.bsPrefix,"spinner")}-${e.animation}`;return t(v,l({get component(){return e.as}},s,{get class(){return P(e.class,e.className,r,e.size&&`${r}-${e.size}`,e.variant&&`text-${e.variant}`)}}))},je=Ve,Be=$("<h3>Season Stats</h3>"),De=$('<span class="visually-hidden">Loading...</span>'),Fe=$("<span> </span>"),Ge=$("<option></option>"),q=Object.assign({"../events/2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.json":()=>R(()=>import("./2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.ef657290.js"),[]),"../events/Long Halloween 2022.json":()=>R(()=>import("./Long Halloween 2022.4d1c7b5f.js"),[]),"../events/Renegade - Spring Up GT.json":()=>R(()=>import("./Renegade - Spring Up GT.7881c959.js"),[]),"../events/Renegade - Summer Meltdown - Sunday Slam.json":()=>R(()=>import("./Renegade - Summer Meltdown - Sunday Slam.13421d63.js"),[]),"../events/Renegade - Summer Meltdown.json":()=>R(()=>import("./Renegade - Summer Meltdown.73028817.js"),[])});Object.assign({"../supplimentary_event_data/2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.json":()=>R(()=>import("./2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.7892488a.js"),[])});var m;(function(n){n[n.SIMPLE_RANKING=0]="SIMPLE_RANKING",n[n.VICTORY_POINT_PLOT=1]="VICTORY_POINT_PLOT",n[n.WIN_LOSS_METRICS=2]="WIN_LOSS_METRICS"})(m||(m={}));const J=[{name:"Ranking",type:m.SIMPLE_RANKING},{name:"Victory Point Metrics",type:m.VICTORY_POINT_PLOT},{name:"Win Loss Metrics",type:m.WIN_LOSS_METRICS}],ze=()=>{const[n,e]=me(),[s,a]=g(n.format||""),r=z(()=>n.slugs||""),[p,f]=g(null),[te,ne]=g(0),[V,j]=g(0),[re,B]=g(!1),[D,F]=g(new Array);g(0),g(!1),g(new Array);const se=z(()=>r()===""?[]:r()?.split("|")||[]),b=()=>({stats:D()}),[L,G]=g(!1);function ce(c){F([...c,...D()])}function H(){let c=r()?.split("|")||[],i=d=>c.includes(d.slug);return K.filter(i)}function oe(){let c=!1,i;if(s()!==void 0&&s()!==""){let d=C=>C.format.slug===n.format;c=!0,i=K.filter(d)}else i=H();let o=i.map(d=>d.slug).sort().join("|");c&&(f(o),a(""))}x(()=>{if(re()&&!L()){B(!1);let c=H();G(c.length>0),ne(c.length),j(0),F([]),c.map(i=>{const o="../events/"+i.stats;o in q&&q[o]().then(d=>{console.log(`loaded file ${o}`),j(1+V());let C=d.stats.map(ue=>({...ue,tornament_slug:i.slug}));ce(C),te()===V()&&setTimeout(()=>{G(!1)},200)})})}});function W(){return r()===""?[]:r()?.split("|")||[]}function ae(c,i){let o=n.slugs?.split("|")||[],d=o.indexOf(c);d>=0?o.splice(d,1):o.push(c);let C=o.sort().join("|");f(C)}x(()=>{oe()}),x(()=>{a(n.format)}),x(()=>{console.log(`current slug updated: ${r()}`)}),x(()=>{r(),B(!0)}),x(()=>{console.log(`Update Params. current: ${r()} Slug:${p()} format: ${s()}`),p()!==null&&(e({slugs:p(),format:s()}),f(null))});const[N,le]=g(m.SIMPLE_RANKING);function ie(c){const i=+c.target.value;for(var o of J)i===o.type&&le(o.type)}return t(y,{fluid:!0,get children(){return[t(y,{class:"text-center",fluid:!0,get children(){return Be.cloneNode(!0)}}),t(y,{get children(){return t(A,{get children(){return[t(u,{fluid:!0}),t(u,{md:6,get children(){return t(O,{style:{"margin-top":"10px","margin-bottom":"20px"},get children(){return t(O.Item,{eventKey:"0",get children(){return[t(O.Header,{children:"Event Selection"}),t(O.Body,{get children(){return t(E,{get children(){return t(Y,{each:K,children:(c,i)=>t(E.Check,{type:"checkbox",get id(){return c.slug},get label(){return(()=>{const o=Fe.cloneNode(!0),d=o.firstChild;return T(o,()=>c.name,d),T(o,()=>c.date,null),o})()},get checked(){return se().includes(c.slug)},get onClick(){return[ae,c.slug]}})})}})}})]}})}})}}),t(u,{md:2,get children(){return t(E,{get children(){return t(E.Select,{style:{padding:"10px","margin-top":"10px","margin-bottom":"15px","max-width":"300px",display:"inline"},onChange:ie,get value(){return N()},get children(){return t(Y,{each:J,children:(c,i)=>(()=>{const o=Ge.cloneNode(!0);return T(o,()=>c.name),fe(()=>o.value=c.type),o})()})}})}})}}),t(u,{fluid:!0})]}})}}),t(y,{fluid:!0,get children(){return t(A,{get children(){return[t(u,{xs:2}),t(u,{get children(){return t(U,{get children(){return[t(S,{get when(){return w(()=>W().length===0,!0)()&&!L()},get children(){return t(y,{get children(){return t(A,{get children(){return[t(u,{fluid:!0}),t(u,{children:"Select an event to begin."}),t(u,{fluid:!0})]}})}})}}),t(S,{get when(){return w(()=>W().length!==0,!0)()&&L()},get children(){return t(y,{get children(){return t(A,{get children(){return[t(u,{fluid:!0}),t(u,{className:"text-center",get children(){return t(je,{animation:"border",role:"status",get children(){return De.cloneNode(!0)}})}}),t(u,{fluid:!0})]}})}})}}),t(S,{get when(){return w(()=>b()!==void 0,!0)()&&b().stats.length>0},get children(){return t(U,{get children(){return[t(S,{get when(){return N()===m.SIMPLE_RANKING},get children(){return t(_e,{event:null,get metrics(){return b()},hideRoundResults:!0,excludeMaskedPlayers:!0})}}),t(S,{get when(){return N()===m.VICTORY_POINT_PLOT},get children(){return t(he,{event:null,get metrics(){return b()},excludeMaskedPlayers:!0})}}),t(S,{get when(){return N()===m.WIN_LOSS_METRICS},get children(){return t(ve,{event:null,get metrics(){return b()}})}})]}})}})]}})}}),t(u,{xs:2})]}})}})]}})};export{ze as default};
