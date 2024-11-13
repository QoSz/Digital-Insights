'use client'

import { motion } from 'framer-motion'
import { BarChart2, Users, Truck, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const engagementModels = [
    {
        title: "Strategic",
        icon: BarChart2,
        description: "Typically, a 30-to-90-day engagement.",
        outputs: [
            "SWOT analysis",
            "Strategy, Roadmaps and Financial analysis",
            "Assessments (Partner, Technology, Operations, etc.)"
        ]
    },
    {
        title: "Consultative",
        icon: Users,
        description: "Can be a phase after Strategic engagement. We remain engaged while your team executes:",
        outputs: [
            "We will help guide execution based on strategic plan and roadmaps",
            "We act as a sounding board for tactical matters and adjustments to plans as needed",
            "We help measure progress and report out results"
        ]
    },
    {
        title: "End to end delivery",
        icon: Truck,
        description: "Can be a phase after Strategic engagement. We take end to end accountability for:",
        outputs: [
            "Developing the optimal solution per the strategy, roadmap and financial plan",
            "Running the development program(s) via our trusted development partners",
            "Rolling out developed solutions in collaboration with your team"
        ]
    }
]

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

export default function EngagementModels() {
    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#0070c0] dark:text-gray-100 mb-4">
                        How We Engage
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We offer three models of engagement to best suit your needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {engagementModels.map((model, index) => (
                        <motion.div
                            key={model.title}
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
                        >
                            <div className="p-6 flex-grow">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-full bg-[#0070c0] bg-opacity-10">
                                        <model.icon className="h-6 w-6 text-[#0070c0]" />
                                    </div>
                                    <h3 className="text-xl font-semibold ml-4 text-gray-900 dark:text-gray-100">
                                        {model.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {model.description}
                                </p>
                                <ul className="space-y-3">
                                    {model.outputs.map((output, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="h-5 w-5 text-[#0070c0] mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {output}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#0070c0] hover:bg-[#005a9e] text-white"
                    >
                        <a href="#contact">Discuss Your Project</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}