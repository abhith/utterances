parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({44:[function(require,module,exports) {
"use strict";function e(e){for(var r,n=/\+/g,o=/([^&=]+)=?([^&]*)/g,t=function(e){return decodeURIComponent(e.replace(n," "))},p={};r=o.exec(e);)p[t(r[1])]=t(r[2]);return p}function r(e){var r=[];for(var n in e)e.hasOwnProperty(n)&&r.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return r.join("&")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.deparam=e,exports.param=r;
},{}],18:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./deparam"),e=document.currentScript;void 0===e&&(e=document.querySelector('script[src^="https://utteranc.es/client.js"],script[src^="http://localhost:4000/client.js"]'));for(var n={},r=0;r<e.attributes.length;r++){var i=e.attributes.item(r);n[i.name]=i.value}n.url=location.href,n.origin=location.origin,n.pathname=location.pathname.substr(1).replace(/\.\w+$/,""),n.title=document.title;var a=document.querySelector("meta[name='description']");n.description=a?a.content:"",document.head.insertAdjacentHTML("afterbegin","<style>\n    .utterances {\n      position: relative;\n      width: 100%;\n    }\n    .utterances-frame {\n      position: absolute;\n      left: 0;\n      right: 0;\n      width: 1px;\n      min-width: 100%;\n      max-width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  </style>");var s=e.src.match(/^https:\/\/utteranc.es|http:\/\/localhost:\d+/)[0],c=s+"/utterances.html";e.insertAdjacentHTML("afterend",'<div class="utterances">\n    <iframe class="utterances-frame" title="Comments" scrolling="no" src="'+c+"?"+t.param(n)+'"></iframe>\n  </div>');var o=e.nextElementSibling;e.parentElement.removeChild(e),addEventListener("message",function(t){if(t.origin===s){var e=t.data;e&&"resize"===e.type&&e.height&&(o.style.height=e.height+"px")}});
},{"./deparam":44}]},{},[18])
//# sourceMappingURL=/client.map