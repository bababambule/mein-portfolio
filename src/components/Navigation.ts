import logoIcon from "../assets/logo_icon.svg?raw";
import logoName from "../assets/logo_name.svg?raw";

export interface NavItem {
  label: string;
  href: string;
  variant?: "default" | "primary";
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/index.html" },
  { label: "Case Studies", href: "/index.html#projects" },
  { label: "About", href: "/about.html" },
  { label: "Kontakt", href: "/index.html#contact", variant: "primary" },
];

function createDesktopMenu(): string {
  return NAV_ITEMS.map((item) => {
    if (item.variant === "primary") {
      return `
        <a href="${item.href}" class="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
          ${item.label}
        </a>
      `;
    }
    return `
      <a href="" class="text-slate-600 hover:text-slate-700 transition-colors">
        ${item.label}
      </a>
    `;
  }).join("");
}

function createMobileMenu(): string {
  return NAV_ITEMS.map((item) => {
    if (item.variant === "primary") {
      return `
        <a href="${item.href}" class="px-4 py-4 text-xl bg-amber-50 text-black rounded-lg hover:bg-amber-100 transition-colors">
          ${item.label}
        </a>
      `;
    }
    return `
      <a href="${item.href}" class="px-4 py-4 text-xl text-amber-50 hover:text-amber-100 transition-colors">
        ${item.label}
      </a>
    `;
  }).join("");
}

export function createNavigation(): HTMLElement {
  const nav = document.createElement("nav");
  nav.className =
    "fixed top-0 left-0 right-0 z-50 bg-amber-50/80 backdrop-blur-md scale-100";

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between content-center h-20 px-6">
        <!-- Logo -->
        <a href="/index.html" class="text-slate-600 flex gap-3" >
          <div>${logoIcon}</div>
          <div>${logoName}</div>
        </a>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          ${createDesktopMenu()}
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          id="mobile-menu-button" 
          class="md:hidden text-slate-600 p-2 hover:bg-amber-100 rounded-lg transition-colors"
          aria-label="Open Menu"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu (Slide-in from right) -->
    <div id="mobile-menu" class="fixed top-0 right-0 bottom-0 w-3/4 z-20 bg-amber-600 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden shadow-2xl/50 h-dvh">
      <div class="flex flex-col h-full">
        <!-- Close Button -->
        <div class="flex justify-end p-6">
          <button id="mobile-menu-close" class="text-white p-2 hover:bg-amber-800 rounded-lg transition-colors" aria-label="Close Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Menu Items -->
        <div class="flex flex-col gap-6 px-6">
          ${createMobileMenu()}
        </div>
      </div>
    </div>
    
    <!-- Overlay (darkens background when menu is open) -->
    <div id="mobile-menu-overlay" class="fixed inset-0 z-0 h-dvh bg-black/60 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden"></div>
  `;

  return nav;
}
