'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe2 } from 'lucide-react'

const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const pulseVariant = {
    initial: { scale: 1, opacity: 0.5 },
    animate: { 
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const locations = [
    { 
        location: "Global HQ", 
        city: "Michigan, USA", 
        image: "/images/USA.webp",
        dotPosition: { top: "34%", left: "63%" }  // Adjust for Michigan's position
    },
    { 
        location: "Global Business Center", 
        city: "Dubai, UAE", 
        image: "/images/UAE.webp",
        dotPosition: { top: "35%", left: "65%" }  // Adjust for Dubai's position
    },
    { 
        location: "Global Operations", 
        city: "Nairobi, Kenya", 
        image: "/images/Africa.webp",
        dotPosition: { top: "46%", left: "63%" }  // Adjust for Nairobi's position
    }
]

export default function GlobalPresence() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className='py-12 px-4'
        >
            <h3 className="text-3xl font-bold text-center mb-8 text-[#0070c0] dark:text-gray-100">
                <div className="flex items-center justify-center gap-2">
                    <Globe2 className="h-8 w-8" />
                    Our Global Presence
                </div>
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-center">
                {locations.map((office, index) => (
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
                            <motion.div
                                className="absolute w-3 h-3 bg-[#0070c0] rounded-full"
                                style={office.dotPosition}
                                variants={pulseVariant}
                                initial="initial"
                                animate="animate"
                            />
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{office.location}</p>
                        <p className="text-[#0070c0] dark:text-[#0070c0]">{office.city}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}