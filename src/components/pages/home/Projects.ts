import digitalProspekt from "../../../assets/img/card-digital-prospekt.webp";

export function HomeProjects(): HTMLElement {
  const projectCardSection = document.createElement("section");
  projectCardSection.setAttribute("id", "projects");
  projectCardSection.className =
    "bg-amber-600 py-12 flex flex-col gap-24 text-amber-50";

  //Case Study Digital Prospekt
  const blockStudy1 = document.createElement("div");
  blockStudy1.className = "flex flex-col gap-0 px-6";
  blockStudy1.innerHTML = `
  <a href="/digital-prospekt.html" target="_self">
  <div class="flex gap-4  justify-between -mb-8 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-right drop-shadow-lg">Digi<br>tal</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 mb-2">
            <p class="font-light">_Role</p>
            <p>Product Designer</p>
        </div>
    </div>
    <div class="px-6">
        <img src="${digitalProspekt}" class="w-3/4 mx-auto">
    </div>
    <div class="flex flex-row-reverse gap-4 basis-full justify-between -mt-20 z-10 relative">
        <div>
            <p class="text-6xl font-black uppercase text-left drop-shadow-lg">Pro<br>spe<br>kt</p>
        </div>
        <div class="grow self-center opacity-60 pl-2 text-right mt-10">
            <p class="font-light">_Timeline</p>
            <p>2023 – present</p>
        </div>
    </div>
    </a>
  `;

  //Case Study Bonus Wallet
  const blockStudy2 = document.createElement("div");
  blockStudy2.className = "flex flex-col gap-0 px-6";
  blockStudy2.innerHTML = `
    <a href="/bonus-wallet.html" target="_self">
        <div class="flex flex-row-reverse gap-4  justify-between -mb-8 z-10 relative">
            <div>
                <p class="text-6xl font-black uppercase text-left drop-shadow-lg">Bon<br>us</p>
            </div>
            <div class="grow self-center opacity-60 pl-2 mb-2 text-right">
                <p class="font-light">_Role</p>
                <p>Product Designer</p>
            </div>
        </div>
        <div class="px-6">
            <img src="${digitalProspekt}" class="w-3/4 mx-auto">
        </div>
        <div class="flex flex-row gap-4 basis-full justify-between -mt-8 z-10 relative">
            <div>
                <p class="text-6xl font-black uppercase text-right drop-shadow-lg">Wal<br>let</p>
            </div>
            <div class="grow self-center opacity-60 pl-2 text-left mt-4">
                <p class="font-light">_Timeline</p>
                <p>2025 – present</p>
            </div>
        </div>
    </a>
  `;

  //Case Study Icon Pack
  const blockStudy3 = document.createElement("div");
  blockStudy3.className = "flex flex-col gap-0 px-6";
  blockStudy3.innerHTML = `
    <a href="/icon-pack.html" target="_self">
        <div class="flex gap-4  justify-between -mb-8 z-10 relative">
            <div>
                <p class="text-6xl font-black uppercase text-right drop-shadow-lg">Cus<br>tom</p>
            </div>
            <div class="grow self-center opacity-60 pl-2 mb-2">
                <p class="font-light">_Role</p>
                <p>Graphic Designer</p>
            </div>
        </div>
        <div class="px-6">
            <img src="${digitalProspekt}" class="w-3/4 mx-auto">
        </div>
        <div class="flex flex-row-reverse gap-4 basis-full justify-between -mt-8 z-10 relative">
            <div>
                <p class="text-6xl font-black uppercase text-left drop-shadow-lg">Ico<br>ns</p>
            </div>
            <div class="grow self-center opacity-60 pl-2 text-right mt-4">
                <p class="font-light">_Timeline</p>
                <p>2021</p>
            </div>
        </div>
    </a>
  `;

  projectCardSection.appendChild(blockStudy1);
  projectCardSection.appendChild(blockStudy2);
  projectCardSection.appendChild(blockStudy3);
  return projectCardSection;
}
