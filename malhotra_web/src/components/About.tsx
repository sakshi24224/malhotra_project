import { Award, Users, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, value: '10+', label: 'Years Experience' },
    { icon: <Users className="h-8 w-8" />, value: '500+', label: 'Happy Clients' },
    { icon: <Globe className="h-8 w-8" />, value: 'Serving Globally' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Crafting Excellence in
              <span className="font-bold text-red-600 block">Label Manufacturing</span>
            </h2>
            <div className="w-16 h-1 bg-red-600 mb-8 rounded-full"></div>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
              Established as a premier custom labeling solution provider, Malhotra Enterprise 
              has been serving businesses across India with exceptional quality and reliability. 
              Based in Delhi, we specialize in creating premium labels that enhance brand identity.
            </p>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light">
              Our state-of-the-art facility combines traditional craftsmanship with modern 
              technology to deliver superior products. We partner with businesses nationwide, 
              providing end-to-end manufacturing solutions.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full text-red-600 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                  <div className="text-slate-600 font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/logo.png"
              alt="Manufacturing process"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
