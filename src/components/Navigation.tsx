"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { 
    MenuIcon,
    InfoIcon, 
    WrenchIcon, 
    LightbulbIcon, 
    HandshakeIcon, 
    PhoneIcon,
    UsersIcon 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

const links = [
    { href: "#services", label: "Services", icon: <WrenchIcon className="h-4 w-4 mr-2" /> },
    { href: "#solutions", label: "Solutions", icon: <LightbulbIcon className="h-4 w-4 mr-2" /> },
    { href: "#engagement", label: "Engagement", icon: <HandshakeIcon className="h-4 w-4 mr-2" /> },
    { href: "#about", label: "About", icon: <InfoIcon className="h-4 w-4 mr-2" /> },
    { href: "#behind", label: "Behind", icon: <UsersIcon className="h-4 w-4 mr-2" /> },
    { href: "#contact", label: "Contact", icon: <PhoneIcon className="h-4 w-4 mr-2" /> },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-20 items-center justify-between px-4 w-full">
                <div className="flex items-center">
                    <Link href="/" className="flex flex-col items-center">
                        <span className="text-lg font-bold">
                            Digit<span className="text-[#0070c0]">Al</span>
                        </span>
                        <span className="text-lg font-bold text-[#0070c0]">Insights</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
                <div className="flex items-center md:hidden">
                    <ThemeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                            >
                                <MenuIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="pr-0">
                            <Link
                                href="/"
                                className="flex items-center mb-4"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-lg font-bold">
                                    Digit<span className="text-[#0070c0]">Al</span>
                                </span>
                                <span className="text-lg font-bold text-[#0070c0] ml-1">Insights</span>
                            </Link>
                            <nav className="flex flex-col space-y-3">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.icon}
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Switch
            id="theme-toggle"
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative inline-flex h-6 w-11"
        />
    )
}