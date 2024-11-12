import About from "@/components/home/About"
import Hero from "@/components/home/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
    </main>
  )
}