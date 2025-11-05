
import React, { useState } from 'react';
import { bloodTypes } from '../types';
import Card from './common/Card';

const RegisterDonor: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodType: 'A+',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend.
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h2>
        <p className="text-gray-700">Thank you for registering as a blood donor, {formData.name}. Your willingness to help is greatly appreciated. We will contact you at {formData.email} with more information.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2 bg-brand-red text-white font-semibold rounded-md shadow-sm hover:bg-brand-red-dark">
          Register Again
        </button>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Become a Life-Saver</h2>
      <p className="text-center text-gray-600 mb-8">Fill out the form below to join our network of volunteer blood donors.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
          />
        </div>
         <div>
          <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">Blood Type</label>
          <select
            name="bloodType"
            id="bloodType"
            required
            value={formData.bloodType}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
          >
            {bloodTypes.map(bt => <option key={bt} value={bt}>{bt}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">City or Area</label>
          <input
            type="text"
            name="location"
            id="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-red hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
          >
            Register to Donate
          </button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterDonor;
