import { createQuote } from "../../QuoteBlock";

export function CaseBonusGrowthQuote(): HTMLElement {
  const bonusGrowthQuote = createQuote({
    body: '"Learning PWA technology was a game-changer. Being able to deliver a full app experience without app store approval opens possibilities – especially for platforms with user-generated content that app stores restrict."',
    button: false,
    variant: "slate",
  });

  return bonusGrowthQuote;
}
