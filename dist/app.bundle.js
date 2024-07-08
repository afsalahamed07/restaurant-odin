(()=>{var n={144:(n,e,t)=>{var r={"./background.jpg":653,"./hamburger.webp":913,"./pasta.webp":581,"./pizza.webp":244,"./salad.webp":371,"./sushi.webp":800,"./taco.webp":243};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=144},916:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),d=t.n(s),c=new URL(t(525),t.b),l=a()(o()),p=d()(c);l.push([n.id,`/*\n! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font-family by default.\n2. Use the user's configured \`mono\` font-feature-settings by default.\n3. Use the user's configured \`mono\` font-variation-settings by default.\n4. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: CMU, ui-monospace, SFMono-Regular; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n    @font-face {\n        font-family: "CMU";\n        src: url(${p}) format("ttf");\n        font-weight: 400;\n        font-style: normal;\n    }\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.m-auto {\n  margin: auto;\n}\n.flex {\n  display: flex;\n}\n.h-40 {\n  height: 10rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.flex-none {\n  flex: none;\n}\n.grow {\n  flex-grow: 1;\n}\n.basis-40 {\n  flex-basis: 10rem;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.resize {\n  resize: both;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-5 {\n  gap: 1.25rem;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.text-pretty {\n  text-wrap: pretty;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(254, 226, 226, 1);\n  background-color: rgba(254, 226, 226, var(--tw-bg-opacity));\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.font-mono {\n  font-family: CMU, ui-monospace, SFMono-Regular;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.font-black {\n  font-weight: 900;\n}\n.font-bold {\n  font-weight: 700;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, 1);\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, 1);\n  color: rgba(220, 38, 38, var(--tw-text-opacity));\n}\n.text-rose-400 {\n  --tw-text-opacity: 1;\n  color: rgba(251, 113, 133, 1);\n  color: rgba(251, 113, 133, var(--tw-text-opacity));\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n\nbody {\n    /* background: url('../assets/images/background.jpg'); */\n}\n\n.hover\\:bg-red-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(248, 113, 113, 1);\n  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(220, 38, 38, 1);\n  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n`,""]);const u=l},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},525:(n,e,t)=>{"use strict";n.exports=t.p+"f177765f6aa471bd6994.ttf"},653:(n,e,t)=>{"use strict";n.exports=t.p+"48243d63fa277e74f022.jpg"},913:(n,e,t)=>{"use strict";n.exports=t.p+"f5cadc4ab2bfd9ca2e85.webp"},581:(n,e,t)=>{"use strict";n.exports=t.p+"716f5312d2846d55f2b8.webp"},244:(n,e,t)=>{"use strict";n.exports=t.p+"4f33fcf8609cd721614a.webp"},371:(n,e,t)=>{"use strict";n.exports=t.p+"08a33f4429930e2ddd5a.webp"},800:(n,e,t)=>{"use strict";n.exports=t.p+"0634386bdcbf23f83f02.webp"},243:(n,e,t)=>{"use strict";n.exports=t.p+"725339d67af6ec887dc2.webp"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),s=t(56),d=t.n(s),c=t(540),l=t.n(c),p=t(113),u=t.n(p),m=t(916),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals;const g=JSON.parse('{"M":[{"title":"Hamburger","description":"A delicious burger. Comes with fries. We recommend adding cheese. Nutritional information: 350 calories.","price":5.99,"currency":"USD","image":"hamburger.webp"},{"title":"Pizza","description":"A delicious pizza. We recommend adding pepperoni. Nutritional information: 800 calories.","price":7.99,"currency":"USD","image":"pizza.webp"},{"title":"Pasta","description":"A delicious pasta. We recommend adding cheese. Nutritional information: 600 calories.","price":6.99,"currency":"USD","image":"pasta.webp"},{"title":"Salad","description":"A delicious salad. We recommend adding croutons. Nutritional information: 150 calories.","price":4.99,"currency":"USD","image":"salad.webp"},{"title":"Sushi","description":"A delicious sushi. We recommend adding soy sauce. Nutritional information: 200 calories.","price":9.99,"currency":"USD","image":"sushi.webp"},{"title":"Taco","description":"A delicious taco. We recommend adding guacamole. Nutritional information: 400 calories.","price":3.99,"currency":"USD","image":"taco.webp"}]}');function f(n,e,t,r){const o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");o.appendChild(i),o.appendChild(a);const s=document.createElement("h1"),d=document.createElement("p"),c=document.createElement("p"),l=document.createElement("img");return i.appendChild(l),a.appendChild(s),a.appendChild(d),a.appendChild(c),s.textContent=n,d.textContent=e,c.textContent=t,l.src=r,o.classList.add("flex","flex-row","p-4","shadow-md","rounded-md","gap-4"),a.classList.add("flex","flex-col","gap-3","px-4"),i.classList.add("basis-40","flex-none"),l.classList.add("h-40","rounded-md","overflow-hidden","m-auto"),s.classList.add("text-2xl","font-bold","text-rose-400","tracking-wide"),d.classList.add("grow","text-pretty","text-lg"),{getDomElement:()=>o}}function b(n,e,t){const r=document.createElement("div"),o=document.createElement("button");return r.appendChild(o),r.addEventListener("click",(()=>{t.replaceChild(e.getDomElement(),t.firstChild)})),o.textContent=n,o.classList.add("nav-element","bg-red-100","hover:bg-red-600","hover:text-white","font-bold","py-2","px-4","rounded","tracking-wider"),{getDomElement:()=>r}}let w=document.querySelector("body");w.classList.add("container","mx:auto","m-auto","p-4","flex","flex-col","h-screen","font-mono");let x=document.createElement("div"),y=function(){const n=document.createElement("div");n.id="home",n.classList.add("p-4","m-auto");const e=document.createElement("h1");e.classList.add("text-5xl","font-black","p-2","tracking-wide","text-rose-400"),e.textContent="Welcome, Fellow Foodie!";const t=document.createElement("p");return t.classList.add("text-2xl","p-2","text-gray-600"),t.textContent="We serve food, Please the Odin",n.appendChild(e),n.appendChild(t),{getDomElement:()=>n}}(),v=function(){const n=document.createElement("div");n.id="about",n.classList.add("p-4","m-auto");const e=document.createElement("h1");e.classList.add("text-5xl","font-black","p-2","tracking-wide","text-rose-400"),e.textContent="Bit About Odin";const t=document.createElement("p");return t.classList.add("text-2xl","p-2","text-gray-600"),t.textContent="This is about Page",n.appendChild(e),n.appendChild(t),{getDomElement:()=>n}}(),k=function(){const n=document.createElement("div");n.id="menu",n.classList.add("p-4","flex","flex-col","grow");const e=document.createElement("div");e.classList.add("flex","flex-col","gap-5","justify-center","grow"),n.appendChild(e);let r=i();const o=function(n,e,t){const r=document.createElement("div");let o=1;function i(){a.disabled=1===o,s.disabled=o===Math.ceil(n/e)}r.classList.add("flex","flex-row","justify-center","gap-4","p-3");const a=document.createElement("button"),s=document.createElement("button"),d=document.createElement("p"),c=["hover:bg-red-400","hover:text-white","font-black","py-2","px-4","rounded-md","text-red-600","cursor-pointer"];return a.classList.add(...c),s.classList.add(...c),d.classList.add("p-2","font-bold","text-lg"),a.textContent="<",s.textContent=">",d.textContent="1",r.appendChild(a),r.appendChild(d),r.appendChild(s),s.addEventListener("click",(()=>{d.textContent=++o,t(),i()})),a.addEventListener("click",(()=>{d.textContent=--o,t(),i()})),{getDomElement:()=>r,setPage:n=>{o=n,d.textContent=n},updatePagination:i,getCurrentPage:()=>o,setItemsPerPage:n=>{e=n}}}(g.M.length,r,a);function i(){const n=window.innerHeight-100;return Math.floor(n/250)}function a(){e.innerHTML="";const n=(o.getCurrentPage()-1)*r,i=n+r,a=g.M.slice(n,i);for(const n of a){const r=t(144)(`./${n.image}`),o=f(n.title,n.description,"$"+n.price,r);e.appendChild(o.getDomElement())}}return n.appendChild(o.getDomElement()),window.addEventListener("resize",(()=>{r=i(),o.setPage(1),o.setItemsPerPage(r),o.updatePagination(),a()})),a(),o.updatePagination(),{getDomElement:()=>n}}(),C=function(n,e,t){let r=document.createElement("nav");return r.classList.add("flex","items-center","justify-center","p-4","gap-4"),r.appendChild(n.getDomElement()),r.appendChild(e.getDomElement()),r.appendChild(t.getDomElement()),{getDomElement:()=>r}}(b("Home",y,x),b("Menu",k,x),b("About",v,x));w.appendChild(C.getDomElement()),x.id="content",x.classList.add("p-4","flex","flex-col","grow"),w.appendChild(x),x.appendChild(y.getDomElement())})()})();