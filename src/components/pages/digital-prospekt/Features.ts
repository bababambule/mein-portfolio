import { BigCardSlider } from "../../CoreFeatureSection";
import multiTenant from "../../../assets/img/digital-prospekt/multiTenant.webp";
import pagebuilder from "../../../assets/img/digital-prospekt/pageBuilder.webp";
import mobileFirst from "../../../assets/img/digital-prospekt/mobileFirst.webp";

export function CaseDigitalFeatures(): HTMLElement {
  const coreFeatureArray = [
    {
      title: "Multi-tenant architecture",
      text: "Many clients, one system. Every client in Directus receives a dashboard with content that is restricted to certain users. dynamic theme creation using the colours of the client's brand.",
      src: multiTenant,
    },
    {
      title: "Dynamic Page Builder",
      text: "Using Directus's Many-to-Any relations, flexible page structures are possible. Clients can choose from templates without me touching code.",
      src: pagebuilder,
    },
    {
      title: "Mobile-First Design",
      text: "Mobile Design True mobile-first design is made possible by Nordcraft; No more CSS cascade wrestling like in Webflow.",
      src: mobileFirst,
    },
  ];

  const digitalFeatures = BigCardSlider({
    title: "Core Features That Make the Difference",
    list: coreFeatureArray,
  });
  digitalFeatures.classList.add("bg-slate-600");

  return digitalFeatures;
}
