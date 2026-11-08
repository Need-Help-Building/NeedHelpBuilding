"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X, Sparkles, Code2, Cpu, Wrench } from "lucide-react";
import { SERVICES_DATA } from "@/app/services/services-data";

export default function HeaderNav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Group services by category
  const aiServices = SERVICES_DATA.filter((s) => s.category.toUpperCase().includes("AI"));
  const engineeringServices = SERVICES_DATA.filter(
    (s) =>
      s.category.toUpperCase().includes("ENGINEERING") &&
      !s.category.toUpperCase().includes("AI")
  );
  const advisoryAndDesignServices = SERVICES_DATA.filter(
    (s) =>
      s.category.toUpperCase().includes("ADVISORY") ||
      s.category.toUpperCase().includes("CONSULTING") ||
      s.category.toUpperCase().includes("DESIGN")
  );
  const otherServices = SERVICES_DATA.filter(
    (s) =>
      !aiServices.includes(s) &&
      !engineeringServices.includes(s) &&
      !advisoryAndDesignServices.includes(s)
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white hover:text-neutral-300 transition-colors"
          >
            NEED HELP BUILDING?
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer outline-none ${
                  servicesOpen ? "text-white" : "hover:text-white"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-white" : "text-neutral-500"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[740px] -ml-20 bg-[#0a0a0c] border border-neutral-800 p-8 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column: AI Engineering */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-400">
                        <Cpu className="w-3.5 h-3.5 text-white" />
                        <span>AI Engineering & Swarms</span>
                      </div>
                      <div className="space-y-3">
                        {aiServices.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group block p-2 -mx-2 hover:bg-neutral-900/60 rounded transition-colors"
                          >
                            <div className="text-sm font-semibold text-white group-hover:text-neutral-200 flex items-center justify-between">
                              <span>{svc.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                            </div>
                            <div className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                              {svc.tagline}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Web, Systems & Advisory */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-400">
                          <Code2 className="w-3.5 h-3.5 text-white" />
                          <span>Product & Systems Engineering</span>
                        </div>
                        <div className="space-y-3">
                          {engineeringServices.concat(advisoryAndDesignServices).slice(0, 5).map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group block p-2 -mx-2 hover:bg-neutral-900/60 rounded transition-colors"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-neutral-200 flex items-center justify-between">
                                <span>{svc.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                              </div>
                              <div className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                                {svc.tagline}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Banner */}
                      <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded flex items-center justify-between">
                        <div className="text-xs text-neutral-400 font-mono">
                          {SERVICES_DATA.length} Production Practices Active
                        </div>
                        <Link
                          href="/#practices"
                          onClick={() => setServicesOpen(false)}
                          className="text-xs font-medium text-white hover:underline"
                        >
                          View All Practices →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#about" className="hover:text-white transition-colors">
              Why Now
            </Link>
            <Link href="/#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/#philosophy" className="hover:text-white transition-colors">
              Point of View
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@needhelpbuilding.com"
            className="hidden sm:inline-flex text-xs uppercase tracking-widest px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-black px-6 py-6 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 pb-1 border-b border-neutral-900">
              Services ({SERVICES_DATA.length})
            </div>
            <div className="max-h-60 overflow-y-auto space-y-2 pt-2 pr-2">
              {SERVICES_DATA.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-neutral-300 hover:text-white py-1"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-neutral-900">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-400 hover:text-white"
            >
              Why Now
            </Link>
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-400 hover:text-white"
            >
              Work
            </Link>
            <Link
              href="/#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-400 hover:text-white"
            >
              Point of View
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-400 hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2">
            <a
              href="mailto:hello@needhelpbuilding.com"
              className="block text-center text-xs uppercase tracking-widest px-4 py-3 bg-white text-black font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
