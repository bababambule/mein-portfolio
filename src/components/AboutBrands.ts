import { CreateHeading } from "./Headline";
import { brandGridElement } from "./BrandGridElement";

//Brand Logo Imports
import porsche from "../assets/img/brands/porsche_2x.webp";
import moebelRieger from "../assets/img/brands/moebel_rieger_2x.webp";
import saturn from "../assets/img/brands/saturn_2x.webp";
import wwf from "../assets/img/brands/wwf_2x.webp";
import bethesda from "../assets/img/brands/bethesda_2x.webp";
import bergeUndMeer from "../assets/img/brands/berge_meer_2x.webp";
import xain from "../assets/img/brands/xain_2x.webp";
import ukd from "../assets/img/brands/ukd_2x.webp";

export function aboutBrandSection(): HTMLElement {
  const section = document.createElement("section");
  section.className = "bg-amber-50 px-12 py-10";

  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto flex flex-col gap-6";

  //Heading Section
  const heading = CreateHeading({
    text: "Trusted by",
    type: "h4",
  });

  container.appendChild(heading);

  //Brand Grid Section
  const grid = document.createElement("div");
  grid.className = "grid grid-cols-2 md:grid-cols-4";

  container.appendChild(grid);

  const brandsArray = [
    { img: porsche, alt: "Porsche" },
    { img: moebelRieger, alt: "Möbel Rieger" },
    { img: saturn, alt: "Saturn" },
    { img: wwf, alt: "WWF" },
    { img: bethesda, alt: "Bethesda" },
    { img: bergeUndMeer, alt: "berge&meer" },
    { img: xain, alt: "Xain" },
    { img: ukd, alt: "Universitätsklinikum Düsseldorf" },
  ];

  brandsArray.forEach((brand) => {
    grid.appendChild(
      brandGridElement({
        img: brand.img,
        alt: brand.alt,
      })
    );
  });

  section.appendChild(container);

  return section;
}
