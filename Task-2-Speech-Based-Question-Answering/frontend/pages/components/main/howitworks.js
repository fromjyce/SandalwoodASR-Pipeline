import React from 'react';

const HowItWorks = () => {
  return (
    <section className="main-how-it-works py-16">
  <div className="max-w-5xl mx-auto text-center px-4">
    <h2 className="text-3xl font-semibold htw-title league_spartan">How It Works</h2>
    <p className="mt-4 text-lg htw-subtitle lexend_deca">
      This platform allows you to interact with sandalwood cultivation knowledge through audio-based queries and transcriptions.
    </p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="bg-[#F4F4F4] p-6 rounded-lg shadow-lg">
        <img src="/upload.png" alt="Upload Icon" className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-xl font-semibold almarai card-title">Upload Audio</h3>
        <p className="mt-4 card-descr league_spartan">
          Upload your audio files related to sandalwood cultivation. The system will transcribe and analyze the content.
        </p>
      </div>
      <div className="bg-[#F4F4F4] p-6 rounded-lg shadow-lg">
        <img src="/question.png" alt="Question Icon" className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-xl font-semibold almarai card-title">Ask a Question</h3>
        <p className="mt-4 card-descr league_spartan">
          Ask your question in Kannada via speech, and let the AI model convert it to text for accurate answers.
        </p>
      </div>
      <div className="bg-[#F4F4F4] p-6 rounded-lg shadow-lg">
        <img src="/insights.png" alt="Insights Icon" className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-xl font-semibold almarai card-title">Get Insights</h3>
        <p className="mt-4 card-descr league_spartan">
          The system will search through the audio segments and provide you with relevant answers and information.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};

export default HowItWorks;
