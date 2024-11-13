'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function Hero() {
    const { theme } = useTheme()

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const fadeInRight = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    const imageAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
            >
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke={theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </motion.div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={fadeInRight}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col items-center text-center"
                    >
                        <motion.h1 
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl sm:text-4xl lg:text-4xl leading-tight font-bold text-gray-900 dark:text-gray-100 mb-6"
                        >
                            Accelerating Business Outcomes with{' '}
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="inline-block bg-gradient-to-r from-[#0070c0] via-[#00a2ff] to-[#0070c0] text-transparent bg-clip-text"
                            >
                                AI and Digital Transformation
                            </motion.span>
                        </motion.h1>
                        <motion.p 
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8"
                        >
                            Expert consulting and digital solutions that drive growth, streamline operations, and enhance customer experience through AI and transformative technologies.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Button
                                asChild
                                className="bg-[#0070c0] hover:bg-[#005a9e] text-white px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Link href="#contact">Get Started Today</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={imageAnimation}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[4/3] max-w-xl mx-auto">
                            <motion.div 
                                initial={{ opacity: 0, rotate: 1 }}
                                animate={{ opacity: 0.7, rotate: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute inset-0 bg-gradient-to-r from-[#0070c0] to-[#00a2ff] rounded-xl transform"
                            />
                            <motion.div 
                                initial={{ opacity: 0, rotate: -1 }}
                                animate={{ opacity: 0.5, rotate: -1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-r from-[#0070c0] to-[#00a2ff] rounded-xl transform"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src="/images/Digital-Transformation.webp"
                                    alt="AI and Digital Transformation"
                                    fill
                                    className="rounded-xl shadow-2xl relative z-10 object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}