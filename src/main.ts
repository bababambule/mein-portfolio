import "./style.css";
import { createNavigation } from "./components/Navigation.ts";
import { createHero } from "./components/Hero.ts";
import { createProjects } from "./components/Project.ts";
import { createCardDemo } from "./components/CardDemo.ts";
import { initMobileMenu } from "./utils/mobileMenu.ts";

/*document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
    <h1 class="text-6xl font-bold text-white">Hello Tailwind!</h1>
      <p class="bg-red-200">Das ist ugly</p>
      <div class="flex items-center"></div>
  </div>
`;*/

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const app = document.querySelector<HTMLDivElement>("#app")!;

// Navigation außerhalb vom app-Container, damit sie immer sichtbar ist
document.body.insertBefore(createNavigation(), app);

app.innerHTML = "";
app.appendChild(createHero());
app.appendChild(createProjects());
app.appendChild(createCardDemo());

//Init
initMobileMenu();
