import { contentBlock } from "../../ContentBlock";
import { imageSection } from "../../ImageComponent";
import placeholder from "../../../assets/img/bonus-wallet/Shot 2.webp";
import placeholderLg from "../../../assets/img/placeholder/placeholder-16-9.webp";

export function CaseBonusProblem(): HTMLElement {
  const bonusProblemElemet = document.createElement("div");

  const problemList = [
    `<span class="font-semibold">€0.56-€1.31 each mail delivery</span> (€5,600-€13,100 for 10,000 customers)`,
    `Each <span class="font-semibold">WhatsApp marketing message cost €0.11</span> (costs scale quickly)`,
    `<span class="font-semibold">Using ancient loyalty systems</span> like printed vouchers from mailings and physical stamp cards`,
    `<span class="font-semibold">Rising customer acquisition costs</span> through Meta ads to reach existing customers`,
    `<span class="font-semibold">Fragmented communication</span> across postal, email, phone, and in-store`,
  ];

  const problemContent = contentBlock({
    blockVariant: "slateDark",
    showBadge: false,
    headingText: "Marketing Cost Trap",
    headingType: "h2",
    body: `
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-6">
          <p>As more customers choose not to use mail advertising, direct contact became more challenging, and with high development costs for custom apps furniture retailers faced a lot of problems.</p>
          <h3 class="text-xl font-semibold mt-4">Marketing on WhatsApp?</h3>
          <p>Not even on the radar. The traditional furniture retailers resorted to paper and viewed digital channels with distrust.</p>
      </div> 
      <div class="-mx-6">
        <div class="flex flex-col">
          ${problemList
            .map(
              (item) =>
                `<p class="border border-slate-700 odd:bg-slate-700/30 border-b-0 last-of-type:border-b py-4 px-6 first-of-type:rounded-tl-lg first-of-type:rounded-tr-lg last-of-type:rounded-bl-lg last-of-type:rounded-br-lg">${item}</p>`
            )
            .join("")}
        </div>
      </div>
    `,
  });

  const problemImage = imageSection({
    src: placeholder,
    srcLarge: placeholderLg,
    alt: "The old legacy system was build entirely in Wordpress and wooCommerce and beside horendous loading times it was painful to create new digital flyers",
    ratio: "Portrait",
    variant: "slateToLight",
  });

  bonusProblemElemet.appendChild(problemContent);
  bonusProblemElemet.appendChild(problemImage);

  return bonusProblemElemet;
}
