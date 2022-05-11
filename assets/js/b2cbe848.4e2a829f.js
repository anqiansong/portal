"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6361],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1365:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},d={unversionedId:"advance/middleware",id:"advance/middleware",isDocsHomePage:!1,title:"Middleware",description:"In the previous section, we demonstrated how to use jwt authentication. I believe you have mastered the basic use of jwt. In this section, let\u2019s take a look at how to use api service middleware.",source:"@site/docs/advance/middleware.md",sourceDirName:"advance",slug:"/advance/middleware",permalink:"/docs/advance/middleware",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/advance/middleware.md",version:"current",lastUpdatedAt:1652280113,formattedLastUpdatedAt:"5/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"JWT",permalink:"/docs/advance/jwt"},next:{title:"RPC Implement & Call",permalink:"/docs/advance/rpc-call"}},c=[{value:"Middleware classification",id:"middleware-classification",children:[]},{value:"Middleware use",id:"middleware-use",children:[{value:"Routing middleware",id:"routing-middleware",children:[]},{value:"Global middleware",id:"global-middleware",children:[]},{value:"Call another service within the middleware",id:"call-another-service-within-the-middleware",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the previous section, we demonstrated how to use jwt authentication. I believe you have mastered the basic use of jwt. In this section, let\u2019s take a look at how to use api service middleware."),(0,i.kt)("h2",{id:"middleware-classification"},"Middleware classification"),(0,i.kt)("p",null,"In go-zero, middleware can be divided into routing middleware and global middleware. Routing middleware refers to certain specific routes that need to implement middleware logic, which is similar to jwt and does not place the routes under ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt:xxx")," Does not use middleware functions,\nThe service scope of global middleware is the entire service."),(0,i.kt)("h2",{id:"middleware-use"},"Middleware use"),(0,i.kt)("p",null,"Here we take the ",(0,i.kt)("inlineCode",{parentName:"p"},"search")," service as an example to demonstrate the use of middleware"),(0,i.kt)("h3",{id:"routing-middleware"},"Routing middleware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rewrite the ",(0,i.kt)("inlineCode",{parentName:"p"},"search.api")," file and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," declaration"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd service/search/api\n$ vim search.api\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"type SearchReq struct {}\n\ntype SearchReply struct {}\n\n@server(\n    jwt: Auth\n    middleware: Example // Routing middleware declaration\n)\nservice search-api {\n    @handler search\n    get /search/do (SearchReq) returns (SearchReply)\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Regenerate the api code"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl api go -api search.api -dir . \n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"etc/search-api.yaml exists, ignored generation\ninternal/config/config.go exists, ignored generation\nsearch.go exists, ignored generation\ninternal/svc/servicecontext.go exists, ignored generation\ninternal/handler/searchhandler.go exists, ignored generation\ninternal/handler/pinghandler.go exists, ignored generation\ninternal/logic/searchlogic.go exists, ignored generation\ninternal/logic/pinglogic.go exists, ignored generation\nDone.\n")),(0,i.kt)("p",{parentName:"li"},"After the generation is completed, there will be an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," directory under the ",(0,i.kt)("inlineCode",{parentName:"p"},"internal")," directory, which is the middleware file, and the implementation logic of the subsequent middleware is also written here.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Improve resource dependency ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceContext")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/internal/svc/servicecontext.go\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type ServiceContext struct {\n    Config config.Config\n    Example rest.Middleware\n}\n\nfunc NewServiceContext(c config.Config) *ServiceContext {\n    return &ServiceContext{\n        Config: c,\n        Example: middleware.NewExampleMiddleware().Handle,\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Write middleware logic\nOnly one line of log is added here, with the content example middle. If the service runs and outputs example middle, it means that the middleware is in use."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim service/search/api/internal/middleware/examplemiddleware.go\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package middleware\n\nimport "net/http"\n\ntype ExampleMiddleware struct {\n}\n\nfunc NewExampleMiddleware() *ExampleMiddleware {\n        return &ExampleMiddleware{}\n}\n\nfunc (m *ExampleMiddleware) Handle(next http.HandlerFunc) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        // TODO generate middleware implement function, delete after code implementation\n\n        // Passthrough to next handler if need\n        next(w, r)\n    }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start service verification"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{"@timestamp":"2021-02-09T11:32:57.931+08","level":"info","content":"example middle"}\n')))),(0,i.kt)("h3",{id:"global-middleware"},"Global middleware"),(0,i.kt)("p",null,"call ",(0,i.kt)("inlineCode",{parentName:"p"},"rest.Server.Use")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    flag.Parse()\n\n    var c config.Config\n    conf.MustLoad(*configFile, &c)\n\n    ctx := svc.NewServiceContext(c)\n    server := rest.MustNewServer(c.RestConf)\n    defer server.Stop()\n\n    // Global middleware\n    server.Use(func(next http.HandlerFunc) http.HandlerFunc {\n        return func(w http.ResponseWriter, r *http.Request) {\n            logx.Info("global middleware")\n            next(w, r)\n        }\n    })\n    handler.RegisterHandlers(server, ctx)\n\n    fmt.Printf("Starting server at %s:%d...\\n", c.Host, c.Port)\n    server.Start()\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{"@timestamp":"2021-02-09T11:50:15.388+08","level":"info","content":"global middleware"}\n')),(0,i.kt)("h3",{id:"call-another-service-within-the-middleware"},"Call another service within the middleware"),(0,i.kt)("p",null,"Pass another service into the middleware by closure, example as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// simulated another service\ntype AnotherService struct{}\n\nfunc (s *AnotherService) GetToken() string {\n    return stringx.Rand()\n}\n\n// regular middleware\nfunc middleware(next http.HandlerFunc) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Add("X-Middleware", "static-middleware")\n        next(w, r)\n    }\n}\n\n// the middleware that calls another service\nfunc middlewareWithAnotherService(s *AnotherService) rest.Middleware {\n    return func(next http.HandlerFunc) http.HandlerFunc {\n        return func(w http.ResponseWriter, r *http.Request) {\n            w.Header().Add("X-Middleware", s.GetToken())\n            next(w, r)\n        }\n    }\n}\n')),(0,i.kt)("p",null,"For full example, see: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/tree/main/http/middleware"},"https://github.com/zeromicro/zero-examples/tree/main/http/middleware")))}p.isMDXComponent=!0}}]);