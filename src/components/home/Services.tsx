import Link from 'next/link'
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "Strategic Planning & Architecture Assessments",
        description: "Crafting strategies for digital transformation and assessing current architectures.",
    },
    {
        title: "Technology Adoption & Roadmaps",
        description: "Guiding businesses through technology adoption with clear, actionable roadmaps.",
    },
    {
        title: "Fractional CXO Roles",
        description: "Providing experienced leadership in CIO/CTO roles to drive digital initiatives.",
    },
    {
        title: "Software Development and Integration",
        description: "Delivering custom software solutions and seamless integration with existing systems.",
    },
]

export default function Services() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <Button asChild variant="outline" className="text-[#0070c0] border-[#0070c0] hover:bg-[#0070c0] hover:text-white">
                            <Link href="/services">Learn More</Link>
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    )
}