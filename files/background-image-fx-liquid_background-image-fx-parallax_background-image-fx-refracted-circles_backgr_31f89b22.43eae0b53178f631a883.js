(window.wpJsonpTemplateSections=window.wpJsonpTemplateSections||[]).push([[0],{288:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return h}));r(18),r(28),r(29),r(42),r(11),r(43),r(19),r(91),r(35),r(69),r(125),r(126),r(20),r(8),r(36),r(30),r(26),r(89),r(12),r(27),r(9);var n=r(2);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=function(e){if(!e)return 1;if(!e.dataset.imageDimensions)return 1;var t=e.dataset.imageDimensions.split("x");return t[0]&&t[1]?+t[0]/+t[1]:void 0},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;if(e<=t)return e;var r=window.innerWidth;return r<=n.g.sm?Math.max(t,Math.round(.25*e)):r<=n.g.md?Math.max(t,Math.round(.5*e)):r<=n.g.lg?Math.max(t,Math.round(.75*e)):e},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=window.innerWidth,r=Math.max(1,e);return t<=n.g.sm?e>1?2:1:t<=n.g.md?Math.ceil(.5*r):t<=n.g.lg?Math.ceil(.75*r):r},u=function(e){var t={width:0,height:0};if(!e)return t;if(!e.dataset.imageDimensions)return t;var r=i(e.dataset.imageDimensions.split("x"),2),n=r[0],o=r[1];return n&&o?{width:+n,height:+o}:t},h=function(e){var t={x:.5,y:.5};if(!e)return t;if(!e.dataset.imageFocalPoint)return t;var r=i(e.dataset.imageFocalPoint.split(","),2),n=r[0],o=r[1];return n&&o?{x:+n,y:+o}:t}},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return Ce}));r(18),r(28),r(29),r(42),r(11),r(19),r(133),r(125),r(126),r(51),r(20),r(8),r(52),r(30),r(26),r(12),r(27);var n=r(88),i=(r(53),r(193),r(32),r(136),r(539)),o=r(945),a=r(946),s=r(972),c=r(947),u=r(989);var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=void 0===t?0:t,n=e.height,i=void 0===n?0:n,o=document.createElement("canvas");return o.width=r,o.height=i,o},l=!(!self.OffscreenCanvas||!self.OffscreenCanvas.prototype.transferToImageBitmap);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=void 0===t?0:t,n=e.height,i=void 0===n?0:n;return l?new OffscreenCanvas(r,i):h({width:r,height:i})},d=(r(538),r(943)),p=r(944),v=r(988);function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(t){var r,n,i,o=t.renderer,a=t.instance,s=t.disposeMethod;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=0,(n="usageCount")in(r=this)?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,this.renderer=o,this.instance=a,this.disposeMethod=s}var t,r,n;return t=e,(r=[{key:"dispose",value:function(){this.disposeMethod(this.renderer,this.instance)}}])&&y(t.prototype,r),n&&y(t,n),e}();function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t){var r,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="resources",i=new Map,n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,this.renderer=t}var t,r,n;return t=e,(r=[{key:"getResource",value:function(e){var t=e.key,r=e.factory,n=e.disposeMethod,i=this.resources.get(t);return i||(i=new g({renderer:this.renderer,instance:r(),disposeMethod:n}),this.resources.set(t,i)),i.usageCount++,i.instance}},{key:"getTexture",value:function(e){var t=e.key,r=e.factory;return this.getResource({key:t,factory:r,disposeMethod:d.a})}},{key:"getProgram",value:function(e){var t=e.key,r=e.factory;return this.getResource({key:t,factory:r,disposeMethod:p.a})}},{key:"getGeometry",value:function(e){var t=e.key,r=e.factory;return this.getResource({key:t,factory:r,disposeMethod:v.a})}},{key:"releaseResource",value:function(e){var t=this.resources.get(e);t&&0==--t.usageCount&&(t.dispose(),this.resources.delete(e))}},{key:"destroy",value:function(){this.resources.clear(),this.renderer=null}}])&&b(t.prototype,r),n&&b(t,n),e}();function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.canvas,n=e.clearColor,s=e.isActive,c=e.isDirty;if(t||s&&c){var u=r.contextWidth,h=r.contextHeight,l=r.isBitmapRenderer;Object(i.a)(this.renderer,0,0,u,h),Object(o.a)(this.renderer.state,n),Object(a.a)(this.renderer),l?this.renderBitmap(e):this.renderImage(e),e.isDirty=!1}}function P(e,t){var r=e.isActive,n=e.isDirty;(t||r&&n)&&e.render()}var x=function(){function e(t){var r=t.attributes,n=t.plugins;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"rendererWidth",0),j(this,"rendererHeight",0),j(this,"isWebGLSupported",!0),j(this,"content",[]),this.webglCanvas=f();try{this.renderer=new s.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({canvas:this.webglCanvas,plugins:n},r)),this.renderContent=k.bind(this),this.resourceCache=new m(this.renderer)}catch(e){this.isWebGLSupported=!1,this.renderer=null,this.renderContent=P.bind(this)}}var t,r,n;return t=e,(r=[{key:"register",value:function(e){this.content.push(e)}},{key:"unregister",value:function(e){var t=this.content.indexOf(e);-1!==t&&this.content.splice(t,1)}},{key:"update",value:function(e){var t=this;return this.content.forEach((function(r){if(!r.isActive)return t;r.update(e),r.autoUpdate&&(r.isDirty=!0)})),this}},{key:"render",value:function(){for(var e=0,t=this.content.length;e<t;e++)this.renderContent(this.content[e]);return this}},{key:"renderBitmap",value:function(e){var t=e.canvas,r=t.contextWidth,n=t.contextHeight,i=t.context;r===this.rendererWidth&&n===this.rendererHeight||this.resize(r,n),e.render();var o=this.webglCanvas.transferToImageBitmap();i.transferFromImageBitmap(o)}},{key:"renderImage",value:function(e){var t=e.canvas,r=t.contextWidth,n=t.contextHeight,i=t.context;if(r>this.rendererWidth||n>this.rendererHeight){var o=Math.max(r,this.rendererWidth),a=Math.max(n,this.rendererHeight);this.resize(o,a)}e.render(),i.clearRect(0,0,r,n),i.drawImage(this.webglCanvas,0,this.webglCanvas.height-n,r,n,0,0,r,n)}},{key:"resize",value:function(e,t){this.rendererWidth=e,this.rendererHeight=t,Object(c.a)(this.renderer,this.rendererWidth,this.rendererHeight)}},{key:"destroy",value:function(){this.renderer&&(Object(u.a)(this.renderer),this.resourceCache.destroy())}},{key:"isEmpty",value:function(){return 0===this.content.length}}])&&w(t.prototype,r),n&&w(t,n),e}();function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.canvas,n=e.clearColor,i=e.isActive,s=e.isDirty;if(t||i&&s){var c=r.contextWidth,u=r.contextHeight;this.resize(c,u),Object(o.a)(this.renderer.state,n),Object(a.a)(this.renderer),e.render(),e.isDirty=!1}}function E(e,t){var r=e.isActive,n=e.isDirty;(t||r&&n)&&e.render()}var I=function(){function e(t){var r=t.content,n=t.canvas,i=t.attributes,o=t.plugins;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),R(this,"isWebGLSupported",!0),R(this,"rendererWidth",0),R(this,"rendererHeight",0),this.content=r;try{this.renderer=new s.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({canvas:n.$el,plugins:o},i)),this.renderContent=D.bind(this),this.resourceCache=new m(this.renderer)}catch(e){this.isWebGLSupported=!1,this.renderer=null,this.renderContent=E.bind(this)}}var t,r,n;return t=e,(r=[{key:"update",value:function(e){return this.content.isActive?(this.content.update(e),this.content.autoUpdate&&(this.content.isDirty=!0),this):this}},{key:"render",value:function(){return this.renderContent(this.content),this}},{key:"resize",value:function(e,t){this.rendererWidth=e,this.rendererHeight=t,Object(c.a)(this.renderer,this.rendererWidth,this.rendererHeight)}},{key:"destroy",value:function(){this.renderer&&(Object(u.a)(this.renderer),this.resourceCache.destroy())}}])&&S(t.prototype,r),n&&S(t,n),e}();function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,"ticking",!1),M(this,"raf",-1),M(this,"tick",(function(e){r.raf=requestAnimationFrame(r.tick),r.callback(e)})),this.callback=t}var t,r,n;return t=e,(r=[{key:"start",value:function(){this.ticking||(this.raf=requestAnimationFrame(this.tick),this.ticking=!0)}},{key:"stop",value:function(){this.ticking&&(cancelAnimationFrame(this.raf),this.ticking=!1)}}])&&W(t.prototype,r),n&&W(t,n),e}();function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.node,n=t.width,i=t.height,o=t.pixelRatio,a=void 0===o?1:o,s=t.contextType,c=void 0===s?"":s;A(this,e),z(this,"width",0),z(this,"height",0),z(this,"isBitmapRenderer",!1),this.node=r,this.canvas=h(),this.pixelRatio=a,c&&this.getContext(c),this.node&&(this.node.appendChild(this.canvas),Object.assign(this.canvas.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"})),this.resize(n,i)}var t,r,n;return t=e,(r=[{key:"getContext",value:function(e){if("bitmaprenderer"===e){if(this.context=this.canvas.getContext("bitmaprenderer"),this.context)return void(this.isBitmapRenderer=!0);e="2d"}this.context=this.canvas.getContext(e),this.isBitmapRenderer=!1}},{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.canvas.clientWidth,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.canvas.clientHeight;return(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.canvas.width=this.contextWidth,this.canvas.height=this.contextHeight,!0)}},{key:"clear",value:function(){this.canvas.width=this.contextWidth}},{key:"contextWidth",get:function(){return this.width*this.pixelRatio|0}},{key:"contextHeight",get:function(){return this.height*this.pixelRatio|0}},{key:"$el",get:function(){return this.canvas}}])&&_(t.prototype,r),n&&_(t,n),e}(),U=function(){try{return window.top.__sqsWebGL,!0}catch(e){return!1}}()&&self.top||self;U.__sqsWebGL||(U.__sqsWebGL={initialized:!1,ticker:null,sharedController:null,dedicatedControllers:[],dedicatedContextLimit:l?1:4}),self.addEventListener("beforeunload",(function(){delete U.__sqsWebGL}));var H=U.__sqsWebGL,F=r(948),G=r(949),K={plugins:[F.a,G.a],attributes:{alpha:!0,antialias:!1,depth:!0,stencil:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!0}};function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y(){H.ticker.stop(),H.initialized=!1}var $=function(e){var t=H.initialized,r=H.dedicatedControllers,n=H.dedicatedContextLimit;if(t&&Y(),H.ticker=new L((function(e){var t=H.sharedController,r=H.dedicatedControllers;t&&t.update(e).render();for(var n=0,i=r.length;n<i;n++)r[n].update(e).render()})),H.ticker.start(),H.initialized=!0,r.length<n){var i=new T({node:e.node,pixelRatio:e.pixelRatio}),o=new I(q({content:e,canvas:i},K));return r.push(o),{canvas:i,renderController:o}}H.sharedController||(H.sharedController=new x(q({},K)));var a=H.sharedController,s=new T({node:e.node,pixelRatio:l?e.pixelRatio:1,contextType:l?"bitmaprenderer":"2d"});return a.register(e),{canvas:s,renderController:a}},J=function(e){var t=H.dedicatedControllers,r=H.sharedController,n=t.find((function(t){return t.content===e}));n?(n.destroy(),t.splice(t.indexOf(n),1)):r&&(r.unregister(e),r.isEmpty()&&(r.destroy(),H.sharedController=null)),r&&!r.isEmpty()||0!==t.length||Y()};function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ee=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Z(this,"isActive",!1),Z(this,"isSupported",!0),Z(this,"autoUpdate",!0),Z(this,"isDirty",!0),Z(this,"clearColor",[1,1,1,1]),Z(this,"resourceKeys",[]),Z(this,"start",(function(){return n.isActive||(n.isActive=!0),n})),Z(this,"stop",(function(){return n.isActive?(n.isActive=!1,n):n})),Z(this,"refresh",(function(){return n.updateSize(),n.onRefresh(),n})),Z(this,"forceRender",(function(){n.renderController.renderContent(n,!0)})),this.node=t,this.props=Q(Q({},this.constructor.defaultProps),r),this.clearNode(),Object.assign(this,$(this)),this.renderer=this.renderController.renderer,this.resourceCache=this.renderController.resourceCache,this.isSupported=this.renderController.isWebGLSupported||this.constructor.hasFallback,this.isSupported&&this.updateSize()}var t,r,n;return t=e,(r=[{key:"setProps",value:function(e){var t=Q({},this.props);return this.props=Q(Q({},this.props),e),this.onUpdateProps(t),this}},{key:"onUpdateProps",value:function(e){}},{key:"updateSize",value:function(){var e,t;this.props.canvasSize&&(e=this.props.canvasSize.width,t=this.props.canvasSize.height),this.canvas.resize(e,t)&&Promise.resolve().then(this.forceRender)}},{key:"onRefresh",value:function(){}},{key:"update",value:function(e){}},{key:"render",value:function(){}},{key:"renderFrame",value:function(){return this.update(Date.now()),this.forceRender(),this.canvas.canvas}},{key:"destroy",value:function(){var e=this;return J(this),this.renderController=null,this.resourceKeys.forEach((function(t){e.resourceCache.releaseResource(t)})),this.clearNode(),this.onDestroy(),this}},{key:"clearNode",value:function(){this.node&&(this.node.innerHTML="")}},{key:"onDestroy",value:function(){}},{key:"getTexture",value:function(e){var t=e.key,r=e.factory;return this.resourceKeys.push(t),this.resourceCache.getTexture({key:t,factory:r})}},{key:"getProgram",value:function(e){var t=e.key,r=e.factory;return this.resourceKeys.push(t),this.resourceCache.getProgram({key:t,factory:r})}},{key:"getGeometry",value:function(e){var t=e.key,r=e.factory;return this.resourceKeys.push(t),this.resourceCache.getGeometry({key:t,factory:r})}},{key:"releaseResource",value:function(e){var t=this.resourceKeys.indexOf(e);-1!==t&&(this.resourceKeys.splice(t,1),this.resourceCache.releaseResource(e))}},{key:"pixelRatio",get:function(){return this.props.pixelRatio||1}}])&&V(t.prototype,r),n&&V(t,n),e}();Z(ee,"hasFallback",!1),Z(ee,"defaultProps",{canvasSize:null,pixelRatio:self.devicePixelRatio});var te=r(127),re=r(128),ne=r(288),ie=r(131),oe=r(950),ae=r(977),se=r(973),ce=r(975),ue=r(543),he=r(974),le=r(990),fe=r(540),de=r.n(fe),pe=r(541),ve=r(542);function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){xe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Pe(e);if(t){var i=Pe(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return je(this,r)}}function je(e,t){return!t||"object"!==ye(t)&&"function"!=typeof t?ke(e):t}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(a,e);var t,r,i,o=we(a);function a(e,t){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),xe(ke(r=o.call(this,e,be({pixelRatio:l?Math.min(self.devicePixelRatio,1.5):1},t))),"onIntersection",(function(e){e?r.start():r.stop(),r.props.onIntersection(e)})),xe(ke(r),"_executeOnNextFrame",(function(e){requestAnimationFrame((function(){requestAnimationFrame((function(){return e()}))}))}));var n=r.props.image;return r.focalPoint=Object(ne.b)(n)||{x:.5,y:.5},r.isImageLoaded=!1,r.isEnabled=r.isSupported&&!ie.b,n?(r.isEnabled&&r.createResources(),r.loadImage(n),r):je(r)}return t=a,(r=[{key:"loadImage",value:function(e){var t=this;e.onload=function(){t.isEnabled&&t.onImageLoaded(e)},!window.Static.SQUARESPACE_CONTEXT.authenticatedAccount&&this.isEnabled&&e.complete&&""!==e.currentSrc&&this._executeOnNextFrame((function(){return t.onImageLoaded(e)})),te.a.loadLazy(e,{load:!0,mode:"cover",useAdvancedPositioning:!0})}},{key:"onImageLoaded",value:function(e){this.refresh(),this.isImageLoaded?this.texture.needsUpdate=!0:(this.isImageLoaded=!0,this.bindListeners(),e.style.visibility="hidden")}},{key:"createResources",value:function(){var e,t,r=this.props,n=r.image,i=r.uniforms,o=r.pixelRatio;this.texture=new oe.a({image:n}),this.drawInfo=Object(ae.a)({program:this.createProgram(),uniforms:be(be({},i),{},{uvMatrix:de()(),uImage:Object(se.a)(this.renderer,this.texture),uResolution:[this.canvas.width,this.canvas.height],uReversePixelRatio:1/o}),geometry:this.getGeometry({key:"big-triangle",factory:ce.a})}),e=this.renderer,t=this.drawInfo.program,Object(ve.a)(e,t),this.uniforms=this.drawInfo.uniforms,this.updateUvMatrix()}},{key:"createProgram",value:function(){var e=this.props,t=e.programKey,r=e.vert,n=e.frag;return this.getProgram({key:t,factory:function(){return new ue.a({vert:r,frag:n})}})}},{key:"bindListeners",value:function(){this.intersectionScroll=new pe.a(this.node,{onIntersection:this.onIntersection,onProgress:this.props.onScrollProgress,normalize:!1}),n.a.on(this.refresh)}},{key:"unbindListeners",value:function(){n.a.off(this.refresh),this.intersectionScroll&&this.intersectionScroll.destroy()}},{key:"onUpdateProps",value:function(e){this.props.programKey!==e.programKey&&(this.releaseResource(e.programKey),this.drawInfo.program=this.createProgram()),(this.props.imageNeedsUpdate||this.props.image!==e.image)&&(this.texture.image=this.props.image,this.texture.needsUpdate=!0,this.props.imageNeedsUpdate=!1),Object.assign(this.uniforms,this.props.uniforms),this.refresh()}},{key:"update",value:function(){this.props.onUpdate()}},{key:"render",value:function(){Object(he.a)(this.renderer,this.drawInfo)}},{key:"onRefresh",value:function(){this.uniforms.uResolution[0]=this.canvas.width,this.uniforms.uResolution[1]=this.canvas.height,this.updateUvMatrix(),this.props.onResize()}},{key:"updateUvMatrix",value:function(){Object(le.a)({matrix:this.drawInfo.material.uniforms.uvMatrix,containerWidth:this.canvas.width,containerHeight:this.canvas.height,contentWidth:this.props.image.naturalWidth,contentHeight:this.props.image.naturalHeight,centerX:this.focalPoint.x,centerY:this.focalPoint.y})}},{key:"onDestroy",value:function(){this.isEnabled&&this.unbindListeners()}}])&&me(t.prototype,r),i&&me(t,i),a}(ee);xe(Ce,"defaultProps",{programKey:null,vert:"#define GLSLIFY 1\nattribute vec3 aPosition;\nuniform mat3 uvMatrix;\nvarying vec2 vUv;\n\nvoid main(){\n  gl_Position=vec4(aPosition,1.);\n  vec2 uv=gl_Position.xy*.5+.5;\n\n  vUv=(uvMatrix*vec3(uv,1.)).xy;\n}",frag:"#define GLSLIFY 1\nuniform sampler2D uImage;\nvarying vec2 vUv;\n\nvoid main(){\n  gl_FragColor=texture2D(uImage,vUv);\n}",image:null,uniforms:{},imageNeedsUpdate:!1,onUpdate:re.a,onResize:re.a,onIntersection:re.a,onScrollProgress:null})}}]);