import "./style.css";
import { PageNavigation } from "./components/shared/Navigation";
import { PageFooter } from "./components/shared/Footer";
import { CaseBonusIntro } from "./components/pages/bonus-wallet/Intro";
import { CaseBonusIntroImage } from "./components/pages/bonus-wallet/IntroImage";
import { CaseBonusProblem } from "./components/pages/bonus-wallet/Problem";
import { CaseBonusTimeline } from "./components/pages/bonus-wallet/Timeline";
import { CaseBonusLearning } from "./components/pages/bonus-wallet/Learning";
import { CaseBonusTech } from "./components/pages/bonus-wallet/Tech";
import { CaseBonusFeatures } from "./components/pages/bonus-wallet/Features";
import { CaseBonusImpact } from "./components/pages/bonus-wallet/Impact";
import { CaseBonusImpactQuote } from "./components/pages/bonus-wallet/ImpactQuote";
import { CaseBonusGrowth } from "./components/pages/bonus-wallet/Growth";
import { CaseBonusTechnical } from "./components/pages/bonus-wallet/Technical";
import { CaseBonusGrowthQuote } from "./components/pages/bonus-wallet/GrowthQuote";
import { CaseBonusBeyond } from "./components/pages/bonus-wallet/Beyond";
import { CaseBonusGallery } from "./components/pages/bonus-wallet/Gallery";
import { CaseBonusOutro } from "./components/pages/bonus-wallet/Outro";
import { initMobileMenu } from "./utils/mobileMenu";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("App container not found");
}

// Navigation
document.body.insertBefore(PageNavigation(), app);

// Main Content
app.appendChild(CaseBonusIntro());
app.appendChild(CaseBonusIntroImage());
app.appendChild(CaseBonusProblem());
app.appendChild(CaseBonusTimeline());
app.appendChild(CaseBonusLearning());
app.appendChild(CaseBonusTech());
app.appendChild(CaseBonusFeatures());
app.appendChild(CaseBonusTechnical());
app.appendChild(CaseBonusImpact());
app.appendChild(CaseBonusImpactQuote());
app.appendChild(CaseBonusGrowth());
app.appendChild(CaseBonusGrowthQuote());
app.appendChild(CaseBonusBeyond());
app.appendChild(CaseBonusGallery());
app.appendChild(CaseBonusOutro());

// Structure
app.appendChild(PageFooter());

// Init
initMobileMenu();
