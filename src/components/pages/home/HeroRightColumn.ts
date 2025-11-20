import { createButton } from "../../Button";
import { createIconLink, type IconLinkOptions } from "../../IconLink";
import { CreateHeading } from "../../Headline";
import gitIcon from "../../../assets/icons/fa7-brands_square-github.svg?raw";
import linkedIcon from "../../../assets/icons/fa7-brands_linkedin.svg?raw";
import dribbbleIcon from "../../../assets/icons/fa7-brands_dribbble-square.svg?raw";

export function HeroRightColumn(): HTMLElement {
  const rightColumn = document.createElement("div");
  rightColumn.className =
    "flex-1 flex gap-5 flex-col justify-center px-6 md:max-w-[75%] md:mx-auto lg:self-end";

  const heroHeading = CreateHeading({
    text: 'I ship features - from design to <span class="bg-amber-400 border-b-2 border-amber-50">production</span>',
    type: "h1",
    className: "text-amber-50 text-3xl/snug md:text-4xl font-bold",
  });

  const heroText = document.createElement("p");
  heroText.className = "text-base text-amber-50";

  const heroTextBase = document.createTextNode(
    "Component systems, iterative UX, production-ready code. "
  );

  const heroTextBold = document.createElement("span");
  heroTextBold.className = "font-bold";
  heroTextBold.textContent =
    "I design, develop and optimize for real impact – fast.";

  heroText.appendChild(heroTextBase);
  heroText.appendChild(heroTextBold);

  rightColumn.appendChild(heroHeading);
  rightColumn.appendChild(heroText);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex flex-wrap gap-4 justify-between";

  const projectsButton = createButton({
    text: "Read Case Studies",
    onClick: () => {
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    },
    variant: "primary",
    fullWidth: false,
  });

  const socialButtonWrapper = document.createElement("div");
  socialButtonWrapper.className = "flex gap-4 items-center";

  const socialLinks: IconLinkOptions[] = [
    {
      link: "https://www.github.com/bababambule",
      title: "Visit me on GitHub",
      src: gitIcon,
    },
    {
      link: "https://www.linkedin.com/in/cristianzweigler/",
      title: "Visit me on LinkedIn",
      src: linkedIcon,
    },
    {
      link: "https://dribbble.com/CristianZweigler",
      title: "Visit me on Dribbble",
      src: dribbbleIcon,
    },
  ];

  socialLinks.forEach((icon) => {
    const socialIcon = createIconLink({
      color: icon.color,
      link: icon.link,
      title: icon.title,
      src: icon.src,
    });
    socialButtonWrapper.appendChild(socialIcon);
  });

  buttonContainer.appendChild(projectsButton);
  buttonContainer.appendChild(socialButtonWrapper);

  rightColumn.appendChild(buttonContainer);

  return rightColumn;
}
