import{r as p,l as f,g as u,d as h}from"./fa7-brands_dribbble-square-C3JX79Ao.js";import{l as v,a as y}from"./mobileMenu-Dnc_SqrW.js";function C(e){const{text:n,variant:l="amberLight"}=e,t=document.createElement("div");t.textContent=n;const a="py-2 px-1 border-b-2 max-w-max text-xs",s={amberLight:"text-amber-50 border-amber-50",amberDark:"text-amber-400 border-amber-400",slate:"text-slate-400 border-amber-400",pill:"rounded-lg bg-slate-100 text-slate-600 border-0"};return t.className=`${a} ${s[l]}`,t}function $(e){const{text:n,type:l="h1",className:t=""}=e,a=document.createElement(l),s={h1:"text-4xl font-black",h2:"text-2xl/8 font-bold",h3:"text-lg font-bold",h4:"text-base font-bold"};return a.textContent=n,a.className=t||s[l],a}function E(e){const{blockVariant:n="amberDark",badgeText:l="",badgeVariant:t="amberLight",showBadge:a=!0,headingText:s="Headline",headingType:d="h1",body:i=""}=e,r=document.createElement("section"),o="w-full px-12",b={amberLight:"bg-amber-50 text-amber-800",amberDark:"bg-amber-600 text-amber-50",slateLight:"bg-slate-50 text-slate-800",slateDark:"bg-slate-600 text-slate-50"};r.className=`${o} ${b[n]} flex flex-col gap-4 py-12`;const m=C({text:l,variant:t}),x=$({text:s,type:d}),c=document.createElement("div");c.className="flex flex-col gap-2";const g=document.createElement("div");return g.className="",g.innerHTML=i,a&&c.appendChild(m),c.appendChild(x),r.appendChild(c),r.appendChild(g),r}function L(e){const{body:n,button:l=!0,variant:t="slate",id:a=""}=e,s=document.createElement("section");a&&s.setAttribute("id",a);const d="py-10 px-12",i={light:"bg-amber-50",dark:"bg-amber-600",slate:"bg-slate-600"};s.className=`${d} ${i[t]}`;const r=l?"":"hidden",o=document.createElement("div"),b="rounded-2xl px-3 pt-2 pb-6 flex flex-col gap-6 font-mono",m={light:"bg-slate-900 text-slate-400 bt-2 border-slate-400",dark:"bg-amber-900 text-amber-400 bt-2 border-amber-400",slate:"bg-amber-900 text-amber-400 bt-2 border-amber-400"},x=t==="slate"?"slate":"amber";return o.className=`${b} ${m[t]}`,o.innerHTML=`
    <div class="flex gap-2 justify-start">
        <div class="bg-red-400 rounded-xl size-3"></div>
        <div class="bg-yellow-400 rounded-xl size-3"></div>
        <div class="bg-green-400 rounded-xl size-3"></div>
    </div>
    <div class="self-stretch text-center justify-start leading-6">${n}</div>
    <div class="${r} flex">
        <a href="mailto:zweigler.cristian@gmail.com" class="block mx-auto px-4 py-3 bg-${x}-400 rounded shadow-lg">
            <span class="text-slate-900">Get in touch</span>
        </a>
    </div>
  `,s.appendChild(o),s}function B(){const e=document.createElement("footer");return e.className="bg-slate-800 py-10 px-12 flex flex-col gap-8",e.innerHTML=`
    <a href="/index.html" class="flex gap-4 text-slate-50 justify-center">
        <div>${v}</div>
        <div>${y}</div>
    </a>
    <div class="flex justify-center items-center gap-4 mt-4">
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
        ${p(f,"lg")}
        </a>  
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
            ${p(u,"lg")}
        </a>
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
            ${p(h,"lg")}
        </a>
    </div>
    <div class="text-center">
        <a href="/impressum.html" class="text-xs font-light text-slate-400">Legal Notice</a>
    </div>
  `,e}export{$ as C,C as a,L as b,E as c,B as f};
