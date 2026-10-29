"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Sparkles, Mail } from "lucide-react";
import { EarlyAccessSchema, EarlyAccessFormData } from "@/lib/validations";
import { RevealText, ScrollFade } from "@/components/motion/MotionPrimitives";

export function EarlyAccessSection() {
  const [serverStatus, setServerStatus] = useState<{
    type: "success" | "duplicate" | "error" | null;
    message?: string;
  }>({ type: null });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(EarlyAccessSchema),
    defaultValues: {
      email: "",
      source: "website_landing",
    },
  });

  const onSubmit = async (data: EarlyAccessFormData) => {
    setServerStatus({ type: null });
    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        setServerStatus({
          type: "error",
          message: resData.error || "Failed to submit. Please try again.",
        });
        return;
      }

      if (resData.isDuplicate) {
        setServerStatus({
          type: "duplicate",
          message: resData.message || "You're already on the list! We'll send your early-access link when it's ready.",
        });
      } else {
        setServerStatus({
          type: "success",
          message: resData.message || "You're on the list. We'll send your early-access link when it's ready.",
        });
      }
      reset();
    } catch {
      setServerStatus({
        type: "error",
        message: "Network error. Please verify your connection and try again.",
      });
    }
  };

  return (
    <section id="early-access" className="py-28 md:py-40 bg-[#121016] text-[#FAF8F5] relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#9B3CF2]/20 via-[#FF5C68]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        {/* Top Eyebrow */}
        <ScrollFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-[#EADCFD] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#9B3CF2]" />
            <span>Private Beta Invitation</span>
          </div>
        </ScrollFade>

        {/* Large Headline */}
        <div className="space-y-2">
          <RevealText as="h2" delay={0.2} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5]">
            Your next hello starts here.
          </RevealText>
        </div>

        {/* Supporting Copy */}
        <ScrollFade delay={0.35}>
          <p className="mt-6 text-lg sm:text-xl text-[#8E8996] max-w-xl mx-auto font-normal leading-relaxed">
            Be among the first to experience Ping. Get your early-access link when it&apos;s ready.
          </p>
        </ScrollFade>

        {/* Registration Form */}
        <ScrollFade delay={0.5}>
          <div className="mt-10 max-w-md mx-auto">
            {serverStatus.type === "success" || serverStatus.type === "duplicate" ? (
              <div className="p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl space-y-3 animate-fade-in text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3CCB7F]/20 text-[#3CCB7F] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      You&apos;re on the list.
                    </h3>
                    <p className="text-xs text-[#8E8996] mt-0.5">
                      {serverStatus.message}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#EADCFD]">
                  <span>Status: Confirmed Registration</span>
                  <button
                    type="button"
                    onClick={() => setServerStatus({ type: null })}
                    className="underline hover:text-white transition-colors"
                  >
                    Register another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5 bg-white/5 p-2 rounded-2xl sm:rounded-full border border-white/15 focus-within:border-[#9B3CF2] focus-within:ring-2 focus-within:ring-[#9B3CF2]/30 transition-all backdrop-blur-md">
                  <div className="relative flex-1 flex items-center pl-4">
                    <Mail className="w-5 h-5 text-[#8E8996] shrink-0 mr-2" />
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      disabled={isSubmitting}
                      {...register("email")}
                      className="w-full bg-transparent text-sm text-white placeholder-[#8E8996] focus:outline-none"
                      aria-label="Email Address for Early Access"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#9B3CF2] hover:bg-[#7A22D6] text-white text-sm font-semibold tracking-wide transition-all shadow-lg active:scale-98 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Get early access</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Validation / Server Error */}
                {errors.email && (
                  <div className="flex items-center gap-1.5 text-xs text-[#FF5C68] justify-center mt-2 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email.message}</span>
                  </div>
                )}

                {serverStatus.type === "error" && (
                  <div className="flex items-center gap-1.5 text-xs text-[#FF5C68] justify-center mt-2 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{serverStatus.message}</span>
                  </div>
                )}

                {/* Supporting Privacy Copy */}
                <p className="text-xs text-[#8E8996] mt-3">
                  Your email will be used for early-access updates. See our{" "}
                  <a href="#privacy" className="text-[#EADCFD] underline hover:text-white">
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
