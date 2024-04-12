"use strict";var q=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var l=q(function(F,p){
var c=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(i,n,t,m,o){var u,v,r,a,e;if(i<=0)return NaN;for(t<0?v=(1-i)*t:v=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&m[r]!==0;e++)v+=t,r+=o;if(e===i)return NaN;if(u=n[v],c(u))return u;for(e+=1,e;e<i;e++)if(v+=t,r+=o,!m[r]){if(a=n[v],c(a))return a;(a>u||a===u&&E(a))&&(u=a)}return u}p.exports=O
});var b=q(function(G,j){
var y=require('@stdlib/math-base-assert-is-nanf/dist'),g=require('@stdlib/math-base-assert-is-positive-zerof/dist');function h(i,n,t,m,o,u,v){var r,a,e,s,f;if(i<=0)return NaN;for(a=m,e=v,f=0;f<i&&o[e]!==0;f++)a+=t,e+=u;if(f===i)return NaN;if(r=n[a],y(r))return r;for(f+=1,f;f<i;f++)if(a+=t,e+=u,!o[e]){if(s=n[a],y(s))return s;(s>r||s===r&&g(s))&&(r=s)}return r}j.exports=h
});var Z=q(function(H,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=l(),w=b();k(P,"ndarray",w);R.exports=P
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=Z(),x,_=A(z(__dirname,"./native.js"));B(_)?x=C:x=_;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
