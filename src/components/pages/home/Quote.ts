import { createQuote } from "../../QuoteBlock";

export function HomeQuote(): HTMLElement {
  const quoteBody = `Want to work with me?<span class="cursorAnim">_</span>`;

  const quoteElement = createQuote({
    body: quoteBody,
    button: true,
    variant: "light",
    id: "contact",
  });

  return quoteElement;
}
