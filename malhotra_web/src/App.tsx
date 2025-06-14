import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import { Service } from 'types'; // ✅ FIXED

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'service-detail'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service-detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedService(null);
  };

  if (currentView === 'service-detail' && selectedService) {
    return <ServiceDetail service={selectedService} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services onServiceClick={handleServiceClick} />
      <About />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
