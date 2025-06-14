import React from 'react';
import { Cpu, Zap, Shield, Clock } from 'lucide-react';

const Technology = () => {
  const capabilities = [
    {
      icon: <Cpu className="h-12 w-12 text-red-600" />,
      title: 'Advanced Printing Technology',
      description: 'State-of-the-art digital and screen printing equipment for precise, high-quality output.'
    },
    {
      icon: <Zap className="h-12 w-12 text-red-600" />,
      title: 'Rapid Production',
      description: 'Streamlined processes and automated systems ensure quick turnaround times without compromising quality.'
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control measures and testing protocols guarantee consistent, premium results.'
    },
    {
      icon: <Clock className="h-12 w-12 text-red-600" />,
      title: 'End-to-End Service',
      description: 'Complete manufacturing solutions from design consultation to final delivery and packaging.'
    }
  ];

  return (
    <section id="technology" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
            Our <span className="font-bold text-red-600">Capabilities</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Leveraging cutting-edge technology and proven processes to deliver 
            superior labeling solutions for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex space-x-6 group">
              <div className="flex-shrink-0">
                <div className="bg-red-50 p-4 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                  {capability.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {capability.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-light mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-xl mb-8 opacity-90 font-light">
            Join hundreds of satisfied clients who trust Malhotra Enterprise 
            for their labeling needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technology;