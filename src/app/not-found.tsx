'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8 text-center relative z-10"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                    className="text-[#0070c0] dark:text-[#00a2ff] text-9xl font-extrabold"
                >
                    404
                </motion.div>
                <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl sm:tracking-tight">
                    Page Not Found
                </h1>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-8">
                    <Button asChild className="bg-[#0070c0] hover:bg-[#005a9e] dark:bg-[#00a2ff] dark:hover:bg-[#0081cc] text-white inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}