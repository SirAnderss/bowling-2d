import{u,r as t,o as a,c,w as m,f as r,g as f,p as h,h as C}from"./vendor.0543d0c3.js";import{C as v,B as $}from"./Container.1c3551f5.js";import{_}from"./index.a238f037.js";const B={name:"HelloComponent",components:{Container:v,Button:$},setup(){const{push:e}=u();return{onClick:()=>{e({path:"register"})}}}},x=e=>(h("data-v-45e03f01"),e=e(),C(),e),H={class:"hello"},g=x(()=>r("h1",null,"BOWLING 2D",-1));function k(e,n,l,s,p,i){const o=t("Button"),d=t("Container");return a(),c(d,null,{default:m(()=>[r("div",H,[g,f(o,{label:"New Game",action:s.onClick,disabled:!1,loading:!1,bg:"success"},null,8,["action"])])]),_:1})}var I=_(B,[["render",k],["__scopeId","data-v-45e03f01"]]);const w={name:"HomePage",components:{Hello:I}};function N(e,n,l,s,p,i){const o=t("Hello");return a(),c(o)}var y=_(w,[["render",N]]);export{y as default};