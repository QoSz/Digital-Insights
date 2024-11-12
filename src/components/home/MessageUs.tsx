'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send } from 'lucide-react'
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
import { useToast } from '@/hooks/use-toast'

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

// Add animation variants
const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const formFieldVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
}

export default function MessageUs() {
    const { toast } = useToast()
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
            toast({
                title: "Message Sent",
                description: "We'll get back to you as soon as possible.",
            })
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
                    variants={fadeUpVariant}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <motion.h2 
                        variants={fadeUpVariant}
                        className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
                    >
                        Message Us
                    </motion.h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                variants={fadeUpVariant}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <motion.div
                                    variants={formFieldVariant}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                                <motion.div
                                    variants={formFieldVariant}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                variants={fadeUpVariant}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <motion.div
                                    variants={formFieldVariant}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                >
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+1234567890" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                                <motion.div
                                    variants={formFieldVariant}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                >
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Subject</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Inquiry about services" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                variants={fadeUpVariant}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your project or inquiry..."
                                                    className="min-h-[150px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                            <motion.div
                                variants={fadeUpVariant}
                                transition={{ duration: 0.5, delay: 0.4 }}
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
            </div>
        </section>
    )
}