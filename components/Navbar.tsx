"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Logo from "../app/assets/logo.png"

const NAV_LINKS = [
  { name: "Browse Jobs", href: "/browse-jobs" },
  { name: "Company", href: "/company" },
  { name: "Pricing", href: "/pricing" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#1c1c1f]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="HireLoop Logo"
            width={120}
            height={40}
            priority
            className="h-8 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <span className="h-6 w-px bg-white/15" />

          <Link
            href="/sign-in"
            className="text-sm font-medium text-neutral-300 hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-md bg-[#3b82f6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563eb]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full border-t border-white/10 bg-[#1c1c1f] p-5 shadow-xl md:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-neutral-300 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="my-5 border-t border-white/10" />

          <div className="flex flex-col gap-4">
            <Link
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-neutral-300 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              onClick={() => setMenuOpen(false)}
              className="rounded-md bg-[#3b82f6] px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-[#2563eb]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
