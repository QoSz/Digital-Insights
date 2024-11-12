'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

const solutions = [
    {
        title: "Innovation & Generative AI Solutions",
        description: "Implementing cutting-edge AI technologies to drive innovation and business growth.",
        examples: [
            "Built Generative AI accelerators for Banking, Financial Services, Telecom, Travel, Hospitality, and Contact Center businesses",
            "Launched a modern AI and Data Analytics Platform across five industries",
            "Implemented AI-based omni-channel servicing solution, improving speed by 5X and net promoter score by 50%"
        ]
    },
    {
        title: "Multi Hybrid Cloud Solutions",
        description: "Designing and implementing scalable, flexible cloud infrastructures for modern businesses.",
        examples: [
            "Designed and implemented public, private, and hybrid cloud platforms",
            "Modernized business operations through cloud services",
            "Enabled significant cost reductions and revenue increases through cloud adoption"
        ]
    },
    {
        title: "Data & Analytics Solutions",
        description: "Leveraging data to drive insights, decision-making, and business performance.",
        examples: [
            "Implemented data management and analytics solutions for AI readiness",
            "Delivered a data-analytics cloud-based digital platform with 10 new products, enabling over $100M in annual revenue",
            "Built an AI-based Fraud Prevention Platform, improving detection and prevention by 50%"
        ]
    },
    {
        title: "Security & Compliance Solutions",
        description: "Ensuring robust security and regulatory compliance in the digital age.",
        examples: [
            "Designed cost-effective and auditable compliance and cybersecurity solutions",
            "Implemented automation and embedded governance in security processes",
            "Reduced operational risk and improved compliance across organizations"
        ]
    },
    {
        title: "Modernization & Automation Solutions",
        description: "Transforming legacy systems and processes for increased efficiency and competitiveness.",
        examples: [
            "Implemented operations modernization and robotics automation",
            "Delivered intelligent process automation for financial operations",
            "Achieved $450M annualized Opex savings through innovative digital solutions and process reengineering"
        ]
    }
]

// Animation variants
const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const cardVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
}

const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
}

export default function Solutions() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5 }}
                >
                    Our Solutions
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariant}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="p-6 flex-grow">
                                <motion.h3 
                                    variants={fadeUpVariant}
                                    className="text-xl font-semibold mb-4 text-[#0070c0] dark:text-[#00a2ff]"
                                >
                                    {solution.title}
                                </motion.h3>
                                <motion.p 
                                    variants={fadeUpVariant}
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                >
                                    {solution.description}
                                </motion.p>
                                <ul className="space-y-2">
                                    {solution.examples.map((example, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            className="flex items-start"
                                            variants={listItemVariant}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                        >
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-sm text-gray-700 dark:text-gray-200">{example}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <motion.div 
                                className="px-6 py-4 bg-gray-50 dark:bg-gray-700 mt-auto"
                                variants={fadeUpVariant}
                                transition={{ delay: 0.2 }}
                            >
                                <Button 
                                    className="w-full bg-[#0070c0] hover:bg-[#005a9e] text-white"
                                >
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-12 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button 
                        asChild 
                        size="lg" 
                        className="bg-[#0070c0] hover:bg-[#005a9e] text-white"
                    >
                        <a href="/contact">Get Started with Our Solutions</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}