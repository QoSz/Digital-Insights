'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

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
    // Animation variants
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const cardVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
                >
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.title} 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariant}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full"
                        >
                            <div className="flex-grow">
                                <motion.h3 
                                    variants={fadeUpVariant}
                                    className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100"
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p 
                                    variants={fadeUpVariant}
                                    className="text-gray-600 dark:text-gray-300"
                                >
                                    {service.description}
                                </motion.p>
                            </div>
                            <motion.div 
                                className="mt-6"
                                variants={fadeUpVariant}
                                transition={{ delay: 0.2 }}
                            >
                                <Button
                                    asChild
                                    variant="outline"
                                    className="text-[#0070c0] border-[#0070c0] hover:bg-[#0070c0] hover:text-white dark:text-[#00a2ff] dark:border-[#00a2ff] dark:hover:bg-[#00a2ff] dark:hover:text-gray-900"
                                >
                                    <Link href="/services">Learn More</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <motion.div 
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#0070c0] hover:bg-[#005a9e] text-white dark:bg-[#00a2ff] dark:hover:bg-[#0081cc]"
                    >
                        <Link href="/additional-services">View Our Additional Services</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}