"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7106],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(t),k=r,m=s["".concat(c,".").concat(k)]||s[k]||u[k]||i;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5380:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"executors",authors:"kevwan"},c={unversionedId:"blog/tool/executors",id:"blog/tool/executors",isDocsHomePage:!1,title:"executors",description:"\u5728 go-zero \u4e2d\uff0cexecutors \u5145\u5f53\u4efb\u52a1\u6c60\uff0c\u505a\u591a\u4efb\u52a1\u7f13\u51b2\uff0c\u9002\u7528\u4e8e\u505a\u6279\u91cf\u5904\u7406\u7684\u4efb\u52a1\u3002\u5982\uff1aclickhouse \u5927\u6279\u91cf insert\uff0csql batch insert\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u5728 go-queue \u4e2d\u770b\u5230 executors \u3010\u5728 queue \u91cc\u9762\u4f7f\u7528\u7684\u662f ChunkExecutor \uff0c\u9650\u5b9a\u4efb\u52a1\u63d0\u4ea4\u5b57\u8282\u5927\u5c0f\u3011\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/blog/tool/executors.md",sourceDirName:"blog/tool",slug:"/blog/tool/executors",permalink:"/cn/docs/blog/tool/executors",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/blog/tool/executors.md",version:"current",lastUpdatedAt:1652280113,formattedLastUpdatedAt:"5/11/2022",frontMatter:{title:"executors",authors:"kevwan"},sidebar:"blog",previous:{title:"\u901a\u8fc7 collection.Cache \u8fdb\u884c\u7f13\u5b58",permalink:"/cn/docs/blog/cache/collection"},next:{title:"\u9ad8\u6548\u7684\u5173\u952e\u8bcd\u66ff\u6362\u548c\u654f\u611f\u8bcd\u8fc7\u6ee4\u5de5\u5177",permalink:"/cn/docs/blog/tool/keywords"}},p=[{value:"\u63a5\u53e3\u8bbe\u8ba1",id:"\u63a5\u53e3\u8bbe\u8ba1",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",children:[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[]},{value:"Add()",id:"add",children:[]},{value:"backgroundFlush()",id:"backgroundflush",children:[]},{value:"Wait()",id:"wait",children:[]}]},{value:"\u601d\u8003",id:"\u601d\u8003",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],d={toc:p};function u(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," \u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"executors")," \u5145\u5f53\u4efb\u52a1\u6c60\uff0c\u505a\u591a\u4efb\u52a1\u7f13\u51b2\uff0c\u9002\u7528\u4e8e\u505a\u6279\u91cf\u5904\u7406\u7684\u4efb\u52a1\u3002\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse")," \u5927\u6279\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"insert"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"sql batch insert"),"\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"go-queue")," \u4e2d\u770b\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"executors")," \u3010\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"queue")," \u91cc\u9762\u4f7f\u7528\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"ChunkExecutor")," \uff0c\u9650\u5b9a\u4efb\u52a1\u63d0\u4ea4\u5b57\u8282\u5927\u5c0f\u3011\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u5f53\u4f60\u5b58\u5728\u4ee5\u4e0b\u9700\u6c42\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6279\u91cf\u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("li",{parentName:"ul"},"\u7f13\u51b2\u4e00\u90e8\u5206\u4efb\u52a1\uff0c\u60f0\u6027\u63d0\u4ea4"),(0,i.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u4efb\u52a1\u63d0\u4ea4")),(0,i.kt)("p",null,"\u5177\u4f53\u89e3\u91ca\u4e4b\u524d\uff0c\u5148\u7ed9\u4e00\u4e2a\u5927\u81f4\u7684\u6982\u89c8\u56fe\uff1a\n",(0,i.kt)("img",{alt:"c42c34e8d33d48ec8a63e56feeae882a",src:t(4526).Z})),(0,i.kt)("h2",{id:"\u63a5\u53e3\u8bbe\u8ba1"},"\u63a5\u53e3\u8bbe\u8ba1"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"executors")," \u5305\u4e0b\uff0c\u6709\u5982\u4e0b\u51e0\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"executor")," \uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Margin value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bulkexecutor")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fbe\u5230 ",(0,i.kt)("inlineCode",{parentName:"td"},"maxTasks")," \u3010\u6700\u5927\u4efb\u52a1\u6570\u3011 \u63d0\u4ea4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"chunkexecutor")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fbe\u5230 ",(0,i.kt)("inlineCode",{parentName:"td"},"maxChunkSize"),"\u3010\u6700\u5927\u5b57\u8282\u6570\u3011\u63d0\u4ea4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"periodicalexecutor")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"basic executor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"delayexecutor")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u6267\u884c\u4f20\u5165\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"fn()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lessexecutor")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"\u4f60\u4f1a\u770b\u5230\u9664\u4e86\u6709\u7279\u6b8a\u529f\u80fd\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"delay"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"less")," \uff0c\u5176\u4f59 3 \u4e2a\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"executor")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," \u7684\u7ec4\u5408\u8bbe\u8ba1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func NewBulkExecutor(execute Execute, opts ...BulkOption) *BulkExecutor {\n    // \u9009\u9879\u6a21\u5f0f\uff1a\u5728 go-zero \u4e2d\u591a\u5904\u51fa\u73b0\u3002\u5728\u591a\u914d\u7f6e\u4e0b\uff0c\u6bd4\u8f83\u597d\u7684\u8bbe\u8ba1\u601d\u8def\n    // https://halls-of-valhalla.org/beta/articles/functional-options-pattern-in-go,54/\n    options := newBulkOptions()\n    for _, opt := range opts {\n        opt(&options)\n    }\n    // 1. task container: [execute \u771f\u6b63\u505a\u6267\u884c\u7684\u51fd\u6570] [maxTasks \u6267\u884c\u4e34\u754c\u70b9]\n    container := &bulkContainer{\n        execute:  execute,\n        maxTasks: options.cachedTasks,\n    }\n    // 2. \u53ef\u4ee5\u770b\u51fa bulkexecutor \u5e95\u5c42\u4f9d\u8d56 periodicalexecutor\n    executor := &BulkExecutor{\n        executor:  NewPeriodicalExecutor(options.flushInterval, container),\n        container: container,\n    }\n\n    return executor\n}\n")),(0,i.kt)("p",null,"\u800c\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"container"),"\u662f\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"interface"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"TaskContainer interface {\n    // \u628a task \u52a0\u5165 container\n    AddTask(task interface{}) bool\n    // \u5b9e\u9645\u4e0a\u662f\u53bb\u6267\u884c\u4f20\u5165\u7684 execute func()\n    Execute(tasks interface{})\n    // \u8fbe\u5230\u4e34\u754c\u503c\uff0c\u79fb\u9664 container \u4e2d\u5168\u90e8\u7684 task\uff0c\u901a\u8fc7 channel \u4f20\u9012\u5230 execute func() \u6267\u884c\n    RemoveAll() interface{}\n}\n")),(0,i.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bulkexecutor"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"periodicalexecutor")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"bulkContainer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chunkexecutor"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"periodicalexecutor")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"chunkContainer"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6240\u4ee5\u4f60\u60f3\u5b8c\u6210\u81ea\u5df1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"executor"),"\uff0c\u53ef\u4ee5\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," \u7684\u8fd9 3 \u4e2a\u63a5\u53e3\uff0c\u518d\u7ed3\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"periodicalexecutor")," \u5c31\u884c"))),(0,i.kt)("p",null,"\u6240\u4ee5\u56de\u5230\ud83d\udc46\u90a3\u5f20\u56fe\uff0c\u6211\u4eec\u7684\u91cd\u70b9\u5c31\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"periodicalexecutor"),"\uff0c\u770b\u770b\u5b83\u662f\u600e\u4e48\u8bbe\u8ba1\u7684\uff1f"),(0,i.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,i.kt)("p",null,"\u9996\u5148\u770b\u770b\u5982\u4f55\u5728\u4e1a\u52a1\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6\uff1a"),(0,i.kt)("p",null,"\u73b0\u6709\u4e00\u4e2a\u5b9a\u65f6\u670d\u52a1\uff0c\u6bcf\u5929\u56fa\u5b9a\u65f6\u95f4\u53bb\u6267\u884c\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse")," \u7684\u6570\u636e\u540c\u6b65\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type DailyTask struct {\n    ckGroup        *clickhousex.Cluster\n    insertExecutor *executors.BulkExecutor\n    mysqlConn      sqlx.SqlConn\n}\n")),(0,i.kt)("p",null,"\u521d\u59cb\u5316 ",(0,i.kt)("inlineCode",{parentName:"p"},"bulkExecutor"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (dts *DailyTask) Init() {\n    // insertIntoCk() \u662f\u771f\u6b63insert\u6267\u884c\u51fd\u6570\u3010\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u7f16\u5199\u5177\u4f53\u4e1a\u52a1\u903b\u8f91\u3011\n    dts.insertExecutor = executors.NewBulkExecutor(\n        dts.insertIntoCk,\n        executors.WithBulkInterval(time.Second*3),  // 3s\u4f1a\u81ea\u52a8\u5237\u4e00\u6b21container\u4e2dtask\u53bb\u6267\u884c\n        executors.WithBulkTasks(10240),             // container\u6700\u5927task\u6570\u3002\u4e00\u822c\u8bbe\u4e3a2\u7684\u5e42\u6b21\n    )\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u989d\u5916\u4ecb\u7ecd\u4e00\u4e0b\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse")," \xa0\u9002\u5408\u5927\u6279\u91cf\u7684\u63d2\u5165\uff0c\u56e0\u4e3a insert \u901f\u5ea6\u5f88\u5feb\uff0c\u5927\u6279\u91cf insert \u66f4\u80fd\u5145\u5206\u5229\u7528 clickhouse"))),(0,i.kt)("p",null,"\u4e3b\u4f53\u4e1a\u52a1\u903b\u8f91\u7f16\u5199\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (dts *DailyTask) insertNewData(ch chan interface{}, sqlFromDb *model.Task) error {\n    for item := range ch {\n        if r, vok := item.(*model.Task); !vok {\n            continue\n        }\n        err := dts.insertExecutor.Add(r)\n        if err != nil {\n            r.Tag = sqlFromDb.Tag\n            r.TagId = sqlFromDb.Id\n            r.InsertId = genInsertId()\n            r.ToRedis = toRedis == constant.INCACHED\n            r.UpdateWay = sqlFromDb.UpdateWay\n            // 1. Add Task\n            err := dts.insertExecutor.Add(r)\n            if err != nil {\n                logx.Error(err)\n            }\n        }\n    }\n    // 2. Flush Task container\n    dts.insertExecutor.Flush()\n    // 3. Wait All Task Finish\n    dts.insertExecutor.Wait()\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ef\u80fd\u4f1a\u7591\u60d1\u4e3a\u4ec0\u4e48\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"Flush(), Wait()")," \uff0c\u540e\u9762\u4f1a\u901a\u8fc7\u6e90\u7801\u89e3\u6790\u4e00\u4e0b"))),(0,i.kt)("p",null,"\u4f7f\u7528\u4e0a\u603b\u4f53\u5206\u4e3a 3 \u6b65\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Add()"),"\uff1a\u52a0\u5165 task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Flush()"),"\uff1a\u5237\u65b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"container")," \u4e2d\u7684 task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Wait()"),"\uff1a\u7b49\u5f85\u5168\u90e8 task \u6267\u884c\u5b8c\u6210")),(0,i.kt)("h2",{id:"\u6e90\u7801\u5206\u6790"},"\u6e90\u7801\u5206\u6790"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64\u5904\u4e3b\u8981\u5206\u6790 ",(0,i.kt)("inlineCode",{parentName:"p"},"periodicalexecutor"),"\uff0c\u56e0\u4e3a\u5176\u4ed6\u4e24\u4e2a\u5e38\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"executor")," \u90fd\u4f9d\u8d56\u5b83"))),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New...(interval time.Duration, container TaskContainer) *PeriodicalExecutor {\n    executor := &PeriodicalExecutor{\n        commander:   make(chan interface{}, 1),\n        interval:    interval,\n        container:   container,\n        confirmChan: make(chan lang.PlaceholderType),\n        newTicker: func(d time.Duration) timex.Ticker {\n            return timex.NewTicker(interval)\n        },\n    }\n    ...\n    return executor\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commander"),"\uff1a\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"li"},"tasks")," \u7684 channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"container"),"\uff1a\u6682\u5b58 ",(0,i.kt)("inlineCode",{parentName:"li"},"Add()")," \u7684 task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"confirmChan"),"\uff1a\u963b\u585e ",(0,i.kt)("inlineCode",{parentName:"li"},"Add()")," \uff0c\u5728\u5f00\u59cb\u672c\u6b21\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"executeTasks()")," \u4f1a\u653e\u5f00\u963b\u585e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ticker"),"\uff1a\u5b9a\u65f6\u5668\uff0c\u9632\u6b62 ",(0,i.kt)("inlineCode",{parentName:"li"},"Add()")," \u963b\u585e\u65f6\uff0c\u4f1a\u6709\u4e00\u4e2a\u5b9a\u65f6\u6267\u884c\u7684\u673a\u4f1a\uff0c\u53ca\u65f6\u91ca\u653e\u6682\u5b58\u7684 task")),(0,i.kt)("h3",{id:"add"},"Add()"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u5b8c\uff0c\u5728\u4e1a\u52a1\u903b\u8f91\u7684\u7b2c\u4e00\u6b65\u5c31\u662f\u628a task \u52a0\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"executor"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (pe *PeriodicalExecutor) Add(task interface{}) {\n    if vals, ok := pe.addAndCheck(task); ok {\n        pe.commander <- vals\n        <-pe.confirmChan\n    }\n}\n\nfunc (pe *PeriodicalExecutor) addAndCheck(task interface{}) (interface{}, bool) {\n    pe.lock.Lock()\n    defer func() {\n        // \u4e00\u5f00\u59cb\u4e3a false\n        var start bool\n        if !pe.guarded {\n            // backgroundFlush() \u4f1a\u5c06 guarded \u91cd\u65b0\u7f6e\u53cd\n            pe.guarded = true\n            start = true\n        }\n        pe.lock.Unlock()\n        // \u5728\u7b2c\u4e00\u6761 task \u52a0\u5165\u7684\u65f6\u5019\u5c31\u4f1a\u6267\u884c if \u4e2d\u7684 backgroundFlush()\u3002\u540e\u53f0\u534f\u7a0b\u5237task\n        if start {\n            pe.backgroundFlush()\n        }\n    }()\n    // \u63a7\u5236maxTask\uff0c>=maxTask \u5c06container\u4e2dtasks pop, return\n    if pe.container.AddTask(task) {\n        return pe.container.RemoveAll(), true\n    }\n\n    return nil, false\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addAndCheck()")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"AddTask()")," \u5c31\u662f\u5728\u63a7\u5236\u6700\u5927 tasks \u6570\uff0c\u5982\u679c\u8d85\u8fc7\u5c31\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"RemoveAll()")," \uff0c\u5c06\u6682\u5b58 ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," \u7684 tasks pop\uff0c\u4f20\u9012\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"commander")," \uff0c\u540e\u9762\u6709 goroutine \u5faa\u73af\u8bfb\u53d6\uff0c\u7136\u540e\u53bb\u6267\u884c tasks\u3002"),(0,i.kt)("h3",{id:"backgroundflush"},"backgroundFlush()"),(0,i.kt)("p",null,"\u5f00\u542f\u4e00\u4e2a\u540e\u53f0\u534f\u7a0b\uff0c\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," \u4e2d\u7684 task\uff0c\u4e0d\u65ad\u5237\u65b0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (pe *PeriodicalExecutor) backgroundFlush() {\n    // \u5c01\u88c5 go func(){}\n    threading.GoSafe(func() {\n        ticker := pe.newTicker(pe.interval)\n        defer ticker.Stop()\n\n        var commanded bool\n        last := timex.Now()\n        for {\n            select {\n            // \u4ecechannel\u62ff\u5230 []tasks\n            case vals := <-pe.commander:\n                commanded = true\n                // \u5b9e\u8d28\uff1awg.Add(1)\n                pe.enterExecution()\n                // \u653e\u5f00 Add() \u7684\u963b\u585e\uff0c\u800c\u4e14\u6b64\u65f6\u6682\u5b58\u533a\u4e5f\u4e3a\u7a7a\u3002\u624d\u5f00\u59cb\u65b0\u7684 task \u52a0\u5165\n                pe.confirmChan <- lang.Placeholder\n                // \u771f\u6b63\u7684\u6267\u884c task \u903b\u8f91\n                pe.executeTasks(vals)\n                last = timex.Now()\n            case <-ticker.Chan():\n                if commanded {\n                    // \u7531\u4e8eselect\u9009\u62e9\u7684\u968f\u673a\u6027\uff0c\u5982\u679c\u540c\u65f6\u6ee1\u8db3\u4e24\u4e2a\u6761\u4ef6\u540c\u65f6\u6267\u884c\u5b8c\u4e0a\u9762\u7684\uff0c\u6b64\u5904\u7f6e\u53cd\uff0c\u5e76\u8df3\u8fc7\u672c\u6bb5\u6267\u884c\n                    // https://draveness.me/golang/docs/part2-foundation/ch05-keyword/golang-select/\n                    commanded = false\n                } else if pe.Flush() {\n                    // \u5237\u65b0\u5b8c\u6210\uff0c\u5b9a\u65f6\u5668\u6e05\u96f6\u3002\u6682\u5b58\u533a\u7a7a\u4e86\uff0c\u5f00\u59cb\u4e0b\u4e00\u6b21\u5b9a\u65f6\u5237\u65b0\n                    last = timex.Now()\n                } else if timex.Since(last) > pe.interval*idleRound {\n                    // \u65e2\u6ca1\u5230maxTask\uff0cFlush() err\uff0c\u5e76\u4e14 last->now \u65f6\u95f4\u8fc7\u957f\uff0c\u4f1a\u518d\u6b21\u89e6\u53d1 Flush()\n                    // \u53ea\u6709\u8fd9\u7f6e\u53cd\uff0c\u624d\u4f1a\u5f00\u542f\u4e00\u4e2a\u65b0\u7684 backgroundFlush() \u540e\u53f0\u534f\u7a0b\n                    pe.guarded = false\n                    // \u518d\u6b21\u5237\u65b0\uff0c\u9632\u6b62\u6f0f\u6389\n                    pe.Flush()\n                    return\n                }\n            }\n        }\n    })\n}\n")),(0,i.kt)("p",null,"\u603b\u4f53\u4e24\u4e2a\u8fc7\u7a0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commander")," \u63a5\u6536\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"RemoveAll()")," \u4f20\u9012\u6765\u7684 tasks\uff0c\u7136\u540e\u6267\u884c\uff0c\u5e76\u653e\u5f00 ",(0,i.kt)("inlineCode",{parentName:"li"},"Add()")," \u7684\u963b\u585e\uff0c\u5f97\u4ee5\u7ee7\u7eed ",(0,i.kt)("inlineCode",{parentName:"li"},"Add()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ticker")," \u5230\u65f6\u95f4\u4e86\uff0c\u5982\u679c\u7b2c\u4e00\u6b65\u6ca1\u6709\u6267\u884c\uff0c\u5219\u81ea\u52a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"Flush()")," \uff0c\u4e5f\u4f1a\u53bb\u505a task \u7684\u6267\u884c")),(0,i.kt)("h3",{id:"wait"},"Wait()"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundFlush()")," \uff0c\u63d0\u5230\u4e00\u4e2a\u51fd\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"enterExecution()"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (pe *PeriodicalExecutor) enterExecution() {\n    pe.wgBarrier.Guard(func() {\n        pe.waitGroup.Add(1)\n    })\n}\n\nfunc (pe *PeriodicalExecutor) Wait() {\n    pe.wgBarrier.Guard(func() {\n        pe.waitGroup.Wait()\n    })\n}\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u5217\u4e3e\u5c31\u77e5\u9053\u4e3a\u4ec0\u4e48\u4e4b\u524d\u5728\u6700\u540e\u8981\u5e26\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"dts.insertExecutor.Wait()"),"\uff0c\u5f53\u7136\u8981\u7b49\u5f85\u5168\u90e8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"goroutine task")," \u5b8c\u6210\u3002"),(0,i.kt)("h2",{id:"\u601d\u8003"},"\u601d\u8003"),(0,i.kt)("p",null,"\u5728\u770b\u6e90\u7801\u4e2d\uff0c\u601d\u8003\u4e86\u4e00\u4e9b\u5176\u4ed6\u8bbe\u8ba1\u4e0a\u7684\u601d\u8def\uff0c\u5927\u5bb6\u662f\u5426\u4e5f\u6709\u7c7b\u4f3c\u7684\u95ee\u9898\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5206\u6790 ",(0,i.kt)("inlineCode",{parentName:"li"},"executors")," \u4e2d\uff0c\u4f1a\u53d1\u73b0\u5f88\u591a\u5730\u65b9\u90fd\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"lock"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"go test")," \u5b58\u5728\u7ade\u6001\uff0c\u4f7f\u7528\u52a0\u9501\u6765\u907f\u514d\u8fd9\u79cd\u60c5\u51b5"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5206\u6790 ",(0,i.kt)("inlineCode",{parentName:"li"},"confirmChan")," \u65f6\u53d1\u73b0\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"confirmChan")," \u5728\u6b64\u6b21",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/commit/9d9399ad1014c171cc9bd9c87f78b5d2ac238ce4"},"\u63d0\u4ea4"),"\u624d\u51fa\u73b0\uff0c\u4e3a\u4ec0\u4e48\u4f1a\u8fd9\u4e48\u8bbe\u8ba1\uff1f")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e4b\u524d\u662f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"wg.Add(1)")," \u662f\u5199\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"executeTasks()")," \uff1b\u73b0\u5728\u662f\uff1a\u5148",(0,i.kt)("inlineCode",{parentName:"p"},"wg.Add(1)"),"\uff0c\u518d\u653e\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"confirmChan")," \u963b\u585e\n\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"executor func")," \u6267\u884c\u963b\u585e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Add task")," \u8fd8\u5728\u8fdb\u884c\uff0c\u56e0\u4e3a\u6ca1\u6709\u963b\u585e\uff0c\u53ef\u80fd\u5f88\u5feb\u6267\u884c\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Executor.Wait()"),"\uff0c\u8fd9\u65f6\u5c31\u4f1a\u51fa\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"wg.Wait()")," \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"wg.Add()")," \u524d\u6267\u884c\uff0c\u8fd9\u4f1a ",(0,i.kt)("inlineCode",{parentName:"p"},"panic"))),(0,i.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u770b\u6700\u65b0\u7248\u672c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"TestPeriodicalExecutor_WaitFast()")," \uff0c\u4e0d\u59a8\u8dd1\u5728\u6b64\u7248\u672c\u4e0a\uff0c\u5c31\u53ef\u4ee5\u91cd\u73b0"),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u5269\u4f59\u8fd8\u6709\u51e0\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"executors")," \u7684\u5206\u6790\uff0c\u5c31\u7559\u7ed9\u5927\u5bb6\u53bb\u770b\u770b\u6e90\u7801\u3002"),(0,i.kt)("p",null,"\u603b\u4e4b\uff0c\u6574\u4f53\u8bbe\u8ba1\u4e0a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9075\u5faa\u9762\u5411\u63a5\u53e3\u8bbe\u8ba1"),(0,i.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"channel")," \uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"waitgroup")," \u7b49\u5e76\u53d1\u5de5\u5177"),(0,i.kt)("li",{parentName:"ul"},"\u6267\u884c\u5355\u5143+\u5b58\u50a8\u5355\u5143\u7684\u642d\u914d\u4f7f\u7528")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"go-zero")," \u4e2d\u8fd8\u6709\u5f88\u591a\u5b9e\u7528\u7684\u7ec4\u4ef6\u5de5\u5177\uff0c\u7528\u597d\u5de5\u5177\u5bf9\u4e8e\u63d0\u5347\u670d\u52a1\u6027\u80fd\u548c\u5f00\u53d1\u6548\u7387\u90fd\u6709\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u5e0c\u671b\u672c\u7bc7\u6587\u7ae0\u80fd\u7ed9\u5927\u5bb6\u5e26\u6765\u4e00\u4e9b\u6536\u83b7\u3002"))}u.isMDXComponent=!0},4526:function(e,n,t){n.Z=t.p+"assets/images/c42c34e8d33d48ec8a63e56feeae882a-0672bae74b4f74da32bf10a9d556c225.png"}}]);