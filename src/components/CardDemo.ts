import { createCard } from "./Card";

export function createCardDemo(): HTMLElement {
  const section = document.createElement("section");
  section.className = "min-h-screen bg-slate-900 py-20 px-6";

  section.innerHTML = `
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
  `;

  // Cards nach dem HTML einfügen
  const narrowContainer = section.querySelector("#narrow-container");
  const mediumContainer = section.querySelector("#medium-container");
  const wideContainer = section.querySelector("#wide-container");

  if (narrowContainer) narrowContainer.appendChild(createCard());
  if (mediumContainer) mediumContainer.appendChild(createCard());
  if (wideContainer) wideContainer.appendChild(createCard());

  return section;
}
