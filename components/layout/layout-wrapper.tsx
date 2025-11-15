import { Header } from "./header"
import { Footer } from "./footer"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

