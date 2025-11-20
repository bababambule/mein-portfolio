import { FancyList } from "../../FancyList";
import figma from "../../../assets/img/tools/Figma.webp";
import nordcraft from "../../../assets/img/tools/Nordcraft.webp";
import directus from "../../../assets/img/tools/Directus.webp";
import docker from "../../../assets/img/tools/Docker.webp";
import plausible from "../../../assets/img/tools/Plausible.webp";

export function CaseBonusTech(): HTMLElement {
  const myTech = [
    {
      title: "Figma",
      text: "Design system and rapid prototyping",
      src: figma,
    },
    {
      title: "Nordcraft",
      text: "PWA frontend with component-based architecture",
      src: nordcraft,
    },
    {
      title: "Directus",
      text: "Headless CMS on PostgreSQL with server-side API flows",
      src: directus,
    },
    {
      title: "VPS + Docker + AWS S3",
      text: "Self-hosted infrastructure, full data sovereignty",
      src: docker,
    },
    {
      title: "Plausible Analytics",
      text: "Embedded real-time tracking for retailers",
      src: plausible,
    },
  ];

  const bonusTech = FancyList({
    title: "Tech Stack Breakdown",
    list: myTech,
  });
  bonusTech.classList.add("bg-slate-600");

  return bonusTech;
}
