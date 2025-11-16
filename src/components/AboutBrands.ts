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

  //Porsche
  grid.appendChild(
    brandGridElement({
      img: porsche,
      alt: "Porsche",
    })
  );

  //Möbel Rieger
  grid.appendChild(
    brandGridElement({
      img: moebelRieger,
      alt: "Möbel Rieger",
    })
  );

  //Saturn
  grid.appendChild(
    brandGridElement({
      img: saturn,
      alt: "Saturn",
    })
  );

  //WWF
  grid.appendChild(
    brandGridElement({
      img: wwf,
      alt: "WWF",
    })
  );

  //Bethesda
  grid.appendChild(
    brandGridElement({
      img: bethesda,
      alt: "Bethesda",
    })
  );

  //berge&meer
  grid.appendChild(
    brandGridElement({
      img: bergeUndMeer,
      alt: "Berge&Meer",
    })
  );

  //Xain
  grid.appendChild(
    brandGridElement({
      img: xain,
      alt: "Xain",
    })
  );

  //UKD
  grid.appendChild(
    brandGridElement({
      img: ukd,
      alt: "UKD",
    })
  );

  section.appendChild(container);

  return section;
}
