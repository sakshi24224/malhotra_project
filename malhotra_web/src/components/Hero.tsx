import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-red-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="text-red-600 font-semibold tracking-wide">Delhi, India</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
              Premium
              <span className="font-bold text-red-600 block">Label Solutions</span>
              <span className="text-3xl md:text-4xl text-slate-600 block mt-2">for Your Brand</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-lg">
              Crafting exceptional woven labels, printed labels, hang tags, and polybags 
              with precision and artistry. Trusted by brands across India for quality that speaks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/woven_label.jpg"
                  alt="Woven labels manufacturing"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/143af564-c337-4680-9e6e-29a35cdfc898.png"
                  alt="Label printing process"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/polybags.jpg"
                  alt="Custom hang tags"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/Hang_tag.jpg"
                  alt="Quality control"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-red-100">
              <div className="text-3xl font-bold text-red-600">10+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
