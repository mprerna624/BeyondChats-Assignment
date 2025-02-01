import React, { useState } from 'react';
import RegistrationForm from '../components/auth/RegistrationForm';
import EmailVerification from '../components/auth/EmailVerification';

const Registration = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // This will be called from within RegistrationForm when form is submitted
  const handleVerificationStart = (email) => {
    setUserEmail(email);
    setShowVerification(true);
  };

  return (
    <>
      <RegistrationForm 
        onShowVerification={handleVerificationStart}
      />
      {showVerification && (
        <EmailVerification 
          email={userEmail}
          onVerify={() => {
            // Handle successful verification- Navigate will be handled within EmailVerification component
            setShowVerification(false);
          }}
        />
      )}
    </>
  );
};

export default Registration;