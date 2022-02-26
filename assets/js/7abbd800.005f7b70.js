"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9533,1278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(87462),n=a(67294),l=a(72389),i=a(29548),o=a(86010);const d="tabItem_LplD";function s(e){var t,a,l,s=e.lazy,u=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,A=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:A.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),C=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=A.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=A[0])?void 0:l.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,i.UB)(),g=f.tabGroupChoices,b=f.setTabGroupChoices,y=(0,n.useState)(v),N=y[0],D=y[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var F=g[m];null!=F&&F!==N&&k.some((function(e){return e.value===F}))&&D(F)}var B=function(e){var t=e.currentTarget,a=T.indexOf(t),r=k[a].value;r!==N&&(E(t),D(r),null!=m&&b(m,r))},w=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:w,onFocus:B,onClick:B},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(A.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,l.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},84724:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>u,toc:()=>p,default:()=>m});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=a(51274),o=(a(34738),a(9877),a(58215),["components"]),d={id:"card",title:"Card"},s=void 0,u={unversionedId:"components/card",id:"components/card",title:"Card",description:"Cards are a great way to display information, usually containing content and actions about a single subject.",source:"@site/docs/components/Card.mdx",sourceDirName:"components",slug:"/components/card",permalink:"/docs/next/components/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Card.mdx",tags:[],version:"current",frontMatter:{id:"card",title:"Card"},sidebar:"docs",previous:{title:"ButtonGroup",permalink:"/docs/next/components/buttongroup"},next:{title:"CheckBox",permalink:"/docs/next/components/checkbox"}},p=[{value:"Components",id:"components",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Card",id:"card",children:[],level:3},{value:"Card.Divider",id:"carddivider",children:[],level:3},{value:"Card.FeaturedSubtitle",id:"cardfeaturedsubtitle",children:[],level:3},{value:"Card.FeaturedTitle",id:"cardfeaturedtitle",children:[],level:3},{value:"Card.Image",id:"cardimage",children:[],level:3},{value:"Card.Title",id:"cardtitle",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Card",id:"card-1",children:[{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"wrapperStyle",id:"wrapperstyle",children:[],level:4}],level:3},{value:"Card.Divider",id:"carddivider-1",children:[],level:3},{value:"Card.FeaturedSubtitle",id:"cardfeaturedsubtitle-1",children:[],level:3},{value:"Card.FeaturedTitle",id:"cardfeaturedtitle-1",children:[],level:3},{value:"Card.Image",id:"cardimage-1",children:[{value:"onLongPress",id:"onlongpress",children:[],level:4},{value:"onPress",id:"onpress",children:[],level:4},{value:"onPressIn",id:"onpressin",children:[],level:4},{value:"onPressOut",id:"onpressout",children:[],level:4},{value:"pressableProps",id:"pressableprops",children:[],level:4}],level:3},{value:"Card.Title",id:"cardtitle-1",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cards are a great way to display information, usually containing content and actions about a single subject."),(0,l.kt)("p",null,"Cards can contain images, buttons, text and more."),(0,l.kt)("p",null,"Cards are mainly used for informative purpose."),(0,l.kt)("h2",{id:"components"},"Components"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#carddivider"},"Card.Divider"),"\nAdd divider to the card which acts as a separator between elements.\nThis, Receives all ",(0,l.kt)("a",{parentName:"li",href:"divider#props"},"Divider")," props."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cardfeaturedsubtitle"},"Card.FeaturedSubtitle"),"\nAdd a featured subtitle to the Card.\nThis, Receives all ",(0,l.kt)("a",{parentName:"li",href:"text#props"},"Text")," props."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cardfeaturedtitle"},"Card.FeaturedTitle"),"\nAdd a featured title to the Card.\nThis, Receives all ",(0,l.kt)("a",{parentName:"li",href:"text#props"},"Text")," props."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cardimage"},"Card.Image"),"\nAdd information in the form of image to the card.\nThis, Receives all ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/components/image#props"},"Image")," props."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cardtitle"},"Card.Title"),"\nAdd a general title to the Card.\nThis, Receives all ",(0,l.kt)("a",{parentName:"li",href:"text#props"},"Text")," props.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"card"},"Card"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wrapperstyle"},"wrapperStyle"))),(0,l.kt)("h3",{id:"carddivider"},"Card.Divider"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"cardfeaturedsubtitle"},"Card.FeaturedSubtitle"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"cardfeaturedtitle"},"Card.FeaturedTitle"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"cardimage"},"Card.Image"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onlongpress"},"onLongPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},"onPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpressin"},"onPressIn")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpressout"},"onPressOut")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps"))),(0,l.kt)("h3",{id:"cardtitle"},"Card.Title"),(0,l.kt)("p",null,"None"),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"card-1"},"Card"),(0,l.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,l.kt)("p",null,"Outer container style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"wrapperstyle"},"wrapperStyle"),(0,l.kt)("p",null,"Inner container style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"carddivider-1"},"Card.Divider"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"cardfeaturedsubtitle-1"},"Card.FeaturedSubtitle"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"cardfeaturedtitle-1"},"Card.FeaturedTitle"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"cardimage-1"},"Card.Image"),(0,l.kt)("h4",{id:"onlongpress"},"onLongPress"),(0,l.kt)("p",null,"Called when a long-tap gesture is detected."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onpress"},"onPress"),(0,l.kt)("p",null,"Called when a single tap gesture is detected."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onpressin"},"onPressIn"),(0,l.kt)("p",null,"Called when a touch is engaged before ",(0,l.kt)("inlineCode",{parentName:"p"},"onPress"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onpressout"},"onPressOut"),(0,l.kt)("p",null,"Called when a touch is released before ",(0,l.kt)("inlineCode",{parentName:"p"},"onPress"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cardtitle-1"},"Card.Title"),(0,l.kt)("p",null,"None"))}m.isMDXComponent=!0},51274:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>d,metadata:()=>s,toc:()=>u,default:()=>c});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={},d=void 0,s={unversionedId:"components/usage/Card",id:"components/usage/Card",title:"Card",description:"",source:"@site/docs/components/usage/Card.mdx",sourceDirName:"components/usage",slug:"/components/usage/Card",permalink:"/docs/next/components/usage/Card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Card.mdx",tags:[],version:"current",frontMatter:{}},u=[],p={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Card","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%2C%20Image%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Card%2C%20Button%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20users%20%3D%20%5B%0A%7B%0A%20%20name%3A%20'brynn'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2F1H_7AxP0.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'thot%20leader'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages.pexels.com%2Fphotos%2F598745%2Fpexels-photo-598745.jpeg%3Fcrop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26auto%3Dcompress%26cs%3Dtinysrgb'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'jsa'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FbUkmHPKs.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'talhaconcepts'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F4.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'andy%20vitale'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FNY9hnAbp.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'katy%20friedson'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FM%2FMV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE%40._V1_UY256_CR16%2C0%2C172%2C256_AL_.jpg'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20CardsComponentsProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Cards%3A%20React.FunctionComponent%3CCardsComponentsProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3ECARD%20WITH%20DIVIDER%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7Busers.map((u%2C%20i)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20key%3D%7Bi%7D%20style%3D%7Bstyles.user%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.image%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20u.avatar%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.name%7D%3E%7Bu.name%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%20containerStyle%3D%7B%7B%20marginTop%3A%2015%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EFONTS%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h1%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h2%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h2%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h3%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h3%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h4%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h4%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%3ENormal%20Text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EHELLO%20WORLD%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Image%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20padding%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20marginBottom%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20idea%20with%20React%20Native%20Elements%20is%20more%20about%20component%0A%20%20%20%20%20%20%20%20%20%20%20%20structure%20than%20actual%20design.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22code%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23ffffff%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginLeft%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginRight%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22VIEW%20NOW%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Afonts%3A%20%7B%0A%20%20marginBottom%3A%208%2C%0A%7D%2C%0Auser%3A%20%7B%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginBottom%3A%206%2C%0A%7D%2C%0Aimage%3A%20%7B%0A%20%20width%3A%2030%2C%0A%20%20height%3A%2030%2C%0A%20%20marginRight%3A%2010%2C%0A%7D%2C%0Aname%3A%20%7B%0A%20%20fontSize%3A%2016%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Cards%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);