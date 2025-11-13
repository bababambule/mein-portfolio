(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();function c(){const e=document.createElement("nav");return e.className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800",e.innerHTML=`
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          CZ
        </a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#home" class="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Projekte</a>
          <a href="#about" class="text-gray-300 hover:text-white transition-colors">Über mich</a>
          <a href="#contact" class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Kontakt
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          id="mobile-menu-button" 
          class="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Menu öffnen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu (Slide-in from right) -->
    <div 
      id="mobile-menu" 
      class="fixed top-0 right-0 bottom-0 w-64 bg-slate-900 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden shadow-2xl"
    >
      <div class="flex flex-col h-full">
        <!-- Close Button -->
        <div class="flex justify-end p-6">
          <button 
            id="mobile-menu-close" 
            class="text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Menu schließen"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Menu Items -->
        <div class="flex flex-col gap-6 px-6">
          <a href="#home" class="text-gray-300 hover:text-white text-lg transition-colors mobile-menu-link">
            Home
          </a>
          <a href="#projects" class="text-gray-300 hover:text-white text-lg transition-colors mobile-menu-link">
            Projekte
          </a>
          <a href="#about" class="text-gray-300 hover:text-white text-lg transition-colors mobile-menu-link">
            Über mich
          </a>
          <a href="#contact" class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center mobile-menu-link">
            Kontakt
          </a>
        </div>
      </div>
    </div>
    
    <!-- Overlay (darkens background when menu is open) -->
    <div 
      id="mobile-menu-overlay" 
      class="fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden"
    ></div>
  `,e}function u(){const e=document.createElement("section");return e.className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",e.innerHTML=`
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h1 class="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                Hallo, ich bin
                <span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Cristian</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8">
                Webdesigner & Frontend Developer
            </p>
            <div class="flex gap-4 justify-center">
                <a href="#projects" class="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all hover:scale-105">
          Projekte ansehen
        </a>
        <a href="#contact" class="px-8 py-4 border-2 border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all">
          Kontakt
        </a>
      </div>
    </div>
    `,e}function p(){const e=document.createElement("section");return e.className="min-h-screen bg-slate-900 py-20 px-6",e.innerHTML=`
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Meine Projekte
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Projekt Card 1 -->
        <div class="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform">
          <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">Projekt 1</h3>
            <p class="text-gray-400 mb-4">Eine coole Webseite mit modernem Design</p>
            <a href="#" class="text-purple-400 hover:text-purple-300">Mehr erfahren →</a>
          </div>
        </div>
        
        <!-- Projekt Card 2 -->
        <div class="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform">
          <div class="h-48 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">Projekt 2</h3>
            <p class="text-gray-400 mb-4">E-Commerce Shop mit Tailwind</p>
            <a href="#" class="text-purple-400 hover:text-purple-300">Mehr erfahren →</a>
          </div>
        </div>
        
        <!-- Projekt Card 3 -->
        <div class="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform">
          <div class="h-48 bg-gradient-to-br from-green-500 to-emerald-500"></div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">Projekt 3</h3>
            <p class="text-gray-400 mb-4">Portfolio mit animierten Übergängen</p>
            <a href="#" class="text-purple-400 hover:text-purple-300">Mehr erfahren →</a>
          </div>
        </div>
      </div>
    </div>
  `,e}function d(){const e=document.createElement("div");return e.className="w-full bg-slate-800 rounded-xl p-6 @container",e.innerHTML=`
    <h3 class="text-lg @md:text-2xl @lg:text-3xl font-bold text-white mb-2">
      Responsive Karte
    </h3>
    <p class="text-sm @md:text-base text-gray-400">
      Dieser Text passt sich an die Größe der KARTE an, nicht des Browsers!
    </p>
    <div class="flex flex-col @md:flex-row gap-4 mt-4 @4xl:gap-8">
      <button class="px-4 py-2 bg-purple-600 text-white rounded">Button 1</button>
      <button class="px-4 py-2 bg-purple-600 text-white rounded">Button 2</button>
    </div>
  `,e}function m(){const e=document.createElement("section");e.className="min-h-screen bg-slate-900 py-20 px-6",e.innerHTML=`
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-white mb-12 text-center">
        Container Queries Demo
      </h2>
      
      <div class="space-y-8">
        <!-- Schmale Container -->
        <div class="bg-slate-700 p-4 rounded-lg">
          <p class="text-white mb-4 text-sm">Schmaler Container (400px)</p>
          <div class="max-w-sm" id="narrow-container"></div>
        </div>
        
        <!-- Mittlerer Container -->
        <div class="bg-slate-700 p-4 rounded-lg">
          <p class="text-white mb-4 text-sm">Mittlerer Container (600px)</p>
          <div class="max-w-xl" id="medium-container"></div>
        </div>
        
        <!-- Breiter Container -->
        <div class="bg-slate-700 p-4 rounded-lg">
          <p class="text-white mb-4 text-sm">Breiter Container (100%)</p>
          <div class="w-full" id="wide-container"></div>
        </div>
      </div>
    </div>
  `;const o=e.querySelector("#narrow-container"),s=e.querySelector("#medium-container"),r=e.querySelector("#wide-container");return o&&o.appendChild(d()),s&&s.appendChild(d()),r&&r.appendChild(d()),e}function x(){const e=document.getElementById("mobile-menu-button"),o=document.getElementById("mobile-menu-close"),s=document.getElementById("mobile-menu"),r=document.getElementById("mobile-menu-overlay"),t=document.querySelectorAll(".mobile-menu-link");function n(){s?.classList.remove("translate-x-full"),r?.classList.remove("opacity-0","pointer-events-none"),document.body.style.overflow="hidden"}function i(){s?.classList.add("translate-x-full"),r?.classList.add("opacity-0","pointer-events-none"),document.body.style.overflow=""}e?.addEventListener("click",n),o?.addEventListener("click",i),r?.addEventListener("click",i),t.forEach(a=>{a.addEventListener("click",i)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&i()})}const l=document.querySelector("#app");document.body.insertBefore(c(),l);l.innerHTML="";l.appendChild(u());l.appendChild(p());l.appendChild(m());x();
