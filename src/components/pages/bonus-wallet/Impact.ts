import { contentBlock } from "../../ContentBlock";

export function CaseBonusImpact(): HTMLElement {
  const bodyContent = `
    <p>The Bonus Wallet is currently in beta testing with launch scheduled for Q1 2026. While full metrics aren't available yet, the projected cost savings are substantial.</p>
    <div class="mt-6 -mx-6 grid grid-cols-2 gap-4">

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Campaign Savings</p>
          <p class="text-2xl font-semibold">13,100 €</p>
        </div>
        <p>Estimated savings per postal mailing for 10k customers.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">WhatsApp Cost Cut</p>
          <p class="text-2xl font-semibold">64%</p>
        </div>
        <p>Service messages (€0.04) vs marketing (€0.11).</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">No Development Cost </p>
          <p class="text-2xl font-semibold">+50,000 €</p>
        </div>
        <p>White label platform without custom development investment.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Unique Market Position</p>
          <p class="text-2xl font-semibold">First-mover</p>
        </div>
        <p>Zero known competitors in furniture retail loyalty apps.</p>
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

  const bonusImpact = contentBlock({
    showBadge: false,
    headingText: "Real savings. Real value. Launching soon.",
    headingType: "h2",
    body: bodyContent,
  });

  return bonusImpact;
}
