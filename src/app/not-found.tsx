import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121016] flex flex-col justify-between relative selection:bg-[#EADCFD] selection:text-[#121016] overflow-hidden">
      {/* Soft holographic background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#D9CCF2]/40 via-[#D6EFEC]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="p-6 sm:p-8 flex items-center justify-between max-w-7xl mx-auto w-full relative z-10">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#9B3CF2] p-1.5 flex items-center justify-center shadow-sm">
            <Image
              src="/brand/ping_icon.png"
              alt="Ping"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#121016]">
            Ping
          </span>
        </Link>

        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-wider text-[#6F6A78] hover:text-[#121016] transition-colors"
        >
          Home
        </Link>
      </header>

      {/* Center 404 Editorial Message */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-8 py-12 relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#121016]/8 shadow-xs text-xs font-semibold text-[#9B3CF2] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        <div className="font-mono text-xs tracking-widest uppercase text-[#8E8996] mb-2">
          Error 404
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121016] leading-tight">
          Lost between a glance <br className="hidden sm:block" />
          and a hello.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#6F6A78] leading-relaxed max-w-md">
          The page or connection you were looking for doesn&apos;t exist, or has moved to a new destination.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#121016] hover:bg-[#9B3CF2] text-white text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/#simulator"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 border border-[#121016]/10 hover:bg-white text-[#121016] text-sm font-medium transition-all shadow-xs active:scale-98"
          >
            <Compass className="w-4 h-4 text-[#9B3CF2]" />
            <span>Try App Simulator</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 sm:p-8 text-center text-xs text-[#8E8996] border-t border-[#121016]/6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Ping Technologies, Inc.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#121016] underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#121016] underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

