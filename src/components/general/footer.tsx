import { Component } from "solid-js";
import { CompanyLogo } from "../../assets/company/index";
import { Facebook, Instagram, LinkedIn, Mail, WhatsApp, Location } from "../../assets/icons";
import links from "../../data/links";
import { A } from "@solidjs/router";

const socialLinks = [
  {
    name: "LinkedIn",
    href: links.socialLinks.linkedin,
    icon: LinkedIn,
  },
  {
    name: "Instagram",
    href: links.socialLinks.instagram,
    icon: Instagram,
  }
];

const footerLinks = [
  {
    name: "Privacy Policy",
    href: links.helperLinks.privacy,
  },
  {
    name: "Terms & Conditions",
    href: links.helperLinks.terms,
  },
];

const infoData = [
  {
    name: "info@fireai.in",
    href: "mailto:info@fireai.in",
    icon: Mail,
  },
  {
    name: "+91 8828869898",
    href: "https://wa.me/918828869898",
    icon: WhatsApp,
  },
  {
    name: "Level 1, First International Financial Centre, Plot No. C-54 & C-55, G Block Bandra Kurla Complex, Mumbai 400051",
    icon: Location,
  },
];
const Footer: Component = () => {
  return (
    <footer class="max-w-[1200px] mx-auto py-12 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left Section */}
        <div>
          <img src={CompanyLogo} alt="FireAI" class="h-12 mb-4" />
          <p class="text-gray-700 w-full lg:w-5/6">
            Fire AI transforms data into real-time insights, automates tasks, and boosts business growth.
          </p>
        </div>

        {/* Middle Section - Contact */}
        <div class="col-span-2">
          <h3 class="text-base font-medium mb-4">Contact Us</h3>
          <div class="space-y-3">
            {infoData.map((info) => (
              <div class="flex items-center gap-2">
                <img src={info.icon} alt={info.name} class="w-5 h-5" />
                <a href={info.href} target="_blank" rel="noopener noreferrer" class="text-gray-700">{info.name}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Social */}
        <div class="flex flex-row justify-start lg:justify-center">
          <div>
            <h3 class="text-base font-medium mb-4">Follow us on</h3>
            <div class="flex flex-row lg:flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-gray-700"
                >
                  <img src={social.icon} alt={social.name} class="w-5 h-5" />
                  <span class="hidden lg:block">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div class="flex flex-col lg:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-200">
        <p class="text-sm text-gray-500 mb-4 lg:mb-0">
          © Copyright 2025. All Rights Reserved
        </p>
        <div class="flex gap-6">
          {footerLinks.map((link) => (
            <A href={link.href} class="text-sm text-gray-600 hover:text-gray-900">
              {link.name}
            </A>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
