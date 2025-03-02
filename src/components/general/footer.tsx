import { Component } from "solid-js";
import { CompanyLogo } from "../../assets/company/index";
import { Facebook, Instagram, LinkedIn, Twitter } from "../../assets/icons";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/fireaiglobal/",
    icon: LinkedIn,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/fireai",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fireaiglobal/",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "https://x.com/FireAiglobal",
    icon: Twitter,
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
    <footer class="max-w-[1200px] mx-auto py-6 px-6 mt-10">
      {/* Top Row */}
      <div class="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center">
        <div class="flex items-center gap-2 mb-8 lg:mb-0">
          <img src={CompanyLogo} alt="FireAI" class="h-16 lg:h-12" />
        </div>
        <div class="flex items-center gap-10 lg:gap-6 pl-2 lg:pl-0">
          {socialLinks.map((social) => (
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.name} class="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div class="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between mt-10">
          <div>
            <span class="text-sm md:text-sm text-gray-500 lg:w-1/2">
              © Copyright 2025. All Rights Reserved
            </span>
          </div>
          {/* Center - Footer Links */}
          <div class="lg:w-1/2 flex flex-row justify-between lg:justify-end w-full gap-2 lg:gap-8 pb-8 lg:pb-0">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                class="text-sm md:text-sm text-gray-600 hover:text-gray-900"
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
