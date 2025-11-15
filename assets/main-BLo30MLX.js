import{l as w,a as k,c as C,i as T}from"./mobileMenu-DHhnkH_r.js";import{r as x,l as $,g as B,d as N,a as j,c as L}from"./Hero-DWqQZyFI.js";function S(e){const{text:s,variant:a="amberLight"}=e,t=document.createElement("div");t.textContent=s;const l="py-2 px-1 border-b-2 max-w-max text-xs",i={amberLight:"text-amber-50 border-amber-50",amberDark:"text-amber-400 border-amber-400",slate:"text-slate-400 border-amber-400",pill:"rounded-lg bg-slate-100 text-slate-600 border-0"};return t.className=`${l} ${i[a]}`,t}function E(e){const{text:s,type:a="h1",className:t=""}=e,l=document.createElement(a),i={h1:"text-4xl font-black",h2:"text-2xl/8 font-bold",h3:"text-lg font-bold",h4:"text-base font-bold"};return l.textContent=s,l.className=t||i[a],l}function v(e){const{blockVariant:s="amberDark",badgeText:a="",badgeVariant:t="amberLight",showBadge:l=!0,headingText:i="Headline",headingType:c="h1",body:p=""}=e,o=document.createElement("section"),r="w-full px-12",b={amberLight:"bg-amber-50 text-amber-800",amberDark:"bg-amber-600 text-amber-50",slateLight:"bg-slate-50 text-slate-800",slateDark:"bg-slate-600 text-slate-50"};o.className=`${r} ${b[s]} flex flex-col gap-4 py-12`;const g=S({text:a,variant:t}),y=E({text:i,type:c}),d=document.createElement("div");d.className="flex flex-col gap-2";const m=document.createElement("div");return m.className="",m.innerHTML=p,l&&d.appendChild(g),d.appendChild(y),o.appendChild(d),o.appendChild(m),o}const u="/assets/card-digital-prospekt-GvpxFVwl.webp";function z(){const e=document.createElement("section");e.setAttribute("id","projects"),e.className="bg-amber-600 py-12 flex flex-col gap-24 text-amber-50";const s=document.createElement("div");s.className="flex flex-col gap-0 px-6",s.innerHTML=`
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
        <img src="${u}" class="w-3/4 mx-auto">
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
        <img src="${u}" class="w-3/4 mx-auto">
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
        <img src="${u}" class="w-3/4 mx-auto">
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
  `,e.appendChild(s),e.appendChild(a),e.appendChild(t),e}function M(e){const{body:s,button:a=!0,variant:t="slate",id:l=""}=e,i=document.createElement("section");l&&i.setAttribute("id",l);const c="py-10 px-12",p={amber:"bg-amber-50",slate:"bg-slate-600"};i.className=`${c} ${p[t]}`;const o=a?"":"hidden",r=document.createElement("div"),b="rounded-2xl px-3 pt-2 pb-6 flex flex-col gap-6 font-mono",g={amber:"bg-slate-900 text-slate-400 bt-2 border-slate-400",slate:"bg-amber-900 text-amber-400 bt-2 border-amber-400"};return r.className=`${b} ${g[t]}`,r.innerHTML=`
    <div class="flex gap-2 justify-start">
        <div class="bg-red-400 rounded-xl size-3"></div>
        <div class="bg-yellow-400 rounded-xl size-3"></div>
        <div class="bg-green-400 rounded-xl size-3"></div>
    </div>
    <div class="self-stretch text-center justify-start leading-6">${s}</div>
    <div class="${o} flex">
        <a href="mailto:zweigler.cristian@gmail.com" class="block mx-auto px-4 py-3 bg-slate-400 rounded shadow-lg">
            <span class="text-slate-900">Get in touch</span>
        </a>
    </div>
  `,i.appendChild(r),i}function H(){const e=document.createElement("footer");return e.className="bg-slate-800 py-10 px-12 flex flex-col gap-8",e.innerHTML=`
    <a href="/index.html" class="flex gap-4 text-slate-50 justify-center">
        <div>${w}</div>
        <div>${k}</div>
    </a>
    <div class="flex justify-center items-center gap-4 mt-4">
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
        ${x($,"lg")}
        </a>  
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
            ${x(B,"lg")}
        </a>
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
            ${x(N,"lg")}
        </a>
    </div>
    <div class="text-center">
        <a href="/impressum.html" class="text-xs font-light text-slate-400">Legal Notice</a>
    </div>
  `,e}const n=document.querySelector("#app");n.className="bg-amber-600 text-base/6";const I=v({badgeText:"Case Studies",badgeVariant:"amberLight",showBadge:!0,headingText:"Selected Projects",headingType:"h2",body:`
    <p class="">My broad skill set and experience allows me to ship complex projects solo or in small teams - covering design, user testing, development and optimization.</p>
  `}),h=v({blockVariant:"amberLight",showBadge:!1,headingText:"Always learning. Always building.",headingType:"h2",body:`
    <div class="flex flex-col gap-8">
      <p class="">I've been designing and building <span class="font-semibold">digital products since 2014</span>. Started as a graphic designer, dove into dev during my apprenticeship, spent time in the games industry, and returned to product design in 2017.</p>
      <p class="">Today I'm a senior product designer at orange promotion, building multi-tenant SaaS architectures and automation systems. <span class="font-semibold">My range covers design, development, low-code and analytics</span> – because the best products are built end-to-end.</p>
      <div class="flex gap-4">
        <p class="shrink font-semibold">I work where design meets code and I've been doing it for over a decade.</p>
        <div id="aboutButtonSlot" class="shrink-0"></div>
      </div>
    </div>
    `}),D=M({body:"Want to work with me?_",button:!0,variant:"amber",id:"contact"}),f=h.querySelector("#aboutButtonSlot");if(f){const e=j({text:"Learn More",href:"/about.html",variant:"primary",fullWidth:!1});f.appendChild(e)}document.body.insertBefore(C(),n);n.innerHTML="";n.appendChild(L());n.appendChild(I);n.appendChild(z());n.appendChild(h);n.appendChild(D);n.appendChild(H());T();
