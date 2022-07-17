"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7990],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3410:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s={unversionedId:"goctl/installation",id:"goctl/installation",isDocsHomePage:!1,title:"Golang Installation",description:"Forward",source:"@site/docs/goctl/installation.md",sourceDirName:"goctl",slug:"/goctl/installation",permalink:"/docs/goctl/installation",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/goctl/installation.md",version:"current",lastUpdatedAt:1658060987,formattedLastUpdatedAt:"7/17/2022",frontMatter:{},sidebar:"goctl",previous:{title:"Goctl",permalink:"/docs/goctl/goctl"},next:{title:"API Commands",permalink:"/docs/goctl/api"}},c=[{value:"Forward",id:"forward",children:[]},{value:"Official document",id:"official-document",children:[]},{value:"Install Go on macOS",id:"install-go-on-macos",children:[]},{value:"Install Go on linux",id:"install-go-on-linux",children:[]},{value:"Install Go on windows",id:"install-go-on-windows",children:[]},{value:"More",id:"more",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"forward"},"Forward"),(0,o.kt)("p",null,"To develop a golang program, the installation of its environment must be indispensable. Here we choose to take 1.15.1 as an example."),(0,o.kt)("h2",{id:"official-document"},"Official document"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://golang.google.cn/doc/install"},"https://golang.google.cn/doc/install")),(0,o.kt)("h2",{id:"install-go-on-macos"},"Install Go on macOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://dl.google.com/go/go1.15.1.darwin-amd64.pkg"},"Go for Mac")),(0,o.kt)("li",{parentName:"ul"},"Verify the installation result",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 darwin/amd64\n")))),(0,o.kt)("h2",{id:"install-go-on-linux"},"Install Go on linux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.linux-amd64.tar.gz"},"Go for Linux")),(0,o.kt)("li",{parentName:"ul"},"Unzip the compressed package to ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar -C /usr/local -xzf go1.15.8.linux-amd64.tar.gz\n"))),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/go/bin")," to environment variables",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ $HOME/.profile\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:/usr/local/go/bin\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ source $HOME/.profile\n"))),(0,o.kt)("li",{parentName:"ul"},"Verify the installation result",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 linux/amd64\n")))),(0,o.kt)("h2",{id:"install-go-on-windows"},"Install Go on windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.windows-amd64.msi"},"Go for Windows")),(0,o.kt)("li",{parentName:"ul"},"Verify the installation result",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 windows/amd64\n")))),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("p",null,"For more operating system installation, see ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"https://golang.org/dl/")))}u.isMDXComponent=!0}}]);