import { contentBlock } from "../../ContentBlock";
import { timeline } from "../../Timelines";
import timeline1 from "../../../assets/img/digital-prospekt/Shot 10.webp";
import timeline2 from "../../../assets/img/digital-prospekt/timeline2.webp";
import timeline3 from "../../../assets/img/digital-prospekt/timeline3.webp";

export function CaseDigitalJourney(): HTMLElement {
  const digitalJourney = document.createElement("div");

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
      src: timeline1,
      alt: "The second iteration of the Digital Prospekt had a good start, but quickly showed its flaws",
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
      src: timeline2,
      alt: "Airtable forced us to call every linked table by itself. Paired with their horribly slow API this system was destined to fail from the get go",
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
      src: timeline3,
      alt: "Nordcraft and Directus gave us the possibilties that we were looking for. Easy to use visual editor for fast paced development, a backend that allowed us to implement a multi-tenant system without building a custom admin interface and an insanely versatile API including graphQL",
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

  const journeyContent = contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "Three Years, Six Iterations and Running Two Systems",
    headingType: "h2",
    body: `
      <p class="text-amber-800">While I continued to operate the previous system for current clients, what began as a WordPress hack developed into a full product makeover. Constant learning, thorough testing, and the guts to give up on unsuccessful solutions.</p>
    `,
  });

  const journeyScroller = timeline(timelineObject);

  digitalJourney.appendChild(journeyContent);
  digitalJourney.appendChild(journeyScroller);

  return digitalJourney;
}
