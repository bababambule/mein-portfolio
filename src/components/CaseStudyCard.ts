type Position = "left" | "right";

interface CaseStudyCardOptions {
  position: Position;
  href: string;
  headName: string;
  footerName: string;
  top?: string;
  role: string;
  timeline: string;
  img: string;
}

export type { Position };

export function createCaseStudyCard(
  options: CaseStudyCardOptions
): HTMLElement {
  const {
    position = "left",
    href,
    headName,
    role = "Product Designer",
    timeline = "Jan 2025 – Dec 2025",
    footerName,
    top = "0px",
    img,
  } = options;

  const card = document.createElement("a");
  card.href = href;
  card.title = (headName + " " + footerName + " Case Study").replace(
    /<wbr>/g,
    ""
  );
  card.className = "group relative cursor-pointer";
  card.target = "_self";

  const cardHead = document.createElement("div");
  cardHead.className =
    "flex gap-4 justify-between items-end -mb-8 z-10 relative transition-transform duration-300 group-hover:-translate-y-4";

  if (position == "right") {
    cardHead.classList.add("flex-row-reverse");
  }

  const cardHeadTitle = document.createElement("h3");
  cardHeadTitle.innerHTML = headName.replace(/<wbr>/g, "");
  cardHeadTitle.className =
    "text-6xl font-black uppercase drop-shadow-lg max-w-[3.5ch] break-all";

  if (position == "right") {
    cardHeadTitle.classList.add("text-left");
  } else {
    cardHeadTitle.classList.add("text-right");
  }

  const roleBlock = document.createElement("div");
  roleBlock.className = "grow opacity-60 pl-2 pb-10";

  if (position == "right") {
    roleBlock.classList.add("text-right");
  } else {
    roleBlock.classList.add("text-left");
  }

  const roleLabel = document.createElement("p");
  roleLabel.className = "font-light";
  roleLabel.textContent = "_Role";

  const roleName = document.createElement("p");
  roleName.textContent = role;

  roleBlock.appendChild(roleLabel);
  roleBlock.appendChild(roleName);
  cardHead.appendChild(cardHeadTitle);
  cardHead.appendChild(roleBlock);

  const image = document.createElement("img");
  image.className =
    "w-3/4 rounded-xl mx-auto drop-shadow-md transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-2xl";
  image.src = img;
  image.alt = (headName + " " + footerName + " Case Study").replace(
    /<wbr>/g,
    ""
  );
  image.width = 1080;
  image.height = 1920;

  const cardFooter = document.createElement("div");
  cardFooter.className =
    "flex -mt-6 gap-4 basis-full justify-between z-10 relative items-start max-h-32 transition-transform duration-300 group-hover:translate-y-4";

  if (position == "right") {
    cardFooter.classList.add("flex-row");
  } else {
    cardFooter.classList.add("flex-row-reverse");
  }

  const cardFooterTitle = document.createElement("h3");
  cardFooterTitle.className =
    "text-6xl font-black uppercase  drop-shadow-lg break-all max-w-[3.5ch] relative";

  if (position == "right") {
    cardFooter.classList.add("text-right");
  } else {
    cardFooter.classList.add("text-left");
  }

  cardFooterTitle.innerHTML = footerName;
  if (top) {
    cardFooterTitle.style = `top: ${top};`;
  }

  const timelineBlock = document.createElement("div");
  timelineBlock.className = "grow content-end opacity-60 pl-2 pt-8";

  if (position == "right") {
    timelineBlock.classList.add("text-left");
  } else {
    timelineBlock.classList.add("text-right");
  }

  const timelineLabel = document.createElement("p");
  timelineLabel.className = "font-light";
  timelineLabel.textContent = "_Timeline";

  const timelineText = document.createElement("p");
  timelineText.textContent = timeline;

  timelineBlock.appendChild(timelineLabel);
  timelineBlock.appendChild(timelineText);
  cardFooter.appendChild(cardFooterTitle);
  cardFooter.appendChild(timelineBlock);

  card.appendChild(cardHead);
  card.appendChild(image);
  card.appendChild(cardFooter);

  return card;
}
