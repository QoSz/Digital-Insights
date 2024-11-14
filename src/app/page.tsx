import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Solutions from "@/components/home/Solutions"
import Approach from "@/components/home/Approach"
import Leadership from "@/components/home/Leadership"
import ContactUs from "@/components/home/ContactUs"
import WhoWeAre from "@/components/home/WhoWeAre"
import GlobalPresence from "@/components/home/GlobalPresence"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div id="whoweare" style={{ scrollMarginTop: '90px' }}><WhoWeAre /></div>
      <div id="services" style={{ scrollMarginTop: '90px' }}><Services /></div>
      <div id="solutions" style={{ scrollMarginTop: '90px' }}><Solutions /></div>
      <div id="approach" style={{ scrollMarginTop: '90px' }}><Approach /></div>
      <div id="leadership" style={{ scrollMarginTop: '90px' }}><Leadership /></div>
      <div id="global" style={{ scrollMarginTop: '90px' }}><GlobalPresence /></div>
      <div id="contact" style={{ scrollMarginTop: '90px' }}><ContactUs /></div>
    </main>
  )
}