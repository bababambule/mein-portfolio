import "./style.css";
import { PageNavigation } from "./components/shared/Navigation";
import { PageFooter } from "./components/shared/Footer";
import { AboutIntro } from "./components/pages/about/Intro";
import { AboutBrands } from "./components/pages/about/Brands";
import { AboutCareer } from "./components/pages/about/Career";
import { AboutMe } from "./components/pages/about/About";
import { AboutQuote } from "./components/pages/about/Quote";
import { initMobileMenu } from "./utils/mobileMenu";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("App container not found");
}

// Navigation
document.body.insertBefore(PageNavigation(), app);

// Main Content
app.appendChild(AboutIntro());
app.appendChild(AboutBrands());
app.appendChild(AboutCareer());
app.appendChild(AboutMe());
app.appendChild(AboutQuote());

// Page Structure
app.appendChild(PageFooter());

// Init
initMobileMenu();
