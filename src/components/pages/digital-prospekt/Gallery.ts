import { imageSection } from "../../ImageComponent";
import shot3 from "../../../assets/img/digital-prospekt/Shot 3.webp";
import shot4 from "../../../assets/img/digital-prospekt/Shot 4.webp";
import shot5 from "../../../assets/img/digital-prospekt/Shot 5.webp";
import shot6 from "../../../assets/img/digital-prospekt/Shot 6.webp";
import shot9 from "../../../assets/img/digital-prospekt/Shot 9.webp";
import placeholderLg from "../../../assets/img/placeholder/placeholder-16-9.webp";

export function CaseDigitalGallery(): HTMLElement {
  const digitalGallery = document.createElement("div");

  const imageList = [
    {
      src: shot3,
      srcLg: placeholderLg,
      alt: "alt text",
    },
    {
      src: shot4,
      srcLg: placeholderLg,
      alt: "alt text",
    },
    {
      src: shot5,
      srcLg: placeholderLg,
      alt: "alt text",
    },
    {
      src: shot6,
      srcLg: placeholderLg,
      alt: "alt text",
    },
    {
      src: shot9,
      srcLg: placeholderLg,
      alt: "alt text",
    },
  ];

  imageList.forEach((image) => {
    digitalGallery.appendChild(
      imageSection({
        src: image.src,
        srcLarge: image.srcLg,
        alt: image.alt,
        variant: "light",
        ratio: "Portrait",
      })
    );
  });

  return digitalGallery;
}
