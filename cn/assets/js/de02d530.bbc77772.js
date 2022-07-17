"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[303],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(f,o(o({ref:n},l),{},{components:r})):t.createElement(f,o({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9572:function(e,n,r){r.r(n),r.d(n,{default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var t=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={},p={unversionedId:"advance/api-coding",id:"advance/api-coding",isDocsHomePage:!1,title:"api\u6587\u4ef6\u7f16\u5199",description:"\u7f16\u5199user.api\u6587\u4ef6",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/advance/api-coding.md",sourceDirName:"advance",slug:"/advance/api-coding",permalink:"/cn/docs/advance/api-coding",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/advance/api-coding.md",version:"current",lastUpdatedAt:1658060987,formattedLastUpdatedAt:"7/17/2022",frontMatter:{},sidebar:"docs",previous:{title:"model\u751f\u6210",permalink:"/cn/docs/advance/model-gen"},next:{title:"\u4e1a\u52a1\u7f16\u7801",permalink:"/cn/docs/advance/business-coding"}},s=[{value:"\u7f16\u5199user.api\u6587\u4ef6",id:"\u7f16\u5199userapi\u6587\u4ef6",children:[]},{value:"\u751f\u6210api\u670d\u52a1",id:"\u751f\u6210api\u670d\u52a1",children:[{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",children:[]},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",children:[]},{value:"\u65b9\u5f0f\u4e09",id:"\u65b9\u5f0f\u4e09",children:[]}]}],l={toc:s};function u(e){var n=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},l,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7f16\u5199userapi\u6587\u4ef6"},"\u7f16\u5199user.api\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/user/api/user.api  \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type (\n    LoginReq {\n        Username string `json:"username"`\n        Password string `json:"password"`\n    }\n\n    LoginReply {\n        Id           int64 `json:"id"`\n        Name         string `json:"name"`\n        Gender       string `json:"gender"`\n        AccessToken  string `json:"accessToken"`\n        AccessExpire int64 `json:"accessExpire"`\n        RefreshAfter int64 `json:"refreshAfter"`\n    }\n)\n\nservice user-api {\n    @handler login\n    post /user/login (LoginReq) returns (LoginReply)\n}\n')),(0,i.kt)("h2",{id:"\u751f\u6210api\u670d\u52a1"},"\u751f\u6210api\u670d\u52a1"),(0,i.kt)("h3",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd book/service/user/api\n$ goctl api go -api user.api -dir . \nDone.\n")),(0,i.kt)("h3",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"user.api")," \u6587\u4ef6\u53f3\u952e\uff0c\u4f9d\u6b21\u70b9\u51fb\u8fdb\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"New"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"Go Zero"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"Api Code")," \uff0c\u8fdb\u5165\u76ee\u6807\u76ee\u5f55\u9009\u62e9\uff0c\u5373api\u6e90\u7801\u7684\u76ee\u6807\u5b58\u653e\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3auser.api\u6240\u5728\u76ee\u5f55\uff0c\u9009\u62e9\u597d\u76ee\u5f55\u540e\u70b9\u51fbOK\u5373\u53ef\u3002\n",(0,i.kt)("img",{alt:"api\u751f\u6210",src:r(8675).Z}),"\n",(0,i.kt)("img",{alt:"api\u751f\u6210\u76ee\u5f55\u9009\u62e9",src:r(9162).Z})),(0,i.kt)("h3",{id:"\u65b9\u5f0f\u4e09"},"\u65b9\u5f0f\u4e09"),(0,i.kt)("p",null,"\u6253\u5f00user.api\uff0c\u8fdb\u5165\u7f16\u8f91\u533a,\u4f7f\u7528\u5feb\u6377\u952e",(0,i.kt)("inlineCode",{parentName:"p"},"Command+N"),"\uff08for mac OS\uff09\u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"alt+insert"),"\uff08for windows\uff09\uff0c\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"Api Code"),"\uff0c\u540c\u6837\u8fdb\u5165\u76ee\u5f55\u9009\u62e9\u5f39\u7a97\uff0c\u9009\u62e9\u597d\u76ee\u5f55\u540e\u70b9\u51fbOK\u5373\u53ef\u3002"))}u.isMDXComponent=!0},9162:function(e,n,r){n.Z=r.p+"assets/images/goctl-api-select-dea2ee32275510236abe12ecbf44a0f0.png"},8675:function(e,n,r){n.Z=r.p+"assets/images/goctl-api-ec6985aafbeb91f4a37549a8e087dc6f.png"}}]);