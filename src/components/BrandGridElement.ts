interface BrandGridOptions {
  img: string;
  alt?: string;
}

export function brandGridElement(options: BrandGridOptions): HTMLElement {
  const { img, alt = "Brands that trust me" } = options;

  const item = document.createElement("div");
  item.className =
    "border border-amber-600/20 flex justify-center items-center";

  item.innerHTML = `
    <img src="${img}" alt="${alt}" class="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 ease-in-out">
  `;

  return item;
}
