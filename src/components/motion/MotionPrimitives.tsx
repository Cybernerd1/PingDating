"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "motion/react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function RevealText({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionComponent = (
    as === "h1" ? motion.h1 :
    as === "h2" ? motion.h2 :
    as === "h3" ? motion.h3 :
    as === "p" ? motion.p :
    as === "span" ? motion.span :
    motion.div
  );

  return (
    <span className="inline-block overflow-hidden">
      <MotionComponent
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </MotionComponent>
    </span>
  );
}

interface RevealImageProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealImage({
  children,
  className = "",
  delay = 0.1,
}: RevealImageProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ clipPath: "inset(12% 0% 12% 0% round 16px)", opacity: 0.6, scale: 0.98 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollFade({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollFadeProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = 24;
  const initialVariants = {
    up: { opacity: 0, y: offset },
    down: { opacity: 0, y: -offset },
    left: { opacity: 0, x: offset },
    right: { opacity: 0, x: -offset },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      initial={initialVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface InteractiveButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "glass" | "pill-dark";
  children: ReactNode;
  className?: string;
}

export function InteractiveButton({
  variant = "primary",
  children,
  className = "",
  disabled,
  onClick,
  type = "button",
  ...props
}: InteractiveButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[#9B3CF2] text-white hover:bg-[#7A22D6] active:scale-[0.98] shadow-[0_8px_20px_rgba(155,60,242,0.28)] focus-visible:ring-[#9B3CF2]",
    secondary:
      "bg-[#121016] text-[#FAF8F5] hover:bg-[#2A2630] active:scale-[0.98] focus-visible:ring-[#121016]",
    glass:
      "bg-white/80 backdrop-blur-md text-[#121016] border border-[#121016]/10 hover:bg-white hover:border-[#121016]/20 active:scale-[0.98] shadow-sm",
    "pill-dark":
      "bg-[#121016] text-white hover:bg-[#9B3CF2] active:scale-[0.98] transition-colors",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
