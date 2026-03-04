import { Navigation } from "@/components/navigation"
import { AboutContent } from "@/components/about-content"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About | Tommy.frrrr",
  description: "Learn about Tommy.frrrr - a developer with 3+ years of experience building websites and Discord bots.",
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <AboutContent />
      <TechStack />
      <Footer />
    </main>
  )
}
