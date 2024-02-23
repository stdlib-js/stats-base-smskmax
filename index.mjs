// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zerof@v0.1.1-esm/index.mjs";function n(r,n,i,s,f){var a,o,d,m,u;if(r<=0)return NaN;for(o=i<0?(1-r)*i:0,d=f<0?(1-r)*f:0,u=0;u<r&&0!==s[d];u++)o+=i,d+=f;if(u===r)return NaN;if(a=n[o],e(a))return a;for(u+=1;u<r;u++)if(o+=i,!s[d+=f]){if(m=n[o],e(m))return m;(m>a||m===a&&t(m))&&(a=m)}return a}function i(r,n,i,s,f,a,o){var d,m,u,l,p;if(r<=0)return NaN;for(m=s,u=o,p=0;p<r&&0!==f[u];p++)m+=i,u+=a;if(p===r)return NaN;if(d=n[m],e(d))return d;for(p+=1;p<r;p++)if(m+=i,!f[u+=a]){if(l=n[m],e(l))return l;(l>d||l===d&&t(l))&&(d=l)}return d}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
