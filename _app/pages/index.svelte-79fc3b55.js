import{S as t,i as e,s,D as n,e as a,c as i,a as o,d as r,b as l,f as c,E as h,F as m,G as p,x as u,u as f,t as g,g as $,h as d,J as v,H as x,I as w,k as E,n as S,l as y,K as z,j as T,m as N,o as D,v as b,A,r as I,w as V}from"../chunks/vendor-0b5ddf32.js";function M(t){let e,s;const g=t[1].default,$=n(g,t,t[0],null);return{c(){e=a("div"),$&&$.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var s=o(e);$&&$.l(s),s.forEach(r),this.h()},h(){l(e,"class","card svelte-1oo2f3t")},m(t,n){c(t,e,n),$&&$.m(e,null),s=!0},p(t,[e]){$&&$.p&&(!s||1&e)&&h($,g,t,t[0],s?p(g,t[0],e,null):m(t[0]),null)},i(t){s||(u($,t),s=!0)},o(t){f($,t),s=!1},d(t){t&&r(e),$&&$.d(t)}}}function P(t,e,s){let{$$slots:n={},$$scope:a}=e;return t.$$set=t=>{"$$scope"in t&&s(0,a=t.$$scope)},[a,n]}class B extends t{constructor(t){super(),e(this,t,P,M,s,{})}}function H(t){let e,s,v;const x=t[8].default,w=n(x,t,t[7],null),E=w||function(t){let e;return{c(){e=g(t[0])},l(s){e=$(s,t[0])},m(t,s){c(t,e,s)},p(t,s){1&s&&d(e,t[0])},d(t){t&&r(e)}}}(t);return{c(){e=a("h1"),E&&E.c(),this.h()},l(t){e=i(t,"H1",{class:!0,style:!0});var s=o(e);E&&E.l(s),s.forEach(r),this.h()},h(){l(e,"class","title svelte-1oo7i27"),l(e,"style",s=(t[1]?`margin-top: ${t[1]};`:"")+" "+(t[2]?`margin-bottom: ${t[2]};`:"")+" "+(t[3]?`text-align: ${t[3]};`:"")+" "+(t[4]?`font-size: ${t[4]};`:"")+" "+(t[5]?`font-weight: ${t[5]};`:"")+" "+(t[6]?`letter-spacing: ${t[6]};`:""))},m(t,s){c(t,e,s),E&&E.m(e,null),v=!0},p(t,[n]){w?w.p&&(!v||128&n)&&h(w,x,t,t[7],v?p(x,t[7],n,null):m(t[7]),null):E&&E.p&&(!v||1&n)&&E.p(t,v?n:-1),(!v||126&n&&s!==(s=(t[1]?`margin-top: ${t[1]};`:"")+" "+(t[2]?`margin-bottom: ${t[2]};`:"")+" "+(t[3]?`text-align: ${t[3]};`:"")+" "+(t[4]?`font-size: ${t[4]};`:"")+" "+(t[5]?`font-weight: ${t[5]};`:"")+" "+(t[6]?`letter-spacing: ${t[6]};`:"")))&&l(e,"style",s)},i(t){v||(u(E,t),v=!0)},o(t){f(E,t),v=!1},d(t){t&&r(e),E&&E.d(t)}}}function W(t,e,s){let{$$slots:n={},$$scope:a}=e,{title:i="Nahmii"}=e,{marginTop:o=""}=e,{marginBottom:r=""}=e,{textAlign:l="left"}=e,{fontSize:c="32px"}=e,{fontWeight:h="500"}=e,{letterSpacing:m="0"}=e;return t.$$set=t=>{"title"in t&&s(0,i=t.title),"marginTop"in t&&s(1,o=t.marginTop),"marginBottom"in t&&s(2,r=t.marginBottom),"textAlign"in t&&s(3,l=t.textAlign),"fontSize"in t&&s(4,c=t.fontSize),"fontWeight"in t&&s(5,h=t.fontWeight),"letterSpacing"in t&&s(6,m=t.letterSpacing),"$$scope"in t&&s(7,a=t.$$scope)},[i,o,r,l,c,h,m,a,n]}class j extends t{constructor(t){super(),e(this,t,W,H,s,{title:0,marginTop:1,marginBottom:2,textAlign:3,fontSize:4,fontWeight:5,letterSpacing:6})}}function k(t){let e,s,n,h,m;return{c(){e=a("header"),s=a("div"),n=a("a"),h=a("img"),this.h()},l(t){e=i(t,"HEADER",{class:!0});var a=o(e);s=i(a,"DIV",{class:!0});var l=o(s);n=i(l,"A",{href:!0,class:!0});var c=o(n);h=i(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(r),l.forEach(r),a.forEach(r),this.h()},h(){v(h.src,m="https://nahmii-community.github.io/status/_app/assets/nahmii-logo-colour-negative-100px-h-79350300.png")||l(h,"src","https://nahmii-community.github.io/status/_app/assets/nahmii-logo-colour-negative-100px-h-79350300.png"),l(h,"alt","Nahmii"),l(h,"class","svelte-1gfxnxh"),l(n,"href","https://nahmii.io"),l(n,"class","svelte-1gfxnxh"),l(s,"class","corner svelte-1gfxnxh"),l(e,"class","svelte-1gfxnxh")},m(t,a){c(t,e,a),x(e,s),x(s,n),x(n,h)},p:w,i:w,o:w,d(t){t&&r(e)}}}class G extends t{constructor(t){super(),e(this,t,null,k,s,{})}}function _(t,e,s){const n=t.slice();return n[1]=e[s].status,n[2]=e[s].name,n[3]=e[s].description,n[5]=s,n}function C(t){let e,s;return{c(){e=a("span"),s=g("Down!"),this.h()},l(t){e=i(t,"SPAN",{class:!0});var n=o(e);s=$(n,"Down!"),n.forEach(r),this.h()},h(){l(e,"class","bad-status svelte-azxmgv")},m(t,n){c(t,e,n),x(e,s)},d(t){t&&r(e)}}}function J(t){let e,s;return{c(){e=a("span"),s=g("Up!"),this.h()},l(t){e=i(t,"SPAN",{class:!0});var n=o(e);s=$(n,"Up!"),n.forEach(r),this.h()},h(){l(e,"class","good-status svelte-azxmgv")},m(t,n){c(t,e,n),x(e,s)},d(t){t&&r(e)}}}function O(t){let e,s,n,h,m,p,u,f,v,w,y=t[2]+"",z=(t[3]?t[3]:"")+"";function T(t,e){return t[1]?J:C}let N=T(t),D=N(t);return{c(){e=a("div"),s=a("div"),n=a("p"),h=g(y),m=g(":"),p=E(),D.c(),u=E(),f=a("p"),v=g(z),w=E(),this.h()},l(t){e=i(t,"DIV",{class:!0});var a=o(e);s=i(a,"DIV",{class:!0});var l=o(s);n=i(l,"P",{class:!0});var c=o(n);h=$(c,y),m=$(c,":"),c.forEach(r),p=S(l),D.l(l),l.forEach(r),u=S(a),f=i(a,"P",{class:!0});var g=o(f);v=$(g,z),g.forEach(r),w=S(a),a.forEach(r),this.h()},h(){l(n,"class","service-name svelte-azxmgv"),l(s,"class","status-line svelte-azxmgv"),l(f,"class","status-description svelte-azxmgv"),l(e,"class","status svelte-azxmgv")},m(t,a){c(t,e,a),x(e,s),x(s,n),x(n,h),x(n,m),x(s,p),D.m(s,null),x(e,u),x(e,f),x(f,v),x(e,w)},p(t,e){1&e&&y!==(y=t[2]+"")&&d(h,y),N!==(N=T(t))&&(D.d(1),D=N(t),D&&(D.c(),D.m(s,null))),1&e&&z!==(z=(t[3]?t[3]:"")+"")&&d(v,z)},d(t){t&&r(e),D.d()}}}function U(t){let e,s=t[0],n=[];for(let a=0;a<s.length;a+=1)n[a]=O(_(t,s,a));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=y()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);e=y()},m(t,s){for(let e=0;e<n.length;e+=1)n[e].m(t,s);c(t,e,s)},p(t,[a]){if(1&a){let i;for(s=t[0],i=0;i<s.length;i+=1){const o=_(t,s,i);n[i]?n[i].p(o,a):(n[i]=O(o),n[i].c(),n[i].m(e.parentNode,e))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:w,o:w,d(t){z(n,t),t&&r(e)}}}function F(t,e,s){let{statuses:n}=e;return t.$$set=t=>{"statuses"in t&&s(0,n=t.statuses)},[n]}class K extends t{constructor(t){super(),e(this,t,F,U,s,{statuses:0})}}function R(t){let e;return{c(){e=g("Nahmii Status")},l(t){e=$(t,"Nahmii Status")},m(t,s){c(t,e,s)},d(t){t&&r(e)}}}function q(t){let e,s;return e=new K({props:{statuses:t[0]}}),{c(){T(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,n){D(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.statuses=t[0]),e.$set(n)},i(t){s||(u(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function L(t){let e,s;return{c(){e=a("p"),s=g("...waiting"),this.h()},l(t){e=i(t,"P",{class:!0});var n=o(e);s=$(n,"...waiting"),n.forEach(r),this.h()},h(){l(e,"class","waiting svelte-1w3twm4")},m(t,n){c(t,e,n),x(e,s)},p:w,i:w,o:w,d(t){t&&r(e)}}}function Q(t){let e,s,n,h,m,p,g;s=new j({props:{marginTop:"0",marginBottom:"0",fontSize:"26px",fontWeight:"700",letterSpacing:"0.8px",$$slots:{default:[R]},$$scope:{ctx:t}}});const $=[L,q],d=[];function v(t,e){return t[1]?0:1}return h=v(t),m=d[h]=$[h](t),{c(){e=a("div"),T(s.$$.fragment),n=E(),m.c(),p=y(),this.h()},l(t){e=i(t,"DIV",{class:!0});var a=o(e);N(s.$$.fragment,a),a.forEach(r),n=S(t),m.l(t),p=y(),this.h()},h(){l(e,"class","title svelte-1w3twm4")},m(t,a){c(t,e,a),D(s,e,null),c(t,n,a),d[h].m(t,a),c(t,p,a),g=!0},p(t,e){const n={};512&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n);let a=h;h=v(t),h===a?d[h].p(t,e):(I(),f(d[a],1,1,(()=>{d[a]=null})),V(),m=d[h],m?m.p(t,e):(m=d[h]=$[h](t),m.c()),u(m,1),m.m(p.parentNode,p))},i(t){g||(u(s.$$.fragment,t),u(m),g=!0)},o(t){f(s.$$.fragment,t),f(m),g=!1},d(t){t&&r(e),b(s),t&&r(n),d[h].d(t),t&&r(p)}}}function X(t){let e,s,n,h,m;return e=new G({}),h=new B({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){T(e.$$.fragment),s=E(),n=a("div"),T(h.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),s=S(t),n=i(t,"DIV",{class:!0});var a=o(n);N(h.$$.fragment,a),a.forEach(r),this.h()},h(){l(n,"class","container svelte-1w3twm4")},m(t,a){D(e,t,a),c(t,s,a),c(t,n,a),D(h,n,null),m=!0},p(t,[e]){const s={};515&e&&(s.$$scope={dirty:e,ctx:t}),h.$set(s)},i(t){m||(u(e.$$.fragment,t),u(h.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f(h.$$.fragment,t),m=!1},d(t){b(e,t),t&&r(s),t&&r(n),b(h)}}}async function Y(t){let e;try{e=await fetch(t.url,t.options),console.log(t.name,e)}catch{return{status:!1,name:t.name,description:t.description}}return e.ok?{status:!0,name:t.name}:{status:!1,name:t.name,description:t.description}}function Z(t,e,s){let n=!0;var a=new Headers;a.append("Content-Type","application/json");var i={method:"POST",headers:a,body:JSON.stringify({jsonrpc:"2.0",method:"web3_clientVersion",params:[],id:1}),redirect:"follow"},o=new Headers;o.append("Content-Type","application/html");var r={method:"GET",headers:o,redirect:"follow"};let l=[{id:"mainnet-node",name:"Mainnet Node",url:"https://path/to/mainnet/node",options:i},{id:"mainnet-explorer",name:"Mainnet Explorer",url:"https://path/to/mainnet/explorer",options:i},{id:"mainnet-meta-service",name:"Mainnet Meta Service",url:"https://path/to/mainnet/meta/service",options:i},{id:"testnet-node",name:"Testnet Node",url:"https://l2.testnet.nahmii.io",options:i},{id:"testnet-explorer",name:"Testnet Explorer",url:"https://explorer.testnet.nahmii.io",options:r},{id:"testnet-meta-service",name:"Testnet Meta Service",url:"https://meta.testnet.nahmii.io",options:r}],{statuses:c=[]}=e;return A((async()=>{await async function(t){for(let e of t)s(0,c=[...c,await Y(e)])}(l),s(1,n=!1)})),t.$$set=t=>{"statuses"in t&&s(0,c=t.statuses)},[c,n]}class tt extends t{constructor(t){super(),e(this,t,Z,X,s,{statuses:0})}}export{tt as default};
