import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Code, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import IntegrationGuide from '../components/integration/IntegrationGuide';

const Integration = () => {
  const navigate = useNavigate();
  const [showIntegrationGuide, setShowIntegrationGuide] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTestChatbot = () => {
    window.open('/preview-chatbot', '_blank');
  };

  const handleTestIntegration = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/integration-success');
    }, 2000);
  }; 

  const integrationButtons = [
    {
      icon: Rocket,
      title: 'Test Chatbot',
      description: 'Preview your chatbot in action',
      onClick: handleTestChatbot,
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      iconColor: 'text-blue-500 group-hover:text-white'
    },
    {
      icon: Code,
      title: 'Integration Guide',
      description: 'Get setup instructions',
      onClick: () => setShowIntegrationGuide(true),
      gradient: 'from-purple-500 via-purple-600 to-fuchsia-600',
      iconColor: 'text-purple-500 group-hover:text-white'
    },
    {
      icon: CheckCircle,
      title: 'Test Integration',
      description: 'Verify your installation',
      onClick: handleTestIntegration,
      gradient: 'from-emerald-500 via-emerald-600 to-green-600',
      iconColor: 'text-emerald-500 group-hover:text-white'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block animate-fade-in"> Chatbot Integration</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-slide-right">
          You're just a few steps away from having your AI chatbot up and running. Choose from the options below to begin.
        </p>
      </div>
      
      {/* Main action buttons */}
      <div className="grid gap-6 md:grid-cols-3">
        {integrationButtons.map((button, index) => (
          <button
            key={button.title}
            onClick={button.onClick}
            className="group relative overflow-hidden rounded-xl transition-all duration-300 animate-fade-in-up shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.06),0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_-2px_8px_-2px_rgba(0,0,0,0.08),0_8px_12px_-2px_rgba(0,0,0,0.1)]"
            style={{ 
              animationDelay: `${index * 150}ms`,
              transform: 'translateZ(0)'
            }}
          >
            {/* Gradient Background on Hover */}
            <div className={`
              absolute inset-0 bg-gradient-to-br ${button.gradient} opacity-0 
              group-hover:opacity-100 transition-opacity duration-300
            `}/>
            
            {/* Content */}
            <div className="relative p-8 bg-white group-hover:bg-opacity-0 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4 animate-slide-right" 
                   style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative transform transition-transform ease-out duration-300">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-md">
                    <button.icon className={`w-8 h-8 ${button.iconColor} transition-colors duration-300`} />
                  </div>
                  <div className="absolute inset-0 rounded-full group-hover:animate-ping group-hover:opacity-50 group-hover:bg-white"/>
                </div>
                
                <div className="space-y-2 animate-slide-right" 
                     style={{ animationDelay: `${index * 250}ms` }}>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors">
                    {button.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {button.description}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Integration guide */}
      {showIntegrationGuide && (
        <div className="animate-fade-in-up shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.06),0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-xl">
          <IntegrationGuide onClose={() => setShowIntegrationGuide(false)} />
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center py-12 animate-fade-in bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <div className="space-y-2 animate-slide-right">
              <h3 className="text-xl font-semibold text-gray-800">Verifying Integration</h3>
              <p className="text-gray-600">Please wait while we check your installation...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Integration;