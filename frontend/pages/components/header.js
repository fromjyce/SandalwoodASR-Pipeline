import React from 'react';

const Header = () => {
  return (
    <header className="main-header py-6">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
    <div className="flex items-center justify-center space-x-4">
      <img src="/logo.png" alt="Logo" className="h-10 w-10" />
      <h1 className="text-2xl font-bold lexend_deca">SandalwoodAI</h1>
    </div>
    <div className="flex space-x-4">
      <a href="#" className="hover:bg-[#D4CBBD] px-4 py-2 rounded-lg bg-[#FEF3E2] league_spartan text-[#171717] font-bold">Home</a>
      <a href="#upload" className="hover:bg-[#D4CBBD] px-4 py-2 rounded-lg bg-[#FEF3E2] league_spartan text-[#171717] font-bold">Upload the Audio</a>
    </div>
  </div>
</header>
  );
};

export default Header;
