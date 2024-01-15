"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6576],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),p=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return i.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?i.createElement(v,o(o({ref:r},d),{},{components:t})):i.createElement(v,o({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6422:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(7462),n=(t(7294),t(3905));const a={id:"privileges",title:"Module: privileges",sidebar_label:"privileges",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/modules/privileges",id:"api/modules/privileges",title:"Module: privileges",description:"Variables",source:"@site/docs/api/modules/privileges.md",sourceDirName:"api/modules",slug:"/api/modules/privileges",permalink:"/meteor-admin-sdk/docs/api/modules/privileges",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"privileges",title:"Module: privileges",sidebar_label:"privileges",sidebar_position:0,custom_edit_url:null},sidebar:"API",previous:{title:"notification",permalink:"/meteor-admin-sdk/docs/api/modules/notification"},next:{title:"privileges/messages/_privileges",permalink:"/meteor-admin-sdk/docs/api/modules/privileges_messages__privileges"}},s={},p=[{value:"Variables",id:"variables",level:2},{value:"ShopwareMessageTypePrivileges",id:"shopwaremessagetypeprivileges",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"variables"},"Variables"),(0,n.kt)("h3",{id:"shopwaremessagetypeprivileges"},"ShopwareMessageTypePrivileges"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"ShopwareMessageTypePrivileges"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,n.kt)("a",{parentName:"p",href:"/meteor-admin-sdk/docs/api/modules/privileges_privilege_resolver#privileges"},(0,n.kt)("inlineCode",{parentName:"a"},"privileges")),">"),(0,n.kt)("p",null,"Determines which privileges are needed for a certain message type."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/shopware/meteor-admin-sdk/blob/305d95c/src/privileges/index.ts#L8"},"src/privileges/index.ts:8")))}c.isMDXComponent=!0}}]);