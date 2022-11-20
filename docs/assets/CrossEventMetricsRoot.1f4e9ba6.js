import{x as Q,s as h,k as l,y as b,l as v,d as t,D as P,p as x,z as de,A as ge,B as pe,_ as f,E as _e,a as g,c as z,b as y,e as S,R as C,C as u,h as N,F as Y,f as K,i as T,j as me,g as U,M as R,m as w,t as $}from"./index.53c6dde5.js";import{a as fe,V as he,b as ve}from"./WinLossMetrics.2eb85d00.js";function X(n,e){return Array.isArray(n)?n.includes(e):n===e}const Pe=Q({}),L=Pe,xe={as:"div"},ye=n=>{const[e,s]=h(l(xe,n),["as","bsPrefix","class","className","children","eventKey"]),a=b(L),r=v(e.bsPrefix,"accordion-collapse");return t(de,l({get in(){return X(a.activeEventKey,e.eventKey)}},s,{get children(){return t(P,{get component(){return e.as},get class(){return x(e.class,e.className,r)},get children(){return e.children}})}}))},Z=ye,Se=Q({eventKey:""}),V=Se,Re={as:"div"},Ee=n=>{const[e,s]=h(l(Re,n),["as","bsPrefix","class","className"]),a=v(e.bsPrefix,"accordion-body"),r=b(V);return t(Z,{get eventKey(){return r.eventKey},get children(){return t(P,l({get component(){return e.as}},s,{get class(){return x(e.class,e.className,a)}}))}})},Ie=Ee;function be(n,e){const s=b(L);return a=>{let r=n===s.activeEventKey?null:n;s.alwaysOpen&&(Array.isArray(s.activeEventKey)?s.activeEventKey.includes(n)?r=s.activeEventKey.filter(p=>p!==n):r=[...s.activeEventKey,n]:r=[n]),s.onSelect?.(r,a),ge(e,a)}}const Ae={as:"button"},Ce=n=>{const[e,s]=h(l(Ae,n),["as","bsPrefix","class","className","onClick"]),a=v(e.bsPrefix,"accordion-button"),r=b(V),p=be(r.eventKey,e.onClick),m=b(L);return t(P,l({get component(){return e.as},onClick:p},s,{get type(){return e.as==="button"?"button":void 0},get["aria-expanded"](){return r.eventKey===m.activeEventKey},get class(){return x(e.class,e.className,a,!X(m.activeEventKey,r.eventKey)&&"collapsed")}}))},ee=Ce,Ne={as:"h2"},Oe=n=>{const[e,s]=h(l(Ne,n),["as","bsPrefix","class","className","children","onClick"]),a=v(e.bsPrefix,"accordion-header");return t(P,l({get component(){return e.as}},s,{get class(){return x(e.class,e.className,a)},get children(){return t(ee,{get onClick(){return e.onClick},get children(){return e.children}})}}))},$e=Oe,Le={as:"div"},Me=n=>{const[e,s]=h(l(Le,n),["as","bsPrefix","class","className","eventKey"]),a=v(e.bsPrefix,"accordion-item"),r={get eventKey(){return e.eventKey}};return t(V.Provider,{value:r,get children(){return t(P,l({get component(){return e.as}},s,{get class(){return x(e.class,e.className,a)}}))}})},Ke=Me,Te={as:"div"},we=n=>{const[e,s]=h(l(Te,n),["as","activeKey","alwaysOpen","bsPrefix","class","className","defaultActiveKey","onSelect","flush"]),[a,r]=pe(()=>e.activeKey,()=>e.defaultActiveKey,e.onSelect),p=v(e.bsPrefix,"accordion"),m={get activeEventKey(){return a()},get alwaysOpen(){return e.alwaysOpen},get onSelect(){return r}};return t(L.Provider,{value:m,get children(){return t(P,l({get component(){return e.as}},s,{get class(){return x(e.class,e.className,p,e.flush&&`${p}-flush`)}}))}})},O=Object.assign(we,{Button:ee,Collapse:Z,Item:Ke,Header:$e,Body:Ie}),Ve={as:"div"},ke=n=>{const[e,s]=h(l(Ve,n),["as","bsPrefix","variant","animation","size","class","className"]),r=`${v(e.bsPrefix,"spinner")}-${e.animation}`;return t(P,l({get component(){return e.as}},s,{get class(){return x(e.class,e.className,r,e.size&&`${r}-${e.size}`,e.variant&&`text-${e.variant}`)}}))},je=ke,Be=$("<h3>Season Stats</h3>"),De=$('<span class="visually-hidden">Loading...</span>'),Fe=$("<span> </span>"),Ge=$("<option></option>"),q=Object.assign({"../events/2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.json":()=>f(()=>import("./2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.ef657290.js"),[]),"../events/2022_11_19_Renegade_Open__Knightfall_5.json":()=>f(()=>import("./2022_11_19_Renegade_Open__Knightfall_5.d51f5860.js"),[]),"../events/Long Halloween 2022.json":()=>f(()=>import("./Long Halloween 2022.4d1c7b5f.js"),[]),"../events/Renegade - Spring Up GT.json":()=>f(()=>import("./Renegade - Spring Up GT.7881c959.js"),[]),"../events/Renegade - Summer Meltdown - Sunday Slam.json":()=>f(()=>import("./Renegade - Summer Meltdown - Sunday Slam.13421d63.js"),[]),"../events/Renegade - Summer Meltdown.json":()=>f(()=>import("./Renegade - Summer Meltdown.73028817.js"),[])});Object.assign({"../supplimentary_event_data/2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.json":()=>f(()=>import("./2022_11_18_Renegade_Open__The_Riddlers_Renegade_Rampage_1.7892488a.js"),[]),"../supplimentary_event_data/2022_11_19_Renegade_Open__Knightfall_5.json":()=>f(()=>import("./2022_11_19_Renegade_Open__Knightfall_5.b02fbc85.js"),[])});var _;(function(n){n[n.SIMPLE_RANKING=0]="SIMPLE_RANKING",n[n.VICTORY_POINT_PLOT=1]="VICTORY_POINT_PLOT",n[n.WIN_LOSS_METRICS=2]="WIN_LOSS_METRICS"})(_||(_={}));const J=[{name:"Ranking",type:_.SIMPLE_RANKING},{name:"Victory Point Metrics",type:_.VICTORY_POINT_PLOT},{name:"Win Loss Metrics",type:_.WIN_LOSS_METRICS}],ze=()=>{const[n,e]=_e(),[s,a]=g(n.format||""),r=z(()=>n.slugs||""),[p,m]=g(null),[te,ne]=g(0),[k,j]=g(0),[re,B]=g(!1),[D,F]=g(new Array);g(0),g(!1),g(new Array);const se=z(()=>r()===""?[]:r()?.split("|")||[]),E=()=>({stats:D()}),[M,G]=g(!1);function ce(c){F([...c,...D()])}function H(){let c=r()?.split("|")||[],i=d=>c.includes(d.slug);return K.filter(i)}function oe(){let c=!1,i;if(s()!==void 0&&s()!==""){let d=I=>I.format.slug===n.format;c=!0,i=K.filter(d)}else i=H();let o=i.map(d=>d.slug).sort().join("|");c&&(m(o),a(""))}y(()=>{if(re()&&!M()){B(!1);let c=H();G(c.length>0),ne(c.length),j(0),F([]),c.map(i=>{const o="../events/"+i.stats;o in q&&q[o]().then(d=>{console.log(`loaded file ${o}`),j(1+k());let I=d.stats.map(ue=>({...ue,tornament_slug:i.slug}));ce(I),te()===k()&&setTimeout(()=>{G(!1)},200)})})}});function W(){return r()===""?[]:r()?.split("|")||[]}function ae(c,i){let o=n.slugs?.split("|")||[],d=o.indexOf(c);d>=0?o.splice(d,1):o.push(c);let I=o.sort().join("|");m(I)}y(()=>{oe()}),y(()=>{a(n.format)}),y(()=>{console.log(`current slug updated: ${r()}`)}),y(()=>{r(),B(!0)}),y(()=>{console.log(`Update Params. current: ${r()} Slug:${p()} format: ${s()}`),p()!==null&&(e({slugs:p(),format:s()}),m(null))});const[A,le]=g(_.SIMPLE_RANKING);function ie(c){const i=+c.target.value;for(var o of J)i===o.type&&le(o.type)}return t(S,{fluid:!0,get children(){return[t(S,{class:"text-center",fluid:!0,get children(){return Be.cloneNode(!0)}}),t(S,{get children(){return t(C,{get children(){return[t(u,{fluid:!0}),t(u,{md:6,get children(){return t(O,{style:{"margin-top":"10px","margin-bottom":"20px"},get children(){return t(O.Item,{eventKey:"0",get children(){return[t(O.Header,{children:"Event Selection"}),t(O.Body,{get children(){return t(N,{get children(){return t(Y,{each:K,children:(c,i)=>t(N.Check,{type:"checkbox",get id(){return c.slug},get label(){return(()=>{const o=Fe.cloneNode(!0),d=o.firstChild;return T(o,()=>c.name,d),T(o,()=>c.date,null),o})()},get checked(){return se().includes(c.slug)},get onClick(){return[ae,c.slug]}})})}})}})]}})}})}}),t(u,{md:2,get children(){return t(N,{get children(){return t(N.Select,{style:{padding:"10px","margin-top":"10px","margin-bottom":"15px","max-width":"300px",display:"inline"},onChange:ie,get value(){return A()},get children(){return t(Y,{each:J,children:(c,i)=>(()=>{const o=Ge.cloneNode(!0);return T(o,()=>c.name),me(()=>o.value=c.type),o})()})}})}})}}),t(u,{fluid:!0})]}})}}),t(S,{fluid:!0,get children(){return t(C,{get children(){return[t(u,{xs:2}),t(u,{get children(){return t(U,{get children(){return[t(R,{get when(){return w(()=>W().length===0,!0)()&&!M()},get children(){return t(S,{get children(){return t(C,{get children(){return[t(u,{fluid:!0}),t(u,{children:"Select an event to begin."}),t(u,{fluid:!0})]}})}})}}),t(R,{get when(){return w(()=>W().length!==0,!0)()&&M()},get children(){return t(S,{get children(){return t(C,{get children(){return[t(u,{fluid:!0}),t(u,{className:"text-center",get children(){return t(je,{animation:"border",role:"status",get children(){return De.cloneNode(!0)}})}}),t(u,{fluid:!0})]}})}})}}),t(R,{get when(){return w(()=>E()!==void 0,!0)()&&E().stats.length>0},get children(){return t(U,{get children(){return[t(R,{get when(){return A()===_.SIMPLE_RANKING},get children(){return t(fe,{event:null,get metrics(){return E()},hideRoundResults:!0,excludeMaskedPlayers:!0})}}),t(R,{get when(){return A()===_.VICTORY_POINT_PLOT},get children(){return t(he,{event:null,get metrics(){return E()},excludeMaskedPlayers:!0})}}),t(R,{get when(){return A()===_.WIN_LOSS_METRICS},get children(){return t(ve,{event:null,get metrics(){return E()}})}})]}})}})]}})}}),t(u,{xs:2})]}})}})]}})};export{ze as default};