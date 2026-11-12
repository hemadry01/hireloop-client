import React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "../app/assets/logo.png"

const NAV_LINKS = ["Browse Jobs", "Company", "Pricing"] as const

const Navbar = () => {
  return (
    <header className="w-full border-b border-white/10 bg-[#1c1c1f]">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
       
          <Image
            src={Logo}
            alt="HireLoop Logo"
            width={120}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Nav links */}
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <span
            className="hidden h-6 w-px bg-white/15 md:block"
            aria-hidden="true"
          />

          {/* Sign In */}
          <a
            href="#"
            className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
          >
            Sign In
          </a>

          {/* CTA */}
          <Button className="ml-1 bg-[#3b82f6] px-4 text-white hover:bg-[#2563eb]">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
