function i(){const e=document.createElement("section");return e.className="min-h-screen bg-slate-900 py-20 px-6",e.innerHTML=`
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Meine Projekte
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Projekt Card 1 -->
        <a href="digital-prospekt.html">
          <div class="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition-transform">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-white mb-2">Projekt 1</h3>
              <p class="text-gray-400 mb-4">Eine coole Webseite mit modernem Design</p>
              <a href="#" class="text-purple-400 hover:text-purple-300">Mehr erfahren →</a>
            </div>
          </div>
        </a>
        
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
  `,e}function t(){const e=document.createElement("div");return e.className="w-full bg-slate-800 rounded-xl p-6 @container",e.innerHTML=`
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
  `,e}function n(){const e=document.createElement("section");e.className="min-h-screen bg-slate-900 py-20 px-6",e.innerHTML=`
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
  `;const r=e.querySelector("#narrow-container"),a=e.querySelector("#medium-container"),s=e.querySelector("#wide-container");return r&&r.appendChild(t()),a&&a.appendChild(t()),s&&s.appendChild(t()),e}export{n as a,i as c};
