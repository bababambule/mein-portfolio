import { CreateHeading } from "./Headline";

type ListElement = {
  title: string;
  text: string;
  src: string;
};

interface FancyListOptions {
  title: string;
  text?: string;
  list: ListElement[];
}

export function FancyList(options: FancyListOptions): HTMLElement {
  const { title, text, list } = options;

  //Section
  const section = document.createElement("section");
  section.className = "px-6 py-10";

  //Container
  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto flex flex-col gap-6 text-slate-50";
  section.appendChild(container);

  //Heading
  const heading = CreateHeading({
    text: title,
    type: "h2",
  });
  heading.classList.add("px-6");
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
  listWrapper.className = "flex flex-col gap-4";

  //List Items - Card
  list.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "bg-slate-800 text-slate-50 flex gap-4 px-4 py-4 rounded-md shadow-xl hover:shadow-lg hover:scale-105 transition-all duration-300";

    //Image
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;
    img.className = "aspect-square size-12 rounded-sm";

    //Text Container
    const textContainer = document.createElement("div");
    textContainer.className = "flex flex-col gap-1";

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

    card.appendChild(img);
    card.appendChild(textContainer);

    listWrapper.appendChild(card);
  });

  container.appendChild(listWrapper);

  return section;
}
