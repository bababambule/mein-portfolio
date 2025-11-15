import{c as h,i as u}from"./mobileMenu-rcJZh83C.js";import{c as w}from"./Hero-BkFjpYk8.js";function y(e){const{text:s,variant:a="amberLight"}=e,t=document.createElement("div");t.textContent=s;const l="py-2 px-1 border-b-2 max-w-max text-xs",o={amberLight:"text-amber-50 border-amber-50",amberDark:"text-amber-400 border-amber-400",slate:"text-slate-400 border-amber-400",pill:"rounded-lg bg-slate-100 text-slate-600 border-0"};return t.className=`${l} ${o[a]}`,t}function k(e){const{text:s,type:a="h1",className:t=""}=e,l=document.createElement(a),o={h1:"text-4xl font-black",h2:"text-2xl/8 font-black",h3:"text-lg font-bold",h4:"text-base font-bold"};return l.textContent=s,l.className=t||o[a],l}function p(e){const{blockVariant:s="amberDark",badgeText:a="",badgeVariant:t="amberLight",showBadge:l=!0,headingText:o="Headline",headingType:m="h1",body:b=""}=e,n=document.createElement("section"),x="w-full px-12",g={amberLight:"bg-amber-50 text-amber-800",amberDark:"bg-amber-600 text-amber-50",slateLight:"bg-slate-50 text-slate-800",slateDark:"bg-slate-600 text-slate-50"};n.className=`${x} ${g[s]} flex flex-col gap-4 pb-12`;const f=y({text:a,variant:t}),v=k({text:o,type:m}),r=document.createElement("div");r.className="flex flex-col gap-2";const c=document.createElement("div");return c.className="",c.innerHTML=b,l&&r.appendChild(f),r.appendChild(v),n.appendChild(r),n.appendChild(c),n}const d="/mein-portfolio/assets/card-digital-prospekt-GvpxFVwl.webp";function C(){const e=document.createElement("section");e.className="bg-amber-600 py-12 flex flex-col gap-24 text-amber-50";const s=document.createElement("div");s.className="flex flex-col gap-0 px-6",s.innerHTML=`
    <div class="flex gap-4  justify-between -mb-8 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-right drop-shadow-lg">Digi<br>tal</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 mb-2">
            <p class="font-light">_Role</p>
            <p>Product Designer</p>
        </div>
    </div>
    <div class="px-6">
        <img src="${d}" class="w-3/4 mx-auto">
    </div>
    <div class="flex flex-row-reverse gap-4 basis-full justify-between -mt-20 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-left drop-shadow-lg">Pro<br>spe<br>kt</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 text-right mt-10">
            <p class="font-light">_Timeline</p>
            <p>2023 – present</p>
        </div>
    </div>
  `;const a=document.createElement("div");a.className="flex flex-col gap-0 px-6",a.innerHTML=`
    <div class="flex flex-row-reverse gap-4  justify-between -mb-8 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-left drop-shadow-lg">Bon<br>us</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 mb-2 text-right">
            <p class="font-light">_Role</p>
            <p>Product Designer</p>
        </div>
    </div>
    <div class="px-6">
        <img src="${d}" class="w-3/4 mx-auto">
    </div>
    <div class="flex flex-row gap-4 basis-full justify-between -mt-8 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-right drop-shadow-lg">Wal<br>let</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 text-left mt-4">
            <p class="font-light">_Timeline</p>
            <p>2025 – present</p>
        </div>
    </div>
  `;const t=document.createElement("div");return t.className="flex flex-col gap-0 px-6",t.innerHTML=`
    <div class="flex gap-4  justify-between -mb-8 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-right drop-shadow-lg">Cus<br>tom</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 mb-2">
            <p class="font-light">_Role</p>
            <p>Graphic Designer</p>
        </div>
    </div>
    <div class="px-6">
        <img src="${d}" class="w-3/4 mx-auto">
    </div>
    <div class="flex flex-row-reverse gap-4 basis-full justify-between -mt-8 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-left drop-shadow-lg">Ico<br>ns</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 text-right mt-4">
            <p class="font-light">_Timeline</p>
            <p>2021</p>
        </div>
    </div>
  `,e.appendChild(s),e.appendChild(a),e.appendChild(t),e}const i=document.querySelector("#app");i.className="bg-amber-600 text-base/6";document.body.insertBefore(h(),i);i.innerHTML="";i.appendChild(w());i.appendChild(p({badgeText:"Case Studies",badgeVariant:"amberLight",showBadge:!0,headingText:"Selected Projects",headingType:"h2",body:'<p class="">My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>'}));i.appendChild(C());i.appendChild(p({blockVariant:"amberLight",showBadge:!1,headingText:"Always learning. Always building.",headingType:"h2",body:'<p class="">My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>'}));u();
