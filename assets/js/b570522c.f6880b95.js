"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6949],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return g}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(o),g=r,f=m["".concat(i,".").concat(g)]||m[g]||u[g]||l;return o?n.createElement(f,c(c({ref:t},p),{},{components:o})):n.createElement(f,c({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,c=new Array(l);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<l;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1235:function(e,t,o){o.r(t),o.d(t,{default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var n=o(7462),r=o(3366),l=(o(7294),o(3905)),c=["components"],a={},i={unversionedId:"goctl/completion",id:"goctl/completion",isDocsHomePage:!1,title:"Goctl Complation",description:"Goctl Complation only supports unix-like operating systems",source:"@site/docs/goctl/completion.md",sourceDirName:"goctl",slug:"/goctl/completion",permalink:"/docs/goctl/completion",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/goctl/completion.md",version:"current",lastUpdatedAt:1652280113,formattedLastUpdatedAt:"5/11/2022",frontMatter:{},sidebar:"goctl",previous:{title:"Goctl Commands",permalink:"/docs/goctl/commands"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Generate autocomplete file",id:"generate-autocomplete-file",children:[]},{value:"shell configuration",id:"shell-configuration",children:[]},{value:"Demo effect",id:"demo-effect",children:[]}],p={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Goctl Complation only supports unix-like operating systems"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl completion -h\nNAME:\n   goctl completion - generation completion script, it only works for unix-like OS\n\nUSAGE:\n   goctl completion [command options] [arguments...]\n\nOPTIONS:\n   --name value, -n value  the filename of auto complete script, default is [goctl_autocomplete]\n")),(0,l.kt)("h2",{id:"generate-autocomplete-file"},"Generate autocomplete file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl completion\nGenerate autocomplete successfully!\nExecute the following script to set up the shell.\necho PROG=goctl source /Users/keson/.goctl/.auto_complete/zsh/goctl_autocomplete >> ~/.zshrc && source ~/.zshrc\nor\necho PROG=goctl source /Users/keson/.goctl/.auto_complete/bash/goctl_autocomplete >> ~/.bashrc && source ~/.bashrc\n")),(0,l.kt)("h2",{id:"shell-configuration"},"shell configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"zsh")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo PROG=goctl source /Users/keson/.goctl/.auto_complete/zsh/goctl_autocomplete >> ~/.zshrc && source ~/.zshrc\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bash")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo PROG=goctl source /Users/keson/.goctl/.auto_complete/bash/goctl_autocomplete >> ~/.bashrc && source ~/.bashrc\n")),(0,l.kt)("h2",{id:"demo-effect"},"Demo effect"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"tab")," key to bring up the autocomplete prompt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl\napi -- generate api-related files\nbug -- report a bug\ncompletion -- generates a completion script, which is only available for unix-like operating systems\ndocker -- generates a Docker file\nhelp h -- displays a list of commands or help information for a command\nkube -- generates kubernetes files\nmigrate -- migrate from tal-tech to zeromicro\nmodel -- Generate model code\nrpc -- generate rpc code\ntemplate -- Template operations\nupgrade -- upgrade goctl to the latest version\n")))}u.isMDXComponent=!0}}]);