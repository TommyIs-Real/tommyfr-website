"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, ArrowUpRight, Copy, Check, MessageSquare, Globe } from "lucide-react"
import { FloatingParticles } from "./floating-particles"

const socials = [
  { icon: MessageSquare, label: "Discord", handle: "Tommy.frrrr", href: "#" },
  { icon: Globe, label: "YouTube", handle: "Apex-Bots67", href: "https://www.youtube.com/@Apex-Bots67" },
]

const faqs = [
  {
    question: "What do you charge?",
    answer: "Pricing depends on the project scope. Reach out with your idea and I'll give you a quote.",
  },
  {
    question: "How long does a project take?",
    answer: "Most websites take 1-3 weeks. Discord bots can range from a few days to 2 weeks depending on complexity.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Every project includes revisions to make sure you're completely satisfied with the final result.",
  },
  {
    question: "What technologies do you use?",
    answer: "Primarily Next.js, React, TypeScript, and Tailwind for websites. Discord.js and Node.js for bots.",
  },
]

export function ContactContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@tommyfr.xyz")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingParticles />

        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 h-96 w-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.75 0.15 180 / 0.4) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Contact
            </span>
            <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              {"Let's"} <span className="text-primary">build</span> something.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              Have a project in mind? Whether you need a website or a Discord bot,
              {"I'd"} love to hear about it.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12"
          >
            <div className="glass-card mx-auto max-w-lg rounded-2xl p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Drop me a line
              </h3>
              <button
                type="button"
                onClick={handleCopy}
                className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-primary transition-opacity hover:opacity-80"
              >
                contact@tommyfr.xyz
                {copied ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
              <p className="mt-2 text-sm text-muted-foreground">
                Click to copy email address
              </p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {socials.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="glass-card group flex items-center justify-between rounded-xl px-5 py-4 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{social.label}</div>
                      <div className="text-sm font-medium text-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

        <div ref={faqRef} className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Common <span className="text-primary">questions</span>.
            </h2>
          </motion.div>

          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
