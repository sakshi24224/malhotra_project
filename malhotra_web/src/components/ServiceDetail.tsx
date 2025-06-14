import { ArrowLeft, CheckCircle } from 'lucide-react';
import HT1 from '../assets/HT1.png';
import HT2 from '../assets/HT2.png';
import HT3 from '../assets/HT3.png';
import HT4 from '../assets/HT4.png';
import WT1 from '../assets/WT1.png';
import W2 from '../assets/W2.png';
import W3 from '../assets/W3.png';
import W4 from '../assets/W4.png';
import PT1 from '../assets/PT1.png';
import PT2 from '../assets/PT2.png';
import PT3 from '../assets/PT3.png';
import PT4 from '../assets/PT4.png';
import PG1 from '../assets/PG1.png';
import PG2 from '../assets/PG2.png';
import PG5 from '../assets/PG5.jpeg';
import PG4 from '../assets/PG4.png';
import PG3 from '../assets/PG3.png';

type ServiceID = 'woven-labels' | 'printed-labels' | 'hang-tags' | 'polybags';

type Service = {
  id: ServiceID;
};

type ServiceDetailProps = {
  service: Service;
  onBack: () => void;
};

const ServiceDetail = ({ service, onBack }: ServiceDetailProps) => {
  const serviceDetails: Record<ServiceID, {
    title: string;
    description: string;
    features: string[];
    images: string[];
  }> = {
    'woven-labels': {
      title: 'Woven Labels',
      description: 'Our premium woven labels are crafted using the finest materials and advanced weaving techniques. Perfect for luxury apparel, these labels offer exceptional durability and a sophisticated finish that enhances your brand image.',
      features: ['Premium fabric materials', 'Fade-resistant colors', 'Custom designs and sizes', 'Bulk production capabilities'],
      images: [ WT1 , W2 , W3 , W4]
    },
    'printed-labels': {
      title: 'Printed Labels',
      description: 'High-resolution digital and screen printing technology delivers vibrant colors and precise detailing. Our printed labels are weather-resistant and perfect for various applications across different industries.',
      features: ['HD printing quality', 'Weather resistant materials', 'Multiple substrate options', 'Quick turnaround times'],
      images: [PT1 , PT2 , PT3 , PT4 ]
    },
    'hang-tags': {
      title: 'Hang Tags',
      description: 'Custom hang tags that make a lasting impression. Using premium cardstock and finishing options like foil stamping, our hang tags enhance your product presentation and brand recognition.',
      features: ['Premium cardstock materials', 'Foil stamping available', 'Custom shapes and sizes', 'Eco-friendly options'],
      images: [HT1, HT2, HT3, HT4]
    },
    'polybags': {
      title: 'Polybags',
      description: 'Protective packaging solutions that combine functionality with branding. Our custom printed polybags ensure product safety while maintaining brand visibility throughout the supply chain.',
      features: ['Various sizes available', 'Custom printing options', 'Recyclable and Biodegrabale', 'Bulk order discounts'],
      images: [PG1 , PG2 , PG4 , PG5 , PG3]
    }
  };

  const details = serviceDetails[service.id];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              {details.title}
            </h1>
            <div className="w-16 h-1 bg-red-600 mb-8 rounded-full"></div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
              {details.description}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              {details.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <span className="font-light">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={onBack}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg"
            >
              Get Quote for {details.title}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {details.images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${details.title} example ${index + 1}`}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-contain bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
