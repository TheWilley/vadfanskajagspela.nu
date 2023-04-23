import{k,l as y,m as q,q as w,r as P,s as S,v as A,w as T,x as C,y as R,z as I,A as B,B as E,C as z,D as j,a as L,E as U,o as V,b as D,h as p,t as x,f as H,F as M,i as O,p as F,j as $}from"./entry.e25d7b4a.js";async function N(e,a=k()){const{path:l,matched:t}=a.resolve(e);if(!t.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(l)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>N(e,a));a._routePreloaded.add(l);const s=t.map(n=>{var i;return(i=n.components)==null?void 0:i.default}).filter(n=>typeof n=="function");for(const n of s){const i=Promise.resolve(n()).catch(()=>{}).finally(()=>r.splice(r.indexOf(i)));r.push(i)}await Promise.all(r)}const b=globalThis.requestIdleCallback||(e=>{const a=Date.now(),l={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{e(l)},1)}),G=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),Q=e=>{const a=y();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{b(e)}):b(e)},X=(...e)=>e.find(a=>a!==void 0),J="noopener noreferrer";function K(e){const a=e.componentName||"NuxtLink",l=(t,r)=>{if(!t||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return t;const s=e.trailingSlash==="append"?E:z;if(typeof t=="string")return s(t,!0);const n="path"in t?t.path:r(t).path;return{...t,name:void 0,path:s(n,!0)}};return q({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const s=k(),n=w(()=>{const o=t.to||t.href||"";return l(o,s.resolve)}),i=w(()=>t.external||t.target&&t.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||P(n.value,{acceptRelative:!0})),h=S(!1),d=S(null),_=o=>{var f;d.value=t.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!Z()){const f=y();let m,c=null;A(()=>{const g=Y();Q(()=>{m=b(()=>{var v;(v=d==null?void 0:d.value)!=null&&v.tagName&&(c=g.observe(d.value,async()=>{c==null||c(),c=null;const u=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",u).catch(()=>{}),!i.value&&N(n.value,s).catch(()=>{})]),h.value=!0}))})})}),T(()=>{m&&G(m),c==null||c(),c=null})}return()=>{var g,v;if(!i.value){const u={ref:_,to:n.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(h.value&&(u.class=t.prefetchedClass||e.prefetchedClass),u.rel=t.rel),C(R("RouterLink"),u,r.default)}const o=typeof n.value=="object"?((g=s.resolve(n.value))==null?void 0:g.href)??null:n.value||null,f=t.target||null,m=t.noRel?null:X(t.rel,e.externalRelAttribute,o?J:"")||null,c=()=>j(o,{replace:t.replace});return t.custom?r.default?r.default({href:o,navigate:c,get route(){if(!o)return;const u=I(o);return{path:u.pathname,fullPath:u.pathname,get query(){return B(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:m,target:f,isExternal:i.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:d,href:o,rel:m,target:f},(v=r.default)==null?void 0:v.call(r))}}})}const W=K({componentName:"NuxtLink"});function Y(){const e=y();if(e._observer)return e._observer;let a=null;const l=new Map,t=(s,n)=>(a||(a=new IntersectionObserver(i=>{for(const h of i){const d=l.get(h.target);(h.isIntersecting||h.intersectionRatio>0)&&d&&d()}})),l.set(s,n),a.observe(s),()=>{l.delete(s),a.unobserve(s),l.size===0&&(a.disconnect(),a=null)});return e._observer={observe:t}}function Z(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const ee=e=>(F("data-v-30d2164e"),e=e(),$(),e),te={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ae=ee(()=>p("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ne={class:"max-w-520px text-center z-20"},re=["textContent"],oe=["textContent"],se={class:"w-full flex items-center justify-center"},le={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(e){const a=e;return U({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(l,t)=>{const r=W;return V(),D("div",te,[ae,p("div",ne,[p("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:x(e.statusCode)},null,8,re),p("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:x(e.description)},null,8,oe),p("div",se,[H(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:M(()=>[O(x(e.backHome),1)]),_:1})])])])}}},ce=L(le,[["__scopeId","data-v-30d2164e"]]);export{ce as default};
