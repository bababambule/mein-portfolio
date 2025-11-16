import { resizeSvg } from "../../utils/svg";
import logoIcon from "../../assets/brand/logo_icon.svg?raw";
import logoName from "../../assets/brand/logo_name.svg?raw";
import gitIcon from "../../assets/icons/fa7-brands_square-github.svg?raw";
import linkedIcon from "../../assets/icons/fa7-brands_linkedin.svg?raw";
import dribbbleIcon from "../../assets/icons/fa7-brands_dribbble-square.svg?raw";

export function PageFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "bg-slate-800 py-10 px-12 flex flex-col gap-8";

  footer.innerHTML = `
    <a href="/index.html" class="flex gap-4 text-slate-50 justify-center">
        <div>${logoIcon}</div>
        <div>${logoName}</div>
    </a>
    <div class="flex justify-center items-center gap-4 mt-4">
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
        ${resizeSvg(linkedIcon, "lg")}
        </a>  
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
            ${resizeSvg(gitIcon, "lg")}
        </a>
        <a href="#" class="px-3 py-3 bg-slate-600 text-slate-50 rounded ">
            ${resizeSvg(dribbbleIcon, "lg")}
        </a>
    </div>
    <div class="text-center">
        <a href="/impressum.html" class="text-xs font-light text-slate-400">Legal Notice</a>
    </div>
  `;

  return footer;
}
