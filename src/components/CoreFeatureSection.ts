import { CreateHeading } from "./Headline";

type ListElement = {
  title: string;
  text: string;
  src: string;
};

interface BigCardSliderOptions {
  title: string;
  text?: string;
  list: ListElement[];
}

export function BigCardSlider(options: BigCardSliderOptions): HTMLElement {
  const { title, text, list } = options;

  //Section
  const section = document.createElement("section");
  section.className = "py-10";

  //Container
  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto flex flex-col gap-6 text-slate-50";
  section.appendChild(container);

  //Heading
  const heading = CreateHeading({
    text: title,
    type: "h2",
  });
  heading.classList.add("px-12");
  container.appendChild(heading);

  //Text Element
  if (text) {
    const description = document.createElement("p");
    description.className = "px-6";
    description.textContent = text;
    container.appendChild(description);
  }

  //List Wrapper
  const listWrapper = document.createElement("div");
  listWrapper.className =
    "mt-10 px-6 overflow-x-auto snap-x snap-mandatory max-w-full scroll-px-12 scroll";

  //List Track
  const listTrack = document.createElement("div");
  listTrack.className = "flex gap-4 items-stretch";

  //List Items - Card
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "snap-start grow-0 shrink-0 basis-3/4 flex flex-col gap-4";

    const imgWrap = document.createElement("div");
    imgWrap.className = "p-6 bg-slate-800 rounded-lg";

    //Image
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;
    img.className = "aspect-square max-w-full bg-slate-800 rounded-md";
    imgWrap.appendChild(img);

    //Text Container
    const textContainer = document.createElement("div");
    textContainer.className =
      "flex flex-col gap-1 bg-slate-800 p-6 pb-8 rounded-lg h-full text-base/8";

    //Title
    const itemTitle = document.createElement("h3");
    itemTitle.className = "font-semibold";
    itemTitle.textContent = item.title;

    //Description
    const itemText = document.createElement("p");
    itemText.className = "text-sm text-slate-300";
    itemText.textContent = item.text;

    textContainer.appendChild(itemTitle);
    textContainer.appendChild(itemText);

    card.appendChild(imgWrap);
    card.appendChild(textContainer);

    listTrack.appendChild(card);
  });
  listWrapper.appendChild(listTrack);
  container.appendChild(listWrapper);

  return section;
}
