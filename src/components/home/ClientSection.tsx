import { Component } from "solid-js";
import { Clients } from "../../assets/landing";

const clientLogos = [
  { src: Clients.daffoworth, alt: "Daffoworth Pharmaceutical" },
  { src: Clients.thirdPlanet, alt: "3rd Planet" },
  { src: Clients.gem, alt: "GeM Government e Marketplace" },
  { src: Clients.irctc, alt: "IRCTC" },
  { src: Clients.isaLogistics, alt: "ISA" },
];

const ClientSection: Component = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div class="max-w-[1200px] mx-auto py-16 px-4 text-center">
      <h2 class="text-[20px] font-medium text-gray-800 mb-12">
        Trusted by Leading Businesses
      </h2>

      {/* Desktop Layout */}
      <div class="hidden lg:flex justify-center items-center gap-20 flex-wrap">
        {clientLogos.map((logo) => (
          <img
            src={logo.src}
            alt={logo.alt}
            class="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        ))}
      </div>

      {/* Mobile Marquee */}
      <div class="lg:hidden relative w-full overflow-hidden">
        <div class="overflow-hidden">
          <div class="flex items-center">
            {duplicatedLogos.map((logo) => (
              <img 
                src={logo.src} 
                alt={logo.alt} 
                class="h-5 object-contain mr-12" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
