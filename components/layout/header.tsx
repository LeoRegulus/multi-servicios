"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/features/theme-toggle"
import { contactData } from "@/config/contact-data"
import { useEffect, useState, useRef } from "react"
import { HiMenu, HiX } from "react-icons/hi"

// Tipado para mayor claridad
type NavItem = {
  href?: string
  label: string
  id: string
  subItems?: { href: string; label: string }[]
}

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const submenuRef = useRef<HTMLDivElement>(null)

  // Determinar qué menú está activo basado en la ruta actual
  const getActiveMenuId = () => {
    if (pathname === "/") return "inicio"
    if (pathname.startsWith("/servicios")) return "servicios"
    if (pathname === "/sobre-nosotros") return "sobre-nosotros"
    if (pathname === "/contacto") return "contacto"
    return ""
  }

  const activeMenuId = getActiveMenuId()

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloquear scroll en móvil cuando el menú está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setOpenSubmenu(null) // Cierra submenú al cerrar menú móvil
    }
  }, [mobileMenuOpen])

  // Cerrar submenú al hacer clic fuera (solo en escritorio)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null)
      }
    }

    if (!mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Datos de navegación con submenú en "Servicios"
  const navLinks: NavItem[] = [
    { href: "/", label: "Inicio", id: "inicio" },
    {
      label: "Servicios",
      id: "servicios",
      subItems: [
        { href: "/servicios/camaras-seguridad", label: "CAMARAS DE SEGURIDAD" },
        { href: "/servicios/muebles-melamina", label: "MUEBLES DE MELAMINA" },
        { href: "/servicios/planta-agua", label: "PLANTA DE AGUA POTABLE" },
      ],
    },
    { href: "/sobre-nosotros", label: "Sobre Nosotros", id: "sobre-nosotros" },
    { href: "/contacto", label: "Contacto", id: "contacto" },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <>
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-md shadow-lg shadow-black/5"
          : "border-b border-border/40 bg-background/50 backdrop-blur-sm"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-300"
          >
            {contactData.personal.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const hasSubmenu = !!link.subItems
              const isActive = activeMenuId === link.id

              return (
                <div
                  key={link.id}
                  className="relative"
                  ref={hasSubmenu ? submenuRef : null}
                  onMouseEnter={() => hasSubmenu && setOpenSubmenu(link.id)}
                  onMouseLeave={() => hasSubmenu && setOpenSubmenu(null)}
                >
                  {hasSubmenu ? (
                    <button
                      className={`
                        uppercase relative text-sm font-medium transition-all duration-300 flex items-center gap-1
                        ${
                          isActive || openSubmenu === link.id
                            ? "text-foreground scale-105"
                            : "text-muted-foreground hover:text-foreground hover:scale-105"
                        }
                        after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 
                        after:bg-linear-to-r after:from-primary after:to-accent
                        after:transition-all after:duration-300 after:rounded-full
                        hover:after:w-full
                        ${isActive ? "after:w-full" : ""}
                      `}
                    >
                      <span className={`
                        ${
                          isActive || openSubmenu === link.id
                            ? "bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
                            : ""
                        }
                      `}>
                        {link.label}
                      </span>
                      <span className={`text-xs transition-transform duration-300 ${
                        openSubmenu === link.id ? "rotate-180" : ""
                      } ${isActive || openSubmenu === link.id ? "text-primary" : "opacity-70"}`}>
                        ▼
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={link.href!}
                      className={`
                        uppercase relative text-sm font-medium transition-all duration-300
                        ${
                          isActive
                            ? "bg-linear-to-r from-primary to-accent bg-clip-text text-transparent scale-105"
                            : "text-muted-foreground hover:text-foreground hover:scale-105"
                        }
                        after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 
                        after:bg-linear-to-r after:from-primary after:to-accent
                        after:transition-all after:duration-300 after:rounded-full
                        hover:after:w-full
                        ${isActive ? "after:w-full" : ""}
                      `}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Submenú desplegable (solo si tiene subItems) */}
                  {hasSubmenu && openSubmenu === link.id && (
                    <div className="absolute left-0 top-full mt-1 w-56 bg-background border border-border rounded-lg shadow-xl py-2 z-50">
                      {link.subItems!.map((subItem) => {
                        const isSubItemActive = pathname === subItem.href
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isSubItemActive
                                ? "text-primary font-semibold bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            }`}
                            onClick={handleLinkClick}
                          >
                            {subItem.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop: Social + Theme */}
          <div className="hidden md:flex items-center gap-2">
            {contactData.social.map((social) => {
              const Icon = social.icon
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="group hover:scale-110 hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300"
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <Icon
                      className="h-5 w-5 transition-all duration-300 group-hover:rotate-12"
                      style={{ color: social.color }}
                    />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </Button>
              )
            })}
            <div className="ml-2 pl-2 border-l border-border/40">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: Theme + Menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-secondary/80 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <HiX className="h-6 w-6 rotate-90 transition-transform duration-300" />
              ) : (
                <HiMenu className="h-6 w-6 transition-transform duration-300" />
              )}
              <span className="sr-only">Menú</span>
            </Button>
          </div>
        </div>
      </div>

      </header>
      
      {/* Mobile Menu - Fuera del header para evitar problemas de z-index */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 overflow-y-auto">
          {/* Fondo sólido completamente opaco - asegura que cubra todo */}
          <div className="absolute inset-0 bg-background dark:bg-background" style={{ backgroundColor: 'var(--background)' }} />
          {/* Overlay decorativo sutil - solo para efecto visual */}
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          {/* Contenido del menú */}
          <nav className="relative container mx-auto px-4 py-8 flex flex-col gap-5 z-10">
            {navLinks.map((link, index) => {
              const hasSubmenu = !!link.subItems
              const isActive = activeMenuId === link.id

              return (
                <div key={link.id} className="relative">
                  {hasSubmenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenSubmenu(openSubmenu === link.id ? null : link.id)
                        }
                        className={`
                          text-2xl font-bold w-full text-left transition-all duration-300
                          ${
                            isActive || openSubmenu === link.id
                              ? "bg-linear-to-r from-primary to-accent bg-clip-text text-transparent scale-105"
                              : "text-muted-foreground hover:text-transparent hover:bg-linear-to-r hover:from-primary hover:to-accent hover:bg-clip-text"
                          }
                        `}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {link.label}
                        <span className="text-lg ml-2">
                          {openSubmenu === link.id ? "▲" : "▼"}
                        </span>
                      </button>

                      {openSubmenu === link.id && (
                        <div className="mt-3 pl-5 flex flex-col gap-3">
                          {link.subItems!.map((subItem, subIndex) => {
                            const isSubItemActive = pathname === subItem.href
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={handleLinkClick}
                                style={{
                                  transitionDelay: `${(index * 50) + (subIndex * 30)}ms`,
                                }}
                                className={`text-xl transition-all ${
                                  isSubItemActive
                                    ? "text-primary font-semibold"
                                    : "text-muted-foreground hover:text-foreground hover:translate-x-1"
                                }`}
                              >
                                • {subItem.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={handleLinkClick}
                      style={{ transitionDelay: `${index * 50}ms` }}
                      className={`
                        text-2xl font-bold transition-all duration-300
                        translate-x-0 opacity-100
                        ${
                          isActive
                            ? "bg-linear-to-r from-primary to-accent bg-clip-text text-transparent scale-105"
                            : "text-muted-foreground hover:text-transparent hover:bg-linear-to-r hover:from-primary hover:to-accent hover:bg-clip-text hover:translate-x-2"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              )
            })}

            {/* Mobile Social Icons */}
            <div className="flex gap-3 pt-6 border-t border-border/40">
              {contactData.social.map((social, index) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    style={{
                      transitionDelay: `${(navLinks.length + index) * 50}ms`,
                    }}
                    className="hover:scale-110 hover:shadow-lg hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon
                        className="h-5 w-5 transition-transform duration-300 hover:rotate-12"
                        style={{ color: social.color }}
                      />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                )
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

