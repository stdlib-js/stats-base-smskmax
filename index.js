// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r,e="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,u=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&f&&f.call(t,r,e.set),t};var c=r;function y(t){return t!=t}var p,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,_=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";p=b&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,o,a;if(null==t)return d.call(t);e=t[s],a=s,r=null!=(o=t)&&_.call(o,a);try{t[s]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[s]=e:delete t[s],n}:function(t){return d.call(t)};var v,m=p,w="function"==typeof Float32Array,j=Number.POSITIVE_INFINITY,A="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0;v=function(){var t,r,e;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,5e40]),e=r,t=(w&&e instanceof Float32Array||"[object Float32Array]"===m(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===j}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")};var h,S=v,N="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var t,r,e;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,4294967296,4294967297]),e=r,t=(N&&e instanceof Uint32Array||"[object Uint32Array]"===m(e))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var T=h,P=new S(1);new T(P.buffer)[0]=2139095040;var U=P[0];function E(t){return 0===t&&1/t===U}function x(t,r,e,n,o){var a,i,f,u,l;if(t<=0)return NaN;for(i=e<0?(1-t)*e:0,f=o<0?(1-t)*o:0,l=0;l<t&&0!==n[f];l++)i+=e,f+=o;if(l===t)return NaN;if(y(a=r[i]))return a;for(l+=1;l<t;l++)if(i+=e,!n[f+=o]){if(y(u=r[i]))return u;(u>a||u===a&&E(u))&&(a=u)}return a}function I(t,r,e,n,o,a,i){var f,u,l,c,p;if(t<=0)return NaN;for(u=n,l=i,p=0;p<t&&0!==o[l];p++)u+=e,l+=a;if(p===t)return NaN;if(y(f=r[u]))return f;for(p+=1;p<t;p++)if(u+=e,!o[l+=a]){if(y(c=r[u]))return c;(c>f||c===f&&E(c))&&(f=c)}return f}c(x,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:I}),t.default=x,t.ndarray=I,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).smskmax={});
//# sourceMappingURL=index.js.map
