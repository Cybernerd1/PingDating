import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShieldCheck,
  ShieldAlert,
  UserX,
  Ban,
  Flag,
  Gavel,
  FileWarning,
  Scale,
  Mail,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Child Safety Standards — Ping",
  description:
    "Ping's Child Safety Standards. Zero tolerance for CSAE, CSAM, child grooming, or any activity that endangers children. Learn how we protect minors.",
  openGraph: {
    title: "Child Safety Standards — Ping",
    description:
      "Zero tolerance for child exploitation. Read Ping's child safety policy, reporting process, and enforcement standards.",
  },
};

const LAST_UPDATED = "17 November 2026";

const SECTIONS = [
  {
    num: "1",
    title: "Our Commitment to Child Safety",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Ping – A Friendship App is committed to maintaining a safe environment
          for all users. We have{" "}
          <strong>
            zero tolerance for Child Sexual Abuse and Exploitation (CSAE), Child
            Sexual Abuse Material (CSAM), child grooming, sexual exploitation of
            minors, or any activity that endangers children.
          </strong>
        </p>
        <p className="mt-3">
          We prohibit any use of Ping to create, upload, share, distribute, or
          promote content involving the sexual exploitation or abuse of minors.
        </p>
      </>
    ),
  },
  {
    num: "2",
    title: "Minimum Age Requirement",
    icon: UserX,
    content: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Ping is an <strong>adults-only platform</strong> intended for
          individuals aged <strong>18 years and above</strong>.
        </li>
        <li>
          Users under 18 years of age are not permitted to create or maintain an
          account.
        </li>
        <li>
          Users must provide accurate age information during registration.
        </li>
        <li>
          Accounts suspected of belonging to minors may be investigated and
          suspended or removed.
        </li>
        <li>Attempts to bypass age restrictions are prohibited.</li>
      </ul>
    ),
  },
  {
    num: "3",
    title: "Prohibited Content and Behaviour",
    icon: Ban,
    content: (
      <>
        <p className="mb-3">
          The following activities are <strong>strictly prohibited</strong>:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Creating, sharing, uploading, or distributing CSAM.</li>
          <li>Grooming or attempting to sexually exploit minors.</li>
          <li>Soliciting sexual images or content from minors.</li>
          <li>
            Sexualizing, threatening, coercing, or exploiting children.
          </li>
          <li>
            Using Ping to facilitate child trafficking or sexual abuse.
          </li>
          <li>
            Attempting to contact minors for inappropriate or exploitative
            purposes.
          </li>
        </ul>
        <p className="mt-3 font-medium text-[#FF3B5C]">
          Violations may result in immediate account suspension or permanent
          termination.
        </p>
      </>
    ),
  },
  {
    num: "4",
    title: "Reporting Child Safety Concerns",
    icon: Flag,
    content: (
      <>
        <p className="mb-3">
          Ping provides an <strong>in-app reporting mechanism</strong> that
          allows users to report profiles, messages, and inappropriate
          behaviour. Users are encouraged to report:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Suspected underage accounts.</li>
          <li>Child sexual exploitation or abuse.</li>
          <li>Grooming or inappropriate interactions involving minors.</li>
          <li>Suspicious or exploitative messages.</li>
          <li>Any content that may endanger a child.</li>
        </ul>
        <p className="mt-3">
          Reports are reviewed manually by the Ping moderation team. Appropriate
          action is taken based on the nature and severity of the report.
        </p>
        <p className="mt-3">
          Users can also contact our child safety team directly at:{" "}
          <a
            href="mailto:ping.support.0@gmail.com"
            className="text-[#9B3CF2] font-semibold underline hover:text-[#7A22D6]"
          >
            ping.support.0@gmail.com
          </a>
        </p>
      </>
    ),
  },
  {
    num: "5",
    title: "Moderation and Enforcement",
    icon: Gavel,
    content: (
      <>
        <p className="mb-3">
          Ping takes reports of child safety violations seriously. Our
          moderation process includes:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Receiving and reviewing user reports.</li>
          <li>Assessing reported profiles, messages, and content.</li>
          <li>Removing prohibited content when violations are identified.</li>
          <li>
            Suspending or permanently terminating accounts involved in
            violations.
          </li>
          <li>
            Escalating confirmed child sexual abuse material to the appropriate
            authorities in accordance with applicable laws.
          </li>
        </ul>
        <p className="mt-3">
          We reserve the right to take appropriate enforcement action against
          accounts violating these standards.
        </p>
      </>
    ),
  },
  {
    num: "6",
    title: "Handling Child Sexual Abuse Material (CSAM)",
    icon: FileWarning,
    content: (
      <>
        <p>
          Ping strictly prohibits CSAM and any content that facilitates child
          sexual abuse or exploitation.
        </p>
        <p className="mt-3">
          Upon obtaining actual knowledge of CSAM on our platform, we will take
          appropriate action, including removing the content, restricting or
          terminating associated accounts, and{" "}
          <strong>
            reporting confirmed CSAM to the relevant regional or national
            authorities
          </strong>{" "}
          as required by applicable law.
        </p>
        <p className="mt-3">
          We will cooperate with lawful investigations and relevant child
          protection authorities.
        </p>
      </>
    ),
  },
  {
    num: "7",
    title: "Compliance with Child Safety Laws",
    icon: Scale,
    content: (
      <>
        <p>
          Ping is committed to complying with applicable child safety laws and
          regulations in the regions where the service operates.
        </p>
        <p className="mt-3">
          We will maintain procedures for reviewing reports, addressing CSAM,
          and escalating confirmed cases to the appropriate authorities.
        </p>
      </>
    ),
  },
  {
    num: "8",
    title: "Child Safety Point of Contact",
    icon: Mail,
    content: (
      <>
        <p className="mb-3">
          For child safety concerns, reports of CSAE or CSAM, or inquiries
          regarding our child safety practices, contact:
        </p>
        <div className="rounded-xl bg-[#FAF8F5] border border-[#121016]/8 p-4 space-y-1.5 text-sm">
          <div>
            <span className="font-semibold text-[#121016]">App:</span>{" "}
            Ping – A Friendship App
          </div>
          <div>
            <span className="font-semibold text-[#121016]">
              Child Safety Contact:
            </span>{" "}
            Ping Support Team
          </div>
          <div>
            <span className="font-semibold text-[#121016]">Email:</span>{" "}
            <a
              href="mailto:ping.support.0@gmail.com"
              className="text-[#9B3CF2] font-semibold underline hover:text-[#7A22D6]"
            >
              ping.support.0@gmail.com
            </a>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#6F6A78]">
          This contact channel is intended for users, safety organizations, law
          enforcement agencies, and Google Play representatives.
        </p>
      </>
    ),
  },
  {
    num: "9",
    title: "Policy Updates",
    icon: RefreshCw,
    content: (
      <>
        <p>
          Ping may update these Child Safety Standards as our safety practices
          and applicable legal requirements evolve.
        </p>
        <p className="mt-3">
          Users and relevant authorities can refer to this page for the latest
          version of our standards.
        </p>
      </>
    ),
  },
];

export default function ChildSafetyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B5C]/10 text-[#FF3B5C] text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Child Safety Standards</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#121016]">
            Child Safety
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#6F6A78]">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>•</span>
            <span>Ping – A Friendship App</span>
          </div>

          <p className="text-base sm:text-lg text-[#6F6A78] max-w-2xl leading-relaxed pt-2">
            Ping has zero tolerance for the sexual exploitation or abuse of
            children. This document outlines our standards, enforcement
            practices, and reporting mechanisms for child safety.
          </p>
        </div>

        {/* Key Principles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
          <div className="p-4 rounded-2xl bg-white border border-[#121016]/6 shadow-xs">
            <div className="text-xs font-bold text-[#FF3B5C] uppercase tracking-wider mb-1">
              Zero Tolerance
            </div>
            <p className="text-xs text-[#6F6A78]">
              Any form of child sexual abuse material or exploitation results in
              immediate account termination and reporting to authorities.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#121016]/6 shadow-xs">
            <div className="text-xs font-bold text-[#9B3CF2] uppercase tracking-wider mb-1">
              Adults Only (18+)
            </div>
            <p className="text-xs text-[#6F6A78]">
              Ping is exclusively for users aged 18 and above. Underage accounts
              are investigated and removed.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#121016]/6 shadow-xs">
            <div className="text-xs font-bold text-[#3CCB7F] uppercase tracking-wider mb-1">
              Report &amp; Respond
            </div>
            <p className="text-xs text-[#6F6A78]">
              In-app reporting and a dedicated safety email ensure concerns are
              reviewed and acted upon promptly.
            </p>
          </div>
        </div>

        {/* Sections List */}
        <div className="space-y-10">
          {SECTIONS.map((section) => {
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

        {/* Contact Card */}
        <div className="mt-16 p-8 rounded-3xl bg-[#121016] text-[#FAF8F5] space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF3B5C] flex items-center justify-center text-white">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                Report a child safety concern
              </h3>
              <p className="text-xs text-[#8E8996]">
                Your report helps protect children and keep the community safe.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#8E8996] leading-relaxed">
            If you encounter any content or behaviour on Ping that endangers a
            child, please report it immediately using the in-app reporting tool
            or email our child safety team at{" "}
            <a
              href="mailto:ping.support.0@gmail.com"
              className="text-[#EADCFD] underline hover:text-white"
            >
              ping.support.0@gmail.com
            </a>
            . All reports are treated with urgency and confidentiality.
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-10 text-center">
          <p className="font-serif text-lg italic text-[#6F6A78]">
            Ping – Real People. Happier Conversations.
          </p>
        </div>

        {/* Cross Links */}
        <div className="mt-8 text-center text-xs text-[#6F6A78] space-x-4">
          <Link
            href="/privacy"
            className="text-[#9B3CF2] font-semibold underline hover:text-[#7A22D6]"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link
            href="/terms"
            className="text-[#9B3CF2] font-semibold underline hover:text-[#7A22D6]"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#121016]/8 py-8 bg-[#FAF8F5] text-center text-xs text-[#8E8996]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Ping Technologies, Inc. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#121016]">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-[#121016]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#121016]">
              Terms
            </Link>
            <Link
              href="/child-safety"
              className="text-[#121016] font-semibold"
            >
              Child Safety
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

