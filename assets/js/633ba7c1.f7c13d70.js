"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[169,2156],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?l.createElement(g,i(i({ref:t},p),{},{components:a})):l.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var d=2;d<o;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294);const n=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(87462),n=a(67294),o=a(72389),i=a(29548),r=a(86010);const s="tabItem_LplD";function d(e){var t,a,o,d=e.lazy,p=e.block,u=e.defaultValue,c=e.values,m=e.groupId,g=e.className,D=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:D.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),A=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(A.length>0)throw new Error('Docusaurus error: Duplicate values "'+A.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(t=null!=u?u:null==(a=D.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=D[0])?void 0:o.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),v=b.tabGroupChoices,N=b.setTabGroupChoices,f=(0,n.useState)(h),y=f[0],C=f[1],B=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=v[m];null!=T&&T!==y&&k.some((function(e){return e.value===T}))&&C(T)}var P=function(e){var t=e.currentTarget,a=B.indexOf(t),l=k[a].value;l!==y&&(E(t),C(l),null!=m&&N(m,l))},F=function(e){var t,a=null;switch(e.key){case"ArrowRight":var l=B.indexOf(e.currentTarget)+1;a=B[l]||B[0];break;case"ArrowLeft":var n=B.indexOf(e.currentTarget)-1;a=B[n]||B[B.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},g)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return B.push(e)},onKeyDown:F,onFocus:P,onClick:P},o,{className:(0,r.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),d?(0,n.cloneElement)(D.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},D.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function p(e){var t=(0,o.Z)();return n.createElement(d,(0,l.Z)({key:String(t)},e))}},37308:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>m});var l=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(57394),r=(a(34738),a(9877),a(58215),["components"]),s={id:"dialog",title:"Dialog"},d=void 0,p={unversionedId:"components/dialog",id:"components/dialog",title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",source:"@site/docs/components/Dialog.mdx",sourceDirName:"components",slug:"/components/dialog",permalink:"/docs/next/components/dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Dialog.mdx",tags:[],version:"current",frontMatter:{id:"dialog",title:"Dialog"}},u=[{value:"Components",id:"components",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Dialog",id:"dialog",children:[],level:3},{value:"Dialog.Actions",id:"dialogactions",children:[],level:3},{value:"Dialog.Button",id:"dialogbutton",children:[],level:3},{value:"Dialog.Loading",id:"dialogloading",children:[],level:3},{value:"Dialog.Title",id:"dialogtitle",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Dialog",id:"dialog-1",children:[{value:"children",id:"children",children:[],level:4},{value:"onLongPress",id:"onlongpress",children:[],level:4},{value:"onPressIn",id:"onpressin",children:[],level:4},{value:"onPressOut",id:"onpressout",children:[],level:4},{value:"overlayStyle",id:"overlaystyle",children:[],level:4},{value:"pressableProps",id:"pressableprops",children:[],level:4}],level:3},{value:"Dialog.Actions",id:"dialogactions-1",children:[{value:"children",id:"children-1",children:[],level:4}],level:3},{value:"Dialog.Button",id:"dialogbutton-1",children:[],level:3},{value:"Dialog.Loading",id:"dialogloading-1",children:[{value:"loadingProps",id:"loadingprops",children:[],level:4},{value:"loadingStyle",id:"loadingstyle",children:[],level:4}],level:3},{value:"Dialog.Title",id:"dialogtitle-1",children:[{value:"title",id:"title",children:[],level:4},{value:"titleProps",id:"titleprops",children:[],level:4},{value:"titleStyle",id:"titlestyle",children:[],level:4}],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."),(0,o.kt)("p",null,"You can wrap any component with a simple Dialog component to display quick information to the user."),(0,o.kt)("p",null,"Also receives all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/overlay#props"},"Overlay")," props except ",(0,o.kt)("inlineCode",{parentName:"p"},"fullscreen"),"."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dialogactions"},"Dialog.Actions"),"\nDefine Dialog Actions using this component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dialogbutton"},"Dialog.Button"),"\nThis is used to add a button to the Dialog.\nReceives all ",(0,o.kt)("a",{parentName:"li",href:"button#props"},"Button")," props."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dialogloading"},"Dialog.Loading"),(0,o.kt)("inlineCode",{parentName:"li"},"DialogLoader")," allows adding loader to the Dialog. Loader is simply ActivityIndicator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dialogtitle"},"Dialog.Title"),(0,o.kt)("inlineCode",{parentName:"li"},"DialogTitle")," allows you to add title to the Dialog.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.default,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"dialog"},"Dialog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#children"},"children")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onlongpress"},"onLongPress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onpressin"},"onPressIn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#onpressout"},"onPressOut")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overlaystyle"},"overlayStyle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps"))),(0,o.kt)("h3",{id:"dialogactions"},"Dialog.Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#children"},"children"))),(0,o.kt)("h3",{id:"dialogbutton"},"Dialog.Button"),(0,o.kt)("p",null,"None"),(0,o.kt)("h3",{id:"dialogloading"},"Dialog.Loading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#loadingprops"},"loadingProps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#loadingstyle"},"loadingStyle"))),(0,o.kt)("h3",{id:"dialogtitle"},"Dialog.Title"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#title"},"title")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#titleprops"},"titleProps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#titlestyle"},"titleStyle"))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"dialog-1"},"Dialog"),(0,o.kt)("h4",{id:"children"},"children"),(0,o.kt)("p",null,"Add Enclosed components."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"onlongpress"},"onLongPress"),(0,o.kt)("p",null,"Called when a long-tap gesture is detected."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"onpressin"},"onPressIn"),(0,o.kt)("p",null,"Called when a touch is engaged before ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"onpressout"},"onPressOut"),(0,o.kt)("p",null,"Called when a touch is released before ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"overlaystyle"},"overlayStyle"),(0,o.kt)("p",null,"Add additional styling to the internal Overlay component."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"dialogactions-1"},"Dialog.Actions"),(0,o.kt)("h4",{id:"children-1"},"children"),(0,o.kt)("p",null,"Add Enclosed components as an action to the dialog."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"dialogbutton-1"},"Dialog.Button"),(0,o.kt)("p",null,"None"),(0,o.kt)("h3",{id:"dialogloading-1"},"Dialog.Loading"),(0,o.kt)("h4",{id:"loadingprops"},"loadingProps"),(0,o.kt)("p",null,"Add additional props for ActivityIndicator component"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ActivityIndicatorProps"),(0,o.kt)("td",{parentName:"tr",align:null},"{ size: 'large' }")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"loadingstyle"},"loadingStyle"),(0,o.kt)("p",null,"Add additional styling for loading component."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"dialogtitle-1"},"Dialog.Title"),(0,o.kt)("h4",{id:"title"},"title"),(0,o.kt)("p",null,"Add Dialog title."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"titleprops"},"titleProps"),(0,o.kt)("p",null,"Add additional props for Text component."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"titlestyle"},"titleStyle"),(0,o.kt)("p",null,"Add additional styling for title component."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null))}m.isMDXComponent=!0},57394:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>c});var l=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],r={},s=void 0,d={unversionedId:"components/usage/Dialog",id:"components/usage/Dialog",title:"Dialog",description:"\x3c!-- To show the guide to configure the Dialog Component to a project.",source:"@site/docs/components/usage/Dialog.mdx",sourceDirName:"components/usage",slug:"/components/usage/Dialog",permalink:"/docs/next/components/usage/Dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Dialog.mdx",tags:[],version:"current",frontMatter:{}},p=[],u={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,o.kt)("p",{parentName:"blockquote"},"You ",(0,o.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,o.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,o.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,o.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Dialog ModalComponent={Modal} ... />\n...\n")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Dialog","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%0AButton%2C%0ADialog%2C%0ACheckBox%2C%0AListItem%2C%0AAvatar%2C%0A%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20DialogComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Dialogs%3A%20React.FunctionComponent%3CDialogComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible1%2C%20setVisible1%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible2%2C%20setVisible2%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible3%2C%20setVisible3%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible4%2C%20setVisible4%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible5%2C%20setVisible5%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bvisible6%2C%20setVisible6%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(1)%3B%0A%0Aconst%20toggleDialog1%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible1(!visible1)%3B%0A%7D%3B%0Aconst%20toggleDialog2%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible2(!visible2)%3B%0A%7D%3B%0Aconst%20toggleDialog3%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible3(!visible3)%3B%0A%7D%3B%0Aconst%20toggleDialog4%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible4(!visible4)%3B%0A%7D%3B%0Aconst%20toggleDialog5%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible5(!visible5)%3B%0A%7D%3B%0Aconst%20toggleDialog6%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible6(!visible6)%3B%0A%7D%3B%0A%0Aconst%20userlist%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amy%20Farha'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FXdLjsJX_.jpg'%2C%0A%20%20%20%20subtitle%3A%20'amy.farha%40gmail.com'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Chris%20Jackson'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FKtCFjlD4.jpg'%2C%0A%20%20%20%20subtitle%3A%20'cjackson%40gmail.com'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amanda%20Martin'%2C%0A%20%20%20%20avatar_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498529605908-f357a9af7bf5%3Fixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26s%3D047fade70e80ebb22ac8f09c04872c40'%2C%0A%20%20%20%20subtitle%3A%20'amandam%40gmail.com'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Simple%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Mutli%20Action%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Loading%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog3%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Buttonless%20Dialog%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%201%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%202%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible1%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible2%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%201%22%20onPress%3D%7B()%20%3D%3E%20console.log('Primary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%202%22%20onPress%3D%7B()%20%3D%3E%20console.log('Secondary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%20isVisible%3D%7Bvisible3%7D%20onBackdropPress%3D%7BtoggleDialog3%7D%3E%0A%20%20%20%20%20%20%3CDialog.Loading%20%2F%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible4%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible5%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Select%20Preference%22%2F%3E%0A%20%20%20%20%20%20%7B%5B'Option%201'%2C%20'Option%202'%2C%20'Option%203'%5D.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7Bl%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'white'%2C%20borderWidth%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20%20%20%20%20checked%3D%7Bchecked%20%3D%3D%3D%20i%20%2B%201%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setChecked(i%20%2B%201)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20))%7D%0A%0A%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%0A%20%20%20%20%20%20%20%20%20%20title%3D%22CONFIRM%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60Option%20%24%7Bchecked%7D%20was%20selected!%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20toggleDialog5()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22CANCEL%22%20onPress%3D%7BtoggleDialog5%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3CDialog%0A%20%20%20%20%20%20isVisible%3D%7Bvisible6%7D%0A%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Choose%20Account%22%2F%3E%0A%20%20%20%20%20%20%7Buserlist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%20-10%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%20rounded%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FDialog%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20borderRadius%3A%206%2C%0A%20%20width%3A%20220%2C%0A%20%20margin%3A%2020%2C%0A%7D%2C%0AbuttonContainer%3A%20%7B%0A%20%20margin%3A%2020%2C%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'center'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Dialogs%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);