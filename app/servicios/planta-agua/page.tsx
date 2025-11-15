"use client"

import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FaTint, FaTruck, FaClock, FaCheckCircle,
  FaDropbox, FaWater, FaHome, FaBuilding,
  FaImages
} from "react-icons/fa"
import Link from "next/link"
import { useEffect, useState } from "react"
import { beneficios, colorPalettes, features, services } from "./dataPlantaAgua"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Galería de imágenes con categorías
const galleryImages = [
  {
    "id": 1,
    "titulo": "Línea de producción automática de envasado",
    "descripcion": "Cinta transportadora con botellas avanzando en proceso de llenado y sellado, bajo iluminación industrial azul.",
    "categoria": "Línea de Producción",
    "alt": "Línea de producción automática de envasado de agua con botellas en movimiento",
    "urlImage": "./planta/planta01.png"
  },
  {
    "id": 2,
    "titulo": "Operario ajustando botellas en máquina de envasado",
    "descripcion": "Técnico en uniforme blanco y casco supervisando el proceso de llenado de botellas en una máquina industrial.",
    "categoria": "Operación & Control",
    "alt": "Operario ajustando botellas en máquina de envasado con guantes y casco",
    "urlImage": "./planta/planta02.png"
  },
  {
    "id": 3,
    "titulo": "Línea de envasado con botellas en proceso",
    "descripcion": "Vista panorámica de una línea de envasado con múltiples botellas siendo llenadas, tapadas y etiquetadas.",
    "categoria": "Línea de Producción",
    "alt": "Línea de envasado de agua con botellas en proceso de llenado y etiquetado",
    "urlImage": "./planta/planta03.png"
  },
  {
    "id": 4,
    "titulo": "Laboratorio de calidad con técnicos analizando muestras",
    "descripcion": "Equipo de laboratorio realizando pruebas de calidad del agua en frascos y equipos especializados.",
    "categoria": "Calidad & Laboratorio",
    "alt": "Laboratorio de calidad con técnicos analizando muestras de agua en frascos",
    "urlImage": "./planta/planta04.png"
  },
  {
    "id": 5,
    "titulo": "Almacén con paletas de botellas y montacargas",
    "descripcion": "Área de almacenamiento con estanterías altas, paletas de botellas empacadas y montacargas en operación.",
    "categoria": "Almacenamiento & Logística",
    "alt": "Almacén de botellas con montacargas y estanterías altas",
    "urlImage": "./planta/planta05.png"
  },
  {
    "id": 6,
    "titulo": "Área de carga y descarga de camiones",
    "descripcion": "Plataforma de carga con camiones estacionados, trabajadores manejando paletas y preparando envíos.",
    "categoria": "Logística & Distribución",
    "alt": "Área de carga y descarga de camiones con trabajadores y paletas de botellas",
    "urlImage": "./planta/planta06.png"
  },
  {
    "id": 7,
    "titulo": "Tanques y tuberías de tratamiento de agua",
    "descripcion": "Sistema de tanques y tuberías industriales para purificación y tratamiento del agua antes del envasado.",
    "categoria": "Tratamiento & Purificación",
    "alt": "Tanques y tuberías de tratamiento de agua en planta industrial",
    "urlImage": "./planta/planta07.png"
  },
  {
    "id": 8,
    "titulo": "Sala de control con monitores y operadores",
    "descripcion": "Centro de control con pantallas LED, operadores supervisando procesos en tiempo real y sistemas automatizados.",
    "categoria": "Control & Automatización",
    "alt": "Sala de control con monitores y operadores supervisando procesos de planta",
    "urlImage": "./planta/planta08.png"
  },
  {
    "id": 9,
    "titulo": "Técnico revisando sistema de filtración",
    "descripcion": "Ingeniero en traje azul inspeccionando filtros y válvulas en un sistema de purificación de agua.",
    "categoria": "Mantenimiento & Filtración",
    "alt": "Técnico revisando sistema de filtración de agua con herramientas y tablet",
    "urlImage": "./planta/planta09.png"
  },
  {
    "id": 10,
    "titulo": "Fuente natural de agua con captación sostenible",
    "descripcion": "Captación de agua desde río o manantial natural, con infraestructura moderna y compromiso ambiental.",
    "categoria": "Captación & Sostenibilidad",
    "alt": "Fuente natural de agua con captación sostenible y estructura moderna",
    "urlImage": "./planta/planta010.png"
  },
  {
    "id": 11,
    "titulo": "Trabajadores inspeccionando equipo industrial",
    "descripcion": "Equipo técnico en chalecos naranjas revisando maquinaria de producción y asegurando su funcionamiento óptimo.",
    "categoria": "Operación & Mantenimiento",
    "alt": "Trabajadores inspeccionando equipo industrial en planta de envasado",
    "urlImage": "./planta/planta011.png"
  },
  {
    "id": 12,
    "titulo": "Sistema de esterilización UV con luces azules",
    "descripcion": "Unidad de esterilización con luz ultravioleta para desinfectar botellas y garantizar la pureza del agua.",
    "categoria": "Esterilización & Seguridad",
    "alt": "Sistema de esterilización UV con luces azules para desinfección de botellas",
    "urlImage": "./planta/planta012.png"
  },
  {
    "id": 13,
    "titulo": "Laboratorio con microscopios y análisis de calidad",
    "descripcion": "Laboratoristas realizando pruebas microbiológicas y químicas en muestras de agua para cumplir estándares de calidad.",
    "categoria": "Calidad & Laboratorio",
    "alt": "Laboratorio con microscopios y análisis de calidad del agua",
    "urlImage": "./planta/planta013.png"
  },
  {
    "id": 14,
    "titulo": "Sistema de ósmosis inversa para purificación",
    "descripcion": "Equipos de ósmosis inversa y filtración avanzada para eliminar impurezas y minerales del agua antes del envasado.",
    "categoria": "Tratamiento & Purificación",
    "alt": "Sistema de ósmosis inversa para purificación de agua en planta industrial",
    "urlImage": "./planta/planta014.png"
  }
]

const galleryCategories = [
  "Todas",
  "Línea de Producción",
  "Operación & Control",
  "Calidad & Laboratorio",
  "Almacenamiento & Logística",
  "Logística & Distribución",
  "Tratamiento & Purificación",
  "Control & Automatización",
  "Mantenimiento & Filtración",
  "Captación & Sostenibilidad",
  "Esterilización & Seguridad",
  "Operación & Mantenimiento"
];


export default function PlantaAguaPage() {
  const [currentColorPalette, setCurrentColorPalette] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beneficios.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Íconos por tipo de servicio
  const getIcon = (id: string) => {
    switch (id) {
      case "venta-agua": return FaDropbox;
      case "abastecimiento-regular": return FaClock;
      case "servicio-domicilio": return FaTruck;
      case "servicio-empresarial": return FaBuilding;
      case "eventos": return FaHome;
      case "dispensadores": return FaWater;
      default: return FaTint;
    }
  };


  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beneficios.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Control manual con flechas
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beneficios.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beneficios.length) % beneficios.length);
  };

  // Scroll automático al cambiar slide
  useEffect(() => {
    const container = document.getElementById('beneficios-carousel');
    if (container) {
      const cardWidth = 200; // Ancho fijo de cada tarjeta
      const offset = currentSlide * cardWidth;
      container.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [currentSlide]);

  // Gestión de arrastre (opcional)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (document.getElementById('beneficios-carousel')?.offsetLeft || 0));
    setScrollLeft(document.getElementById('beneficios-carousel')?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (document.getElementById('beneficios-carousel')?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    const container = document.getElementById('beneficios-carousel');
    if (container) {
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
        <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-linear-to-b from-secondary/20 to-background bg-cyan-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-30 h-30 rounded-full bg-linear-to-br from-cyan-500 to-cyan-700 mb-6">
                <FaTint className="h-20 w-20 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Planta de <span className="text-primary">Agua Potable</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Servicio y abastecimiento de agua potable de calidad. Garantizamos pureza, calidad y suministro continuo para tu hogar o empresa.
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
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-cyan-500 rounded-full"></span>
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
                      from-cyan-50/80 to-cyan-100/60 text-cyan-800
                      dark:from-cyan-900/90 dark:to-cyan-800/80 dark:text-cyan-100
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
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-cyan-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Agua de la más alta calidad con proceso de purificación certificado
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
                      <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 dark:bg-cyan-900/20">
                        <Icon className="h-6 w-6 text-cyan-700 dark:text-cyan-200" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-cyan-800 dark:text-cyan-800">
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
                Nuestros Servicios
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-cyan-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soluciones completas para todas tus necesidades de agua potable
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
                      ? "border-cyan-500 shadow-md"
                      : "border-border/50 hover:border-border/70"
                      }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isActive
                        ? "bg-cyan-50 text-cyan-800 font-medium dark:bg-cyan-900/20 dark:text-cyan-200"
                        : "bg-background hover:bg-secondary/50 dark:hover:bg-gray-800/50"
                        }`}
                      aria-expanded={isActive}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${isActive ? 'text-cyan-600' : 'text-muted-foreground'} dark:text-cyan-300`} />
                        <span className="uppercase text-lg font-semibold">
                          {service.title}
                        </span>
                        {/* {service.price && (
                          <span className={`font-medium text-sm ${
                            isActive ? 'text-cyan-700 dark:text-cyan-300' : 'text-muted-foreground'
                          }`}>
                            {service.price}
                          </span>
                        )} */}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-300 ${isActive ? "rotate-180 text-cyan-600 dark:text-cyan-300" : "text-muted-foreground"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className={`px-6 pb-4 pt-2 ${isActive
                        ? "bg-cyan-50/50 dark:bg-cyan-900/10"
                        : "bg-background dark:bg-gray-800"
                        } space-y-3`}>
                        <p className="text-base text-muted-foreground leading-relaxed dark:text-gray-300">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          {service.duration && (
                            <div className="flex items-center gap-2">
                              <FaClock className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                              <span className="text-muted-foreground dark:text-gray-300">Tiempo: {service.duration}</span>
                            </div>
                          )}
                          {service.highlight && (
                            <div className="flex items-center gap-2">
                              <FaCheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-green-600 font-medium">{service.highlight}</span>
                            </div>
                          )}
                          {service.delivery && (
                            <div className="flex items-center gap-2">
                              <FaTruck className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                              <span className="text-muted-foreground dark:text-gray-300">Entrega: {service.delivery}</span>
                            </div>
                          )}
                        </div>

                        {service.includes && service.includes.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-foreground dark:text-white mb-2 flex items-center gap-2">
                              <FaCheckCircle className="h-4 w-4 text-cyan-600" />
                              Incluye:
                            </h4>
                            <ul className="list-disc list-inside pl-2 space-y-1 text-sm text-muted-foreground dark:text-gray-300">
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



        <section className="py-16 sm:py-20 relative overflow-hidden">
          {/* Fondo decorativo sutil */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-50/30 to-blue-50/30 -z-10 dark:from-cyan-900/10 dark:to-blue-900/10"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold relative inline-block mb-6">
                Beneficios de Nuestro Servicio
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1.5 bg-cyan-500 rounded-full"></span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Calidad, confianza y servicio excepcional en cada gota de agua que entregamos.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Flecha izquierda */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Beneficio anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Contenedor del carrusel */}
              <div
                id="beneficios-carousel"
                className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-6 py-6 px-4"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
              >
                {beneficios.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      // className="snap-start shrink-0 w-[calc((100%-24px)/3)]"
                      className="snap-start shrink-0 w-full sm:w-[calc((100%-24px)/2)] md:w-[calc((100%-24px)/3)]"
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-800/30 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 rounded-full bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
                          {benefit.description}
                        </p>
                      </Card>
                    </div>
                  );
                })}
              </div>

              {/* Flecha derecha */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Siguiente beneficio"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {beneficios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    aria-label={`Ir al beneficio ${index + 1}`}
                  />
                ))}
              </div>
            </div>


          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 max-w-3xl mx-auto">
              <CardContent className="pt-12 pb-12 text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold">¿Listo para garantizar tu suministro de agua?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Contáctanos hoy y recibe información sobre nuestros planes de abastecimiento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contacto">Solicitar Información</Link>
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
  );
}
