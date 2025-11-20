import "./style.css";
import { PageNavigation } from "./components/shared/Navigation";
import { PageFooter } from "./components/shared/Footer";
import { CaseDigitalIntro } from "./components/pages/digital-prospekt/Intro";
import { CaseDigitalProblem } from "./components/pages/digital-prospekt/Problem";
import { CaseDigitalJourney } from "./components/pages/digital-prospekt/Timeline";
import { CaseDigitalLearning } from "./components/pages/digital-prospekt/Learning";
import { CaseDigitalTech } from "./components/pages/digital-prospekt/Tech";
import { CaseDigitalFeatures } from "./components/pages/digital-prospekt/Features";
import { CaseDigitalImpact } from "./components/pages/digital-prospekt/Impact";
import { CaseDigitalGrowth } from "./components/pages/digital-prospekt/Growth";
import { CaseDigitalGallery } from "./components/pages/digital-prospekt/Gallery";
import { CaseDigitalBeyond } from "./components/pages/digital-prospekt/Beyond";
import { CaseDigitalOutro } from "./components/pages/digital-prospekt/Outro";
import { initMobileMenu } from "./utils/mobileMenu";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("App container not found");
}

// Navigation
document.body.insertBefore(PageNavigation(), app);

// Main Content
app.appendChild(CaseDigitalIntro());
app.appendChild(CaseDigitalProblem());
app.appendChild(CaseDigitalJourney());
app.appendChild(CaseDigitalLearning());
app.appendChild(CaseDigitalTech());
app.appendChild(CaseDigitalFeatures());
app.appendChild(CaseDigitalImpact());
app.appendChild(CaseDigitalGrowth());
app.appendChild(CaseDigitalGallery());
app.appendChild(CaseDigitalBeyond());
app.appendChild(CaseDigitalOutro());

// Structure
app.appendChild(PageFooter());

// Init
initMobileMenu();
