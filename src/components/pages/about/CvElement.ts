import { createBadge } from "../../Badge";

interface ElementOptions {
  company: string;
  time: string;
  position: string;
  badge: string[];
}

export function CvElement(options: ElementOptions): HTMLElement {
  const {
    company = "orange promotion",
    time = "Feb 2023 – present",
    position = "Senior Product Designer",
    badge = ["UX/UI", "Low-Code", "SaaS"],
  } = options;

  const element = document.createElement("div");
  element.className = "px-2 py-4 border-b border-amber-950 flex flex-col gap-2";

  // Badge Row
  const row = document.createElement("div");
  row.className = "flex gap-2";

  badge.forEach((badgeText) => {
    const badgeElement = createBadge({
      text: badgeText,
      variant: "slate",
    });
    row.appendChild(badgeElement);
  });

  element.appendChild(row);

  // Element Details
  const body = document.createElement("div");
  body.className = "flex flex-col gap-3";

  body.innerHTML = `
    <div class="flex flex-col gap-1">
        <p class="text-slate-600 font-semibold text-base/6">${company}</p>
        <p class="text-slate-600 font-light text-xs">${time}</p>
    </div>
    <div>
        <p>${position}</p>
    </div>
  `;

  element.appendChild(body);

  return element;
}
