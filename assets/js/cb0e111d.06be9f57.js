"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"FAQ"},i="FAQ",s={unversionedId:"guide/faq/index",id:"guide/faq/index",title:"FAQ",description:"Can I use the same domain with subfolders for multiple apps?",source:"@site/docs/guide/6_faq/index.md",sourceDirName:"guide/6_faq",slug:"/guide/faq/",permalink:"/meteor-admin-sdk/docs/guide/faq/",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"Guide",previous:{title:"How it works",permalink:"/meteor-admin-sdk/docs/guide/internals/how-it-works"}},p={},l=[{value:"Can I use the same domain with subfolders for multiple apps?",id:"can-i-use-the-same-domain-with-subfolders-for-multiple-apps",level:2},{value:"How can I use components that resemble the original components in the administration?",id:"how-can-i-use-components-that-resemble-the-original-components-in-the-administration",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"can-i-use-the-same-domain-with-subfolders-for-multiple-apps"},"Can I use the same domain with subfolders for multiple apps?"),(0,r.kt)("p",null,'No, for technical reasons, it is not possible to use the same domain with subfolders to host multiple apps. Each app must have its own separate domain.\nThe preferred solution is to use subdomains for each app. For example, you can use subdomains like "app-one.your-company.com", "app-two.your-company.com", and so on. Using subdomains allows you to have separate domains for each app, which avoids the technical limitations associated with using subfolders.'),(0,r.kt)("h2",{id:"how-can-i-use-components-that-resemble-the-original-components-in-the-administration"},"How can I use components that resemble the original components in the administration?"),(0,r.kt)("p",null,"While it is not possible to use the exact same components in the Shopware administration, there is a component library called Meteor Component Library that offers similar components. The Shopware administration components are not native Vue components because they have extension capabilities, Twig templates, and other features that cannot be directly used. However, by utilizing the Meteor Component Library, you can achieve a native look and feel for your app that seamlessly integrates with the original Shopware administration."),(0,r.kt)("p",null,"To access the Meteor Component Library, visit the following link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shopware/meteor-component-library"},"https://github.com/shopware/meteor-component-library")))}u.isMDXComponent=!0}}]);