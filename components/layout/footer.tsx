import { FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { contactData } from "@/config/contact-data"

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-linear-to-b from-secondary/20 via-secondary/30 to-secondary/40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Personal Info Section */}
          <div className="space-y-3 sm:space-y-4 group">
            <h3 className="text-base sm:text-lg font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {contactData.personal.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80">
              {contactData.personal.bio}
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Enlaces Rápidos
            </h3>

            <nav className="flex flex-col gap-2">
              {contactData.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-transparent hover:bg-linear-to-r hover:from-primary hover:to-accent hover:bg-clip-text transition-all hover:translate-x-1 inline-flex items-center gap-2 group/link font-medium"
                >
                  <span className="w-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all group-hover/link:w-4" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links Section */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Síguenos
            </h3>
            <div className="flex flex-wrap gap-2">
              {contactData.social.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className="group hover:scale-110 hover:shadow-lg transition-all hover:border-primary/50 backdrop-blur-sm"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon
                        className="h-4 w-4 transition-transform group-hover:rotate-12"
                        style={{ color: social.color }}
                      />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                )
              })}
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 hover:shadow-lg transition-all hover:border-primary/50 backdrop-blur-sm"
              >
                <a href={`mailto:${contactData.contact.email}`}>
                  <FaEnvelope className="h-4 w-4 transition-transform hover:rotate-12" style={{ color: "#EA4335" }} />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 sm:pt-8 border-t border-border/40 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors">
            © {new Date().getFullYear()} {contactData.personal.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

