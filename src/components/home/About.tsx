'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const containerRef = useRef(null)

    // Fade up animation variant
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    // Scale up animation variant
    const scaleUpVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-8 text-center text-[#0070c0]"
                >
                    About DigitAI Insights
                </motion.h2>
                
                <motion.p 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg mb-12 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
                >
                    We deliver strategic consulting and innovative digital solutions, driving transformative and high-impact business outcomes. Our team of top executives brings 90+ years of combined Business, Technology, and Operations experience across multiple industries.
                </motion.p>

                <div className="grid grid-cols-1 gap-8 mb-12">
                    {[
                        { name: "Sangy Vatsa", role: "Founder", description: "Sangy Vatsa is a distinguished technology visionary and innovation leader with over three decades of transformative experience across global Fortune companies. As a seasoned CTO/CIO/CDO, he has orchestrated six major digital transformations that generated between $1.5-3 billion in net income improvements. His expertise spans artificial intelligence, digital innovation, cybersecurity, and enterprise technology, demonstrated through executive roles at Ford, American Express, Comerica, FIS, and HTC. A trusted advisor to PE, VC, and startup sectors for over 20 years, Sangy combines strategic insight with technical mastery to drive business growth and innovation at scale." },
                        { name: "Ramit Walia", role: "Chief Growth Enabler", description: "Ramit Walia is an accomplished entrepreneur and business leader with over two decades of experience in building and scaling successful ventures across diverse sectors. As the founder and director of multiple companies including Good Elevator and Escalator Solutions Ltd and Good Living Properties Ltd, he has demonstrated exceptional acumen in real estate, hospitality, consulting, and agri-business. A certified professional holding CPA (K), CPS (K), and ACCA (UK) credentials, Ramit specializes in driving operational efficiency and strategic growth, consistently delivering superior financial performance across his portfolio of businesses." },
                        { name: "Muhammad Khan", role: "Chief Technologist", description: "Muhammad Khan brings over 30 years of expertise as a strategic technology leader, specializing in driving transformational change across complex enterprise environments. His distinguished career spans Fortune 500 companies, high-growth firms, and startups in the financial services, software, insurance, and travel industries. With senior leadership roles at FIS, American Express, and Prudential, Muhammad has consistently delivered innovative technology solutions that drive business outcomes. His expertise encompasses digital transformation, enterprise architecture, AI/ML implementation, and emerging technology integration, making him a valuable advisor for organizations navigating technological change." }
                    ].map((leader, index) => (
                        <motion.div 
                            key={leader.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUpVariant}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-t-4 border-[#0070c0]"
                        >
                            <div className="md:w-1/4 flex flex-col items-center justify-center md:pr-8">
                                <div className="w-32 h-32 rounded-full bg-[#0070c0] flex items-center justify-center text-white text-3xl font-bold mb-4">
                                    {leader.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">{leader.name}</h3>
                                <p className="text-[#0070c0] font-medium text-md">{leader.role}</p>
                            </div>
                            <div className="md:w-3/4 md:pl-8 md:border-l border-gray-200 dark:border-gray-700 mt-6 md:mt-0 flex items-center">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{leader.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center text-[#0070c0]">Our Global Presence</h3>
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        {[
                            { location: "Global HQ", city: "Michigan, USA", image: "/images/USA.webp" },
                            { location: "Global Business Center", city: "Dubai, UAE", image: "/images/UAE.webp" },
                            { location: "Global Operations", city: "Nairobi, Kenya", image: "/images/Africa.webp" }
                        ].map((office, index) => (
                            <motion.div
                                key={office.location}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleUpVariant}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[#0070c0] w-64"
                            >
                                <div className="relative w-full h-40 mb-4">
                                    <Image
                                        src={office.image}
                                        alt={office.location}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
                                        className="rounded-lg object-contain"
                                    />
                                </div>
                                <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{office.location}</p>
                                <p className="text-[#0070c0] dark:text-[#0070c0]">{office.city}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-100 dark:bg-gray-800 py-8 px-4 rounded"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center text-[#0070c0]">Leadership Team Experience</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
                        {[
                            { name: "American Express", image: "/images/American-Express-Logo.webp" },
                            { name: "IBM", image: "/images/IBM-Logo.webp" },
                            { name: "Ford", image: "/images/Ford-Logo.webp" },
                            { name: "Prudential", image: "/images/Prudential-Logo.webp" },
                            { name: "FIS", image: "/images/FIS-Logo.webp" },
                            { name: "Lubrizol", image: "/images/Lubrizol-Logo.webp" },
                            { name: "Comerica Bank", image: "/images/Comerica-Logo.webp" }
                        ].map((client, index) => (
                            <motion.div
                                key={client.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleUpVariant}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative w-[100px] h-[50px] mb-2">
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 100px) 100px, 50px"
                                        className="transition-opacity duration-300 hover:opacity-80 object-contain"
                                    />
                                </div>
                                <p className="text-s text-center text-gray-600 dark:text-gray-400">{client.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}