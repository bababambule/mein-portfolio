import { contentBlock } from "../../ContentBlock";

export function CaseBonusOutro(): HTMLElement {
  const bonusOutro = contentBlock({
    showBadge: false,
    headingText: "From Pitch to Platform",
    headingType: "h2",
    body: `
      <p class="text-xl">What started as a trade show prototype became a white label platform that helps furniture retailers with actual cost issues. A Q1 2026 launch pipeline that demonstrates market demand, eight months of development, and zero competitors. A system that provides value to both shops and their clients.</p>
  `,
    blockVariant: "amberDark",
  });

  return bonusOutro;
}
