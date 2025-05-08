import Image from 'next/image';
import Link from 'next/link';
import { CompanyLogo } from "@/public/assets/company";
import { Instagram, LinkedIn, Mail, Location } from "@/public/assets/icons";
import links from "@/data/links";

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
  // {
  //   name: "+91 8828869898",
  //   href: "https://wa.me/918828869898",
  //   icon: WhatsApp,
  // },
  {
    name: "Level 1, First International Financial Centre, Plot No. C-54 & C-55, G Block Bandra Kurla Complex, Mumbai 400051",
    icon: Location,
  },
];

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto py-12 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left Section */}
        <div>
          <Image src={CompanyLogo} alt="FireAI" className="h-12 w-auto mb-4" />
          <p className="text-gray-700 w-full lg:w-5/6">
            Fire AI transforms data into real-time insights, automates tasks, and boosts business growth.
          </p>
        </div>

        {/* Middle Section - Contact */}
        <div className="col-span-2">
          <h3 className="text-base font-medium mb-4">Contact Us</h3>
          <div className="space-y-3">
            {infoData.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image src={info.icon} alt={info.name} className="w-5 h-5" />
                {info.href ? (
                  <a 
                    href={info.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700"
                  >
                    {info.name}
                  </a>
                ) : (
                  <span className="text-gray-700">{info.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Social */}
        <div className="flex flex-row justify-start lg:justify-center">
          <div>
            <h3 className="text-base font-medium mb-4">Follow us on</h3>
            <div className="flex flex-row lg:flex-col gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Image src={social.icon} alt={social.href} className="w-5 h-5" />
                  <span className="hidden lg:block">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4 lg:mb-0">
          © Copyright 2025. All Rights Reserved
        </p>
        <div className="flex gap-6">
          {footerLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
