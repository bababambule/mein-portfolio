import { contentBlock } from "../../ContentBlock";
import { imageSection } from "../../ImageComponent";
import problemShot from "../../../assets/img/digital-prospekt/Shot 7.webp";
import placeholderLg from "../../../assets/img/placeholder/placeholder-16-9.webp";

export function CaseDigitalProblem(): HTMLElement {
  const digitalProblem = document.createElement("div");

  const problemList = [
    `<span class="font-semibold">5-6 second load times</span> (down from 15-20s, but still too slow)`,
    `<span class="font-semibold">2–4 weeks production time</span> per client`,
    `<span class="font-semibold">€624/year per client</span> (Webflow + Wized) <span class="font-semibold">+ €4,800/year</span> for Airtable seats`,
    `<span class="font-semibold">No scalability</span> – each client needed a separate Webflow instance`,
    `<span class="font-semibold">Poor content management</span> – Airtable's interface was unintuitive, API bottlenecks killed performance`,
  ];

  const bodyContent = `
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-6">
          <p>Furniture retailers wanted targeted digital brochures with optimized content for different audiences. The pitch worked. The technology didn't.</p>
          <p>I inherited a WordPress/WooCommerce system in February 2023 that took 15 to 20 seconds to load. Even after switching to Webflow + Wized + Airtable, the situation remained bad. The reality was harsh:</p>
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
  `;

  const digitalContent = contentBlock({
    blockVariant: "slateDark",
    showBadge: false,
    headingText: "A System at its limit",
    headingType: "h2",
    body: bodyContent,
  });

  const digitalMedia = imageSection({
    src: problemShot,
    srcLarge: placeholderLg,
    alt: "The old legacy system was build entirely in Wordpress and wooCommerce and beside horendous loading times it was painful to create new digital flyers",
    ratio: "Portrait",
    variant: "slateToLight",
  });

  digitalProblem.appendChild(digitalContent);
  digitalProblem.appendChild(digitalMedia);

  return digitalProblem;
}
