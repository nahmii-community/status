import{S as t,i as s,s as e,e as a,t as n,k as r,l,c as o,a as i,g as c,d as h,n as u,b as m,f as p,H as d,h as f,I as v,J as g,K as $,j as w,m as E,o as x,u as _,w as y,x as N,v as S,A as D,r as T}from"../chunks/vendor-3c7d616a.js";function H(t,s,e){const a=t.slice();return a[1]=s[e].status,a[2]=s[e].name,a[4]=e,a}function M(t){let s,e;return{c(){s=a("span"),e=n("Down!"),this.h()},l(t){s=o(t,"SPAN",{class:!0});var a=i(s);e=c(a,"Down!"),a.forEach(h),this.h()},h(){m(s,"class","bad_status svelte-3v90ut")},m(t,a){p(t,s,a),d(s,e)},d(t){t&&h(s)}}}function b(t){let s,e;return{c(){s=a("span"),e=n("Up!"),this.h()},l(t){s=o(t,"SPAN",{class:!0});var a=i(s);e=c(a,"Up!"),a.forEach(h),this.h()},h(){m(s,"class","good_status svelte-3v90ut")},m(t,a){p(t,s,a),d(s,e)},d(t){t&&h(s)}}}function I(t){let s;return{c(){s=a("hr"),this.h()},l(t){s=o(t,"HR",{class:!0}),this.h()},h(){m(s,"class","status_line_seperator svelte-3v90ut")},m(t,e){p(t,s,e)},d(t){t&&h(s)}}}function A(t){let s,e,v,g,$,w,E,x=t[2]+"";function _(t,s){return t[1]?b:M}let y=_(t),N=y(t),S=t[4]<t[0].length-1&&I();return{c(){s=a("div"),e=a("p"),v=n(x),g=n(":"),$=r(),N.c(),w=r(),S&&S.c(),E=l(),this.h()},l(t){s=o(t,"DIV",{class:!0});var a=i(s);e=o(a,"P",{class:!0});var n=i(e);v=c(n,x),g=c(n,":"),n.forEach(h),$=u(a),N.l(a),a.forEach(h),w=u(t),S&&S.l(t),E=l(),this.h()},h(){m(e,"class","service_name svelte-3v90ut"),m(s,"class","status_line svelte-3v90ut")},m(t,a){p(t,s,a),d(s,e),d(e,v),d(e,g),d(s,$),N.m(s,null),p(t,w,a),S&&S.m(t,a),p(t,E,a)},p(t,e){1&e&&x!==(x=t[2]+"")&&f(v,x),y!==(y=_(t))&&(N.d(1),N=y(t),N&&(N.c(),N.m(s,null))),t[4]<t[0].length-1?S||(S=I(),S.c(),S.m(E.parentNode,E)):S&&(S.d(1),S=null)},d(t){t&&h(s),N.d(),t&&h(w),S&&S.d(t),t&&h(E)}}}function P(t){let s,e=t[0],a=[];for(let n=0;n<e.length;n+=1)a[n]=A(H(t,e,n));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();s=l()},l(t){for(let s=0;s<a.length;s+=1)a[s].l(t);s=l()},m(t,e){for(let s=0;s<a.length;s+=1)a[s].m(t,e);p(t,s,e)},p(t,[n]){if(1&n){let r;for(e=t[0],r=0;r<e.length;r+=1){const l=H(t,e,r);a[r]?a[r].p(l,n):(a[r]=A(l),a[r].c(),a[r].m(s.parentNode,s))}for(;r<a.length;r+=1)a[r].d(1);a.length=e.length}},i:v,o:v,d(t){g(a,t),t&&h(s)}}}function V(t,s,e){let{stats:a}=s;return t.$$set=t=>{"stats"in t&&e(0,a=t.stats)},t.$$.update=()=>{1&t.$$.dirty&&console.log(`stats: ${a}`)},[a]}class j extends t{constructor(t){super(),s(this,t,V,P,e,{stats:0})}}function k(t){let s,e,n,r,l;return{c(){s=a("header"),e=a("div"),n=a("a"),r=a("img"),this.h()},l(t){s=o(t,"HEADER",{class:!0});var a=i(s);e=o(a,"DIV",{class:!0});var l=i(e);n=o(l,"A",{href:!0,class:!0});var c=i(n);r=o(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(h),l.forEach(h),a.forEach(h),this.h()},h(){$(r.src,l="/_app/assets/nahmii-logo-colour-negative-100px-h-79350300.png")||m(r,"src","/_app/assets/nahmii-logo-colour-negative-100px-h-79350300.png"),m(r,"alt","Nahmii"),m(r,"class","svelte-1d64pfo"),m(n,"href","https://nahmii.io"),m(n,"class","svelte-1d64pfo"),m(e,"class","corner svelte-1d64pfo"),m(s,"class","svelte-1d64pfo")},m(t,a){p(t,s,a),d(s,e),d(e,n),d(n,r)},p:v,i:v,o:v,d(t){t&&h(s)}}}class O extends t{constructor(t){super(),s(this,t,null,k,e,{})}}function C(t){let s,e;return s=new j({props:{stats:t[0]}}),{c(){w(s.$$.fragment)},l(t){E(s.$$.fragment,t)},m(t,a){x(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.stats=t[0]),s.$set(a)},i(t){e||(N(s.$$.fragment,t),e=!0)},o(t){_(s.$$.fragment,t),e=!1},d(t){S(s,t)}}}function G(t){let s,e;return{c(){s=a("p"),e=n("...waiting"),this.h()},l(t){s=o(t,"P",{class:!0});var a=i(s);e=c(a,"...waiting"),a.forEach(h),this.h()},h(){m(s,"class","waiting svelte-1nm3swo")},m(t,a){p(t,s,a),d(s,e)},p:v,i:v,o:v,d(t){t&&h(s)}}}function J(t){let s,e,l,f,v,g,$,D,H,M,b,I;l=new O({});const A=[G,C],P=[];function V(t,s){return t[1]?0:1}return M=V(t),b=P[M]=A[M](t),{c(){s=a("html"),e=a("body"),w(l.$$.fragment),f=r(),v=a("div"),g=a("div"),$=a("h1"),D=n("Nahmii Status"),H=r(),b.c(),this.h()},l(t){s=o(t,"HTML",{class:!0});var a=i(s);e=o(a,"BODY",{});var n=i(e);E(l.$$.fragment,n),f=u(n),v=o(n,"DIV",{class:!0});var r=i(v);g=o(r,"DIV",{class:!0});var m=i(g);$=o(m,"H1",{class:!0});var p=i($);D=c(p,"Nahmii Status"),p.forEach(h),H=u(m),b.l(m),m.forEach(h),r.forEach(h),n.forEach(h),a.forEach(h),this.h()},h(){m($,"class","status_title svelte-1nm3swo"),m(g,"class","status_card_frame svelte-1nm3swo"),m(v,"class","status_card svelte-1nm3swo"),m(s,"class","nahmii-scaling-ethereum-background svelte-1nm3swo")},m(t,a){p(t,s,a),d(s,e),x(l,e,null),d(e,f),d(e,v),d(v,g),d(g,$),d($,D),d(g,H),P[M].m(g,null),I=!0},p(t,[s]){let e=M;M=V(t),M===e?P[M].p(t,s):(T(),_(P[e],1,1,(()=>{P[e]=null})),y(),b=P[M],b?b.p(t,s):(b=P[M]=A[M](t),b.c()),N(b,1),b.m(g,null))},i(t){I||(N(l.$$.fragment,t),N(b),I=!0)},o(t){_(l.$$.fragment,t),_(b),I=!1},d(t){t&&h(s),S(l),P[M].d()}}}async function R(t){let s;try{s=await fetch(t.url,t.options),console.log(t.name,s)}catch{return{status:!1,name:t.name}}return s.ok?{status:!0,name:t.name}:{status:!1,name:t.name}}function U(t,s,e){let a=!0;var n=new Headers;n.append("Content-Type","application/json");var r={method:"POST",headers:n,body:JSON.stringify({jsonrpc:"2.0",method:"web3_clientVersion",params:[],id:1}),redirect:"follow"},l=new Headers;l.append("Content-Type","application/html");var o={method:"GET",headers:l,redirect:"follow"};let i=[{id:"mainnet-node",name:"Mainnet Node",url:"https://path/to/mainnet/node",options:r},{id:"mainnet-explorer",name:"Mainnet Explorer",url:"https://path/to/mainnet/explorer",options:r},{id:"mainnet-meta-service",name:"Mainnet Meta Service",url:"https://path/to/mainnet/meta/service",options:r},{id:"testnet-node",name:"Testnet Node",url:"https://l2.testnet.nahmii.io",options:r},{id:"testnet-explorer",name:"Testnet Explorer",url:"https://explorer.testnet.nahmii.io",options:o},{id:"testnet-meta-service",name:"Testnet Meta Service",url:"https://meta.testnet.nahmii.io",options:o}],{statuses:c=[]}=s;return D((async()=>{await async function(t){for(let s of t)e(0,c=[...c,await R(s)])}(i),console.log(c),e(1,a=!1)})),t.$$set=t=>{"statuses"in t&&e(0,c=t.statuses)},[c,a]}class B extends t{constructor(t){super(),s(this,t,U,J,e,{statuses:0})}}export{B as default};
