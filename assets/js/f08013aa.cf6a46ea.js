"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={},s="Kvrocks Exporter",c={unversionedId:"kvrocks-exporter",id:"kvrocks-exporter",title:"Kvrocks Exporter",description:"Like the Redis metrics monitor, Kvrocks also exports the internal metrics to INFO commands.",source:"@site/docs/kvrocks-exporter.md",sourceDirName:".",slug:"/kvrocks-exporter",permalink:"/docs/kvrocks-exporter",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/kvrocks-exporter.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1671178205,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Backup",permalink:"/docs/backup"},next:{title:"kvrocks2redis",permalink:"/docs/kvrocks2redis"}},i={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kvrocks-exporter"},"Kvrocks Exporter"),(0,n.kt)("p",null,"Like the Redis metrics monitor, Kvrocks also exports the internal metrics to INFO commands."),(0,n.kt)("p",null,"Users can collect and store those metrics, we also provide ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KvrocksLabs/kvrocks_exporter"},"the Kvrocks exporter")," for Prometheus metrics since it's widely used now."),(0,n.kt)("p",null,"Kvrocks Grafana dashboard template is available on Grafana.com. You can import the Dashboard with ID 15286 or downloads the JSON file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://grafana.com/api/dashboards/15286 -O kvrocks-dashboard.json\n")),(0,n.kt)("p",null,"Example Grafana screenshots:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Grafana Example",src:r(6313).Z,width:"1547",height:"1698"})))}d.isMDXComponent=!0},6313:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/grafana-exporter-9b24b9a87885854f23b04af3c5cc08f4.jpeg"}}]);