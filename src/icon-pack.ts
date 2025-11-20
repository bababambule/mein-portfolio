import "./style.css";
import { PageNavigation } from "./components/shared/Navigation";
import { PageFooter } from "./components/shared/Footer";
import { CaseIconIntro } from "./components/pages/icon-pack/Intro";
import { CaseIconGallery } from "./components/pages/icon-pack/Gallery";
import { CaseIconApproach } from "./components/pages/icon-pack/Approach";
import { CaseIconOutro } from "./components/pages/icon-pack/Outro";
import { initMobileMenu } from "./utils/mobileMenu";

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
