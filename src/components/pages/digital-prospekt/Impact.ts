import { contentBlock } from "../../ContentBlock";
import { createQuote } from "../../QuoteBlock";

export function CaseDigitalImpact(): HTMLElement {
  const digitalImpact = document.createElement("div");

  const bodyContent = `
    <p>Three years of iteration paid off. The new system outperforms the old solution in every relevant metric – and is currently being expanded into a SaaS product.</p>
    <div class="mt-6 -mx-6 grid grid-cols-2 gap-4">

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Faster Performance</p>
          <p class="text-2xl font-semibold">67%</p>
        </div>
        <p>FCP reduced from 5-6s to under 2s.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Reduced Production Time</p>
          <p class="text-2xl font-semibold">93%</p>
        </div>
        <p>From 2 weeks to under 1 day (often hours).</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4 col-span-2">
        <div>
          <p class="font-semibold">Longer Session Duration</p>
          <p class="text-2xl font-semibold">+83%</p>
        </div>
        <p>From 30 to 55 seconds. Users actively engage.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Lower Bounce Rate</p>
          <p class="text-2xl font-semibold">-14%</p>
        </div>
        <p>Decresed from 85% to 73%. Better UX = more engagement.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">More Conversions</p>
          <p class="text-2xl font-semibold">600%</p>
        </div>
        <p>2-3 calls per brochure → 20+ leads/week for one client.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4 col-span-2">
        <div>
          <p class="font-semibold">Annual Cost Savings</p>
          <p class="text-2xl font-semibold">€17,000</p>
        </div>
        <p>€4,800 Airtable + €12,288 Webflow/Wized eliminated. Only €348/year for Nordcraft across 12 clients.</p>
      </div>

    </div>
    `;

  const impactContent = contentBlock({
    showBadge: false,
    headingText: "Faster. Cheaper. Simply lovely.",
    headingType: "h2",
    body: bodyContent,
  });

  const impactQuote = createQuote({
    body: '"Clients are impressed by the speed of implementation. Real-time analytics via Plausible enable better iteration of ad creatives for Facebook and Instagram – a game changer for data-driven marketing."',
    button: false,
    variant: "dark",
  });

  digitalImpact.appendChild(impactContent);
  digitalImpact.appendChild(impactQuote);
  return digitalImpact;
}
