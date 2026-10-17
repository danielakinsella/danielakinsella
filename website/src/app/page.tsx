import Image from "next/image";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Polaroid from "@/components/Polaroid";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "30", suffix: "yrs", text: "writing software, in Berlin and New York." },
  { value: "0", suffix: "", text: "production disruptions replacing 20-year-old print systems at The Times." },
  { value: "20", suffix: "M", text: "monthly readers served by the news platform I led at Patch." },
  { value: "600", suffix: "+", text: "engineers reached by the agentic engineering training I co-designed." },
];

type Chapter = {
  id: string;
  year: string;
  title: ReactNode;
  text: string;
  photos: ReactNode;
  flip?: boolean;
};

const chapters: Chapter[] = [
  {
    id: "berlin-1998",
    year: "Berlin, 1998",
    title: (
      <>
        One year. <span className="text-accent">Line by line.</span>
      </>
    ),
    text:
      "I lasted one semester of computer science at TU Berlin. Nobody was welcoming, and the guys all acted like they already understood everything. So I did it myself: I bought programming books in English, which I could barely read, and copied the code out of them for almost a year. At the end of that year I had built a website.",
    photos: (
      <div className="relative">
        <Polaroid src="/images/story/desk-1998.jpg" alt="My desk in Berlin in 1998, with a beige PC and CRT monitor" tilt={-3} />
        <Polaroid
          src="/images/story/homepage-1998.jpg"
          alt="My first homepage from 1998, orange text on a black background"
          aspect="16 / 9"
          tilt={3}
          className="w-2/3 absolute -bottom-10 -right-2 md:-right-8"
          sizes="(max-width: 768px) 60vw, 28vw"
        />
      </div>
    ),
  },
  {
    id: "pixelpark",
    year: "Pixelpark, 1999–2001",
    title: (
      <>
        &ldquo;I want to be <span className="text-accent">a coder.</span>&rdquo;
      </>
    ),
    text:
      "I sent my website to Pixelpark, then the biggest web agency in Germany. The interviewer asked me one question: do you want to be a coder, or do you want to do design? Saying it out loud felt incredible. They hired me that day. The company listed at €15 a share, peaked at €336, and within two years the party was over. The internet did not go away.",
    flip: true,
    photos: (
      <div className="relative">
        <Polaroid src="/images/story/berlin-1999.jpg" alt="Me in my Berlin apartment in 1999" tilt={2} />
        <Polaroid
          src="/images/story/pixelpark-card-dev.jpg"
          alt="My Pixelpark business card: Daniela Kirsch, IT Developer"
          aspect="1.66 / 1"
          tilt={-4}
          className="w-3/5 absolute -bottom-10 -left-2 md:-left-8"
          sizes="(max-width: 768px) 55vw, 24vw"
        />
      </div>
    ),
  },
  {
    id: "helloplugin",
    year: "HelloPlugin, 2007–2015",
    title: (
      <>
        Eight years of <span className="text-accent">invisible work.</span>
      </>
    ),
    text:
      "I co-founded a Berlin development shop and ran it for eight years with a team of eight engineers. We built for Mercedes-Benz, Adidas, Electronic Arts, Deutsche Telekom and Axel Springer, mostly behind agencies and often under NDA. I was managing director, salesperson, project planner and lead developer at the same time. My best work had someone else's name on it.",
    photos: (
      <div className="relative">
        <Polaroid
          src="/images/story/dotcom-crash.jpg"
          alt="An emptied-out agency office after the dot-com crash"
          tilt={-2}
          className="w-4/5 mx-auto"
        />
      </div>
    ),
  },
  {
    id: "new-york",
    year: "New York, 2015",
    title: (
      <>
        39. New York. <span className="text-accent">Three suitcases.</span>
      </>
    ),
    text:
      "In September 2015 I came to New York on vacation. A photographer friend asked whether I could help name the people in his event photos, maybe with facial recognition. I said yes, yes, I can. Two months later I moved here with three suitcases and no network of my own to build NameFace, a Shazam for photos.",
    flip: true,
    photos: (
      <div className="relative">
        <Polaroid src="/images/story/three-suitcases.jpg" alt="Three suitcases on a wooden floor, everything I brought to New York" aspect="16 / 9" tilt={2} />
        <Polaroid
          src="/images/story/nameface-phone.jpg"
          alt="NameFace running on a phone, identifying a face at an event"
          aspect="3 / 4"
          tilt={-5}
          className="w-2/5 absolute -bottom-12 -left-2 md:-left-8"
          sizes="(max-width: 768px) 40vw, 16vw"
        />
      </div>
    ),
  },
  {
    id: "nameface",
    year: "NameFace, 2016",
    title: (
      <>
        We built it. It worked. <span className="text-accent">And it still failed.</span>
      </>
    ),
    text:
      "We launched in Chelsea in January 2016 in front of five hundred people. No investor, no accelerator, no Y Combinator. Photographers used the product every day, and it never made money. I ended up in an apartment with five roommates, in debt and very alone. Being able to build something is not the same as building something that succeeds.",
    photos: (
      <div className="relative">
        <Polaroid src="/images/story/nameface-party.jpg" alt="The NameFace launch party in Chelsea, January 2016" aspect="16 / 9" tilt={-2} />
        <Polaroid
          src="/images/story/nameface-daniela.jpg"
          alt="Me in front of the NameFace step-and-repeat at the launch"
          aspect="4 / 5"
          tilt={4}
          className="w-2/5 absolute -bottom-12 -right-2 md:-right-8"
          sizes="(max-width: 768px) 40vw, 16vw"
        />
      </div>
    ),
  },
  {
    id: "photographer",
    year: "2016–2018",
    title: (
      <>
        So I became <span className="text-accent">a photographer.</span>
      </>
    ),
    text:
      "I turned the startup into an event photo agency and shot it myself: fashion-week front rows, galas, premieres. In 2018 I built an AI fashion-forecasting pilot with Nicole Miller, years before AI was every startup's pitch. I learned what to build by watching what people actually wanted.",
    flip: true,
    photos: (
      <div className="relative">
        <Polaroid src="/images/story/photographer.jpg" alt="Me holding a camera rig with a light at a camera store" aspect="4 / 5" tilt={2} className="w-4/5" />
        <Polaroid
          src="/images/story/cameras.jpg"
          alt="My cameras and lenses laid out on a table"
          aspect="1 / 1"
          tilt={-4}
          className="w-1/2 absolute -bottom-10 -right-2 md:-right-6"
          sizes="(max-width: 768px) 45vw, 20vw"
        />
      </div>
    ),
  },
  {
    id: "patch",
    year: "Patch, 2018–2023",
    title: (
      <>
        Two jobs. <span className="text-accent">One company.</span>
      </>
    ),
    text:
      "At Patch I was tech lead for a hyperlocal news platform with more than 20 million monthly readers: TypeScript, Node.js, React and AWS serverless. I also wrote a weekly photo column there. Only one of the two jobs was public.",
    photos: (
      <div className="relative">
        <Polaroid src="/images/story/patch.jpg" alt="Me in a Patch cap, pointing at the Patch office sign" aspect="4 / 5" tilt={-3} className="w-4/5 mx-auto" />
      </div>
    ),
  },
  {
    id: "nyt",
    year: "The New York Times, 2023–",
    title: (
      <>
        My own <span className="text-accent">front door.</span>
      </>
    ),
    text:
      "I joined The Times to work on the systems behind the nightly print run and replaced undocumented 20-year-old systems with zero production disruption. Today I am on the AI Enablement team, which builds enterprise AI workflow automations. In August 2026, a week after turning 50, I was promoted to Principal Engineer.",
    flip: true,
    photos: (
      <div className="relative">
        <Polaroid src="/images/story/nyt-front-door.jpg" alt="Me waving in front of The New York Times building" aspect="4 / 5" tilt={2} className="w-4/5" />
        <Polaroid
          src="/images/story/then-and-now.jpg"
          alt="Side by side: me in 2026 on stage with a microphone, and in 2015 in a studio portrait"
          aspect="1 / 1"
          tilt={-4}
          className="w-1/2 absolute -bottom-10 -right-2 md:-right-6"
          sizes="(max-width: 768px) 45vw, 20vw"
        />
      </div>
    ),
  },
];

const photographyStrip = [
  { src: "/images/story/photo-lady-gaga.jpg", alt: "Lady Gaga at the National Board of Review awards" },
  { src: "/images/story/photo-scarlett-johansson.jpg", alt: "Scarlett Johansson at the American Museum of Natural History gala" },
  { src: "/images/story/photo-karlie-kloss.jpg", alt: "Karlie Kloss at the Berggruen Prize gala" },
  { src: "/images/story/photo-queen-sofia.jpg", alt: "Queen Sofia of Spain" },
  { src: "/images/story/photo-jon-bon-jovi.jpg", alt: "Jon Bon Jovi on a red carpet" },
  { src: "/images/story/fashion-week-runway.jpg", alt: "A runway show from the front row at New York Fashion Week" },
];

const statements: ReactNode[] = [
  <>
    Don&rsquo;t ask AI to do the thing. <span className="text-accent">Ask it to build you the thing that does the thing.</span>
  </>,
  <>
    AI makes building cheap. It doesn&rsquo;t make <span className="text-accent">knowing what to build</span> cheap.
  </>,
  <>
    The code runs. <span className="text-accent">The problem is everything you didn&rsquo;t ask for.</span>
  </>,
  <>
    Nobody rewrote it. <span className="text-accent">Somebody made it grown-up.</span>
  </>,
];

const talks = [
  {
    event: "Invited talk",
    date: "October 21, 2026",
    format: "Keynote",
    title: "Everyone is coding now! How AI is changing who builds",
  },
  {
    event: "LDX3 New York, LeadDev",
    date: "September 15, 2026",
    format: "Live demo",
    title: "What's your workflow? An email-to-data platform in production",
  },
  {
    event: "The New York Times",
    date: "Multiple sessions, 2026",
    format: "Internal talks",
    title: "AI Enablement Workshop",
  },
];

const topics = [
  "Everyone is coding now: what happens when building software stops being exclusive",
  "Make it grown-up: taking AI tools from a personal GitHub repo to a governed production system",
  "Modernizing 20-year-old systems with coding agents and zero production downtime",
  "Build the thing that does the thing: automation for people who are not engineers",
  "Starting over: Berlin in 1999, New York at 39, Principal at 50",
];

const experiences = [
  {
    company: "The New York Times",
    location: "New York, NY",
    title: "Principal Engineer · AI Automation & Agentic Systems",
    period: "Aug 2026 – Present",
    description:
      "Senior technical engineer for AI business automation in Enterprise Technology. I architect and operate production platforms that turn scattered AI experiments into safe, observable and maintainable enterprise systems, and I set the engineering standards for the discipline.",
    highlights: [
      "An AI solution catalog with guardrails, staging, observability, cost governance and a clear ownership and maintenance model, hardened for security, least-privilege access and auditability.",
      "The technical standards and criteria for when a workflow must graduate from a personal-use agent to an enterprise-maintained system, plus the reference architectures and frameworks other engineers build on.",
      "Applying agentic engineering to modernize critical legacy systems, packaged as reusable approaches other teams can adopt.",
      "Growing engineers into agentic work through reference architectures, reusable plugins, office hours and hands-on training, and representing our engineering practice externally through talks and writing.",
    ],
  },
  {
    company: "The New York Times",
    location: "New York, NY",
    title: "Staff Software Engineer · Co-Lead, Enterprise GenAI Initiative",
    period: "Dec 2023 – Aug 2026",
    description:
      "Enterprise Technology, supporting the systems behind the newspaper's nightly print production, and co-leading the Enterprise GenAI initiative.",
    highlights: [
      "Led replacement of 20+ year-old, undocumented print systems: reverse-engineered a third-party planner with no source access, defined architecture, and wrote much of the code. Coding agents cut the timeline nearly in half; delivered in about six months with zero production disruption.",
      "Founded the email-to-data platform on AWS Bedrock and AgentCore; it spread to five teams in six months, and one newsroom workflow surfaced 21% more items than the manual process.",
      "Among the first to test agentic coding; co-authored the guidelines that informed leadership's adoption decision; co-designed engineering-wide agentic training, owning agent and subagent architecture.",
      "Built a secure CI on-ramp for least-privilege, audit-trailed LLM access with per-run cost tracking, and operated agents for code review, issue resolution, documentation and self-healing dependency maintenance.",
    ],
  },
  {
    company: "Patch.com",
    location: "New York, NY",
    title: "Tech Lead & Senior Software Engineer",
    period: "May 2018 – Dec 2023",
    description:
      "Tech lead and full-stack senior engineer for a news platform serving 20+ million monthly users with hyper-local news across the United States.",
    highlights: [
      "Engineered core services using TypeScript, Node.js, React, PHP and shell scripting.",
      "Architected concurrent job queues with AWS SQS, Lambda, SNS, EventBridge and Step Functions.",
      "Built backend caching with Fastly for top Google PageSpeed Insights scores; mentored engineers and ran technical workshops.",
    ],
  },
  {
    company: "NameFace",
    location: "New York, NY",
    title: "Co-Founder & Senior Software Engineer",
    period: "2015 – 2018",
    description:
      "A facial recognition platform for news and event photographers to identify personalities in their photos.",
    highlights: [
      "Built the recognition, upload, naming and metadata workflows; hired a team of four; pitched investors and handled customer acquisition.",
    ],
  },
  {
    company: "HelloPlugin GmbH",
    location: "Berlin, Germany",
    title: "Co-Founder, Managing Director & Lead Developer",
    period: "2007 – 2015",
    description:
      "A Berlin web engineering shop building for global brands and agencies: PHP and JavaScript applications, Drupal and WordPress, responsive web.",
    highlights: [
      "Clients and agency partners included Mercedes-Benz, Smart, Adidas, Electronic Arts, MTV, Deutsche Telekom, BBDO, Axel Springer and Bayer.",
      "Recruited and mentored a team of eight engineers while remaining hands-on as lead developer.",
    ],
  },
  {
    company: "Earlier career",
    location: "Berlin & Essen, Germany",
    title: "Director of PM, Technical PM, Senior Engineer",
    period: "1999 – 2007",
    description: "Pixelpark, freelance, GFKL Financial Services and GameDuell.",
    highlights: [
      "GameDuell: Director of Project Management, scaling the team from 10 to 30+ engineers, including an offshore team in Thailand.",
      "GFKL Financial Services: Technical Product Manager with distributed teams in Lithuania and Armenia.",
    ],
  },
];

const skillCategories = [
  { title: "AI enablement", skills: ["Claude Code SDK", "MCP", "Agentic workflows", "RAG", "AWS Bedrock", "AWS AgentCore", "Strands Agents", "LLM integration"] },
  { title: "Languages & frameworks", skills: ["TypeScript", "Node.js", "Python", "React", "Next.js", "SQL", "Bash"] },
  { title: "AWS & serverless", skills: ["Lambda", "Step Functions", "EventBridge", "SQS", "SNS", "DynamoDB", "RDS", "S3", "IAM"] },
  { title: "Infrastructure & CI/CD", skills: ["Terraform", "GitHub Actions", "HashiCorp Vault", "Fastly", "CloudWatch", "Datadog"] },
];

const familyPhotos = [
  { src: "/images/story/family-keith.jpg", alt: "Keith and me", span: "row-span-2" },
  { src: "/images/story/family-rasmus.jpg", alt: "Rasmus, our Lagotto Romagnolo" },
  { src: "/images/story/family-mojo.jpg", alt: "Mojo the gray tabby and me" },
  { src: "/images/story/family-fred.jpg", alt: "Fred the Maine Coon on the rooftop", span: "row-span-2" },
  { src: "/images/story/family-cat-toys.jpg", alt: "One of our cats surrounded by plush toys" },
  { src: "/images/story/cat-ring-2.jpg", alt: "Mojo peering through a ring light" },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrow, id, children, className = "" }: { eyebrow: string; id?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.08] tracking-tight max-w-4xl">{children}</h2>
    </div>
  );
}

function ChapterBlock({ chapter }: { chapter: Chapter }) {
  return (
    <div id={chapter.id} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center scroll-mt-24">
      <div className={`pb-12 md:pb-0 ${chapter.flip ? "md:order-2" : ""}`}>{chapter.photos}</div>
      <div className={chapter.flip ? "md:order-1" : ""}>
        <p className="eyebrow mb-4">{chapter.year}</p>
        <h3 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight mb-5">{chapter.title}</h3>
        <p className="text-muted text-lg leading-relaxed font-medium">{chapter.text}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://danielakinsella.com/#person",
  name: "Daniela Kinsella",
  url: "https://danielakinsella.com",
  image: "https://danielakinsella.com/images/story/portrait.jpg",
  jobTitle: "Principal Engineer",
  description:
    "Principal Engineer at The New York Times on the AI Enablement team, building enterprise AI workflow automations. Keynote and conference speaker on how AI is changing who builds software.",
  email: "mailto:hello@danielakinsella.com",
  worksFor: {
    "@type": "Organization",
    name: "The New York Times",
    url: "https://www.nytimes.com/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jersey City",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  nationality: "German",
  knowsLanguage: ["en", "de"],
  knowsAbout: [
    "AI enablement",
    "Agentic systems",
    "AI workflow automation",
    "Legacy system modernization",
    "AWS serverless architecture",
    "Software engineering leadership",
    "Public speaking",
  ],
  sameAs: [
    "https://www.linkedin.com/in/danielakinsella/",
    "https://github.com/danielakinsella",
    "https://www.instagram.com/danielakinsella/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://danielakinsella.com/#website",
  url: "https://danielakinsella.com",
  name: "Daniela Kinsella",
  description: "Principal Engineer at The New York Times. Speaker on how AI is changing who builds.",
  inLanguage: "en-US",
  about: { "@id": "https://danielakinsella.com/#person" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
      />
      <Header />
      <main>

      {/* Hero */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center w-full">
          <div>
            <p className="eyebrow mb-5">Principal Engineer · The New York Times</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-7">
              Everyone is coding now. <span className="text-accent">I help make it grown-up.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted font-medium leading-relaxed max-w-xl mb-9">
              I&rsquo;m Daniela Kinsella. I&rsquo;ve been writing software for almost 30 years, in Berlin and New York.
              On the AI Enablement team at The New York Times I help the people who understand the work build their own
              tools, and I make sure those tools are stable, observable, secure and governed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#speaking"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-ink font-bold hover:bg-white transition-colors"
              >
                Invite me to speak
              </a>
              <a
                href="#story"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/25 text-white font-bold hover:border-accent hover:text-accent transition-colors"
              >
                Read my story
              </a>
            </div>
          </div>
          <div className="relative md:justify-self-end w-full max-w-sm md:max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/story/portrait.jpg"
                alt="Daniela Kinsella"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-paper text-ink px-4 py-2 rounded-sm shadow-xl">
              <p className="font-black leading-tight">Daniela Kinsella</p>
              <p className="text-xs text-panel font-semibold">Jersey City, NJ · Berlin, Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((s) => (
            <div key={s.text}>
              <p className="text-5xl md:text-6xl font-black text-accent leading-none mb-3">
                {s.value}
                <span className="text-2xl md:text-3xl align-top ml-1">{s.suffix}</span>
              </p>
              <p className="text-sm font-semibold text-muted leading-snug">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" aria-labelledby="story-heading" className="py-24 md:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="My story" id="story-heading" className="mb-6">
            I didn&rsquo;t go to college. I&rsquo;m an immigrant. I came to this country at 39 to build a startup that cost me everything.{" "}
            <span className="text-accent">So I know a little bit about starting over.</span>
          </SectionHeading>
          <p className="text-muted text-lg font-medium max-w-2xl mb-20 md:mb-28">
            The rules changed and nobody told us. That is what a lot of us feel about AI right now. It&rsquo;s also the story of my
            whole career.
          </p>

          <div className="space-y-24 md:space-y-36">
            {chapters.slice(0, 6).map((c) => (
              <ChapterBlock key={c.id} chapter={c} />
            ))}

            {/* Photography strip */}
            <div className="-mx-6 md:mx-0">
              <div className="flex gap-3 overflow-x-auto px-6 md:px-0 md:grid md:grid-cols-6 pb-2">
                {photographyStrip.map((p) => (
                  <div key={p.src} className="relative shrink-0 w-44 md:w-auto aspect-[3/4] overflow-hidden rounded-sm bg-panel">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 176px, 16vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="px-6 md:px-0 mt-4 text-sm font-semibold text-dim">
                Front row at Fashion Week, with a camera. A few of the people I photographed between 2016 and 2020.
              </p>
            </div>

            {chapters.slice(6).map((c) => (
              <ChapterBlock key={c.id} chapter={c} />
            ))}
          </div>
        </div>

        {/* Full-bleed skyline */}
        <div className="relative mt-24 md:mt-32 h-[60vh] min-h-[380px]">
          <Image src="/images/story/skyline.jpg" alt="Lower Manhattan skyline at dusk" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-6 pb-14 w-full">
              <p className="caption-pill text-2xl md:text-4xl font-black">I made it in New York.</p>
              <p className="mt-4 text-muted font-semibold max-w-xl">
                Ten years ago I had nothing in this country. Today I own an apartment in Jersey City, I&rsquo;m married, and I was
                promoted to Principal Engineer at 50.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Now */}
      <section id="now" aria-labelledby="now-heading" className="py-24 md:py-32 bg-panel scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="What I do now" id="now-heading" className="mb-6">
            Who gets to build changed. <span className="text-accent">Security and governance didn&rsquo;t.</span>
          </SectionHeading>
          <p className="text-muted text-lg font-medium max-w-2xl mb-14">
            Every day someone who is not an engineer shows me a tool they built with AI. A homepage tracker. An inbox triage
            agent. Something that already runs every morning from their own GitHub repository. My job is to help them make it
            official.
          </p>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch mb-16">
            <div className="bg-paper text-ink p-8 rounded-sm">
              <p className="text-accent text-4xl font-black mb-6" style={{ color: "#00b8ae" }}>
                1
              </p>
              <p className="text-2xl font-black mb-1">Explore</p>
              <p className="text-panel font-semibold">Everyone builds. Fast, cheap, messy, and often exactly right.</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-accent">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
              </svg>
            </div>
            <div className="bg-ink text-white p-8 rounded-sm border border-white/10">
              <p className="text-accent text-4xl font-black mb-6">2</p>
              <p className="text-2xl font-black mb-1">Make it grown-up</p>
              <p className="text-muted font-semibold">Stable. Observable. Secure. Governed. Somebody still has to carry the pager.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {statements.map((s, i) => (
              <div key={i} className="bg-ink border border-white/10 rounded-sm p-8 md:p-10">
                <p className="text-2xl md:text-3xl font-black leading-[1.15] tracking-tight">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section id="speaking" aria-labelledby="speaking-heading" className="py-24 md:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Speaking" id="speaking-heading" className="mb-14">
            Everyone is coding now! <span className="text-muted">How AI is changing who builds.</span>
          </SectionHeading>

          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16">
            <div>
              <p className="text-lg text-muted font-medium leading-relaxed mb-6">
                A few months ago an editor at The Times, not an engineer, built a tool with AI. And it worked. This now happens all
                the time. Marketing, finance, product and design teams are coding. Until now, if you had an idea for a tool, you
                needed an engineer. Not anymore.
              </p>
              <p className="text-lg text-muted font-medium leading-relaxed mb-10">
                This talk is my answer to what happens when building software is not exclusive anymore, taken from my own life and
                from what I see every day on the AI enablement team. It&rsquo;s a personal talk, and a hopeful one: East Berlin in
                the nineties, the dot-com crash, New York at 39, and why I&rsquo;m not scared of this moment. Mostly.
              </p>

              <p className="eyebrow mb-4">Talks</p>
              <ul className="divide-y divide-white/10 border-y border-white/10 mb-10">
                {talks.map((t) => (
                  <li key={t.event} className="py-5 grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-8">
                    <div>
                      <p className="font-black text-lg leading-snug">{t.title}</p>
                      <p className="text-muted font-semibold">{t.event}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-accent font-bold text-sm">{t.format}</p>
                      <p className="text-dim font-semibold text-sm">{t.date}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@danielakinsella.com?subject=Speaking%20invitation"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-ink font-bold hover:bg-white transition-colors"
              >
                Invite me to speak
              </a>
            </div>

            <div className="bg-panel rounded-sm p-8">
              <p className="eyebrow mb-5">Topics I talk about</p>
              <ul className="space-y-4">
                {topics.map((topic) => (
                  <li key={topic} className="flex gap-3 font-semibold leading-snug">
                    <span className="mt-2.5 w-4 h-0.5 bg-accent shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 text-sm text-muted font-semibold">
                Keynotes, conference talks, internal engineering events and hands-on workshops. English or German.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" aria-labelledby="experience-heading" className="py-24 md:py-32 bg-panel scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Experience" id="experience-heading" className="mb-14">
            Things take longer than you think. <span className="text-accent">Almost thirty years of them.</span>
          </SectionHeading>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="bg-ink border border-white/10 rounded-sm p-7 md:p-9">
                <div className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10">
                  <div>
                    <p className="text-accent font-bold text-sm mb-1">{exp.period}</p>
                    <p className="text-dim font-semibold text-sm">{exp.location}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black leading-tight">{exp.company}</h3>
                    <p className="text-muted font-bold mb-4">{exp.title}</p>
                    <p className="text-muted font-medium leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-muted font-medium leading-relaxed">
                          <span className="mt-2.5 w-3 h-0.5 bg-accent shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-ink border border-white/10 rounded-sm p-6">
                <p className="eyebrow mb-4">{cat.title}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-panel text-sm font-semibold text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family */}
      <section id="family" aria-labelledby="family-heading" className="py-24 md:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="At home" id="family-heading" className="mb-6">
            It doesn&rsquo;t know my cats. <span className="text-accent">I know my cats.</span>
          </SectionHeading>
          <p className="text-muted text-lg font-medium max-w-2xl mb-14">
            I live in Jersey City with my husband Keith, our Lagotto Romagnolo Rasmus, and our cats. The AI doesn&rsquo;t know
            the things that were never written down. They have never been in this room. You have.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3">
            {familyPhotos.map((p) => (
              <div key={p.src} className={`relative overflow-hidden rounded-sm bg-panel ${p.span ?? ""}`}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32 bg-accent text-ink scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="eyebrow mb-4" style={{ color: "#151515" }}>
              Contact
            </p>
            <h2 id="contact-heading" className="text-5xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">Thank you! Let&rsquo;s talk.</h2>
            <p className="text-lg font-semibold max-w-md">
              Keynotes, talks, workshops, or a conversation about making AI tools grown-up. Say hello.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a href="mailto:hello@danielakinsella.com" className="block text-2xl md:text-3xl font-black underline decoration-4 underline-offset-8 hover:decoration-white transition-colors mb-8">
              hello@danielakinsella.com
            </a>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 font-bold">
              <li>
                <a href="https://www.linkedin.com/in/danielakinsella/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/danielakinsella" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/danielakinsella/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                  Instagram
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm font-semibold opacity-70">Jersey City, NJ · Ich spreche auch Deutsch.</p>
          </div>
        </div>
      </section>

      </main>

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4 text-sm text-dim font-semibold">
          <p>&copy; {new Date().getFullYear()} Daniela Kinsella. All opinions are my own, not my employer&rsquo;s.</p>
          <p>
            <a href="https://danielakinsella.com" className="text-accent hover:text-white transition-colors">
              danielakinsella.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
