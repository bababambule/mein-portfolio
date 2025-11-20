import { createBadge } from "./Badge";
import { CreateHeading } from "./Headline";

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
    "mt-10 px-6 overflow-x-auto snap-x snap-mandatory max-w-full scroll-pl-12 ";
  timelineSection.setAttribute("aria-label", "Project timeline");

  const timelineTrack = document.createElement("div");
  timelineTrack.className = "flex items-stretch";

  const makeSnapWrapper = (el: HTMLElement) => {
    const wrap = document.createElement("div");
    wrap.className =
      "snap-start shrink-0 grow-0 basis-10/12 last:border-r-[24px] border-r-amber-50";
    wrap.appendChild(el);
    return wrap;
  };

  input.forEach((entry, index) => {
    if (isTimelineCard(entry)) {
      const card = document.createElement("div");
      const cardBaseClass =
        "snap-start h-full px-6 py-8 text-slate-800 flex flex-col gap-4 overflow-x-clip";

      const cardVariantClass =
        index % 2 === 0 ? "bg-amber-600/10" : "bg-amber-600/30";

      card.className = `${cardBaseClass} ${cardVariantClass}`;

      const timelineHeader = document.createElement("div");
      timelineHeader.className = "flex flex-col gap-2";

      card.appendChild(timelineHeader);

      // Badge
      const badge = createBadge({
        text: entry.date,
        variant: "pill",
      });
      badge.classList.add("timeline-badge-line");
      if (index != 0) {
        badge.classList.add("timeline-badge-line-pre");
      }

      timelineHeader.appendChild(badge);

      // Heading
      const heading = CreateHeading({
        text: entry.title,
        type: "h3",
      });
      timelineHeader.appendChild(heading);

      // Text
      const text = document.createElement("p");
      text.className = "leading-relaxed";
      text.textContent = entry.text;

      card.appendChild(text);

      timelineTrack.appendChild(makeSnapWrapper(card));
    } else if (isTimelineImage(entry)) {
      const imageCard = document.createElement("div");
      imageCard.className =
        "aspect-square flex justify-center items-center p-4";

      const imageTimeline = document.createElement("img");
      imageTimeline.className = "w-full rounded-lg shadow-md";
      imageTimeline.src = entry.src;
      imageTimeline.alt = entry.alt;
      imageTimeline.width = 1080;
      imageTimeline.height = 1080;
      imageTimeline.loading = "lazy";
      imageTimeline.decoding = "async";

      imageCard.appendChild(imageTimeline);
      timelineTrack.appendChild(makeSnapWrapper(imageCard));
    }
  });

  timelineSection.appendChild(timelineTrack);

  return timelineSection;
}
