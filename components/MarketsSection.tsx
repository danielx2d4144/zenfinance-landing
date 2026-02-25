import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MARKETS = [
  {
    name: 'USDT',
    symbol: 'USDT0',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=040',
    apy: '4.25%',
    tvl: '$12.4M',
    color: '#26A17B'
  },
  {
    name: 'Kraken Wrapped Bitcoin',
    symbol: 'kBTC',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040',
    apy: '1.80%',
    tvl: '$45.2M',
    color: '#F7931A'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040',
    apy: '2.15%',
    tvl: '$89.1M',
    color: '#627EEA'
  }
];

const MarketsSection: React.FC = () => {
  return (
    <section id="markets" className="w-full bg-black border-b border-white/10 relative overflow-hidden">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:h-48 border-b border-white/10 relative">
        {/* Title Area */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mono-font leading-none select-none text-white">
            LENDING MARKETS
          </h2>
        </div>
        
        {/* Tagline Area */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex items-center justify-between gap-6 relative">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#35CB87] mt-1.5 shrink-0"></div>
            <p className="text-lg md:text-xl font-medium leading-tight mono-font text-white/70">
              Supply your assets to earn yield<br />
              <span className="text-white">Securely on Zenchain</span>
            </p>
          </div>
          
          <button className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mono-font text-[#35CB87] hover:text-white transition-colors group">
            See all lending markets <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Markets Table */}
      <div className="w-full">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 border-b border-white/10 bg-white/[0.02]">
          <div className="col-span-6 p-6 px-12 border-r border-white/10">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font">Asset</span>
          </div>
          <div className="col-span-2 p-6 text-center border-r border-white/10">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font">Supply APY</span>
          </div>
          <div className="col-span-2 p-6 text-center border-r border-white/10">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font">Total Supplied</span>
          </div>
          <div className="col-span-2 p-6 text-center">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font">Action</span>
          </div>
        </div>

        {/* Market Rows */}
        {MARKETS.map((market, index) => (
          <motion.div 
            key={market.symbol}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 hover:bg-white/[0.03] transition-colors group cursor-pointer"
          >
            {/* Asset Info */}
            <div className="col-span-1 md:col-span-6 p-6 md:p-8 px-6 md:px-12 border-b md:border-b-0 md:border-r border-white/10 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 p-2.5 flex items-center justify-center border border-white/10 group-hover:border-[#35CB87]/30 transition-colors">
                <img src={market.logo} alt={market.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-white mono-font tracking-tight">{market.name}</h4>
                <span className="text-xs text-white/40 mono-font uppercase tracking-widest">{market.symbol}</span>
              </div>
            </div>

            {/* APY */}
            <div className="col-span-1 md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center gap-1">
              <span className="md:hidden text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-2">Supply APY</span>
              <span className="text-2xl font-black text-[#35CB87] mono-font">{market.apy}</span>
            </div>

            {/* TVL */}
            <div className="col-span-1 md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center gap-1">
              <span className="md:hidden text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-2">Total Supplied</span>
              <span className="text-xl font-bold text-white mono-font">{market.tvl}</span>
            </div>

            {/* Action */}
            <div className="col-span-1 md:col-span-2 p-6 md:p-8 flex items-center justify-center">
              <button 
                className="w-full md:w-auto px-8 py-3 bg-[#35CB87] text-black text-[11px] font-black uppercase tracking-[0.2em] mono-font hover:bg-white transition-colors relative overflow-hidden"
                style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                Supply
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Footer Link */}
      <div className="lg:hidden p-8 border-b border-white/10 flex justify-center">
        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mono-font text-[#35CB87] hover:text-white transition-colors group">
          See all lending markets <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Decorative Grid Accents */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 pointer-events-none"></div>
      <div className="absolute top-0 left-2/4 w-px h-full bg-white/5 pointer-events-none"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-white/5 pointer-events-none"></div>
    </section>
  );
};

export default MarketsSection;
