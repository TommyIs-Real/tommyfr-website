"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Code, Users, Zap } from "lucide-react"

const stats = [
  { icon: Code, value: "50+", label: "Projects Built" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Calendar, value: "3+", label: "Years Coding" },
  { icon: Zap, value: "100%", label: "Dedication" },
]

export function AboutContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div
        className="absolute right-0 top-1/4 h-96 w-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.15 180 / 0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            About Me
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Developer. Builder.{" "}
            <span className="text-primary">Problem solver.</span>
          </h1>
          <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
            {"I'm"} Tommy.frrrr, a developer who has been writing code for the
            past 3 years. I build modern websites and powerful Discord bots for
            clients who want quality work done right.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            I got into coding because I wanted to create things that people
            actually use. No shortcuts, no templates — every project is built
            from scratch with clean, maintainable code. When {"I'm"} not coding,
            {"I'm"} probably learning something new to make my next project even better.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-2xl p-4 sm:p-6 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-xl">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mt-3 text-xl font-bold text-foreground sm:mt-4 sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}
