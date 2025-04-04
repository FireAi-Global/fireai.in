import { Component, createSignal } from 'solid-js';
import { CompanyLogo } from '../../assets/company';
import Button from './buttons';
import links from '../../data/links';
import { A } from "@solidjs/router";
import FireAIDemoModal from './demo-modal';

const navLinks = [
    { name: "Our Solutions", href: "/#solutions" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "Features", href: "/#features" },
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



const Header: Component = () => {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = createSignal(false);

    return (
        <header class="fixed top-2 lg:top-6 left-0 right-0 z-50 w-[80%] lg:w-[870px] rounded-[12px] mx-auto">
            <nav class="h-[66px] max-w-[1200px] mx-auto px-6 flex justify-between items-center backdrop-blur-md bg-white/80 rounded-[12px] border border-white/20">
                {/* Logo */}
                <a href="/" class="flex items-center h-full">
                    <img src={CompanyLogo} alt="FireAI Logo" class="h-[25px] lg:h-[37px] w-[90px] lg:w-[137px]" />
                </a>

                {/* Desktop Navigation */}
                <div class="hidden lg:flex items-center gap-8 h-full text-[16px]">
                    {navLinks.map(link => (
                        <A
                            href={link.href}
                            class="relative group flex items-center h-full"
                        >
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#0600A3] to-[#0169FD] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {link.name}
                            </span>
                            <span class="absolute inset-0 text-gray-600 group-hover:opacity-0 transition-opacity duration-300 flex items-center">
                                {link.name}
                            </span>
                            <span class="absolute bottom-[22px] left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#0600A3] to-[#0169FD]" />
                        </A>
                    ))}
                </div>

                {/* Desktop Action Buttons */}
                <div class="hidden lg:flex items-center gap-4 h-full">
                    {actionLinks.map((link) =>
                        link.type !== "link" ? (
                            <Button
                                size="small"
                                variant={link.variant as "secondary" | "primary"}
                                onClick={() => {setIsDemoModalOpen(true)}} // Replace this with modal logic
                            >
                                {link.name}
                            </Button>
                        ) : (
                            <Button
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
                <div class="flex lg:hidden items-center gap-4 h-full">
                    <Button variant="primary" size="small"
                        onClick={() =>{setIsMenuOpen(false);  setIsDemoModalOpen(true)}}
                    //  onClick={() => window.open(links.demoLink, "_blank")}
                    >
                        Get a demo
                    </Button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen())}
                        class="text-gray-600 hover:text-gray-900"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>
            </nav>
            <FireAIDemoModal isOpen={isDemoModalOpen()} onClose={() => setIsDemoModalOpen(false)} />
            {/* Mobile Menu */}
            {isMenuOpen() && (
                <div class="lg:hidden absolute top-full left-0 right-0 bg-white mt-2 p-4 rounded-lg">
                    {navLinks.map(link => (
                        <a href={link.href} class="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <a href={actionLinks[0].href} class="block py-2 text-gray-900 hover:text-gray-600">
                        {actionLinks[0].name}
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;