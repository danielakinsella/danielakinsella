import Image from "next/image";
import Header from "@/components/Header";

const experiences = [
  {
    company: "The New York Times",
    location: "New York, NY",
    title: "Staff Software Engineer, Enterprise Technology",
    period: "Dec 2023 – Present",
    description:
      "Technical lead and primary architect for the modernization of the Publishing Technology division, stewarding the systems responsible for the nightly printing of the newspaper.",
    highlights: [
      "Architecting the replacement of 4 mission-critical legacy production systems (20+ years old) with resilient, cloud-native AWS Serverless solutions — zero production disruption.",
      "Co-leading the Enterprise Technology GenAI initiative, designing AI-powered agentic workflows to accelerate complex system rewrites.",
      "Driving event-driven architecture adoption and infrastructure modernization including Terraform upgrades and CI/CD migration.",
      "Formally mentoring engineers across Finance, Delivery, and Product departments.",
    ],
    color: "bg-coral",
  },
  {
    company: "Patch.com",
    location: "New York, NY",
    title: "Tech Lead & Senior Software Engineer",
    period: "May 2018 – Dec 2023",
    description:
      "Tech lead and full-stack senior engineer for a news platform serving 20+ million monthly users with hyper-local news across the United States.",
    highlights: [
      "Engineered core services using TypeScript, Node.js, React, PHP, and Shell Scripting.",
      "Architected concurrent job queues with AWS SQS, Lambda, SNS, EventBridge, and Step Functions.",
      "Built backend caching solutions with Fastly for top Google PageSpeed Insights scores.",
      "Mentored and trained engineers, conducted code reviews and technical workshops.",
    ],
    color: "bg-teal",
  },
  {
    company: "NameFace",
    location: "New York, NY",
    title: "Co-Founder & Senior Software Engineer",
    period: "Nov 2015 – Sep 2016",
    description:
      "Developed a facial recognition platform for news and event photographers to identify personalities in their photos.",
    highlights: [
      "Built upload, naming, and metadata workflows with integrations to Shutterstock, AP, and Getty Images.",
      "Hired a team of four. Pitched investors and handled customer acquisition.",
    ],
    color: "bg-sage",
  },
  {
    company: "HelloPlugin GmbH",
    location: "Berlin, Germany",
    title: "Founder & CEO",
    period: "Sep 2007 – Nov 2015",
    description:
      "Founded and scaled a profitable full-service web development agency serving enterprise clients.",
    highlights: [
      "Clients included Mercedes Benz, Adidas, Electronic Arts, MTV, Telekom, BBDO, Axel Springer, and Bayer.",
      "Profitable from year one. Recruited and mentored eight full-time engineers.",
      "Managed business development, project planning, and customer acquisition.",
    ],
    color: "bg-lavender",
  },
  {
    company: "Earlier Career",
    location: "Berlin, Germany",
    title: "Director of PM, Technical PM, Senior Engineer",
    period: "1999 – 2007",
    description:
      "Built the foundation of a 25+ year career across gaming, financial services, and digital agencies.",
    highlights: [
      "GameDuell GmbH: Director of Project Management — scaled team from 10 to 30+ engineers.",
      "GFKL Financial Services: Technical Product Manager — managed distributed teams in Lithuania and Armenia.",
      "Freelance & Pixelpark AG: Senior Software Engineer.",
    ],
    color: "bg-golden",
  },
];

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["TypeScript", "Node.js", "Python", "React", "Next.js", "SQL", "Bash"],
    color: "bg-coral/10 border-coral/30",
    dotColor: "bg-coral",
  },
  {
    title: "AI Enablement",
    skills: ["MCP", "RAG", "Agentic Workflows", "LLM Integration", "Claude Code SDK", "AWS AgentCore", "AWS Bedrock"],
    color: "bg-teal/10 border-teal/30",
    dotColor: "bg-teal",
  },
  {
    title: "AWS Cloud & Serverless",
    skills: ["Lambda", "Step Functions", "EventBridge", "SQS", "SNS", "DynamoDB", "RDS", "S3", "IAM"],
    color: "bg-sage/10 border-sage/30",
    dotColor: "bg-sage",
  },
  {
    title: "Infrastructure & CI/CD",
    skills: ["Terraform", "GitHub Actions", "Drone", "CircleCI", "Fastly"],
    color: "bg-lavender/10 border-lavender/30",
    dotColor: "bg-lavender",
  },
  {
    title: "Observability & Data",
    skills: ["CloudWatch", "Datadog", "Jest", "ElasticSearch", "OpenSearch", "MySQL"],
    color: "bg-golden/10 border-golden/30",
    dotColor: "bg-golden",
  },
];

const familyMembers = [
  {
    name: "Keith",
    description: "My husband and favorite human.",
    images: [
      { src: "/images/daniela-and-keith.jpg", alt: "Daniela and Keith" },
      { src: "/images/keith.jpg", alt: "Keith" },
    ],
  },
  {
    name: "Rasmus",
    description: "Our sweet boy and youngest member of the family.",
    images: [
      { src: "/images/rasmus-2.jpg", alt: "Rasmus the Lagotto Romagnolo" },
      { src: "/images/rasmus-1.jpg", alt: "Rasmus in the park" },
    ],
  },
  {
    name: "Fred",
    description: "Very fluffy Maine Coon.",
    images: [
      { src: "/images/fred-portrait.jpg", alt: "Fred the Maine Coon" },
      { src: "/images/fred-rooftop.jpg", alt: "Fred on the rooftop" },
      { src: "/images/fred-belly.jpg", alt: "Fred showing his belly" },
    ],
  },
  {
    name: "Mojo",
    description: "Our gray tabby.",
    images: [
      { src: "/images/mojo-portrait.jpg", alt: "Mojo the tabby" },
      { src: "/images/fred-and-mojo.jpg", alt: "Fred and Mojo together" },
      { src: "/images/rasmus-and-mojo.jpg", alt: "Rasmus and Mojo on the couch" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-coral font-semibold text-lg mb-3">Hi, I&apos;m</p>
            <h1 className="text-5xl md:text-6xl font-bold text-ink leading-tight mb-4">
              Daniela Kinsella
            </h1>
            <p className="text-xl md:text-2xl text-ink-light mb-6 leading-relaxed">
            Staff+ Software Engineer, System Architect &amp; AI Strategy Lead
            </p>
            <p className="text-lg text-ink-light mb-8 leading-relaxed max-w-lg">
              25+ years building, stabilizing, and modernizing complex distributed systems.
              Currently at <span className="font-semibold text-ink">The New York Times</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-coral text-white font-semibold rounded-full hover:bg-coral-light hover:text-ink transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center px-6 py-3 border-2 border-ink/20 text-ink font-semibold rounded-full hover:border-coral hover:text-coral transition-colors"
              >
                View Experience
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-coral/20 via-teal/20 to-sage/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/daniela-headshot.jpg"
                alt="Daniela Kinsella"
                width={400}
                height={400}
                priority
                className="relative rounded-2xl shadow-xl object-cover w-72 h-72 md:w-96 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-ink mb-4">About Me</h2>
          <div className="w-16 h-1 bg-coral rounded mb-10" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-ink-light leading-relaxed mb-6">
                I&apos;m a principal-caliber engineering leader who combines deep architectural
                expertise with a founder&apos;s mindset to future-proof the health of mission-critical
                software. I&apos;ve spent my career at the intersection of legacy modernization,
                cloud architecture, and emerging AI technologies.
              </p>
              <p className="text-lg text-ink-light leading-relaxed mb-6">
                Originally from Germany, I&apos;ve built and led teams in Berlin and New York City.
                I founded and ran a profitable web agency for 8 years before returning to hands-on
                engineering. Today I live in Jersey City with my husband Keith, our Lagotto Romagnolo
                Rasmus, and two cats Fred and Mojo.
              </p>
              <p className="text-lg text-ink-light leading-relaxed">
                I&apos;m passionate about sharing what I&apos;ve learned and am available for
                conference speaking on topics like legacy modernization, AI-powered development
                workflows, and building engineering cultures that last.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "🏗️", title: "Legacy Modernizer", text: "Expert in reverse-engineering and modernizing 20+ year-old mission-critical systems with zero production downtime." },
                { icon: "🤖", title: "GenAI Innovator", text: "Operationalizing AI strategies and implementing AI-agent workflows to accelerate engineering." },
                { icon: "☁️", title: "Cloud Specialist", text: "Decoupling monoliths into resilient, event-driven AWS Serverless architectures." },
                { icon: "🚀", title: "Engineer Turned Founder", text: "8 years as CEO gives me the ability to balance tech with business reality." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-cream border border-cream-dark hover:border-coral/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-ink mb-1">{item.title}</h3>
                      <p className="text-ink-light text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-16 bg-gradient-to-r from-coral to-teal">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Available for Speaking Engagements
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
            I love sharing hard-won lessons from 25+ years in the trenches. Topics include legacy
            system modernization, AI-powered engineering workflows, serverless architecture at scale,
            and building engineering cultures from the ground up.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-coral font-semibold rounded-full hover:bg-cream transition-colors"
          >
            Invite Me to Speak
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-ink mb-4">Experience</h2>
          <div className="w-16 h-1 bg-teal rounded mb-10" />
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="bg-white rounded-2xl p-8 shadow-sm border border-cream-dark hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${exp.color}`} />
                    <div>
                      <h3 className="text-xl font-bold text-ink">{exp.company}</h3>
                      <p className="text-ink-light">{exp.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-ink-light">{exp.period}</p>
                    <p className="text-sm text-ink-light/70">{exp.location}</p>
                  </div>
                </div>
                <p className="text-ink-light mb-4 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-light">
                      <span className={`w-1.5 h-1.5 rounded-full ${exp.color} mt-2 shrink-0`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-dark text-sm text-ink-light">
              <span className="w-2 h-2 rounded-full bg-sage" />
              AWS Certified Cloud Practitioner
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-dark text-sm text-ink-light">
              <span className="w-2 h-2 rounded-full bg-teal" />
              AWS Generative AI Developer (In Progress)
            </span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-ink mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-sage rounded mb-10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className={`rounded-2xl p-6 border ${cat.color}`}
              >
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`} />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white rounded-full text-sm text-ink-light border border-cream-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Family */}
      <section id="family" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-ink mb-4">My Family</h2>
          <div className="w-16 h-1 bg-lavender rounded mb-4" />
          
          <div className="space-y-16">
            {familyMembers.map((member) => (
              <div key={member.name}>
                <h3 className="text-2xl font-bold text-ink mb-2">{member.name}</h3>
                <p className="text-ink-light mb-6 max-w-xl">{member.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {member.images.map((img) => (
                    <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-ink mb-4">Let&apos;s Connect</h2>
          <div className="w-16 h-1 bg-coral rounded mb-10" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-ink-light mb-2">
                <span className="font-semibold text-ink">Location:</span> Jersey City, NJ
              </p>
              <p className="text-ink-light mb-8">
                <span className="font-semibold text-ink">Email:</span>{" "}
                <a
                  href="mailto:hello@danielakinsella.com"
                  className="text-coral hover:text-coral-light transition-colors"
                >
                  hello@danielakinsella.com
                </a>
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/danielakinsella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cream border border-cream-dark flex items-center justify-center text-ink-light hover:text-coral hover:border-coral/30 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/danielakinsella/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cream border border-cream-dark flex items-center justify-center text-ink-light hover:text-coral hover:border-coral/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/danielakinsella/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-cream border border-cream-dark flex items-center justify-center text-ink-light hover:text-coral hover:border-coral/30 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="text-xl font-bold text-ink mb-4">Speaking Topics</h3>
              <ul className="space-y-3">
                {[
                  "Modernizing 20-Year-Old Systems Without Breaking Production",
                  "AI-Powered Engineering: From Hype to Real Workflows",
                  "Serverless Architecture at Scale: Patterns That Actually Work",
                  "Building and Mentoring High-Performing Engineering Teams",
                ].map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-ink-light">
                    <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cream-dark">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-ink-light">
          <p>&copy; {new Date().getFullYear()} Daniela Kinsella. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
