import { Component } from 'solid-js';
import { Clients } from '../../assets/landing';

const ClientSection: Component = () => {
  return (
    <div class="max-w-[1200px] mx-auto py-16 px-4 text-center">
      <h2 class="text-[20px] font-medium text-gray-800 mb-12">
        Trusted by Leading Businesses
      </h2>
      <div class="flex justify-center items-center gap-20 flex-wrap md:gap-8">
        <img 
          src={Clients.daffoworth} 
          alt="Daffoworth Pharmaceutical" 
          class="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 md:h-8"
        />
        <img 
          src={Clients.thirdPlanet} 
          alt="3rd Planet" 
          class="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 md:h-8"
        />
        <img 
          src={Clients.gem} 
          alt="GeM Government e Marketplace" 
          class="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 md:h-8"
        />
        <img 
          src={Clients.irctc} 
          alt="IRCTC" 
          class="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 md:h-8"
        />
        <img 
          src={Clients.isaLogistics} 
          alt="ISA" 
          class="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 md:h-8"
        />
      </div>
    </div>
  );
};

export default ClientSection;
