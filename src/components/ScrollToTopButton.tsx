'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        const scrollStep = window.scrollY / 50; // Adjust the divisor for speed
        const scrollAnimation = () => {
            if (window.scrollY > 0) {
                window.scrollBy(0, -scrollStep); // Scroll up
                requestAnimationFrame(scrollAnimation); // Continue the animation
            }
        };
        requestAnimationFrame(scrollAnimation); // Start the animation
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 bg-[#0070c0] text-white rounded-full shadow-lg hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-[#0070c0] focus:ring-offset-2 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}