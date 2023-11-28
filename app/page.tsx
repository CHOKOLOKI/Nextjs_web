"use client"

import React from 'react';
import Navbar from './components/navbar'

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold"></h1>
      </div>
    </div>
  );
};

export default Page;