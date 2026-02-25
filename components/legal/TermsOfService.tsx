import React from 'react';
import LegalLayout from './LegalLayout';

const TermsOfService: React.FC = () => {
  return (
    <LegalLayout title="Terms of Service">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the ZenFinance website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials on ZenFinance's website for personal, non-commercial transitory viewing only.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">3. Disclaimer</h2>
        <p>
          The materials on ZenFinance's website are provided on an 'as is' basis. ZenFinance makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">4. Limitations</h2>
        <p>
          In no event shall ZenFinance or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ZenFinance's website.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </section>
    </LegalLayout>
  );
};

export default TermsOfService;
