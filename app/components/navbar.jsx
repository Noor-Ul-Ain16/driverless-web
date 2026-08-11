"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState("")

  const dropdownTimeout = useRef(null)
  const navRef = useRef(null)

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about/who-we-are" },
    { label: "Technology", href: "/technology", dropdown: "technology" },
    { label: "Media", href: "/media", dropdown: "media" },
    { label: "Get Involved", href: "/get-involved", dropdown: "involved" },
  ]

  const getInvolvedSubmenu = [
    { label: "Join Our Team", href: "/get-involved/join-our-team" },
    { label: "Sponsorship Opportunity", href: "/get-involved/sponsorship-form" },
  ]

  const technologySubmenu = [
    { label: "Overview & Stack", href: "/technology#overview" },
    { label: "Publications", href: "/technology/publications" },
  ]

  const mediaSubmenu = [
    { label: "News", href: "/media/news" },
    { label: "Gallery", href: "/media/gallery" },
  ]

  // Track hash changes on client
  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    updateHash()
    window.addEventListener("hashchange", updateHash)
    window.addEventListener("popstate", updateHash)
    return () => {
      window.removeEventListener("hashchange", updateHash)
      window.removeEventListener("popstate", updateHash)
    }
  }, [])

  // Submenu items ke liye strict match check
  const isExactActive = (href) => {
    if (!href || !pathname) return false
    const [cleanHref, hash] = href.split("#")

    if (hash) {
      return pathname === cleanHref && (currentHash === `#${hash}` || (!currentHash && hash === "overview"))
    }

    return pathname === cleanHref && !currentHash
  }

  // Parent Navigation Links ke liye Active Check
  const isParentActive = (link) => {
    if (!link.href || !pathname) return false

    // Home Page Check
    if (link.href === "/") {
      return pathname === "/"
    }

    const [cleanHref] = link.href.split("#")

    // Direct Exact Match
    if (pathname === cleanHref) {
      return true
    }

    // Base route matching for parent category (e.g., /technology matches /technology/publications)
    const baseRoute = cleanHref.split("/")[1]
    const currentBaseRoute = pathname.split("/")[1]

    if (baseRoute && currentBaseRoute && baseRoute === currentBaseRoute) {
      return true
    }

    return pathname.startsWith(`${cleanHref}/`)
  }

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }, [pathname])

  // Outside click & Escape key handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
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
    if (type === "media") return mediaSubmenu
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
          className="block px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#6e1717]"
          onClick={onClick}
          role="menuitem"
        >
          {item.label}
        </a>
      )
    }

    const active = isExactActive(item.href)

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`block px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition ${
          active
            ? "bg-[#6e1717] font-bold text-white underline underline-offset-4"
            : "text-white hover:bg-[#6e1717]"
        }`}
        onClick={() => {
          if (item.href.includes("#")) {
            const [, hash] = item.href.split("#")
            setCurrentHash(`#${hash}`)
          } else {
            setCurrentHash("")
          }
          onClick()
        }}
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

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 md:hidden"
            aria-label="Toggle navigation menu"
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
              const active = isParentActive(link)
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
                        className={`inline-flex items-center gap-1 text-sm transition ${
                          active ? "!text-[#8a1d1d] font-bold" : "text-zinc-700 font-medium hover:text-zinc-900"
                        }`}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
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

                      {/* Dropdown Container */}
                      <div
                        className={`absolute left-0 top-full pt-2 z-30 w-64 transition-all duration-200 ${
                          isOpen
                            ? "visible opacity-100 translate-y-0"
                            : "invisible pointer-events-none opacity-0 -translate-y-1"
                        }`}
                        role="menu"
                      >
                        <div className="overflow-hidden rounded-md bg-[#8a1d1d] text-white shadow-xl border border-[#6e1717]">
                          {getSubmenuItems(link.dropdown).map((item) =>
                            renderSubmenuLink(item, () => setActiveDropdown(null))
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm transition ${
                        active ? "!text-[#8a1d1d] font-bold" : "text-zinc-700 font-medium hover:text-zinc-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              )
            })}

            {/* CTA Button */}
            <Link
              href="/get-involved/join-our-team"
              className={`border px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                pathname === "/get-involved/join-our-team"
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
            const active = isParentActive(link)
            const isOpen = activeDropdown === link.dropdown

            return (
              <div key={link.href}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-xs uppercase tracking-[0.15em] transition ${
                        active ? "!text-[#8a1d1d] font-bold bg-zinc-50" : "text-zinc-700 font-semibold hover:bg-zinc-100 hover:text-zinc-900"
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
                      <div className="space-y-1 rounded-md bg-[#8a1d1d] p-2">
                        {getSubmenuItems(link.dropdown).map((item) =>
                          renderSubmenuLink(item, () => setMobileMenuOpen(false))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block rounded-md px-4 py-3 text-xs uppercase tracking-[0.15em] transition ${
                      active ? "!text-[#8a1d1d] font-bold bg-zinc-50" : "text-zinc-700 font-semibold hover:bg-zinc-100 hover:text-zinc-900"
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
            href="/get-involved/join-our-team"
            className="mt-2 block w-full text-center border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-zinc-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}