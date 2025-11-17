import { resizeSvg } from "../utils/svg";

interface GalleryOptions {
  items: string[];
  columns?: number;
}

export function createIconGallery(options: GalleryOptions): HTMLElement {
  const { items, columns = 4 } = options;

  const iconGallery = document.createElement("section");
  iconGallery.className = "bg-slate-600 px-12 py-12";

  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto";

  const galleryWrapper = document.createElement("div");
  galleryWrapper.className = `grid grid-cols-${columns} lg:grid-cols-8 gap-4`;

  items.forEach((item) => {
    const iconWrap = document.createElement("div");
    iconWrap.className =
      "bg-slate-50 p-2 rounded-lg flex items-center justify-center aspect-square hover:scale-105 hover:shadow-md transition-all duration-300";
    iconWrap.innerHTML = resizeSvg(item, "xl");

    galleryWrapper.appendChild(iconWrap);
  });

  container.appendChild(galleryWrapper);
  iconGallery.appendChild(container);

  return iconGallery;
}
