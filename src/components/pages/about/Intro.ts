import { contentBlock } from "../../ContentBlock";

export function AboutIntro(): HTMLElement {
  const section = contentBlock({
    blockVariant: "amberLight",
    showBadge: false,
    headingText: "Designer who codes. Developer who designs",
    headingType: "h1",
    body: `
        <p class="text-xl/9 font-light text-slate-800">I build digital products that ship – from first sketch to production deploy. Design and development aren't separate phases for me. They're one continuous process, and that's how great products get built.</p>
        <div class="bg-slate-400 aspect-9/16 w-full mt-14 rounded-lg"></div>
    `,
  });

  section.classList.add("mt-20");

  return section;
}
