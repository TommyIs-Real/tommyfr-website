"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const codeLines = [
  { indent: 0, text: "const tommy = {", color: "text-foreground" },
  { indent: 1, text: 'name: "Tommy.frrrr",', color: "text-primary" },
  { indent: 1, text: 'role: "Developer",', color: "text-primary" },
  { indent: 1, text: "experience: 3,", color: "text-muted-foreground" },
  { indent: 1, text: "skills: [", color: "text-foreground" },
  { indent: 2, text: '"Websites",', color: "text-primary" },
  { indent: 2, text: '"Discord Bots",', color: "text-primary" },
  { indent: 1, text: "],", color: "text-foreground" },
  { indent: 1, text: "status:", color: "text-foreground" },
  { indent: 2, text: '"Available for hire"', color: "text-primary" },
  { indent: 0, text: "};", color: "text-foreground" },
]

export function CodeShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card overflow-hidden rounded-2xl"
          >
            {/* Window bar */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-chart-4/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                tommy.ts
              </span>
            </div>

            {/* Code content */}
            <div className="p-4 sm:p-6">
              <pre className="font-mono text-xs leading-6 sm:text-sm sm:leading-7 overflow-x-auto">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex"
                  >
                    <span className="mr-6 select-none text-muted-foreground/40 w-5 text-right">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 1.5}rem` }} className={line.color}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </pre>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              About Me
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Code is my <span className="text-primary">craft</span>.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              With 3 years of experience writing code, I specialize in building
              modern, performant websites and feature-rich Discord bots. I care
              about clean architecture, smooth user experiences, and shipping
              products that actually work.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Every project I take on gets my full attention. No templates, no
              shortcuts — just quality code tailored to exactly what you need.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
              >
                Learn more about me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
