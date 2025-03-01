import { Component } from 'solid-js';
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
    return (
        <header class="fixed top-8 left-0 right-0 bg-white z-50 w-9/12 rounded-[12px] mx-auto h-[66px]">
            <nav class="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" class="flex items-center">
                    <img src={CompanyLogo} alt="FireAI Logo" class="h-8" />
                </a>

                {/* Navigation Links */}
                <div class="flex items-center gap-8">
                    {navLinks.map(link => (
                        <a href={link.href} class="text-gray-600 hover:text-gray-900">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Action Buttons */}
                <div class="flex items-center gap-4">
                    {actionLinks.map(link => (
                        <a href={link.href} class={link.class}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;