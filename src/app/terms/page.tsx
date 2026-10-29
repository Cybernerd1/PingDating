import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Ping",
  description:
    "Read the official Terms & Conditions for Ping. Understand eligibility, user conduct, intellectual property, and community safety guidelines.",
};

const LAST_UPDATED = "5 October 2026";

const TERMS_SECTIONS = [
  {
    num: "1",
    title: "Acceptance",
    content:
      "By creating an account or using Ping you agree to these Terms. If you do not agree, please do not use the app.",
  },
  {
    num: "2",
    title: "Eligibility",
    content:
      "You must be at least 18 years old and legally able to enter into a contract. You may hold only one account and must provide accurate information.",
  },
  {
    num: "3",
    title: "Your account",
    content:
      "You are responsible for activity on your account. Sign in only with your own Google account or the credentials issued to you, keep them private, and tell us promptly if you suspect unauthorised access. Shared demo accounts are for testing only and may be reset at any time.",
  },
  {
    num: "4",
    title: "Acceptable use",
    content:
      "Do not harass, threaten, impersonate or deceive others; post nudity, hate speech, violence or illegal content; send spam or solicit money; scrape data; or use Ping for anything other than meeting people in good faith.",
  },
  {
    num: "5",
    title: "Your content",
    content:
      "You keep ownership of the photos and text you upload, and grant Ping a limited licence to host and display them to other users to operate the service. You confirm you have the right to share them.",
  },
  {
    num: "6",
    title: "Safety",
    content:
      "Ping is not able to verify every user. Be careful when meeting people, never share financial details, and use the report and block tools if someone makes you uncomfortable.",
  },
  {
    num: "7",
    title: "Moderation & termination",
    content:
      "We may remove content or suspend accounts that break these Terms or put others at risk. You can stop using Ping at any time.",
  },
  {
    num: "8",
    title: "Disclaimers",
    content:
      "Ping is provided “as is” without warranties. To the extent permitted by law, we are not liable for interactions between users or for indirect damages arising from use of the app.",
  },
  {
    num: "9",
    title: "Changes",
    content:
      "We may update these Terms from time to time. Continued use after changes means you accept the updated Terms.",
  },
  {
    num: "10",
    title: "Contact",
    content:
      "Questions? Email support@pingapp.io or support@pingapp.example.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121016]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#121016]/8 py-4">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 group text-sm font-semibold text-[#121016] hover:text-[#9B3CF2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Ping</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#9B3CF2] p-1 flex items-center justify-center">
              <Image
                src="/brand/ping_icon.png"
                alt="Ping"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#121016]">
              Ping
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="space-y-4 pb-12 border-b border-[#121016]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADCFD] text-[#7A22D6] text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Legal Documentation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121016]">
            Terms & Conditions
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#6F6A78]">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>•</span>
            <span>App Version 2.0</span>
          </div>

          <p className="text-base sm:text-lg text-[#6F6A78] max-w-2xl leading-relaxed pt-2">
            These terms govern your access and use of the Ping mobile application and related web properties.
          </p>
        </div>

        {/* Sections List */}
        <div className="space-y-8 mt-12">
          {TERMS_SECTIONS.map((section) => (
            <article
              key={section.num}
              id={`term-${section.num}`}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#121016]/8 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#EADCFD] text-[#7A22D6] font-bold text-xs flex items-center justify-center shrink-0">
                  {section.num}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#121016]">
                  {section.title}
                </h2>
              </div>

              <div className="text-sm sm:text-base text-[#2A2630] leading-relaxed pl-11">
                {section.content}
              </div>
            </article>
          ))}
        </div>

        {/* Safety Note */}
        <div className="mt-14 p-8 rounded-3xl bg-[#FFF5F6] border border-[#FF5C68]/20 space-y-2">
          <div className="flex items-center gap-2 text-[#FF3B5C] font-semibold text-sm">
            <ShieldAlert className="w-4 h-4" />
            <span>Community Safety Priority</span>
          </div>
          <p className="text-xs sm:text-sm text-[#6F6A78] leading-relaxed">
            Ping enforces zero tolerance for harassment, hate speech, or financial solicitation. If you encounter any inappropriate behavior, report the profile immediately using the in-app safety tools.
          </p>
        </div>

        {/* Cross Link to Privacy */}
        <div className="mt-12 text-center text-xs text-[#6F6A78]">
          Looking for how we handle data?{" "}
          <Link href="/privacy" className="text-[#9B3CF2] font-semibold underline hover:text-[#7A22D6]">
            View Ping Privacy Policy
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#121016]/8 py-8 bg-[#FAF8F5] text-center text-xs text-[#8E8996]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Ping Technologies, Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#121016]">Home</Link>
            <Link href="/privacy" className="hover:text-[#121016]">Privacy Policy</Link>
            <Link href="/terms" className="text-[#121016] font-semibold">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

