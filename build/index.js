module.exports=function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=21)}([function(r,n){r.exports=require("react")},function(r,n,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function c(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function l(r,n){for(var e={},t=[],o=0;o<r.length;o++){var a=r[o],l=n.base?a[0]+n.base:a[0],s=e[l]||0,u="".concat(l," ").concat(s);e[l]=s+1;var d=c(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:g(p,n),references:1}),t.push(u)}return t}function s(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var i=a(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,d=(u=[],function(r,n){return u[r]=n,u.filter(Boolean).join("\n")});function p(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=r.childNodes;i[n]&&r.removeChild(i[n]),i.length?r.insertBefore(a,i[n]):r.appendChild(a)}}function f(r,n,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var h=null,m=0;function g(r,n){var e,t,o;if(n.singleton){var a=m++;e=h||(h=s(n)),t=p.bind(null,e,a,!1),o=p.bind(null,e,a,!0)}else e=s(n),t=f.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=l(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=c(e[t]);i[o].references--}for(var a=l(r,n),s=0;s<e.length;s++){var u=c(e[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}e=a}}}},function(r,n,e){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e=r[1]||"",t=r[3];if(!t)return e;if(n&&"function"==typeof btoa){var o=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[e].concat(a).concat([o]).join("\n")}var i,c,l;return[e].join("\n")}(n,r);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<r.length;c++){var l=[].concat(r[c]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},function(r,n,e){var t=e(1),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,".shoto-container-avatar {\r\n  --avatar-size: 40px;\r\n  width: var(--avatar-size);\r\n  height: var(--avatar-size);\r\n  border-radius: 50%;\r\n  background-color: #757575;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.shoto-container-avatar .shoto-avatar-child {\r\n  width: calc(var(--avatar-size) - 15px);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: calc(var(--avatar-size) - 15px);\r\n}\r\n\r\n.shoto-container-avatar .shoto-avatar {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.shoto-avatar-fallback {\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n",""]),r.exports=n},function(r,n,e){var t=e(1),o=e(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,".shoto-container-alert {\r\n  --bgColor-alert-error-dark: rgb(24, 6, 5);\r\n  --color-alert-error-dark: rgb(250, 179, 174);\r\n\r\n  --bgColor-alert-warning-dark: rgb(25, 15, 0);\r\n  --color-alert-warning-dark: rgb(255, 213, 153);\r\n\r\n  --bgColor-alert-info-dark: rgb(3, 14, 24);\r\n  --color-alert-info-dark: rgb(166, 213, 250);\r\n\r\n  --bgColor-alert-success-dark: rgb(7, 17, 7);\r\n  --color-alert-success-dark: rgb(183, 223, 185);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.8rem 1rem;\r\n}\r\n\r\n.shoto-container-alert .icon-container {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.shoto-container-alert .icon-container.icon-close {\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  padding: 5px;\r\n}\r\n\r\n.shoto-container-alert .icon-container.icon-close:hover {\r\n  background-color: rgba(255, 255, 255, 0.08);\r\n}\r\n\r\n.shoto-container-alert .container-left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.shoto-container-alert .alert-child {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.shoto-container-alert.error.dark {\r\n  background-color: var(--bgColor-alert-error-dark);\r\n  color: var(--color-alert-error-dark);\r\n}\r\n\r\n.shoto-container-alert.warning.dark {\r\n  background-color: var(--bgColor-alert-warning-dark);\r\n  color: var(--color-alert-warning-dark);\r\n}\r\n\r\n.shoto-container-alert.info.dark {\r\n  background-color: var(--bgColor-alert-info-dark);\r\n  color: var(--color-alert-info-dark);\r\n}\r\n\r\n.shoto-container-alert.success.dark {\r\n  background-color: var(--bgColor-alert-success-dark);\r\n  color: var(--color-alert-success-dark);\r\n}\r\n\r\n/* TODO: Define light themes */\r\n",""]),r.exports=n},function(r,n,e){var t=e(1),o=e(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,".shoto-container-badge {\r\n  position: relative;\r\n  display: inline-block;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.shoto-container-badge .shoto-badge {\r\n  position: absolute;\r\n  top: -12px;\r\n  right: -15px;\r\n  font-size: 0.75rem;\r\n  padding: 0.2rem 0.4rem;\r\n  border-radius: 2rem;\r\n}\r\n",""]),r.exports=n},function(r,n,e){var t=e(1),o=e(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,".shoto-button {\r\n  font-family: inherit;\r\n  color: #fff;\r\n  padding: 5px 15px;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.15)) top/100% 800%;\r\n  background-color: #db2777;\r\n  transition: 0.3s;\r\n}\r\n\r\n.shoto-button span {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.shoto-button:hover {\r\n  background-position: bottom;\r\n}\r\n",""]),r.exports=n},function(r,n,e){var t=e(1),o=e(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,".shoto-tag {\r\n  display: inline-block;\r\n  border: 1px solid white;\r\n  border-radius: 0.5rem;\r\n  padding: 0.2rem 0.5rem;\r\n  font-size: 0.8em;\r\n}\r\n",""]),r.exports=n},function(r,n,e){var t=e(1),o=e(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,"/* Hero card */\r\n.shoto-card-hero {\r\n  --border-radius-card: 1rem;\r\n  border-radius: var(--border-radius-card);\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n  font-size: 1rem;\r\n}\r\n\r\n.shoto-card-hero .overlay {\r\n  border-bottom-right-radius: var(--border-radius-card);\r\n  border-top-right-radius: var(--border-radius-card);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  width: 45%;\r\n  justify-content: space-between;\r\n  color: white;\r\n  backdrop-filter: blur(3px);\r\n  height: 100%;\r\n  padding: 1rem 1rem 1rem 0.6rem;\r\n}\r\n\r\n.shoto-card-hero .heading {\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.shoto-card-hero .description {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.shoto-card-hero .container-tags {\r\n  margin-top: 0.6rem;\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.shoto-card-hero .btn-action {\r\n  margin-top: 1rem;\r\n  background-color: white;\r\n  color: black;\r\n  width: max-content;\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Showcase Card */\r\n.shoto-card-showcase {\r\n  max-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 0 0 10px 0;\r\n  background-color: white;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n\r\n  position: relative;\r\n}\r\n\r\n.shoto-card-showcase img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.shoto-card-showcase .container-rating {\r\n  font-size: 1.2rem;\r\n  padding-left: 5px;\r\n  padding-top: 4px;\r\n}\r\n\r\n.shoto-card-showcase .top-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.shoto-card-showcase .heading {\r\n  padding-left: 5px;\r\n  max-width: 90%;\r\n}\r\n\r\n.shoto-card-showcase .container-heart {\r\n  color: rgb(224, 36, 94);\r\n  cursor: pointer;\r\n  font-size: 1.4rem;\r\n  padding: 5px 7px 0px 7px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.shoto-card-showcase .container-heart:hover {\r\n  background-color: rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.shoto-card-showcase .subtext {\r\n  padding-left: 5px;\r\n}\r\n\r\n.shoto-card-showcase .badge {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 0;\r\n  font-size: 0.8rem;\r\n  background-color: black;\r\n  color: white;\r\n  padding: 0.2rem 0.4rem 0.3rem 0.4rem;\r\n  border-top-left-radius: 1rem;\r\n  border-bottom-left-radius: 1rem;\r\n}\r\n\r\n.shoto-card-showcase .container-tags {\r\n  display: flex;\r\n  margin-left: 5px;\r\n  margin-top: 5px;\r\n  gap: 5px;\r\n}\r\n\r\n.shoto-card-showcase .container-btn-action {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.shoto-card-showcase .container-btn-action button {\r\n  width: 60%;\r\n  border-radius: 1rem;\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem 1rem;\r\n  background-color: rgb(255, 216, 20);\r\n  cursor: pointer;\r\n  color: #0f1111;\r\n  font-size: 0.9rem;\r\n}\r\n.shoto-card-showcase .container-btn-action button:hover {\r\n  background-color: rgb(247, 202, 0);\r\n}\r\n",""]),r.exports=n},function(r,n,e){var t=e(1),o=e(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,'.shoto-input-wrapper {\r\n  position: relative;\r\n  height: 50px;\r\n  overflow: hidden;\r\n  font-size: inherit;\r\n\r\n  --shoto-input-active-color: #5fa8d3;\r\n  --shoto-input-resting-color: #6e767d;\r\n  --shoto-input-text-color: black;\r\n\r\n  background: transparent;\r\n  width: 100%;\r\n}\r\n\r\n.shoto-input-wrapper input {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: var(--shoto-input-text-color);\r\n  border: none;\r\n  outline: none;\r\n  padding: 20px 0 0 0.3rem;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n  background: transparent;\r\n}\r\n\r\n.shoto-input-wrapper label {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 0%;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 4px;\r\n\r\n  pointer-events: none;\r\n  border: 1px solid var(--shoto-input-resting-color);\r\n}\r\n\r\n.shoto-input-wrapper label:after {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0px;\r\n  bottom: -1px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.shoto-input-wrapper input:focus + label {\r\n  border: 1px solid var(--shoto-input-active-color);\r\n}\r\n\r\n.shoto-input-wrapper .content-name {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 0px;\r\n  transition: all 0.2s ease;\r\n  padding: 0 0 0.2rem 0.2rem;\r\n  color: var(--shoto-input-resting-color);\r\n}\r\n\r\n.shoto-input-wrapper input:focus + .label-name .content-name,\r\n.shoto-input-wrapper input:valid + .label-name .content-name {\r\n  transform: translateY(-1.2rem);\r\n  font-size: 14px;\r\n}\r\n\r\n.shoto-input-wrapper input:focus + .label-name .content-name {\r\n  color: var(--shoto-input-active-color);\r\n}\r\n\r\n.shoto-input-wrapper input:focus + .label-name:after,\r\n.shoto-input-wrapper input:valid + .label-name:after {\r\n  transform: translateX(0%);\r\n}\r\n',""]),r.exports=n},function(r,n,e){var t=e(1),o=e(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,".shoto-snackbar-container {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n",""]),r.exports=n},function(r,n,e){var t=e(1),o=e(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);r.exports=o.locals||{}},function(r,n,e){(n=e(2)(!1)).push([r.i,".container-cardCustom {\r\n  max-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 0 10px 0;\r\n  background-color: white;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.container-cardCustom img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.container-cardCustom .container-cardContent {\r\n  padding: 0 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n",""]),r.exports=n},function(r,n,e){"use strict";e.r(n),e.d(n,"Avatar",(function(){return c})),e.d(n,"Alert",(function(){return y})),e.d(n,"Badge",(function(){return x})),e.d(n,"Button",(function(){return w})),e.d(n,"Card",(function(){return A})),e.d(n,"Input",(function(){return T})),e.d(n,"Tag",(function(){return k})),e.d(n,"StarRating",(function(){return M})),e.d(n,"Snackbar",(function(){return I})),e.d(n,"CardCustom",(function(){return P})),e.d(n,"CardImage",(function(){return R})),e.d(n,"CardContent",(function(){return B})),e.d(n,"CardActions",(function(){return L})),e.d(n,"ShotoThemeProvider",(function(){return H}));var t=e(0),o=e.n(t);e(3);function a(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var e=[],t=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);t=!0);}catch(r){o=!0,a=r}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return e}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return i(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}var c=function(r){var n=r.children,e=r.alt,i=r.src,c=r.bgColor,l=r.height,s=r.width,u=a(Object(t.useState)(!1),2),d=u[0],p=u[1],f={};return c&&(f.backgroundColor="".concat(c)),l&&(f.height="".concat(l)),s&&(f.width="".concat(s)),o.a.createElement("div",{className:"shoto-container-avatar",style:0!==Object.keys(f).length?f:{}},n?o.a.createElement("div",{className:"shoto-avatar-child"},n):d?o.a.createElement("div",{className:"shoto-avatar-fallback",style:l?{fontSize:"calc(".concat(l," - 40px)")}:{fontSize:"calc(var(--avatar-size) - 15px)"}},e?e.toUpperCase().slice(0,1):"Z"):o.a.createElement("img",{src:i,alt:e,className:"shoto-avatar",onError:function(){return p(!0)}}))},l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=o.a.createContext&&o.a.createContext(l),u=function(){return(u=Object.assign||function(r){for(var n,e=1,t=arguments.length;e<t;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r}).apply(this,arguments)},d=function(r,n){var e={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(e[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(r);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(e[t[o]]=r[t[o]])}return e};function p(r){return function(n){return o.a.createElement(f,u({attr:u({},r.attr)},n),function r(n){return n&&n.map((function(n,e){return o.a.createElement(n.tag,u({key:e},n.attr),r(n.child))}))}(r.child))}}function f(r){var n=function(n){var e,t=r.attr,a=r.size,i=r.title,c=d(r,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(e=n.className),r.className&&(e=(e?e+" ":"")+r.className),o.a.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,t,c,{className:e,style:u(u({color:r.color||n.color},n.style),r.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),r.children)};return void 0!==s?o.a.createElement(s.Consumer,null,(function(r){return n(r)})):n(l)}function h(r){return p({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z",clipRule:"evenodd"}}]})(r)}function m(r){return p({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"}}]})(r)}function g(r){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(r)}function v(r){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"}}]})(r)}function b(r){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(r)}e(5);var y=function(r){var n=r.children,e=r.severity,t=r.onClose;return o.a.createElement("div",{className:"shoto-container-alert ".concat(e," dark")},o.a.createElement("div",{className:"container-left"},o.a.createElement("div",{className:"icon-container"},"error"===e?o.a.createElement(v,null):"warning"===e?o.a.createElement(g,null):"info"===e?o.a.createElement(b,null):o.a.createElement(h,null)),o.a.createElement("div",{className:"alert-child"},n)),t&&o.a.createElement("div",{className:"icon-container icon-close",onClick:function(){return t()}},o.a.createElement(m,null)))},x=(e(7),function(r){var n=r.children,e=r.badgeContent,t=r.bgColor,a=r.color;return o.a.createElement("div",{className:"shoto-container-badge"},o.a.createElement("span",{className:"shoto-badge",style:{backgroundColor:t,color:a,right:e.toString().length>3?"-25px":"-15px"}},e.toString().length>3?e.toString().slice(0,3)+"+":e),o.a.createElement("div",{className:"shoto-badge-child"},n))}),w=(e(9),function(r){var n=r.size,e=r.bgColor,t=r.textColor,a=r.rounded,i=r.elevated,c=r.children,l=r.type,s=r.onClick;return o.a.createElement("button",{style:function(){var r={};if(n)switch(n){case"small":r.fontSize="0.8125rem",r.padding="4px 10px";break;case"medium":r.fontSize="0.875rem",r.padding="5px 15px";break;case"large":r.fontSize="0.9375rem",r.padding="8px 22px";break;default:r.fontSize="0.875rem",r.padding="5px 15px"}return e&&(r.backgroundColor=e),t&&(r.color=t),a&&(r.borderRadius="9999px"),i&&(r.boxShadow="0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"),l&&"icon"===l&&(r.padding="1rem",r.fontSize="1.3rem",r.borderRadius="50%"),r}(),className:"shoto-button",onClick:function(){return s()}},o.a.createElement("span",null,c))}),k=(e(11),function(r){var n=r.children,e=r.color,t=r.borderColor,a={};return e&&(a.color="".concat(e)),t&&(a.borderColor="".concat(t)),o.a.createElement("div",{className:"shoto-tag",style:a},n)});function C(r){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(r)}function E(r){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(r)}e(13);function j(r){return p({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-3.492 1.836 0.667-3.888-2.825-2.753 3.904-0.567 1.746-3.537 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"}}]})(r)}function S(r){return p({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-0.015 0.008 0.015-8.918 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"}}]})(r)}function N(r){return p({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"}}]})(r)}function O(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var e=[],t=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);t=!0);}catch(r){o=!0,a=r}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return e}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return z(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return z(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}var M=function(r){var n=r.rating,e=r.color;return o.a.createElement("div",{className:"shoto-rating-container",style:{color:e}},function(){for(var r=O("".concat(parseFloat(n)).split("."),2),e=r[0],t=r[1],a=[],i=0;i<e;i++)a.push("full");if(t){a.push("half");for(var c=0;c<5-e-1;c++)a.push("empty")}else for(var l=0;l<5-e;l++)a.push("empty");return o.a.createElement(o.a.Fragment,null,a.map((function(r,n){return"half"===r?o.a.createElement(S,{key:"half".concat(n,"rating")}):"full"===r?o.a.createElement(N,{key:"full".concat(n,"rating")}):o.a.createElement(j,{key:"empty".concat(n,"rating")})})))}())},A=function(r){var n=r.type,e=r.heading,t=r.subtext,a=r.description,i=r.tags,c=r.actionBtnText,l=r.performAction,s=r.bgImage,u=r.badge,d=r.isLiked,p=r.onClickLike,f=r.rating,h=r.colorRating,m=r.colorTag;return"hero"===n?o.a.createElement("div",{className:"shoto-card-hero",style:s?{backgroundImage:"url(".concat(s,")")}:{}},o.a.createElement("div",{className:"overlay"},e&&o.a.createElement("div",{className:"heading"},e),t&&o.a.createElement("div",{className:"subtext"},t),a&&o.a.createElement("div",{className:"description"},a),void 0!==i&&0!==i.length&&o.a.createElement("div",{className:"container-tags"},i.map((function(r){return o.a.createElement(k,{key:"tag-".concat(r),color:"white",borderColor:"white"},r)}))),c&&o.a.createElement("span",{className:"btn-action",onClick:function(){return l()}},c))):o.a.createElement("div",{className:"shoto-card-showcase"},o.a.createElement("div",null,o.a.createElement("img",{src:s,className:"img-product",alt:"product"}),o.a.createElement("div",{className:"top-row"},o.a.createElement("div",{className:"container-rating"},o.a.createElement(M,{rating:f,color:"".concat(h||"#FDCC0D")})),o.a.createElement("div",{className:"container-heart",onClick:function(){return p()}},d?o.a.createElement(C,null):o.a.createElement(E,null))),o.a.createElement("div",{className:"heading"},e)),o.a.createElement("div",null,o.a.createElement("div",{className:"subtext"},t),void 0!==i&&0!==i.length&&o.a.createElement("div",{className:"container-tags"},i.map((function(r){return o.a.createElement(k,{key:"tag-".concat(r),color:"".concat(m||"#000"),borderColor:"".concat(m||"#000")},r)})))),c&&o.a.createElement("div",{className:"container-btn-action"},o.a.createElement("button",{onClick:function(){return l()}},c)),u&&o.a.createElement("span",{className:"badge"},u))};e(15);function _(r,n){if(null==r)return{};var e,t,o=function(r,n){if(null==r)return{};var e,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||(o[e]=r[e]);return o}(r,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}var T=function(r){var n=r.label,e=r.activeColor,a=r.textColor,i=r.restingColor,c=_(r,["label","activeColor","textColor","restingColor"]),l=Object(t.createRef)();return Object(t.useEffect)((function(){e&&l.current.style.setProperty("--shoto-input-active-color",e),a&&l.current.style.setProperty("--shoto-input-text-color",a),i&&l.current.style.setProperty("--shoto-input-resting-color",i)}),[e,a,i,l]),o.a.createElement("div",{className:"shoto-input-wrapper",ref:l},o.a.createElement("input",c),o.a.createElement("label",{className:"label-name"},o.a.createElement("span",{className:"content-name"},n)))},I=(e(17),function(r){var n=r.children,e=r.autoHideDuration,a=r.onClose,i=r.open;return Object(t.useEffect)((function(){var r=null;return e&&(r=setTimeout((function(){return a()}),e)),function(){r&&clearTimeout(r)}})),i?o.a.createElement("div",{className:"shoto-snackbar-container"},n):o.a.createElement(o.a.Fragment,null)}),R=(e(19),function(r){var n=r.image,e=r.title;return o.a.createElement("img",{src:n,alt:e})}),B=function(r){var n=r.children;return o.a.createElement("div",{className:"container-cardContent"},n)},L=function(r){var n=r.children;return o.a.createElement("div",{className:"container-cardActions"},n)},P=function(r){var n=r.children;return o.a.createElement("div",{className:"container-cardCustom"},n)};function U(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var e=[],t=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);t=!0);}catch(r){o=!0,a=r}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return e}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return D(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}var F=Object(t.createContext)(),H=function(r){var n=r.children,e=U(Object(t.useState)("dark"),2),a=e[0],i=e[1];return o.a.createElement(F.Provider,{value:{theme:a,changeTheme:function(r){return i(r)}}},n)}}]);