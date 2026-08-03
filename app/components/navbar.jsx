
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const [showInvolvedDropdown, setShowInvolvedDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownTimeout = useRef()

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about", dropdown: "about" },
    { label: "Get Involved", href: "/get-involved", dropdown: "involved" },
    { label: "Technology", href: "/technology" },
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
      return
    }

    setShowInvolvedDropdown(true)
    setShowAboutDropdown(false)
  }

  const closeDropdown = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setShowAboutDropdown(false)
      setShowInvolvedDropdown(false)
    }, 180)
  }

  const isActive = (href) => {
    if (href === "/about") {
      return pathname.startsWith("/about")
    }
    if (href === "/get-involved") {
      return pathname.startsWith("/get-involved")
    }
    return pathname === href
  }

  const renderSubmenuLink = (item, onClick) => {
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="block px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
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
          pathname === item.href ? "text-red-700" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
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
        <Link href="/" className="flex items-center gap-3 text-zinc-900" aria-label="MIT Driverless home">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1565486464209-T74A7WEQ0JT4SRANBRR3/MITD_Corner_Logo.png?format=300w"
            alt="MIT Driverless"
            width={44}
            height={44}
            unoptimized
            className="h-11 w-11 object-contain"
          />
          <span className="text-xl font-semibold">MIT Driverless</span>
        </Link>

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
                        isActive(link.href) ? "text-red-700" : "text-zinc-700 hover:text-zinc-900"
                      }`}
                      aria-expanded={link.dropdown === "about" ? showAboutDropdown : showInvolvedDropdown}
                      onClick={() => {
                        if (link.dropdown === "about") {
                          setShowAboutDropdown((current) => !current)
                          setShowInvolvedDropdown(false)
                          return
                        }
                        setShowInvolvedDropdown((current) => !current)
                        setShowAboutDropdown(false)
                      }}
                    >
                      {link.label}
                      <svg className="h-3.5 w-3.5 text-current" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      </svg>
                    </button>

                    <div
                      className={`absolute left-0 top-full z-30 mt-3 w-64 overflow-hidden rounded-md border border-zinc-200 bg-white shadow-xl transition duration-200 ${
                        (link.dropdown === "about" ? showAboutDropdown : showInvolvedDropdown)
                          ? "visible opacity-100"
                          : "invisible pointer-events-none opacity-0"
                      }`}
                      role="menu"
                    >
                      {(link.dropdown === "about" ? aboutSubmenu : getInvolvedSubmenu).map((item) =>
                        renderSubmenuLink(item, () => {
                          setShowAboutDropdown(false)
                          setShowInvolvedDropdown(false)
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
          </div>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? "block" : "hidden"} border-t border-zinc-200 bg-white md:hidden`}>
        <div className="space-y-1 px-4 py-4">
          {links.map((link) => (
            <div key={link.href}>
              {link.dropdown ? (
                <div className="space-y-1">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      isActive(link.href) ? "text-red-700" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                    onClick={() => {
                      if (link.dropdown === "about") {
                        setShowAboutDropdown((current) => !current)
                        setShowInvolvedDropdown(false)
                        return
                      }
                      setShowInvolvedDropdown((current) => !current)
                      setShowAboutDropdown(false)
                    }}
                    aria-expanded={link.dropdown === "about" ? showAboutDropdown : showInvolvedDropdown}
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition ${(link.dropdown === "about" ? showAboutDropdown : showInvolvedDropdown) ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
                      <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  </button>
                  {(link.dropdown === "about" ? showAboutDropdown : showInvolvedDropdown) && (
                    <div className="space-y-1 rounded-md bg-zinc-50 p-2">
                      {(link.dropdown === "about" ? aboutSubmenu : getInvolvedSubmenu).map((item) =>
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
        </div>
      </div>
    </nav>
  )
}
