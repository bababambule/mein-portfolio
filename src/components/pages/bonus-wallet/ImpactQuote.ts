import { createQuote } from "../../QuoteBlock";

export function CaseBonusImpactQuote(): HTMLElement {
  const bonusImpactQuote = createQuote({
    body: '"Clients are impressed by the speed of implementation. Real-time analytics via Plausible enable better iteration of ad creatives for Facebook and Instagram – a game changer for data-driven marketing."',
    button: false,
    variant: "dark",
  });

  return bonusImpactQuote;
}
