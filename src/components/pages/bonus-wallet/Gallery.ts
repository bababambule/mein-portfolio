import { imageSection } from "../../ImageComponent";
import img1 from "../../../assets/img/bonus-wallet/Shot 3.webp";
import img2 from "../../../assets/img/bonus-wallet/Shot 4.webp";
import img3 from "../../../assets/img/bonus-wallet/Shot 5.webp";
import img4 from "../../../assets/img/bonus-wallet/Shot 6.webp";
import placeholderLg from "../../../assets/img/placeholder/placeholder-16-9.webp";

export function CaseBonusGallery(): HTMLElement {
  const imageList = [
    {
      src: img1,
      srcLg: placeholderLg,
      alt: "alt text",
    },
    {
      src: img2,
      srcLg: placeholderLg,
      alt: "alt text",
    },
    {
      src: img3,
      srcLg: placeholderLg,
      alt: "alt text",
    },
    {
      src: img4,
      srcLg: placeholderLg,
      alt: "alt text",
    },
  ];

  const bonusGallery = document.createElement("div");

  imageList.forEach((image) => {
    const galleryItem = imageSection({
      src: image.src,
      srcLarge: image.srcLg,
      alt: image.alt,
      variant: "light",
      ratio: "Portrait",
    });
    bonusGallery.appendChild(galleryItem);
  });

  return bonusGallery;
}
