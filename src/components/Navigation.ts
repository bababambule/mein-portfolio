export function createNavigation(): HTMLElement {
  const nav = document.createElement("nav");
  nav.className =
    "fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800";

  nav.innerHTML = `
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
  `;

  return nav;
}
