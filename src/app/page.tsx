import Link from "next/link";

const talentAreas = [
  "DevOps & Cloud Infrastructure",
  "Data Engineering & Analytics",
  "AI / Machine Learning",
  "Full-Stack & Backend Development",
  "Mobile Application Development",
  "UI/UX Design",
  "Product & Growth Engineering",
];

const tlxFeatures = [
  "Zero upfront or placement fees for organizations",
  "Pre-vetted and technically assessed candidates",
  "Global-ready CV optimization",
  "Structured onboarding alignment",
  "Rapid deployment cycle (5\u20137 working days)",
];

const itServices = [
  {
    title: "Web & Digital Experience",
    items: [
      "Corporate website design & development",
      "Enterprise web applications",
      "Platform architecture",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    items: [
      "iOS and Android applications",
      "Cross-platform mobile ecosystems",
      "User experience optimization",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Digital Transformation",
    items: [
      "Legacy system modernization",
      "Cloud adoption strategy",
      "Infrastructure migration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: "Business Process Automation",
    items: [
      "Workflow system design",
      "CRM and ERP integration",
      "Automation of operational processes",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Structured Cabling & Security",
    items: [
      "Enterprise network design",
      "Identity and access control",
      "Intelligent surveillance integration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const consultingFrameworks = [
  {
    title: "Human Transformation",
    description:
      "We help organizations optimize talent structures, execution capacity, and performance systems.",
    items: [
      "Workforce capability assessment",
      "Organizational structure alignment",
      "Talent pipeline strategy",
      "Leadership enablement frameworks",
      "Performance and accountability systems",
    ],
  },
  {
    title: "Digital & Operational Transformation",
    description:
      "We redesign digital ecosystems to support operational scalability.",
    items: [
      "Technology architecture strategy",
      "System integration design",
      "Automation roadmaps",
      "Infrastructure governance",
      "Compliance-aligned digital modernization",
    ],
  },
  {
    title: "Revenue & Growth Transformation",
    description:
      "We support organizations in building sustainable growth systems.",
    items: [
      "Product-market alignment strategy",
      "Monetization framework design",
      "Data-driven growth modeling",
      "Funnel optimization & retention",
      "Revenue operations infrastructure",
    ],
  },
];

const methodology = [
  "Problem Definition & Diagnostic Assessment",
  "Root Cause & System Analysis",
  "Strategic Model Design",
  "Execution Blueprint & Milestone Mapping",
  "Performance Measurement & Optimization",
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-forest-dark via-forest to-forest-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-leaf rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Building Scalable Technology Infrastructure for Organizational
              Growth
            </h1>
            <p className="mt-6 text-base sm:text-lg text-sage-light/90 leading-relaxed max-w-2xl">
              Togman Technologies Ltd is a global technology infrastructure and
              consulting firm helping organizations transform their people,
              systems, and revenue models through structured talent deployment,
              digital transformation, and strategic advisory.
            </p>
            <p className="mt-4 text-sm sm:text-base text-sage-light/70 leading-relaxed max-w-2xl">
              We partner with startups, enterprises, and public institutions to
              design and implement systems that support operational excellence
              and long-term scalability.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-forest font-semibold rounded-lg hover:bg-cream transition-colors text-base"
              >
                Book a Discovery Call
              </Link>
              <a
                href="#value-streams"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                Explore Our Value Streams
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-semibold text-sage uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-charcoal">
                A Structured Transformation Partner
              </h2>
              <p className="mt-6 text-slate leading-relaxed">
                Togman Technologies Ltd is a Limited Liability Company
                incorporated under the laws of Nigeria on May 17, 2022, with a
                global outlook and delivery footprint.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                Technology and Artificial Intelligence (AI) continues to advance
                on a rapid scale thereby increasing human and business adoption.
                Togman Technologies is set up simply to solve human and business
                challenges globally.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                We do not operate as a conventional service vendor. We function
                as a structured transformation partner focused on measurable
                growth outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  label: "Technology Infrastructure",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  ),
                },
                {
                  label: "Talent Deployment",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Organizational Transformation",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-mint/50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-forest mx-auto mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-forest">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STREAMS */}
      <div id="value-streams" />

      {/* TLX */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full">
              Value Stream 1
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-charcoal">
              Togman Talent Exchange (TLX)
            </h2>
            <p className="mt-2 text-lg text-sage font-medium">
              Global Talent. Zero Hiring Cost. Structured Deployment.
            </p>
            <p className="mt-4 text-slate max-w-2xl mx-auto leading-relaxed">
              Through TLX, we provide businesses worldwide with access to
              vetted, globally-ready technology professionals — at zero upfront
              recruitment cost.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Talent Areas */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-6">
                Structured Talent Pool
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {talentAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 bg-mint/40 rounded-lg px-4 py-3"
                  >
                    <div className="w-2 h-2 bg-forest rounded-full shrink-0" />
                    <span className="text-sm text-charcoal">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-6">
                What Makes TLX Unique
              </h3>
              <ul className="space-y-4">
                {tlxFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-leaf mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate/80 leading-relaxed">
                Beyond talent deployment, we also help companies build and scale
                tech products using our in-house technical team — enabling faster
                execution without traditional hiring bottlenecks.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-forest text-white font-semibold rounded-lg hover:bg-forest-dark transition-colors"
            >
              Hire Talent Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* IT SOLUTIONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full">
              Value Stream 2
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-charcoal">
              IT Solutions
            </h2>
            <p className="mt-2 text-lg text-sage font-medium">
              Technology Infrastructure Designed for Operational Efficiency
            </p>
            <p className="mt-4 text-slate max-w-2xl mx-auto">
              We help organizations solve complex IT challenges by designing and
              implementing scalable digital infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service) => (
              <div
                key={service.title}
                className="group bg-cream/60 rounded-2xl p-7 hover:bg-mint/40 hover:shadow-md transition-all"
              >
                <div className="text-forest mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-charcoal mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate"
                    >
                      <div className="w-1.5 h-1.5 bg-sage rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-slate max-w-2xl mx-auto">
            Our focus is not simply implementation — it is creating integrated
            systems that improve productivity, transparency, and governance.
          </p>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-forest text-white font-semibold rounded-lg hover:bg-forest-dark transition-colors"
            >
              Request Infrastructure Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CONSULTING */}
      <section className="py-20 md:py-28 bg-forest-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-sage-light text-sm font-semibold rounded-full">
              Value Stream 3
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Consulting Services
            </h2>
            <p className="mt-2 text-lg text-sage-light font-medium">
              Strategic Transformation for Global Organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultingFrameworks.map((framework) => (
              <div
                key={framework.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-sage/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{framework.title}</h3>
                <p className="text-sm text-sage-light/80 mb-5">
                  {framework.description}
                </p>
                <ul className="space-y-2.5">
                  {framework.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-sage mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-10">
              Our Methodology
            </h3>
            <div className="flex flex-col md:flex-row items-stretch gap-4">
              {methodology.map((step, i) => (
                <div key={step} className="flex-1 relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full">
                    <div className="w-10 h-10 bg-forest-light rounded-full flex items-center justify-center text-white font-bold text-sm mb-3">
                      {i + 1}
                    </div>
                    <p className="text-sm font-medium text-white/90">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-forest font-semibold rounded-lg hover:bg-cream transition-colors"
            >
              Schedule a Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-mint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Ready to Transform Your Organization?
          </h2>
          <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
            Whether you need talent deployment, infrastructure modernization, or
            strategic transformation support — we are ready to align.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-10 py-4 bg-forest text-white font-semibold rounded-lg hover:bg-forest-dark transition-colors text-lg"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
