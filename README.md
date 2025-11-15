# Multi Servicios - Sitio Web

Sitio web multiservicio para ofrecer servicios de seguridad, carpintería y abastecimiento de agua potable.

## 📁 Estructura del Proyecto

```
multi-servicios/
├── app/                          # Páginas de Next.js (App Router)
│   ├── page.tsx                  # Página de inicio
│   ├── servicios/                # Página de servicios
│   ├── sobre-nosotros/           # Página sobre nosotros
│   ├── contacto/                 # Página de contacto
│   ├── camaras-seguridad/        # Servicio: Cámaras de seguridad
│   ├── muebles-melamina/         # Servicio: Muebles de melamina
│   └── planta-agua/              # Servicio: Planta de agua potable
│
├── components/
│   ├── layout/                   # Componentes de layout
│   │   ├── header.tsx            # Encabezado del sitio
│   │   ├── footer.tsx            # Pie de página
│   │   └── layout-wrapper.tsx   # Wrapper con Header y Footer
│   │
│   ├── sections/                 # Secciones principales
│   │   ├── hero-section.tsx      # Sección principal (home)
│   │   ├── services-section.tsx  # Sección de servicios
│   │   ├── about-section.tsx     # Sección sobre nosotros
│   │   └── contact-section.tsx   # Sección de contacto
│   │
│   ├── features/                 # Características/Utilidades
│   │   └── theme-toggle.tsx      # Toggle de tema claro/oscuro
│   │
│   └── ui/                       # Componentes UI de shadcn/ui
│
├── config/                       # Configuración y datos
│   └── contact-data.ts           # Datos de contacto centralizados
│
├── hooks/                        # Custom hooks de React
│   └── use-mobile.ts             # Hook para detectar móvil
│
├── lib/                          # Utilidades
│   └── utils.ts                  # Funciones utilitarias
│
└── public/                       # Archivos estáticos
```

## 🎯 Características

### Servicios Ofrecidos
1. **Cámaras de Seguridad** - Venta e instalación de sistemas de videovigilancia
2. **Muebles de Melamina** - Diseño, fabricación e instalación de muebles personalizados
3. **Planta de Agua Potable** - Servicio y abastecimiento de agua potable

### Estructura Modular
- **Layout**: Componentes reutilizables para la estructura del sitio
- **Sections**: Secciones principales de contenido
- **Features**: Características adicionales como tema oscuro/claro
- **Config**: Datos centralizados fácilmente editables

## 🔧 Configuración

### Datos de Contacto
Todos los datos de contacto están centralizados en `config/contact-data.ts`:
- Información personal
- Redes sociales (Facebook, WhatsApp)
- Información de contacto (email, teléfono, dirección)
- Horarios de atención

### Personalización de Colores
Los colores de las redes sociales están definidos en cada objeto dentro de `contactData.social[]`:
```typescript
{
  name: "Facebook",
  url: "...",
  icon: FaFacebook,
  color: "#1877f2"  // Color característico
}
```

## 🚀 Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **React Icons** - Iconos

## 📝 Scripts

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linter
npm run lint
```

## 📄 Licencia

Todos los derechos reservados.

