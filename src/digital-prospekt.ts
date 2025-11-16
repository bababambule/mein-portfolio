import "./style.css";
import { createNavigation } from "./components/shared/Navigation.ts";
import { initMobileMenu } from "./utils/mobileMenu.ts";
import { contentBlock } from "./components/ContentBlock.ts";
import { imageSection } from "./components/ImageComponent.ts";
import { timeline } from "./components/Timelines.ts";
import { imageContentBlock } from "./components/ImageTextSection.ts";
import { FancyList } from "./components/FancyList.ts";
import { BigCardSlider } from "./components/CoreFeatureSection.ts";
import { createQuote } from "./components/QuoteBlock.ts";

import placeholderPortrait from "./assets/img/placeholder/placeholder-9-16.webp";
import { footerElement } from "./components/shared/Footer.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;

// Navigation außerhalb vom app-Container, damit sie immer sichtbar ist
document.body.insertBefore(createNavigation(), app);

app.innerHTML = "";
app.classList.add("mt-10");

//Intro
app.appendChild(
  contentBlock({
    blockVariant: "amberLight",
    badgeText: "Digital Prospekt",
    badgeVariant: "slate",
    showBadge: true,
    headingText: "From Bottleneck to Performance Champion",
    headingType: "h1",
    body: `
    <p class="text-xl font-light text-amber-800">How I reduced costs by €17,000 and load times by 67% by converting an outdated system into a scalable multi-tenant product.</p>
    <div class="-ml-6 -mr-6 my-6 grid grid-cols-2 gap-4">
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">67%</p>
        <p>Faster load times</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">93%</p>
        <p>Reduced production time</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">600%</p>
        <p>More conversions</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">€15,000</p>
        <p>Cost savings annually</p>
      </div>
    </div>
  `,
  })
);

// Intro image
app.appendChild(
  imageSection({
    src: placeholderPortrait,
    alt: "A modern SaaS product for furniture marketing",
    ratio: "Portrait",
    variant: "lightToSlate",
  })
);

// Problem Section
const problemList = [
  `<span class="font-semibold">5-6 second load times</span> (down from 15-20s, but still too slow)`,
  `<span class="font-semibold">2–4 weeks production time</span> per client`,
  `<span class="font-semibold">€624/year per client</span> (Webflow + Wized) <span class="font-semibold">+ €4,800/year</span> for Airtable seats`,
  `<span class="font-semibold">No scalability</span> – each client needed a separate Webflow instance`,
  `<span class="font-semibold">Poor content management</span> – Airtable's interface was unintuitive, API bottlenecks killed performance`,
];

app.appendChild(
  contentBlock({
    blockVariant: "slateDark",
    showBadge: false,
    headingText: "A System at its limit",
    headingType: "h2",
    body: `
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-6">
          <p>Furniture retailers wanted targeted digital brochures with optimized content for different audiences. The pitch worked. The technology didn't.</p>
          <p>I inherited a WordPress/WooCommerce system in February 2023 that took 15 to 20 seconds to load. Even after switching to Webflow + Wized + Airtable, the situation remained bad. The reality was harsh:</p>
      </div> 
      <div class="-mx-6">
        <div class="flex flex-col">
          ${problemList
            .map(
              (item) =>
                `<p class="border border-slate-700 border-b-0 last-of-type:border-b py-4 px-6">${item}</p>`
            )
            .join("")}
        </div>
      </div>
    `,
  })
);

// Problem image
app.appendChild(
  imageSection({
    src: placeholderPortrait,
    alt: "The old legacy system was build entirely in Wordpress and wooCommerce and beside horendous loading times it was painful to create new digital flyers",
    ratio: "Portrait",
    variant: "slateToLight",
  })
);

// Journey Section
app.appendChild(
  contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "Three Years, Six Iterations and Running Two Systems",
    headingType: "h2",
    body: `
      <p class="text-amber-800">While I continued to operate the previous system for current clients, what began as a WordPress hack developed into a full product makeover. Constant learning, thorough testing, and the guts to give up on unsuccessful solutions.</p>
    `,
  })
);

// Timeline Section
const timelineObject = [
  {
    date: "Q1 2023",
    title: "Start at orange promotion",
    text: "Inherited WordPress/WooCommerce (15-20s load times). Built first Webflow instance, experimented with multi-tenant using Finsweet and HTMX.",
  },
  {
    date: "Q2 2023",
    title: "Webflow + Airtable via Zapier/Make",
    text: "Product sync through automation. Too expensive and error-prone.",
  },
  {
    src: "img-src",
    alt: "Description Text",
  },
  {
    date: "Q3 2023",
    title: "Learned Wized, API Integration",
    text: "Migrated to Webflow + Wized with direct Airtable API. Multi-tenant went into production.",
  },
  {
    date: "Q4 2023",
    title: "Switched to Per-Client Instances",
    text: "Abandoned multi-tenant. Each client got their own Webflow instance. High maintenance – built component library as mitigation.",
  },
  {
    src: "img-src",
    alt: "Description Text",
  },
  {
    date: "Q2 2024",
    title: "Testing self-hosted NocoDB",
    text: "Attempted self-hosted alternative. Load times back to 15-20s, poor interface. Failed.",
  },
  {
    date: "Q3 2024",
    title: "Breakthrough: Nordcraft + Directus",
    text: "Directus provided easy backend with multi-tenant capabilities. Load times using GraphQL are phenomenal.",
  },
  {
    src: "img-src",
    alt: "Description Text",
  },
  {
    date: "Q4 2024",
    title: "Beta Launch",
    text: "2 clients, 10 brochures live. 4 more clients in pipeline. Production time reduced to hours.",
  },
  {
    date: "Coming Soon",
    title: "Full Migration & SaaS Launch",
    text: "Migrating existing clients. Refining design system, implementing accessibility, optimizing for self-service. Goal: Sub-1.5s load times.",
  },
];

app.appendChild(timeline(timelineObject));

// Learnings Section
app.appendChild(
  imageContentBlock({
    variant: "amberToSlate",
    title: "Self-Hosted PWA Platform",
    body: "I built a Progressive Web App that delivers app-store quality without app-store approval – giving furniture retailers white label loyalty platforms in one week once ERP integrations are live.",
    src: placeholderPortrait,
    alt: "Wow I learned all of that?!",
    color: "amber",
  })
);

// Tech Section

const myTech = [
  {
    title: "Figma",
    text: "Design system and rapid prototyping",
    src: "my-image.jpg",
  },
  {
    title: "Nordcraft",
    text: "PWA frontend with component-based architecture",
    src: "my-image.jpg",
  },
  {
    title: "Directus",
    text: "Headless CMS on PostgreSQL with server-side API flows",
    src: "my-image.jpg",
  },
  {
    title: "VPS + Docker + AWS S3",
    text: "Self-hosted infrastructure, full data sovereignty",
    src: "my-image.jpg",
  },
  {
    title: "Plausible Analytics",
    text: "Embedded real-time tracking for retailers",
    src: "my-image.jpg",
  },
];

const techSection = FancyList({
  title: "Tech Stack Breakdown",
  list: myTech,
});
techSection.classList.add("bg-slate-600");

app.appendChild(techSection);

// Core Feature Section
const coreFeatureArray = [
  {
    title: "Multi-tenant architecture",
    text: "Wildcard subdomains route customers to correct retailer, each with isolated data and dynamic manifest.json for branded app experience",
    src: "myImage.png",
  },
  {
    title: "Magic link authentication",
    text: "Phone-only login with CRM lookup for auto-filled customer details, no passwords needed",
    src: "myImage.png",
  },
  {
    title: "Cost-optimized WhatsApp marketing",
    text: "Service messages (€0.04) instead of marketing messages (€0.11) save 64% on messaging costs",
    src: "myImage.png",
  },
  {
    title: "Dynamic coupons",
    text: "Customers load coupons in-app with 60-minute validity window, QR scan at checkout applies discount automatically",
    src: "myImage.png",
  },
  {
    title: "Live loyalty points & order tracking",
    text: "Real-time sync with ERP/CRM systems for point balances, order status, and digital document delivery",
    src: "myImage.png",
  },
];

const coreFeaturesSection = BigCardSlider({
  title: "Core Features That Make the Difference",
  list: coreFeatureArray,
});
coreFeaturesSection.classList.add("bg-slate-600");

app.appendChild(coreFeaturesSection);

// Impact Section
const impactSection = contentBlock({
  showBadge: false,
  headingText: "Faster. Cheaper. Simply lovely.",
  headingType: "h2",
  body: `
    <p>Three years of iteration paid off. The new system outperforms the old solution in every relevant metric – and is currently being expanded into a SaaS product.</p>
    <div class="mt-6 -mx-6 grid grid-cols-2 gap-4">

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Faster Performance</p>
          <p class="text-2xl font-semibold">67%</p>
        </div>
        <p>FCP reduced from 5-6s to under 2s.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Reduced Production Time</p>
          <p class="text-2xl font-semibold">93%</p>
        </div>
        <p>From 2 weeks to under 1 day (often hours).</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4 col-span-2">
        <div>
          <p class="font-semibold">Longer Session Duration</p>
          <p class="text-2xl font-semibold">+83%</p>
        </div>
        <p>From 30 to 55 seconds. Users actively engage.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Lower Bounce Rate</p>
          <p class="text-2xl font-semibold">-14%</p>
        </div>
        <p>Decresed from 85% to 73%. Better UX = more engagement.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">More Conversions</p>
          <p class="text-2xl font-semibold">600%</p>
        </div>
        <p>2-3 calls per brochure → 20+ leads/week for one client.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4 col-span-2">
        <div>
          <p class="font-semibold">Annual Cost Savings</p>
          <p class="text-2xl font-semibold">€17,000</p>
        </div>
        <p>€4,800 Airtable + €12,288 Webflow/Wized eliminated. Only €348/year for Nordcraft across 12 clients.</p>
      </div>

    </div>
  `,
});

app.appendChild(impactSection);

//Quote Section
app.appendChild(
  createQuote({
    body: '"Clients are impressed by the speed of implementation. Real-time analytics via Plausible enable better iteration of ad creatives for Facebook and Instagram – a game changer for data-driven marketing."',
    button: false,
    variant: "dark",
  })
);

//Growth Section

const growthList = [
  {
    title: "VPS Administration & Docker",
    text: "Server setup, container orchestration, self-hosting Directus and Plausible Analytics",
    src: placeholderPortrait,
  },
  {
    title: "REST & GraphQL APIs",
    text: "From first REST calls in Airtable to complex GraphQL queries in Directus",
    src: placeholderPortrait,
  },
  {
    title: "Headless CMS Architecture",
    text: "Multi-tenant setup, M2A relations, dynamic theming systems",
    src: placeholderPortrait,
  },
  {
    title: "Component-Based Design",
    text: "From Webflow cascades to Nordcraft's modern component system (principles transferable to frameworks like Vue.js or React)",
    src: placeholderPortrait,
  },
  {
    title: "Database Design",
    text: "Relational data modeling for multi-tenant systems",
    src: placeholderPortrait,
  },
  {
    title: "Analytics & Tracking",
    text: "Cookieless tracking with Plausible and true server-side data analytics",
    src: placeholderPortrait,
  },
  {
    title: "Product Thinking",
    text: "From technical requirements to real business outcomes",
    src: placeholderPortrait,
  },
  {
    title: "Agile Iteration",
    text: "Milestone-based development, rapid prototyping, courage to abandon",
    src: placeholderPortrait,
  },
];

const growthSection = FancyList({
  title: "My Technical Growth",
  text: "Three years of failed iterations taught me more than any tutorial. Here are the skills I built from the ground up.",
  list: growthList,
});
growthSection.classList.add("bg-slate-600");

app.appendChild(growthSection);

//Growthquote Section
app.appendChild(
  createQuote({
    body: '"The biggest learning moment was using a VPS with Docker. Suddenly I had full control over the stack – and the ability to self-host complex systems instead of relying on expensive SaaS solutions."',
    button: false,
    variant: "slate",
  })
);

// Beyond section
app.appendChild(
  contentBlock({
    headingText: "Beyond this Project",
    headingType: "h2",
    showBadge: false,
    blockVariant: "slateDark",
    body: `
      <p>My role as the online-lead showed me how valuable it is to combine design, development and business thinking.</p>
      <ul class="list-disc px-6 py-6">
        <li>Mentored two junior designers and onboarded them to API integration</li>
        <li>Worked in parallel on another SaaS product for orange promotion</li>
        <li>Created digital brochures with the old Webflow/Wized/Airtable system (while building the new one)</li>
        <li>Produced ad graphics and videos for Meta ads in Canva, Photoshop, Illustrator, After Effects and Premiere</li>
        <li>Provided consulting for other agency projects</li>
      </ul>
    `,
  })
);

// Image Block
const imageList = [
  {
    src: placeholderPortrait,
    alt: "alt text",
  },
  {
    src: placeholderPortrait,
    alt: "alt text",
  },
];

imageList.forEach((image) => {
  app.appendChild(
    imageSection({
      src: image.src,
      alt: image.alt,
      variant: "light",
      ratio: "Portrait",
    })
  );
});

// Outro
app.appendChild(
  contentBlock({
    showBadge: false,
    headingText: "From Bottleneck to Performance Champion",
    headingType: "h2",
    body: `
      <p class="text-xl">What started as frustration over slow load times became a scalable SaaS product that enables new markets for orange promotion. Three years of iteration, five failed approaches, countless new skills – and ultimately a system that delivers.</p>
  `,
    blockVariant: "amberDark",
  })
);

//Footer
app.appendChild(footerElement());

initMobileMenu();
