import { CreateHeading } from "../../Headline";
import { CvElement } from "./CvElement";

export function AboutCareer(): HTMLElement {
  const section = document.createElement("section");
  section.className = "bg-amber-50 py-10 px-12";

  const container = document.createElement("div");
  container.className = "max-w-7xl mx-auto";

  //Set Heading
  container.appendChild(
    CreateHeading({
      text: "Explore my Product Design Journey",
      type: "h2",
    })
  );

  section.appendChild(container);

  const jobs = [
    {
      company: "orange promotion",
      time: "Feb 2023 – present",
      position: "Senior Product Designer",
      badge: ["UX/UI", "Low-Code", "SaaS"],
    },
    {
      company: "Von Unruh",
      time: "Sep 2019 – Feb 2023",
      position: "Senior Product Designer",
      badge: ["UX/UI", "Low-Code", "eCommerce"],
    },
    {
      company: "Prototype.Club",
      time: "Dec 2019 – Dec 2022",
      position: "Senior Product Designer",
      badge: ["UX/UI", "Low-Code", "Freelance"],
    },
    {
      company: "Chainwise Group",
      time: "Apr 2018 – Mar 2019",
      position: "Senior Product Designer",
      badge: ["UX/UI", "Low-Code", "Branding"],
    },
    {
      company: "Anchor Point Marketing",
      time: "Apr 2017 – Mar 2019",
      position: "Senior Product Designer",
      badge: ["UX/UI", "Low-Code", "Branding"],
    },
    {
      company: "Föckersperger Ventures UG",
      time: "Feb 2017 – Apr 2017",
      position: "Product Designer",
      badge: ["UX/UI", "Branding", "Frontend Development"],
    },
    {
      company: "Games Quality",
      time: "Apr 2015 – Dec 2016",
      position: "Game Artist",
      badge: ["UX/UI", "Game Art", "Animation"],
    },
    {
      company: "Patrich Dornbusch UG",
      time: "Jun 2014 – Dec 2014",
      position: "Product Designer",
      badge: ["UX/UI", "Frontend Development", "Freelance"],
    },
    {
      company: "rabbit eMarketing GmbH",
      time: "Jan 2013 – Sep 2013",
      position: "Template Developer",
      badge: ["Newsletter", "XML/PHP", "Graphic Design"],
    },
    {
      company: "Hi5 Textildruck GmbH",
      time: "Jan 2012 – Dec 2012",
      position: "Media Designer",
      badge: ["Graphic Design", "Printdesign", "Marketing"],
    },
  ];

  jobs.forEach((job) => {
    container.appendChild(
      CvElement({
        company: job.company,
        time: job.time,
        position: job.position,
        badge: job.badge,
      })
    );
  });

  return section;
}
