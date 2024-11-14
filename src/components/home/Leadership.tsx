'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Users2 } from 'lucide-react'

export default function Leadership() {
    const containerRef = useRef(null)
    const [isExpanded, setIsExpanded] = useState(false)

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const leaders = [
        { name: "Sangy Vatsa", role: "Founder", description: "Sangy Vatsa is a distinguished technology visionary and innovation leader with over three decades of transformative experience across global Fortune companies. As a seasoned CTO/CIO/CDO, he has orchestrated six major digital transformations that generated between $1.5-3 billion in net income improvements. His expertise spans artificial intelligence, digital innovation, cybersecurity, and enterprise technology, demonstrated through executive roles at Ford, American Express, Comerica, FIS, and HTC. A trusted advisor to PE, VC, and startup sectors for over 20 years, Sangy combines strategic insight with technical mastery to drive business growth and innovation at scale." },
        { name: "Ramit Walia", role: "Chief Growth Enabler", description: "Ramit Walia is an accomplished entrepreneur and business leader with over two decades of experience in building and scaling successful ventures across diverse sectors. As the founder and director of multiple companies including Good Elevator and Escalator Solutions Ltd and Good Living Properties Ltd, he has demonstrated exceptional acumen in real estate, hospitality, consulting, and agri-business. A certified professional holding CPA (K), CPS (K), and ACCA (UK) credentials, Ramit specializes in driving operational efficiency and strategic growth, consistently delivering superior financial performance across his portfolio of businesses." },
        { name: "Muhammad Khan", role: "Chief Technologist", description: "Muhammad Khan brings over 30 years of expertise as a strategic technology leader, specializing in driving transformational change across complex enterprise environments. His distinguished career spans Fortune 500 companies, high-growth firms, and startups in the financial services, software, insurance, and travel industries. With senior leadership roles at FIS, American Express, and Prudential, Muhammad has consistently delivered innovative technology solutions that drive business outcomes. His expertise encompasses digital transformation, enterprise architecture, AI/ML implementation, and emerging technology integration, making him a valuable advisor for organizations navigating technological change." }
    ]

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-8 text-center text-[#0070c0] dark:text-white"
                >
                    <div className="flex items-center justify-center gap-2">
                        <Users2 className="h-8 w-8" />
                        Leadership
                    </div>
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 mb-12">
                    {leaders.slice(0, isExpanded ? leaders.length : 1).map((leader, index) => (
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

                <div className="flex justify-center mt-8">
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center px-4 py-2 bg-[#0070c0] text-white rounded-full hover:bg-[#005a9e] transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="mr-2" />
                                Show Less
                            </>
                        ) : (
                            <>
                                <ChevronDown className="mr-2" />
                                Show More
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </section>
    )
}