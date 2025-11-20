type BackgroundColor = "light" | "dark" | "slate";

interface QuoteOptions {
  id?: string;
  variant?: BackgroundColor;
  body: string;
  button?: boolean;
}

export function createQuote(options: QuoteOptions): HTMLElement {
  const { body, button = true, variant = "slate", id = "contact" } = options;

  const quote = document.createElement("section");

  const container = document.createElement("div");
  container.className = "max-w-xl lg:max-w-3xl mx-auto py-12";

  if (id) {
    quote.setAttribute("id", id);
  }

  const sectionBaseClass = "py-10 px-12";
  const sectionDefaultClasses: Record<BackgroundColor, string> = {
    light: "bg-amber-50",
    dark: "bg-amber-600",
    slate: "bg-slate-600",
  };

  quote.className = `${sectionBaseClass} ${sectionDefaultClasses[variant]}`;

  const terminal = document.createElement("div");

  const terminalBaseClass =
    "rounded-2xl px-4 pt-3 pb-10 flex flex-col justify-center gap-8 font-mono shadow-xl";

  const terminalVariantClasses: Record<BackgroundColor, string> = {
    light: "bg-amber-900 text-amber-400 bt-2 border-amber-400",
    dark: "bg-amber-900 text-amber-400 bt-2 border-amber-400",
    slate: "bg-slate-900 text-slate-400 bt-2 border-slate-400",
  };

  const terminalActionClass: Record<BackgroundColor, string> = {
    light: "bg-amber-200 text-amber-600",
    dark: "bg-amber-200 text-amber-600",
    slate: "bg-slate-200 text-slate-200",
  };

  terminal.className = `${terminalBaseClass} ${terminalVariantClasses[variant]}`;

  const terminalHead = document.createElement("div");
  terminalHead.className = "flex gap-2 justify-start";

  const terminalHeadArray = ["bg-red-400", "bg-yellow-400", "bg-green-400"];

  terminalHeadArray.forEach((color) => {
    const circle = document.createElement("div");
    circle.className = `${color} rounded-xl size-3`;
    terminalHead.appendChild(circle);
  });

  const terminalBody = document.createElement("div");
  terminalBody.className =
    "self-stretch text-center justify-start leading-8 text-lg/8 text-light";
  terminalBody.innerHTML = body;

  terminal.appendChild(terminalHead);
  terminal.appendChild(terminalBody);

  if (button) {
    const terminalAction = document.createElement("a");
    const terminalActionBaseClasses =
      "block mx-auto px-4 py-3 rounded shadow-lg font-bold uppercase";
    terminalAction.className = `${terminalActionBaseClasses} ${terminalActionClass[variant]}`;
    terminalAction.textContent = "Get in Touch";
    terminalAction.href = "mailto:zweigler.cristian@gmail.com";

    terminal.appendChild(terminalAction);
  }

  quote.appendChild(container);
  container.appendChild(terminal);

  return quote;
}
