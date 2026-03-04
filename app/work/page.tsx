import { Navigation } from "@/components/navigation"
import { WorkContent } from "@/components/work-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Work | Tommy.frrrr",
  description: "Browse my portfolio of websites and Discord bots built with modern technologies.",
}

export default function WorkPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <Navigation />
      <div className="text-center px-6 py-32">
        <h1 className="text-4xl font-bold">Work Page</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This section is coming soon. Check back later for updates!
        </p>
      </div>
      <Footer />
    </main>
  )
}
