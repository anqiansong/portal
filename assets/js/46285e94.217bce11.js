"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9905],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4481:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s={unversionedId:"blog/tool/executors",id:"blog/tool/executors",isDocsHomePage:!1,title:"Executors",description:"In go-zero, executors act as a task pool, do multi-task buffering, and use tasks for batch processing. Such as: clickhouse large batch insert, sql batch insert. At the same time, you can also see executors in go-queue [In queue, ChunkExecutor is used to limit the byte size of task submission].",source:"@site/docs/blog/tool/executors.md",sourceDirName:"blog/tool",slug:"/blog/tool/executors",permalink:"/docs/blog/tool/executors",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/blog/tool/executors.md",version:"current",lastUpdatedAt:1652280113,formattedLastUpdatedAt:"5/11/2022",frontMatter:{},sidebar:"blog",previous:{title:"Caching via collection",permalink:"/docs/blog/cache/collection"},next:{title:"Efficient keyword replacement and sensitive word filtering tool",permalink:"/docs/blog/tool/keywords"}},c=[{value:"Interface design",id:"interface-design",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"Source code analysis",id:"source-code-analysis",children:[{value:"Initialization",id:"initialization",children:[]},{value:"Add()",id:"add",children:[]},{value:"backgroundFlush()",id:"backgroundflush",children:[]},{value:"Wait()",id:"wait",children:[]}]},{value:"Thinking",id:"thinking",children:[]},{value:"Summary",id:"summary",children:[]}],d={toc:c};function u(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"executors")," act as a task pool, do multi-task buffering, and use tasks for batch processing. Such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse")," large batch ",(0,o.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sql batch insert"),". At the same time, you can also see ",(0,o.kt)("inlineCode",{parentName:"p"},"executors")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"go-queue")," ","[In ",(0,o.kt)("inlineCode",{parentName:"p"},"queue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChunkExecutor")," is used to limit the byte size of task submission]","."),(0,o.kt)("p",null,"So when you have the following requirements, you can use this component:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Submit tasks in batches"),(0,o.kt)("li",{parentName:"ul"},"Buffer part of tasks and submit lazily"),(0,o.kt)("li",{parentName:"ul"},"Delay task submission")),(0,o.kt)("p",null,"Before explaining it in detail, let's give a rough overview:\n",(0,o.kt)("img",{alt:"c42c34e8d33d48ec8a63e56feeae882a",src:n(3177).Z})),(0,o.kt)("h2",{id:"interface-design"},"Interface design"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"executors")," package, there are the following ",(0,o.kt)("inlineCode",{parentName:"p"},"executors"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Margin value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"bulkexecutor")),(0,o.kt)("td",{parentName:"tr",align:null},"Reach ",(0,o.kt)("inlineCode",{parentName:"td"},"maxTasks")," ","[Maximum number of tasks]"," Submit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"chunkexecutor")),(0,o.kt)("td",{parentName:"tr",align:null},"Reach ",(0,o.kt)("inlineCode",{parentName:"td"},"maxChunkSize"),"[Maximum number of bytes]"," Submit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"periodicalexecutor")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"basic executor"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"delayexecutor")),(0,o.kt)("td",{parentName:"tr",align:null},"Delay the execution of the passed ",(0,o.kt)("inlineCode",{parentName:"td"},"fn()"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"lessexecutor")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"You will see that except for the special functions of ",(0,o.kt)("inlineCode",{parentName:"p"},"delay")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"less"),", the other three are all combinations of ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func NewBulkExecutor(execute Execute, opts ...BulkOption) *BulkExecutor {\n    // Option mode: It appears in many places in go-zero. In multiple configurations, better design ideas\n    // https://halls-of-valhalla.org/beta/articles/functional-options-pattern-in-go,54/\n    options := newBulkOptions()\n    for _, opt := range opts {\n        opt(&options)\n    }\n    // 1. task container: [execute the function that actually does the execution] [maxTasks execution critical point]\n    container := &bulkContainer{\n        execute:  execute,\n        maxTasks: options.cachedTasks,\n    }\n    // 2. It can be seen that the underlying bulkexecutor depends on the periodicalexecutor\n    executor := &BulkExecutor{\n        executor:  NewPeriodicalExecutor(options.flushInterval, container),\n        container: container,\n    }\n\n    return executor\n}\n")),(0,o.kt)("p",null,"And this ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"interface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"TaskContainer interface {\n    // Add task to container\n    AddTask(task interface{}) bool\n    // Is actually to execute the incoming execute func()\n    Execute(tasks interface{})\n    // When the critical value is reached, remove all tasks in the container and pass them to execute func() through the channel for execution\n    RemoveAll() interface{}\n}\n")),(0,o.kt)("p",null,"This shows the dependency between:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bulkexecutor"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"periodicalexecutor")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"bulkContainer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chunkexecutor"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"periodicalexecutor")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"chunkContainer"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"So if you want to complete your own ",(0,o.kt)("inlineCode",{parentName:"p"},"executor"),", you can implement these three interfaces of ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),", and then combine with ",(0,o.kt)("inlineCode",{parentName:"p"},"periodicalexecutor"),"."))),(0,o.kt)("p",null,"So back to the picture \ud83d\udc46, our focus is on the ",(0,o.kt)("inlineCode",{parentName:"p"},"periodicalexecutor"),", and see how it is designed?"),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"First look at how to use this component in business:"),(0,o.kt)("p",null,"There is a timed service to perform data synchronization from ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse")," at a fixed time every day:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type DailyTask struct {\n    ckGroup        *clickhousex.Cluster\n    insertExecutor *executors.BulkExecutor\n    mysqlConn      sqlx.SqlConn\n}\n")),(0,o.kt)("p",null,"Initialize ",(0,o.kt)("inlineCode",{parentName:"p"},"bulkExecutor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (dts *DailyTask) Init() {\n    // insertIntoCk() is the real insert execution function [requires developers to write specific business logic by themselves]\n    dts.insertExecutor = executors.NewBulkExecutor(\n        dts.insertIntoCk,\n        executors.WithBulkInterval(time.Second*3),  // The container will automatically refresh the task to execute every 3s.\n        executors.WithBulkTasks(10240),             // The maximum number of tasks for the container. Generally set to a power of 2\n    )\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An additional introduction: ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse")," is suitable for mass insertion, because the insert speed is very fast, mass insert can make full use of clickhouse"))),(0,o.kt)("p",null,"Main business logic preparation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (dts *DailyTask) insertNewData(ch chan interface{}, sqlFromDb *model.Task) error {\n    for item := range ch {\n        if r, vok := item.(*model.Task); !vok {\n            continue\n        }\n        err := dts.insertExecutor.Add(r)\n        if err != nil {\n            r.Tag = sqlFromDb.Tag\n            r.TagId = sqlFromDb.Id\n            r.InsertId = genInsertId()\n            r.ToRedis = toRedis == constant.INCACHED\n            r.UpdateWay = sqlFromDb.UpdateWay\n            // 1. Add Task\n            err := dts.insertExecutor.Add(r)\n            if err != nil {\n                logx.Error(err)\n            }\n        }\n    }\n    // 2. Flush Task container\n    dts.insertExecutor.Flush()\n    // 3. Wait All Task Finish\n    dts.insertExecutor.Wait()\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may be wondering why ",(0,o.kt)("inlineCode",{parentName:"p"},"Flush(), Wait()")," is needed, and I will analyze it through the source code later."))),(0,o.kt)("p",null,"There are 3 steps to use as a whole:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Add()"),": Add to task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Flush()"),": Refresh tasks in ",(0,o.kt)("inlineCode",{parentName:"li"},"container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Wait()"),": Wait for the completion of all tasks")),(0,o.kt)("h2",{id:"source-code-analysis"},"Source code analysis"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The main analysis here is ",(0,o.kt)("inlineCode",{parentName:"p"},"periodicalexecutor"),", because the other two commonly used ",(0,o.kt)("inlineCode",{parentName:"p"},"executors")," rely on it."))),(0,o.kt)("h3",{id:"initialization"},"Initialization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func New...(interval time.Duration, container TaskContainer) *PeriodicalExecutor {\n    executor := &PeriodicalExecutor{\n        commander:   make(chan interface{}, 1),\n        interval:    interval,\n        container:   container,\n        confirmChan: make(chan lang.PlaceholderType),\n        newTicker: func(d time.Duration) timex.Ticker {\n            return timex.NewTicker(interval)\n        },\n    }\n    ...\n    return executor\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commander"),": Pass the channel of ",(0,o.kt)("inlineCode",{parentName:"li"},"tasks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"container"),": Temporarily store the task of ",(0,o.kt)("inlineCode",{parentName:"li"},"Add()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"confirmChan"),": Block ",(0,o.kt)("inlineCode",{parentName:"li"},"Add()"),", at the beginning of this time, ",(0,o.kt)("inlineCode",{parentName:"li"},"executeTasks()")," will let go of blocking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ticker"),": To prevent the blocking of ",(0,o.kt)("inlineCode",{parentName:"li"},"Add()"),", there will be a chance to execute regularly and release the temporarily stored task in time")),(0,o.kt)("h3",{id:"add"},"Add()"),(0,o.kt)("p",null,"After initialization, the first step in the business logic is to add task to ",(0,o.kt)("inlineCode",{parentName:"p"},"executor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (pe *PeriodicalExecutor) Add(task interface{}) {\n    if vals, ok := pe.addAndCheck(task); ok {\n        pe.commander <- vals\n        <-pe.confirmChan\n    }\n}\n\nfunc (pe *PeriodicalExecutor) addAndCheck(task interface{}) (interface{}, bool) {\n    pe.lock.Lock()\n    defer func() {\n        // default false\n        var start bool\n        if !pe.guarded {\n            // backgroundFlush() will reset guarded\n            pe.guarded = true\n            start = true\n        }\n        pe.lock.Unlock()\n        // The backgroundFlush() in if will be executed when the first task is added. Background coroutine brush task\n        if start {\n            pe.backgroundFlush()\n        }\n    }()\n    // Control maxTask, >=maxTask will pop and return tasks in the container\n    if pe.container.AddTask(task) {\n        return pe.container.RemoveAll(), true\n    }\n\n    return nil, false\n}\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"addAndCheck()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AddTask()")," is controlling the maximum number of tasks. If it exceeds the number of tasks, ",(0,o.kt)("inlineCode",{parentName:"p"},"RemoveAll()")," will be executed, and the tasks pop of the temporarily stored ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," will be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"commander"),", followed by goroutine loop reading , And then execute tasks."),(0,o.kt)("h3",{id:"backgroundflush"},"backgroundFlush()"),(0,o.kt)("p",null,"Start a background coroutine, and constantly refresh the tasks in the ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (pe *PeriodicalExecutor) backgroundFlush() {\n    // Encapsulate go func(){}\n    threading.GoSafe(func() {\n        ticker := pe.newTicker(pe.interval)\n        defer ticker.Stop()\n\n        var commanded bool\n        last := timex.Now()\n        for {\n            select {\n            // Get []tasks from channel\n            case vals := <-pe.commander:\n                commanded = true\n                // Substance: wg.Add(1)\n                pe.enterExecution()\n                // Let go of the blocking of Add(), and the temporary storage area is also empty at this time. Just start a new task to join\n                pe.confirmChan <- lang.Placeholder\n                // Really execute task logic\n                pe.executeTasks(vals)\n                last = timex.Now()\n            case <-ticker.Chan():\n                if commanded {\n                    // Due to the randomness of select, if the two conditions are met at the same time and the above is executed at the same time, this treatment is reversed and this paragraph is skipped.\n                    // https://draveness.me/golang/docs/part2-foundation/ch05-keyword/golang-select/\n                    commanded = false\n                } else if pe.Flush() {\n                    // The refresh is complete and the timer is cleared. The temporary storage area is empty, start the next timed refresh\n                    last = timex.Now()\n                } else if timex.Since(last) > pe.interval*idleRound {\n                    // If maxTask is not reached, Flush() err, and last->now is too long, Flush() will be triggered again\n                    // Only when this is reversed will a new backgroundFlush() background coroutine be opened\n                    pe.guarded = false\n                    // Refresh again to prevent missing\n                    pe.Flush()\n                    return\n                }\n            }\n        }\n    })\n}\n")),(0,o.kt)("p",null,"Overall two processes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commander")," receives the tasks passed by ",(0,o.kt)("inlineCode",{parentName:"li"},"RemoveAll()"),", then executes it, and releases the blocking of ",(0,o.kt)("inlineCode",{parentName:"li"},"Add()")," to continue ",(0,o.kt)("inlineCode",{parentName:"li"},"Add()")),(0,o.kt)("li",{parentName:"ul"},"It\u2019s time for ",(0,o.kt)("inlineCode",{parentName:"li"},"ticker"),", if the first step is not executed, it will automatically ",(0,o.kt)("inlineCode",{parentName:"li"},"Flush()")," and execute the task.")),(0,o.kt)("h3",{id:"wait"},"Wait()"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundFlush()"),", a function is mentioned: ",(0,o.kt)("inlineCode",{parentName:"p"},"enterExecution()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (pe *PeriodicalExecutor) enterExecution() {\n    pe.wgBarrier.Guard(func() {\n        pe.waitGroup.Add(1)\n    })\n}\n\nfunc (pe *PeriodicalExecutor) Wait() {\n    pe.wgBarrier.Guard(func() {\n        pe.waitGroup.Wait()\n    })\n}\n")),(0,o.kt)("p",null,"By enumerating in this way, you can know why you have to bring ",(0,o.kt)("inlineCode",{parentName:"p"},"dts.insertExecutor.Wait()")," at the end. Of course, you have to wait for all ",(0,o.kt)("inlineCode",{parentName:"p"},"goroutine tasks")," to complete."),(0,o.kt)("h2",{id:"thinking"},"Thinking"),(0,o.kt)("p",null,"In looking at the source code, I thought about some other design ideas, do you have similar questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the analysis of ",(0,o.kt)("inlineCode",{parentName:"li"},"executors"),", you will find that there are ",(0,o.kt)("inlineCode",{parentName:"li"},"lock")," in many places")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a race condition in ",(0,o.kt)("inlineCode",{parentName:"p"},"go test"),", use locking to avoid this situation"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After analyzing ",(0,o.kt)("inlineCode",{parentName:"li"},"confirmChan"),", it was found that this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zeromicro/go-zero/commit/9d9399ad1014c171cc9bd9c87f78b5d2ac238ce4"},"submit")," only appeared, why is it designed like this?")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It used to be: ",(0,o.kt)("inlineCode",{parentName:"p"},"wg.Add(1)")," was written in ",(0,o.kt)("inlineCode",{parentName:"p"},"executeTasks()"),"; now it is: first ",(0,o.kt)("inlineCode",{parentName:"p"},"wg.Add(1)"),", then release ",(0,o.kt)("inlineCode",{parentName:"p"},"confirmChan")," blocking\nIf the execution of ",(0,o.kt)("inlineCode",{parentName:"p"},"executor func")," is blocked, ",(0,o.kt)("inlineCode",{parentName:"p"},"Add task")," is still in progress, because there is no block, it may be executed to ",(0,o.kt)("inlineCode",{parentName:"p"},"Executor.Wait()")," soon, and this is where ",(0,o.kt)("inlineCode",{parentName:"p"},"wg.Wait()")," appears in ",(0,o.kt)("inlineCode",{parentName:"p"},"wg.Add ()")," before execution, this will be ",(0,o.kt)("inlineCode",{parentName:"p"},"panic"))),(0,o.kt)("p",null,"For details, please see the latest version of ",(0,o.kt)("inlineCode",{parentName:"p"},"TestPeriodicalExecutor_WaitFast()"),", you may wish to run on this version to reproduce."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"There are still a few more analysis of ",(0,o.kt)("inlineCode",{parentName:"p"},"executors"),", I leave it to you to look at the source code."),(0,o.kt)("p",null,"In short, the overall design:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow interface-oriented design"),(0,o.kt)("li",{parentName:"ul"},"Flexible use of concurrent tools such as ",(0,o.kt)("inlineCode",{parentName:"li"},"channel")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"waitgroup")),(0,o.kt)("li",{parentName:"ul"},"The combination of execution unit + storage unit")),(0,o.kt)("p",null,"There are many useful component tools in ",(0,o.kt)("inlineCode",{parentName:"p"},"go-zero"),". Good use of tools is very helpful to improve service performance and development efficiency. I hope this article can bring you some gains."))}u.isMDXComponent=!0},3177:function(e,t,n){t.Z=n.p+"assets/images/c42c34e8d33d48ec8a63e56feeae882a-0672bae74b4f74da32bf10a9d556c225.png"}}]);