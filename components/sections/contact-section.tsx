"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { contactData } from "@/config/contact-data"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido"
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido"
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Aquí iría tu lógica de envío (API, Formspree, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error al enviar:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block">
            Contacto
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-linear-to-r from-primary to-accent rounded-full"></span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact info */}

          <div className="space-y-4 sm:space-y-6">
            {contactData.contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = (
                <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-blue-700 dark:hover:border-blue-400 transition-all mb-1.5">
                  <CardHeader className="">
                    <div className="group flex items-center gap-1">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                        <Icon className="h-5 w-5 text-primary group-hover:text-primary/60" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-base sm:text-lg">{info.label}</CardTitle>
                        <CardDescription className="text-sm truncate">{info.value}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )

              if (info.link) {
                return (
                  <Link key={index} href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {content}
                  </Link>
                )
              }

              return <div key={index}>{content}</div>
            })}

            <div className="pt-4 sm:pt-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4">¿Por qué trabajar con nosotros?</h3>
              <ul className="space-y-3">
                {contactData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <Card className="bg-card/50 backdrop-blur border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Envíame un mensaje</CardTitle>
              <CardDescription className="text-sm">
                Completa el formulario y te responderé lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitSuccess ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPaperPlane className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">Gracias por contactarnos. Te responderemos pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={contactData.contact.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 bg-linear-to-r from-blue-800 to-blue-400 hover:from-teal-800 hover:to-teal-400 border-2 hover:border-gray-700 dark:hover:border-gray-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Google Maps */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Nuestra Ubicación</h3>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              {/* <FaMapMarkerAlt className="text-red-500" />
              {contactData.contact.address} */}
              Estamos aquí para atenderte — ven y descúbrenos en el mapa
            </p>
          </div>
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl border border-border/50 bg-gray-100 dark:bg-gray-800">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(contactData.contact.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Multi Servicios"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 text-center">
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline hover:text-blue-500 font-medium"
            >
              <FaMapMarkerAlt className="h-4 w-4 text-red-500" />
              Ver en Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}