import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import CalltoAction from './components/main/calltoaction';

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <CalltoAction />

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">This platform allows you to interact with sandalwood cultivation knowledge through audio-based queries and transcriptions.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">Upload Audio</h3>
              <p className="mt-4 text-gray-600">Upload your audio files related to sandalwood cultivation. The system will transcribe and analyze the content.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">Ask a Question</h3>
              <p className="mt-4 text-gray-600">Ask your question in Kannada via speech, and let the AI model convert it to text for accurate answers.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-600">Get Insights</h3>
              <p className="mt-4 text-gray-600">The system will search through the audio segments and provide you with relevant answers and information.</p>
            </div>
          </div>
        </div>
      </section>

      < Footer />
    </div>
  );
};

export default Main;
