import { useLocation, Outlet } from 'react-router-dom';
import { ClipboardPenLine, Building2, Bot } from 'lucide-react';
import { TabGroup, TabList } from '@headlessui/react';
import Header from './Header';
import Footer from './Footer';

const SetupLayout = () => {
  const location = useLocation();
  
  const steps = [
    { 
      path: '/register', 
      label: 'Registration',
      icon: ClipboardPenLine,
      description: 'Create your account'
    },
    { 
      path: '/setup-organization', 
      label: 'Organization',
      icon: Building2,
      description: 'Setup your company'
    },
    { 
      path: '/integration', 
      label: 'Integration',
      icon: Bot,
      description: 'Deploy your chatbot'
    }
  ];

  const getCurrentStep = () => {
    return steps.findIndex(step => step.path === location.pathname) + 1;
  };

  return (
    <>
      <Header />

      <div className="relative min-h-screen mt-16 overflow-hidden ">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 
            animate-gradientBg-shift"></div>
        </div>

        {/* Floating Animated Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 bg-purple-200 rounded-full opacity-80 blur-2xl  animate-float"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-80 blur-2xl animate-float-reverse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-200 rounded-full opacity-80 blur-2xl animate-float"></div>
        </div>

        {/* Header */}
        <div className="p-6 mb-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-1">
              Beyond Chats Assignment Project
            </h1>
            <p className="mt-2 text-gray-600">Setup your AI-powered chatbot in minutes</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <TabGroup defaultIndex={getCurrentStep() - 1}>
            <TabList className="relative flex items-center justify-between">
              {steps.map((step, index) => {
                const currentStep = getCurrentStep();
                const isActive = index + 1 <= currentStep;
                const isCurrent = index + 1 === currentStep;
                const Icon = step.icon;

                return (
                  <div 
                    key={step.path} 
                    className="relative flex flex-col items-center w-full"
                  >
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div 
                        className={`
                          absolute top-6 left-1/2 right-0 h-1 
                          ${index + 1 < currentStep 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                            : 'bg-gray-200'
                          }
                        `}
                        style={{ 
                          width: 'calc(100% - 50px)', 
                          left: 'calc(50% + 25px)' 
                        }}
                      />
                    )}

                    {/* Step Circle */}
                    <div 
                      className={`
                        relative z-10 w-14 h-14 rounded-full flex items-center justify-center
                        transition-all duration-300 transform
                        ${isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                          : 'bg-white text-gray-400 border-2 border-gray-200'
                        }
                        ${isCurrent ? 'ring-4 ring-purple-200' : ''}
                      `}
                    >
                      <Icon className="w-7 h-7" />
                    {/* Pulse animation for current step */}
                    {isCurrent && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-purple-500" />
                    )}
                    </div>


                    {/* Step Label */}
                    <div 
                      className={`
                        mt-3 text-center transition-all duration-300
                        ${isActive ? 'text-gray-900' : 'text-gray-500'}
                      `}
                    >
                      <div className="font-medium text-sm sm:text-base">{step.label}</div>
                      <div className="text-sm mt-1 opacity-75 hidden md:block">{step.description}</div>
                    </div>
                  </div>
                );
              })}
            </TabList>
          </TabGroup>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in-up">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default SetupLayout;