"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { 
    MenuIcon,
    InfoIcon, 
    Settings, 
    LightbulbIcon,
    PhoneIcon,
    Users,
    Workflow,
    UserIcon,
    ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigationLinks = [
    { href: "#services", label: "Services", icon: <Settings className="h-4 w-4 mr-2" /> },
    { href: "#solutions", label: "Solutions", icon: <LightbulbIcon className="h-4 w-4 mr-2" /> },
    { href: "#approach", label: "Approach", icon: <Workflow className="h-4 w-4 mr-2" /> },
    { href: "#contact", label: "Contact", icon: <PhoneIcon className="h-4 w-4 mr-2" /> },
]

const aboutDropdownItems = [
    { label: "Who We Are", href: "#whoweare", icon: <InfoIcon className="h-4 w-4 mr-2" /> },
    { label: "Leadership", href: "#leadership", icon: <Users className="h-4 w-4 mr-2" /> },
]

function DesktopDropdown() {
    return (
        <div className="relative group inline-block">
            <button className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60">
                <UserIcon className="h-4 w-4 mr-2" />
                About
                <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {aboutDropdownItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-2 text-sm text-foreground/60 hover:text-foreground/80 hover:bg-accent"
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

function MobileDropdown({ onMobileClick }: { onMobileClick?: () => void }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
                <UserIcon className="h-4 w-4 mr-2" />
                About
                <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {aboutDropdownItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                        <Link
                            href={item.href}
                            className="flex items-center w-full"
                            onClick={onMobileClick}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

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
                <nav className="hidden md:flex items-center space-x-6 text-base font-medium relative">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                    <DesktopDropdown />
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
                            <SheetTitle className="sr-only">
                                Navigation Menu
                            </SheetTitle>
                            <SheetDescription className="sr-only">
                                Mobile navigation menu for accessing site sections
                            </SheetDescription>
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
                                {navigationLinks.map((link) => (
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
                                <MobileDropdown onMobileClick={() => setIsOpen(false)} />
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