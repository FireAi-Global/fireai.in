import { Component, createSignal } from 'solid-js';
import { CompanyLogo } from '../../assets/company';

const navLinks = [
    { name: "Our Solutions", href: "#solutions" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" }
];

const actionLinks = [
    { name: "Login", href: "https://dashboard.fireai.in", class: "text-gray-900 hover:text-gray-600" },
    { name: "Get a demo", href: "/demo", class: "bg-[#2B4EE7] text-white px-4 py-2 rounded-lg hover:bg-[#2342CC]" }
];

const Header: Component = () => {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    return (
        <header class="fixed top-2 lg:top-4 left-0 right-0 bg-white z-50 w-[85%] md:w-9/12 rounded-[12px] mx-auto h-[66px]">
            <nav class="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" class="flex items-center">
                    <img src={CompanyLogo} alt="FireAI Logo" class="h-8" />
                </a>

                {/* Desktop Navigation */}
                <div class="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a href={link.href} class="text-gray-600 hover:text-gray-900">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Action Buttons */}
                <div class="hidden lg:flex items-center gap-4">
                    {actionLinks.map(link => (
                        <a href={link.href} class={link.class}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div class="flex lg:hidden items-center gap-4">
                    <a href="/demo" class="bg-[#2B4EE7] text-white px-4 py-2 rounded-lg hover:bg-[#2342CC]">
                        Get a demo
                    </a>
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

            {/* Mobile Menu */}
            {isMenuOpen() && (
                <div class="lg:hidden absolute top-full left-0 right-0 bg-white mt-2 p-4 rounded-lg shadow-lg">
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