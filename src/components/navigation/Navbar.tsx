"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Story", href: "#story" },
    { label: "Experience", href: "#simulator" },
    { label: "Connection", href: "#connection" },
    { label: "Features", href: "#features" },
    { label: "Preview", href: "#showcase" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#121016]/8 py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B3CF2] rounded-full"
          aria-label="Ping Home"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#9B3CF2] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
            <Image
              src="/brand/ping_icon.png"
              alt="Ping Icon"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#121016]">
            Ping
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium tracking-wide text-[#6F6A78] uppercase px-2 py-0.5 rounded-full bg-[#121016]/5 border border-[#121016]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3CCB7F] animate-pulse" />
            Beta 2026
          </span>
        </Link>

        {/* Desktop Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#6F6A78]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#121016] focus-visible:outline-none focus-visible:text-[#9B3CF2]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#early-access"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase px-4 py-2.5 rounded-full bg-[#121016] text-[#FAF8F5] hover:bg-[#9B3CF2] transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#EADCFD]" />
            Early Access
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#121016] focus-visible:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#121016]/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-serif font-medium text-[#121016] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#early-access"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold py-3 rounded-full bg-[#9B3CF2] text-white"
            >
              <Sparkles className="w-4 h-4" />
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

