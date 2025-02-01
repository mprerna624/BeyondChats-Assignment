import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

const RegistrationForm = ({ onShowVerification }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  const [googleAuthStatus, setGoogleAuthStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call with artificial delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show email verification dialog
      onShowVerification(formData.email);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const simulateGoogleAuth = async () => {
    setGoogleAuthStatus('Initializing Google Sign-In...');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setGoogleAuthStatus('Authenticating...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setGoogleAuthStatus('Account verified! Redirecting...');
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Close popup and navigate to organization setup
    setShowGooglePopup(false);
    navigate('/setup-organization');
  };

  const handleGoogleSignIn = () => {
    setError('');
    setShowGooglePopup(true);
    simulateGoogleAuth();
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">Create Your Account</h2>
        <p className="mt-2 text-gray-600 animate-fade-in delay-200">Join Beyond Chats to get started with your AI chatbot</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm animate-shake">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="group transform transition-all duration-300 hover:translate-x-1">
          <div className="relative rounded-lg border border-gray-300 transition-all duration-300 
                       focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent 
                       hover:border-gray-400 hover:shadow-md">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                         transition-all duration-300 group-focus-within:text-blue-500 
                         group-hover:scale-110" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-10 py-3 bg-transparent outline-none placeholder:text-gray-400
                      focus:ring-0 sm:text-sm md:text-base transition-all duration-300
                      placeholder:transition-all placeholder:duration-300 
                      focus:placeholder:opacity-75"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="group transform transition-all duration-300 hover:translate-x-1">
          <div className="relative rounded-lg border border-gray-300 transition-all duration-300 
                       focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent 
                       hover:border-gray-400 hover:shadow-md">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                         transition-all duration-300 group-focus-within:text-blue-500 
                         group-hover:scale-110" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-10 py-3 bg-transparent outline-none placeholder:text-gray-400
                      focus:ring-0 sm:text-sm md:text-base transition-all duration-300
                      placeholder:transition-all placeholder:duration-300 
                      focus:placeholder:opacity-75"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="group transform transition-all duration-300 hover:translate-x-1">
          <div className="relative rounded-lg border border-gray-300 transition-all duration-300 
                       focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent 
                       hover:border-gray-400 hover:shadow-md">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 
                         transition-all duration-300 group-focus-within:text-blue-500 
                         group-hover:scale-110" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-10 py-3 bg-transparent outline-none placeholder:text-gray-400
                      focus:ring-0 sm:text-sm md:text-base transition-all duration-300
                      placeholder:transition-all placeholder:duration-300 
                      focus:placeholder:opacity-75"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              minLength={8}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 
                   rounded-lg font-medium transform transition-all duration-300 
                   hover:scale-[1.02] hover:shadow-lg hover:from-blue-600 hover:to-purple-600
                   active:scale-[0.98] active:shadow-inner
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                   disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                   group relative overflow-hidden"
        >
          <span className="flex items-center justify-center gap-2 relative z-10">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Continue 
                <ArrowRight className="w-5 h-5 transition-transform ease-out duration-300 group-hover:translate-x-1" />
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-transform ease-out duration-300 transform scale-x-0 group-hover:scale-x-100" />
        </button>

        {/* Divider */}
        <div className="relative my-8 animate-fade-in">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 transform transition-all duration-300 hover:border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-500 bg-white transition-all duration-300 hover:text-gray-700">
              or continue with
            </span>
          </div>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full bg-white border-2 border-gray-200 py-3 px-4 rounded-lg font-medium
                   transform transition-all duration-300 
                   hover:border-gray-300 hover:bg-gray-50 hover:scale-[1.02] hover:shadow-md
                   active:scale-[0.98] active:bg-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 
                   disabled:opacity-70 disabled:cursor-not-allowed
                   group relative overflow-hidden"
        >
          <span className="flex items-center justify-center gap-2 transition-transform ease-out duration-300 group-hover:translate-x-1">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 transition-transform ease-out duration-300 group-hover:scale-110" />
            Continue with Google
          </span>
        </button>
      </form>

      {/* Google Auth Popup */}
      <Dialog
        open={showGooglePopup}
        onClose={() => setShowGooglePopup(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all animate-fade-in-up">
            <DialogTitle
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-8 h-8 animate-bounce" />
              </div>
              Google Authentication
            </DialogTitle>
            <div className="mt-2">
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
                <p className="text-sm text-gray-600 animate-pulse">{googleAuthStatus}</p>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default RegistrationForm;