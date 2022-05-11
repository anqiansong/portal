"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2355],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return t?o.createElement(g,a(a({ref:n},u),{},{components:t})):o.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6866:function(e,n,t){t.r(n),t.d(n,{default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],s={},c={unversionedId:"configuration/api",id:"configuration/api",isDocsHomePage:!1,title:"API Configuration",description:"The api configuration controls various functions in the api service, including but not limited to the service listening address, port, environment configuration, log configuration, etc. Let's take a simple configuration to see what the common configurations in the api do.",source:"@site/docs/configuration/api.md",sourceDirName:"configuration",slug:"/configuration/api",permalink:"/docs/configuration/api",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/configuration/api.md",version:"current",lastUpdatedAt:1652280113,formattedLastUpdatedAt:"5/11/2022",frontMatter:{},sidebar:"docs",previous:{title:"Coding Rules",permalink:"/docs/develop/coding-spec"},next:{title:"RPC Configuration",permalink:"/docs/configuration/rpc"}},l=[{value:"Configuration instructions",id:"configuration-instructions",children:[{value:"Config",id:"config",children:[]},{value:"rest.RestConf",id:"restrestconf",children:[]},{value:"service.ServiceConf",id:"serviceserviceconf",children:[]},{value:"logx.LogConf",id:"logxlogconf",children:[]},{value:"prometheus.Config",id:"prometheusconfig",children:[]},{value:"SignatureConf",id:"signatureconf",children:[]},{value:"PrivateKeyConf",id:"privatekeyconf",children:[]},{value:"cache.CacheConf",id:"cachecacheconf",children:[]},{value:"redis.RedisConf",id:"redisredisconf",children:[]}]}],u={toc:l};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The api configuration controls various functions in the api service, including but not limited to the service listening address, port, environment configuration, log configuration, etc. Let's take a simple configuration to see what the common configurations in the api do."),(0,r.kt)("h2",{id:"configuration-instructions"},"Configuration instructions"),(0,r.kt)("p",null,"Through the yaml configuration, we will find that there are many parameters that we are not aligned with config. This is because many of the config definitions are labeled with ",(0,r.kt)("inlineCode",{parentName:"p"},"optional")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". For ",(0,r.kt)("inlineCode",{parentName:"p"},"optional")," options, you can choose according to your own Need to determine whether it needs to be set. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," tag, if you think the default value is enough, you don't need to set it. Generally, the value in ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," basically does not need to be modified and can be considered as a best practice value."),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct{\n    rest.RestConf // rest api configuration\n    Auth struct { // jwt authentication configuration\n        AccessSecret string // jwt key\n        AccessExpire int64 // jwt expire, unit: second\n    }\n    Mysql struct { // database configuration, in addition to mysql, there may be other databases such as mongo\n        DataSource string // mysql datasource, which satisfies the format of user:password@tcp(ip:port)db?queries\n    }\n    CacheRedis cache.CacheConf // redis cache\n    UserRpc    zrpc.RpcClientConf // rpc client configuration\n}    \n")),(0,r.kt)("h3",{id:"restrestconf"},"rest.RestConf"),(0,r.kt)("p",null,"The basic configuration of api service, including monitoring address, monitoring port, certificate configuration, current limit, fusing parameters, timeout parameters and other controls, expand it, we can see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'service.ServiceConf // service configuration\n    Host     string `json:",default=0.0.0.0"` // http listening ip, default 0.0.0.0\n    Port     int // http listening port, required\n    CertFile string `json:",optional"` // https certificate file, optional\n    KeyFile  string `json:",optional"` // https private key file, optional \n    Verbose  bool   `json:",optional"` // whether to print detailed http request log\n    MaxConns int    `json:",default=10000"` // http can accept the maximum number of requests at the same time (current limit), the default is 10000\n    MaxBytes int64  `json:",default=1048576,range=[0:8388608]"` // http can accept the maximum Content Length of the request, the default is 1048576, and the set value cannot be between 0 and 8388608\n    // milliseconds\n    Timeout      int64         `json:",default=3000"` // timeout duration control, unit: milliseconds, default 3000\n    CpuThreshold int64         `json:",default=900,range=[0:1000]"` // CPU load reduction threshold, the default is 900, the allowable setting range is 0 to 1000\n    Signature    SignatureConf `json:",optional"` // signature configuration\n')),(0,r.kt)("h3",{id:"serviceserviceconf"},"service.ServiceConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type ServiceConf struct {\n    Name       string // service name\n    Log        logx.LogConf // log configuration\n    Mode       string            `json:",default=pro,options=dev|test|pre|pro"` // service environment, dev-development environment, test-test environment, pre-pre-release environment, pro-formal environment\n    MetricsUrl string            `json:",optional"` // index report interface address, this address needs to support post json\n    Prometheus prometheus.Config `json:",optional"` // prometheus configuration\n}\n')),(0,r.kt)("h3",{id:"logxlogconf"},"logx.LogConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type LogConf struct {\n    ServiceName         string `json:",optional"` // service name\n    Mode                string `json:",default=console,options=console|file|volume"` // Log mode, console-output to console, file-output to the current server (container) file, volume-output docker hangs in the file\n    Path                string `json:",default=logs"` // Log storage path\n    Level               string `json:",default=info,options=info|error|severe"` // Log level\n    Compress            bool   `json:",optional"` // whether to enable gzip compression\n    KeepDays            int    `json:",optional"` // log retention days\n    StackCooldownMillis int    `json:",default=100"` // log write interval\n}\n')),(0,r.kt)("h3",{id:"prometheusconfig"},"prometheus.Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    Host string `json:",optional"` // prometheus monitor host\n    Port int    `json:",default=9101"` // prometheus listening port\n    Path string `json:",default=/metrics"` // report address\n}\n')),(0,r.kt)("h3",{id:"signatureconf"},"SignatureConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'SignatureConf struct {\n    Strict      bool          `json:",default=false"` // Whether it is Strict mode, if it is, Private Keys is required\n    Expiry      time.Duration `json:",default=1h"` // Validity period, default is 1 hour\n    PrivateKeys []PrivateKeyConf // Signing key related configuration\n}\n')),(0,r.kt)("h3",{id:"privatekeyconf"},"PrivateKeyConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"PrivateKeyConf struct {\n    Fingerprint string // Fingerprint configuration\n    KeyFile     string // Key configuration\n}\n")),(0,r.kt)("h3",{id:"cachecacheconf"},"cache.CacheConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ClusterConf []NodeConf\n\nNodeConf struct {\n    redis.RedisConf\n    Weight int `json:",default=100"` // Weights\n}\n')),(0,r.kt)("h3",{id:"redisredisconf"},"redis.RedisConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'RedisConf struct {\n    Host string // redis address\n    Type string `json:",default=node,options=node|cluster"` // redis type\n    Pass string `json:",optional"` // redis password\n}\n')))}p.isMDXComponent=!0}}]);