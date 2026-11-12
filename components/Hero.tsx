import React from "react"
import { Button } from "@/components/ui/button"

const POPULAR_ROLES = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
] as const

const HeroPage = () => {
  return (
    <section className="flex w-full flex-col items-center bg-transparent px-4 pt-10 pb-12 sm:px-6 sm:pt-12 sm:pb-16">
      {/* Badge */}
      <div className="flex w-full max-w-2xl items-center gap-2 sm:gap-4">
        <span className="h-px flex-1 bg-neutral-800" aria-hidden="true" />

        <div className="flex items-center gap-2 rounded-full bg-[#161616] px-3 py-2 shadow-lg sm:gap-3 sm:px-5 sm:py-2.5">
          <span
            className="text-base sm:text-lg"
            role="img"
            aria-label="briefcase"
          >
            💼
          </span>
          <span className="font-mono text-xs font-bold tracking-wide text-white sm:text-base">
            50,000+
          </span>
          <span className="font-mono text-[10px] tracking-wider text-neutral-400 sm:text-sm sm:tracking-widest">
            NEW JOBS THIS MONTH
          </span>
        </div>

        <span className="h-px flex-1 bg-neutral-800" aria-hidden="true" />
      </div>

      {/* Search bar */}
      <form
        action="/jobs"
        className="mt-12 flex w-full max-w-5xl items-center gap-1 rounded-xl bg-[#161616] p-2 shadow-xl sm:mt-16 sm:gap-2 sm:rounded-2xl md:mt-24"
      >
        {/* Job title input */}
        <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:gap-3 sm:px-3">
          <svg
            className="size-4 shrink-0 text-neutral-300 sm:size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>

          <input
            type="text"
            name="q"
            placeholder="Job title, skill or company"
            className="w-full min-w-0 bg-transparent py-2.5 text-xs text-white placeholder:text-neutral-400 focus:outline-none sm:text-sm md:text-base"
          />
        </div>

        {/* Divider */}
        <span
          className="hidden h-8 w-px shrink-0 bg-white/20 md:block"
          aria-hidden="true"
        />

        {/* Location input */}
        <div className="hidden min-w-0 flex-1 items-center gap-3 px-3 md:flex">
          <svg
            className="size-5 shrink-0 text-neutral-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <input
            type="text"
            name="location"
            placeholder="Location or Remote"
            className="w-full min-w-0 bg-transparent py-2.5 text-sm text-white placeholder:text-neutral-400 focus:outline-none lg:text-base"
          />
        </div>

        {/* Search button */}
        <Button
          type="submit"
          aria-label="Search jobs"
          className="ml-auto size-10 shrink-0 rounded-lg bg-[#5b4dfb] p-0 text-white hover:bg-[#4a3de8] sm:size-11 sm:rounded-xl"
        >
          <svg
            className="size-4 sm:size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </Button>
      </form>

      {/* Popular roles */}
      <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3">
        {POPULAR_ROLES.map((role) => (
          <a
            key={role}
            href={`/jobs?q=${encodeURIComponent(role)}`}
            className="rounded-full bg-[#161616] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-700 sm:px-4 sm:text-sm"
          >
            {role}
          </a>
        ))}
      </div>
    </section>
  )
}

export default HeroPage
