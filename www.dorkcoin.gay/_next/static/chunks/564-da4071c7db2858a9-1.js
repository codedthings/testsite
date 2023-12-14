(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{413:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return E}});let l=n(1024),d=n(8533),c=d._(n(2265)),f=l._(n(4887)),g=l._(n(5793)),h=n(7929),y=n(5751),b=n(7327);n(2637);let _=n(6304),w=l._(n(9950)),x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,r,n,l,d,c){let f=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===f)return;e["data-loaded-src"]=f;let g="decode"in e?e.decode():Promise.resolve();g.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==r&&d(!0),null==n?void 0:n.current){let r=new Event("load");Object.defineProperty(r,"target",{writable:!1,value:e});let l=!1,d=!1;n.current({...r,nativeEvent:r,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>d,persist:()=>{},preventDefault:()=>{l=!0,r.preventDefault()},stopPropagation:()=>{d=!0,r.stopPropagation()}})}(null==l?void 0:l.current)&&l.current(e)}})}function getDynamicProps(e){let[r,n]=c.version.split(".",2),l=parseInt(r,10),d=parseInt(n,10);return l>18||18===l&&d>=3?{fetchPriority:e}:{fetchpriority:e}}let S=(0,c.forwardRef)((e,r)=>{let{src:n,srcSet:l,sizes:d,height:f,width:g,decoding:h,className:y,style:b,fetchPriority:_,placeholder:w,loading:x,unoptimized:S,fill:E,onLoadRef:P,onLoadingCompleteRef:C,setBlurComplete:O,setShowAltText:k,onLoad:z,onError:A,...R}=e;return c.default.createElement("img",{...R,...getDynamicProps(_),loading:x,width:g,height:f,decoding:h,"data-nimg":E?"fill":"1",className:y,style:b,sizes:d,srcSet:l,src:n,ref:(0,c.useCallback)(e=>{r&&("function"==typeof r?r(e):"object"==typeof r&&(r.current=e)),e&&(A&&(e.src=e.src),e.complete&&handleLoading(e,w,P,C,O,S))},[n,w,P,C,O,A,S,r]),onLoad:e=>{let r=e.currentTarget;handleLoading(r,w,P,C,O,S)},onError:e=>{k(!0),"empty"!==w&&O(!0),A&&A(e)}})});function ImagePreload(e){let{isAppRouter:r,imgAttributes:n}=e,l={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...getDynamicProps(n.fetchPriority)};return r&&f.default.preload?(f.default.preload(n.src,l),null):c.default.createElement(g.default,null,c.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...l}))}let E=(0,c.forwardRef)((e,r)=>{let n=(0,c.useContext)(_.RouterContext),l=(0,c.useContext)(b.ImageConfigContext),d=(0,c.useMemo)(()=>{let e=x||l||y.imageConfigDefault,r=[...e.deviceSizes,...e.imageSizes].sort((e,r)=>e-r),n=e.deviceSizes.sort((e,r)=>e-r);return{...e,allSizes:r,deviceSizes:n}},[l]),{onLoad:f,onLoadingComplete:g}=e,E=(0,c.useRef)(f);(0,c.useEffect)(()=>{E.current=f},[f]);let P=(0,c.useRef)(g);(0,c.useEffect)(()=>{P.current=g},[g]);let[C,O]=(0,c.useState)(!1),[k,z]=(0,c.useState)(!1),{props:A,meta:R}=(0,h.getImgProps)(e,{defaultLoader:w.default,imgConf:d,blurComplete:C,showAltText:k});return c.default.createElement(c.default.Fragment,null,c.default.createElement(S,{...A,unoptimized:R.unoptimized,placeholder:R.placeholder,fill:R.fill,onLoadRef:E,onLoadingCompleteRef:P,setBlurComplete:O,setShowAltText:z,ref:r}),R.priority?c.default.createElement(ImagePreload,{isAppRouter:!n,imgAttributes:A}):null)});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},8569:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"AmpStateContext",{enumerable:!0,get:function(){return c}});let l=n(1024),d=l._(n(2265)),c=d.default.createContext({})},4472:function(e,r){"use strict";function isInAmpMode(e){let{ampFirst:r=!1,hybrid:n=!1,hasQuery:l=!1}=void 0===e?{}:e;return r||n&&l}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},7929:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),n(2637);let l=n(1511),d=n(5751);function isStaticRequire(e){return void 0!==e.default}function isStaticImageData(e){return void 0!==e.src}function isStaticImport(e){return"object"==typeof e&&(isStaticRequire(e)||isStaticImageData(e))}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getWidths(e,r,n){let{deviceSizes:l,allSizes:d}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,r=[];for(let l;l=e.exec(n);l)r.push(parseInt(l[2]));if(r.length){let e=.01*Math.min(...r);return{widths:d.filter(r=>r>=l[0]*e),kind:"w"}}return{widths:d,kind:"w"}}if("number"!=typeof r)return{widths:l,kind:"w"};let c=[...new Set([r,2*r].map(e=>d.find(r=>r>=e)||d[d.length-1]))];return{widths:c,kind:"x"}}function generateImgAttrs(e){let{config:r,src:n,unoptimized:l,width:d,quality:c,sizes:f,loader:g}=e;if(l)return{src:n,srcSet:void 0,sizes:void 0};let{widths:h,kind:y}=getWidths(r,d,f),b=h.length-1;return{sizes:f||"w"!==y?f:"100vw",srcSet:h.map((e,l)=>g({config:r,src:n,quality:c,width:e})+" "+("w"===y?e:l+1)+y).join(", "),src:g({config:r,src:n,quality:c,width:h[b]})}}function getImgProps(e,r){let n,c,f,{src:g,sizes:h,unoptimized:y=!1,priority:b=!1,loading:_,className:w,quality:x,width:S,height:E,fill:P=!1,style:C,onLoad:O,onLoadingComplete:k,placeholder:z="empty",blurDataURL:A,fetchPriority:R,layout:L,objectFit:N,objectPosition:U,lazyBoundary:F,lazyRoot:H,...B}=e,{imgConf:V,showAltText:Y,blurComplete:K,defaultLoader:Q}=r,X=V||d.imageConfigDefault;if("allSizes"in X)n=X;else{let e=[...X.deviceSizes,...X.imageSizes].sort((e,r)=>e-r),r=X.deviceSizes.sort((e,r)=>e-r);n={...X,allSizes:e,deviceSizes:r}}let et=B.loader||Q;delete B.loader,delete B.srcSet;let er="__next_img_default"in et;if(er){if("custom"===n.loader)throw Error('Image with src "'+g+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=et;et=r=>{let{config:n,...l}=r;return e(l)}}if(L){"fill"===L&&(P=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(C={...C,...e});let r={responsive:"100vw",fill:"100vw"}[L];r&&!h&&(h=r)}let en="",ei=getInt(S),eo=getInt(E);if(isStaticImport(g)){let e=isStaticRequire(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,f=e.blurHeight,A=A||e.blurDataURL,en=e.src,!P){if(ei||eo){if(ei&&!eo){let r=ei/e.width;eo=Math.round(e.height*r)}else if(!ei&&eo){let r=eo/e.height;ei=Math.round(e.width*r)}}else ei=e.width,eo=e.height}}let ea=!b&&("lazy"===_||void 0===_);(!(g="string"==typeof g?g:en)||g.startsWith("data:")||g.startsWith("blob:"))&&(y=!0,ea=!1),n.unoptimized&&(y=!0),er&&g.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(y=!0),b&&(R="high");let es=getInt(x),el=Object.assign(P?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:U}:{},Y?{}:{color:"transparent"},C),eu=K||"empty"===z?null:"blur"===z?'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:ei,heightInt:eo,blurWidth:c,blurHeight:f,blurDataURL:A||"",objectFit:el.objectFit})+'")':'url("'+z+'")',ed=eu?{backgroundSize:el.objectFit||"cover",backgroundPosition:el.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:eu}:{},ec=generateImgAttrs({config:n,src:g,unoptimized:y,width:ei,quality:es,sizes:h,loader:et}),ef={...B,loading:ea?"lazy":_,fetchPriority:R,width:ei,height:eo,decoding:"async",className:w,style:{...el,...ed},sizes:ec.sizes,srcSet:ec.srcSet,src:ec.src},ep={unoptimized:y,priority:b,placeholder:z,fill:P};return{props:ef,meta:ep}}},5793:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{defaultHead:function(){return defaultHead},default:function(){return _}});let l=n(1024),d=n(8533),c=d._(n(2265)),f=l._(n(110)),g=n(8569),h=n(1852),y=n(4472);function defaultHead(e){void 0===e&&(e=!1);let r=[c.default.createElement("meta",{charSet:"utf-8"})];return e||r.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),r}function onlyReactElement(e,r){return"string"==typeof r||"number"==typeof r?e:r.type===c.default.Fragment?e.concat(c.default.Children.toArray(r.props.children).reduce((e,r)=>"string"==typeof r||"number"==typeof r?e:e.concat(r),[])):e.concat(r)}n(2637);let b=["name","httpEquiv","charSet","itemProp"];function unique(){let e=new Set,r=new Set,n=new Set,l={};return d=>{let c=!0,f=!1;if(d.key&&"number"!=typeof d.key&&d.key.indexOf("$")>0){f=!0;let r=d.key.slice(d.key.indexOf("$")+1);e.has(r)?c=!1:e.add(r)}switch(d.type){case"title":case"base":r.has(d.type)?c=!1:r.add(d.type);break;case"meta":for(let e=0,r=b.length;e<r;e++){let r=b[e];if(d.props.hasOwnProperty(r)){if("charSet"===r)n.has(r)?c=!1:n.add(r);else{let e=d.props[r],n=l[r]||new Set;("name"!==r||!f)&&n.has(e)?c=!1:(n.add(e),l[r]=n)}}}}return c}}function reduceComponents(e,r){let{inAmpMode:n}=r;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(unique()).reverse().map((e,r)=>{let l=e.key||r;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(r=>e.props.href.startsWith(r))){let r={...e.props||{}};return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,c.default.cloneElement(e,r)}return c.default.cloneElement(e,{key:l})})}function Head(e){let{children:r}=e,n=(0,c.useContext)(g.AmpStateContext),l=(0,c.useContext)(h.HeadManagerContext);return c.default.createElement(f.default,{reduceComponentsToState:reduceComponents,headManager:l,inAmpMode:(0,y.isInAmpMode)(n)},r)}let _=Head;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},1511:function(e,r){"use strict";function getImageBlurSvg(e){let{widthInt:r,heightInt:n,blurWidth:l,blurHeight:d,blurDataURL:c,objectFit:f}=e,g=l?40*l:r,h=d?40*d:n,y=g&&h?"viewBox='0 0 "+g+" "+h+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+y+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(y?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+c+"'/%3E%3C/svg%3E"}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},7327:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return f}});let l=n(1024),d=l._(n(2265)),c=n(5751),f=d.default.createContext(c.imageConfigDefault)},5751:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return l}});let n=["default","imgix","cloudinary","akamai","custom"],l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},679:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return h}});let l=n(1024),d=n(7929),c=n(2637),f=n(413),g=l._(n(9950)),unstable_getImgProps=e=>{(0,c.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:r}=(0,d.getImgProps)(e,{defaultLoader:g.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(r))void 0===n&&delete r[e];return{props:r}},h=f.Image},9950:function(e,r){"use strict";function defaultLoader(e){let{config:r,src:n,width:l,quality:d}=e;return r.path+"?url="+encodeURIComponent(n)+"&w="+l+"&q="+(d||75)}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}}),defaultLoader.__next_img_default=!0;let n=defaultLoader},6304:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return c}});let l=n(1024),d=l._(n(2265)),c=d.default.createContext(null)},110:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return SideEffect}});let l=n(2265),d=l.useLayoutEffect,c=l.useEffect;function SideEffect(e){let{headManager:r,reduceComponentsToState:n}=e;function emitChange(){if(r&&r.mountedInstances){let d=l.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(n(d,e))}}return d(()=>{var n;return null==r||null==(n=r.mountedInstances)||n.add(e.children),()=>{var n;null==r||null==(n=r.mountedInstances)||n.delete(e.children)}}),d(()=>(r&&(r._pendingUpdate=emitChange),()=>{r&&(r._pendingUpdate=emitChange)})),c(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},2637:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,c={},y=null,b=null;for(l in void 0!==n&&(y=""+n),void 0!==r.key&&(y=""+r.key),void 0!==r.ref&&(b=r.ref),r)f.call(r,l)&&!h.hasOwnProperty(l)&&(c[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===c[l]&&(c[l]=r[l]);return{$$typeof:d,type:e,key:y,ref:b,props:c,_owner:g.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},6691:function(e,r,n){e.exports=n(679)},5925:function(e,r,n){"use strict";let l,d;n.r(r),n.d(r,{CheckmarkIcon:function(){return B},ErrorIcon:function(){return L},LoaderIcon:function(){return U},ToastBar:function(){return er},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return ei},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var c=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let f=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+f+";":l+="f"==c[1]?o(f,c):c+"{"+o(f,"k"==c[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=f&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,f):c+":"+f+";")}return n+(r&&d?r+"{"+d+"}":d)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let f=s(e),_=b[f]||(b[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!b[_]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(y," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(y," ").trim();return l[0]})(e);b[_]=o(d?{["@keyframes "+_]:r}:r,n?"":"."+_)}let w=n&&b.g?b.g:null;return n&&(b.g=b[_]),c=b[_],w?r.data=r.data.replace(w,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),_},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let _,w,x,S=u.bind({k:1});function m(e,r,n,l){o.p=r,_=e,w=n,x=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let f=Object.assign({},d),g=f.className||a.className;n.p=Object.assign({theme:w&&w()},f),n.o=/ *go\d+/.test(g),f.className=u.apply(n,l)+(g?" "+g:""),r&&(f.ref=c);let h=e;return e[0]&&(h=f.as||e,delete f.as),x&&h[0]&&x(f),_(h,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,E=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},P=new Map,$=e=>{if(P.has(e))return;let r=setTimeout(()=>{P.delete(e),dist_u({type:4,toastId:e})},1e3);P.set(e,r)},J=e=>{let r=P.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},C=[],O={toasts:[],pausedAt:void 0},dist_u=e=>{O=v(O,e),C.forEach(e=>{e(O)})},k={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,c.useState)(O);(0,c.useEffect)(()=>(C.push(n),()=>{let e=C.indexOf(n);e>-1&&C.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||k[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||E()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,c.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,c.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),d=(0,c.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},f=r.filter(r=>(r.position||c)===(e.position||c)&&r.height),g=f.findIndex(r=>r.id===e.id),h=f.filter((e,r)=>r<g&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[h+1]:[0,h]).reduce((e,r)=>e+(r.height||0)+d,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:d}}},z=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=S`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=S`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,N=S`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${N} 1s linear infinite;
`,F=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=S`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=j("div")`
  position: absolute;
`,Y=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=S`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?c.createElement(Q,null,r):r:"blank"===n?null:c.createElement(Y,null,c.createElement(U,{...l}),"loading"!==n&&c.createElement(V,null,"error"===n?c.createElement(L,{...l}):c.createElement(B,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,et=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${S(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${S(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},er=c.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},f=c.createElement(M,{toast:e}),g=c.createElement(et,{...e.ariaProps},T(e.message,e));return c.createElement(X,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:f,message:g}):c.createElement(c.Fragment,null,f,g))});m(c.createElement);var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:d})=>{let f=c.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return c.createElement("div",{ref:f,className:r,style:n},d)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},en=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:d,containerStyle:f,containerClassName:g})=>{let{toasts:h,handlers:y}=D(n);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:g,onMouseEnter:y.startPause,onMouseLeave:y.endPause},h.map(n=>{let f=n.position||r,g=Re(f,y.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return c.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:y.updateHeight,className:n.visible?en:"",style:g},"custom"===n.type?T(n.message,n):d?d(n):c.createElement(er,{toast:n,position:f}))}))},ei=dist_n}}]);