'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

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
            <h3 className="text-3xl font-bold text-center mb-8 text-[#0070c0] dark:text-gray-100">Our Global Presence</h3>
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
    )
}