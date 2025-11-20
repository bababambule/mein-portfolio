import { contentBlock } from "../../ContentBlock";

export function CaseDigitalOutro(): HTMLElement {
  const outroBody = document.createElement("div");
  outroBody.className = "flex flex-col gap-2 text-xl font-light";

  const text1 = document.createElement("p");
  text1.textContent =
    "What started as frustration over slow load times became a scalable SaaS product that enables new markets for orange promotion.";
  const text2 = document.createElement("p");
  text2.textContent =
    "Three years of iteration, five failed approaches, countless new skills – and ultimately a system that delivers.";

  outroBody.appendChild(text1);
  outroBody.appendChild(text2);

  const digitalOutro = contentBlock({
    showBadge: false,
    headingText: "From Bottleneck to Performance Champion",
    headingType: "h2",
    body: outroBody,
    blockVariant: "amberDark",
  });

  return digitalOutro;
}
