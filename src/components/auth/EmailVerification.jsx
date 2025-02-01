import { useState, useEffect } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Loader2, AlertCircle, Mail } from 'lucide-react';

const EmailVerification = ({ email }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [resendCounter, setResendCounter] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const inputs = Array(6).fill(0);

  // Countdown timer for resend code
  useEffect(() => {
    if (resendCounter > 0) {
      const timer = setTimeout(() => setResendCounter(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCounter]);

  const handleChange = (index, value) => {
    if (!/[0-9]/.test(value) && value !== '') return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      const nextInput = document.querySelector(`input[name=code-${index + 1}]`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.querySelector(`input[name=code-${index - 1}]`);
      if (prevInput) {
        prevInput.focus();
        const newCode = [...code];
        newCode[index - 1] = '';
        setCode(newCode);
      }
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsResending(false);
    setResendCounter(30);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    
    if (verificationCode.length === 6) {
      setIsVerifying(true);
      setVerificationStatus('verifying');

      // Simulate API verification
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (verificationCode === '123456') { // Demo success code
        setVerificationStatus('success');
        setTimeout(() => {
          navigate('/setup-organization');
        }, 1500);
      } else {
        setVerificationStatus('error');
        setIsVerifying(false);
      }
    }
  };

  return (
    <Dialog open={true} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all animate-fade-in-up">
          <div className="text-center mb-8">
            {verificationStatus === 'success' ? (
              <div className="flex flex-col items-center animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <DialogTitle as="h3" className="text-2xl font-bold text-gray-900">
                  Email Verified!
                </DialogTitle>
                <p className="mt-2 text-gray-600">Redirecting to organization setup...</p>
              </div>
            ) : (
              <>
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-500" />
                </div>
                <DialogTitle as="h3" className="text-2xl font-bold text-gray-900">
                  Verify your email
                </DialogTitle>
                <Description className="mt-2 text-gray-600">
                  We've sent a verification code to
                  <div className="font-medium text-gray-900">{email}</div>
                </Description>
              </>
            )}
          </div>

          {verificationStatus !== 'success' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center gap-2">
                {inputs.map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`code-${index}`}
                    maxLength={1}
                    className={`w-12 h-14 text-center text-2xl font-semibold rounded-lg border 
                    ${verificationStatus === 'error' ? 'border-red-300 animate-shake' : 'border-gray-300'}
                    outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                    transition-all duration-300 disabled:bg-gray-50`}
                    value={code[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    disabled={isVerifying}
                  />
                ))}
              </div>

              {verificationStatus === 'error' && (
                <div className="flex items-center justify-center gap-2 text-red-500 animate-fade-in">
                  <AlertCircle className="w-5 h-5" />
                  <span>Invalid verification code. Please try again.</span>
                </div>
              )}

              <div className="text-center text-sm mb-4">
                <p className="text-gray-600 text-xs italic">
                  The only correct code is 123456
                </p>
              </div>

              <div className="text-center text-sm">
                <p className="text-gray-600">
                  Didn't receive the code?{' '}
                  {resendCounter > 0 ? (
                    <span className="text-gray-400">Resend in {resendCounter}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendCode}
                      disabled={isResending}
                      className="text-blue-500 hover:text-blue-600 font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      {isResending ? (
                        <span className="flex items-center gap-1">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Resend code'
                      )}
                    </button>
                  )}
                </p>
              </div>

              <button
                type="submit"
                disabled={code.some(digit => !digit) || isVerifying}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium
                         transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVerifying ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </span>
                ) : (
                  'Verify Email'
                )}
              </button>
            </form>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default EmailVerification;