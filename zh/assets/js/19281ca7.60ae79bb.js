(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(333)),a={title:"Execute Commands in Container"},i={unversionedId:"developers/exec-cmd",id:"developers/exec-cmd",isDocsHomePage:!1,title:"Execute Commands in Container",description:"Run:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/exec-cmd.md",slug:"/developers/exec-cmd",permalink:"/zh/docs/next/developers/exec-cmd",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/exec-cmd.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"\u67e5\u770b\u5e94\u7528\u7684\u65e5\u5fd7",permalink:"/zh/docs/next/developers/check-logs"},next:{title:"\u80fd\u529b\u7ba1\u7406",permalink:"/zh/docs/next/developers/cap-center"}},p=[],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Run: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"$ vela exec testapp -- /bin/sh\n")),Object(c.b)("p",null,"This open a shell within the container of testapp."))}l.isMDXComponent=!0},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,m=s["".concat(a,".").concat(f)]||s[f]||d[f]||c;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);