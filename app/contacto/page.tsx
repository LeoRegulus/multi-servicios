import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { ContactSection } from "@/components/sections/contact-section"

export default function ContactoPage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen">
        <ContactSection />
      </main>
    </LayoutWrapper>
  )
}

