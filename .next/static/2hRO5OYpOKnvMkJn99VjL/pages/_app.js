(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),u=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(u.AmpStateContext))}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1duh":function(t,e,n){},"2gSa":function(t,e,n){t.exports={footer_powerby:"app_footer_powerby__3va6B",title:"app_title__38e8H"}},"5MvH":function(t,e,n){},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),u=r(n("Xuae")),i=n("lwAK"),a=n("FYa8"),c=n("/0+H");function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=f;var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?u=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var a=0,c=s.length;a<c;a++){var f=s[a];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;p.has(l)?u=!1:(p.add(l),r[f]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=u.default();function h(t){var e=t.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},"8oxB":function(t,e){var n,r,o=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:u}catch(t){n=u}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var c,f=[],l=!1,s=-1;function p(){l&&c&&(l=!1,c.length?f=c.concat(f):s=-1,f.length&&d())}function d(){if(!l){var t=a(p);l=!0;for(var e=f.length;e;){for(c=f,f=[];++s<e;)c&&c[s].run();s=-1,e=f.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new h(t,e)),1!==f.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),u=n("q1tI"),i=n.n(u),a=n("8Kt/"),c=n.n(a),f=n("xy40"),l=n.n(f),s=n("yLiY"),p=n.n(s),d=n("nOHt"),h=(n("TpwP"),n("t+Ps"),n("LEOp"),n("5MvH"),n("p77/"),n("1duh"),n("gi7s"),n("2gSa")),v=n.n(h),m=i.a.createElement,y=p()().publicRuntimeConfig;function w(t){var e=t.Component,n=t.pageProps;Object(d.useRouter)();return m("div",null,m(c.a,null,m("link",{rel:"icon",href:"/favicon.png"})),m(e,n),m("div",{className:v.a.footer_powerby},m("p",{className:v.a.title},"Powered By ",m("a",{href:"https://omb.todokit.xyz",className:"link",target:"_blank"},"\u300coh my blog\u300d"),"\u30fb","\u5728\u7ebf\u9884\u89c8 ",m("a",{href:"https://omb.todokit.xyz",className:"link_active",target:"_blank"},"Demo"))))}l.a.init({appId:y.YOUR_LEANCLOUD_APPID||"test",appKey:y.YOUR_LEANCLOUD_APPKEY||"test",serverURL:y.YOUR_LEANCLOUD_SERVER_URL||"test"}),w.getInitialProps=function(t){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,e.abrupt("return",p()());case 2:case"end":return e.stop()}}),null,null,null,Promise)},e.default=w},LEOp:function(t,e,n){},TpwP:function(t,e,n){},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),u=n("i2R6"),i=n("48fX"),a=n("tCBg"),c=n("T0f4"),f=n("mPvQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(a){i(f,a);var c=l(f);function f(t){var u;return r(this,f),u=c.call(this,t),p&&(e.add(o(u)),n(o(u))),u}return u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},gi7s:function(t,e,n){},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),u=n("kG2m");t.exports=function(t){return r(t)||o(t)||u()}},o0o1:function(t,e,n){t.exports=n("ls82")},"p77/":function(t,e,n){},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},"t+Ps":function(t,e,n){},yLiY:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return r},e.setConfig=function(t){r=t}}},[[0,1,0,3,20,2]]]);