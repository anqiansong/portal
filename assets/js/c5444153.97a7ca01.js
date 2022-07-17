"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9046],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6624:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s={unversionedId:"deployment/log-collection",id:"deployment/log-collection",isDocsHomePage:!1,title:"Log Collection",description:"In order to ensure the stable operation of the business and predict the unhealthy risks of the service, the collection of logs can help us observe the current health of the service.",source:"@site/docs/deployment/log-collection.md",sourceDirName:"deployment",slug:"/deployment/log-collection",permalink:"/docs/deployment/log-collection",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/deployment/log-collection.md",version:"current",lastUpdatedAt:1658060987,formattedLastUpdatedAt:"7/17/2022",frontMatter:{},sidebar:"docs",previous:{title:"CI/CD",permalink:"/docs/deployment/ci-cd"},next:{title:"Service Deployment",permalink:"/docs/deployment/service-deployment"}},c=[{value:"Prepare",id:"prepare",children:[]},{value:"Filebeat",id:"filebeat",children:[]},{value:"go-stash configuration",id:"go-stash-configuration",children:[]},{value:"Start services (start in order)",id:"start-services-start-in-order",children:[]},{value:"Visit kibana",id:"visit-kibana",children:[]}],p={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to ensure the stable operation of the business and predict the unhealthy risks of the service, the collection of logs can help us observe the current health of the service.\nIn traditional business development, when there are not many machine deployments, we usually log in directly to the server to view and debug logs. However, as the business increases, services continue to be split."),(0,i.kt)("p",null,"The maintenance cost of the service will also become more and more complicated. In a distributed system, there are more server machines, and the service is distributed on different servers. When problems are encountered,\nWe can't use traditional methods to log in to the server for log investigation and debugging. The complexity can be imagined."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"log-flow",src:n(2372).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If it is a simple single service system, or the service is too small, it is not recommended to use it directly, otherwise it will be counterproductive."))),(0,i.kt)("h2",{id:"prepare"},"Prepare"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kafka"),(0,i.kt)("li",{parentName:"ul"},"elasticsearch"),(0,i.kt)("li",{parentName:"ul"},"kibana"),(0,i.kt)("li",{parentName:"ul"},"filebeat\u3001Log-Pilot\uff08k8s\uff09"),(0,i.kt)("li",{parentName:"ul"},"go-stash")),(0,i.kt)("h2",{id:"filebeat"},"Filebeat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim xx/filebeat.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"filebeat.inputs:\n- type: log\n  enabled: true\n  # Turn on json parsing\n  json.keys_under_root: true\n  json.add_error_key: true\n  # Log file path\n  paths:\n    - /var/log/order/*.log\n\nsetup.template.settings:\n  index.number_of_shards: 1\n\n# Define kafka topic field\nfields:\n  log_topic: log-collection\n\n# Export to kafka\noutput.kafka:\n  hosts: [\"127.0.0.1:9092\"]\n  topic: '%{[fields.log_topic]}'\n  partition.round_robin:\n    reachable_only: false\n  required_acks: 1\n  keep_alive: 10s\n\n# ================================= Processors =================================\nprocessors:\n  - decode_json_fields:\n      fields: ['@timestamp','level','content','trace','span','duration']\n      target: \"\"\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"xx is the path where filebeat.yaml is located"))),(0,i.kt)("h2",{id:"go-stash-configuration"},"go-stash configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"config.yaml")," file"),(0,i.kt)("li",{parentName:"ul"},"Add configuration content")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim config.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'Clusters:\n- Input:\n    Kafka:\n      Name: go-stash\n      Log:\n        Mode: file\n      Brokers:\n      - "127.0.0.1:9092"\n      Topics: \n      - log-collection\n      Group: stash\n      Conns: 3\n      Consumers: 10\n      Processors: 60\n      MinBytes: 1048576\n      MaxBytes: 10485760\n      Offset: first\n  Filters:\n  - Action: drop\n    Conditions:\n      - Key: status\n        Value: "503"\n        Type: contains\n      - Key: type\n        Value: "app"\n        Type: match\n        Op: and\n  - Action: remove_field\n    Fields:\n    - source\n    - _score\n    - "@metadata"\n    - agent\n    - ecs\n    - input\n    - log\n    - fields\n  Output:\n    ElasticSearch:\n      Hosts:\n      - "http://127.0.0.1:9200"\n      Index: "go-stash-{{yyyy.MM.dd}}"\n      MaxChunkBytes: 5242880\n      GracePeriod: 10s\n      Compress: false\n      TimeZone: UTC\n')),(0,i.kt)("h2",{id:"start-services-start-in-order"},"Start services (start in order)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start kafka"),(0,i.kt)("li",{parentName:"ul"},"Start elasticsearch"),(0,i.kt)("li",{parentName:"ul"},"Start kibana"),(0,i.kt)("li",{parentName:"ul"},"Start go-stash"),(0,i.kt)("li",{parentName:"ul"},"Start filebeat"),(0,i.kt)("li",{parentName:"ul"},"Start the order-api service and its dependent services (order-api service in the go-zero-demo project)")),(0,i.kt)("h2",{id:"visit-kibana"},"Visit kibana"),(0,i.kt)("p",null,"Enter 127.0.0.1:5601\n",(0,i.kt)("img",{alt:"log",src:n(1355).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Here we only demonstrate the logs generated by logx in the collection service, and log collection in nginx is the same."))),(0,i.kt)("h1",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://kafka.apache.org/"},"kafka")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/cn/elasticsearch/"},"elasticsearch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/cn/kibana"},"kibana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/cn/beats/filebeat"},"filebeat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kevwan/go-stash"},"go-stash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/beats/filebeat/current/index.html"},"filebeat"))))}d.isMDXComponent=!0},2372:function(e,t,n){t.Z=n.p+"assets/images/log-flow-1f6f33a2be1dae796cd6a0b6e0b7ca88.png"},1355:function(e,t,n){t.Z=n.p+"assets/images/log-06d93223e9b4e5d1de820c7037bfde53.png"}}]);