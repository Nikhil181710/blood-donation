
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FindDonors from './components/FindDonors';
import RegisterDonor from './components/RegisterDonor';
import EligibilityInfo from './components/EligibilityInfo';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Hero onNavigate={setCurrentPage} />;
      case Page.Find:
        return <FindDonors />;
      case Page.Register:
        return <RegisterDonor />;
      case Page.Eligibility:
        return <EligibilityInfo />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
