"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={id:"index",title:"Introduction",slug:"/guide/",sidebar_label:"Introduction",sidebar_position:.5,custom_edit_url:null},o="Introduction",l={unversionedId:"guide/index",id:"guide/index",title:"Introduction",description:"The Meteor Admin SDK is an NPM library for Shopware 6 apps and plugins that need an easy way of extending or customizing the Administration.",source:"@site/docs/guide/index.md",sourceDirName:"guide",slug:"/guide/",permalink:"/meteor-admin-sdk/docs/guide/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"index",title:"Introduction",slug:"/guide/",sidebar_label:"Introduction",sidebar_position:.5,custom_edit_url:null},sidebar:"Guide",next:{title:"Installation",permalink:"/meteor-admin-sdk/docs/guide/getting-started/installation"}},s={},p=[{value:"Quick start",id:"quick-start",level:2},{value:"App",id:"app",level:3},{value:"Plugin",id:"plugin",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Meteor Admin SDK is an NPM library for Shopware 6 apps and plugins that need an easy way of extending or customizing the Administration."),(0,a.kt)("p",null,"It contains helper functions to communicate with the Administration, execute actions, subscribe to data or extend the user interface."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfd7  ",(0,a.kt)("strong",{parentName:"li"},"Works with Shopware 6 Apps and Plugins:")," you can use the SDK for your plugins or apps. API usage is identical."),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfa2  ",(0,a.kt)("strong",{parentName:"li"},"Shallow learning curve:")," you don't need to have extensive knowledge about the internals of the Shopware 6 Administration. Our SDK hides the complicated stuff behind a beautiful API."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\uddf0  ",(0,a.kt)("strong",{parentName:"li"},"Many extension capabilities:")," from throwing notifications, accessing context information or extending the current UI. The feature set of the SDK will gradually be extended, providing more possibilities and flexibility for your ideas and solutions."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udea8  ",(0,a.kt)("strong",{parentName:"li"},"A stable API with great backwards compatibility:")," don't fear Shopware updates anymore. Breaking changes in this SDK are an exception. If you use the SDK, your apps and plugins will stay stable for a longer time, without any need for code maintenance."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udded  ",(0,a.kt)("strong",{parentName:"li"},"Type safety:")," the whole SDK is written in TypeScript which provides great autocompletion support and more safety for your apps and plugins."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc99  ",(0,a.kt)("strong",{parentName:"li"},"Developer experience:")," have a great development experience right from the start. And it will become better and better in the future."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udeb6  ",(0,a.kt)("strong",{parentName:"li"},"Lightweight:")," the whole library is completely tree-shakable and dependency-free. Every functionality can be imported granularly to keep your bundle as small and fast as possible.")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"/meteor-admin-sdk/docs/guide/getting-started/installation"},"Installation")," to get started. Or check out the quick start guide:"),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"Understand the Shopware Extension SDK by learning how to throw a notification."),(0,a.kt)("p",null,"Requirements for this quick start guide are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.shopware.com/docs/guides/installation"},"development Shopware 6 instance")," or a ",(0,a.kt)("a",{parentName:"li",href:"https://www.shopware.com/en/shopware-cloud/"},"Shopware 6 cloud instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.shopware.com/docs/guides/plugins/overview"},"clean Shopware 6 Plugin or App")," which is activated")),(0,a.kt)("h3",{id:"app"},"App"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an HTML file with following content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <script src="https://unpkg.com/@shopware-ag/meteor-admin-sdk/cdn"><\/script>\n\n  <script>\n    sw.notification.dispatch({\n      title: \'My first notification\',\n      message: \'This was really easy to do\'\n    })\n  <\/script>\n</body>\n</html>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the link to the webpage and to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.shopware.com/docs/guides/plugins/apps/app-base-guide#manifest-file"},"manifest.xml")," of your app. For local files you can use ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok")," to create a public URL for your HTML file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the Administration. After you have logged in you should see the notification from your app."))),(0,a.kt)("p",null,"Congratulation \ud83c\udf89 You just created your first interaction with the Administration via the Meteor Admin SDK."),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice:")," Plugins will only be working on self-hosted instances. You can't use a Shopware 6 cloud instance for plugins."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new ",(0,a.kt)("inlineCode",{parentName:"li"},"index.html")," file to your new plugin in the following path: ",(0,a.kt)("inlineCode",{parentName:"li"},"custom/plugins/yourPlugin/src/Resources/app/administration/index.html"),". The HTML file should have the following content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n</head>\n<body>\n  <script src="https://unpkg.com/@shopware-ag/meteor-admin-sdk/cdn"><\/script>\n\n  <script>\n    sw.notification.dispatch({\n      title: \'My first notification\',\n      message: \'This was really easy to do\'\n    })\n  <\/script>\n</body>\n</html>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Start the Shopware 6 Administration watcher using the following command: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./psh.phar administration:watch\n")),(0,a.kt)("p",null,"After all files have been compiled, a new browser window should open, in which you should see the Administration. After logging in, you should see the notification from your plugin."),(0,a.kt)("p",null,"Congratulations \ud83c\udf89 You just created your first interaction with the Administration via the Meteor Admin SDK."))}c.isMDXComponent=!0}}]);