"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X, Cpu, Code2 } from "lucide-react";
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
  const otherServices = SERVICES_DATA.filter(
    (s) => !aiServices.includes(s) && !engineeringServices.includes(s)
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[#111111] hover:text-neutral-600 transition-colors"
          >
            NEED HELP BUILDING?
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer outline-none ${
                  servicesOpen ? "text-[#111111] font-semibold" : "hover:text-[#111111]"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#111111]" : "text-neutral-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[720px] -ml-16 bg-white border border-neutral-200 p-8 shadow-xl z-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column: AI Engineering */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-neutral-100 text-xs font-mono uppercase tracking-widest text-neutral-400">
                        <Cpu className="w-3.5 h-3.5 text-[#111111]" />
                        <span>AI Engineering</span>
                      </div>
                      <div className="space-y-3">
                        {aiServices.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group block p-2 -mx-2 hover:bg-neutral-50 rounded transition-colors"
                          >
                            <div className="text-sm font-semibold text-[#111111] group-hover:text-black flex items-center justify-between">
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

                    {/* Right Column: Web & Systems */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-neutral-100 text-xs font-mono uppercase tracking-widest text-neutral-400">
                          <Code2 className="w-3.5 h-3.5 text-[#111111]" />
                          <span>Product Engineering</span>
                        </div>
                        <div className="space-y-3">
                          {engineeringServices.concat(otherServices).slice(0, 5).map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group block p-2 -mx-2 hover:bg-neutral-50 rounded transition-colors"
                            >
                              <div className="text-sm font-semibold text-[#111111] group-hover:text-black flex items-center justify-between">
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
                      <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded flex items-center justify-between">
                        <div className="text-xs text-neutral-500 font-mono">
                          {SERVICES_DATA.length} Production Practices Active
                        </div>
                        <Link
                          href="/#practices"
                          onClick={() => setServicesOpen(false)}
                          className="text-xs font-semibold text-[#111111] hover:underline"
                        >
                          View All Practices →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#about" className="hover:text-[#111111] transition-colors">
              Why Now
            </Link>
            <Link href="/#work" className="hover:text-[#111111] transition-colors">
              Work
            </Link>
            <Link href="/#philosophy" className="hover:text-[#111111] transition-colors">
              Point of View
            </Link>
            <Link href="/#contact" className="hover:text-[#111111] transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@needhelpbuilding.com"
            className="hidden sm:inline-flex text-xs uppercase tracking-widest px-4 py-2 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors rounded"
          >
            Contact Us
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-black"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-6 py-6 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 pb-1 border-b border-neutral-100">
              Services ({SERVICES_DATA.length})
            </div>
            <div className="max-h-60 overflow-y-auto space-y-2 pt-2 pr-2">
              {SERVICES_DATA.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-neutral-700 hover:text-black py-1"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-neutral-100">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-600 hover:text-black"
            >
              Why Now
            </Link>
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-600 hover:text-black"
            >
              Work
            </Link>
            <Link
              href="/#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-600 hover:text-black"
            >
              Point of View
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-600 hover:text-black"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2">
            <a
              href="mailto:hello@needhelpbuilding.com"
              className="block text-center text-xs uppercase tracking-widest px-4 py-3 bg-[#111111] text-white font-medium rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
