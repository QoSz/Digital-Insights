import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Solutions from "@/components/home/Solutions"
import EngagementModels from "@/components/home/EngagementModels"
import Behind from "@/components/home/Behind"
import ContactUs from "@/components/home/ContactUs"
import WhoWeAre from "@/components/home/WhoWeAre"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div id="about" style={{ scrollMarginTop: '90px' }}><WhoWeAre /></div>
      <div id="services" style={{ scrollMarginTop: '90px' }}><Services /></div>
      <div id="solutions" style={{ scrollMarginTop: '90px' }}><Solutions /></div>
      <div id="engagement" style={{ scrollMarginTop: '90px' }}><EngagementModels /></div>
      <div id="behind" style={{ scrollMarginTop: '90px' }}><Behind /></div>
      <div id="contact" style={{ scrollMarginTop: '90px' }}><ContactUs /></div>
    </main>
  )
}