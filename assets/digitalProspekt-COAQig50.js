import{c as n,P as p,a as m,i as h}from"./mobileMenu-BetVJ76o.js";import{i as r,p as o,t as g,a as u,B as b,F as f,b as y,c as v}from"./api-_0z0cRAw.js";import{c as l}from"./QuoteBlock-BITm75rO.js";const x="/assets/Shot%201-CloQ8k7e.webp";function w(){const e=document.createElement("div");e.className="pt-12";const t=n({blockVariant:"amberLight",badgeText:"Digital Prospekt",badgeVariant:"slate",showBadge:!0,headingText:"From Bottleneck to Performance Champion",headingType:"h1",body:`<p class="text-xl font-light">How I reduced costs by €17,000 and load times by 67% by converting an outdated system into a scalable multi-tenant product.</p>
    <div class="-ml-6 -mr-6 my-6 grid grid-cols-2 gap-4">
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">67%</p>
        <p>Faster load times</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">93%</p>
        <p>Reduced production time</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">600%</p>
        <p>More conversions</p>
      </div>
      <div class="bg-amber-900/10 p-4 rounded-lg">
        <p class="text-2xl font-bold">€15,000</p>
        <p>Cost savings annually</p>
      </div>
    </div>
  `}),s=r({src:x,srcLarge:o,alt:"A modern SaaS product for furniture marketing",ratio:"Portrait",variant:"lightToSlate"});return e.appendChild(t),e.appendChild(s),e}const C="/assets/Shot%207-Cu4FeTt4.webp";function k(){const e=document.createElement("div"),t=`
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-6">
          <p>Furniture retailers wanted targeted digital brochures with optimized content for different audiences. The pitch worked. The technology didn't.</p>
          <p>I inherited a WordPress/WooCommerce system in February 2023 that took 15 to 20 seconds to load. Even after switching to Webflow + Wized + Airtable, the situation remained bad. The reality was harsh:</p>
        </div> 
         <div class="-mx-6">
        <div class="flex flex-col">
          ${['<span class="font-semibold">5-6 second load times</span> (down from 15-20s, but still too slow)','<span class="font-semibold">2–4 weeks production time</span> per client','<span class="font-semibold">€624/year per client</span> (Webflow + Wized) <span class="font-semibold">+ €4,800/year</span> for Airtable seats','<span class="font-semibold">No scalability</span> – each client needed a separate Webflow instance',`<span class="font-semibold">Poor content management</span> – Airtable's interface was unintuitive, API bottlenecks killed performance`].map(c=>`<p class="border border-slate-700 odd:bg-slate-700/30 border-b-0 last-of-type:border-b py-4 px-6 first-of-type:rounded-tl-lg first-of-type:rounded-tr-lg last-of-type:rounded-bl-lg last-of-type:rounded-br-lg">${c}</p>`).join("")}
        </div>
    </div>
  `,s=n({blockVariant:"slateDark",showBadge:!1,headingText:"A System at its limit",headingType:"h2",body:t}),d=r({src:C,srcLarge:o,alt:"The old legacy system was build entirely in Wordpress and wooCommerce and beside horendous loading times it was painful to create new digital flyers",ratio:"Portrait",variant:"slateToLight"});return e.appendChild(s),e.appendChild(d),e}const S="/assets/Shot%2010-BVYDTKbI.webp",T="/assets/timeline2-DZRrPmox.webp",P="/assets/timeline3-BbDUQ5QC.webp";function B(){const e=document.createElement("div"),a=[{date:"Q1 2023",title:"Start at orange promotion",text:"Inherited WordPress/WooCommerce (15-20s load times). Built first Webflow instance, experimented with multi-tenant using Finsweet and HTMX."},{date:"Q2 2023",title:"Webflow + Airtable via Zapier/Make",text:"Product sync through automation. Too expensive and error-prone."},{src:S,alt:"The second iteration of the Digital Prospekt had a good start, but quickly showed its flaws"},{date:"Q3 2023",title:"Learned Wized, API Integration",text:"Migrated to Webflow + Wized with direct Airtable API. Multi-tenant went into production."},{date:"Q4 2023",title:"Switched to Per-Client Instances",text:"Abandoned multi-tenant. Each client got their own Webflow instance. High maintenance – built component library as mitigation."},{src:T,alt:"Airtable forced us to call every linked table by itself. Paired with their horribly slow API this system was destined to fail from the get go"},{date:"Q2 2024",title:"Testing self-hosted NocoDB",text:"Attempted self-hosted alternative. Load times back to 15-20s, poor interface. Failed."},{date:"Q3 2024",title:"Breakthrough: Nordcraft + Directus",text:"Directus provided easy backend with multi-tenant capabilities. Load times using GraphQL are phenomenal."},{src:P,alt:"Nordcraft and Directus gave us the possibilties that we were looking for. Easy to use visual editor for fast paced development, a backend that allowed us to implement a multi-tenant system without building a custom admin interface and an insanely versatile API including graphQL"},{date:"Q4 2024",title:"Beta Launch",text:"2 clients, 10 brochures live. 4 more clients in pipeline. Production time reduced to hours."},{date:"Coming Soon",title:"Full Migration & SaaS Launch",text:"Migrating existing clients. Refining design system, implementing accessibility, optimizing for self-service. Goal: Sub-1.5s load times."}],t=n({blockVariant:"amberLight",showBadge:!1,headingText:"Three Years, Six Iterations and Running Two Systems",headingType:"h2",body:`
      <p class="text-amber-800">While I continued to operate the previous system for current clients, what began as a WordPress hack developed into a full product makeover. Constant learning, thorough testing, and the guts to give up on unsuccessful solutions.</p>
    `}),s=g(a);return e.appendChild(t),e.appendChild(s),e}const D="/assets/learnings-BJnFK6KE.webp";function A(){const e=document.createElement("div");e.className="flex flex-col gap-2";const a=document.createElement("p");a.textContent="These three years were a masterclass in self-directed learning: From REST and GraphQL APIs to VPS administration with Docker and component-based design in Nordcraft.";const t=document.createElement("p");return t.textContent="Every failed iteration pushed me forward technically – and taught me when to abandon a solution instead of trying to fix it.",e.appendChild(a),e.appendChild(t),u({variant:"amberToSlate",title:"What I Learned",body:e,src:D,alt:"Wow I learned all of that?!",color:"amber"})}const L="/assets/techstack-saVi1eRu.webp";function F(){const e=document.createElement("div"),a=n({blockVariant:"slateDark",showBadge:!1,headingText:"Tech Stack Breakdown: Self-Hosted, Scalable, Fast",headingType:"h2",body:"I built a complete multi-tenant system that delivers individual digital brochures to clients in hours – without expensive SaaS dependencies."}),t=r({src:L,variant:"slate"});return e.appendChild(a),e.appendChild(t),e}const I="/assets/multiTenant-BAryrQ6F.webp",W="/assets/pageBuilder-BZ_5wG4J.webp",M="/assets/mobileFirst-DvZ0UisR.webp";function E(){const a=b({title:"Core Features That Make the Difference",list:[{title:"Multi-tenant architecture",text:"Many clients, one system. Every client in Directus receives a dashboard with content that is restricted to certain users. dynamic theme creation using the colours of the client's brand.",src:I},{title:"Dynamic Page Builder",text:"Using Directus's Many-to-Any relations, flexible page structures are possible. Clients can choose from templates without me touching code.",src:W},{title:"Mobile-First Design",text:"Mobile Design True mobile-first design is made possible by Nordcraft; No more CSS cascade wrestling like in Webflow.",src:M}]});return a.classList.add("bg-slate-600"),a}function Q(){const e=document.createElement("div"),t=n({showBadge:!1,headingText:"Faster. Cheaper. Simply lovely.",headingType:"h2",body:`
    <p>Three years of iteration paid off. The new system outperforms the old solution in every relevant metric – and is currently being expanded into a SaaS product.</p>
    <div class="mt-6 -mx-6 grid grid-cols-2 gap-4">

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Faster Performance</p>
          <p class="text-2xl font-semibold">67%</p>
        </div>
        <p>FCP reduced from 5-6s to under 2s.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Reduced Production Time</p>
          <p class="text-2xl font-semibold">93%</p>
        </div>
        <p>From 2 weeks to under 1 day (often hours).</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4 col-span-2">
        <div>
          <p class="font-semibold">Longer Session Duration</p>
          <p class="text-2xl font-semibold">+83%</p>
        </div>
        <p>From 30 to 55 seconds. Users actively engage.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">Lower Bounce Rate</p>
          <p class="text-2xl font-semibold">-14%</p>
        </div>
        <p>Decresed from 85% to 73%. Better UX = more engagement.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4">
        <div>
          <p class="font-semibold">More Conversions</p>
          <p class="text-2xl font-semibold">600%</p>
        </div>
        <p>2-3 calls per brochure → 20+ leads/week for one client.</p>
      </div>

      <div class="bg-amber-100/10 text-amber-50 p-3 rounded-md flex flex-col gap-4 col-span-2">
        <div>
          <p class="font-semibold">Annual Cost Savings</p>
          <p class="text-2xl font-semibold">€17,000</p>
        </div>
        <p>€4,800 Airtable + €12,288 Webflow/Wized eliminated. Only €348/year for Nordcraft across 12 clients.</p>
      </div>

    </div>
    `}),s=l({body:'"Clients are impressed by the speed of implementation. Real-time analytics via Plausible enable better iteration of ad creatives for Facebook and Instagram – a game changer for data-driven marketing."',button:!1,variant:"dark"});return e.appendChild(t),e.appendChild(s),e}const V="/assets/agile-nhgYhOFO.webp",R="/assets/component-based-CqAWn4Vm.webp",N="/assets/database-CTAivhIs.webp",G="/assets/headless-BvcA9Mbd.webp",z="/assets/server-DezOqlha.webp",j="/assets/thinking-Cg3bqKx9.webp";function O(){const e=document.createElement("div"),t=f({title:"My Technical Growth",text:"Three years of failed iterations taught me more than any tutorial. Here are the skills I built from the ground up.",list:[{title:"VPS Administration & Docker",text:"Server setup, container orchestration, self-hosting Directus and Plausible Analytics",src:z},{title:"REST & GraphQL APIs",text:"From first REST calls in Airtable to complex GraphQL queries in Directus",src:y},{title:"Headless CMS Architecture",text:"Multi-tenant setup, M2A relations, dynamic theming systems",src:G},{title:"Component-Based Design",text:"From Webflow cascades to Nordcraft's modern component system (principles transferable to frameworks like Vue.js or React)",src:R},{title:"Database Design",text:"Relational data modeling for multi-tenant systems",src:N},{title:"Analytics & Tracking",text:"Cookieless tracking with Plausible and true server-side data analytics",src:v},{title:"Product Thinking",text:"From technical requirements to real business outcomes",src:j},{title:"Agile Iteration",text:"Milestone-based development, rapid prototyping, courage to abandon",src:V}]});t.classList.add("bg-slate-600");const s=l({body:'"The biggest learning moment was using a VPS with Docker. Suddenly I had full control over the stack – and the ability to self-host complex systems instead of relying on expensive SaaS solutions."',button:!1,variant:"slate"});return e.appendChild(t),e.appendChild(s),e}const q="/assets/Shot%203-CvTnamkd.webp",H="/assets/Shot%204-BlRdG0ap.webp",U="/assets/Shot%205-CugesHIA.webp",J="/assets/Shot%206-BVazQBbB.webp",K="/assets/Shot%209-CjcpVatu.webp";function Z(){const e=document.createElement("div");return[{src:q,srcLg:o,alt:"alt text"},{src:H,srcLg:o,alt:"alt text"},{src:U,srcLg:o,alt:"alt text"},{src:J,srcLg:o,alt:"alt text"},{src:K,srcLg:o,alt:"alt text"}].forEach(t=>{e.appendChild(r({src:t.src,srcLarge:t.srcLg,alt:t.alt,variant:"light",ratio:"Portrait"}))}),e}function Y(){return n({headingText:"Beyond this Project",headingType:"h2",showBadge:!1,blockVariant:"slateDark",body:`
      <p>My role as the online-lead showed me how valuable it is to combine design, development and business thinking.</p>
      <ul class="list-disc px-6 py-6 flex flex-col gap-4">
        <li>Mentored two junior designers and onboarded them to API integration</li>
        <li>Worked in parallel on another SaaS product for orange promotion</li>
        <li>Created digital brochures with the old Webflow/Wized/Airtable system (while building the new one)</li>
        <li>Produced ad graphics and videos for Meta ads in Canva, Photoshop, Illustrator, After Effects and Premiere</li>
        <li>Provided consulting for other agency projects</li>
      </ul>
    `})}function X(){const e=document.createElement("div");e.className="flex flex-col gap-2 text-xl font-light";const a=document.createElement("p");a.textContent="What started as frustration over slow load times became a scalable SaaS product that enables new markets for orange promotion.";const t=document.createElement("p");return t.textContent="Three years of iteration, five failed approaches, countless new skills – and ultimately a system that delivers.",e.appendChild(a),e.appendChild(t),n({showBadge:!1,headingText:"From Bottleneck to Performance Champion",headingType:"h2",body:e,blockVariant:"amberDark"})}const i=document.querySelector("#app");if(!i)throw new Error("App container not found");document.body.insertBefore(p(),i);i.appendChild(w());i.appendChild(k());i.appendChild(B());i.appendChild(A());i.appendChild(F());i.appendChild(E());i.appendChild(Q());i.appendChild(O());i.appendChild(Z());i.appendChild(Y());i.appendChild(X());i.appendChild(m());h();
