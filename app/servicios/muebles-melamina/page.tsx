"use client"

import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaCouch, FaRulerCombined, FaHammer, FaCheckCircle, FaBed, FaLaptop, FaBath, FaDoorClosed, FaChild, FaStore, FaImages } from "react-icons/fa"
import { GiKitchenKnives } from "react-icons/gi";

import Link from "next/link"
import { useEffect, useState } from "react"
import { colorPalettes, features, proceso, services } from "./dataMueble"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

// Galería de imágenes con categorías
const galleryImages = [
  {
    "id": 1,
    "titulo": "Escritorio moderno con estantería integrada",
    "descripcion": "Escritorio de diseño minimalista con espacio de trabajo, cajones y estantería abierta para libros y accesorios.",
    "categoria": "Oficina & Estudio",
    "alt": "Escritorio moderno con estantería y cajones en madera clara y blanco",
    "urlImage": "/muebles/mueble01.png"
  },
  {
    "id": 2,
    "titulo": "Mueble TV bajo con iluminación LED",
    "descripcion": "Mueble de entretenimiento con acabado en madera y blanco, iluminación ambiental y espacio para televisión y consolas.",
    "categoria": "Sala & Entretenimiento",
    "alt": "Mueble TV moderno con iluminación LED y diseño bajo",
    "urlImage": "/muebles/mueble02.png"
  },
  {
    "id": 3,
    "titulo": "Cocina completa con gabinetes y electrodomésticos integrados",
    "descripcion": "Cocina modular con gabinetes blancos, encimera de mármol, horno y lavavajillas integrados, ideal para espacios modernos.",
    "categoria": "Cocina & Comedor",
    "alt": "Cocina moderna con gabinetes blancos y electrodomésticos integrados",
    "urlImage": "/muebles/mueble03.png"
  },
  {
    "id": 4,
    "titulo": "Closet con puertas correderas y organización interna",
    "descripcion": "Armario de vestidor con puertas correderas en madera clara, estantes, cajones y varilla para colgar ropa.",
    "categoria": "Dormitorio & Vestidor",
    "alt": "Closet moderno con puertas correderas y organización interna",
    "urlImage": "/muebles/mueble04.png"
  },
  {
    "id": 5,
    "titulo": "Librería abierta con estantes y decoración",
    "descripcion": "Estantería de madera con múltiples niveles para libros, plantas y objetos decorativos, ideal para salas o estudios.",
    "categoria": "Sala & Decoración",
    "alt": "Librería abierta moderna con libros y plantas decorativas",
    "urlImage": "/muebles/mueble05.png"
  },
  {
    "id": 6,
    "titulo": "Mueble de recepción o barra alta moderna",
    "descripcion": "Mueble de mostrador con acabado en blanco mate y base de madera, ideal para oficinas, cafeterías o recibidores.",
    "categoria": "Comercial & Oficina",
    "alt": "Mueble de recepción moderno con superficie blanca y base de madera",
    "urlImage": "/muebles/mueble06.png"
  },
  {
    "id": 7,
    "titulo": "Mesa de centro de madera con patas metálicas",
    "descripcion": "Mesa de centro con tablero de madera y patas delgadas en metal, perfecta para salas contemporáneas.",
    "categoria": "Sala & Entretenimiento",
    "alt": "Mesa de centro moderna con madera y patas metálicas",
    "urlImage": "/muebles/mueble07.png"
  },
  {
    "id": 8,
    "titulo": "Aparador de madera oscura con patas metálicas",
    "descripcion": "Credenza o aparador con puertas lisas en madera oscura y estructura metálica, ideal para salas o comedor.",
    "categoria": "Sala & Decoración",
    "alt": "Aparador moderno de madera oscura con patas metálicas",
    "urlImage": "/muebles/mueble08.png"
  },
  {
    "id": 9,
    "titulo": "Mesa de comedor con sillas de diseño escandinavo",
    "descripcion": "Juego de comedor con mesa rectangular y sillas con asiento tapizado y estructura de madera, ideal para cocina o comedor.",
    "categoria": "Cocina & Comedor",
    "alt": "Mesa de comedor con sillas escandinavas y diseño minimalista",
    "urlImage": "/muebles/mueble09.png"
  },
  {
    "id": 10,
    "titulo": "Cómoda con cajones multicolor y patas delgadas",
    "descripcion": "Cómoda de estilo retro con cajones pintados en colores pastel y patas finas, ideal para dormitorios juveniles o decoración.",
    "categoria": "Dormitorio & Decoración",
    "alt": "Cómoda con cajones de colores pastel y diseño retro",
    "urlImage": "/muebles/mueble010.png"
  },
  {
    "id": 11,
    "titulo": "Consola o repisa flotante para entrada o pasillo",
    "descripcion": "Repisa delgada y flotante con soporte minimalista, ideal para colocar objetos decorativos en entradas o pasillos.",
    "categoria": "Entrada & Decoración",
    "alt": "Consola flotante moderna para entrada o pasillo con objetos decorativos",
    "urlImage": "/muebles/mueble011.png"
  },
  {
    "id": 12,
    "titulo": "Mesita de noche moderna junto a cama",
    "descripcion": "Mesita de noche con cajón y superficie plana, ideal para lámpara, libros o reloj, con diseño limpio y funcional.",
    "categoria": "Dormitorio & Descanso",
    "alt": "Mesita de noche moderna junto a cama con cajón y superficie limpia",
    "urlImage": "/muebles/mueble012.png"
  }
];

const galleryCategories = [
  "Todas",
  "Oficina & Estudio",
  "Sala & Entretenimiento",
  "Cocina & Comedor",
  "Dormitorio & Vestidor",
  "Sala & Decoración",
  "Comercial & Oficina",
  "Dormitorio & Decoración",
  "Entrada & Decoración",
  "Dormitorio & Descanso"
];


export default function MueblesMelaminaPage() {
  const [currentColorPalette, setCurrentColorPalette] = useState(0);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Cambia la paleta cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorPalette((prev) => (prev + 1) % colorPalettes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Íconos por tipo de servicio
  const getIcon = (id: string) => {
    switch (id) {
      case "muebles-cocina":
        return GiKitchenKnives;
      case "muebles-dormitorio":
        return FaBed;
      case "muebles-oficina":
        return FaLaptop;
      case "muebles-sala":
        return FaCouch;
      case "muebles-bano":
        return FaBath;
      case "closets-empotrados":
        return FaDoorClosed;
      case "muebles-infantiles":
        return FaChild;
      case "muebles-comerciales":
        return FaStore;
      default:
        return FaCouch;
    }
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
        <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-linear-to-b from-secondary/20 to-background bg-amber-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-30 h-30 rounded-full bg-linear-to-br from-amber-500 to-amber-700 mb-6">
                <FaCouch className="h-20 w-20 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Muebles de <span className="text-primary">Melamina</span>
              </h1>
              <p className="sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Diseño, fabricación e instalación de muebles personalizados. Transformamos tus espacios con soluciones a medida de alta calidad.
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
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-amber-500 rounded-full"></span>
                
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
                      from-amber-50/80 to-amber-100/60 text-amber-800
                      dark:from-amber-900/90 dark:to-amber-800/80 dark:text-amber-100
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
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-amber-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Calidad profesional y diseño personalizado para cada proyecto
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const color = colorPalettes[currentColorPalette][index] || colorPalettes[0][index];

                return (
                  <Card
                    key={feature.id}
                    className={`
                      group 
                      backdrop-blur-sm 
                      border 
                      border-border/30 
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
                      <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4 dark:bg-amber-900/20">
                        <Icon className="h-6 w-6 text-amber-700 dark:text-amber-200" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-amber-800 dark:text-amber-800">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-gray-600">
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
        <section className="py-16 sm:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">

              <h2 className="text-3xl sm:text-4xl font-bold relative inline-block mb-6">
                Tipos de Muebles
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-amber-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soluciones para cada espacio de tu hogar u oficina
              </p>
            </div>

            <div className="max-w-5xl mx-auto w-full">
              {services.map((service, index) => {
                const Icon = getIcon(service.id);
                const isActive = openIndex === index;

                return (
                  <div
                    key={service.id}
                    className={`border rounded-xl overflow-hidden mb-3 last:mb-0 transition-all duration-300 ${isActive
                      ? "border-amber-500 shadow-md"
                      : "border-border/50 hover:border-border/70"
                      }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isActive
                        ? "bg-amber-50 text-amber-800 font-medium dark:bg-amber-900/20 dark:text-amber-200"
                        : "bg-background hover:bg-secondary/50 dark:hover:bg-gray-800/50"
                        }`}
                      aria-expanded={isActive}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${isActive ? 'text-amber-600' : 'text-muted-foreground'} dark:text-amber-300`} />
                        <span className="uppercase text-lg font-semibold">
                          {service.title}
                        </span>
                        {/* {service.price && (
                          <span className={`font-medium text-sm ${isActive ? 'text-amber-700 dark:text-amber-300' : 'text-muted-foreground'
                            }`}>
                            {service.price}
                          </span>
                        )} */}
                      </div>
                      {/* Flecha */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-300 ${isActive ? "rotate-180 text-amber-600 dark:text-amber-300" : "text-muted-foreground"
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
                        ? "bg-amber-50/50 dark:bg-amber-900/10"
                        : "bg-background dark:bg-gray-800"
                        } space-y-3`}>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        {/* Datos adicionales en grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          {service.duration && (
                            <div className="flex items-center gap-2">
                              <FaRulerCombined className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Tiempo: {service.duration}</span>
                            </div>
                          )}
                          {service.highlight && (
                            <div className="flex items-center gap-2">
                              <FaCheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-green-600 font-medium">{service.highlight}</span>
                            </div>
                          )}
                          {service.materials && (
                            <div className="flex items-start gap-2">
                              <FaHammer className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div>
                                <span className="text-muted-foreground block">Materiales:</span>
                                <span className="text-foreground">{service.materials.join(", ")}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Incluye */}
                        {service.includes && service.includes.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                              <FaCheckCircle className="h-4 w-4 text-amber-600" />
                              Incluye:
                            </h4>
                            <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-muted-foreground">
                              {service.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
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

        {/* Process */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold relative inline-block mb-6">
                Nuestro Proceso
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-amber-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trabajamos paso a paso para garantizar resultados excepcionales
              </p>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {proceso.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  {/* Tarjeta con efecto de elevación */}
                  <Card className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm border border-amber-200/30 dark:border-amber-900/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 w-full">
                    <CardContent className="pt-8 pb-6 px-4 text-center">
                      {/* Ícono en círculo con degradado */}
                      <div className={`w-16 h-16 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center mx-auto mb-5 shadow-md`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Paso numerado (opcional, ya está en el ícono) */}
                  <span className="absolute -top-3 bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 max-w-3xl mx-auto">
              <CardContent className="pt-12 pb-12 text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold">¿Listo para transformar tus espacios?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Contáctanos hoy y recibe una cotización gratuita para tus muebles personalizados.
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

