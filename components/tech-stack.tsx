"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const techCategories = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "MongoDB", "Firebase"],
  },
  {
    title: "Discord",
    items: ["Discord.js", "Slash Commands", "Embeds", "Webhooks", "Bot Hosting"],
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Vercel", "GitHub", "NPM"],
  },
]

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Tech Stack
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tools I <span className="text-primary">work</span> with.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {category.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.4 + i * 0.1 + j * 0.05,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="relative mt-20 overflow-hidden"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="animate-marquee flex gap-4 whitespace-nowrap">
            {[
              ...techCategories.flatMap((c) => c.items),
              ...techCategories.flatMap((c) => c.items),
            ].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
