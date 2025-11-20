import { contentBlock } from "../../ContentBlock";

export function CaseBonusIntro(): HTMLElement {
  const introBodyWrap = document.createElement("div");
  introBodyWrap.className = "max-w-6xl mx-auto";

  const introBody = document.createElement("p");
  introBody.className = "text-xl font-light";
  introBody.textContent =
    "How I built a Progressive Web App that provides genuine customer value while saving furniture retailers 5,600 – 13,100 € per mailing.";

  introBodyWrap.appendChild(introBody);

  const statCardWrapper = document.createElement("div");
  statCardWrapper.className =
    "-ml-6 -mr-6 my-6 grid grid-cols-2 gap-4 max-w-6xl mx-auto";

  const introStats = [
    {
      title: "64%",
      text: "Lower WhatsApp costs",
    },
    {
      title: "€13,000",
      text: "Saved per customer mailing",
    },
    {
      title: "8 Months",
      text: "From concept to beta",
    },
    {
      title: "3 retailers",
      text: "Launching Q1 2026",
    },
  ];

  introStats.forEach((stat) => {
    const statCard = document.createElement("div");
    statCard.className = "bg-amber-900/10 p-4 rounded-lg";

    const statCardTitle = document.createElement("p");
    statCardTitle.className = "text-2xl font-bold";
    statCardTitle.textContent = stat.title;

    const statCardBody = document.createElement("p");
    statCardBody.textContent = stat.text;

    statCard.appendChild(statCardTitle);
    statCard.appendChild(statCardBody);
    statCardWrapper.appendChild(statCard);
  });

  const introElement = contentBlock({
    blockVariant: "amberLight",
    badgeText: "Bonus Wallet",
    badgeVariant: "slate",
    showBadge: true,
    headingText: "White Label PWA That Cuts Marketing Costs",
    headingType: "h1",
    body: introBodyWrap,
  });
  introElement.classList.add("pt-20");

  introBodyWrap.appendChild(statCardWrapper);

  return introElement;
}
