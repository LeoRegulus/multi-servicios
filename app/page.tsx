import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero-section"

export default function Home() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen">
        <HeroSection />
      </main>
    </LayoutWrapper>
  )
}
