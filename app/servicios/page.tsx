import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { ServicesSection } from "@/components/sections/services-section"

export default function ServiciosPage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen">
        <ServicesSection />
      </main>
    </LayoutWrapper>
  )
}

