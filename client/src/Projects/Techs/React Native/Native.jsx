// Importing React Packages
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Importing local files
import Footer from './Footer';
import Projects from './Projects';
import Cube from './Cube';

export default function Native() {
  return (
    <div className="flex flex-col min-h-lvh">
      {/* Main Section */}
      <div className="bg-blue-900 flex-1 flex flex-col justify-between gap-10">
        <div className="text-white bg-sky-400 flex flex-col items-center p-10 mx-[69px] animate-meta_morph">
          {/* <span className="text-center text-5xl">React Native Projects</span> */}
          <h1 className="text-3xl text-white transition-all duration-700 ease-in-out hover:text-4xl hover:text-blue-600 hover:rotate-12">
            React Native Projects
          </h1>
        </div>

        <Projects />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}