import{bW as u,u as c,r as l,c as n}from"./entry.P51Fotcf.js";import{b as I,g as f}from"./brawlers.dIp-6F7d.js";const p=u("IconsStore",()=>{c();const e=l({}),o=n(()=>e.value.player?e.value.player:{}),a=n(()=>e.value.club?e.value.club:{});async function r(){const{data:s}=await I("getIconsAPI",()=>f());s.value&&t(s.value)}function t(s){e.value=s}return{Icons:e,PlayerIcons:o,ClubIcons:a,setIcons:t,getIcons:r}});export{p as u};