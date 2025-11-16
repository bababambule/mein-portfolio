import "./style.css";
import { createNavigation } from "./components/Navigation.ts";
import { initMobileMenu } from "./utils/mobileMenu.ts";
import { aboutIntroSection } from "./components/AboutIntro.ts";
import { aboutBrandSection } from "./components/AboutBrands.ts";
import { AboutCvSection } from "./components/AboutCv.ts";
import { contentBlock } from "./components/ContentBlock.ts";
import { createQuote } from "./components/QuoteBlock.ts";
import { footerElement } from "./components/Footer.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;

// Navigation außerhalb vom app-Container, damit sie immer sichtbar ist
document.body.insertBefore(createNavigation(), app);

//About page Content
app.innerHTML = "";
app.appendChild(aboutIntroSection());
app.appendChild(aboutBrandSection());
app.appendChild(AboutCvSection());
app.appendChild(
  contentBlock({
    showBadge: false,
    headingText: "Beyond the work",
    headingType: "h2",
    body: `
        <div>
            <h3 class="text-xl font-semibold mb-1">No place for hate</h3>
            <div class="flex flex-col gap-4 mb-6">
                <p>I draw a clear line when it comes to racism, xenophobia, homophobia, or transphobia in my life or at work.</p>
                <p>I strongly believe in equality, inclusive communities and advocate for animal rights. Wherever possible I try to prioritize sustainable projects and live a vegan lifestyle since 2017.</p>
            </div>
            <h3 class="text-xl font-semibold mb-1">After Work</h3>
            <div class="flex flex-col gap-4 mb-6">
                <p>Before I moved to East Frisia, my wife and I lived in Berlin, where I co-hosted a popular bar quiz and began my career as a pro-wrestler and pro-wrestling commentator in Germany's indie scene.</p>
                <p>I hung up my boots in 2023, shortly before my kid was born. Since then, I’ve joined a local karting club, cruise on my longboard along the coast, and even started windsurfing.</p>
                <p>Besides that, I enjoy drawing, gaming, music, and nerding out over tech and pop culture. I’m always open to trying and learning new things, and I strive to keep an open and curious mind.</p>
            </div>
        </div>
    `,
  })
);
app.appendChild(
  createQuote({
    body: `Want to work with me?<span>_</span>`,
    button: true,
    variant: "dark",
  })
);

//footer
app.appendChild(footerElement());

//Init
initMobileMenu();
