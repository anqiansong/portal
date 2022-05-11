"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8076],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},g=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?o.createElement(d,p(p({ref:t},g),{},{components:n})):o.createElement(d,p({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},617:function(e,t,n){n.r(t),n.d(t,{default:function(){return s},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),p=["components"],c={},l={unversionedId:"prepare/protoc-install",id:"prepare/protoc-install",isDocsHomePage:!1,title:"protoc & protoc-gen-go\u5b89\u88c5",description:"\u524d\u8a00",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/prepare/protoc-install.md",sourceDirName:"prepare",slug:"/prepare/protoc-install",permalink:"/cn/docs/prepare/protoc-install",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/prepare/protoc-install.md",version:"current",lastUpdatedAt:1652280113,formattedLastUpdatedAt:"5/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"Goctl\u5b89\u88c5",permalink:"/cn/docs/prepare/goctl-install"},next:{title:"\u5176\u4ed6",permalink:"/cn/docs/prepare/prepare-other"}},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u65b9\u5f0f\u4e00\uff1agoctl\u4e00\u952e\u5b89\u88c5",id:"\u65b9\u5f0f\u4e00goctl\u4e00\u952e\u5b89\u88c5",children:[]},{value:"\u65b9\u5f0f\u4e8c\uff1a Homebrew\uff08macOS\uff09",id:"\u65b9\u5f0f\u4e8c-homebrewmacos",children:[]},{value:"\u65b9\u5f0f\u4e09\uff1a \u6e90\u6587\u4ef6\u5b89\u88c5",id:"\u65b9\u5f0f\u4e09-\u6e90\u6587\u4ef6\u5b89\u88c5",children:[{value:"protoc\u5b89\u88c5",id:"protoc\u5b89\u88c5",children:[]},{value:"protoc-gen-go/protoc-gen-go-grpc \u5b89\u88c5",id:"protoc-gen-goprotoc-gen-go-grpc-\u5b89\u88c5",children:[]}]}],g={toc:i};function s(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"protoc\u662f\u4e00\u6b3e\u7528C++\u7f16\u5199\u7684\u5de5\u5177\uff0c\u5176\u53ef\u4ee5\u5c06proto\u6587\u4ef6\u7ffb\u8bd1\u4e3a\u6307\u5b9a\u8bed\u8a00\u7684\u4ee3\u7801\u3002\u5728go-zero\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u6211\u4eec\u91c7\u7528grpc\u8fdb\u884c\u670d\u52a1\u95f4\u7684\u901a\u4fe1\uff0c\u800cgrpc\u7684\u7f16\u5199\u5c31\u9700\u8981\u7528\u5230protoc\u548c\u7ffb\u8bd1\u6210go\u8bed\u8a00rpc stub\u4ee3\u7801\u7684\u63d2\u4ef6protoc-gen-go\u3002"),(0,a.kt)("h2",{id:"\u65b9\u5f0f\u4e00goctl\u4e00\u952e\u5b89\u88c5"},"\u65b9\u5f0f\u4e00\uff1agoctl\u4e00\u952e\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ goctl env check -i -f --verbose                                 \n[goctl-env]: preparing to check env\n\n[goctl-env]: looking up "protoc"\n[goctl-env]: "protoc" is not found in PATH\n[goctl-env]: preparing to install "protoc"\n"protoc" installed from cache\n[goctl-env]: "protoc" is already installed in "/Users/keson/go/bin/protoc"\n\n[goctl-env]: looking up "protoc-gen-go"\n[goctl-env]: "protoc-gen-go" is not found in PATH\n[goctl-env]: preparing to install "protoc-gen-go"\n"protoc-gen-go" installed from cache\n[goctl-env]: "protoc-gen-go" is already installed in "/Users/keson/go/bin/protoc-gen-go"\n\n[goctl-env]: looking up "protoc-gen-go-grpc"\n[goctl-env]: "protoc-gen-go-grpc" is not found in PATH\n[goctl-env]: preparing to install "protoc-gen-go-grpc"\n"protoc-gen-go-grpc" installed from cache\n[goctl-env]: "protoc-gen-go-grpc" is already installed in "/Users/keson/go/bin/protoc-gen-go-grpc"\n\n[goctl-env]: congratulations! your goctl environment is ready!\n')),(0,a.kt)("h2",{id:"\u65b9\u5f0f\u4e8c-homebrewmacos"},"\u65b9\u5f0f\u4e8c\uff1a Homebrew\uff08macOS\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install protobuf protoc-gen-go protoc-gen-go-grpc\n$ protoc --version\nlibprotoc x.x.x\n")),(0,a.kt)("h2",{id:"\u65b9\u5f0f\u4e09-\u6e90\u6587\u4ef6\u5b89\u88c5"},"\u65b9\u5f0f\u4e09\uff1a \u6e90\u6587\u4ef6\u5b89\u88c5"),(0,a.kt)("h3",{id:"protoc\u5b89\u88c5"},"protoc\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fdb\u5165",(0,a.kt)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/releases"},"protobuf release")," \u9875\u9762\uff0c\u9009\u62e9\u9002\u5408\u81ea\u5df1\u64cd\u4f5c\u7cfb\u7edf\u7684\u538b\u7f29\u5305\u6587\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b",(0,a.kt)("inlineCode",{parentName:"p"},"protoc-x.x.x-osx-x86_64.zip"),"\u5e76\u8fdb\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"protoc-x.x.x-osx-x86_64")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd protoc-x.x.x-osx-x86_64/bin\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u542f\u52a8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"protoc"),"\u4e8c\u8fdb\u5236\u6587\u4ef6\u79fb\u52a8\u5230\u88ab\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u7684\u4efb\u610fpath\u4e0b\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"\uff0c\u8fd9\u91cc\u4e0d\u5efa\u8bae\u76f4\u63a5\u5c06\u5176\u548c\u7cfb\u7edf\u7684\u4ee5\u4e0bpath\u653e\u5728\u4e00\u8d77\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mv protoc $GOPATH/bin\n")),(0,a.kt)("p",{parentName:"li"},"  :::tip\n$GOPATH\u4e3a\u4f60\u672c\u673a\u7684\u5b9e\u9645\u6587\u4ef6\u5939\u5730\u5740\n:::")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoc --version\nlibprotoc x.x.x\n")))),(0,a.kt)("h3",{id:"protoc-gen-goprotoc-gen-go-grpc-\u5b89\u88c5"},"protoc-gen-go/protoc-gen-go-grpc \u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"li"},"protoc-gen-go"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ go install google.golang.org/protobuf/cmd/protoc-gen-go@latest\n$ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest\n")))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"protoc-gen-go\u5b89\u88c5\u5931\u8d25\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"../faq/error"},"\u5e38\u89c1\u9519\u8bef\u5904\u7406")))))}s.isMDXComponent=!0}}]);