import{S as r,i as s,s as a,e as t,t as e,c as n,a as c,g as o,d as u,f,H as l,h as d,k as m,l as p,n as i,I as h}from"./chunks/vendor-0b5ddf32.js";function E(r){let s,a,m=r[1].frame+"";return{c(){s=t("pre"),a=e(m)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].frame+"")&&d(a,m)},d(r){r&&u(s)}}}function k(r){let s,a,m=r[1].stack+"";return{c(){s=t("pre"),a=e(m)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,m),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&m!==(m=r[1].stack+"")&&d(a,m)},d(r){r&&u(s)}}}function v(r){let s,a,v,g,P,R,x,H,N=r[1].message+"",$=r[1].frame&&E(r),b=r[1].stack&&k(r);return{c(){s=t("h1"),a=e(r[0]),v=m(),g=t("pre"),P=e(N),R=m(),$&&$.c(),x=m(),b&&b.c(),H=p()},l(t){s=n(t,"H1",{});var e=c(s);a=o(e,r[0]),e.forEach(u),v=i(t),g=n(t,"PRE",{});var f=c(g);P=o(f,N),f.forEach(u),R=i(t),$&&$.l(t),x=i(t),b&&b.l(t),H=p()},m(r,t){f(r,s,t),l(s,a),f(r,v,t),f(r,g,t),l(g,P),f(r,R,t),$&&$.m(r,t),f(r,x,t),b&&b.m(r,t),f(r,H,t)},p(r,[s]){1&s&&d(a,r[0]),2&s&&N!==(N=r[1].message+"")&&d(P,N),r[1].frame?$?$.p(r,s):($=E(r),$.c(),$.m(x.parentNode,x)):$&&($.d(1),$=null),r[1].stack?b?b.p(r,s):(b=k(r),b.c(),b.m(H.parentNode,H)):b&&(b.d(1),b=null)},i:h,o:h,d(r){r&&u(s),r&&u(v),r&&u(g),r&&u(R),$&&$.d(r),r&&u(x),b&&b.d(r),r&&u(H)}}}function g({error:r,status:s}){return{props:{error:r,status:s}}}function P(r,s,a){let{status:t}=s,{error:e}=s;return r.$$set=r=>{"status"in r&&a(0,t=r.status),"error"in r&&a(1,e=r.error)},[t,e]}class R extends r{constructor(r){super(),s(this,r,P,v,a,{status:0,error:1})}}export{R as default,g as load};
