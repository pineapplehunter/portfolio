import{S as t,i as e,s,e as l,t as a,a as r,b as h,f as n,g as o,d as c,c as f,h as i,j as u,k as p,n as d,q as g,l as m}from"./client.a3d9eb8e.js";import{p as v}from"./posts.59bca2bd.js";function b(t,e,s){const l=t.slice();return l[0]=e[s],l}function E(t){let e,s,g,m,v,b=t[0].title()+"";return{c(){e=l("li"),s=l("a"),g=a(b),v=r(),this.h()},l(t){e=h(t,"LI",{});var l=n(e);s=h(l,"A",{rel:!0,href:!0});var a=n(s);g=o(a,b),a.forEach(c),v=f(l),l.forEach(c),this.h()},h(){i(s,"rel","prefetch"),i(s,"href",m="blog/"+t[0].permalink())},m(t,l){u(t,e,l),p(e,s),p(s,g),p(e,v)},p:d,d(t){t&&c(e)}}}function j(t){let e,s,j,k,x,L=v,R=[];for(let e=0;e<L.length;e+=1)R[e]=E(b(t,L,e));return{c(){e=r(),s=l("h1"),j=a("Recent posts"),k=r(),x=l("ul");for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){g('[data-svelte="svelte-10h7psl"]',document.head).forEach(c),e=f(t),s=h(t,"H1",{});var l=n(s);j=o(l,"Recent posts"),l.forEach(c),k=f(t),x=h(t,"UL",{class:!0});var a=n(x);for(let t=0;t<R.length;t+=1)R[t].l(a);a.forEach(c),this.h()},h(){document.title="Blog",i(x,"class","svelte-1uzksw3")},m(t,l){u(t,e,l),u(t,s,l),p(s,j),u(t,k,l),u(t,x,l);for(let t=0;t<R.length;t+=1)R[t].m(x,null)},p(t,[e]){if(0&e){let s;for(L=v,s=0;s<L.length;s+=1){const l=b(t,L,s);R[s]?R[s].p(l,e):(R[s]=E(l),R[s].c(),R[s].m(x,null))}for(;s<R.length;s+=1)R[s].d(1);R.length=L.length}},i:d,o:d,d(t){t&&c(e),t&&c(s),t&&c(k),t&&c(x),m(R,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,j,s,{})}}
