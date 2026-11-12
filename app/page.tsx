import Navbar from "@/components/Navbar"
import HeroPage from "@/components/Hero"
import HeroBg from "@/app/assets/globe.png"

export default function Page() {
  return (
    <main
      className="relative min-h-svh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroBg.src})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroPage />
      </div>
    </main>
  )
}
