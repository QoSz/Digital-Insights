'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"

export default function Hero() {
    const { theme } = useTheme()

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke={theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)'} strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-4xl leading-tight font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Accelerating Business Outcomes with{' '}
                            <span className="inline-block bg-gradient-to-r from-[#0070c0] via-[#00a2ff] to-[#0070c0] text-transparent bg-clip-text">
                                AI and Digital Transformation
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8">
                            Expert consulting and digital solutions that drive growth, streamline operations, and enhance customer experience through AI and transformative technologies.
                        </p>
                        <Button
                            asChild
                            className="bg-[#0070c0] hover:bg-[#005a9e] text-white px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link href="/contact">Get Started Today</Link>
                        </Button>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] max-w-xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0070c0] to-[#00a2ff] rounded-xl opacity-70 transform rotate-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0070c0] to-[#00a2ff] rounded-xl opacity-50 transform -rotate-1" />
                            <Image
                                src="https://placehold.co/800x600"
                                alt="AI and Digital Transformation"
                                fill
                                className="rounded-xl shadow-2xl relative z-10 object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}