'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Lightbulb, Building2, BrainCircuit, Cloud, Database, Shield, Blocks } from 'lucide-react'

const solutions = [
    {
        title: "Generative AI Solutions",
        description: "Leveraging cutting-edge AI technologies for business transformation.",
        icon: BrainCircuit,
        examples: [
            "Generative accelerators",
            "Machine and deep learning",
            "Intelligent Automation",
            "GenAI workbench - LLMs, RAG, SLMs, Prompt, LLMOps",
            "Copilot Integrations- AutoDev, Q Developer and Devin"
        ]
    },
    {
        title: "Cloud Computing Solutions",
        description: "Enabling digital transformation through comprehensive cloud services.",
        icon: Cloud,
        examples: [
            "Public, private, and hybrid cloud platforms",
            "Cloud migration and optimization",
            "Infrastructure as Code (IaC)",
            "Cloud-native development",
            "Serverless architectures"
        ]
    },
    {
        title: "Data Engineering & Analytics",
        description: "Transforming data into actionable insights for business growth.",
        icon: Database,
        examples: [
            "Data architecture and engineering",
            "Business intelligence solutions",
            "Predictive analytics",
            "Real-time data processing",
            "Data governance and quality"
        ]
    },
    {
        title: "Cybersecurity and Compliance",
        description: "Ensuring robust security and regulatory compliance.",
        icon: Shield,
        examples: [
            "Security architecture design",
            "Compliance frameworks implementation",
            "Threat detection and prevention",
            "Security automation",
            "Risk assessment and management"
        ]
    },
    {
        title: "Low Code Development",
        description: "Accelerating development through low-code platforms.",
        icon: Blocks,
        examples: [
            "Rapid application development",
            "Process automation",
            "Custom workflow solutions",
            "Integration capabilities",
            "Citizen developer enablement"
        ]
    }
]

const industries = [
    "Financial Services",
    "Banking",
    "Healthcare",
    "Insurance",
    "Retail",
    "Public Sector",
    "Telco",
    "Automotive",
    "Manufacturing",
    "Oil & Gas",
    "Travel",
    "Hospitality"
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
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                >
                    <h2 className="text-3xl font-bold text-[#0070c0] dark:text-gray-100 mb-4">
                        <div className="flex items-center justify-center gap-2">
                            <Lightbulb className="h-8 w-8" />
                            Solutions we have delivered
                        </div>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto italic">
                        We have driven Digital Transformations in multiple industries by crafting technology enabled solutions utilizing:
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariant}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-6">
                                <motion.h3 
                                    variants={fadeUpVariant}
                                    className="text-xl font-semibold mb-4 text-[#0070c0] dark:text-[#00a2ff]"
                                >
                                    <div className="flex items-center gap-2">
                                        {React.createElement(solution.icon, { className: "h-8 w-8" })}
                                        {solution.title}
                                    </div>
                                </motion.h3>
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
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                >
                    <h3 className="text-xl font-semibold mb-4 text-[#0070c0] dark:text-[#00a2ff]">
                        <div className="flex items-center justify-center gap-2">
                            <Building2 className="h-6 w-6" />
                            Industries We Serve
                        </div>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map((industry, index) => (
                            <motion.span
                                key={industry}
                                variants={fadeUpVariant}
                                transition={{ delay: index * 0.1 }}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 text-sm"
                            >
                                {industry}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}