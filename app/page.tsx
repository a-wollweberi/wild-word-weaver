"use client"
import React, { useState, useRef } from 'react';
import adjectives from './adjectives.json';
import animals from './animals.json';

const WildWordWeaver: React.FC = () => {
  const [generatedName, setGeneratedName] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const nameRef = useRef<HTMLDivElement>(null);

  const generateName = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    setGeneratedName(`${randomAdjective?.toLowerCase()}-${randomAnimal?.toLowerCase()}`);
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    if (nameRef.current) {
      navigator.clipboard.writeText(nameRef.current.textContent || '').then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      });
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-between p-4 sm:p-6">
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md">
        <h3 className="text-4xl text-black mb-4 text-center">Wild Word Weaver</h3>
        <p className="text-sm text-gray-600 mb-8 text-center">
          A minimal site built to generate cool names for demo projects, throwaway accounts, containers, and anything really!
        </p>
        <button
          onClick={generateName}
          className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Generate a Name
        </button>
        {generatedName && (
          <div className="mt-8 text-sm text-gray-800 text-center">
            <div className='text-4xl' ref={nameRef}>{generatedName}</div>
            <button
              onClick={copyToClipboard}
              className="mt-4 text-xs bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              {copySuccess ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </div>
      <footer className="w-full text-center py-4 text-gray-500 text-sm sm:text-base">
        Developed by <a href="https://github.com/a-wollweberi" className='underline' >
          a-wollweberi

        </a>🦜
      </footer>
    </div>
  );
};

export default WildWordWeaver;