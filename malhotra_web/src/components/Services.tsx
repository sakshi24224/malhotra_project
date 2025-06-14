import React from 'react';
import { Package, Printer, Tag, ShoppingBag, ArrowRight } from 'lucide-react';
import { Service } from '../types'; // ✅ FIXED

const Services = ({ onServiceClick }: { onServiceClick: (service: Service) => void }) => {
  const services: Service[] = [
    {
      id: 'woven-labels',
      icon: <Tag className="h-12 w-12 text-red-600" />,
      title: 'Woven Labels',
      description: 'Premium woven labels with superior durability and elegant finish for luxury brands.',
      shortDesc: 'Durable, elegant woven labels'
    },
    {
      id: 'printed-labels',
      icon: <Printer className="h-12 w-12 text-red-600" />,
      title: 'Printed Labels',
      description: 'High-resolution digital and screen printing with vibrant colors and precise detailing.',
      shortDesc: 'Vibrant, high-quality printed labels'
    },
    {
      id: 'hang-tags',
      icon: <Package className="h-12 w-12 text-red-600" />,
      title: 'Hang Tags',
      description: 'Custom hang tags that elevate brand presentation with premium materials and design.',
      shortDesc: 'Custom hang tags for brand elevation'
    },
    {
      id: 'polybags',
      icon: <ShoppingBag className="h-12 w-12 text-red-600" />,
      title: 'Polybags',
      description: 'Protective packaging solutions with custom printing for product safety and branding.',
      shortDesc: 'Custom printed protective packaging'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
            Our <span className="font-bold text-red-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive labeling solutions crafted with precision and backed by 
            years of manufacturing expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => onServiceClick(service)}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer border border-slate-200 hover:border-red-200"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed font-light">
                {service.shortDesc}
              </p>
              
              <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
