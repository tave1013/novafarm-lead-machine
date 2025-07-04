
import React from 'react';
import { Lightbulb } from 'lucide-react';

const WhyNovaFarmSection = () => {
  return (
    <section className="py-16 bg-[#f4f1ea]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-8 h-8 text-[#078147]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Why NovaFarm exists
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Pharmacies today offer more than medicines: health checks, consultations, rentals, vaccines. 
              But many still manage everything manually or with scattered tools.
            </p>
            <p>
              NovaFarm was created to offer a clean, all-in-one digital system made specifically 
              for pharmacies — with no extra complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNovaFarmSection;
