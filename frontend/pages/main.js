import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import CalltoAction from './components/main/calltoaction';
import HowItWorks from './components/main/howitworks';

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <CalltoAction />
      <HowItWorks />
      < Footer />
    </div>
  );
};

export default Main;
