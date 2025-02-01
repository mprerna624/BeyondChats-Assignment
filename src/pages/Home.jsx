import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Zap, Building2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbot",
      description: "Intelligent conversations powered by advanced natural language processing"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get your chatbot up and running in minutes, not days"
    },
    {
      icon: Building2,
      title: "Enterprise Ready",
      description: "Scalable solution for businesses of all sizes"
    }
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen mt-16 relative">

        {/*Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"></div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 opacity-75 rounded-full blur-3xl animate-float-reverse" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 opacity-75 rounded-full blur-3xl animate-float" />
          </div>

          <div className="max-w-[1215px] w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">AI-Powered Customer Support</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Elevate Your Customer Experience with AI
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                  Deploy an intelligent chatbot that understands your business, learns from your content, and provides 24/7 support to your customers.
                </p>
                <div className="space-y-4 mb-8">
                  {['Instant Setup', 'Smart Responses', 'Seamless Integration'].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/register')}
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>

              <div className="relative animate-fade-in-up hidden md:block">
                <div className="relative w-full max-w-md mx-auto aspect-[4/3]">
                  {/* Chat Interface Mockup */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform ease-out duration-300">
                    <div className="flex items-center justify-between mb-4 border-b pb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      </div>
                      <div className="text-sm font-medium text-gray-700">Beyond Chat Support</div>
                      <div className="w-8"></div> {/* Spacer for balance */}
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-blue-100 rounded-lg rounded-tr-none p-2 max-w-xs">
                          <p className="text-sm text-gray-800">How can I help you today?</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg rounded-tl-none p-2 max-w-xs">
                          <p className="text-sm text-gray-800">I need help with my order</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-100 rounded-lg rounded-tr-none p-2 max-w-xs">
                          <p className="text-sm text-gray-800">I'll help you track your order right away!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Powerful Features for Modern Businesses
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to provide exceptional customer support
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Setup in Three Simple Steps
          </h2>
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Quick Registration",
                  description: "Create your account in seconds"
                },
                {
                  step: "2",
                  title: "Setup Organization",
                  description: "Connect your website and train the AI"
                },
                {
                  step: "3",
                  title: "Deploy Chatbot",
                  description: "Integrate and start helping customers"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Join thousands of businesses already using Beyond Chats
            </p>
            <button
              onClick={() => navigate('/register')}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-blue-600 bg-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Start Free Trial <Sparkles className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;