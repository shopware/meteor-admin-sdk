"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,f=c["".concat(d,".").concat(s)]||c[s]||p[s]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={},o="Main module",l={unversionedId:"guide/api-reference/ui/mainModule",id:"guide/api-reference/ui/mainModule",title:"Main module",description:"Add main module",source:"@site/docs/guide/2_api-reference/ui/mainModule.md",sourceDirName:"guide/2_api-reference/ui",slug:"/guide/api-reference/ui/mainModule",permalink:"/meteor-admin-sdk/docs/guide/api-reference/ui/mainModule",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Component Section",permalink:"/meteor-admin-sdk/docs/guide/api-reference/ui/component-section"},next:{title:"Menu Item",permalink:"/meteor-admin-sdk/docs/guide/api-reference/ui/menuItem"}},d={},m=[{value:"Add main module",id:"add-main-module",level:3},{value:"Usage:",id:"usage",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example",level:4}],u={toc:m};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"main-module"},"Main module"),(0,r.kt)("h3",{id:"add-main-module"},"Add main module"),(0,r.kt)("p",null,"Add a main module to your extension. The content of the main module is determined by your ",(0,r.kt)("inlineCode",{parentName:"p"},"locationId"),".\nA specific view or a set of actions can be triggered based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"locationId"),"."),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"ui.mainModule.addMainModule({\n    heading: 'My App',\n    locationId: 'main-location-id',\n});\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"heading")),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The heading displayed in your module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locationId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Id for the content of the module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"displaySearchBar")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Toggles the sw-page search bar on/off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"displayLanguageSwitch")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Toggles sw-page language switch on/off")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Main module example",src:n(7867).Z,width:"1280",height:"794"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { location, ui } from '@shopware-ag/meteor-admin-sdk';\n\n// General commands\nif (location.is(location.MAIN_HIDDEN)) {\n    // Add the main module\n    ui.mainModule.addMainModule({\n        heading: 'My App',\n        locationId: 'main-location-id',\n    });\n\n  // If you want to provide some buttons for the smart bar of your main module\n  ui.mainModule.addSmartbarButton({\n      locationId: 'main-location-id', // locationId of your main module\n      buttonId: 'test-button', // The button id\n      label: 'Click me', // The button label\n      variant: 'primary', // The button variant\n      onClickCallback: () => {}\n  });\n}\n\n// Render your custom view\nif (location.is('main-location-id')) {\n    document.body.innerHTML = '<h1 style=\"text-align: center\">Hello from your main module</h1>';\n}\n")))}p.isMDXComponent=!0},7867:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-main-module-example-bfa1df07f1bb7278b895941689a88950.png"}}]);