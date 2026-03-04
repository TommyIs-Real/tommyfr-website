import { Navigation } from "@/components/navigation"
import { WorkContent } from "@/components/work-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Work | Tommy.frrrr",
  description: "Browse my portfolio of websites and Discord bots built with modern technologies.",
}

export default function WorkPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <WorkContent />
      <Footer />
    </main>
  )
}
