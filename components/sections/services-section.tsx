import { FaCamera, FaCouch, FaTint, FaShieldAlt, FaTools, FaBoxOpen, FaTruck, FaWrench } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: FaCamera,
    title: "Cámaras de Seguridad",
    description:
      "Venta e instalación profesional de sistemas de videovigilancia. Protege tu propiedad con tecnología de última generación.",
    href: "/camaras-seguridad",
    features: ["Instalación profesional", "Venta de equipos", "Monitoreo 24/7", "Sistemas IP y análogos"]
  },
  {
    icon: FaCouch,
    title: "Muebles de Melamina",
    description:
      "Diseño, fabricación e instalación de muebles personalizados. Transformamos tus espacios con soluciones a medida.",
    href: "/muebles-melamina",
    features: ["Diseño personalizado", "Fabricación a medida", "Instalación profesional", "Diferentes estilos"]
  },
  {
    icon: FaTint,
    title: "Planta de Agua Potable",
    description:
      "Servicio y abastecimiento de agua potable. Garantizamos calidad, pureza y suministro continuo para tu hogar o empresa.",
    href: "/planta-agua",
    features: ["Agua purificada", "Abastecimiento regular", "Servicio a domicilio", "Control de calidad"]
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Nuestros Servicios</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones integrales de calidad para tu hogar y negocio. Profesionales experimentados y atención personalizada.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg p-2 group"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline" asChild>
                      <Link href={service.href}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
            <Link href="/contacto">Solicitar Consulta</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

