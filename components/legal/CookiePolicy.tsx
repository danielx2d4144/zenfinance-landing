import React from 'react';
import LegalLayout from './LegalLayout';

const CookiePolicy: React.FC = () => {
  return (
    <LegalLayout title="Cookie Policy">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">2. How We Use Cookies</h2>
        <p>
          ZenFinance uses cookies to understand how you use our website and to improve your experience. We use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer until you delete them).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">3. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong className="text-white">Essential Cookies:</strong> These are necessary for the website to function properly.</li>
          <li><strong className="text-white">Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong className="text-white">Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider">4. Managing Cookies</h2>
        <p>
          You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
        </p>
      </section>
    </LegalLayout>
  );
};

export default CookiePolicy;
