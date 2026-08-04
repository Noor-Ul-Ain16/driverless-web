"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const [showInvolvedDropdown, setShowInvolvedDropdown] = useState(false)
  const [showTechDropdown, setShowTechDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownTimeout = useRef()

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about", dropdown: "about" },
    { label: "Get Involved", href: "/get-involved", dropdown: "involved" },
    { label: "Technology", href: "/technology", dropdown: "technology" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Contact", href: "/contact" },
  ]

  const aboutSubmenu = [
    { label: "Who We Are", href: "/about/who-we-are" },
    { label: "Our History", href: "/about/our-history" },
  ]

  const getInvolvedSubmenu = [
    { label: "Join the Team", href: "/get-involved" },
    { label: "Become a Sponsor", href: "https://driverless.mit.edu/sponsorship-inquiry", external: true },
    { label: "Previous Sponsors", href: "/about/our-history" },
    { label: "Donate", href: "https://giving.mit.edu/mit-driverless", external: true },
  ]

  const technologySubmenu = [
    { label: "Overview & Stack", href: "/technology#overview" },
    { label: "Research Pillars", href: "/technology#pillars" },
    { label: "Publications", href: "/technology/publications" },
  ]

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) {
        window.clearTimeout(dropdownTimeout.current)
      }
    }
  }, [])

  const openDropdown = (menu) => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current)
    }

    if (menu === "about") {
      setShowAboutDropdown(true)
      setShowInvolvedDropdown(false)
      setShowTechDropdown(false)
      return
    }

    if (menu === "involved") {
      setShowInvolvedDropdown(true)
      setShowAboutDropdown(false)
      setShowTechDropdown(false)
      return
    }

    if (menu === "technology") {
      setShowTechDropdown(true)
      setShowAboutDropdown(false)
      setShowInvolvedDropdown(false)
      return
    }
  }

  const closeDropdown = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setShowAboutDropdown(false)
      setShowInvolvedDropdown(false)
      setShowTechDropdown(false)
    }, 180)
  }

  const getSubmenuItems = (type) => {
    if (type === "about") return aboutSubmenu
    if (type === "involved") return getInvolvedSubmenu
    if (type === "technology") return technologySubmenu
    return []
  }

  const isDropdownOpen = (type) => {
    if (type === "about") return showAboutDropdown
    if (type === "involved") return showInvolvedDropdown
    if (type === "technology") return showTechDropdown
    return false
  }

  const toggleDropdown = (type) => {
    if (type === "about") {
      setShowAboutDropdown((prev) => !prev)
      setShowInvolvedDropdown(false)
      setShowTechDropdown(false)
    } else if (type === "involved") {
      setShowInvolvedDropdown((prev) => !prev)
      setShowAboutDropdown(false)
      setShowTechDropdown(false)
    } else if (type === "technology") {
      setShowTechDropdown((prev) => !prev)
      setShowAboutDropdown(false)
      setShowInvolvedDropdown(false)
    }
  }

  const renderSubmenuLink = (item, onClick) => {
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="block px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] !text-white transition hover:bg-zinc-800 hover:!text-red-400"
          onClick={onClick}
          role="menuitem"
        >
          {item.label}
        </a>
      )
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`block px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition ${
          pathname === item.href ? "!text-red-400 font-bold" : "!text-white hover:bg-zinc-800 hover:!text-red-400"
        }`}
        onClick={onClick}
        role="menuitem"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <nav className="relative z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo - NCAI in Red */}
        <Link href="/" className="flex items-center gap-2 text-zinc-900" aria-label="NCAI Autonomous home">
          <span className="text-xl font-black tracking-tight text-[#8a1d1d]">NCAI</span>
          <span className="text-zinc-400">/</span>
          <span className="text-xs font-bold tracking-widest text-zinc-600 uppercase">AUTONOMOUS</span>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-7">
            {links.map((link) => (
              <div
                key={link.href}
                className={link.dropdown ? "relative" : ""}
                onMouseEnter={() => link.dropdown && openDropdown(link.dropdown)}
                onMouseLeave={() => link.dropdown && closeDropdown()}
              >
                {link.dropdown ? (
                  <>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 text-sm font-medium transition ${
                        pathname === link.href ? "text-red-700" : "text-zinc-700 hover:text-zinc-900"
                      }`}
                      aria-expanded={isDropdownOpen(link.dropdown)}
                      onClick={() => toggleDropdown(link.dropdown)}
                    >
                      {link.label}
                      <svg className="h-3.5 w-3.5 text-current" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-0 top-full z-30 mt-3 w-64 overflow-hidden rounded-md bg-black shadow-xl transition duration-200 ${
                        isDropdownOpen(link.dropdown)
                          ? "visible opacity-100 translate-y-0"
                          : "invisible pointer-events-none opacity-0 -translate-y-1"
                      }`}
                      role="menu"
                    >
                      {getSubmenuItems(link.dropdown).map((item) =>
                        renderSubmenuLink(item, () => {
                          setShowAboutDropdown(false)
                          setShowInvolvedDropdown(false)
                          setShowTechDropdown(false)
                        })
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition ${
                      pathname === link.href ? "text-red-700" : "text-zinc-700 hover:text-zinc-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Get In Touch Button */}
            <Link
              href="/contact"
              className="border border-zinc-900 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-900 transition hover:border-black hover:bg-zinc-100"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} border-t border-zinc-200 bg-white md:hidden`}>
        <div className="space-y-1 px-4 py-4">
          {links.map((link) => (
            <div key={link.href}>
              {link.dropdown ? (
                <div className="space-y-1">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      pathname === link.href ? "text-red-700" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                    onClick={() => toggleDropdown(link.dropdown)}
                    aria-expanded={isDropdownOpen(link.dropdown)}
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition ${isDropdownOpen(link.dropdown) ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  </button>
                  {isDropdownOpen(link.dropdown) && (
                    <div className="space-y-1 rounded-md bg-black p-2">
                      {getSubmenuItems(link.dropdown).map((item) =>
                        renderSubmenuLink(item, () => setMobileMenuOpen(false))
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`block rounded-md px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    pathname === link.href ? "text-red-700" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-2 block w-full text-center border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}