import { createBadge } from "./Badge";
import { CreateHeading } from "./Headline";
import { imageSection } from "./ImageComponent";

type TimelineCard = {
  date: string;
  title: string;
  text: string;
};

type TimelineImage = {
  src: string;
  alt: string;
};

type TimelineEntry = TimelineCard | TimelineImage;

function isTimelineCard(entry: TimelineEntry): entry is TimelineCard {
  return "date" in entry;
}

function isTimelineImage(entry: TimelineEntry): entry is TimelineImage {
  return "src" in entry;
}

export function timeline(input: TimelineEntry[]): HTMLElement {
  const timelineSection = document.createElement("section");
  timelineSection.className =
    "mt-10 px-6 overflow-x-auto snap-x snap-mandatory max-w-full scroll-pl-12";
  timelineSection.setAttribute("aria-label", "Project timeline");

  const timelineTrack = document.createElement("div");
  timelineTrack.className = "flex items-stretch";

  const makeSnapWrapper = (el: HTMLElement) => {
    const wrap = document.createElement("div");
    wrap.className = "snap-start shrink-0 grow-0 basis-4/5";
    wrap.appendChild(el);
    return wrap;
  };

  input.forEach((entry) => {
    if (isTimelineCard(entry)) {
      const card = document.createElement("div");
      card.className = "bg-amber-600 h-full ";

      // Badge
      const badge = createBadge({
        text: entry.date,
        variant: "pill",
      });
      card.appendChild(badge);

      // Heading
      const heading = CreateHeading({
        text: entry.title,
        type: "h3",
      });
      card.appendChild(heading);

      // Text
      const text = document.createElement("p");
      text.className = "";
      text.textContent = entry.text;

      card.appendChild(text);

      timelineTrack.appendChild(makeSnapWrapper(card));
    }

    if (isTimelineImage(entry)) {
      const imgEl = imageSection({
        src: entry.src,
        alt: entry.alt ?? "",
        ratio: "Square",
        variant: "light",
      });

      timelineTrack.appendChild(imgEl);
      return;
    }
  });

  timelineSection.appendChild(timelineTrack);

  return timelineSection;
}
