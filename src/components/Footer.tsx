import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail, Phone, Globe, UsersIcon } from 'lucide-react'
import { InfoIcon, WrenchIcon, LightbulbIcon, HandshakeIcon } from 'lucide-react'

const navigationLinks = [
    { href: '#services', label: 'Services', icon: <WrenchIcon className="h-4 w-4 mr-2" /> },
    { href: '#solutions', label: 'Solutions', icon: <LightbulbIcon className="h-4 w-4 mr-2" /> },
    { href: '#engagement', label: 'Engagement', icon: <HandshakeIcon className="h-4 w-4 mr-2" /> },
    { href: '#about', label: 'About', icon: <InfoIcon className="h-4 w-4 mr-2" /> },
    { href: '#behind', label: 'Behind', icon: <UsersIcon className="h-4 w-4 mr-2" /> },
    { href: '#contact', label: 'Contact', icon: <Phone className="h-4 w-4 mr-2" /> },
]

const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
]

export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                    {/* Company Info */}
                    <div className="space-y-3">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                Digit<span className="text-[#0070c0]">AI</span> <span className="text-[#0070c0]">Insights</span>
                            </span>
                        </Link>
                        <p className="text-s text-gray-600 dark:text-gray-400">
                            Accelerating Business Outcomes with AI and Digital Transformation
                        </p>
                        <div className="space-y-1.5">
                            <a
                                href="mailto:info@digital-insights.ai"
                                className="flex items-center text-base hover:text-[#0070c0] transition-colors"
                            >
                                <Mail className="h-5 w-5 mr-2" />
                                info@digital-insights.ai
                            </a>
                            <div className="flex items-start text-base">
                                <Phone className="h-5 w-5 mr-2 mt-1" />
                                <div className="space-y-0.5">
                                    <p>US: +1480-225-xxxx</p>
                                    <p>UAE: +971 4 553 xxxx</p>
                                    <p>Africa: +254-705-xxxxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:ml-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
                        <ul className="space-y-1.5">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center text-base hover:text-[#0070c0] transition-colors inline-block"
                                    >
                                        {link.icon}
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links and Website */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Connect With Us</h3>
                        <div className="flex space-x-4 mb-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 hover:text-[#0070c0] transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                        <a
                            href="https://www.digital-insights.ai"
                            className="text-base hover:text-[#0070c0] transition-colors flex items-center"
                        >
                            <Globe className="h-5 w-5 mr-2" />
                            www.digital-insights.ai
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-sm font-semibold text-center text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} DigitAI Insights. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}