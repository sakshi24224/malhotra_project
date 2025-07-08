import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/logo.png" 
                alt="Malhotra Enterprises Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold">Malhotra Enterprises</h3>
                <p className="text-red-400 text-sm font-medium">Custom Label Solutions</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed max-w-md font-light">
              Your trusted partner for premium custom labeling solutions. 
              Serving businesses across India with quality, reliability, and innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4" />
                <span className="font-light">+91 9999890922 , +91 9540189611</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4" />
                <span className="font-light"> malhotraenterprise.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span className="font-light"> B-126/1 phase 1 Mayapuri Industrial area New Delhi - 110064</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#services" className="hover:text-red-400 transition-colors font-light">Woven Labels</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors font-light">Printed Labels</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors font-light">Hang Tags</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors font-light">Polybags</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#about" className="hover:text-red-400 transition-colors font-light">About Us</a></li>
              <li><a href="#technology" className="hover:text-red-400 transition-colors font-light">Technology</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors font-light">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p className="font-light">&copy; 2024 Malhotra Enterprises. All rights reserved. | Designed for professional labeling solutions in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
