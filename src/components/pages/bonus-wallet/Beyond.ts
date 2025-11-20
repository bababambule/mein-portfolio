import { contentBlock } from "../../ContentBlock";

export function CaseBonusBeyond(): HTMLElement {
  const bodyContent = `
      <p>As the senior product designer on Bonus Wallet, I architected the entire backend system while collaborating with my junior colleague on UI and my product owner on strategy. In parallel:
      <ul class="list-disc px-6 py-6 flex flex-col gap-4">
        <li>Advised my junior colleague who led UI design for this project, helping design and develop crucial UI elements and Nordcraft components</li>
        <li>Maintained and improved Digital Prospekt while building Bonus Wallet (dual-project responsibility)</li>
        <li>Drove technical decision-making for orange promotion's SaaS product strategy</li>
        <li>Mentored junior on API integration concepts and component-based design principles</li>
        <li>I was responsible for designing our trade show presentation and introduced the product to various clients. Some of them now joined our beta program</p></li>
      </ul>
    `;

  const bonusBeyond = contentBlock({
    headingText: "My Role as Senior Product Designer",
    headingType: "h2",
    showBadge: false,
    blockVariant: "slateDark",
    body: bodyContent,
  });

  return bonusBeyond;
}
