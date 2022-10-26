import{_ as d,c as S,u as N,e as O,a as p,b as E,d as e,S as g,M as c,C as _,i as m,F as I,f as L,g as C,R as T,h,m as w,t as u}from"./index.63d60918.js";import{S as V,V as x,a as y}from"./WinLossMetrics.bee462a3.js";const A=u("<h3> - </h3>"),$=u("<p>Please select an event from the sidebar.</p>"),b=u("<option></option>"),G=u("<p>Loading metrics...</p>");var s;(function(r){r[r.SIMPLE_RANKING=0]="SIMPLE_RANKING",r[r.VICTORY_POINT_PLOT=1]="VICTORY_POINT_PLOT",r[r.WIN_LOSS_METRICS=2]="WIN_LOSS_METRICS"})(s||(s={}));const f=[{name:"Ranking",type:s.SIMPLE_RANKING},{name:"Victory Point Metrics",type:s.VICTORY_POINT_PLOT},{name:"Win Loss Metrics",type:s.WIN_LOSS_METRICS}],F=()=>{const r=Object.assign({"../events/Renegade - Spring Up GT.json":()=>d(()=>import("./Renegade - Spring Up GT.13394a05.js"),[]),"../events/Renegade - Summer Meltdown - Sunday Slam.json":()=>d(()=>import("./Renegade - Summer Meltdown - Sunday Slam.13421d63.js"),[]),"../events/Renegade - Summer Meltdown.json":()=>d(()=>import("./Renegade - Summer Meltdown.fbc00687.js"),[])}),R=S(()=>N().slug),n=S(()=>O.find(t=>t.slug===R())),[o,v]=p(s.SIMPLE_RANKING),[l,P]=p(null);E(()=>{if(n()!==null&&n()!==void 0){const t="../events/"+n().stats;t in r&&r[t]().then(i=>{P(i)})}});function M(t){const i=+t.target.value;for(var a of f)i===a.type&&v(a.type)}return e(_,{fluid:!0,get children(){return e(g,{get fallback(){return $.cloneNode(!0)},get children(){return e(c,{when:n!=null,get children(){return[e(_,{class:"text-center",fluid:!0,get children(){return[(()=>{const t=A.cloneNode(!0),i=t.firstChild;return m(t,()=>n().name,i),m(t,()=>n().date,null),t})(),e(I,{get children(){return e(I.Select,{style:{padding:"10px","margin-top":"10px","margin-bottom":"15px","max-width":"300px",display:"inline"},onChange:M,get value(){return o()},get children(){return e(L,{each:f,children:(t,i)=>(()=>{const a=b.cloneNode(!0);return m(a,()=>t.name),C(()=>a.value=t.type),a})()})}})}})]}}),e(_,{fluid:!0,get children(){return e(T,{get children(){return[e(h,{xs:2}),e(h,{get children(){return e(g,{get fallback(){return G.cloneNode(!0)},get children(){return e(c,{get when(){return w(()=>l()!==null,!0)()&&l()!==void 0},get children(){return e(g,{get children(){return[e(c,{get when(){return o()===s.SIMPLE_RANKING},get children(){return e(V,{get event(){return n()},get metrics(){return l()},excludeMaskedPlayers:!1})}}),e(c,{get when(){return o()===s.VICTORY_POINT_PLOT},get children(){return e(x,{get event(){return n()},get metrics(){return l()}})}}),e(c,{get when(){return o()===s.WIN_LOSS_METRICS},get children(){return e(y,{get event(){return n()},get metrics(){return l()}})}})]}})}})}})}}),e(h,{xs:2})]}})}})]}})}})}})};export{F as default};