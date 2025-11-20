import { createCaseStudyCard } from "../../CaseStudyCard";

import digitalProspekt from "../../../assets/img/card-digital-prospekt.webp";
import bonusWallet from "../../../assets/img/card-bonus-wallet.webp";
import iconPack from "../../../assets/img/card-icon-pack.webp";

export function HomeProjects(): HTMLElement {
  const projectCardSection = document.createElement("section");
  projectCardSection.setAttribute("id", "projects");
  projectCardSection.className = "bg-amber-600 py-12 text-amber-50";

  const container = document.createElement("div");
  container.className = "max-w-2xl mx-auto flex flex-col gap-24 px-6";

  container.appendChild(
    createCaseStudyCard({
      position: "left",
      href: "./digital-prospekt.html",
      headName: "Digi<wbr>tal",
      footerName: "Pro<wbr>spe<wbr>kt",
      role: "Product Designer",
      timeline: "Feb 2023 - present",
      img: digitalProspekt,
      top: "-60px",
    })
  );

  container.appendChild(
    createCaseStudyCard({
      position: "right",
      href: "./bonus-wallet.html",
      headName: "Bon<wbr>us",
      footerName: "Wal<wbr>let",
      role: "Product Designer",
      timeline: "Q2 2025 - present",
      img: bonusWallet,
    })
  );

  container.appendChild(
    createCaseStudyCard({
      position: "left",
      href: "./icon-pack.html",
      headName: "Cus<wbr>tom",
      footerName: "Ico<wbr>ns",
      role: "Product Designer",
      timeline: "2021",
      img: iconPack,
    })
  );

  projectCardSection.appendChild(container);

  return projectCardSection;
}
