'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CompanyLogo } from '@/public/assets/company';
import Button from './buttons';
import links from '@/data/links';
import FireAIDemoModal from './demo-modal';

const navLinks = [
    { name: "Our Solutions", href: "/#solutions" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "Features", href: "/#features" },
    { name: "Career", href: "/career" },
    { name: "FAQ", href: "/#faq" }
];

const actionLinks = [
    {
        name: "Login",
        href: links.applicationLinks.login,
        variant: "secondary",
        type: 'link'
    },
    {
        name: "Get a demo",
        href: links.demoLink,
        variant: "primary",
        type: 'button',
    }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <header className="fixed top-2 lg:top-6 left-0 right-0 z-50 w-fit rounded-[12px] mx-auto shadow-sm">
            <nav className="h-[66px] max-w-[1200px] mx-auto px-6 flex justify-between items-center gap-14 backdrop-blur-md bg-white/80 rounded-[12px] border border-white/20">
                {/* Logo */}
                <Link href="/" className="flex items-center h-full">
                    <Image src={CompanyLogo} alt="FireAI Logo" className="h-[25px] lg:h-[37px] w-[90px] lg:w-[137px]" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8 h-full text-[16px]">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="relative group flex items-center h-full"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0600A3] to-[#0169FD] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {link.name}
                            </span>
                            <span className="absolute inset-0 text-gray-600 group-hover:opacity-0 transition-opacity duration-300 flex items-center">
                                {link.name}
                            </span>
                            <span className="absolute bottom-[22px] left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#0600A3] to-[#0169FD]" />
                        </Link>
                    ))}
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden lg:flex items-center gap-4 h-full">
                    {actionLinks.map((link, index) =>
                        link.type !== "link" ? (
                            <Button
                                key={index}
                                size="small"
                                variant={link.variant as "secondary" | "primary"}
                                onClick={() => setIsDemoModalOpen(true)}
                            >
                                {link.name}
                            </Button>
                        ) : (
                            <Button
                                key={index}
                                size="small"
                                variant={link.variant as "secondary" | "primary"}
                                onClick={() => window.open(link.href, "_blank")}
                            >
                                {link.name}
                            </Button>
                        )
                    )}
                </div>

                {/* Mobile Navigation */}
                <div className="flex lg:hidden items-center gap-4 h-full">
                    <Button 
                        variant="primary" 
                        size="small"
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsDemoModalOpen(true);
                        }}
                    >
                        Get a demo
                    </Button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 hover:text-gray-900"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>
            </nav>
            <FireAIDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white mt-2 p-4 rounded-lg">
                    {navLinks.map((link, index) => (
                        <Link 
                            key={index}
                            href={link.href} 
                            className="block py-2 text-gray-600 hover:text-gray-900" 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link 
                        href={actionLinks[0].href} 
                        className="block py-2 text-gray-900 hover:text-gray-600"
                    >
                        {actionLinks[0].name}
                    </Link>
                </div>
            )}
        </header>
    );
}