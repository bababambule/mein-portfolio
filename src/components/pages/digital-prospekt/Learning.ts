import { imageContentBlock } from "../../ImageTextSection";
import learning from "../../../assets/img/digital-prospekt/learnings.webp";

export function CaseDigitalLearning(): HTMLElement {
  const learningBody = document.createElement("div");
  learningBody.className = "flex flex-col gap-2";

  const text1 = document.createElement("p");
  text1.textContent =
    "These three years were a masterclass in self-directed learning: From REST and GraphQL APIs to VPS administration with Docker and component-based design in Nordcraft.";

  const text2 = document.createElement("p");
  text2.textContent =
    "Every failed iteration pushed me forward technically – and taught me when to abandon a solution instead of trying to fix it.";

  learningBody.appendChild(text1);
  learningBody.appendChild(text2);

  const digitalLearning = imageContentBlock({
    variant: "amberToSlate",
    title: "What I Learned",
    body: learningBody,
    src: learning,
    alt: "Wow I learned all of that?!",
    color: "amber",
  });

  return digitalLearning;
}
