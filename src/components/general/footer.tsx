import { Component } from "solid-js";
import { CompanyLogo } from "../../assets/company/index";
import { Facebook, Instagram, Twitter } from "../../assets/icons";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/fireai",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/fireai",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/fireai",
    icon: Instagram,
  },
];

const footerLinks = [
  {
    name: "Support",
    href: "/support",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
];

const Footer: Component = () => {
  return (
    <footer class="max-w-[1200px] mx-auto py-6 mt-10">
      {/* Top Row */}
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img src={CompanyLogo} alt="FireAI" class="h-8" />
        </div>
        <div class="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.name} class="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div class="flex justify-between items-center mt-10">
          <div>
            <span class="text-[14px] text-gray-500">
              © Copyright 2025. All Rights Reserved
            </span>
          </div>
          {/* Center - Footer Links */}
          <div class="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                class="text-[14px] text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
          </div>
      </div>
    </footer>
  );
};

export default Footer;
