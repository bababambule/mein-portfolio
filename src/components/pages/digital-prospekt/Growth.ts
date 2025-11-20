import { FancyList } from "../../FancyList";
import { createQuote } from "../../QuoteBlock";
import agile from "../../../assets/img/growth/agile.webp";
import analytics from "../../../assets/img/growth/analytics.webp";
import api from "../../../assets/img/growth/api.webp";
import design from "../../../assets/img/growth/component-based.webp";
import database from "../../../assets/img/growth/database.webp";
import headless from "../../../assets/img/growth/headless.webp";
import server from "../../../assets/img/growth/server.webp";
import thinking from "../../../assets/img/growth/thinking.webp";

export function CaseDigitalGrowth(): HTMLElement {
  const digitalGrowth = document.createElement("div");

  const growthList = [
    {
      title: "VPS Administration & Docker",
      text: "Server setup, container orchestration, self-hosting Directus and Plausible Analytics",
      src: server,
    },
    {
      title: "REST & GraphQL APIs",
      text: "From first REST calls in Airtable to complex GraphQL queries in Directus",
      src: api,
    },
    {
      title: "Headless CMS Architecture",
      text: "Multi-tenant setup, M2A relations, dynamic theming systems",
      src: headless,
    },
    {
      title: "Component-Based Design",
      text: "From Webflow cascades to Nordcraft's modern component system (principles transferable to frameworks like Vue.js or React)",
      src: design,
    },
    {
      title: "Database Design",
      text: "Relational data modeling for multi-tenant systems",
      src: database,
    },
    {
      title: "Analytics & Tracking",
      text: "Cookieless tracking with Plausible and true server-side data analytics",
      src: analytics,
    },
    {
      title: "Product Thinking",
      text: "From technical requirements to real business outcomes",
      src: thinking,
    },
    {
      title: "Agile Iteration",
      text: "Milestone-based development, rapid prototyping, courage to abandon",
      src: agile,
    },
  ];

  const growthContent = FancyList({
    title: "My Technical Growth",
    text: "Three years of failed iterations taught me more than any tutorial. Here are the skills I built from the ground up.",
    list: growthList,
  });
  growthContent.classList.add("bg-slate-600");

  const growthQuote = createQuote({
    body: '"The biggest learning moment was using a VPS with Docker. Suddenly I had full control over the stack – and the ability to self-host complex systems instead of relying on expensive SaaS solutions."',
    button: false,
    variant: "slate",
  });

  digitalGrowth.appendChild(growthContent);
  digitalGrowth.appendChild(growthQuote);

  return digitalGrowth;
}
