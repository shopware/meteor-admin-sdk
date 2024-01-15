"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1924],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),c=function(e){var r=i.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return i.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return t?i.createElement(f,l(l({ref:r},d),{},{components:t})):i.createElement(f,l({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(7462),n=(t(7294),t(3905));const a={id:"internals_serializer_criteria_serializer",title:"Module: _internals/serializer/criteria-serializer",sidebar_label:"_internals/serializer/criteria-serializer",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/modules/internals_serializer_criteria_serializer",id:"api/modules/internals_serializer_criteria_serializer",title:"Module: _internals/serializer/criteria-serializer",description:"Functions",source:"@site/docs/api/modules/internals_serializer_criteria_serializer.md",sourceDirName:"api/modules",slug:"/api/modules/internals_serializer_criteria_serializer",permalink:"/meteor-admin-sdk/docs/api/modules/internals_serializer_criteria_serializer",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"internals_serializer_criteria_serializer",title:"Module: _internals/serializer/criteria-serializer",sidebar_label:"_internals/serializer/criteria-serializer",sidebar_position:0,custom_edit_url:null},sidebar:"API",previous:{title:"_internals/serializer",permalink:"/meteor-admin-sdk/docs/api/modules/internals_serializer"},next:{title:"_internals/serializer/entity-collection-serializer",permalink:"/meteor-admin-sdk/docs/api/modules/internals_serializer_entity_collection_serializer"}},o={},c=[{value:"Functions",id:"functions",level:2},{value:"default",id:"default",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"default"},"default"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"default"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"dependencies"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"serializer")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"dependencies")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"SerializerDependencies"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"serializer")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/shopware/meteor-admin-sdk/blob/305d95c/src/_internals/serializer/index.ts#L30"},"src/_internals/serializer/index.ts:30")))}p.isMDXComponent=!0}}]);