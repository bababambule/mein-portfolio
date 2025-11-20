import { resizeSvg } from "../utils/svg";

type Color = "slate" | "amber";

interface IconLinkOptions {
  color?: Color;
  link: string;
  title: string;
  src: string;
}

export type { IconLinkOptions };

export function createIconLink(options: IconLinkOptions): HTMLElement {
  const { color = "amber", link, title, src } = options;
  const iconLink = document.createElement("a");
  iconLink.href = link;
  iconLink.setAttribute("aria-label", title);
  iconLink.setAttribute("target", "_blank");
  iconLink.setAttribute("rel", "noopener noreferrer");
  iconLink.title = title;

  iconLink.className = `text-${color}-50 hover:text-white transition-colors size-10 flex items-center justify-center bg-${color}-500 rounded-md hover:scale-105 hover:bg-${color}-400`;
  iconLink.innerHTML = `${resizeSvg(src, "md")}`;

  return iconLink;
}
