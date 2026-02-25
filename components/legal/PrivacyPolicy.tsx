import React from 'react';
import LegalLayout from './LegalLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">1. Introduction</h2>
        <p>
          At ZenFinance, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">2. Information Collection</h2>
        <p>
          We collect information that you provide directly to us, such as when you connect your wallet, subscribe to our newsletter, or contact us for support. This may include your wallet address, email address, and any other information you choose to provide.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">3. Use of Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect ZenFinance and our users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">5. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
