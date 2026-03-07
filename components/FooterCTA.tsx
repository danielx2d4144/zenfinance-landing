import React, { useState } from 'react';
import Logo from './Logo';

const FooterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // SheetDB API URL for email collection
  const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/tuiey12hnp135';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: email,
            timestamp: new Date().toISOString(),
          }
        })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Successfully subscribed! Thank you.' });
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#111111] border-b border-white/10">
      <div className="flex flex-col lg:flex-row w-full min-h-[220px] relative">
        {/* Left Column: Logo */}
        <div className="w-full lg:w-1/4 flex items-center px-6 md:px-12 py-8 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>
          <Logo />
        </div>

        {/* Middle Column: Subscription Input */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 border-b lg:border-b-0 lg:border-r border-white/10 py-12 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h3 className="text-2xl md:text-3xl font-medium mono-font mb-8 text-white">
            Subscribe to be in touch*
          </h3>
          <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your e-mail"
              disabled={loading}
              className="w-full bg-transparent border-b border-white/30 pb-4 outline-none mono-font text-base md:text-lg focus:border-white transition-colors placeholder:text-white/30 text-white disabled:opacity-50"
            />
            {message && (
              <p className={`mt-4 text-sm mono-font ${message.type === 'success' ? 'text-[#35CB87]' : 'text-red-400'}`}>
                {message.text}
              </p>
            )}
          </form>
        </div>

        {/* Right Column: Action Button & Disclaimer */}
        <div className="w-full lg:w-1/4 flex flex-col justify-between p-8 md:p-12 gap-8">
          <div className="text-left lg:text-right">
            <p className="text-[10px] text-white/40 font-bold tracking-[0.2em] mono-font uppercase">
              *Only valuable resources
            </p>
          </div>
          
          <div className="flex justify-start lg:justify-end">
            <button 
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full sm:w-auto relative bg-[#35CB87] text-black hover:text-white group transition-colors duration-300 overflow-visible rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
              }}
            >
              <div className="px-12 py-4 font-bold uppercase tracking-[0.2em] mono-font text-sm flex items-center justify-center transition-transform active:scale-95">
                {loading ? 'SUBMITTING...' : 'SUBSCRIBE'}
              </div>
              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;