"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "SaaS Dashboard",
    category: "Websites",
    description:
      "Full-stack analytics dashboard with real-time data visualization, user authentication, and responsive design built with Next.js and Tailwind.",
    tags: ["Next.js", "React", "Tailwind", "PostgreSQL"],
    image: "/images/project-web-1.jpg",
  },
  {
    title: "E-Commerce Store",
    category: "Websites",
    description:
      "Modern online storefront with product catalog, cart system, Stripe checkout integration, and admin management panel.",
    tags: ["Next.js", "Stripe", "Full-Stack", "API"],
    image: "/images/project-web-2.jpg",
  },
  {
    title: "Moderation Bot",
    category: "Discord Bots",
    description:
      "Advanced moderation bot with auto-mod, logging, warning system, mute/ban commands, and comprehensive server management tools.",
    tags: ["Discord.js", "Node.js", "MongoDB", "Slash Commands"],
    image: "/images/project-bot-1.jpg",
  },
  {
    title: "Community Bot",
    category: "Discord Bots",
    description:
      "Feature-rich community bot with ticket system, music player, leveling, reaction roles, giveaways, and custom embed builder.",
    tags: ["Discord.js", "Python", "Automation", "Webhooks"],
    image: "/images/project-bot-2.jpg",
  },
  {
    title: "Portfolio Website",
    category: "Websites",
    description:
      "Animated creative portfolio with smooth page transitions, particle effects, and responsive design for a digital artist.",
    tags: ["React", "Framer Motion", "Tailwind", "Design"],
    image: "/images/project-web-3.jpg",
  },
  {
    title: "Community Forum",
    category: "Websites",
    description:
      "Full-stack discussion platform with user profiles, threaded comments, voting system, and real-time notifications.",
    tags: ["Next.js", "PostgreSQL", "Auth", "Real-time"],
    image: "/images/project-web-4.jpg",
  },
]

const categories = ["All", "Websites", "Discord Bots"]

export function WorkContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="relative pt-32 pb-20">
      <div
        className="absolute left-0 top-1/3 h-96 w-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.15 180 / 0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            My <span className="text-primary">work</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            A collection of websites and Discord bots {"I've"} built for clients.
            Every project is custom-built from the ground up.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-lg bg-secondary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="glass-card group relative overflow-hidden rounded-2xl transition-all hover:border-primary/30"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground">
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
