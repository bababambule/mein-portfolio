export function createProjects(): HTMLElement {
  const section = document.createElement("section");
  section.className = "min-h-screen bg-slate-900 py-20 px-6";

  section.innerHTML = `
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
  `;

  return section;
}
