import "./style.css";
import { PageNavigation } from "./components/shared/Navigation";
import { PageFooter } from "./components/shared/Footer";
import { HomeHero } from "./components/pages/home/Hero";
import { HomeIntro } from "./components/pages/home/Intro";
import { HomeProjects } from "./components/pages/home/Projects";
import { HomeAbout } from "./components/pages/home/About";
import { HomeQuote } from "./components/pages/home/Quote";
import { initMobileMenu } from "./utils/mobileMenu";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("App container not found");
}

// Navigation
document.body.insertBefore(PageNavigation(), app);

// Main Content
app.appendChild(HomeHero());
app.appendChild(HomeIntro());
app.appendChild(HomeProjects());
app.appendChild(HomeAbout());
app.appendChild(HomeQuote());

// Page Structure
app.appendChild(PageFooter());

// Init
initMobileMenu();
