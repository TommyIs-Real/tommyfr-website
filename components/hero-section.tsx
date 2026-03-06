"use client"

import { motion } from "framer-motion"
import { ArrowDown, Terminal } from "lucide-react"
import Link from "next/link"
import { FloatingParticles } from "./floating-particles"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <FloatingParticles />

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.15 180 / 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Terminal className="h-3 w-3 text-primary" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
        >
          <span className="text-foreground">I build things</span>
          <br />
          <span className="text-foreground">for the </span>
          <span className="text-primary">web</span>
          <span className="text-foreground">.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-8 sm:text-xl"
        >
          {"I'm"} Tommy.frrrr — a developer with 3+ years of experience building
          modern websites and powerful Discord bots. Clean code, sharp design.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <Link
            href="/work"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:w-auto"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 -translate-x-full bg-foreground/10 transition-transform group-hover:translate-x-0" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-border sm:w-auto"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center justify-center gap-6 sm:mt-16 sm:gap-16"
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "30+", label: "Clients" },
            { value: "3+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
