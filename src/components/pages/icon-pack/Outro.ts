import { contentBlock } from "../../ContentBlock";

export function CaseIconOutro(): HTMLElement {
  const outroBodyContent = `
        <p class="text-xl font-light">24 custom icons that elevate brand consistency while honoring mid-century design principles. From atomic starbursts to Eames-era furniture silhouettes – every icon tells the brand story.</p>
    `;

  const outroElement = contentBlock({
    showBadge: false,
    headingText: "Icons that enhance the brand",
    headingType: "h2",
    body: outroBodyContent,
  });

  return outroElement;
}
