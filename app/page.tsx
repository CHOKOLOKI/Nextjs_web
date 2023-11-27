import React from 'react';
import Navbar from './components/navbar'

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold"></h1>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default Home;