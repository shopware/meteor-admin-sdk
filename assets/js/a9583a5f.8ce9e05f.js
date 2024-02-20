"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,y=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Payment Overview Cards",m={unversionedId:"guide/api-reference/ui/module/paymentOverviewCard",id:"guide/api-reference/ui/module/paymentOverviewCard",title:"Payment Overview Cards",description:"Add a custom payment method overview card in settings",source:"@site/docs/guide/2_api-reference/ui/module/paymentOverviewCard.md",sourceDirName:"guide/2_api-reference/ui/module",slug:"/guide/api-reference/ui/module/paymentOverviewCard",permalink:"/meteor-admin-sdk/docs/guide/api-reference/ui/module/paymentOverviewCard",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Modals",permalink:"/meteor-admin-sdk/docs/guide/api-reference/ui/modals"},next:{title:"Settings Item",permalink:"/meteor-admin-sdk/docs/guide/api-reference/ui/settingsItem"}},p={},d=[{value:"Add a custom payment method overview card in settings",id:"add-a-custom-payment-method-overview-card-in-settings",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Extension example",id:"extension-example",level:3},{value:"Custom plugin component example",id:"custom-plugin-component-example",level:3}],l={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"payment-overview-cards"},"Payment Overview Cards"),(0,a.kt)("h3",{id:"add-a-custom-payment-method-overview-card-in-settings"},"Add a custom payment method overview card in settings"),(0,a.kt)("p",null,"Starting with Shopware 6.4.14.0, you can render a custom card in the new payment method overview.\nWith that, you can replace the default card, where you can toggle the active state of a payment method, with your own component.\nThis allows you, for example, to require an onboarding to your payment provider before activating the payment method."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"positionId")),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The position id that is created in the payment overview, where you can add a component section to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"paymentMethodHandlers")),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"A list of formatted payment method handlers, which are handled by your component and where the default card should not be rendered.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"component")),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The component name of you custom payment overview card. Only useful, if you have a plugin with a registered component")))),(0,a.kt)("h3",{id:"extension-example"},"Extension example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ui } from '@shopware-ag/meteor-admin-sdk';\n\nif (sw.location.is(sw.location.MAIN_HIDDEN)) {\n  // create the position\n  ui.module.payment.overviewCard.add({\n    positionId: 'my-custom-payment-overview-position',\n    paymentMethodHandlers: [\n      'handler_my_custom_payment_method_one',\n      'handler_my_custom_payment_method_two', \n      // ...\n    ],\n  });\n    \n  // add your component to that position\n  ui.componentSection.add({\n    component: 'card',\n    positionId: 'my-custom-payment-overview-position',\n    props: {\n      title: 'My payment provider',\n      subtitle: 'We have all the methods that exist',\n      locationId: 'my-custom-payment-overview-position-before'\n    }\n  })\n}\n\n// render your view to that location\nif (sw.location.is('my-custom-payment-overview-position-before')) {\n  // your content here\n}\n")),(0,a.kt)("h3",{id:"custom-plugin-component-example"},"Custom plugin component example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ui } from '@shopware-ag/meteor-admin-sdk';\n\n// register a custom component\nComponent.register('my-custom-payment-overview-card', {\n  template: ``,// your template here\n  props: {\n    paymentMethods: {\n      type: Array,\n      required: true,\n    },\n  },\n  methods: {\n    async changePaymentMethodActive(paymentMethod) {\n      paymentMethod.active = !paymentMethod.active;\n\n      this.$emit('set-payment-active', paymentMethod);\n    },\n  },\n});\n\n// add that component to the payment overview\nui.module.payment.overviewCard.add({\n  component: 'my-custom-payment-overview-card',\n  positionId: 'my-custom-payment-overview-position',\n  paymentMethodHandlers: [\n    'handler_my_custom_payment_method_one',\n    'handler_my_custom_payment_method_two',\n    // ...\n  ],\n});\n")))}c.isMDXComponent=!0}}]);