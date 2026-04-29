import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Qumar Torrington | Licensed Real Estate Professional",
  description:
    "The story of Qumar Torrington — licensed Guyanese real estate professional, founder of Beyond the Boundary Real Estate & Construction, Guyana Operations Partner for Guyana HomeHub, and former West Indies youth cricketer.",
  alternates: { canonical: "https://qumartorrington.com/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Qumar Torrington",
  url: "https://qumartorrington.com/about",
  jobTitle:
    "Licensed Real Estate Professional & Guyana Operations Partner, Guyana HomeHub",
  description:
    "Qumar Torrington is a licensed Guyanese real estate professional, founder of Beyond the Boundary Real Estate & Construction, and Guyana Operations Partner for Guyana HomeHub.",
  worksFor: {
    "@type": "Organization",
    name: "Beyond the Boundary Real Estate & Construction",
  },
  affiliation: {
    "@type": "Organization",
    name: "Guyana HomeHub",
    url: "https://guyanahomehub.com",
  },
  areaServed: ["Region 4, Georgetown, Guyana"],
  sameAs: ["https://www.linkedin.com/in/qumartorrington"],
};

const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const timeline: { date: string; title: string; detail?: string }[] = [
  {
    date: "Origins",
    title: "Born — North Ruimveldt, Georgetown",
  },
  {
    date: "Cricket",
    title: "Demerara Cricket Club",
  },
  {
    date: "Youth International",
    title: "West Indies & Guyana Youth Cricket",
  },
  {
    date: "Cricket Abroad",
    title: "Melbourne Cricket Club, Queens NY + USPL Miami, Maryland Mavericks",
  },
  {
    date: "Age 23",
    title: "Stepped back from professional cricket due to injury",
  },
  {
    date: "2021",
    title: "Founded Beyond the Boundary Real Estate & Construction",
  },
  {
    date: "2024",
    title: "BSc Entrepreneurship, University of Guyana",
  },
  {
    date: "2025",
    title: "GRA Real Estate (House Agent) Licence",
  },
  {
    date: "January 2026",
    title: "Guyana Operations Partner, Guyana HomeHub",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-ink-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section className="bg-ink-black">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
            His Story
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            From North Ruimveldt to Georgetown. Built on Discipline.
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Licensed agent. Entrepreneur. Guyana Operations Partner. Former
            West Indies youth cricketer.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-ink-black md:text-4xl">
            The Story Behind the Work
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-body md:text-lg">
            <p>
              I grew up in North Ruimveldt, Georgetown — and I made a decision
              early that I was going to be a good product of my environment,
              not a casualty of it. My father, Daren Torrington, taught me that
              Guyana would grow, that opportunities would align for those who
              prepared, and that being principled in business is not optional.
              My mother, a headmistress and teacher, made discipline and
              education non-negotiable in our household. Those two influences
              shaped everything about how I operate.
            </p>
            <p>
              Before real estate, cricket was my career. I represented Guyana
              and the West Indies at youth level — trained at Demerara Cricket
              Club, competed with Melbourne Cricket Club
              in Queens, New York, and played in the USPL in Miami with the
              Maryland Mavericks. I stepped back from professional play at 23
              due to injury. Cricket gave me discipline, team mentality, and
              the ability to perform when it counts. I carry those standards
              into every transaction.
            </p>
            <p>
              A fellow Demerara Cricket Club member, Dennis Squires, was
              already working in real estate at the time and became an early
              mentor who helped guide me into the industry. I founded Beyond
              the Boundary Real Estate &amp; Construction in 2021 and obtained
              my GRA Real Estate (House Agent) Licence in 2025 — making me one
              of the few fully licensed agents operating in a market where the
              majority are not. I specialize in residential properties,
              rentals, and land across Region 4, with a focus on buyers who
              are serious and ready to move.
            </p>
            <p>
              In January 2026, I became the Guyana Operations Partner for
              Guyana HomeHub — the platform built by US entrepreneur Darren L.
              Buckner to solve what every diaspora buyer already knows: buying
              property in Guyana from abroad has always been a trust problem.
              Guyana HomeHub fixes that. Verified agents. Real listings. No
              Facebook chaos.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-ink-black md:text-4xl">
            Career Timeline
          </h2>
          <ol className="relative mt-10 border-l-2 border-emerald-primary pl-8">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative mb-8 last:mb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[35px] top-2 h-3 w-3 rounded-full bg-gold-accent ring-4 ring-white"
                />
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
                  {item.date}
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink-black">
                  {item.title}
                </h3>
                {item.detail && (
                  <p className="mt-1 text-base text-ink-body">{item.detail}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-emerald-dark">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Discipline. Integrity. Results.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-emerald-light md:text-lg">
            These are not just words. They are the standard carried from
            cricket into every property transaction — with every client, in
            every market condition.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-ink-black md:text-4xl">
            Work With Qumar
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-body md:text-lg">
            Whether you are buying, selling, renting, or investing in Guyana —
            reach out. Every client gets Qumar personally.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.guyanahomehub.com/agents/qumar-torrington"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
            >
              View Listings
            </a>
            <a
              href="https://www.linkedin.com/in/qumartorrington"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md border-2 border-emerald-primary px-6 py-3 text-base font-semibold text-emerald-primary transition hover:bg-emerald-primary hover:text-white"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://wa.me/5927059857?text=Hi%20Qumar%2C%20I%20found%20you%20on%20qumartorrington.com%20and%20I%27d%20like%20to%20discuss%20a%20property."
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md border-2 border-emerald-primary px-6 py-3 text-base font-semibold text-emerald-primary transition hover:bg-emerald-primary hover:text-white"
            >
              WhatsApp Qumar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
