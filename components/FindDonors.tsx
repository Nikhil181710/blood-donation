
import React, { useState } from 'react';
import { Donor, bloodTypes } from '../types';
import { findDonors } from '../services/geminiService';
import Spinner from './common/Spinner';
import Card from './common/Card';
import BloodDropIcon from './common/BloodDropIcon';

const FindDonors: React.FC = () => {
  const [bloodType, setBloodType] = useState<string>('A+');
  const [location, setLocation] = useState<string>('');
  const [donors, setDonors] = useState<Donor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) {
      setError('Please enter a location.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSearched(true);
    setDonors([]);

    try {
      const results = await findDonors(bloodType, location);
      setDonors(results);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Find a Blood Donor</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col">
            <label htmlFor="blood-type" className="mb-1 font-medium text-gray-700">Blood Type</label>
            <select
              id="blood-type"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
            >
              {bloodTypes.map(bt => <option key={bt} value={bt}>{bt}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="mb-1 font-medium text-gray-700">City or Area</label>
            <input
              id="location"
              type="text"
              placeholder="e.g., San Francisco"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto justify-self-stretch md:justify-self-auto px-6 py-2 bg-brand-red text-white font-semibold rounded-md shadow-sm hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? <Spinner /> : 'Search'}
          </button>
        </form>
      </Card>

      <div className="mt-8">
        {isLoading && (
          <div className="text-center py-4">
            <p className="text-gray-600">Searching for donors...</p>
          </div>
        )}
        {error && <p className="text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
        {!isLoading && !error && searched && donors.length === 0 && (
          <p className="text-center text-gray-600">No donors found matching your criteria.</p>
        )}
        {donors.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {donors.map(donor => (
              <Card key={donor.id} className="transition-transform transform hover:scale-105">
                 <div className="flex items-start gap-4">
                    <BloodDropIcon className="h-10 w-10 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-800">{donor.id}</h3>
                      <p className="text-sm text-gray-600">Blood Type: <span className="font-semibold">{donor.bloodType}</span></p>
                      <p className="text-sm text-gray-600">Location: {donor.location}</p>
                      <p className="mt-2 text-sm text-green-700 bg-green-100 px-2 py-1 rounded-full inline-block">{donor.availability}</p>
                    </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDonors;
