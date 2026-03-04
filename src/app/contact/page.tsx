"use client";

import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    label: "Location",
    value: "Abuja, Nigeria",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+234 08131930740",
    href: "tel:+2348131930740",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@togmantech.com.ng",
    href: "mailto:info@togmantech.com.ng",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "www.togmantech.com.ng",
    href: "https://www.togmantech.com.ng",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-dark to-forest text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-sage-light uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
            Let&apos;s Build Structured Growth
          </h1>
          <p className="mt-6 text-lg text-sage-light/90 max-w-2xl leading-relaxed">
            Whether you need talent deployment, infrastructure modernization, or
            strategic transformation support — we are ready to align.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-charcoal mb-2">
                Contact Information
              </h2>
              <p className="text-slate mb-8">
                Reach out through any channel. We typically respond within 24
                hours.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center text-forest shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-sage uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-charcoal font-medium mt-1">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block hover:bg-mint/30 rounded-xl p-3 -m-3 transition-colors"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    );
                  }
                  return (
                    <div key={info.label} className="p-3 -m-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-cream rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-charcoal mb-2">
                  Book a Discovery Call
                </h2>
                <p className="text-slate mb-8">
                  Begin your transformation journey. Fill out the form and our
                  team will get back to you.
                </p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-leaf/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-leaf"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">
                      Thank You!
                    </h3>
                    <p className="text-slate">
                      We&apos;ve received your message and will get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-sage-light/40 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-sage-light/40 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-sage-light/40 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-sage-light/40 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        What do you need help with?
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-sage-light/40 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="talent">
                          Talent Deployment (TLX)
                        </option>
                        <option value="it">IT Solutions</option>
                        <option value="consulting">
                          Consulting Services
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-sage-light/40 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/40 focus:border-forest transition-colors resize-none"
                        placeholder="Tell us about your project or challenge..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-forest text-white font-semibold rounded-lg hover:bg-forest-dark transition-colors text-base"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
