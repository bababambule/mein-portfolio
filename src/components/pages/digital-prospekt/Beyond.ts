import { contentBlock } from "../../ContentBlock";

export function CaseDigitalBeyond(): HTMLElement {
  const digitalBeyond = contentBlock({
    headingText: "Beyond this Project",
    headingType: "h2",
    showBadge: false,
    blockVariant: "slateDark",
    body: `
      <p>My role as the online-lead showed me how valuable it is to combine design, development and business thinking.</p>
      <ul class="list-disc px-6 py-6 flex flex-col gap-4">
        <li>Mentored two junior designers and onboarded them to API integration</li>
        <li>Worked in parallel on another SaaS product for orange promotion</li>
        <li>Created digital brochures with the old Webflow/Wized/Airtable system (while building the new one)</li>
        <li>Produced ad graphics and videos for Meta ads in Canva, Photoshop, Illustrator, After Effects and Premiere</li>
        <li>Provided consulting for other agency projects</li>
      </ul>
    `,
  });

  return digitalBeyond;
}
