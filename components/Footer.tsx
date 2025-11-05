
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} LifeFlow. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Saving lives, one drop at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
