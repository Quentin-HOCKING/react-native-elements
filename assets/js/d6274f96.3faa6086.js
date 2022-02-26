"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1832,7517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,b=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(72389),i=n(29548),o=n(86010);const u="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,c=e.block,m=e.defaultValue,s=e.values,d=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=s?s:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==f&&!h.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(f),T=w[0],O=w[1],C=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var V=y[d];null!=V&&V!==T&&h.some((function(e){return e.value===V}))&&O(V)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==T&&(x(t),O(a),null!=d&&N(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},58026:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>p,metadata:()=>c,toc:()=>m,default:()=>d});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(77228),o=(n(34738),n(9877),n(58215),["components"]),u={id:"tabview",title:"TabView"},p=void 0,c={unversionedId:"components/tabview",id:"components/tabview",title:"TabView",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/docs/components/TabView.mdx",sourceDirName:"components",slug:"/components/tabview",permalink:"/docs/next/components/tabview",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/TabView.mdx",tags:[],version:"current",frontMatter:{id:"tabview",title:"TabView"},sidebar:"docs",previous:{title:"Tab",permalink:"/docs/next/components/tab"},next:{title:"Text",permalink:"/docs/next/components/text"}},m=[{value:"Components",id:"components",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"TabView",id:"tabview",children:[],level:3},{value:"TabView.Item",id:"tabviewitem",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"TabView",id:"tabview-1",children:[{value:"animationConfig",id:"animationconfig",children:[],level:4},{value:"animationType",id:"animationtype",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"onChange",id:"onchange",children:[],level:4},{value:"tabItemContainerStyle",id:"tabitemcontainerstyle",children:[],level:4},{value:"value",id:"value",children:[],level:4}],level:3},{value:"TabView.Item",id:"tabviewitem-1",children:[],level:3}],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),(0,l.kt)("p",null,"TabView enables swipeable tabs."),(0,l.kt)("h2",{id:"components"},"Components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tabviewitem"},"TabView.Item"),"\nThey are individual item of the parent Tab.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"tabview"},"TabView"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#animationconfig"},"animationConfig")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#animationtype"},"animationType")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onchange"},"onChange")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tabitemcontainerstyle"},"tabItemContainerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#value"},"value"))),(0,l.kt)("h3",{id:"tabviewitem"},"TabView.Item"),(0,l.kt)("p",null,"None"),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"tabview-1"},"TabView"),(0,l.kt)("h4",{id:"animationconfig"},"animationConfig"),(0,l.kt)("p",null,"Define the animation configurations."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'Omit<SpringAnimationConfig and TimingAnimationConfig, "toValue">'),(0,l.kt)("td",{parentName:"tr",align:null},"{}")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"animationtype"},"animationType"),(0,l.kt)("p",null,"Choose the animation type among ",(0,l.kt)("inlineCode",{parentName:"p"},"spring")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"timing"),". This is visible when there is tab change."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"timing" or "spring"'),(0,l.kt)("td",{parentName:"tr",align:null},"spring")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,l.kt)("p",null,"Styling for Component container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onchange"},"onChange"),(0,l.kt)("p",null,"On Index Change Callback."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(value: number) => any"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"tabitemcontainerstyle"},"tabItemContainerStyle"),(0,l.kt)("p",null,"Styling for TabView.Item Component container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"value"},"value"),(0,l.kt)("p",null,"Child position index value."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tabviewitem-1"},"TabView.Item"),(0,l.kt)("p",null,"None"))}d.isMDXComponent=!0},77228:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>p,toc:()=>c,default:()=>s});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},u=void 0,p={unversionedId:"components/usage/TabView",id:"components/usage/TabView",title:"TabView",description:"",source:"@site/docs/components/usage/TabView.mdx",sourceDirName:"components/usage",slug:"/components/usage/TabView",permalink:"/docs/next/components/usage/TabView",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/TabView.mdx",tags:[],version:"current",frontMatter:{}},c=[],m={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}))}s.isMDXComponent=!0}}]);