import React from 'react';
import OrganizationSetupForm from '../components/setup/OrganizationSetupForm';
import WebpageScraper from '../components/setup/WebpageScraper';

const OrganizationSetup = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900">Setup Your Organization</h2>
        <p className="mt-2 text-gray-600">Tell us about your company to customize your chatbot</p>
      </div>
      
      <OrganizationSetupForm />
      <WebpageScraper />
    </div>
  );
};

export default OrganizationSetup;