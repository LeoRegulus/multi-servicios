"use client"

import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FaCamera, FaShieldAlt, FaClock, FaTools, FaCheckCircle, FaImages } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { colorPalettes, features, services } from "./dataCamara"


// Galería de imágenes con categorías
const galleryImages = [
  {
    "id": 1,
    "titulo": "Cámara de vigilancia en calle peatonal urbana",
    "descripcion": "Sistema de seguridad en una calle comercial con cámaras instaladas en edificios históricos durante la noche.",
    "categoria": "Institucional & Pública",
    "alt": "Cámara de seguridad en calle peatonal iluminada por faroles y luces de tiendas",
    "urlImage": "/camaras/camara01.png"
  },
  {
    "id": 2,
    "titulo": "Vigilancia en plaza turística con reconocimiento facial",
    "descripcion": "Cámaras monitorean una plaza concurrida al atardecer, integrando tecnología de reconocimiento facial en pantallas públicas.",
    "categoria": "Institucional & Pública",
    "alt": "Cámaras de seguridad en plaza concurrida y pantalla de reconocimiento facial",
    "urlImage": "/camaras/camara02.png"
  },
  {
    "id": 3,
    "titulo": "Monitoreo inteligente en centro logístico",
    "descripcion": "Cámaras de alta definición supervisan un almacén industrial con sistemas de IA para análisis en tiempo real.",
    "categoria": "Industrial & Logístico",
    "alt": "Cámaras de vigilancia en almacén con interfaz digital de monitoreo inteligente",
    "urlImage": "/camaras/camara03.png"
  },
  {
    "id": 4,
    "titulo": "Instalación de cámara en oficina moderna",
    "descripcion": "Técnico instalando cámara de seguridad en un espacio de trabajo corporativo con ventanas panorámicas.",
    "categoria": "Oficinas & Corporativo",
    "alt": "Técnico en escalera instalando cámara de seguridad en oficina moderna",
    "urlImage": "/camaras/camara04.png"
  },
  {
    "id": 5,
    "titulo": "Instalación de sistema de vigilancia en casa residencial",
    "descripcion": "Equipo técnico instalando cámaras en fachada de vivienda familiar con jardín y terraza.",
    "categoria": "Residencial & Hogar",
    "alt": "Instalación de cámaras de seguridad en casa residencial con jardín y terraza",
    "urlImage": "/camaras/camara05.png"
  },
  {
    "id": 6,
    "titulo": "Seguridad en supermercado con cámaras en estanterías",
    "descripcion": "Técnico ajustando cámaras en pasillos de supermercado para prevenir robos y monitorear tráfico de clientes.",
    "categoria": "Comercio & Retail",
    "alt": "Instalación de cámaras en supermercado con estanterías llenas de productos",
    "urlImage": "/camaras/camara06.png"
  },
  {
    "id": 7,
    "titulo": "Cámaras en bodega industrial con montacargas",
    "descripcion": "Sistema de vigilancia en almacén grande con montacargas y estanterías altas, instalado por técnico en altura.",
    "categoria": "Industrial & Logístico",
    "alt": "Instalación de cámaras en bodega industrial con montacargas y estanterías",
    "urlImage": "/camaras/camara07.png"
  },
  {
    "id": 8,
    "titulo": "Cámaras en pasillo escolar con estudiantes",
    "descripcion": "Instalación de cámaras en pasillo de escuela o universidad, con estudiantes caminando y personal de seguridad.",
    "categoria": "Institucional & Pública",
    "alt": "Cámaras de seguridad en pasillo escolar con estudiantes y técnico en escalera",
    "urlImage": "/camaras/camara08.png"
  },
  {
    "id": 9,
    "titulo": "Instalación en garaje subterráneo",
    "descripcion": "Técnico instalando cámara en garaje con vehículos estacionados, ideal para control de acceso y seguridad.",
    "categoria": "Residencial & Hogar",
    "alt": "Instalación de cámara de seguridad en garaje subterráneo con coches estacionados",
    "urlImage": "/camaras/camara09.png"
  },
  {
    "id": 10,
    "titulo": "Cámaras en pasillo hospitalario",
    "descripcion": "Sistema de vigilancia en pasillo clínico o hospitalario, con personal médico y pacientes transitando.",
    "categoria": "Institucional & Pública",
    "alt": "Cámaras de seguridad en pasillo de hospital con personal médico y pacientes",
    "urlImage": "/camaras/camara010.png"
  },
  {
    "id": 11,
    "titulo": "Instalación en recepción corporativa",
    "descripcion": "Técnico instalando cámara en lobby de oficina con recepcionistas y visitantes, asegurando entrada segura.",
    "categoria": "Oficinas & Corporativo",
    "alt": "Instalación de cámara en recepción corporativa con personal y visitantes",
    "urlImage": "/camaras/camara011.png"
  },
  {
    "id": 12,
    "titulo": "Vigilancia en estación de servicio nocturna",
    "descripcion": "Cámaras monitorean gasolinera durante la noche, con luces brillantes y vehículos en surtidores.",
    "categoria": "Comercio & Retail",
    "alt": "Cámaras de seguridad en estación de servicio con luces y coches en surtidores",
    "urlImage": "/camaras/camara012.png"
  },
  {
    "id": 13,
    "titulo": "Instalación en construcción de edificio",
    "descripcion": "Técnico en andamio instalando cámaras en obra en construcción, para seguridad laboral y vigilancia del sitio.",
    "categoria": "Industrial & Logístico",
    "alt": "Instalación de cámaras en edificio en construcción con andamios y obreros",
    "urlImage": "/camaras/camara013.png"
  },
  {
    "id": 14,
    "titulo": "Cámaras en villa de lujo junto a piscina",
    "descripcion": "Sistema de vigilancia en propiedad residencial de lujo con piscina, terrazas y palmeras, para seguridad privada.",
    "categoria": "Lujo & Propiedades Exclusivas",
    "alt": "Cámaras de seguridad en villa de lujo con piscina y vista al mar",
    "urlImage": "/camaras/camara014.png"
  }
]

const galleryCategories = [
  "Todas",
  "Residencial & Hogar",     // IDs: 5, 9
  "Comercio & Retail",       // IDs: 6, 12
  "Oficinas & Corporativo",  // IDs: 4, 11
  "Industrial & Logístico",  // IDs: 3, 7, 13
  "Institucional & Pública", // IDs: 1, 2, 8, 10
  "Lujo & Propiedades Exclusivas" // ID: 14
];

export default function CamarasSeguridadPage() {
  const [currentColorPalette, setCurrentColorPalette] = useState(0);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorPalette((prev) => (prev + 1) % colorPalettes.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredImages = selectedCategory === "Todas"
    ? galleryImages
    : galleryImages.filter(img => img.categoria === selectedCategory);

  const openImageModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <LayoutWrapper>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-linear-to-b from-secondary/20 to-background bg-blue-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-30 h-30 rounded-full bg-linear-to-br from-blue-500 to-blue-700 mb-6">
                <FaCamera className="h-20 w-20 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Cámaras de <span className="text-primary">Seguridad</span>
              </h1>
              <p className="sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Protege tu hogar o negocio con sistemas de videovigilancia profesionales. Instalación experta y tecnología de vanguardia.
              </p>
            </div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="py-16 sm:py-20 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold relative inline-block mb-6">
                Galería de Proyectos
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-blue-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conoce algunos de nuestros trabajos realizados
              </p>
            </div>

            {/* Filtros de categorías */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {galleryCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Grid de imágenes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  onClick={() => openImageModal(image)}
                >
                  <div className="aspect-video relative bg-secondary/20">
                    <Image
                      src={image.urlImage}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <FaImages className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {image.categoria}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-foreground line-clamp-1">
                      {image.titulo}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal de imagen */}
        {/* <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-6xl w-full p-0">
            {selectedImage && (
              <>
                <div className="relative w-full aspect-4/3 bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                </div>
                <DialogHeader className="px-6 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaImages className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:opacity-100 transition-opacity duration-300" />
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded bg-linear-to-r
                      from-gray-300 to-gray-500 text-gray-800
                      dark:from-gray-900 dark:to-gray-700 dark:text-gray-100
                      transition-all duration-300"
                    >
                      {selectedImage.categoria}
                    </span>
                  </div>
                  <DialogTitle className="text-xl">{selectedImage.titulo}</DialogTitle>
                  <DialogDescription className="text-base mb-2">
                    {selectedImage.descripcion}
                  </DialogDescription>
                </DialogHeader>
              </>
            )}
          </DialogContent>
        </Dialog> */}

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-6xl w-full p-0 overflow-hidden border border-gray-400 dark:border-gray-100">
            {selectedImage && (
              <>
                {/* Imagen a pantalla completa */}
                <div className="relative w-full h-[80vh] lg:h-[90vh] bg-transparent">
                  <Image
                    src={selectedImage.urlImage}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />

                  {/* Superposición de texto en la parte inferior */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linaer-to-t from-black/80 to-transparent text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <FaImages className="h-6 w-6 text-gray-300" />
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded bg-linear-to-r
                      from-blue-50/80 to-blue-100/60 text-blue-800
                      dark:from-blue-900/90 dark:to-blue-800/80 dark:text-blue-100
                        transition-all duration-300"
                      >
                        {selectedImage.categoria}
                      </span>
                    </div>
                    <DialogTitle className="text-xl font-bold mb-2">
                      {selectedImage.titulo}
                    </DialogTitle>
                    {/* <DialogDescription className="text-base opacity-90">
                      {selectedImage.descripcion}
                    </DialogDescription> */}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Features */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold relative inline-block mb-6">
                Características Principales
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-blue-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tecnología avanzada para garantizar la seguridad de tus espacios
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const color = colorPalettes[currentColorPalette][index] || colorPalettes[0][index];

                return (
                  <Card
                    key={feature.id}
                    role="region"
                    aria-labelledby={`feature-title-${feature.id}`}
                    className={`
                      group 
                      bg-card/50 
                      backdrop-blur 
                      border 
                      border-border/50 
                      ${color.bgColor}
                      transition-all 
                      duration-500 
                      hover:shadow-lg 
                      hover:-translate-y-1
                      dark:bg-gray-800/60 
                      dark:border-gray-700
                    `}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/30 dark:bg-primary/10 dark:group-hover:bg-primary/20">
                        <Icon
                          className={`h-6 w-6 ${color.iconColorLight
                            } dark:${color.iconColorDark} transition-transform duration-300 group-hover:scale-110`}
                        />
                      </div>
                      <CardTitle
                        id={`feature-title-${feature.id}`}
                        className="text-lg font-semibold text-foreground dark:text-white"
                      >
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground dark:text-gray-300">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-20 bg-secondary/20 bg-re">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold relative inline-block mb-6">
                Nuestros Servicios
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-blue-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soluciones completas para todas tus necesidades de seguridad
              </p>
            </div>

            <div className="max-w-5xl mx-auto w-full">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = openIndex === index;

                return (
                  <div
                    key={service.id}
                    className={`border rounded-xl overflow-hidden mb-3 last:mb-0 transition-all duration-300 ${isActive
                      ? "border-blue-500 shadow-md"
                      : "border-border/50 hover:border-border/70"
                      }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isActive
                        ? "bg-blue-50 text-blue-800 font-medium dark:bg-blue-900/20 dark:text-blue-200"
                        : "bg-background hover:bg-secondary/50 dark:hover:bg-gray-800/50"
                        }`}
                      aria-expanded={isActive}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <Icon
                            className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-muted-foreground'
                              } dark:text-blue-300`}
                          />
                        )}
                        <span className="uppercase text-lg font-semibold">
                          {service.title}
                        </span>
                        {/* {service.price && (
                          <span className={`font-medium text-sm ${isActive ? 'text-blue-700 dark:text-blue-300' : 'text-muted-foreground'
                            }`}>
                            {service.price}
                          </span>
                        )} */}
                      </div>
                      {/* Flecha */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-300 ${isActive ? "rotate-180 text-blue-600 dark:text-blue-300" : "text-muted-foreground"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Contenido */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className={`px-6 pb-4 pt-2 ${isActive
                        ? "bg-blue-50/50 dark:bg-blue-900/10"
                        : "bg-background dark:bg-gray-800"
                        } space-y-3`}>
                        <p className="text-base text-muted-foreground leading-relaxed dark:text-gray-300">
                          {service.description}
                        </p>

                        {/* Datos adicionales */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          {service.duration && (
                            <div className="flex items-center gap-2">
                              <FaClock className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                              <span className="text-muted-foreground dark:text-gray-300">Duración: {service.duration}</span>
                            </div>
                          )}
                          {service.warranty && (
                            <div className="flex items-center gap-2">
                              <FaShieldAlt className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                              <span className="text-muted-foreground dark:text-gray-300">Garantía: {service.warranty}</span>
                            </div>
                          )}
                          {service.delivery && (
                            <div className="flex items-center gap-2">
                              <FaTools className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                              <span className="text-muted-foreground dark:text-gray-300">Entrega: {service.delivery}</span>
                            </div>
                          )}
                          {service.highlight && (
                            <div className="flex items-center gap-2">
                              <FaCheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-green-600 font-medium">{service.highlight}</span>
                            </div>
                          )}
                        </div>

                        {/* Incluye */}
                        {service.includes && service.includes.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-foreground dark:text-white mb-2 flex items-center gap-2">
                              <FaCheckCircle className="h-4 w-4 text-blue-600" />
                              Incluye:
                            </h4>
                            <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                              {service.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Marcas */}
                        {service.brands && service.brands.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-foreground dark:text-white mb-2">
                              Marcas disponibles:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.brands.map((brand, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 rounded-full"
                                >
                                  {brand}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 max-w-3xl mx-auto">
              <CardContent className="pt-12 pb-12 text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold">¿Listo para proteger tu propiedad?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Contáctanos hoy y recibe una cotización gratuita para tu sistema de seguridad personalizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contacto">Solicitar Cotización</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">Volver al Inicio</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>
    </LayoutWrapper>
  )
}

