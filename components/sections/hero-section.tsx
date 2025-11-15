"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaArrowRight, FaCamera, FaCouch, FaTint } from "react-icons/fa"

const services = [
  {
    id: "camaras-seguridad",
    title: "Cámaras de Seguridad",
    description: "Venta e instalación de sistemas de seguridad profesional. Protege tu hogar o negocio con tecnología de vanguardia.",
    icon: FaCamera,
    href: "/servicios/camaras-seguridad",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-800",
    dotColor: "bg-blue-500",
    urlImage: "/slider/slider01.webp",
  },
  {
    id: "muebles-melamina",
    title: "Muebles de Melamina",
    description: "Diseño, creación e instalación de muebles personalizados de melamina. Transformamos tus espacios con soluciones a medida.",
    icon: FaCouch,
    href: "/servicios/muebles-melamina",
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-800",
    dotColor: "bg-amber-500",
    urlImage: "/slider/slider02.webp",
  },
  {
    id: "planta-agua",
    title: "Planta de Agua Potable",
    description: "Servicio y abastecimiento de agua potable. Garantizamos calidad y suministro continuo para tu hogar o empresa.",
    icon: FaTint,
    href: "/servicios/planta-agua",
    color: "from-cyan-500 to-cyan-700",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-800",
    dotColor: "bg-cyan-500",
    urlImage: "/slider/slider03.webp",
  }
]

export function HeroSection() {

  const [currentSlide, setCurrentSlide] = useState(0)

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (

    <>


      <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 bg-linear-to-b from-secondary/20 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* ✅ Slider corregido */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-white mb-12">

            <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem]">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  {/* Imagen de fondo con Next.js Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.urlImage}
                      alt={service.title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  {/* Overlay degradado para mejor legibilidad */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/30" />

                  {/* Contenido encima de la imagen */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 sm:p-6 text-white">
                    <div className={`w-20 h-20 rounded-full bg-linear-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base md:text-lg text-center max-w-md px-2 opacity-95 drop-shadow-md">
                      {service.description}
                    </p>
                    <Link href={service.href} className="mt-6">
                      <Button
                        size="lg"
                        className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 text-foreground shadow-lg"
                      >
                        Ver Más Detalles
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Flechas */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-black/90 hover:dark:bg-black/90 text-foreground p-2.5 rounded-full shadow-md transition-colors z-20 cursor-pointer"
              aria-label="Slide anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-black/90 hover:dark:bg-black/90 text-foreground p-2.5 rounded-full shadow-md transition-colors z-20 cursor-pointer"
              aria-label="Siguiente slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentSlide ? services[index].dotColor : "bg-gray-300"}`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">

            {/* Header */}
            <div className="space-y-4 sm:space-y-6">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block">
                {/* Contacto */}
                Multi <span className="text-primary">Servicios</span>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-linear-to-r from-primary to-accent rounded-full"></span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Soluciones integrales para tu hogar y negocio. Elige el servicio que necesitas y descubre cómo podemos ayudarte.
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur border-border/50 cursor-pointer"
                  >
                    <Link href={service.href}>
                      <CardHeader className="text-center space-y-4">
                        <div className={`mx-auto w-16 h-16 rounded-full bg-linear-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-sm sm:text-base min-h-[60px]">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <Button
                          className="w-full gap-2 group-hover:gap-3 transition-all duration-300"
                          variant="outline"
                        >
                          Ver Más
                          <FaArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">300+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

