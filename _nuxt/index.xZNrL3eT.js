import i from"./Icon.fHdDNO-I.js";import{d as u,r as m,v as p,x as e,L as d,M as _,N as f,O as b,z as x,t as g}from"./entry.e-KLAsuO.js";import{u as h,a as v}from"./brawlers.Ru4rO-TN.js";import{u as w}from"./icons.Ovk9s9Ev.js";import"./index.aIcZnwHK.js";const k={class:"relative h-[100dvh]"},S={for:"tag",class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex"},y=e("div",{class:"text-black/50 p-1 rounded-lg w-[26px] h-full mr-1"},[e("p",{class:"text-center"},"#")],-1),T=u({__name:"index",setup(B){const s=h(),a=v(),r=w(),t=m("");async function n(){await s.submitTag(t.value),await r.getIcons(),await a.getAllBrawlers()}return(I,o)=>{const l=i;return g(),p("main",k,[e("label",S,[y,d(e("input",{type:"text",id:"tag","onUpdate:modelValue":o[0]||(o[0]=c=>b(t)?t.value=c:null),placeholder:"玩家標籤",class:"border-2 border-black/50 p-1 rounded-lg"},null,512),[[_,f(t)]]),e("button",{type:"button",onClick:n,class:"text-black/50 hover:text-black/80 ml-1"},[x(l,{name:"material-symbols:arrow-circle-right-outline",size:"26"})])])])}}});export{T as default};
