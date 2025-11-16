import { createQuote } from "../../QuoteBlock";

export function AboutQuote(): HTMLElement {
  const quoteBody = `Want to work with me?<span>_</span>`;

  const result = createQuote({
    body: quoteBody,
    button: true,
    variant: "dark",
  });

  return result;
}
