import{d as m,r as o,c as n,n as i,a as p,b as h,e,o as c,p as k,f as b,_ as C,g as w,w as f,h as _}from"./index.aa36e809.js";const x=a=>(k("data-v-f1564efd"),a=a(),b(),a),y=["disabled"],N=x(()=>e("p",null,"Flip",-1)),S=[N],B=m({__name:"Card",setup(a){const t=o(!0),s=o(!1),l=o(!1),d=o(!1),u=o(!1),r=o(!1),g=()=>{t.value?(s.value=!0,d.value=!0,u.value=!0,setTimeout(()=>{d.value=!1,u.value=!1,t.value=!1},1e3)):(t.value=!0,l.value=!0,r.value=!0,setTimeout(()=>{l.value=!1,r.value=!1,s.value=!1},1e3))};return(v,z)=>(c(),n("div",{class:i(["card",{"card-disable":t.value===s.value}])},[t.value?(c(),n("div",{key:0,class:i({do_show:l.value,do_hide:d.value})},[p(v.$slots,"front",{},void 0,!0)],2)):h("",!0),s.value?(c(),n("div",{key:1,class:i({do_show:u.value,do_hide:r.value})},[p(v.$slots,"back",{},void 0,!0)],2)):h("",!0),e("button",{onClick:g,disabled:t.value===s.value},S,8,y)],2))}});const $=C(B,[["__scopeId","data-v-f1564efd"]]),E="/assets/MINI_LOGO.74e89106.png",I=a=>(k("data-v-3ec713ab"),a=a(),b(),a),F={class:"bg supercenter"},T=I(()=>e("div",{class:"card-size front"},[e("h1",null,[_("WALT"),e("span",null,"\u25CF"),_("N DEVEL"),e("span",null,"\u25CF"),_("PMENT")]),e("div",{class:"logo"})],-1)),V=I(()=>e("div",{class:"card-size back"},[e("div",{class:"logoback"}),e("p",null,"Walton Development is Sand Producer at Nakhon Pathom province. Later on, we had decided to expand the business to Teah Company. Our interested domain are containerization technology and technical consultant."),e("div",{class:"contract-me"},[e("h1",null,"Raknatee Chokluechai"),e("h2",null,"Computer Engineer"),e("h2",null,"raknatee@raknatee.dev")])],-1)),L=m({__name:"Index",setup(a){let t=document.getElementById("favicon");return t.href=E,document.title="Walton Development",(s,l)=>(c(),n("div",F,[w($,null,{front:f(()=>[T]),back:f(()=>[V]),_:1})]))}});const O=C(L,[["__scopeId","data-v-3ec713ab"]]);export{O as default};
