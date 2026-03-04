"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sage-light/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-forest-light transition-colors">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-forest leading-tight">
                Togman
              </span>
              <span className="text-[10px] text-slate uppercase tracking-widest leading-tight">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-forest text-white"
                    : "text-charcoal hover:bg-mint hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-forest text-white text-sm font-medium rounded-lg hover:bg-forest-dark transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-mint transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-forest"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-sage-light/30">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-forest text-white"
                      : "text-charcoal hover:bg-mint hover:text-forest"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-forest text-white text-sm font-medium rounded-lg text-center hover:bg-forest-dark transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
