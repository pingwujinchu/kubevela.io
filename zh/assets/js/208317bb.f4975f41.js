(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(333)),c={title:"\u67e5\u770b\u5e94\u7528\u7684\u65e5\u5fd7"},p={unversionedId:"developers/check-logs",id:"developers/check-logs",isDocsHomePage:!1,title:"\u67e5\u770b\u5e94\u7528\u7684\u65e5\u5fd7",description:"`bash",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/check-logs.md",slug:"/developers/check-logs",permalink:"/zh/docs/next/developers/check-logs",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/check-logs.md",version:"current",lastUpdatedBy:"Casper-Mars",lastUpdatedAt:1619335763,formattedLastUpdatedAt:"4/25/2021",sidebar:"docs",previous:{title:"\u7aef\u53e3\u8f6c\u53d1",permalink:"/zh/docs/next/developers/port-forward"},next:{title:"Execute Commands in Container",permalink:"/zh/docs/next/developers/exec-cmd"}},i=[],l={toc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela logs testapp\n")),Object(a.b)("p",null,"\u6267\u884c\u5982\u4e0a\u547d\u4ee4\u540e\u5c31\u80fd\u67e5\u770b\u6307\u5b9a\u7684 testapp \u5bb9\u5668\u7684\u65e5\u5fd7\u3002\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5bb9\u5668\uff0c\u5219\u9ed8\u8ba4\u4f1a\u67e5\u770b\u8be5\u5bb9\u5668\u7684\u65e5\u5fd7"))}s.isMDXComponent=!0},333:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(m,p(p({ref:t},l),{},{components:r})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);