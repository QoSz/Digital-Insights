import About from "@/components/home/About"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Solutions from "@/components/home/Solutions"
import EngagementModels from "@/components/home/EngagementModels"
import MessageUs from "@/components/home/MessageUs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Services />
      <Solutions />
      <EngagementModels />
      <MessageUs />
    </main>
  )
}