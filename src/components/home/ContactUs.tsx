'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, Mail, Phone, Globe, MapPin, MessageSquare, MessageCircleMore } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Please enter a valid phone number.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

const cardHoverVariant = {
    hover: {
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 300,
        }
    }
}

const contactInfo = [
    {
        icon: Globe,
        title: "Website",
        content: "www.digital-insights.ai",
        link: "https://www.digital-insights.ai"
    },
    {
        icon: Mail,
        title: "Email",
        content: "info@digital-insights.ai",
        link: "mailto:info@digital-insights.ai"
    },
    {
        icon: Phone,
        title: "Phone",
        content: [
            "US: +1480-225-xxxx",
            "UAE: +971 4 553 xxxx",
            "Africa: +254-705-xxxxxx"
        ]
    },
    {
        icon: MapPin,
        title: "Global Offices",
        content: [
            "Global HQ: Michigan, USA",
            "Global Business Center: Dubai, UAE",
            "Global Operations: Nairobi, Kenya"
        ]
    }
]

export default function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            console.log(values)
            setIsSubmitting(false)
            form.reset()
        }, 2000)
    }

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-4 text-[#0070c0] dark:text-gray-100"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <MessageSquare className="h-8 w-8" />
                            Contact Us
                        </div>
                    </motion.h2>
                    <motion.p
                        className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                    >
                        Ready to accelerate your business outcomes? Get in touch with our team of experts.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
                    >
                        {contactInfo.map((info) => (
                            <motion.div 
                                key={info.title} 
                                variants={cardHoverVariant} 
                                whileHover="hover"
                            >
                                <Card className="bg-white dark:bg-gray-800">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-2 bg-[#0070c0]/10 rounded-lg">
                                                <info.icon className="h-6 w-6 text-[#0070c0] dark:text-gray-100" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                    {info.title}
                                                </h3>
                                                {Array.isArray(info.content) ? (
                                                    <div className="space-y-1">
                                                        {info.content.map((item, idx) => (
                                                            <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                                                                {item}
                                                            </p>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <a
                                                        href={info.link}
                                                        className="text-[#0070c0] hover:text-[#005a9e] text-sm transition-colors"
                                                    >
                                                        {info.content}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold text-[#0070c0] mb-6 text-center dark:text-gray-100">
                            <div className="flex items-center justify-center gap-2">
                                <MessageCircleMore className="h-6 w-6" />
                                Let&apos;s Have a Discussion
                            </div>
                        </h3>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@example.com" className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="+1234567890" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Subject</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="Inquiry about services" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your project or inquiry..."
                                                    className="min-h-[150px] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#0070c0] hover:bg-[#005a9e] text-white"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </motion.div>
                            </form>
                        </Form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}