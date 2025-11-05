
import React from 'react';
import { Page } from '../types';
import BloodDropIcon from './common/BloodDropIcon';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-brand-red text-white'
          : 'text-gray-600 hover:bg-red-100 hover:text-brand-red'
      }`}
    >
      {label}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => onNavigate(Page.Home)} className="flex-shrink-0 flex items-center gap-2">
              <BloodDropIcon className="h-8 w-8 text-brand-red" />
              <span className="text-xl font-bold text-gray-800">LifeFlow</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink label="Home" isActive={currentPage === Page.Home} onClick={() => onNavigate(Page.Home)} />
              <NavLink label="Find Donors" isActive={currentPage === Page.Find} onClick={() => onNavigate(Page.Find)} />
              <NavLink label="Become a Donor" isActive={currentPage === Page.Register} onClick={() => onNavigate(Page.Register)} />
              <NavLink label="Eligibility" isActive={currentPage === Page.Eligibility} onClick={() => onNavigate(Page.Eligibility)} />
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
