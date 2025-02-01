import React, { useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Award, MessageSquare, LayoutDashboard, Twitter, Linkedin, Facebook } from 'lucide-react';
import confetti from 'canvas-confetti';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const SuccessScreen = () => {
  const navigate = useNavigate();

  const triggerConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);

  useEffect(() => {
    triggerConfetti();
  }, [triggerConfetti]);

  const socialPlatforms = [
    { name: 'Twitter', icon: Twitter, color: 'bg-[#1DA1F2] hover:bg-[#1a8cd8]' },
    { name: 'LinkedIn', icon: Linkedin, color: 'bg-[#0A66C2] hover:bg-[#094da1]' },
    { name: 'Facebook', icon: Facebook, color: 'bg-[#1877F2] hover:bg-[#0d65d9]' }
  ];

  return (
    <>
    <Header />

    <div className="relative min-h-screen mt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Link 
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:-translate-x-1 transition-transform ease-out" />
        <span className="font-medium text-gray-700 group-hover:text-gray-900">Back to Dashboard</span>
      </Link>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up">
          <div className="text-center space-y-8">
            {/* Success Icon */}
            <div className="relative">
              <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mx-auto transform transition-transform ease-out duration-700 hover:scale-110">
                <Award className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl py-2 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                Integration Successful!
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto animate-fade-in">
                Your chatbot is now fully integrated and ready to transform your customer experience
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button 
                onClick={() => window.open('/preview-chatbot', '_blank')}
                className="group relative p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform ease-out duration-300" />
                  <span className="font-semibold">Talk to your Chatbot</span>
                </div>
              </button>
              <button 
                onClick={() => navigate('/')}
                className="group p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <LayoutDashboard className="w-5 h-5 group-hover:rotate-12 transition-transform ease-out duration-300" />
                  <span className="font-semibold">Explore Admin Panel</span>
                </div>
              </button>
            </div>

            {/* Social Sharing */}
            <div className="pt-8 border-t">
              <p className="text-gray-600 mb-6">Share your achievement</p>
              <div className="flex justify-center gap-4">
                {socialPlatforms.map(({ name, icon: Icon, color }) => (
                  <button
                    key={name}
                    className={`p-3 ${color} rounded-lg transform transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    aria-label={`Share on ${name}`}
                  >
                    <Icon className="w-5 h-5 text-white transform transition-transform ease-out duration-300 group-hover:rotate-12" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default SuccessScreen;