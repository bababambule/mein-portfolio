export function createCard(): HTMLElement {
  const card = document.createElement("div");
  card.className = "w-full bg-slate-800 rounded-xl p-6 @container";

  card.innerHTML = `
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
  `;

  return card;
}
