import { Navigation } from "@/components/navigation"
import { ContactContent } from "@/components/contact-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact | Tommy.frrrr",
  description: "Get in touch with Tommy.frrrr for website development and Discord bot projects.",
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <ContactContent />
      <Footer />
    </main>
  )
}
