webpackJsonp([0xd2a57dc1d883],{75:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(347),options:{plugins:[]}}]},200:function(e,n,t){"use strict";n.components={"component---src-templates-blog-post-js":t(313),"component---src-pages-404-js":t(311),"component---src-pages-index-jsx":t(312)},n.json={"layout-index.json":t(314),"udemy-react-the-complete-guide-6.json":t(342),"udemy-react-the-complete-guide-5.json":t(341),"udemy-react-the-complete-guide-4.json":t(340),"udemy-react-the-complete-guide-3.json":t(339),"udemy-react-the-complete-guide-2.json":t(338),"udemy-react-the-complete-guide-1.json":t(337),"fcc-technical-documentation-page.json":t(320),"fcc-product-landing-page-project.json":t(318),"fcc-survey-form-project.json":t(319),"head-first-js-chap-12-advanced-object-construction-creating-objects.json":t(323),"head-first-js-chap-13-using-prototype.json":t(324),"head-first-js-chap-11-anonymous-functions-scopes-closures.json":t(322),"head-first-js-chap-10-first-class-function-1.json":t(321),"head-first-js-chap-9-asynchronous.json":t(328),"books-review-page-react-day-1.json":t(317),"ve-cuon-principle-of-beautiful-web-design.json":t(343),"quy-tac.json":t(335),"modern-react-with-redux-section-2-lecture-29-33.json":t(331),"principle-of-beautiful-web-design-day-7.json":t(334),"head-first-js-chap-4.json":t(327),"principle-of-beautiful-web-design-1.json":t(333),"ownego-exercise.json":t(332),"head-first-js-chap-3.json":t(326),"head-first-js-chap-2.json":t(325),"wikipedia-viewer.json":t(345),"random-quote-machine.json":t(336),"local-weather-app.json":t(330),"why-i-write.json":t(344),"404.json":t(315),"index.json":t(329),"404-html.json":t(316)},n.layouts={"layout---index":t(310)}},201:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(3),i=o(s),l=t(8),p=o(l),f=t(133),d=o(f),m=t(54),h=o(m),g=t(75),y=t(487),j=o(y),x=function(e){var n=e.children;return i.default.createElement("div",null,n())},b=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=c({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=c({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,j.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(i.default.Component);b.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},n.default=b,e.exports=n.default},54:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(388),a=o(r),u=(0,a.default)();e.exports=u},202:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(74),a=t(134),u=o(a),c={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),c[a])return c[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return s=e,c[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return s=e,c[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return s=e,c[a]=e,!0}return!1}),s}}},203:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(163),a=o(r),u=t(75),c=(0,u.apiRunner)("replaceHistory"),s=c[0],i=s||(0,a.default)();e.exports=i},316:function(e,n,t){t(2),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(355)})})}},315:function(e,n,t){t(2),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(356)})})}},317:function(e,n,t){t(2),e.exports=function(e){return t.e(61291650447312,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(357)})})}},318:function(e,n,t){t(2),e.exports=function(e){return t.e(42178128461150,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(358)})})}},319:function(e,n,t){t(2),e.exports=function(e){return t.e(55183339277021,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(359)})})}},320:function(e,n,t){t(2),e.exports=function(e){return t.e(0xe8e2bed268d5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(360)})})}},321:function(e,n,t){t(2),e.exports=function(e){return t.e(0x73741f42f337,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(361)})})}},322:function(e,n,t){t(2),e.exports=function(e){return t.e(0xc58c6de34b96,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(362)})})}},323:function(e,n,t){t(2),e.exports=function(e){return t.e(67790698005484,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(363)})})}},324:function(e,n,t){t(2),e.exports=function(e){return t.e(65236670772965,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(364)})})}},325:function(e,n,t){t(2),e.exports=function(e){return t.e(0x91ed7685ed4a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(365)})})}},326:function(e,n,t){t(2),e.exports=function(e){return t.e(53223006495342,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(366)})})}},327:function(e,n,t){t(2),e.exports=function(e){return t.e(87376695968415,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(367)})})}},328:function(e,n,t){t(2),e.exports=function(e){return t.e(66079214168481,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(368)})})}},329:function(e,n,t){t(2),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(369)})})}},314:function(e,n,t){t(2),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(108)})})}},330:function(e,n,t){t(2),e.exports=function(e){return t.e(0xb0d3f6f7b851,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(370)})})}},331:function(e,n,t){t(2),e.exports=function(e){return t.e(0xe8c013d56ad1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(371)})})}},332:function(e,n,t){t(2),e.exports=function(e){return t.e(0x671547b943af,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(372)})})}},333:function(e,n,t){t(2),e.exports=function(e){return t.e(0xd1a08ea0b3e3,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(373)})})}},334:function(e,n,t){t(2),e.exports=function(e){return t.e(0x7310b51d13c4,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(374)})})}},335:function(e,n,t){t(2),e.exports=function(e){return t.e(0xb089f3b96569,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(375)})})}},336:function(e,n,t){t(2),e.exports=function(e){return t.e(54208933998397,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(376)})})}},337:function(e,n,t){t(2),e.exports=function(e){return t.e(0xaae79580aff1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(377)})})}},338:function(e,n,t){t(2),e.exports=function(e){return t.e(0x9aae8750d9ad,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(378)})})}},339:function(e,n,t){t(2),e.exports=function(e){return t.e(0x747d72572d8c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(379)})})}},340:function(e,n,t){t(2),e.exports=function(e){return t.e(0xdcb1d6e78a27,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(380)})})}},341:function(e,n,t){t(2),e.exports=function(e){return t.e(0x689b7b9616bc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(381)})})}},342:function(e,n,t){t(2),e.exports=function(e){return t.e(0xa23a5299547b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(382)})})}},343:function(e,n,t){t(2),e.exports=function(e){return t.e(0x628953016a6f,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(383)})})}},344:function(e,n,t){t(2),e.exports=function(e){return t.e(0xe28d7a63cdcc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(384)})})}},345:function(e,n,t){t(2),e.exports=function(e){return t.e(50214702806562,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(385)})})}},310:function(e,n,t){t(2),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(204)})})}},133:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(3),a=(o(r),t(202)),u=o(a),c=t(54),s=o(c),i=t(134),l=o(i),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},b="",v=[],N={},C=function(e){return e&&e.default||e},w=void 0,R=!0,k=[],P={},_={},E=5;w=t(205)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){v=v.filter(function(n){return n!==e}),w.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){w.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){w.onPostLoadPageResources(e)});var O=function(e,n){return N[e]>N[n]?1:N[e]<N[n]?-1:0},L=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},T=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,k.push({resource:n,succeeded:!e}),_[n]||(_[n]=e),k=k.slice(-E),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):_[n]?e.nextTick(function(){t(_[n])}):T(n,function(e,o){if(e)t(e);else{var r=C(o());g[n]=r,t(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=k.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),P[e]||(P[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,F={empty:function(){j=[],x={},N={},v=[],y=[],b=""},addPagesArray:function(e){y=e,b="/testing-blog",p=(0,u.default)(e,b)},addDevRequires:function(e){f=e},addProdRequires:function(e){d=e},dequeue:function(){return j.pop()},enqueue:function(e){var n=(0,l.default)(e,b);if(!y.some(function(e){return e.path===n}))return!1;var t=1/M;M+=1,x[n]?x[n]+=1:x[n]=1,F.has(n)||j.unshift(n),j.sort(L);var o=p(n);return o.jsonName&&(N[o.jsonName]?N[o.jsonName]+=1+t:N[o.jsonName]=1+t,v.indexOf(o.jsonName)!==-1||h[o.jsonName]||v.unshift(o.jsonName)),o.componentChunkName&&(N[o.componentChunkName]?N[o.componentChunkName]+=1+t:N[o.componentChunkName]=1+t,v.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||v.unshift(o.componentChunkName)),v.sort(O),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:N}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(e){return p(e)},has:function(e){return j.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),R=!1;if(P[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=p(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];s.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,c=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=n,c()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=n,c()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,c()}))},peek:function(e){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(e){return j.length-j.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:F.getResourcesForPathname};n.default=F}).call(n,t(109))},386:function(e,n){e.exports=[{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"udemy-react-the-complete-guide-6.json",path:"/udemy-react-the-complete-guide6"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"udemy-react-the-complete-guide-5.json",path:"/udemy-react-the-complete-guide5"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"udemy-react-the-complete-guide-4.json",path:"/udemy-react-the-complete-guide4"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"udemy-react-the-complete-guide-3.json",path:"/udemy-react-the-complete-guide3"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"udemy-react-the-complete-guide-2.json",path:"/udemy-react-the-complete-guide2"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"udemy-react-the-complete-guide-1.json",path:"/udemy-react-the-complete-guide1"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"fcc-technical-documentation-page.json",path:"/fcc-technical-documentation-page"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"fcc-product-landing-page-project.json",path:"/fcc-product-landing-page-project"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"fcc-survey-form-project.json",path:"/fcc-survey-form-project"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-12-advanced-object-construction-creating-objects.json",path:"/head-first-js-chap12-advanced-object-construction-creating-objects"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-13-using-prototype.json",path:"/head-first-js-chap13-using-prototype"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-11-anonymous-functions-scopes-closures.json",path:"/head-first-js-chap11-anonymous-functions-scopes-closures"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-10-first-class-function-1.json",path:"/head-first-js-chap10-first-class-function1"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-9-asynchronous.json",path:"/head-first-js-chap9-asynchronous"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"books-review-page-react-day-1.json",path:"/books-review-page-react-day1"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"ve-cuon-principle-of-beautiful-web-design.json",path:"/ve-cuon-principle-of-beautiful-web-design"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"quy-tac.json",path:"/quy-tac"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"modern-react-with-redux-section-2-lecture-29-33.json",path:"/modern-react-with-redux-section2-lecture-29-33"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"principle-of-beautiful-web-design-day-7.json",path:"/principle-of-beautiful-web-design-day7"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-4.json",path:"/head-first-js-chap4"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"principle-of-beautiful-web-design-1.json",path:"/principle-of-beautiful-web-design1"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"ownego-exercise.json",path:"/ownego-exercise"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-3.json",path:"/head-first-js-chap3"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"head-first-js-chap-2.json",path:"/head-first-js-chap2"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"wikipedia-viewer.json",path:"/wikipedia-viewer"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"random-quote-machine.json",path:"/random-quote-machine"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"local-weather-app.json",path:"/local-weather-app"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"why-i-write.json",path:"/why-i-write"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},205:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(75),u=t(3),c=o(u),s=t(167),i=o(s),l=t(74),p=t(351),f=t(296),d=o(f),m=t(20),h=t(203),g=o(h),y=t(54),j=o(y),x=t(386),b=o(x),v=t(387),N=o(v),C=t(201),w=o(C),R=t(200),k=o(R),P=t(133),_=o(P);t(221),window.___history=g.default,window.___emitter=j.default,_.default.addPagesArray(b.default),_.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=_.default,window.matchPath=l.matchPath;var E=N.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&s!==!1||(window.___history=e,s=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(206);var o=function(e){function n(e){e.page.path===_.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(u),window.___history.push(t))}var t=(0,m.createLocation)(e,null,null,g.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var u=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);_.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return c.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(w.default);_.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return _.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,r({page:!0},o)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],s=(0,a.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,d.default)(function(){return s(c.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},387:function(e,n){e.exports=[]},206:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(54),a=o(r),u="/";u="/testing-blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},134:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},296:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},2:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var c=!1,s=!0,i=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void i(!0):(r(o,function(){c||(c=!0,s?setTimeout(function(){i()}):i())}),void(c||(s=!1,e(function(){c||(c=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),i(!0))}))))}}o()},346:function(e,n,t){"use strict";var o=t(67);e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,r=e.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var c=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!c.test(""+a.host+a.pathname)||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},347:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(67),a=t(346),u=o(a);n.onClientEntry=function(){(0,u.default)(window,function(e){(0,r.navigateTo)(e)})}},164:function(e,n){"use strict";function t(e,n,p){if("string"!=typeof n){if(l){var f=i(n);f&&f!==l&&t(e,f,p)}var d=u(n);c&&(d=d.concat(c(n)));for(var m=0;m<d.length;++m){var h=d[m];if(!(o[h]||r[h]||p&&p[h])){var g=s(n,h);try{a(e,h,g)}catch(e){}}}return e}return e}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);e.exports=t},388:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},109:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(n){try{return p.call(null,e)}catch(n){return p.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&c())}function c(){if(!h){var e=r(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,a(e)}}function s(e,n){this.fun=e,this.array=n}function i(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(e){
var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new s(e,n)),1!==m.length||h||r(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=i,f.addListener=i,f.once=i,f.off=i,f.removeListener=i,f.removeAllListeners=i,f.emit=i,f.prependListener=i,f.prependOnceListener=i,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},487:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},311:function(e,n,t){t(2),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(209)})})}},312:function(e,n,t){t(2),e.exports=function(e){return t.e(0xc23565d713b7,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(210)})})}},313:function(e,n,t){t(2),e.exports=function(e){return t.e(0x620f737b6699,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(211)})})}}});
//# sourceMappingURL=app-ff91cc8ee1eacfa7d610.js.map