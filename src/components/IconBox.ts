import { resizeSvg } from "../utils/svg";

type Size = "sm" | "md" | "lg" | "xl" | "xxl";
type Color = "amber" | "slate";
type Rotation = -6 | -3 | 0 | 3 | 6;
type Translation = -2 | -1 | 0 | 1 | 2;

interface IconBoxOptions {
  src: string;
  size: Size;
  color: Color;
  rotate?: Rotation;
  translate?: Translation;
}

export type { IconBoxOptions };

export function CreateIconBox(options: IconBoxOptions): HTMLElement {
  const {
    src,
    size = "xxl",
    color = "amber",
    rotate = 0,
    translate = 0,
  } = options;

  const iconBox = document.createElement("div");
  iconBox.setAttribute("aria-hidden", "true");

  const baseClasses =
    "flex items-center justify-center size-20 rounded-md shadow-lg hover:scale-110 hover:shadow-md transition-transform duration-300";

  const colorClasses: Record<Color, string> = {
    amber: "bg-amber-400 hover:bg-amber-300 text-amber-950",
    slate: "bg-slate-800 hover:bg-slate-600 text-slate-50",
  };

  const rotationClasses: Record<Rotation, string> = {
    "-6": "-rotate-6",
    "-3": "-rotate-3",
    "0": "",
    "3": "rotate-3",
    "6": "rotate-6",
  };

  const translationClasses: Record<Translation, string> = {
    "-2": "-translate-x-2",
    "-1": "-translate-x-1",
    "0": "",
    "1": "translate-x-1",
    "2": "translate-x-2",
  };

  iconBox.className = `${baseClasses} ${colorClasses[color]} ${rotationClasses[rotate]} ${translationClasses[translate]}`;

  iconBox.innerHTML = `${resizeSvg(src, size)}`;

  return iconBox;
}
