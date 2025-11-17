import "./style.css";
import { PageNavigation } from "./components/shared/Navigation.ts";
import { PageFooter } from "./components/shared/Footer.ts";
import { CaseIconIntro } from "./components/pages/icon-pack/Intro.ts";
import { CaseIconGallery } from "./components/pages/icon-pack/Gallery.ts";
import { CaseIconApproach } from "./components/pages/icon-pack/Approach.ts";
import { CaseIconOutro } from "./components/pages/icon-pack/Outro.ts";
import { initMobileMenu } from "./utils/mobileMenu.ts";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("App container not found");
}

// Navigation
document.body.insertBefore(PageNavigation(), app);

// Main Content
app.appendChild(CaseIconIntro());
app.appendChild(CaseIconGallery());
app.appendChild(CaseIconApproach());
app.appendChild(CaseIconOutro());

// Page Structure
app.appendChild(PageFooter());

// Init
initMobileMenu();
