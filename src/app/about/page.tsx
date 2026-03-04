import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Togman Technologies Ltd",
  description:
    "Learn about Togman Technologies, a global technology infrastructure and consulting firm headquartered in Abuja, Nigeria.",
};

const coreValues = [
  {
    title: "Structured Execution",
    description:
      "We believe sustainable growth comes from disciplined systems.",
  },
  {
    title: "Integrity & Confidentiality",
    description:
      "Every engagement is governed by transparency and discretion.",
  },
  {
    title: "Strategic Thinking",
    description:
      "We approach problems with analytical depth and global perspective.",
  },
  {
    title: "Scalable Architecture",
    description: "We design systems that grow with organizations.",
  },
  {
    title: "Partnership Mindset",
    description:
      "We operate as long-term collaborators, not transactional vendors.",
  },
];

const methodologySteps = [
  "Discovery & Alignment",
  "System Mapping",
  "Architecture & Deployment",
  "Performance Tracking",
  "Continuous Improvement",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-dark to-forest text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-sage-light uppercase tracking-widest">
            About Us
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
            About Togman Technologies Ltd
          </h1>
          <p className="mt-6 text-lg text-sage-light/90 max-w-2xl leading-relaxed">
            A global technology infrastructure and consulting firm
            headquartered in Abuja, Nigeria. We serve organizations across
            industries seeking scalable systems, structured talent, and
            transformation-driven growth.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-mint/40 rounded-2xl p-8 md:p-10">
              <span className="text-sm font-semibold text-forest uppercase tracking-widest">
                Our Vision
              </span>
              <blockquote className="mt-4 text-xl md:text-2xl font-semibold text-charcoal leading-relaxed italic">
                &ldquo;To become a globally respected technology infrastructure
                and consulting firm enabling organizations to operate through
                intelligent systems, structured execution, and sustainable
                growth models.&rdquo;
              </blockquote>
            </div>
            <div className="bg-cream rounded-2xl p-8 md:p-10">
              <span className="text-sm font-semibold text-forest uppercase tracking-widest">
                Our Mission
              </span>
              <p className="mt-4 text-slate leading-relaxed mb-4">
                To help organizations:
              </p>
              <ul className="space-y-3">
                {[
                  "Access world-class technology talent",
                  "Modernize their digital infrastructure",
                  "Transform operations through structured systems",
                  "Build scalable revenue frameworks",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-leaf shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate italic">
                We exist to convert complexity into clarity and transformation
                into measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-sage uppercase tracking-widest">
              What Drives Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-charcoal">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-forest font-bold text-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-sage uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-charcoal">
              Our Methodology
            </h2>
            <p className="mt-4 text-slate max-w-2xl mx-auto">
              We combine strategic consulting with execution. Every engagement
              follows a structured approach ensuring organizations do not just
              adopt technology — they transform through it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {methodologySteps.map((step, i) => (
              <div key={step} className="relative">
                <div className="bg-mint/50 rounded-2xl p-6 text-center h-full hover:bg-mint transition-colors">
                  <div className="w-14 h-14 bg-forest rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {i + 1}
                  </div>
                  <p className="text-sm font-semibold text-charcoal">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 text-sage-light/90 text-lg max-w-2xl mx-auto">
            Let us help you build scalable systems, deploy world-class talent,
            and transform your operations.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-10 py-4 bg-white text-forest font-semibold rounded-lg hover:bg-cream transition-colors text-lg"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
