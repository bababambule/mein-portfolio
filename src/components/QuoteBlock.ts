type QuoteDesign = "amber" | "slate";

interface QuoteOptions {
  body: string;
  button?: boolean;
  variant?: QuoteDesign;
}

export function createQuote(options: QuoteOptions): HTMLElement {
  const { body, button = true, variant = "slate" } = options;

  const quote = document.createElement("section");

  const sectionBaseClass = "py-10 px-12";
  const sectionDefaultClasses: Record<QuoteDesign, string> = {
    amber: "bg-amber-50",
    slate: "bg-slate-600",
  };

  quote.className = `${sectionBaseClass} ${sectionDefaultClasses[variant]}`;

  const action = button ? "" : "hidden";

  const terminal = document.createElement("div");

  const terminalBaseClass =
    "rounded-2xl px-3 pt-2 pb-6 flex flex-col gap-6 font-mono";
  const terminalVariantClasses: Record<QuoteDesign, string> = {
    amber: "bg-slate-900 text-slate-400 bt-2 border-slate-400",
    slate: "bg-amber-900 text-amber-400 bt-2 border-amber-400",
  };

  terminal.className = `${terminalBaseClass} ${terminalVariantClasses[variant]}`;
  terminal.innerHTML = `
    <div class="flex gap-2 justify-start">
        <div class="bg-red-400 rounded-xl size-3"></div>
        <div class="bg-yellow-400 rounded-xl size-3"></div>
        <div class="bg-green-400 rounded-xl size-3"></div>
    </div>
    <div class="self-stretch text-center justify-start leading-6">${body}</div>
    <div class="${action} flex">
        <a href="mailto:zweigler.cristian@gmail.com" class="block mx-auto px-4 py-3 bg-slate-400 rounded shadow-lg">
            <span class="text-slate-900">Get in touch</span>
        </a>
    </div>
  `;

  quote.appendChild(terminal);

  return quote;
}
