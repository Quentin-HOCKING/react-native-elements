"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[448,1275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(72389),i=n(29548),o=n(86010);const p="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,c=e.block,d=e.defaultValue,s=e.values,m=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=s?s:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),N=y.tabGroupChoices,v=y.setTabGroupChoices,D=(0,r.useState)(b),C=D[0],A=D[1],P=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&A(T)}var E=function(e){var t=e.currentTarget,n=P.indexOf(t),a=f[n].value;a!==C&&(w(t),A(a),null!=m&&v(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return P.push(e)},onKeyDown:O,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},95557:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>m});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(28136),o=(n(34738),n(9877),n(58215),["components"]),p={id:"pricingcard",title:"PricingCard"},u=void 0,c={unversionedId:"components/pricingcard",id:"components/pricingcard",title:"PricingCard",description:"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way.",source:"@site/docs/components/PricingCard.mdx",sourceDirName:"components",slug:"/components/pricingcard",permalink:"/docs/next/components/pricingcard",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/PricingCard.mdx",tags:[],version:"current",frontMatter:{id:"pricingcard",title:"PricingCard"},sidebar:"docs",previous:{title:"Overlay",permalink:"/docs/next/components/overlay"},next:{title:"Rating",permalink:"/docs/next/components/rating"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"PricingCard",id:"pricingcard",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"PricingCard",id:"pricingcard-1",children:[{value:"button",id:"button",children:[],level:4},{value:"color",id:"color",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"info",id:"info",children:[],level:4},{value:"infoStyle",id:"infostyle",children:[],level:4},{value:"onButtonPress",id:"onbuttonpress",children:[],level:4},{value:"price",id:"price",children:[],level:4},{value:"pricingStyle",id:"pricingstyle",children:[],level:4},{value:"title",id:"title",children:[],level:4},{value:"titleStyle",id:"titlestyle",children:[],level:4},{value:"wrapperStyle",id:"wrapperstyle",children:[],level:4}],level:3}],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"pricingcard"},"PricingCard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#button"},"button")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#color"},"color")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#info"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#infostyle"},"infoStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onbuttonpress"},"onButtonPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#price"},"price")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pricingstyle"},"pricingStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#title"},"title")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titlestyle"},"titleStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wrapperstyle"},"wrapperStyle"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"pricingcard-1"},"PricingCard"),(0,l.kt)("h4",{id:"button"},"button"),(0,l.kt)("p",null,"Button information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ButtonProps or ButtonInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"color"},"color"),(0,l.kt)("p",null,"Color scheme for button & title."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Color(Primary)")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,l.kt)("p",null,"Outer component styling."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"info"},"info"),(0,l.kt)("p",null,"Pricing information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"infostyle"},"infoStyle"),(0,l.kt)("p",null,"Specify pricing information style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onbuttonpress"},"onButtonPress"),(0,l.kt)("p",null,"Function to be run when button is pressed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"price"},"price"),(0,l.kt)("p",null,"Price mentioned in the pricing card."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string or number"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"pricingstyle"},"pricingStyle"),(0,l.kt)("p",null,"Specify pricing text style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"title"},"title"),(0,l.kt)("p",null,"Add title in the pricing card."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"titlestyle"},"titleStyle"),(0,l.kt)("p",null,"Specify title text style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"wrapperstyle"},"wrapperStyle"),(0,l.kt)("p",null,"Inner wrapper component styling."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null))}m.isMDXComponent=!0},28136:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>u,toc:()=>c,default:()=>s});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p=void 0,u={unversionedId:"components/usage/PricingCard",id:"components/usage/PricingCard",title:"PricingCard",description:"",source:"@site/docs/components/usage/PricingCard.mdx",sourceDirName:"components/usage",slug:"/components/usage/PricingCard",permalink:"/docs/next/components/usage/PricingCard",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/PricingCard.mdx",tags:[],version:"current",frontMatter:{}},c=[],d={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Pricing","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20PricingCard%2C%20colors%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20PricingCardComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Pricing%3A%20React.FunctionComponent%3CPricingCardComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7Bcolors.primary%7D%0A%20%20%20%20%20%20%20%20title%3D%22Free%22%0A%20%20%20%20%20%20%20%20price%3D%22%240%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'1%20User'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary%7D%0A%20%20%20%20%20%20%20%20title%3D%22Starter%22%0A%20%20%20%20%20%20%20%20price%3D%22%2419%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'10%20Users'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary2%7D%0A%20%20%20%20%20%20%20%20title%3D%22Enterprise%22%0A%20%20%20%20%20%20%20%20price%3D%22%2449%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'100%20Users'%2C%20'One%20on%20One%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20Pricing%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0}}]);