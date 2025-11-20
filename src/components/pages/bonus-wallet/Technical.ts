import { contentBlock } from "../../ContentBlock";
import { CreateHeading } from "../../Headline";

export function CaseBonusTechnical(): HTMLElement {
  const technicalBody = document.createElement("div");
  technicalBody.className = "flex flex-col gap-8";

  const challengesList = [
    {
      title: "Multi-Tenant at Scale",
      text: "Built subdomain routing that isolates customer data per retailer while maintaining single codebase. Dynamic manifest.json generation ensures branded app experience with high security standards.",
    },
    {
      title: "ERP/POS Integration",
      text: "Integrated multiple proprietary systems with varying API standards. Server-side flows in Directus handle all API calls, keeping integrations maintainable. First system complete Q4 2025, second Q1 2026.",
    },
    {
      title: "PWA Installation",
      text: "Implemented cross-platform home screen installation without app store approval. Critical advantage: no content restrictions like Apple App Store or Google Play Store – particularly valuable for platforms with user-generated content.",
    },
    {
      title: "Embedded Analytics",
      text: "Integrated Plausible Analytics directly into Directus backend with retailer-facing dashboards for real-time campaign performance data.",
    },
  ];

  challengesList.forEach((item) => {
    const challengeItem = document.createElement("div");
    challengeItem.className = "flex flex-col gap-2";

    const challengeHeading = CreateHeading({
      type: "h3",
      text: item.title,
    });

    const challengeText = document.createElement("p");
    challengeText.textContent = item.text;

    challengeItem.appendChild(challengeHeading);
    challengeItem.appendChild(challengeText);
    technicalBody.appendChild(challengeItem);
  });

  const bonusTechnical = contentBlock({
    showBadge: false,
    headingText: "Technical Challenges",
    headingType: "h2",
    blockVariant: "slateDark",
    body: technicalBody,
  });
  return bonusTechnical;
}
