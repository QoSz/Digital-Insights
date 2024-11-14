'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "Strategic Planning & Architecture Assessments",
        description: "Crafting strategies for digital transformation and assessing current architectures.",
        details: [
            "Enterprise Architecture Assessment & Planning",
            "Digital Transformation Strategy Development",
            "Technology Stack Evaluation & Modernization",
            "Infrastructure Optimization & Cloud Strategy",
            "Security Architecture Review & Enhancement",
            "Business Process Re-engineering",
            "ROI Analysis & Business Case Development"
        ]
    },
    {
        title: "Technology Adoption & Roadmaps",
        description: "Guiding businesses through technology adoption with clear, actionable roadmaps.",
        details: [
            "AI & Machine Learning Integration Strategy",
            "Cloud Migration Planning & Execution",
            "Digital Innovation Roadmap Development",
            "Technology Stack Modernization",
            "Data Analytics & Business Intelligence Strategy",
            "Implementation Timeline & Milestone Planning",
            "Risk Assessment & Mitigation Planning"
        ]
    },
    {
        title: "Fractional CXO Roles",
        description: "Providing experienced leadership in CIO/CTO roles to drive digital initiatives.",
        details: [
            "Interim CIO/CTO Leadership",
            "Digital Strategy Development & Execution",
            "IT Governance & Compliance Management",
            "Technology Budget Optimization",
            "Vendor Management & Partnership Development",
            "Team Building & Leadership Development",
            "Board & Stakeholder Communication"
        ]
    },
    {
        title: "Software Development and Integration",
        description: "Delivering custom software solutions and seamless integration with existing systems.",
        details: [
            "Custom Software Development",
            "Legacy System Modernization",
            "API Development & Integration",
            "Cloud-Native Application Development",
            "AI & ML Solution Implementation",
            "Quality Assurance & Testing",
            "Continuous Integration/Deployment (CI/CD)"
        ]
    },
]

interface ModalProps {
    service: typeof services[0]
    onClose: () => void
}

function ServiceModal({ service, onClose }: ModalProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    <X className="h-6 w-6" />
                </button>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 pr-8">
                    {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                </p>
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-[#0070c0] dark:text-[#00a2ff] mb-3">
                        Key Features & Capabilities:
                    </h4>
                    <ul className="space-y-3">
                        {service.details.map((detail, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center text-gray-700 dark:text-gray-300"
                            >
                                <div className="h-2 w-2 bg-[#0070c0] dark:bg-[#00a2ff] rounded-full mr-3" />
                                {detail}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

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
                    className="text-3xl font-bold mb-8 text-center text-[#0070c0] dark:text-gray-100"
                >
                    <div className="flex items-center justify-center gap-2">
                        <Settings className="h-8 w-8" />
                        Our Services
                    </div>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                    variant="outline"
                                    onClick={() => setSelectedService(service)}
                                    className="text-[#0070c0] border-[#0070c0] hover:bg-[#0070c0] hover:text-white dark:text-[#00a2ff] dark:border-[#00a2ff] dark:hover:bg-[#00a2ff] dark:hover:text-gray-900"
                                >
                                    Learn More
                                </Button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <ServiceModal
                        service={selectedService}
                        onClose={() => setSelectedService(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}