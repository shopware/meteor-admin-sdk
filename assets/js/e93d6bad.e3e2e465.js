"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},l="Register CMS element",o={unversionedId:"guide/api-reference/cms/registerCmsElement",id:"guide/api-reference/cms/registerCmsElement",title:"Register CMS element",description:"Available since Shopware v6.4.17.0",source:"@site/docs/guide/2_api-reference/cms/registerCmsElement.md",sourceDirName:"guide/2_api-reference/cms",slug:"/guide/api-reference/cms/registerCmsElement",permalink:"/meteor-admin-sdk/docs/guide/api-reference/cms/registerCmsElement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Update",permalink:"/meteor-admin-sdk/docs/guide/api-reference/data/update"},next:{title:"useSharedState",permalink:"/meteor-admin-sdk/docs/guide/api-reference/composables/useSharedState"}},s={},p=[{value:"Usage:",id:"usage",level:4},{value:"Parameters",id:"parameters",level:4}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register-cms-element"},"Register CMS element"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Available since Shopware v6.4.17.0")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"cms.registerCmsElement")," you can register CMS elements to use in the Shopping Experiences Module.\nMore information on how to develop CMS elements can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.shopware.com/docs/guides/plugins/plugins/content/cms/add-cms-element"},"this guide"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Register a CMS element in your Shopping Experiences Module via App",src:r(2476).Z,width:"1070",height:"904"})),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"void cms.registerCmsElement({\n    name: 'dailymotionElement',\n    label: 'Dailymotion Video',\n    defaultConfig: {\n        dailyUrl: {\n            source: 'static',\n            value: '',\n        },\n    },\n});\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The name of the cms element, which will also be used to generate locationIds - Should have vendor prefix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"label")),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The label, which is visible when selecting the cms element - Use snippet keys here!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"defaultConfig")),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object containing the defaultConfig; same like in plugin development.")))))}c.isMDXComponent=!0},2476:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/register-cms-element-example-4359134b711ef9b82bcf444af03622b3.png"}}]);