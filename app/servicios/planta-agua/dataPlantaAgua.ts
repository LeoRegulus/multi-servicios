import { FaCheckCircle, FaClock, FaDropbox, FaFlask, FaLeaf, FaPhoneAlt, FaRecycle, FaShieldAlt, FaTruck, FaUserFriends } from "react-icons/fa";

export const features = [
    {
        id: "agua-purificada",
        icon: FaFlask,
        title: "Agua Purificada",
        description: "Proceso de purificación avanzado que garantiza agua 100% pura y segura para consumo"
    },
    {
        id: "control-calidad",
        icon: FaShieldAlt,
        title: "Control de Calidad",
        description: "Estrictos controles de calidad en cada etapa del proceso de purificación"
    },
    {
        id: "servicio-domicilio",
        icon: FaTruck,
        title: "Servicio a Domicilio",
        description: "Entrega regular y puntual directamente a tu hogar o empresa"
    },
    {
        id: "abastecimiento-continuo",
        icon: FaClock,
        title: "Abastecimiento Continuo",
        description: "Garantizamos suministro continuo para que nunca te falte agua potable"
    },
    {
        id: "diferentes-capacidades",
        icon: FaDropbox,
        title: "Diferentes Capacidades",
        description: "Botellones desde 5 litros hasta 20 litros según tus necesidades"
    },
    {
        id: "certificaciones",
        icon: FaCheckCircle,
        title: "Certificaciones",
        description: "Cumplimos con todas las normativas sanitarias y de calidad vigentes"
    },
    {
        id: "eco-friendly",
        icon: FaLeaf,
        title: "Eco-Friendly",
        description: "Botellones retornables y sistema de reciclaje para reducir impacto ambiental"
    },
    {
        id: "atencion-personalizada",
        icon: FaUserFriends,
        title: "Atención Personalizada",
        description: "Asesoría y soporte continuo para adaptarnos a tus necesidades específicas"
    }
];

export const services = [
    {
        id: "venta-agua",
        title: "Venta de Agua Potable",
        description: "Venta de botellones de agua purificada en diferentes capacidades.",
        price: "Desde $2.50",
        duration: "Entrega en 24h",
        includes: ["Botellones 5L, 10L, 20L", "Agua purificada", "Certificado de calidad"],
        delivery: "Domicilio o retiro en planta",
        highlight: "¡Precios por volumen!"
    },
    {
        id: "abastecimiento-regular",
        title: "Abastecimiento Regular",
        description: "Servicio de entrega programada semanal o mensual según tu consumo.",
        price: "Planes desde $20/mes",
        duration: "Contrato mensual",
        includes: ["Entrega programada", "Descuentos por fidelidad", "Facturación electrónica"],
        delivery: "Domicilio incluido",
        highlight: "Ideal para familias"
    },
    {
        id: "servicio-domicilio",
        title: "Servicio a Domicilio",
        description: "Entrega directa a tu hogar o empresa sin costo adicional en zonas establecidas.",
        price: "Gratis en zonas urbanas",
        duration: "Mismo día (hasta 3pm)",
        includes: ["Entrega sin contacto", "Horarios flexibles", "Notificación por SMS"],
        delivery: "Presencial",
        highlight: "Sin costo adicional"
    },
    {
        id: "servicio-empresarial",
        title: "Servicio Empresarial",
        description: "Abastecimiento de agua potable para oficinas, restaurantes y empresas.",
        price: "Cotización personalizada",
        duration: "Contrato trimestral",
        includes: ["Dispensadores incluidos", "Mantenimiento gratuito", "Reportes de consumo"],
        delivery: "Domicilio diario/semanal",
        highlight: "Soluciones corporativas"
    },
    {
        id: "eventos",
        title: "Agua para Eventos",
        description: "Suministro de agua potable para bodas, fiestas, conferencias y eventos especiales.",
        price: "Desde $50/evento",
        duration: "Reserva con 48h de anticipación",
        includes: ["Botellones decorativos", "Vasos ecológicos", "Personal de apoyo"],
        delivery: "Instalación en evento",
        highlight: "¡Hacemos tu evento más fresco!"
    },
    {
        id: "dispensadores",
        title: "Alquiler de Dispensadores",
        description: "Dispensadores de agua fría y caliente para tu hogar u oficina.",
        price: "$15/mes",
        duration: "Alquiler mensual",
        includes: ["Instalación gratuita", "Mantenimiento mensual", "Garantía incluida"],
        delivery: "Instalación en domicilio",
        highlight: "Agua siempre disponible"
    }
];

export const colorPalettes = [
    // Paleta 1: Cianes clásicos
    [
        { iconColorLight: "text-cyan-700", iconColorDark: "text-cyan-200", bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100" },
        { iconColorLight: "text-cyan-600", iconColorDark: "text-cyan-200", bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100" },
        { iconColorLight: "text-cyan-800", iconColorDark: "text-cyan-100", bgColor: "bg-gradient-to-br from-cyan-100 to-cyan-200" },
        { iconColorLight: "text-cyan-500", iconColorDark: "text-cyan-300", bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100" },
        { iconColorLight: "text-cyan-900", iconColorDark: "text-cyan-100", bgColor: "bg-gradient-to-br from-cyan-200 to-cyan-300" },
        { iconColorLight: "text-cyan-400", iconColorDark: "text-cyan-400", bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100" },
        { iconColorLight: "text-teal-700", iconColorDark: "text-teal-200", bgColor: "bg-gradient-to-br from-teal-50 to-teal-100" },
        { iconColorLight: "text-blue-700", iconColorDark: "text-blue-200", bgColor: "bg-gradient-to-br from-blue-50 to-blue-100" },
    ],
    // Paleta 2: Azules agua
    [
        { iconColorLight: "text-blue-700", iconColorDark: "text-blue-200", bgColor: "bg-gradient-to-br from-blue-50 to-blue-100" },
        { iconColorLight: "text-cyan-700", iconColorDark: "text-cyan-200", bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100" },
        { iconColorLight: "text-teal-700", iconColorDark: "text-teal-200", bgColor: "bg-gradient-to-br from-teal-50 to-teal-100" },
        { iconColorLight: "text-blue-600", iconColorDark: "text-blue-300", bgColor: "bg-gradient-to-br from-blue-50 to-blue-100" },
        { iconColorLight: "text-cyan-800", iconColorDark: "text-cyan-100", bgColor: "bg-gradient-to-br from-cyan-100 to-cyan-200" },
        { iconColorLight: "text-teal-800", iconColorDark: "text-teal-100", bgColor: "bg-gradient-to-br from-teal-100 to-teal-200" },
        { iconColorLight: "text-blue-800", iconColorDark: "text-blue-100", bgColor: "bg-gradient-to-br from-blue-100 to-blue-200" },
        { iconColorLight: "text-cyan-600", iconColorDark: "text-cyan-300", bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100" },
    ]
];

export const beneficios = [
    {
        title: "Agua 100% purificada",
        description: "Libre de contaminantes, bacterias y químicos dañinos.",
        icon: FaFlask
    },
    {
        title: "Proceso certificado",
        description: "Cumplimos con todas las normas sanitarias nacionales.",
        icon: FaShieldAlt
    },
    {
        title: "Entrega a domicilio",
        description: "Sin costo en zonas urbanas. ¡Llegamos hasta tu puerta!",
        icon: FaTruck
    },
    {
        title: "Horarios flexibles",
        description: "Elige el día y hora que mejor se adapte a tu rutina.",
        icon: FaClock
    },
    {
        title: "Atención personalizada",
        description: "Asesoría humana y cercana en cada interacción.",
        icon: FaUserFriends
    },
    {
        title: "Garantía de calidad",
        description: "Si no estás satisfecho, te devolvemos tu dinero.",
        icon: FaCheckCircle
    },
    {
        title: "Botellones retornables",
        description: "Sistema ecológico que reduce residuos plásticos.",
        icon: FaRecycle
    },
    {
        title: "Soporte 24/7",
        description: "Asistencia técnica disponible cualquier día del año.",
        icon: FaPhoneAlt
    }
]
