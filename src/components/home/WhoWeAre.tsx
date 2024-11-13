'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, TrendingUp, Users, Shield, LineChart, CheckCircle, Code, TrendingDown, UserCog } from 'lucide-react'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const services = [
    { title: "Strategic Planning", icon: Target },
    { title: "Architecture Assessments", icon: Shield },
    { title: "Technology Adoption Roadmaps", icon: Lightbulb },
    { title: "Partner & Vendor Evaluation", icon: Users },
    { title: "M&A Due Diligence", icon: LineChart },
    { title: "Software Development", icon: Code },
    { title: "Business & Technology Integration", icon: TrendingUp },
    { title: "Fractional CIO/CTO Roles", icon: UserCog }
]

const outcomes = [
    { title: "Improved Customer Experience", icon: Users },
    { title: "Increased Revenue Growth", icon: LineChart },
    { title: "Reduced Operating Costs", icon: TrendingDown },
    { title: "Reduced Operational Risk", icon: Shield },
    { title: "Improved Compliance", icon: CheckCircle }
]

export default function WhoWeAre() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#0070c0] mb-6">What We Do</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We provide Management Consulting for Board, C-Suite and Senior Executives. Our expertise lies in crafting and executing strategies that help accelerate business outcomes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border-t-4 border-[#0070c0]"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                            We Will Help You With
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="flex items-start space-x-3"
                                >
                                    <service.icon className="w-5 h-5 text-[#0070c0] mt-1" />
                                    <span className="text-gray-600 dark:text-gray-300">{service.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border-t-4 border-[#0070c0]"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                            To Deliver
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {outcomes.map((outcome) => (
                                <div
                                    key={outcome.title}
                                    className="flex items-start space-x-3"
                                >
                                    <outcome.icon className="w-5 h-5 text-[#0070c0] mt-1" />
                                    <span className="text-gray-600 dark:text-gray-300">{outcome.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Our proven approach combines strategic consulting with innovative digital solutions, 
                        enabling end-to-end execution capabilities through our trusted partners. We specialize 
                        in applying technology to drive high-impact transformations that enable business 
                        efficiency and growth.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}