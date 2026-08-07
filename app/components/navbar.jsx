"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [activeDropdown, setActiveDropdown] = useState(null) // 'involved' | 'technology' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const dropdownTimeout = useRef(null)
  const navRef = useRef(null)

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about/who-we-are" }, 
    { label: "Technology", href: "/technology", dropdown: "technology" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Get Involved", href: "/get-involved", dropdown: "involved" },
  ]
  
  const getInvolvedSubmenu = [
    { label: "Join the Team", href: "/get-involved" },
    { label: "Become a Sponsor", href: "https://driverless.mit.edu/sponsorship-inquiry", external: true },
  ]

  const technologySubmenu = [
    { label: "Overview & Stack", href: "/technology#overview" },
    { label: "Publications", href: "/technology/publications" },
  ]

  // Active Tab Check Logic
  const isActive = (href) => {
    if (!href) return false
    const cleanHref = href.split("#")[0]
    if (cleanHref === "/") {
      return pathname === "/"
    }
    return pathname === cleanHref || pathname.startsWith(cleanHref + "/")
  }

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }, [pathname])

  // Handle outside clicks and timeout cleanup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (dropdownTimeout.current) {
        window.clearTimeout(dropdownTimeout.current)
      }
    }
  }, [])

  const openDropdown = (menu) => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current)
    }
    setActiveDropdown(menu)
  }

  const closeDropdown = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  const toggleDropdown = (type) => {
    setActiveDropdown((prev) => (prev === type ? null : type))
  }

  const getSubmenuItems = (type) => {
    if (type === "involved") return getInvolvedSubmenu
    if (type === "technology") return technologySubmenu
    return []
  }

  const renderSubmenuLink = (item, onClick) => {
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="block px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] !text-white transition hover:bg-zinc-800 hover:!text-white"
          onClick={onClick}
          role="menuitem"
        >
          {item.label}
        </a>
      )
    }

    const active = isActive(item.href)

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`block px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition ${
          active 
            ? "!text-[#8a1d1d] font-bold bg-zinc-900" 
            : "!text-white hover:bg-zinc-800 hover:!text-[#8a1d1d]"
        }`}
        onClick={onClick}
        role="menuitem"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <nav ref={navRef} className="relative z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-zinc-900" aria-label="NCAI Autonomous home">
          <span className="text-xl font-black tracking-tight text-[#8a1d1d]">NED</span>
          <span className="text-zinc-400">/</span>
          <span className="text-xs font-bold tracking-widest text-zinc-600 uppercase">DRIVERLESS</span>
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
            {links.map((link) => {
              const active = isActive(link.href)
              const isOpen = activeDropdown === link.dropdown

              return (
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
                          active ? "!text-[#8a1d1d] font-semibold" : "text-zinc-700 hover:text-zinc-900"
                        }`}
                        aria-expanded={isOpen}
                        onClick={() => toggleDropdown(link.dropdown)}
                      >
                        {link.label}
                        <svg 
                          className={`h-3.5 w-3.5 text-current transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
                          viewBox="0 0 12 12" 
                          fill="none" 
                          aria-hidden
                        >
                          <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                        </svg>
                      </button>

                      {/* Dropdown Container with Hover Bridge */}
                      <div
                        className={`absolute left-0 top-full pt-2 z-30 w-64 transition duration-200 ${
                          isOpen
                            ? "visible opacity-100 translate-y-0"
                            : "invisible pointer-events-none opacity-0 -translate-y-1"
                        }`}
                        role="menu"
                      >
                        <div className="overflow-hidden rounded-md bg-black shadow-xl">
                          {getSubmenuItems(link.dropdown).map((item) =>
                            renderSubmenuLink(item, () => setActiveDropdown(null))
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition ${
                        active ? "!text-[#8a1d1d] font-semibold" : "text-zinc-700 hover:text-zinc-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              )
            })}

            {/* Get In Touch Button */}
            <Link
              href="/get-involved"
              className={`border px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                isActive("/get-involved")
                  ? "border-[#8a1d1d] bg-[#8a1d1d] text-white"
                  : "border-zinc-900 bg-white text-zinc-900 hover:border-black hover:bg-zinc-100"
              }`}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} border-t border-zinc-200 bg-white md:hidden`}>
        <div className="space-y-1 px-4 py-4">
          {links.map((link) => {
            const active = isActive(link.href)
            const isOpen = activeDropdown === link.dropdown

            return (
              <div key={link.href}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] transition ${
                        active ? "!text-[#8a1d1d] font-bold" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                      }`}
                      onClick={() => toggleDropdown(link.dropdown)}
                      aria-expanded={isOpen}
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                      >
                        <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      </svg>
                    </button>
                    {isOpen && (
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
                      active ? "!text-[#8a1d1d] font-bold" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            )
          })}
          <Link
            href="/get-involved"
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