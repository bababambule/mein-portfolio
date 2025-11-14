import { createButton } from "./Button";

export function createHero(): HTMLElement {
  const hero = document.createElement("section");
  hero.className = "min-h-screen flex items-center justify-center";

  const container = document.createElement("div");
  container.className = "max-w-4xl mx-auto px-6 text-center";

  container.innerHTML = `
    <div class="max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hallo, ich bin
            <span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Cristian</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
            Webdesigner & Frontend Developer
        </p>
    `;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex gap-4 justify-center";

  const projectsButton = createButton({
    text: "Projekte ansehen",
    onClick: () => {
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    },
    variant: "primary",
    fullWidth: false,
  });

  const contactButton = createButton({
    text: "Kontakt",
    onClick: () => {
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
    },
    variant: "outline",
    disabled: true,
  });

  buttonContainer.appendChild(projectsButton);
  buttonContainer.appendChild(contactButton);

  container.appendChild(buttonContainer);
  hero.appendChild(container);

  return hero;
}
