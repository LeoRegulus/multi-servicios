import { FaBox, FaComments, FaDraftingCompass, FaHammer, FaHome, FaPaintBrush, FaRulerCombined, FaTools, FaTruck } from "react-icons/fa";

export const features = [
    {
        id: "diseno-personalizado",
        icon: FaRulerCombined,
        title: "Diseño Personalizado",
        description: "Creamos diseños únicos adaptados a tus espacios y necesidades específicas"
    },
    {
        id: "fabricacion-medida",
        icon: FaHammer,
        title: "Fabricación a Medida",
        description: "Muebles fabricados con materiales de calidad y acabados profesionales"
    },
    {
        id: "instalacion-profesional",
        icon: FaTools,
        title: "Instalación Profesional",
        description: "Instalación rápida y eficiente realizada por expertos en carpintería"
    },
    {
        id: "multiples-estilos",
        icon: FaHome,
        title: "Múltiples Estilos",
        description: "Moderno, clásico, minimalista: el estilo que prefieras para tu hogar"
    },
    {
        id: "muebles-cada-espacio",
        icon: FaBox,
        title: "Muebles para Cada Espacio",
        description: "Cocinas, dormitorios, oficinas, salas de estar y más"
    },
    {
        id: "variedad-acabados",
        icon: FaPaintBrush,
        title: "Variedad de Acabados",
        description: "Diferentes colores, texturas y diseños de melamina disponibles"
    }
];

export const services = [
    {
        id: "muebles-cocina",
        title: "Muebles de Cocina",
        description: "Cocinas completas a medida con diseño funcional y estético.",
        price: "Desde $800",
        duration: "2-3 semanas",
        includes: ["Diseño 3D", "Melamina de alta densidad", "Bisagras de calidad", "Manijas incluidas"],
        materials: ["Melamina", "MDF", "Aluminio"],
        highlight: "¡Incluye planos detallados!"
    },
    {
        id: "muebles-dormitorio",
        title: "Muebles de Dormitorio",
        description: "Closets, cómodas, cabeceras y muebles de dormitorio personalizados.",
        price: "Desde $600",
        duration: "1-2 semanas",
        includes: ["Closets modulares", "Cómodas con cajones", "Cabeceras tapizadas", "Estanterías"],
        materials: ["Melamina", "Madera maciza", "Tela"],
        highlight: "Diseño ergonómico y moderno"
    },
    {
        id: "muebles-oficina",
        title: "Muebles de Oficina",
        description: "Escritorios, estanterías y muebles modulares para tu espacio de trabajo.",
        price: "Desde $400",
        duration: "1-2 semanas",
        includes: ["Escritorios ergonómicos", "Estanterías modulares", "Archivadores", "Muebles para reuniones"],
        materials: ["Melamina", "Metal", "Vidrio templado"],
        highlight: "Optimiza tu productividad"
    },
    {
        id: "muebles-sala",
        title: "Muebles de Sala",
        description: "Estanterías, entretenimientos y muebles de sala diseñados a tu medida.",
        price: "Desde $500",
        duration: "1-2 semanas",
        includes: ["Muebles para TV", "Estanterías flotantes", "Muebles auxiliares", "Vitrinas"],
        materials: ["Melamina", "Madera", "Vidrio"],
        highlight: "Estilo moderno y funcional"
    },
    {
        id: "muebles-bano",
        title: "Muebles de Baño",
        description: "Muebles resistentes a la humedad diseñados para espacios húmedos con acabados impermeabilizados.",
        price: "Desde $350",
        duration: "1-2 semanas",
        includes: ["Muebles bajo lavabo", "Estanterías impermeables", "Espejos con iluminación", "Accesorios cromados"],
        materials: ["Melamina hidrófuga", "MDF marino", "Aluminio anodizado", "Vidrio templado"],
        highlight: "Resistentes al 100% a la humedad"
    },
    {
        id: "closets-empotrados",
        title: "Closets Empotrados",
        description: "Aprovecha al máximo tu espacio con closets a medida que se integran perfectamente en tus paredes.",
        price: "Desde $700",
        duration: "2-3 semanas",
        includes: ["Diseño personalizado", "Puertas correderas", "Organizadores internos", "Iluminación LED"],
        materials: ["Melamina", "Aluminio", "Vidrio esmerilado", "Sistemas de rieles suaves"],
        highlight: "Máximo aprovechamiento del espacio"
    },
    {
        id: "muebles-infantiles",
        title: "Muebles Infantiles",
        description: "Muebles seguros y divertidos para habitaciones de niños, con colores y diseños personalizables.",
        price: "Desde $450",
        duration: "1-2 semanas",
        includes: ["Camas con cajones", "Escritorios escolares", "Estanterías temáticas", "Organizadores de juguetes"],
        materials: ["Melamina no tóxica", "Madera certificada", "Pinturas al agua", "Cantos redondeados"],
        highlight: "Seguridad certificada para niños"
    },
    {
        id: "muebles-comerciales",
        title: "Muebles Comerciales",
        description: "Soluciones para locales comerciales, tiendas, recepciones y áreas de exhibición.",
        price: "Desde $900",
        duration: "2-4 semanas",
        includes: ["Mostradores de atención", "Vitrinas de exhibición", "Estanterías industriales", "Muebles para recepción"],
        materials: ["Melamina de alta resistencia", "Metal reforzado", "Vidrio de seguridad", "Acabados profesionales"],
        highlight: "Diseño pensado para negocios"
    }
];

export const colorPalettes = [
    // Paleta 1: Ámbar clásico
    [
        { iconColorLight: "text-amber-700", iconColorDark: "text-amber-200", bgColor: "bg-gradient-to-br from-amber-50 to-amber-100" },
        { iconColorLight: "text-amber-600", iconColorDark: "text-amber-200", bgColor: "bg-gradient-to-br from-amber-50 to-amber-100" },
        { iconColorLight: "text-amber-800", iconColorDark: "text-amber-100", bgColor: "bg-gradient-to-br from-amber-100 to-amber-200" },
        { iconColorLight: "text-amber-500", iconColorDark: "text-amber-300", bgColor: "bg-gradient-to-br from-amber-50 to-amber-100" },
        { iconColorLight: "text-amber-900", iconColorDark: "text-amber-100", bgColor: "bg-gradient-to-br from-amber-200 to-amber-300" },
        { iconColorLight: "text-amber-400", iconColorDark: "text-amber-400", bgColor: "bg-gradient-to-br from-amber-50 to-amber-100" },
    ],
    // Paleta 2: Tonos tierra (marrones suaves)
    [
        { iconColorLight: "text-amber-900", iconColorDark: "text-amber-100", bgColor: "bg-gradient-to-br from-amber-100 to-stone-100" },
        { iconColorLight: "text-stone-700", iconColorDark: "text-stone-200", bgColor: "bg-gradient-to-br from-stone-50 to-stone-100" },
        { iconColorLight: "text-amber-800", iconColorDark: "text-amber-200", bgColor: "bg-gradient-to-br from-amber-100 to-stone-100" },
        { iconColorLight: "text-stone-800", iconColorDark: "text-stone-100", bgColor: "bg-gradient-to-br from-stone-100 to-stone-200" },
        { iconColorLight: "text-amber-700", iconColorDark: "text-amber-300", bgColor: "bg-gradient-to-br from-amber-50 to-stone-50" },
        { iconColorLight: "text-stone-600", iconColorDark: "text-stone-300", bgColor: "bg-gradient-to-br from-stone-50 to-stone-100" },
    ],
    // Paleta 3: Ámbar vibrante
    [
        { iconColorLight: "text-amber-800", iconColorDark: "text-amber-100", bgColor: "bg-gradient-to-br from-amber-100 to-yellow-100" },
        { iconColorLight: "text-yellow-700", iconColorDark: "text-yellow-200", bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50" },
        { iconColorLight: "text-amber-900", iconColorDark: "text-amber-100", bgColor: "bg-gradient-to-br from-amber-200 to-yellow-100" },
        { iconColorLight: "text-yellow-800", iconColorDark: "text-yellow-100", bgColor: "bg-gradient-to-br from-yellow-100 to-amber-100" },
        { iconColorLight: "text-amber-700", iconColorDark: "text-amber-300", bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50" },
        { iconColorLight: "text-yellow-600", iconColorDark: "text-yellow-300", bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50" },
    ],
    // Paleta 4: Marrones profundos (coffee tones)
    [
        { iconColorLight: "text-amber-900", iconColorDark: "text-amber-100", bgColor: "bg-gradient-to-br from-amber-200 to-stone-200" },
        { iconColorLight: "text-stone-800", iconColorDark: "text-stone-100", bgColor: "bg-gradient-to-br from-stone-100 to-stone-200" },
        { iconColorLight: "text-amber-800", iconColorDark: "text-amber-200", bgColor: "bg-gradient-to-br from-amber-100 to-stone-100" },
        { iconColorLight: "text-stone-900", iconColorDark: "text-stone-100", bgColor: "bg-gradient-to-br from-stone-200 to-stone-300" },
        { iconColorLight: "text-amber-700", iconColorDark: "text-amber-300", bgColor: "bg-gradient-to-br from-amber-100 to-stone-100" },
        { iconColorLight: "text-stone-700", iconColorDark: "text-stone-200", bgColor: "bg-gradient-to-br from-stone-100 to-stone-200" },
    ],
    // Paleta 5: Cálidos neutros (beige + ámbar)
    [
        { iconColorLight: "text-amber-700", iconColorDark: "text-amber-300", bgColor: "bg-gradient-to-br from-amber-50 to-amber-50" },
        { iconColorLight: "text-stone-600", iconColorDark: "text-stone-300", bgColor: "bg-gradient-to-br from-stone-50 to-stone-100" },
        { iconColorLight: "text-amber-600", iconColorDark: "text-amber-400", bgColor: "bg-gradient-to-br from-amber-50 to-stone-50" },
        { iconColorLight: "text-stone-700", iconColorDark: "text-stone-200", bgColor: "bg-gradient-to-br from-stone-100 to-stone-100" },
        { iconColorLight: "text-amber-800", iconColorDark: "text-amber-200", bgColor: "bg-gradient-to-br from-amber-100 to-stone-100" },
        { iconColorLight: "text-stone-800", iconColorDark: "text-stone-100", bgColor: "bg-gradient-to-br from-stone-100 to-amber-100" },
    ],
];

export const proceso = [
    {
        step: "1",
        title: "Consulta",
        desc: "Evaluamos tus necesidades y espacio",
        icon: FaComments,
        color: "from-amber-500 to-amber-600"
    },
    {
        step: "2",
        title: "Diseño",
        desc: "Creamos un diseño personalizado",
        icon: FaDraftingCompass,
        color: "from-amber-600 to-amber-700"
    },
    {
        step: "3",
        title: "Fabricación",
        desc: "Fabricamos tus muebles con calidad",
        icon: FaHammer,
        color: "from-amber-700 to-amber-800"
    },
    {
        step: "4",
        title: "Instalación",
        desc: "Instalamos en tu hogar u oficina",
        icon: FaTruck,
        color: "from-amber-800 to-amber-900"
    }
]
