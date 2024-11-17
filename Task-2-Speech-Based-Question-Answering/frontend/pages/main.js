import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import CalltoAction from './components/main/calltoaction';
import HowItWorks from './components/main/howitworks';
import Head from "next/head";

const Main = () => {
  return (
    <>
    <Head>
        <title>SandalwoodAI</title>
        <meta name="description" content="An AI-powered platform for processing and understanding Kannada audio resources on sandalwood cultivation, enabling users to query and explore indigenous knowledge through speech recognition." />
      </Head>
    <div className="min-h-screen">
      <Header />
      <CalltoAction />
      <HowItWorks />
      < Footer />
    </div>
    </>
  );
};

export default Main;
