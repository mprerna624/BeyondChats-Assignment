import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Globe, Users, ArrowRight } from 'lucide-react';

const OrganizationSetupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    button.classList.add('animate-scale');
    setTimeout(() => navigate('/integration'), 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-6">
        {/* Company Name Input */}
        <div className="group transition-transform ease-out duration-300 hover:scale-[1.02] animate-slide-right" style={{ animationDelay: '150ms' }}>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
            </div>
            <input
              type="text"
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                       transition-all duration-200
                       placeholder:text-gray-400
                       hover:border-blue-400
                       focus:border-blue-500 focus:ring-0 focus:outline-none"
              value={formData.companyName}
              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
              placeholder="Enter your company name"
            />
          </div>
        </div>

        {/* Website URL Input */}
        <div className="group transition-transform ease-out duration-300 hover:scale-[1.02] animate-slide-right" style={{ animationDelay: '150ms' }}>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
            </div>
            <input
              type="url"
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                       transition-all duration-200
                       placeholder:text-gray-400
                       hover:border-blue-400
                       focus:border-blue-500 focus:ring-0 focus:outline-none"
              value={formData.websiteUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
              placeholder="https://www.example.com"
            />
          </div>
        </div>

        {/* Company Description */}
        <div className="group transition-transform ease-out duration-300 hover:scale-[1.02] animate-slide-right" style={{ animationDelay: '150ms' }}>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
          <div className="relative">
            <div className="absolute left-3 top-3 pointer-events-none">
              <Users className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
            </div>
            <textarea
              rows={4}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                       transition-all duration-200
                       placeholder:text-gray-400
                       hover:border-blue-400
                       focus:border-blue-500 focus:ring-0 focus:outline-none"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Tell us about your company..."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="group relative px-8 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 
                   text-white font-medium rounded-lg
                   transform transition-all duration-200
                   hover:scale-105 hover:shadow-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   active:scale-95"
        >
          <span className="inline-flex items-center">
            Continue
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform ease-out duration-200 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default OrganizationSetupForm;