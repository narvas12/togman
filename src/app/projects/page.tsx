import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Togman Technologies Ltd",
  description:
    "Explore selected client engagements and projects delivered by Togman Technologies Ltd.",
};

const clients = [
  {
    name: "Selar",
    url: "https://selar.com/",
    description:
      "Africa's leading digital product selling platform. We supported talent deployment for their engineering operations.",
  },
  {
    name: "FastCredit",
    url: "https://fastcredit-ng.com/",
    description:
      "A financial technology company providing lending solutions. We contributed infrastructure modernization support.",
  },
  {
    name: "Tokabi",
    url: "https://www.tokabi.io/",
    description:
      "Innovative tech startup where we deployed skilled engineers and provided product development support.",
  },
  {
    name: "Sartorial Smart",
    url: "https://www.sartorialsmart.com/",
    description:
      "A fashion-tech platform. We delivered web application development and digital infrastructure consulting.",
  },
  {
    name: "Property ProMax",
    url: "https://propertypromax.com.ng/",
    description:
      "A real estate technology platform. We provided full-stack development talent and platform architecture consulting.",
  },
  {
    name: "Stack Alpha",
    url: "https://stackalpha.xyz",
    description:
      "A technology company where we supported product development and operational automation initiatives.",
  },
];

const outcomes = [
  {
    title: "Reduced Operational Inefficiencies",
    description:
      "Streamlined workflows and automated manual processes for faster delivery.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Faster Execution Cycles",
    description:
      "Rapid talent deployment and agile processes cut delivery timelines significantly.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Structured Digital Systems",
    description:
      "Organized architecture that supports growth and long-term maintainability.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Scalable Product Ecosystems",
    description:
      "Infrastructure designed to handle growth without major rearchitecture.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Data-Informed Decisions",
    description:
      "Analytics frameworks enabling smarter, evidence-based business decisions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-dark to-forest text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-sage-light uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
            Selected Client Engagements
          </h1>
          <p className="mt-6 text-lg text-sage-light/90 max-w-2xl leading-relaxed">
            Togman Technologies has deployed talent and supported digital
            initiatives for organizations across multiple sectors.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cream/60 rounded-2xl p-8 hover:bg-mint/40 hover:shadow-lg transition-all border border-transparent hover:border-sage/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-forest transition-colors">
                    {client.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-slate/40 group-hover:text-forest transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  {client.description}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-slate max-w-2xl mx-auto">
            We have also supported product development, infrastructure
            modernization, and operational automation projects across multiple
            sectors.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-sage uppercase tracking-widest">
              Impact
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-charcoal">
              What Our Engagements Deliver
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <div
                key={outcome.title}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                  i >= 3 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="text-forest mb-4">{outcome.icon}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {outcome.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-sage-light/90 text-lg max-w-2xl mx-auto">
            Whether you need talent deployment, infrastructure modernization, or
            strategic transformation — we&apos;re ready to deliver.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-10 py-4 bg-white text-forest font-semibold rounded-lg hover:bg-cream transition-colors text-lg"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
