import { FancyList } from "../../FancyList";
import puzzle from "../../../assets/img/growth/puzzle.webp";
import multiTenant from "../../../assets/img/growth/multiTenant.webp"; // Create
import api from "../../../assets/img/growth/api.webp";
import magic from "../../../assets/img/growth/magic.webp"; //Create
import sync from "../../../assets/img/growth/sync.webp"; // Create
import analytics from "../../../assets/img/growth/analytics.webp";

export function CaseBonusGrowth(): HTMLElement {
  const growthList = [
    {
      title: "Progressive Web Apps",
      text: "Home screen installation, manifest generation, offline capabilities, push notifications without app store dependencies.",
      src: puzzle,
    },
    {
      title: "Multi-Tenant Architecture",
      text: "Subdomain routing, isolated customer data per retailer, dynamic configuration generation while maintaining single codebase.",
      src: multiTenant,
    },
    {
      title: "API Integrations Across Systems",
      text: "Connected multiple proprietary ERP, CRM, and POS systems with varying standards. Built server-side flows in Directus for maintainable integrations.",
      src: api,
    },
    {
      title: "Magic Link Authentication",
      text: "Implemented passwordless phone-based authentication in Directus, including CRM lookup for auto-fill functionality.",
      src: magic,
    },
    {
      title: "Real-Time Data Synchronization",
      text: "GraphQL queries for live loyalty points, order status updates, and document delivery synced across systems.",
      src: sync,
    },
    {
      title: "Embedded Analytics",
      text: "Integrated Plausible Analytics into Directus backend with retailer-facing dashboards for real-time campaign metrics.",
      src: analytics,
    },
  ];

  const bonusGrowth = FancyList({
    title: "My Technical Growth",
    text: "Three years of failed iterations taught me more than any tutorial. Here are the skills I built from the ground up.",
    list: growthList,
  });
  bonusGrowth.classList.add("bg-slate-600");

  return bonusGrowth;
}
