import React, { useState } from 'react';
import { Copy, Mail, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const IntegrationGuide = () => {
  const [copied, setCopied] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const integrationCode = `<!-- BeyondChats Integration -->
<script>
  window.beyondchatsConfig = {
    apiKey: 'YOUR_API_KEY',
    brandColor: '#3B82F6',
    position: 'bottom-right'
  };
</script>
<script 
  async 
  src="https://cdn.beyondchats.com/widget.js">
</script>`;

  const copyCode = () => {
    navigator.clipboard.writeText(integrationCode);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    toast.success('Instructions sent to developer!');
    setShowEmailForm(false);
    setEmail('');
    setEmailError('');
  };

  const handleCancel = () => {
    setShowEmailForm(false);
    setEmail('');
    setEmailError('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 sm:mb-4">Manual Integration</h3>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          Copy and paste the following code just before the closing &lt;/head&gt; tag on your website:
        </p>
        <div className="relative">
          <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <code>{integrationCode}</code>
          </pre>
          <button
            onClick={copyCode}
            className="absolute top-2 right-2 p-1.5 sm:p-2 bg-gray-600 rounded-md hover:bg-gray-500 transition-colors"
          >
            {copied ? 
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" /> : 
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
            }
          </button>
        </div>
      </div>

      <div className="text-center">
        <span className="px-3 py-1.5 text-gray-500 text-sm">OR</span>
      </div>

      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 sm:mb-4">Email Instructions to Developer</h3>
        {!showEmailForm ? (
          <button
            onClick={() => setShowEmailForm(true)}
            className="w-full py-2.5 sm:py-3 px-3 sm:px-4 flex items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Send to Developer</span>
          </button>
        ) : (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Developer's Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError('');
                }}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                  emailError ? 'border-red-500' : ''
                }`}
                placeholder="developer@company.com"
              />
              {emailError && (
                <p className="mt-1 text-xs sm:text-sm text-red-500">{emailError}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm sm:text-base order-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleEmailSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base order-1 sm:order-2"
              >
                Send Instructions
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default IntegrationGuide;