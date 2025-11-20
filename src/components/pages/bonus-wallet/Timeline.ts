import { contentBlock } from "../../ContentBlock";
import { timeline } from "../../Timelines";
import timeline1 from "../../../assets/img/bonus-wallet/timeline 1.webp";
import timeline2 from "../../../assets/img/bonus-wallet/timeline 2.webp";

export function CaseBonusTimeline(): HTMLElement {
  const bonusTimeline = document.createElement("div");

  const timlineContent = contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "From Trade Show to Beta",
    headingType: "h2",
    body: "<p class='text-lg mt-4'>What started as a Figma prototype at a trade association event became a fully functional Progressive Web App – with clients signed before we even finished the pitch.</p>",
  });

  const timelineObject = [
    {
      date: "Q2 2025",
      title: "Trade Show Launch",
      text: "Pitched Figma prototype at furniture trade association event, signed first clients on-site.",
    },
    {
      date: "Q3 2025",
      title: "Core Development",
      text: "Built multi-tenant architecture, magic link authentication, GraphQL data layer on Hetzner VPS with Docker and Directus.",
    },
    {
      src: timeline1,
      alt: "Data Model Management in Directus",
    },
    {
      date: "Q4 2025",
      title: "Integration & Beta Developed",
      text: "first ERP/POS integration via Directus flows, embedded Plausible Analytics, started retailer beta testing.",
    },
    {
      date: "December 2025",
      title: "Initial User Beta",
      text: "Testing for loyalty features, coupon activation, and PWA installation.",
    },
    {
      src: timeline2,
      alt: "We'll conduct a thorough live user testing session during december to get the product market ready for Q1 2026",
    },
    {
      date: "Q1 2026",
      title: "Launch and Expansion",
      text: "Going live with 3 retailers, second ERP/POS integration in development.",
    },
  ];

  const timelineScroller = timeline(timelineObject);

  bonusTimeline.appendChild(timlineContent);
  bonusTimeline.appendChild(timelineScroller);

  return bonusTimeline;
}
