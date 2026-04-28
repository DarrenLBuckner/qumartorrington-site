const credentials = [
  {
    icon: "🏢",
    label: "Company",
    value: "Beyond the Boundary Real Estate & Construction",
  },
  {
    icon: "📋",
    label: "GRA Licence",
    value: "Real Estate (House Agent) — 2025, Annual Renewal",
  },
  {
    icon: "🎓",
    label: "Degree",
    value: "BSc Entrepreneurship, University of Guyana — 2024",
  },
  {
    icon: "📍",
    label: "Primary Market",
    value: "Region 4, Georgetown & surrounds",
  },
  {
    icon: "🏏",
    label: "Cricket",
    value:
      "West Indies & Guyana Youth — Demerara CC, Melbourne CC (Queens NY), USPL Miami",
  },
  {
    icon: "🤝",
    label: "Platform Role",
    value: "Guyana Operations Partner — Guyana HomeHub",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-2xl font-bold tracking-tight text-emerald-primary">
            QT
          </span>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="/about"
              className="text-ink-body hover:text-emerald-primary"
            >
              About
            </a>
            <a
              href="https://www.guyanahomehub.com/agents/qumar-torrington"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-body hover:text-emerald-primary"
            >
              View Listings
            </a>
            <a
              href="https://www.linkedin.com/in/qumartorrington"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-body hover:text-emerald-primary"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="text-ink-body hover:text-emerald-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
              Licensed Real Estate Professional · Georgetown, Guyana
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-black md:text-5xl lg:text-6xl">
              Qumar Torrington
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Founder, Beyond the Boundary Real Estate &amp; Construction.
              Licensed agent. Disciplined. Results-driven.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-body">
              Qumar Torrington is a licensed real estate professional based in
              Georgetown, Guyana, and the founder of Beyond the Boundary Real
              Estate &amp; Construction. With a GRA Real Estate licence
              obtained in 2025, he specialises in residential properties,
              rentals, and land across Region 4 — serving local buyers,
              returning diaspora, and anyone serious about owning property in
              Guyana.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-body">
              He serves as Guyana Operations Partner for Guyana HomeHub — the
              first verified, structured property marketplace in Guyana, built
              by US entrepreneur Darren L. Buckner to connect diaspora buyers
              in New York, Toronto, and London with real listings and trusted
              agents on the ground.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="https://www.guyanahomehub.com/agents/qumar-torrington"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-dark"
              >
                View My Listings
              </a>
              <a
                href="https://www.linkedin.com/in/qumartorrington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-emerald-primary hover:text-emerald-dark"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-line bg-emerald-light">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/qumar-torrington.jpg"
                alt="Qumar Torrington"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-ink-black md:text-4xl">
            Built in Georgetown. Built for the World.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-body">
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
              Club under Dennis Squires, competed with Melbourne Cricket Club
              in Queens, New York, and played in the USPL in Miami with the
              Maryland Mavericks. I stepped back from professional play at 23
              due to injury. Cricket gave me discipline, team mentality, and
              the ability to perform when it counts. I carry those standards
              into every transaction.
            </p>
            <p>
              I founded Beyond the Boundary Real Estate &amp; Construction in
              2021 and obtained my GRA Real Estate (House Agent) Licence in
              2025 — making me one of the few fully licensed agents operating
              in a market where the majority are not. I specialize in
              residential properties, rentals, and land across Region 4, with a
              focus on buyers who are serious and ready to move.
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

      {/* CREDENTIALS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-ink-black md:text-4xl">
            Credentials &amp; Background
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {credentials.map((c) => (
              <li
                key={c.label}
                className="rounded-lg border border-line bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl" aria-hidden="true">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-primary">
                      {c.label}
                    </p>
                    <p className="mt-1 text-base text-ink-body">{c.value}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TODO: Replace YouTube handle and href once channel is live.
          Button href="#" and "Coming Soon" label are placeholders.
          Search for "YOUTUBE_PLACEHOLDER" to find all spots to update. */}
      {/* YOUTUBE */}
      <section className="bg-ink-black text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Guyana Real Estate — On YouTube
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
            Real talk about buying, renting, and investing in Guyana. Property
            tours, market updates, and honest insights from someone on the
            ground.
          </p>
          <div className="mt-8">
            <a
              href="#" /* YOUTUBE_PLACEHOLDER */
              className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white opacity-60 transition hover:bg-emerald-dark"
            >
              Coming Soon
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            YouTube channel coming soon{/* YOUTUBE_PLACEHOLDER */}
          </p>
        </div>
      </section>

      {/* PLATFORM LINK */}
      <section className="bg-ink-black">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Find Properties on Guyana HomeHub
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-300">
            Every listing I manage is live on Guyana HomeHub — the only
            structured, verified real estate platform in Guyana. Browse
            residential properties, land, and rentals across Georgetown and
            Region 4. Built for buyers at home and abroad.
          </p>
          <a
            href="https://www.guyanahomehub.com/agents/qumar-torrington"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-md bg-gold-accent px-7 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-amber-700"
          >
            Browse Listings
          </a>
          <p className="mt-6 text-xs text-gray-400">
            Guyana HomeHub is built and operated by Caribbean HomeHub LLC —
            founded by Darren L. Buckner, US entrepreneur. portalhomehub.com
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-ink-black md:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-body">
            Whether you are looking to buy, rent, or invest in property in
            Guyana — reach out directly. I answer personally.
          </p>
          <ul className="mt-8 space-y-3 text-base text-ink-body">
            <li>
              <a
                href="https://wa.me/5927059857?text=Hi%20Qumar%2C%20I%20found%20you%20on%20qumartorrington.com%20and%20I%27d%20like%20to%20discuss%20a%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
              >
                <span aria-hidden="true">💬</span>
                WhatsApp Qumar
              </a>
            </li>
            <li>
              <a
                href="mailto:qumar@guyanahomehub.com"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
              >
                <span aria-hidden="true">✉️</span>
                Email Qumar
              </a>
            </li>
            <li>📍 Georgetown, Guyana</li>
            <li>
              🌐{" "}
              <a
                href="https://www.guyanahomehub.com/agents/qumar-torrington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-primary hover:text-emerald-dark"
              >
                View My Listings on Guyana HomeHub
              </a>
            </li>
            <li>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/qumartorrington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-primary hover:text-emerald-dark"
              >
                linkedin.com/in/qumartorrington
              </a>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
