import { BigCardSlider } from "../../CoreFeatureSection";
import costOptimized from "../../../assets/img/bonus-wallet/feature_cost-optimized.webp";
import dynamicCoupons from "../../../assets/img/bonus-wallet/feature_dynamic-coupons.webp";
import customLoyalty from "../../../assets/img/bonus-wallet/feature_loyalty.webp";
import magicLink from "../../../assets/img/bonus-wallet/feature_magic-link.webp";
import multiTenant from "../../../assets/img/bonus-wallet/feature_multi-tenant.webp";

export function CaseBonusFeatures(): HTMLElement {
  const coreFeatureArray = [
    {
      title: "Multi-tenant architecture",
      text: "Wildcard subdomains route customers to correct retailer, each with isolated data and dynamic manifest.json for branded app experience",
      src: multiTenant,
    },
    {
      title: "Magic link authentication",
      text: "Phone-only login with CRM lookup for auto-filled customer details, no passwords needed",
      src: magicLink,
    },
    {
      title: "Cost-optimized WhatsApp marketing",
      text: "Service messages (€0.04) instead of marketing messages (€0.11) save 64% on messaging costs",
      src: costOptimized,
    },
    {
      title: "Dynamic coupons",
      text: "Customers load coupons in-app with 60-minute validity window, QR scan at checkout applies discount automatically",
      src: dynamicCoupons,
    },
    {
      title: "Live loyalty points & order tracking",
      text: "Real-time sync with ERP/CRM systems for point balances, order status, and digital document delivery",
      src: customLoyalty,
    },
  ];

  const bonusFeatures = BigCardSlider({
    title: "Core Features That Make the Difference",
    list: coreFeatureArray,
  });
  bonusFeatures.classList.add("bg-slate-600");

  return bonusFeatures;
}
