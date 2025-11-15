import "./style.css";
import { createNavigation } from "./components/Navigation.ts";
import { initMobileMenu } from "./utils/mobileMenu.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.className = "bg-amber-50 text-base/6";

// Navigation außerhalb vom app-Container, damit sie immer sichtbar ist
document.body.insertBefore(createNavigation(), app);

app.innerHTML = "";

//Init
initMobileMenu();
