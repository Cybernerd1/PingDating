"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Sparkles, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { RevealText, ScrollFade } from "@/components/motion/MotionPrimitives";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "What is Ping?",
    a: "Ping is an intentional dating application designed for thoughtful discovery and meaningful dialogue. Rather than gamifying rapid swipes, Ping centers on mutual resonance, shared passions, and icebreakers that spark genuine conversations.",
  },
  {
    q: "When will Ping launch?",
    a: "Ping is currently in private beta testing across select urban hubs. A staggered rollout for early-access waitlist members is scheduled for 2026.",
  },
  {
    q: "How do I get early access?",
    a: "Submit your email address in the early-access section above. Waitlist spots are allocated in batches as new local communities open to ensure active, balanced member ratios.",
  },
  {
    q: "Which platforms will support Ping?",
    a: "Ping is built natively for iOS and Android using our React Native client, backed by our Node.js and PostgreSQL infrastructure. Web chat companion views will follow post-launch.",
  },
  {
    q: "Is the website demo connected to real users?",
    a: "No. The interactive simulator on this website is a completely sandboxed local client demo running fictional profiles to preview Ping's interaction mechanics. It never connects to live members or transmits personal data.",
  },
];

export function FaqFooterSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-36 bg-[#FAF8F5] relative border-t border-[#121016]/8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollFade delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-[#9B3CF2] font-semibold">
                Questions & Clarity
              </span>
            </ScrollFade>

            <RevealText as="h2" delay={0.2} className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#121016] mt-2">
              Frequently asked questions.
            </RevealText>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-[#121016]/8 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#121016] cursor-pointer hover:text-[#9B3CF2] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6F6A78] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#9B3CF2]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#6F6A78] leading-relaxed border-t border-[#121016]/4 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minimal Luxury Footer */}
      <footer className="bg-[#FAF8F5] border-t border-[#121016]/10 pt-16 pb-12 text-[#121016]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#121016]/8 items-start">
            {/* Col 1: Wordmark and Brand Statement (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#9B3CF2] p-1.5 flex items-center justify-center">
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
              <p className="font-serif italic text-xl text-[#6F6A78]">
                &ldquo;Good conversations start somewhere.&rdquo;
              </p>
              <p className="text-xs text-[#8E8996] max-w-sm leading-relaxed">
                One little Ping. A new possibility. Dedicated to cultivating human warmth and curiosity in a digital age.
              </p>
            </div>

            {/* Col 2: Navigation Links (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9B3CF2] font-semibold">
                Navigation
              </span>
              <ul className="space-y-2 text-sm text-[#6F6A78]">
                <li><a href="#story" className="hover:text-[#121016] transition-colors">Story & Narrative</a></li>
                <li><a href="#simulator" className="hover:text-[#121016] transition-colors">App Simulator</a></li>
                <li><a href="#connection" className="hover:text-[#121016] transition-colors">Connection Moment</a></li>
                <li><a href="#features" className="hover:text-[#121016] transition-colors">Product Features</a></li>
                <li><a href="#showcase" className="hover:text-[#121016] transition-colors">App Showcase</a></li>
              </ul>
            </div>

            {/* Col 3: Early access link & Contact (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9B3CF2] font-semibold">
                Launch Access
              </span>
              <p className="text-xs text-[#6F6A78] leading-relaxed">
                Join our private testing queue to preview upcoming builds on TestFlight & Google Play.
              </p>
              <div>
                <a
                  href="#early-access"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-[#121016] text-[#FAF8F5] hover:bg-[#9B3CF2] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#EADCFD]" />
                  <span>Reserve Your Spot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="pt-2 text-xs text-[#8E8996] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Contact: hello@pingapp.io</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8996] gap-4">
            <div>
              © {new Date().getFullYear()} Ping Technologies, Inc. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-[#121016] transition-colors underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setShowTermsModal(true)}
                className="hover:text-[#121016] transition-colors underline cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto border border-[#121016]/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#121016]/8 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#3CCB7F]" />
                <h3 className="font-serif text-xl font-bold text-[#121016]">Privacy Policy</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="text-[#6F6A78] hover:text-[#121016] text-sm font-semibold"
              >
                Close
              </button>
            </div>
            <div className="text-xs text-[#6F6A78] space-y-3 leading-relaxed">
              <p>
                <strong>1. Data Collection:</strong> We collect early-access email submissions solely for product notifications, beta launch announcements, and invitations. We never sell or rent your personal contact information to third parties.
              </p>
              <p>
                <strong>2. Security:</strong> All submission transmissions are encrypted in transit via SSL/TLS. Registration entries are stored securely on our dedicated datastore.
              </p>
              <p>
                <strong>3. Simulator Isolation:</strong> The interactive demo on this landing page runs entirely client-side using mock fictional profiles and does not monitor or store your private interactions.
              </p>
              <p>
                <strong>4. Unsubscribe:</strong> You can opt out or request data removal at any time by contacting privacy@pingapp.io.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="w-full py-2.5 rounded-full bg-[#121016] text-white text-xs font-semibold hover:bg-[#9B3CF2] transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto border border-[#121016]/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#121016]/8 pb-3">
              <h3 className="font-serif text-xl font-bold text-[#121016]">Terms of Service</h3>
              <button
                type="button"
                onClick={() => setShowTermsModal(false)}
                className="text-[#6F6A78] hover:text-[#121016] text-sm font-semibold"
              >
                Close
              </button>
            </div>
            <div className="text-xs text-[#6F6A78] space-y-3 leading-relaxed">
              <p>
                <strong>1. Beta Access:</strong> Early access invitations are granted on a rolling basis. Registration does not guarantee immediate app onboarding.
              </p>
              <p>
                <strong>2. Community Guidelines:</strong> Ping is committed to respectful, authentic interactions. Hate speech, harassment, impersonation, or deceptive behavior result in immediate termination of beta privileges.
              </p>
              <p>
                <strong>3. Intellectual Property:</strong> All brand assets, wordmarks, and interface designs are proprietary to Ping Technologies, Inc.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowTermsModal(false)}
                className="w-full py-2.5 rounded-full bg-[#121016] text-white text-xs font-semibold hover:bg-[#9B3CF2] transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

