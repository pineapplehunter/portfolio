import{_ as t,a as n,b as r,c as e,i as o,s,d as a,S as c,f,t as u,j as i,k as l,l as h,g as p,m as v,n as g,o as d,r as m,e as y,q as R,h as E,u as b,p as j,v as x}from"./client.2d2f2d7a.js";function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(e){var a=n(this).constructor;o=Reflect.construct(s,arguments,a)}else o=s.apply(this,arguments);return r(this,o)}}function D(t,n,r){var e=t.slice();return e[1]=n[r],e}function L(t){var n,r,e,o,s=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(s),this.h()},l:function(t){n=i(t,"LI",{});var o=l(n);r=i(o,"A",{rel:!0,href:!0});var a=l(r);e=h(a,s),a.forEach(p),o.forEach(p),this.h()},h:function(){v(r,"rel","prefetch"),v(r,"href",o="blog/"+t[1].slug)},m:function(t,o){g(t,n,o),d(n,r),d(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&m(e,s),1&n&&o!==(o="blog/"+t[1].slug)&&v(r,"href",o)},d:function(t){t&&p(n)}}}function S(t){for(var n,r,e,o,s,a=t[0],c=[],m=0;m<a.length;m+=1)c[m]=L(D(t,a,m));return{c:function(){n=y(),r=f("h1"),e=u("Recent posts"),o=y(),s=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){R('[data-svelte="svelte-hfp9t8"]',document.head).forEach(p),n=E(t),r=i(t,"H1",{});var a=l(r);e=h(a,"Recent posts"),a.forEach(p),o=E(t),s=i(t,"UL",{class:!0});for(var f=l(s),u=0;u<c.length;u+=1)c[u].l(f);f.forEach(p),this.h()},h:function(){document.title="Blog",v(s,"class","svelte-1frg2tf")},m:function(t,a){g(t,n,a),g(t,r,a),d(r,e),g(t,o,a),g(t,s,a);for(var f=0;f<c.length;f+=1)c[f].m(s,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(a=t[0],e=0;e<a.length;e+=1){var o=D(t,a,e);c[e]?c[e].p(o,r):(c[e]=L(o),c[e].c(),c[e].m(s,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=a.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),t&&p(o),t&&p(s),x(c,t)}}}function k(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function A(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var B=function(n){t(f,c);var r=q(f);function f(t){var n;return e(this,f),n=r.call(this),o(a(n),t,A,S,s,{posts:0}),n}return f}();export default B;export{k as preload};
