
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailTemplatePreview from '../components/email/EmailTemplatePreview';

const EmailTemplate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <EmailTemplatePreview />
      <Footer />
    </div>
  );
};

export default EmailTemplate;
