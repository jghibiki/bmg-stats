import{s as x,d as P,g as m,h as d,D as h,k as N,B as b}from"./index.e2d937c2.js";const C=["xxl","xl","lg","md","sm","xs"];function B(r){const[s,e]=x(r,["as","bsPrefix","class","className"]),o=N(s.bsPrefix,"col"),n=b(),p=[],a=[];n().forEach(t=>{const l=e[t];let u,$,g;typeof l=="object"&&l!=null?{span:u,offset:$,order:g}=l:u=l;const i=t!=="xs"?`-${t}`:"";u&&p.push(u===!0?`${o}${i}`:`${o}${i}-${u}`),g!=null&&a.push(`order${i}-${g}`),$!=null&&a.push(`offset${i}-${$}`)});const[f,c]=x(e,C);return[m(c,{get class(){return d(s.class,s.className,...p,...a)}}),{get as(){return s.as},get bsPrefix(){return o},get spans(){return p}}]}const E=r=>{const[s,e]=B(r),[o,n]=x(s,["class","className"]);return P(h,m({get component(){return e.as??"div"}},n,{get class(){return d(o.class,o.className,!e.spans.length&&e.bsPrefix)}}))},R=E,w={as:"div"},y=r=>{const[s,e]=x(m(w,r),["as","bsPrefix","class","className"]),o=N(s.bsPrefix,"row"),n=b(),p=`${o}-cols`,a=[];return n().forEach(f=>{const c=e[f];delete e[f];let t;c!=null&&typeof c=="object"?{cols:t}=c:t=c;const l=f!=="xs"?`-${f}`:"";t!=null&&a.push(`${p}${l}-${t}`)}),P(h,m({get component(){return s.as}},e,{get class(){return d(s.class,s.className,o,...a)}}))},V=y;export{R as C,V as R};