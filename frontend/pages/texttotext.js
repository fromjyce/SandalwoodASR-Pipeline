"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Header from './components/header';
import Footer from './components/footer';

const TextToText = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;

    setLoading(true);

    try {
      setTimeout(() => {
        setResults({
          answer: 'This is the result for your query',
          audioSegment: '/path/to/dummy/audio.wav',
        });
      }, 1500);
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>SandalwoodAI - Text to Text</title>
        <meta name="description" content="An AI-powered platform for processing and understanding Kannada audio resources on sandalwood cultivation, enabling users to query and explore indigenous knowledge through speech recognition." />
    </Head>
    <Header />
    <div className='ttt-spacer-top'></div>
    <div className="flex flex-col items-center justify-center bg-[#FEF3E2] p-6">
    <h1 className="text-4xl font-bold mb-6 stt-title lexend_deca">Explore Sandalwood Cultivation Through Text</h1>
    <p className="mb-8 stt-subtitle league_spartan">Type your query and uncover insights from traditional knowledge and modern practices of sandalwood cultivation.</p>
      <form onSubmit={handleSearch} className="w-full max-w-lg bg-[#f9decd] p-8 rounded-lg shadow-lg text-center">
        <div className="mb-4">
          <label htmlFor="query" className="block text-xl font-semibold poppins stt-option-choose mb-4">
          Inquire About Sandalwood Cultivation
          </label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg text-md poppins"
            placeholder="Ask your Query"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#FA812F] league_spartan text-black px-4 py-2 rounded-lg hover:bg-[#FA5D2F] transition font-bold ${
              loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#FA5D2F]'
            }`}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {results && (
        <div className="mt-8 w-full max-w-lg bg-[#f9decd] items-center justify-center text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold poppins stt-option-choose mb-2">Results</h2>
          <div className="font-medium">
            <p>{results.answer}</p>
            <audio controls className="mt-4 w-full">
              <source src={results.audioSegment} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
    <div className='ttt-spacer-bottom'></div>
    <Footer />
    </>
  );
};

export default TextToText;