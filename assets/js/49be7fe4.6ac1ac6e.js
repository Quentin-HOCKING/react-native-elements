"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4749],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Google Summer of Code'21 Arpit Bhalla",authors:["arpitBhalla"]},s=void 0,c={permalink:"/blog/2021/08/23/google-summer-of-code-arpitBhalla",source:"@site/blog/2021-08-23-google-summer-of-code-arpitBhalla.md",title:"Google Summer of Code'21 Arpit Bhalla",description:"\ud83d\udcd1 Project Details",date:"2021-08-23T00:00:00.000Z",formattedDate:"August 23, 2021",tags:[],readingTime:3.6,truncated:!1,authors:[{name:"Arpit Bhalla",title:"GSoC'21 fellow",url:"https://github.com/arpitbhalla",email:"arpitbhallay@proton.me",twitter:"arpitbhalla_",imageURL:"https://github.com/arpitbhalla.png",key:"arpitBhalla"}],frontMatter:{title:"Google Summer of Code'21 Arpit Bhalla",authors:["arpitBhalla"]},prevItem:{title:"React Native Elements 4.0",permalink:"/blog/2022/05/15/rneui-migration-guide"},nextItem:{title:"Google Summer of Code'21 Khushal Agarwal",permalink:"/blog/2021/08/18/google-summer-of-code-khushal-agarwal"}},m={authorsImageUrls:[void 0]},p=[{value:"\ud83d\udcd1 Project Details",id:"-project-details",level:2},{value:"\ud83d\ude80 Overview",id:"-overview",level:2},{value:"\ud83d\ude98 Work Abstract",id:"-work-abstract",level:2},{value:"Refactor components to use <code>Pressable</code> API (#3170)",id:"refactor-components-to-use-pressable-api-3170",level:3},{value:"Migrate Tests to React Native Testing Library (#3170)",id:"migrate-tests-to-react-native-testing-library-3170",level:3},{value:"Class to Functions Migration",id:"class-to-functions-migration",level:3},{value:"\ud83c\udf8a My Contributions",id:"-my-contributions",level:2},{value:"New components",id:"new-components",level:3},{value:"Core Improvements",id:"core-improvements",level:3},{value:"Documentation redesigned (#3108)",id:"documentation-redesigned-3108",level:3},{value:"Snack player",id:"snack-player",level:3},{value:"VS Code extension",id:"vs-code-extension",level:3},{value:"\ud83d\udea7 What&#39;s next?",id:"-whats-next",level:2},{value:"New <code>Stack</code> Component",id:"new-stack-component",level:3}],u={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/arpitBhalla/google-summer-of-code/master/assets//header.png"})),(0,o.kt)("h2",{id:"-project-details"},"\ud83d\udcd1 Project Details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Organization: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements"},"React Native Elements"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Project: ",(0,o.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/projects/#5514659471294464"},"Migrating Hooks, Tests & APIs"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mentors: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flyingcircle"},"Jeremy Hamilton"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranshuchittora"},"Pranshu Chittora"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dhruvdutt"},"Dhruvdutt"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Student: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arpitBhalla"},"Arpit Bhalla")))),(0,o.kt)("h2",{id:"-overview"},"\ud83d\ude80 Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Google Summer of Code 2021")," has been a fantastic and cheerful learning experience for me over the past few months. I have learned a lot from the community, especially how to organize commits and write readable code. ",(0,o.kt)("strong",{parentName:"p"},"React Native Elements")," is an amazing community to work with, as mentors are really helpful and experienced. I had started contributing to React Native Elements from March 2021 and till now, I have 40+ commits (10,803 additions and 13,826 deletions) merged. Over the past few months, I had great exposure writing maintainable code, communicating with the mentors, etc. I had completed some of my work in the coding period started as some issues mentioned in my proposal had a high priority for the release."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/arpitBhalla/google-summer-of-code/master/assets//contri.png",width:"900"})),(0,o.kt)("h2",{id:"-work-abstract"},"\ud83d\ude98 Work Abstract"),(0,o.kt)("h3",{id:"refactor-components-to-use-pressable-api-3170"},"Refactor components to use ",(0,o.kt)("inlineCode",{parentName:"h3"},"Pressable")," API ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/react-native-elements/react-native-elements/pull/3170"},"(#3170)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," is preferred to ",(0,o.kt)("inlineCode",{parentName:"p"},"Touchable")," components according to React Native official docs. ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," component offers a more extensive and future-proof way of handling the touch-based inputs.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Touchable")," Component:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It includes the styles and effects that do not meet the platform interactions."),(0,o.kt)("li",{parentName:"ul"},"It does not support high-quality interaction experience on different platforms."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," Component:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It detects various types of interactions."),(0,o.kt)("li",{parentName:"ul"},"Its API provides direct access to the current state of interaction."),(0,o.kt)("li",{parentName:"ul"},"Its capabilities could be extended to include hover, blur, focus, and more.\n",(0,o.kt)("inlineCode",{parentName:"li"},"Pressable")," contains a lot of new props and cool features such as:\ndelayLongPress: Duration in milliseconds from onPressIn by the time onLongPress is called.")))),(0,o.kt)("p",null,"Reference : ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@mahyarmohammadi/react-native-pressable-vs-touchable-5fec6b332f15"},"Pressable vs. Touchable in React Native")),(0,o.kt)("h3",{id:"migrate-tests-to-react-native-testing-library-3170"},"Migrate Tests to React Native Testing Library ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/react-native-elements/react-native-elements/pull/3170"},"(#3170)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rather than tests focusing on the implementation (Enzyme), tests are more focused on user behavior (react-native-testing-library).")),(0,o.kt)("p",null,"Enzyme allows us to access the internal workings of your components. You can read and set the state, and we can mock children to make tests run faster. On the other hand, RN testing-library doesn't give us any access to the implementation details. It renders the components and provides utility methods to interact with them. The idea is that you should communicate with our application in the same way a user would. So rather than set the state of a component we reproduce the actions a user would do to reach that state."),(0,o.kt)("h3",{id:"class-to-functions-migration"},"Class to Functions Migration"),(0,o.kt)("p",null,"Some components like ",(0,o.kt)("strong",{parentName:"p"},"Image, ToolTip")," which further include SearchBar android & SearchBar iOS were Class Components and the code was messy, These are migrated to Functional Components and added hooks like, useState, useEffect, useCallBack, which would increase performance."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using classes")," - We need to describe lifecycle methods, state of the component, component\u2019s methods that will change our state or work with the store. Also, we need to bind all the methods for the component instance. The component becomes large, and it becomes more difficult to read each time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using hooks")," - We can get the state of the component so that it can be easily tested and reused. Now we can facilitate the exchange of links between components or our entire application - using hooks. Hooks allow you to encapsulate logic without affecting the hierarchy of components.")),(0,o.kt)("h2",{id:"-my-contributions"},"\ud83c\udf8a My Contributions"),(0,o.kt)("p",null,"You can find all my contributions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/react-native-elements/pulls?q=is%3Apr+author%3AarpitBhalla+sort%3Aupdated-desc+is%3Amerged"},"here")),(0,o.kt)("h3",{id:"new-components"},"New components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2867"},"LinearProgress (#2867)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2885"},"FAB (#2885)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2896"},"Speed dial (#2896)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2919"},"Tab & TabItem (#2919)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements-universe/pull/1"},"CircularSlider (#1)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2983"},"TabView & TabView.Item (#2983)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2953"},"ListItem Accordion (#2953)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2982"},"ListItem Swipeable (#2982)"))),(0,o.kt)("h3",{id:"core-improvements"},"Core Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/3101"},"Migrate build to Github Actions (#3101)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2930"},"Strict TypeScript (#2930)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-elements/react-native-elements/pull/2834"},"Removed ts-ignore and transformed to Functional Component (#2834)"))),(0,o.kt)("h3",{id:"documentation-redesigned-3108"},"Documentation redesigned ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/react-native-elements/react-native-elements/pull/3108"},"(#3108)")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/arpitBhalla/google-summer-of-code/master/assets//website.png"})),(0,o.kt)("h3",{id:"snack-player"},"Snack player"),(0,o.kt)("p",null,"It helps user to test the component from documentation"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/arpitBhalla/google-summer-of-code/master/assets//snack.png"})),(0,o.kt)("h3",{id:"vs-code-extension"},"VS Code extension"),(0,o.kt)("p",null,"Auto imports components and auto complete syntax with component preview for React Native Elements."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/arpitBhalla/google-summer-of-code/master/assets//vscode.png"})),(0,o.kt)("h2",{id:"-whats-next"},"\ud83d\udea7 What's next?"),(0,o.kt)("h3",{id:"new-stack-component"},"New ",(0,o.kt)("inlineCode",{parentName:"h3"},"Stack")," Component"),(0,o.kt)("p",null,"Stack is concerned with one-dimensional layouts. ",(0,o.kt)("inlineCode",{parentName:"p"},"This is not yet in the priority")," but it would help developers."),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Stack spacing={2}>\n  <Item>Item 1</Item>\n  <Item>Item 2</Item>\n  <Item>Item 3</Item>\n</Stack>\n")))}h.isMDXComponent=!0}}]);