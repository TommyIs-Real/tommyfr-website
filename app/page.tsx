import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { CodeShowcase } from "@/components/code-showcase"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <CodeShowcase />
      <Footer />
    </main>
  )
}
