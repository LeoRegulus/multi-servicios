"use client"

import { FaBriefcase, FaCheckCircle, FaAward, FaCamera, FaCouch, FaTint, FaUserTie, FaHandshake, FaStar, FaShieldAlt, FaLightbulb, FaSyncAlt, FaHeadset } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { contactData } from "@/config/contact-data"

// Áreas de servicio con colores específicos
const serviceAreas = [
  {
    icon: FaCamera,
    title: "Seguridad",
    description: "Especialistas en instalación de sistemas de videovigilancia y seguridad para proteger tu hogar o negocio.",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: FaCouch,
    title: "Carpintería",
    description: "Diseño y fabricación de muebles de melamina personalizados con acabados de calidad profesional.",
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    icon: FaTint,
    title: "Agua Potable",
    description: "Servicio confiable de abastecimiento de agua purificada con los más altos estándares de calidad.",
    color: "from-cyan-500 to-cyan-700",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400"
  },
]

const values = [
  {
    icon: FaStar,
    title: "Calidad",
    description: "Trabajamos solo con productos y materiales de la más alta calidad para garantizar durabilidad y satisfacción.",
    color: "text-primary"
  },
  {
    icon: FaUserTie,
    title: "Profesionalismo",
    description: "Equipo técnico capacitado y certificado para brindar servicios confiables y de excelencia.",
    color: "text-primary"
  },
  {
    icon: FaHandshake,
    title: "Compromiso",
    description: "Cumplimos con los plazos acordados y nos aseguramos de que cada proyecto supere las expectativas.",
    color: "text-primary"
  },
  {
    icon: FaCheckCircle,
    title: "Atención Personalizada",
    description: "Cada cliente recibe atención personalizada con soluciones adaptadas a sus necesidades específicas.",
    color: "text-primary"
  },
  {
    icon: FaShieldAlt,
    title: "Seguridad",
    description: "Implementamos medidas robustas de ciberseguridad y protección física (como cámaras de vigilancia) para salvaguardar tu entorno digital y físico.",
    color: "text-primary"
  },
  {
    icon: FaLightbulb,
    title: "Innovación",
    description: "Exploramos constantemente nuevas tecnologías y enfoques para ofrecer soluciones eficientes, modernas y escalables.",
    color: "text-primary"
  },
  {
    icon: FaSyncAlt,
    title: "Soporte Continuo",
    description: "No terminamos cuando finaliza la instalación: ofrecemos mantenimiento, actualizaciones y asesoría técnica post-venta.",
    color: "text-primary"
  },
  {
    icon: FaHeadset,
    title: "Accesibilidad",
    description: "Estamos disponibles para resolver dudas, emergencias o consultas técnicas con claridad y empatía, incluso para usuarios no técnicos.",
    color: "text-primary"
  }
];

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/10 to-background -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block">
            Sobre Nosotros
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-linear-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Más de 10 años brindando soluciones integrales con calidad y profesionalismo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Contact Info - Estilo moderno */}
          <div>
            <Card className="bg-card/60 backdrop-blur border border-border/50 overflow-hidden">
              <div className="bg-linear-to-r from-primary/10 to-accent/10 px-4 py-3 border-b border-border/30">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <FaBriefcase className="h-4 w-4" />
                  Información de Contacto
                </h3>
              </div>
              <CardContent className="pt-4 space-y-4">
                {contactData.contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const content = (
                    <div className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-4 w-4 text-primary group-hover:text-primary/80" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">{info.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )

                  if (info.link) {
                    return (
                      <a 
                        key={index} 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'} 
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    )
                  }
                  return <div key={index}>{content}</div>
                })}
              </CardContent>
            </Card>
          </div>

          {/* Perfil Profesional */}
          <div className="lg:col-span-2">
            <Card className="bg-card/60 backdrop-blur border border-border/50 overflow-hidden">
              <div className="bg-linear-to-r from-primary/10 to-accent/10 px-4 py-3 border-b border-border/30">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <FaUserTie className="h-4 w-4" />
                  Perfil Profesional
                </h3>
              </div>
              <CardContent className="pt-6 space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Somos una empresa dedicada a brindar servicios integrales de calidad para hogares y negocios. Con más de
                  <span className="font-semibold text-primary"> 10 años de experiencia</span>, nos especializamos en tres áreas principales: 
                  sistemas de seguridad, fabricación de muebles y abastecimiento de agua potable.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Nuestro compromiso es ofrecer soluciones personalizadas, productos de calidad y un servicio al cliente excepcional.
                  Trabajamos con profesionalismo, puntualidad y atención a los detalles para superar las expectativas de nuestros clientes.
                </p>
                
                {/* Estadísticas destacadas */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/30 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">Años de Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Proyectos Completados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">300+</div>
                    <div className="text-xs text-muted-foreground">Clientes Satisfechos</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center">
              <FaAward className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Áreas de Servicio</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div key={index}>
                  <Card className={`bg-card/50 backdrop-blur border border-border/50 overflow-hidden group hover:shadow-xl transition-all duration-300 ${area.bgColor}`}>
                    <div className={`h-2 bg-linear-to-r ${area.color}`}></div>
                    <CardHeader className="pb-4 pt-6 px-6">
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 flex items-center justify-center mb-4 border border-border/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`h-7 w-7 ${area.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">{area.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {area.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center">
              <FaCheckCircle className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Nuestros Valores</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index}>
                  <Card className="bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className={`h-5 w-5 ${value.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {value.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}