module.exports=function(r){var e={};function n(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return r[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)n.d(t,a,function(e){return r[e]}.bind(null,a));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=15)}([function(r,e){r.exports=require("react")},function(r,e,n){"use strict";var t,a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var r={};return function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[e]=n}return r[e]}}(),i=[];function c(r){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===r){e=n;break}return e}function l(r,e){for(var n={},t=[],a=0;a<r.length;a++){var o=r[a],l=e.base?o[0]+e.base:o[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=c(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:g(f,e),references:1}),t.push(u)}return t}function s(r){var e=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var a=n.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(e);else{var i=o(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(r,e){return u[r]=e,u.filter(Boolean).join("\n")});function f(r,e,n,t){var a=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=d(e,a);else{var o=document.createTextNode(a),i=r.childNodes;i[e]&&r.removeChild(i[e]),i.length?r.insertBefore(o,i[e]):r.appendChild(o)}}function h(r,e,n){var t=n.css,a=n.media,o=n.sourceMap;if(a?r.setAttribute("media",a):r.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p=null,m=0;function g(r,e){var n,t,a;if(e.singleton){var o=m++;n=p||(p=s(e)),t=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=s(e),t=h.bind(null,n,e),a=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return t(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;t(r=e)}else a()}}r.exports=function(r,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=l(r=r||[],e);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<n.length;t++){var a=c(n[t]);i[a].references--}for(var o=l(r,e),s=0;s<n.length;s++){var u=c(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=o}}}},function(r,e,n){"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n=function(r,e){var n=r[1]||"",t=r[3];if(!t)return n;if(e&&"function"==typeof btoa){var a=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,l;return[n].join("\n")}(e,r);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(r,n,t){"string"==typeof r&&(r=[[null,r,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<r.length;c++){var l=[].concat(r[c]);t&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(r,e,n){var t=n(1),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);r.exports=a.locals||{}},function(r,e,n){(e=n(2)(!1)).push([r.i,".shoto-container-avatar {\r\n  --avatar-size: 40px;\r\n  width: var(--avatar-size);\r\n  height: var(--avatar-size);\r\n  border-radius: 50%;\r\n  background-color: #757575;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.shoto-container-avatar .shoto-avatar-child {\r\n  width: calc(var(--avatar-size) - 15px);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: calc(var(--avatar-size) - 15px);\r\n}\r\n\r\n.shoto-container-avatar .shoto-avatar {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.shoto-avatar-fallback {\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n",""]),r.exports=e},function(r,e,n){var t=n(1),a=n(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);r.exports=a.locals||{}},function(r,e,n){(e=n(2)(!1)).push([r.i,".shoto-container-alert {\r\n  --bgColor-alert-error-dark: rgb(24, 6, 5);\r\n  --color-alert-error-dark: rgb(250, 179, 174);\r\n\r\n  --bgColor-alert-warning-dark: rgb(25, 15, 0);\r\n  --color-alert-warning-dark: rgb(255, 213, 153);\r\n\r\n  --bgColor-alert-info-dark: rgb(3, 14, 24);\r\n  --color-alert-info-dark: rgb(166, 213, 250);\r\n\r\n  --bgColor-alert-success-dark: rgb(7, 17, 7);\r\n  --color-alert-success-dark: rgb(183, 223, 185);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.8rem 1rem;\r\n}\r\n\r\n.shoto-container-alert .icon-container {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.shoto-container-alert .icon-container.icon-close {\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  padding: 3px;\r\n}\r\n\r\n.shoto-container-alert .icon-container.icon-close:hover {\r\n  background-color: rgba(248, 248, 248, 0.1);\r\n}\r\n\r\n.shoto-container-alert .container-left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.shoto-container-alert .alert-child {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.shoto-container-alert.error.dark {\r\n  background-color: var(--bgColor-alert-error-dark);\r\n  color: var(--color-alert-error-dark);\r\n}\r\n\r\n.shoto-container-alert.warning.dark {\r\n  background-color: var(--bgColor-alert-warning-dark);\r\n  color: var(--color-alert-warning-dark);\r\n}\r\n\r\n.shoto-container-alert.info.dark {\r\n  background-color: var(--bgColor-alert-info-dark);\r\n  color: var(--color-alert-info-dark);\r\n}\r\n\r\n.shoto-container-alert.success.dark {\r\n  background-color: var(--bgColor-alert-success-dark);\r\n  color: var(--color-alert-success-dark);\r\n}\r\n\r\n/* TODO: Define light themes */\r\n",""]),r.exports=e},function(r,e,n){var t=n(1),a=n(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);r.exports=a.locals||{}},function(r,e,n){(e=n(2)(!1)).push([r.i,".shoto-container-badge {\r\n  position: relative;\r\n  display: inline-block;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.shoto-container-badge .shoto-badge {\r\n  position: absolute;\r\n  top: -12px;\r\n  right: -15px;\r\n  font-size: 0.75rem;\r\n  padding: 0.2rem 0.4rem;\r\n  border-radius: 2rem;\r\n}\r\n",""]),r.exports=e},function(r,e,n){var t=n(1),a=n(10);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);r.exports=a.locals||{}},function(r,e,n){(e=n(2)(!1)).push([r.i,".shoto-tag {\r\n  display: inline-block;\r\n  border: 1px solid white;\r\n  border-radius: 0.5rem;\r\n  padding: 0.2rem 0.5rem;\r\n  font-size: 0.8em;\r\n}\r\n",""]),r.exports=e},function(r,e,n){var t=n(1),a=n(12);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);r.exports=a.locals||{}},function(r,e,n){(e=n(2)(!1)).push([r.i,"/* Hero card */\r\n.shoto-card-hero {\r\n  --border-radius-card: 1rem;\r\n  border-radius: var(--border-radius-card);\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n  font-size: 1rem;\r\n}\r\n\r\n.shoto-card-hero .overlay {\r\n  border-bottom-right-radius: var(--border-radius-card);\r\n  border-top-right-radius: var(--border-radius-card);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 45%;\r\n  justify-content: space-between;\r\n  color: white;\r\n  backdrop-filter: blur(3px);\r\n  height: 100%;\r\n  padding: 1rem 1rem 1rem 0.6rem;\r\n}\r\n\r\n.shoto-card-hero .heading {\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.shoto-card-hero .description {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.shoto-card-hero .container-tags {\r\n  margin-top: 0.6rem;\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.shoto-card-hero .btn-action {\r\n  margin-top: 1rem;\r\n  background-color: white;\r\n  color: black;\r\n  width: max-content;\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Showcase Card */\r\n.shoto-card-showcase {\r\n  max-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  gap: 1rem;\r\n  padding: 0 0 10px 0;\r\n  background-color: white;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n\r\n  position: relative;\r\n}\r\n\r\n.shoto-card-showcase img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.shoto-card-showcase .container-rating {\r\n  font-size: 1.2rem;\r\n  padding-left: 5px;\r\n  padding-top: 4px;\r\n}\r\n\r\n.shoto-card-showcase .top-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.shoto-card-showcase .heading {\r\n  padding-left: 5px;\r\n  max-width: 90%;\r\n}\r\n\r\n.shoto-card-showcase .container-heart {\r\n  color: rgb(224, 36, 94);\r\n  cursor: pointer;\r\n  font-size: 1.4rem;\r\n  padding: 5px 7px 0px 7px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.shoto-card-showcase .container-heart:hover {\r\n  background-color: rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.shoto-card-showcase .subtext {\r\n  padding-left: 5px;\r\n}\r\n\r\n.shoto-card-showcase .badge {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 0;\r\n  font-size: 0.8rem;\r\n  background-color: black;\r\n  color: white;\r\n  padding: 0.2rem 0.4rem 0.3rem 0.4rem;\r\n  border-top-left-radius: 1rem;\r\n  border-bottom-left-radius: 1rem;\r\n}\r\n\r\n.shoto-card-showcase .container-tags {\r\n  display: flex;\r\n  margin-left: 5px;\r\n  margin-top: 5px;\r\n  gap: 5px;\r\n}\r\n\r\n.shoto-card-showcase .container-btn-action {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.shoto-card-showcase .container-btn-action button {\r\n  width: 60%;\r\n  border-radius: 1rem;\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem 1rem;\r\n  background-color: rgb(255, 216, 20);\r\n  cursor: pointer;\r\n  color: #0f1111;\r\n  font-size: 0.9rem;\r\n}\r\n.shoto-card-showcase .container-btn-action button:hover {\r\n  background-color: rgb(247, 202, 0);\r\n}\r\n",""]),r.exports=e},function(r,e,n){var t=n(1),a=n(14);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);r.exports=a.locals||{}},function(r,e,n){(e=n(2)(!1)).push([r.i,".shoto-snackbar-container {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n",""]),r.exports=e},function(r,e,n){"use strict";n.r(e),n.d(e,"Avatar",(function(){return c})),n.d(e,"Alert",(function(){return y})),n.d(e,"Badge",(function(){return x})),n.d(e,"Card",(function(){return M})),n.d(e,"Tag",(function(){return w})),n.d(e,"StarRating",(function(){return z})),n.d(e,"Snackbar",(function(){return A})),n.d(e,"ShotoThemeProvider",(function(){return L}));var t=n(0),a=n.n(t);n(3);function o(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],t=!0,a=!1,o=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);t=!0);}catch(r){a=!0,o=r}finally{try{t||null==c.return||c.return()}finally{if(a)throw o}}return n}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return i(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}var c=function(r){var e=r.children,n=r.alt,i=r.src,c=r.bgColor,l=r.height,s=r.width,u=o(Object(t.useState)(!1),2),d=u[0],f=u[1],h={};return c&&(h.backgroundColor="".concat(c)),l&&(h.height="".concat(l)),s&&(h.width="".concat(s)),a.a.createElement("div",{className:"shoto-container-avatar",style:0!==Object.keys(h).length?h:{}},e?a.a.createElement("div",{className:"shoto-avatar-child"},e):d?a.a.createElement("div",{className:"shoto-avatar-fallback",style:l?{fontSize:"calc(".concat(l," - 40px)")}:{fontSize:"calc(var(--avatar-size) - 15px)"}},n?n.toUpperCase().slice(0,1):"Z"):a.a.createElement("img",{src:i,alt:n,className:"shoto-avatar",onError:function(){return f(!0)}}))},l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.a.createContext&&a.a.createContext(l),u=function(){return(u=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}).apply(this,arguments)},d=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(n[t[a]]=r[t[a]])}return n};function f(r){return function(e){return a.a.createElement(h,u({attr:u({},r.attr)},e),function r(e){return e&&e.map((function(e,n){return a.a.createElement(e.tag,u({key:n},e.attr),r(e.child))}))}(r.child))}}function h(r){var e=function(e){var n,t=r.attr,o=r.size,i=r.title,c=d(r,["attr","size","title"]),l=o||e.size||"1em";return e.className&&(n=e.className),r.className&&(n=(n?n+" ":"")+r.className),a.a.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,t,c,{className:n,style:u(u({color:r.color||e.color},e.style),r.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&a.a.createElement("title",null,i),r.children)};return void 0!==s?a.a.createElement(s.Consumer,null,(function(r){return e(r)})):e(l)}function p(r){return f({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z",clipRule:"evenodd"}}]})(r)}function m(r){return f({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}}]})(r)}function g(r){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(r)}function v(r){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"}}]})(r)}function b(r){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(r)}n(5);var y=function(r){var e=r.children,n=r.severity,t=r.onClose;return a.a.createElement("div",{className:"shoto-container-alert ".concat(n," dark")},a.a.createElement("div",{className:"container-left"},a.a.createElement("div",{className:"icon-container"},"error"===n?a.a.createElement(v,null):"warning"===n?a.a.createElement(g,null):"info"===n?a.a.createElement(b,null):a.a.createElement(p,null)),a.a.createElement("div",{className:"alert-child"},e)),t&&a.a.createElement("div",{className:"icon-container icon-close",onClick:function(){return t()}},a.a.createElement(m,null)))},x=(n(7),function(r){var e=r.children,n=r.badgeContent,t=r.bgColor,o=r.color;return a.a.createElement("div",{className:"shoto-container-badge"},a.a.createElement("span",{className:"shoto-badge",style:{backgroundColor:t,color:o,right:n.toString().length>3?"-25px":"-15px"}},n.toString().length>3?n.toString().slice(0,3)+"+":n),a.a.createElement("div",{className:"shoto-badge-child"},e))}),w=(n(9),function(r){var e=r.children,n=r.color,t=r.borderColor,o={};return n&&(o.color="".concat(n)),t&&(o.borderColor="".concat(t)),a.a.createElement("div",{className:"shoto-tag",style:o},e)});function k(r){return f({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(r)}function E(r){return f({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(r)}n(11);function C(r){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-3.492 1.836 0.667-3.888-2.825-2.753 3.904-0.567 1.746-3.537 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"}}]})(r)}function j(r){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-0.015 0.008 0.015-8.918 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"}}]})(r)}function S(r){return f({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"}}]})(r)}function N(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],t=!0,a=!1,o=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);t=!0);}catch(r){a=!0,o=r}finally{try{t||null==c.return||c.return()}finally{if(a)throw o}}return n}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return O(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}var z=function(r){var e=r.rating,n=r.color;return a.a.createElement("div",{className:"shoto-rating-container",style:{color:n}},function(){for(var r=N("".concat(parseFloat(e)).split("."),2),n=r[0],t=r[1],o=[],i=0;i<n;i++)o.push("full");if(t){o.push("half");for(var c=0;c<5-n-1;c++)o.push("empty")}else for(var l=0;l<5-n;l++)o.push("empty");return a.a.createElement(a.a.Fragment,null,o.map((function(r,e){return"half"===r?a.a.createElement(j,{key:"half".concat(e,"rating")}):"full"===r?a.a.createElement(S,{key:"full".concat(e,"rating")}):a.a.createElement(C,{key:"empty".concat(e,"rating")})})))}())},M=function(r){var e=r.type,n=r.heading,t=r.subtext,o=r.description,i=r.tags,c=r.actionBtnText,l=r.performAction,s=r.bgImage,u=r.badge,d=r.isLiked,f=r.onClickLike,h=r.rating,p=r.colorRating,m=r.colorTag;return"hero"===e?a.a.createElement("div",{className:"shoto-card-hero",style:s?{backgroundImage:"url(".concat(s,")")}:{}},a.a.createElement("div",{className:"overlay"},n&&a.a.createElement("div",{className:"heading"},n),t&&a.a.createElement("div",{className:"subtext"},t),o&&a.a.createElement("div",{className:"description"},o),void 0!==i&&0!==i.length&&a.a.createElement("div",{className:"container-tags"},i.map((function(r){return a.a.createElement(w,{key:"tag-".concat(r),color:"white",borderColor:"white"},r)}))),c&&a.a.createElement("span",{className:"btn-action",onClick:function(){return l()}},c))):a.a.createElement("div",{className:"shoto-card-showcase"},a.a.createElement("div",null,a.a.createElement("img",{src:s,className:"img-product",alt:"product"}),a.a.createElement("div",{className:"top-row"},a.a.createElement("div",{className:"container-rating"},a.a.createElement(z,{rating:h,color:"".concat(p||"#FDCC0D")})),a.a.createElement("div",{className:"container-heart",onClick:function(){return f()}},d?a.a.createElement(k,null):a.a.createElement(E,null))),a.a.createElement("div",{className:"heading"},n)),a.a.createElement("div",null,a.a.createElement("div",{className:"subtext"},t),void 0!==i&&0!==i.length&&a.a.createElement("div",{className:"container-tags"},i.map((function(r){return a.a.createElement(w,{key:"tag-".concat(r),color:"".concat(m||"#000"),borderColor:"".concat(m||"#000")},r)})))),c&&a.a.createElement("div",{className:"container-btn-action"},a.a.createElement("button",{onClick:function(){return l()}},c)),u&&a.a.createElement("span",{className:"badge"},u))},A=(n(13),function(r){var e=r.children,n=r.autoHideDuration,o=r.onClose,i=r.open;return Object(t.useEffect)((function(){var r=null;return n&&(r=setTimeout((function(){return o()}),n)),function(){r&&clearTimeout(r)}})),i?a.a.createElement("div",{className:"shoto-snackbar-container"},e):a.a.createElement(a.a.Fragment,null)});function T(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var n=[],t=!0,a=!1,o=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);t=!0);}catch(r){a=!0,o=r}finally{try{t||null==c.return||c.return()}finally{if(a)throw o}}return n}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return _(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}var I=Object(t.createContext)(),L=function(r){var e=r.children,n=T(Object(t.useState)("dark"),2),o=n[0],i=n[1];return a.a.createElement(I.Provider,{value:{theme:o,changeTheme:function(r){return i(r)}}},e)}}]);