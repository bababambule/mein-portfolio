function l(n){const{text:e,onClick:t,variant:r="primary",disabled:a=!1,fullWidth:s=!1}=n,o=document.createElement("button");o.textContent=e;const c="px-8 py-4 rounded-lg transition-all hover:scale-105 font-semibold",i={primary:"bg-purple-600 text-white hover:bg-purple-700",secondary:"bg-slate-700 text-white hover:bg-slate-600",outline:"border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"},d=s?"w-full":"",p=a?"opacity-50 cursor-not-allowed":"";return o.className=`${c} ${i[r]} ${d} ${p}`,o.disabled=a,o.addEventListener("click",t),o}function u(){const n=document.createElement("section");n.className="min-h-screen flex items-center justify-center";const e=document.createElement("div");e.className="max-w-4xl mx-auto px-6 text-center",e.innerHTML=`
    <div class="max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hallo, ich bin
            <span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Cristian</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
            Webdesigner & Frontend Developer
        </p>
    `;const t=document.createElement("div");t.className="flex gap-4 justify-center";const r=l({text:"Projekte ansehen",onClick:()=>{document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})},variant:"primary",fullWidth:!1}),a=l({text:"Kontakt",onClick:()=>{document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})},variant:"outline",disabled:!0});return t.appendChild(r),t.appendChild(a),e.appendChild(t),n.appendChild(e),n}export{u as c};
