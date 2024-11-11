import React from 'react';
import Link from 'next/link';
import Head from "next/head";
import Footer from './components/footer';
import Header from './components/header';

const SearchChoice = () => {
  return (
    <>
      <Head>
        <title>SandalwoodAI - Make your Choice</title>
        <meta name="description" content="An AI-powered platform for processing and understanding Kannada audio resources on sandalwood cultivation, enabling users to query and explore indigenous knowledge through speech recognition." />
      </Head>
      <Header />
      <div className="min-h-screen bg-[#FEF3E2] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold sc-title mb-4 league_spartan">Choose Your Search Method</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link href="/speech-search" className="group w-full md:w-64 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform min-h-[300px] flex flex-col justify-center">
            <div className="text-center flex flex-col items-center">
              <img
                src="/speech-to-text.png"
                alt="Speech-to-Text Icon"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold sc-card-title mb-2 almarai">Speech-to-Text Search</h2>
              <p className="sc-card-desc lexend_deca text-center">Ask questions using your voice in Kannada and get answers instantly.</p>
            </div>
          </Link>
          <Link href="/text-search" className="group w-full md:w-64 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform min-h-[300px] flex flex-col justify-center">
            <div className="text-center flex flex-col items-center">
              <img
                src="/text-to-text.png"
                alt="Text-to-Text Icon"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold sc-card-title mb-2 almarai">Text-to-Text Search</h2>
              <p className="sc-card-desc lexend_deca text-center">Type your questions in Kannada and find relevant information.</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchChoice;
