export function createHero(): HTMLElement {
  const hero = document.createElement("section");
  hero.className =
    "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900";

  hero.innerHTML = `
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
        <a href="https://www.github.com" class="px-8 py-4 border-2 border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all">
            github
        </a>
      </div>
    </div>
    `;

  return hero;
}
