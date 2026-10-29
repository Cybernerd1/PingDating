import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Mail, Lock, EyeOff, MapPin, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Ping",
  description:
    "Read the official Privacy Policy for the Ping dating application. Learn how we handle your data, location, media permissions, and account privacy.",
  openGraph: {
    title: "Privacy Policy — Ping",
    description: "Official privacy policy for the Ping dating app. Transparent, respectful, and privacy-first.",
  },
};

const LAST_UPDATED = "5 October 2026";

const PRIVACY_SECTIONS = [
  {
    num: "1",
    title: "Information we collect",
    icon: Lock,
    content:
      "Account details from Google sign-in (name, email, profile photo) or the email you sign in with; profile details you add (birthday, gender, bio, interests, photos); your approximate location when you allow it; messages you send, including messages to Lily, our assistant; and device data such as a push-notification token.",
  },
  {
    num: "2",
    title: "How we use it",
    icon: ShieldCheck,
    content:
      "To create your profile, show you and others to each other in Discover, calculate distance, deliver messages and notifications, keep the community safe, and improve Ping.",
  },
  {
    num: "3",
    title: "Location",
    icon: MapPin,
    content:
      "Location is used only to find people near you and is shown to others as an approximate distance. You can turn distance display off in Privacy settings or revoke permission in your phone settings.",
  },
  {
    num: "4",
    title: "Camera, microphone & media",
    icon: Camera,
    content:
      "These permissions are used only when you take or choose photos, record voice messages or share media. We do not access them in the background.",
  },
  {
    num: "5",
    title: "Sharing",
    icon: EyeOff,
    content:
      "Your profile is visible to other users according to your privacy settings. We use service providers (hosting, image storage, push delivery, and an AI provider that generates Lily’s replies) who process data on our behalf. We do not sell your personal data.",
  },
  {
    num: "6",
    title: "Notifications",
    icon: ShieldCheck,
    content:
      "We send push notifications for new matches and messages. You can disable them in your phone’s system settings at any time.",
  },
  {
    num: "7",
    title: "Retention & your choices",
    icon: Lock,
    content:
      "We keep your data while your account is active. You can edit your profile, block users and request removal of your data by contacting us.",
  },
  {
    num: "8",
    title: "Security",
    icon: ShieldCheck,
    content:
      "We use encryption in transit and access controls to protect your data, but no system is completely secure.",
  },
  {
    num: "9",
    title: "Children",
    icon: EyeOff,
    content:
      "Ping is not for anyone under 18, and we do not knowingly collect data from minors.",
  },
  {
    num: "10",
    title: "Contact",
    icon: Mail,
    content:
      "Privacy questions? Email privacy@pingapp.io or privacy@pingapp.example.",
  },
];

export default function PrivacyPage() {
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
        {/* Title Header */}
        <div className="space-y-4 pb-12 border-b border-[#121016]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EADCFD] text-[#7A22D6] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Legal Documentation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121016]">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#6F6A78]">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>•</span>
            <span>Version 2.0 (Mobile App & Web)</span>
          </div>

          <p className="text-base sm:text-lg text-[#6F6A78] max-w-2xl leading-relaxed pt-2">
            At Ping, we respect your privacy and believe in total transparency. This policy outlines how the Ping mobile application and web services handle your data, permissions, and security.
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
          <div className="p-4 rounded-2xl bg-white border border-[#121016]/6 shadow-xs">
            <div className="text-xs font-bold text-[#9B3CF2] uppercase tracking-wider mb-1">
              Zero Data Sales
            </div>
            <p className="text-xs text-[#6F6A78]">
              We never sell or rent your personal information to third-party advertisers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#121016]/6 shadow-xs">
            <div className="text-xs font-bold text-[#3CCB7F] uppercase tracking-wider mb-1">
              Approximate Location
            </div>
            <p className="text-xs text-[#6F6A78]">
              Your exact coordinates are never broadcast. Only radius distance is displayed.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#121016]/6 shadow-xs">
            <div className="text-xs font-bold text-[#FF5C68] uppercase tracking-wider mb-1">
              No Background Access
            </div>
            <p className="text-xs text-[#6F6A78]">
              Camera and mic access occur only when actively recording or taking a photo.
            </p>
          </div>
        </div>

        {/* Sections List */}
        <div className="space-y-10">
          {PRIVACY_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.num}
                id={`section-${section.num}`}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#121016]/8 shadow-xs space-y-3 scroll-mt-24"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EADCFD] text-[#7A22D6] font-bold text-xs flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#121016]">
                    {section.num}. {section.title}
                  </h2>
                </div>

                <div className="text-sm sm:text-base text-[#2A2630] leading-relaxed pl-11">
                  {section.content}
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing Contact Card */}
        <div className="mt-16 p-8 rounded-3xl bg-[#121016] text-[#FAF8F5] space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#9B3CF2] flex items-center justify-center text-white">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                Have questions about your data?
              </h3>
              <p className="text-xs text-[#8E8996]">
                Our dedicated privacy team is here to assist you.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#8E8996] leading-relaxed">
            You have the right to request data export, account deletion, or clarification on any privacy practice. Email us anytime at{" "}
            <a
              href="mailto:privacy@pingapp.io"
              className="text-[#EADCFD] underline hover:text-white"
            >
              privacy@pingapp.io
            </a>
            .
          </p>
        </div>

        {/* Cross Link to Terms */}
        <div className="mt-12 text-center text-xs text-[#6F6A78]">
          Looking for our Terms of Service?{" "}
          <Link href="/terms" className="text-[#9B3CF2] font-semibold underline hover:text-[#7A22D6]">
            View Ping Terms & Conditions
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#121016]/8 py-8 bg-[#FAF8F5] text-center text-xs text-[#8E8996]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Ping Technologies, Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#121016]">Home</Link>
            <Link href="/privacy" className="text-[#121016] font-semibold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#121016]">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

