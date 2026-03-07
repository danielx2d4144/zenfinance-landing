import React, { useState } from 'react';

const BetaRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    walletAddress: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // SheetDB API URL for beta registrations
  const SHEETDB_API_URL = 'https://sheetdb.io/api/v1/pbcerq674dpxj';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.walletAddress) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    if (!emailRegex.test(formData.email)) {
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
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            walletAddress: formData.walletAddress,
            timestamp: new Date().toISOString(),
            type: 'beta_registration'
          }
        })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Registration successful! We\'ll be in touch soon.' });
        setFormData({ firstName: '', lastName: '', email: '', walletAddress: '' });
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-12 md:py-20 relative bg-grid-squares">
      <div className="w-full max-w-2xl relative z-10">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#35CB87]"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#35CB87]"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#35CB87]"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#35CB87]"></div>

            <div className="border border-white/10 bg-[#111111] p-8 md:p-12 relative">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#35CB87]"></div>
                  <h1 className="text-3xl md:text-5xl font-bold mono-font text-white uppercase tracking-tight">
                    ZenFinance Mainnet Launch
                  </h1>
                  <div className="w-2 h-2 bg-[#35CB87]"></div>
                </div>
                <div className="inline-block border border-[#35CB87]/30 px-6 py-2 mt-4">
                  <p className="text-base md:text-lg text-[#35CB87] mono-font uppercase tracking-[0.2em] font-medium">
                    Coming Soon
                  </p>
                </div>
                <p className="text-lg md:text-xl text-white/70 mt-6 font-light">
                  Secure Your Spot for Beta Testing
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full bg-transparent border-b border-white/30 pb-3 outline-none mono-font text-base md:text-lg focus:border-[#35CB87] transition-colors placeholder:text-white/30 text-white disabled:opacity-50"
                      placeholder="John"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full bg-transparent border-b border-white/30 pb-3 outline-none mono-font text-base md:text-lg focus:border-[#35CB87] transition-colors placeholder:text-white/30 text-white disabled:opacity-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-transparent border-b border-white/30 pb-3 outline-none mono-font text-base md:text-lg focus:border-[#35CB87] transition-colors placeholder:text-white/30 text-white disabled:opacity-50"
                    placeholder="john.doe@example.com"
                  />
                </div>

                {/* Wallet Address */}
                <div className="relative">
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-3">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    name="walletAddress"
                    value={formData.walletAddress}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-transparent border-b border-white/30 pb-3 outline-none mono-font text-base md:text-lg focus:border-[#35CB87] transition-colors placeholder:text-white/30 text-white disabled:opacity-50"
                    placeholder="0x..."
                  />
                </div>

                {/* Message */}
                {message && (
                  <div className={`p-4 border ${message.type === 'success' ? 'border-[#35CB87] bg-[#35CB87]/10' : 'border-red-400 bg-red-400/10'}`}>
                    <p className={`text-sm mono-font ${message.type === 'success' ? 'text-[#35CB87]' : 'text-red-400'}`}>
                      {message.text}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative bg-[#35CB87] text-black px-16 py-4 font-bold uppercase text-sm tracking-[0.2em] mono-font hover:brightness-110 transition-all shadow-xl shadow-[#35CB87]/20 overflow-visible rounded-md disabled:opacity-50 disabled:cursor-not-allowed group"
                    style={{
                      clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
                    }}
                  >
                    {loading ? 'SUBMITTING...' : 'SECURE MY SPOT'}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                  </button>
                </div>
              </form>

              {/* Footer Note */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 text-center mono-font">
                  By registering, you agree to receive updates about ZenFinance beta testing
                </p>
              </div>
            </div>
          </div>
    </section>
  );
};

export default BetaRegistration;
