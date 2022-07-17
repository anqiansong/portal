"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[500],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7382:function(e,n,t){t.r(n),t.d(n,{default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},p={unversionedId:"prepare/golang-install",id:"prepare/golang-install",isDocsHomePage:!1,title:"Golang\u73af\u5883\u5b89\u88c5",description:"\u524d\u8a00",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/prepare/golang-install.md",sourceDirName:"prepare",slug:"/prepare/golang-install",permalink:"/cn/docs/prepare/golang-install",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/prepare/golang-install.md",version:"current",lastUpdatedAt:1658060987,formattedLastUpdatedAt:"7/17/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u5f00\u53d1\u6d41\u7a0b",permalink:"/cn/docs/prepare/dev-flow"},next:{title:"Go Module\u8bbe\u7f6e",permalink:"/cn/docs/prepare/gomod-config"}},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u5b98\u65b9\u6587\u6863",id:"\u5b98\u65b9\u6587\u6863",children:[]},{value:"mac OS\u5b89\u88c5Go",id:"mac-os\u5b89\u88c5go",children:[]},{value:"linux \u5b89\u88c5Go",id:"linux-\u5b89\u88c5go",children:[]},{value:"Windows\u5b89\u88c5Go",id:"windows\u5b89\u88c5go",children:[]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[]}],u={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u5f00\u53d1golang\u7a0b\u5e8f\uff0c\u5fc5\u7136\u5c11\u4e0d\u4e86\u5bf9\u5176\u73af\u5883\u7684\u5b89\u88c5\uff0c\u6211\u4eec\u8fd9\u91cc\u9009\u62e9\u4ee51.15.1\u4e3a\u4f8b\u3002"),(0,o.kt)("h2",{id:"\u5b98\u65b9\u6587\u6863"},"\u5b98\u65b9\u6587\u6863"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://golang.google.cn/doc/install"},"https://golang.google.cn/doc/install")),(0,o.kt)("h2",{id:"mac-os\u5b89\u88c5go"},"mac OS\u5b89\u88c5Go"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5",(0,o.kt)("a",{parentName:"li",href:"https://dl.google.com/go/go1.15.1.darwin-amd64.pkg"},"Go for Mac")),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\ngo version go1.15.1 darwin/amd64\n")))),(0,o.kt)("h2",{id:"linux-\u5b89\u88c5go"},"linux \u5b89\u88c5Go"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.linux-amd64.tar.gz"},"Go for Linux")),(0,o.kt)("li",{parentName:"ul"},"\u89e3\u538b\u538b\u7f29\u5305\u81f3",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar -C /usr/local -xzf go1.15.8.linux-amd64.tar.gz\n"))),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/go/bin"),"\u5230\u73af\u5883\u53d8\u91cf",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ $HOME/.profile\n$ export PATH=$PATH:/usr/local/go/bin\n$ source $HOME/.profile\n"))),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\ngo version go1.15.1 linux/amd64\n")))),(0,o.kt)("h2",{id:"windows\u5b89\u88c5go"},"Windows\u5b89\u88c5Go"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.windows-amd64.msi"},"Go for Windows")),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\ngo version go1.15.1 windows/amd64\n")))),(0,o.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,o.kt)("p",null,"\u66f4\u591a\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"https://golang.org/dl/")))}s.isMDXComponent=!0}}]);