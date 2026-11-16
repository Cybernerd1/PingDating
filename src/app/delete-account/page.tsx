"use client";

// NOTE: metadata must live in a separate layout.tsx or be a server component.
// This page is client-only ("use client"), so metadata is in the route segment's layout.

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type Step = "form" | "confirming" | "done" | "error";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.ping.app/api/v1";

// ── Deletion reasons ─────────────────────────────────────────────────────────

const REASONS = [
  { id: "found_partner", label: "I found someone I like 🎉" },
  { id: "not_enough_matches", label: "Not enough matches or connections" },
  { id: "quality_concerns", label: "Quality of profiles wasn't what I expected" },
  { id: "privacy", label: "Privacy or data concerns" },
  { id: "too_many_notifications", label: "Too many notifications" },
  { id: "taking_break", label: "Taking a break from dating" },
  { id: "app_issues", label: "Technical issues or bugs in the app" },
  { id: "other", label: "Other reason" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

async function loginWithPassword(
  email: string,
  password: string
): Promise<{ access_token: string; user_id: string }> {
  const res = await fetch(`${BACKEND_URL}/auth/login/password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.error?.message ?? json?.message ?? "Login failed. Please check your credentials.");
  }
  const token: string = json?.data?.access_token;
  const userId: string = json?.data?.user?.id ?? json?.data?.user_id ?? json?.data?.id;
  if (!token || !userId) throw new Error("Could not retrieve session. Try again.");
  return { access_token: token, user_id: userId };
}

async function deleteAccount(accessToken: string, userId: string): Promise<void> {
  const res = await fetch(`${BACKEND_URL}/users/account`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ confirm: userId }),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.error?.message ?? json?.message ?? "Account deletion failed.");
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DeleteAccountPage() {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checkedReasons, setCheckedReasons] = useState<Set<string>>(new Set());
  const [customReason, setCustomReason] = useState("");
  const [understood, setUnderstood] = useState(false);

  // Flow state
  const [step, setStep] = useState<Step>("form");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleReason = (id: string) => {
    setCheckedReasons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const canSubmit =
    email.trim().length > 0 &&
    password.length >= 6 &&
    checkedReasons.size > 0 &&
    understood;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStep("confirming");
    setErrorMsg("");

    try {
      const { access_token, user_id } = await loginWithPassword(email.trim(), password);
      await deleteAccount(access_token, user_id);
      setStep("done");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStep("error");
    }
  };

  // ── Render: Done ────────────────────────────────────────────────────────
  if (step === "done") {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#D6EFEC] flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[#2DA882]" />
          </div>
          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-semibold text-[#121016]">
              Account deleted
            </h1>
            <p className="text-[#6F6A78] text-sm leading-relaxed">
              Your account and all associated data have been permanently removed from Ping.
              Thank you for the time you spent with us — we hope our paths cross again someday.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#9B3CF2] hover:text-[#7A22D6] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ping
          </Link>
        </div>
      </div>
    );
  }

  // ── Render: Form + Error ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Top nav */}
      <header className="border-b border-[#121016]/8 bg-[#FAF8F5]/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-[#6F6A78] hover:text-[#121016] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ping
          </Link>

          <Link href="/" aria-label="Ping Home" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden bg-[#9B3CF2] flex items-center justify-center p-1">
              <Image
                src="/brand/ping_icon.png"
                alt="Ping"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-serif text-xl font-bold text-[#121016]">Ping</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 py-12 pb-24">
        {/* Page heading */}
        <div className="mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF3B5C] bg-[#FF3B5C]/8 border border-[#FF3B5C]/15 rounded-full px-3.5 py-1">
            <AlertTriangle className="w-3 h-3" />
            Permanent action
          </div>
          <h1 className="font-serif text-4xl font-semibold text-[#121016] leading-tight">
            Delete your account
          </h1>
          <p className="text-[#6F6A78] text-base leading-relaxed">
            This permanently removes your profile, photos, matches, conversations, and all other
            data from Ping. This action{" "}
            <strong className="text-[#121016] font-semibold">cannot be undone</strong>.
          </p>
        </div>

        {/* Error state */}
        {step === "error" && (
          <div className="mb-6 flex items-start gap-3 p-4 rounded-xl border border-[#FF3B5C]/25 bg-[#FF3B5C]/6 text-sm text-[#C0001F]">
            <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* ── Section 1: Credentials ─────────────────────────────────── */}
          <section className="space-y-4">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-[#6F6A78]">
              Verify identity
            </h2>

            {/* Email */}
            {/* suppressHydrationWarning: email-autofill browser extensions (e.g. tempmailbee)
                inject extra DOM nodes into email field wrappers after SSR, causing a mismatch. */}
            <div className="space-y-1.5" suppressHydrationWarning>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#121016]"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#121016]/15 bg-white text-[#121016] placeholder:text-[#8E8996] text-sm focus:outline-none focus:ring-2 focus:ring-[#9B3CF2]/40 focus:border-[#9B3CF2] transition-all"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#121016]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full px-4 py-3 pr-11 rounded-xl border border-[#121016]/15 bg-white text-[#121016] placeholder:text-[#8E8996] text-sm focus:outline-none focus:ring-2 focus:ring-[#9B3CF2]/40 focus:border-[#9B3CF2] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8E8996] hover:text-[#6F6A78] transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-[#8E8996]">
                Used only to verify your identity — not stored by this page.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-[#121016]/8" />

          {/* ── Section 2: Reasons ────────────────────────────────────── */}
          <section className="space-y-4">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#6F6A78]">
                Reason for leaving
              </h2>
              <p className="mt-1 text-sm text-[#8E8996]">
                Select all that apply — this helps us improve Ping for everyone.
              </p>
            </div>

            <div className="space-y-2.5">
              {REASONS.map(({ id, label }) => {
                const checked = checkedReasons.has(id);
                return (
                  <label
                    key={id}
                    htmlFor={`reason-${id}`}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all select-none ${
                      checked
                        ? "border-[#9B3CF2]/40 bg-[#EADCFD]/40"
                        : "border-[#121016]/10 bg-white hover:border-[#9B3CF2]/25 hover:bg-[#EADCFD]/10"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                        checked
                          ? "bg-[#9B3CF2] border-[#9B3CF2]"
                          : "border-[#C8C3D4] bg-white"
                      }`}
                    >
                      {checked && (
                        <svg
                          className="w-3 h-3 text-white"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="2,6 5,9 10,3" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      id={`reason-${id}`}
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleReason(id)}
                    />
                    <span className="text-sm text-[#121016]">{label}</span>
                  </label>
                );
              })}
            </div>

            {/* Custom reason textarea */}
            <div className="space-y-1.5">
              <label
                htmlFor="custom-reason"
                className="block text-sm font-medium text-[#121016]"
              >
                Anything else you&apos;d like us to know?{" "}
                <span className="font-normal text-[#8E8996]">(optional)</span>
              </label>
              <textarea
                id="custom-reason"
                rows={3}
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Tell us what we could have done better…"
                className="w-full px-4 py-3 rounded-xl border border-[#121016]/15 bg-white text-[#121016] placeholder:text-[#8E8996] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#9B3CF2]/40 focus:border-[#9B3CF2] transition-all"
              />
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-[#121016]/8" />

          {/* ── Section 3: Final confirmation ─────────────────────────── */}
          <section className="space-y-5">
            {/* What gets deleted */}
            <div className="p-4 rounded-xl bg-[#121016]/4 border border-[#121016]/8 space-y-2">
              <p className="text-xs font-semibold tracking-wide uppercase text-[#6F6A78]">
                What will be permanently deleted
              </p>
              <ul className="space-y-1.5 text-sm text-[#2A2630]">
                {[
                  "Your profile, photos, and bio",
                  "All matches and conversations",
                  "Your likes, dislikes, and swipe history",
                  "Notification preferences and device tokens",
                  "Your account credentials and login access",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B5C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Understand checkbox */}
            <label
              htmlFor="understood"
              className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all select-none ${
                understood
                  ? "border-[#FF3B5C]/35 bg-[#FF3B5C]/6"
                  : "border-[#121016]/10 bg-white hover:border-[#FF3B5C]/20"
              }`}
            >
              <div
                className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                  understood
                    ? "bg-[#FF3B5C] border-[#FF3B5C]"
                    : "border-[#C8C3D4] bg-white"
                }`}
              >
                {understood && (
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                id="understood"
                className="sr-only"
                checked={understood}
                onChange={(e) => setUnderstood(e.target.checked)}
              />
              <span className="text-sm text-[#121016] leading-relaxed">
                I understand that deleting my account is permanent and irreversible. All my data
                will be erased and cannot be recovered.
              </span>
            </label>
          </section>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit || step === "confirming"}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] bg-[#FF3B5C] text-white hover:bg-[#E0002A] shadow-sm hover:shadow-md"
          >
            {step === "confirming" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Deleting account…
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4" />
                Permanently delete my account
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#8E8996]">
            Changed your mind?{" "}
            <Link href="/" className="text-[#9B3CF2] hover:underline font-medium">
              Go back to Ping
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
