"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=n(function(x,i){
var s=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-expm1/dist');function a(e){var r;return s(e)||e<=0?NaN:(r=p(-e),v(-e)/(r*r))}i.exports=a
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
