import { FaBell, FaClock, FaDraftingCompass, FaEye, FaHeadset, FaMobileAlt, FaShieldAlt, FaShoppingCart, FaTools, FaVideo, FaWifi } from "react-icons/fa";

export const features = [
    {
        id: "videovigilancia-hd",
        icon: FaVideo,
        title: "Videovigilancia HD",
        description: "Cámaras de alta definición que capturan cada detalle con claridad excepcional",
        iconColor: "text-red-700",
        bgColor: "bg-red-500/50",
    },
    {
        id: "monitoreo-remoto",
        icon: FaMobileAlt,
        title: "Monitoreo Remoto",
        description: "Accede a tus cámaras desde cualquier lugar a través de tu smartphone o tablet",
        iconColor: "text-blue-700",
        bgColor: "bg-blue-500/50",
    },
    {
        id: "sistemas-alarma",
        icon: FaShieldAlt,
        title: "Sistemas de Alarma",
        description: "Integración con sistemas de alarma para protección completa de tu propiedad",
        iconColor: "text-gray-700",
        bgColor: "bg-gray-500/50",
    },
    {
        id: "conexion-ip",
        icon: FaWifi,
        title: "Conexión IP",
        description: "Cámaras IP modernas con conectividad inalámbrica y grabación en la nube",
        iconColor: "text-green-700",
        bgColor: "bg-green-500/50",
    },
    {
        id: "grabacion-24-7",
        icon: FaClock,
        title: "Grabación 24/7",
        description: "Almacenamiento continuo de grabaciones con acceso a videos históricos",
        iconColor: "text-orange-700",
        bgColor: "bg-orange-500/50",
    },
    {
        id: "instalacion-profesional",
        icon: FaTools,
        title: "Instalación Profesional",
        description: "Instalación realizada por técnicos certificados con garantía de servicio",
        iconColor: "text-teal-700",
        bgColor: "bg-teal-500/50",
    }
];


export const services = [
    {
        id: "instalacion-camaras",
        title: "Instalación de Cámaras",
        description: "Instalación completa de sistemas de seguridad con cableado estructurado y configuración profesional.",
        price: "Desde $200",
        duration: "2-4 horas",
        warranty: "6 meses",
        includes: ["Cámaras HD", "DVR/NVR", "Cableado", "Configuración app móvil"],
        delivery: "Presencial",
        highlight: "¡Recomendado para casas y locales!",
        icon: FaVideo
    },
    {
        id: "venta-equipos",
        title: "Venta de Equipos",
        description: "Amplia variedad de cámaras de seguridad, DVRs, NVRs y accesorios de las mejores marcas.",
        price: "Consultar",
        brands: ["Dahua", "Hikvision", "TP-Link", "Xiaomi", "Ezviz", "Reolink"],
        warranty: "1 año (según marca)",
        delivery: "Retiro en tienda o envío",
        highlight: "Equipos nuevos con factura",
        icon: FaShoppingCart
    },
    {
        id: "mantenimiento",
        title: "Mantenimiento",
        description: "Servicio de mantenimiento preventivo y correctivo para mantener tu sistema funcionando óptimamente.",
        price: "Desde $50/mes",
        duration: "1 hora (preventivo)",
        includes: ["Limpieza de lentes", "Revisión de conexiones", "Actualización de firmware"],
        warranty: "30 días",
        delivery: "Presencial",
        highlight: "Evita fallas antes de que ocurran",
        icon: FaTools
    },
    {
        id: "monitoreo",
        title: "Monitoreo",
        description: "Servicio de monitoreo 24/7 con alertas en tiempo real y respuesta inmediata ante incidentes.",
        price: "Desde $30/mes",
        includes: ["Alertas por app", "Grabación en la nube", "Soporte 24/7"],
        delivery: "Remoto",
        highlight: "Protección las 24 horas",
        icon: FaEye
    },
    {
        id: "diseno-personalizado",
        title: "Diseño Personalizado",
        description: "Análisis de riesgos y diseño a medida de tu sistema de seguridad, adaptado a tu hogar o negocio.",
        price: "Desde $100",
        duration: "1-2 días",
        includes: ["Plano de ubicación", "Lista de equipos", "Presupuesto detallado"],
        delivery: "Presencial + Digital",
        highlight: "Solución 100% a tu medida",
        icon: FaDraftingCompass
    },
    {
        id: "alarmas-intrusion",
        title: "Alarmas contra Intrusión",
        description: "Sistemas de alarma con sensores de movimiento, puertas y ventanas, integrados con monitoreo 24/7.",
        price: "Desde $250",
        includes: ["Panel de control", "Sensores", "Sirena", "App móvil"],
        warranty: "1 año",
        delivery: "Presencial",
        highlight: "Detección inmediata de intrusos",
        icon: FaBell
    },
    {
        id: "soporte-tecnico",
        title: "Soporte Técnico Remoto",
        description: "Asistencia remota para configuración, actualizaciones o solución de problemas en tu sistema de seguridad.",
        price: "$25/sesión",
        duration: "30-60 minutos",
        includes: ["Acceso remoto seguro", "Resolución de errores", "Capacitación básica"],
        delivery: "Remoto",
        highlight: "Rápido y sin salir de casa",
        icon: FaHeadset
    }
];

export const colorPalettes = [
    // Paleta 1: Azules clásicos
    [
        { iconColorLight: "text-blue-700", iconColorDark: "text-blue-300", bgColor: "bg-gradient-to-br from-blue-500/30 to-blue-400/10" },
        { iconColorLight: "text-blue-600", iconColorDark: "text-blue-300", bgColor: "bg-gradient-to-br from-blue-400/30 to-blue-300/10" },
        { iconColorLight: "text-blue-800", iconColorDark: "text-blue-200", bgColor: "bg-gradient-to-br from-blue-600/30 to-blue-500/10" },
        { iconColorLight: "text-blue-500", iconColorDark: "text-blue-400", bgColor: "bg-gradient-to-br from-blue-300/30 to-blue-200/10" },
        { iconColorLight: "text-blue-900", iconColorDark: "text-blue-200", bgColor: "bg-gradient-to-br from-blue-700/30 to-blue-600/10" },
        { iconColorLight: "text-blue-400", iconColorDark: "text-blue-400", bgColor: "bg-gradient-to-br from-blue-200/30 to-blue-100/10" },
    ],
    // Paleta 2: Azules cielo (sky)
    [
        { iconColorLight: "text-sky-700", iconColorDark: "text-sky-300", bgColor: "bg-gradient-to-br from-sky-500/30 to-sky-400/10" },
        { iconColorLight: "text-sky-600", iconColorDark: "text-sky-300", bgColor: "bg-gradient-to-br from-sky-400/30 to-sky-300/10" },
        { iconColorLight: "text-sky-800", iconColorDark: "text-sky-200", bgColor: "bg-gradient-to-br from-sky-600/30 to-sky-500/10" },
        { iconColorLight: "text-sky-500", iconColorDark: "text-sky-400", bgColor: "bg-gradient-to-br from-sky-300/30 to-sky-200/10" },
        { iconColorLight: "text-sky-900", iconColorDark: "text-sky-200", bgColor: "bg-gradient-to-br from-sky-700/30 to-sky-600/10" },
        { iconColorLight: "text-sky-400", iconColorDark: "text-sky-400", bgColor: "bg-gradient-to-br from-sky-200/30 to-sky-100/10" },
    ],
    // Paleta 3: Cianes vibrantes
    [
        { iconColorLight: "text-cyan-700", iconColorDark: "text-cyan-300", bgColor: "bg-gradient-to-br from-cyan-500/30 to-cyan-400/10" },
        { iconColorLight: "text-cyan-600", iconColorDark: "text-cyan-300", bgColor: "bg-gradient-to-br from-cyan-400/30 to-cyan-300/10" },
        { iconColorLight: "text-cyan-800", iconColorDark: "text-cyan-200", bgColor: "bg-gradient-to-br from-cyan-600/30 to-cyan-500/10" },
        { iconColorLight: "text-cyan-500", iconColorDark: "text-cyan-400", bgColor: "bg-gradient-to-br from-cyan-300/30 to-cyan-200/10" },
        { iconColorLight: "text-cyan-900", iconColorDark: "text-cyan-200", bgColor: "bg-gradient-to-br from-cyan-700/30 to-cyan-600/10" },
        { iconColorLight: "text-cyan-400", iconColorDark: "text-cyan-400", bgColor: "bg-gradient-to-br from-cyan-200/30 to-cyan-100/10" },
    ],
    // Paleta 4: Azules profundos (indigo + blue oscuro)
    [
        { iconColorLight: "text-indigo-700", iconColorDark: "text-indigo-300", bgColor: "bg-gradient-to-br from-indigo-500/30 to-blue-600/10" },
        { iconColorLight: "text-blue-900", iconColorDark: "text-blue-200", bgColor: "bg-gradient-to-br from-blue-800/30 to-indigo-700/10" },
        { iconColorLight: "text-indigo-800", iconColorDark: "text-indigo-200", bgColor: "bg-gradient-to-br from-indigo-600/30 to-blue-700/10" },
        { iconColorLight: "text-blue-800", iconColorDark: "text-blue-200", bgColor: "bg-gradient-to-br from-blue-700/30 to-indigo-600/10" },
        { iconColorLight: "text-indigo-900", iconColorDark: "text-indigo-200", bgColor: "bg-gradient-to-br from-indigo-700/30 to-blue-800/10" },
        { iconColorLight: "text-blue-700", iconColorDark: "text-blue-300", bgColor: "bg-gradient-to-br from-blue-600/30 to-indigo-500/10" },
    ],
    // Paleta 5: Azules suaves (slate + sky claro)
    [
        { iconColorLight: "text-slate-600", iconColorDark: "text-slate-300", bgColor: "bg-gradient-to-br from-slate-400/30 to-slate-300/10" },
        { iconColorLight: "text-sky-500", iconColorDark: "text-sky-400", bgColor: "bg-gradient-to-br from-sky-300/30 to-blue-200/10" },
        { iconColorLight: "text-slate-500", iconColorDark: "text-slate-400", bgColor: "bg-gradient-to-br from-slate-300/30 to-slate-200/10" },
        { iconColorLight: "text-blue-500", iconColorDark: "text-blue-400", bgColor: "bg-gradient-to-br from-blue-300/30 to-sky-200/10" },
        { iconColorLight: "text-slate-700", iconColorDark: "text-slate-200", bgColor: "bg-gradient-to-br from-slate-500/30 to-slate-400/10" },
        { iconColorLight: "text-sky-600", iconColorDark: "text-sky-300", bgColor: "bg-gradient-to-br from-sky-400/30 to-blue-300/10" },
    ],
];