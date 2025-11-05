
import React from 'react';
import { Page } from '../types';
import BloodDropIcon from './common/BloodDropIcon';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="text-center">
      <div className="relative inline-block mb-6">
        <BloodDropIcon className="w-24 h-24 text-brand-red" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">+</div>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        Give the Gift of Life
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
        Your donation can save up to three lives. Join our community of heroes and make a difference today.
      </p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button
          onClick={() => onNavigate(Page.Find)}
          className="px-8 py-3 bg-brand-red text-white font-semibold rounded-lg shadow-md hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-transform transform hover:scale-105"
        >
          Find a Donor
        </button>
        <button
          onClick={() => onNavigate(Page.Register)}
          className="px-8 py-3 bg-white text-brand-red font-semibold rounded-lg shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-transform transform hover:scale-105"
        >
          Become a Donor
        </button>
      </div>
    </div>
  );
};

export default Hero;
