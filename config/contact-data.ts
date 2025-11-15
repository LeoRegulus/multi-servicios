import { FaFacebook, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaPhone, FaWhatsapp, FaClock } from "react-icons/fa"

export const contactData = {
  personal: {
    name: "Multi Servicios",
    email: "ejemplo@mail.com",
    phone: "+51 999 999 999",
    whatsapp: "+51 999 999 999",
    location: "Huancayo, Perú",
    address: "Av. Principal 123, Huancayo, Perú",
    languages: ["Español", "Inglés"],
    availability: "Atención de Lunes a Sábado",
    schedule: {
      weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
      saturday: "Sábado: 8:00 AM - 2:00 PM",
      sunday: "Domingo: Cerrado",
    },
    bio: "Servicios profesionales de calidad: seguridad, carpintería y abastecimiento de agua potable.",
  },
  contact: {
    email: "ejemplo@mail.com",
    phone: "+51 999 999 999",
    whatsapp: "+51 999 999 999",
    whatsappUrl: "https://wa.me/51999999999",
    address: "Av. Principal 123, Huancayo, Perú",
    location: "Huancayo, Perú",
  },
  social: [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: FaFacebook,
      color: "#1877f2", // Color oficial de Facebook
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/51999999999",
      icon: FaWhatsapp,
      color: "#25d366", // Color oficial de WhatsApp
    },
  ],
  contactInfo: [
    {
      icon: FaMapMarkerAlt,
      label: "Ubicación",
      value: "Av. Principal 123, Huancayo, Perú",
      link: "https://maps.google.com/?q=Huancayo+Peru",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ejemplo@mail.com",
      link: "mailto:ejemplo@mail.com",
    },
    {
      icon: FaPhone,
      label: "Teléfono",
      value: "+51 999 999 999",
      link: "tel:+51999999999",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+51 999 999 999",
      link: "https://wa.me/51999999999",
    },
    {
      icon: FaClock,
      label: "Horario",
      value: "Lun-Vie: 8:00 AM - 6:00 PM",
      link: null,
    },
  ],
  benefits: [
    "Trabajos realizados con materiales de primera calidad",
    "Atención personalizada y comunicación constante",
    "Entrega puntual y cumplimiento de plazos",
    "Servicio post-venta y garantía en nuestros trabajos",
  ],
  quickLinks: [
    { label: "Inicio", href: "/" },
    // { label: "Servicios", href: "/servicios" },
    { label: "Sobre Nosotros", href: "/sobre-nosotros" },
    { label: "Contacto", href: "/contacto" },
  ],
}
