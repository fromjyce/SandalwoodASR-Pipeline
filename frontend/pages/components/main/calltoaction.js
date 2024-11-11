import React from 'react';

const CalltoAction = () => {
  return (
    <section className="main-call-to-action">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-2/5 text-center md:text-left">
          <h2 className="text-3xl font-semibold cta-title league_spartan">Join us in preserving indigenous knowledge!</h2>
          <p className="mt-4 text-lg cta-subline lexend_deca">Upload audio or ask a question related to sandalwood cultivation, and let our AI-powered system provide relevant insights and information.</p>
          <div className="mt-8">
            <a href="/searchchoice" className="inline-block bg-[#FA812F] font-bold text-[#171717] px-6 py-3 rounded-lg text-lg hover:bg-[#FAA42F] transition duration-300 almarai">
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-3/5 flex justify-center">
          <img
            src="/main.png"
            alt="Sandalwood Cultivation"
            className="w-full max-w-sm mt-5"
          />
        </div>
      </div>
    </section>  
  );
};

export default CalltoAction;
