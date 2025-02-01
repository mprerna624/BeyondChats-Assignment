import React, { useState, Fragment } from 'react';
import { MessageSquare, X, ArrowLeft } from 'lucide-react';
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import toast from 'react-hot-toast';

const ChatbotTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackError, setFeedbackError] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
    setInputValue('');
    
    setMessages(prev => [...prev, { type: 'bot', isTyping: true }]);
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => !msg.isTyping).concat({
        type: 'bot',
        text: "I understand you're testing our chatbot. I'm here to help answer any questions about our products or services!"
      }));
    }, 1500);
  };

  const handleFeedbackSubmit = () => {
    if (!feedbackText.trim()) {
      setFeedbackError('Please provide your feedback before submitting');
      return;
    }
    
    toast.success("Thank you for your feedback! We'll use it to improve our service.");
    setShowFeedback(false);
    setFeedbackText('');
    setFeedbackError('');
  };

  const closeFeedbackModal = () => {
    setShowFeedback(false);
    setFeedbackText('');
    setFeedbackError('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between sticky top-0 z-20 shadow-xl animate-gradientBg-shift gap-4 md:gap-0">
        <button
          onClick={() => window.close()}
          className="flex items-center gap-2 hover:text-blue-200 transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium animate-slide-right">Close Preview</span>
        </button>
        <p className="text-sm bg-white/10 px-4 md:px-6 py-2 rounded-full">
          Chatbot not working as intended?{' '}
          <button
            onClick={() => setShowFeedback(true)}
            className="underline hover:text-blue-200 transition-all"
          >
            Share feedback
          </button>
        </p>
      </div>

      {/* Mock website content */}
      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-gradientBg-shift">
            Welcome to Our Platform
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Discover how our AI-powered solutions can transform your business operations
            and drive growth in today's competitive landscape.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-transform ease-out duration-300 hover:scale-[1.02] w-full sm:w-auto">
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 ease-out hover:scale-[1.02] w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {['Innovation', 'Security', 'Analytics'].map((feature, i) => (
            <div
              key={feature}
              className="bg-white p-6 rounded-xl shadow-md animate-fade-in-up transition-transform ease-out duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">
                Experience world-class {feature.toLowerCase()} solutions designed for modern businesses.
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {[
              { label: 'Active Users', value: '10,000+' },
              { label: 'Countries', value: '50+' },
              { label: 'Satisfaction', value: '99.9%' }
            ].map((stat) => (
              <div key={stat.label} className="space-y-2 transition-transform ease-out duration-300 hover:scale-[1.02]">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot widget */}
       <div className="fixed bottom-0 sm:bottom-4 right-0 sm:right-4 z-50">
        {isOpen ? (
          <div className="w-screen sm:w-80 h-[80vh] sm:h-96 bg-white flex flex-col animate-slide-up sm:rounded-lg sm:shadow-xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center relative shadow-lg sm:rounded-t-lg">
              <div className="absolute inset-0 bg-black/10 sm:rounded-t-lg"></div>
              <div className="flex items-center gap-2 relative z-10">
                <MessageSquare className="w-5 h-5 text-white" />
                <h3 className="text-white font-medium">BeyondChats Support</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-200 transition-transform ease-out hover:rotate-90 duration-200 relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto border-x border-t border-gray-100">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`
                    ${msg.type === 'bot' ? 'bg-blue-100 mr-auto' : 'bg-purple-100 ml-auto'}
                    p-3 rounded-lg mb-2 max-w-[80%] animate-fade-in-up shadow-sm
                  `}
                >
                  {msg.isTyping ? (
                    <div className="loading-dots flex gap-1">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="p-4 border-t bg-white shadow-lg">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base shadow-sm"
                />
                <button 
                  type="submit"
                  className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all whitespace-nowrap text-sm sm:text-base shadow-sm"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all animate-bounce-subtle"
          >
            <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>
        )}
      </div>

      {/* Feedback modal */}
      <Transition appear show={showFeedback} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeFeedbackModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl">
                  <DialogTitle className="text-2xl font-semibold mb-2">
                    Share Your Feedback
                  </DialogTitle>
                  <Description className="text-gray-600 mb-4">
                    Help us improve your chatbot experience
                  </Description>
                  
                  <div className="space-y-4">
                    <textarea
                      className={`w-full h-32 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 ${
                        feedbackError ? 'border-red-500' : ''
                      }`}
                      placeholder="What issues are you experiencing with the chatbot?"
                      value={feedbackText}
                      onChange={(e) => {
                        setFeedbackText(e.target.value);
                        if (feedbackError) setFeedbackError('');
                      }}
                      autoFocus
                    />
                    {feedbackError && (
                      <p className="text-red-500 text-sm">{feedbackError}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                    <button
                      onClick={closeFeedbackModal}
                      className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleFeedbackSubmit}
                      className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:-translate-y-1"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ChatbotTest;