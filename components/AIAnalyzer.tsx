import React, { useState } from 'react';
import { analyzeProject } from '../services/geminiService';
import Button from './Button';

const AIAnalyzer: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const data = await analyzeProject(input);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Analysis failed. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-12 bg-black flex flex-col gap-8 max-w-6xl mx-auto border-x border-white/10">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold uppercase tracking-widest mono-font text-white">AI Incubation Scanner</h2>
        <p className="text-white/60 mono-font">Our Gemini-powered engine evaluates your Web3 vision in seconds.</p>
      </div>

      <div className="flex flex-col gap-4">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your Web3 project (e.g., A decentralized protocol for fractionalized AI compute...)"
          className="w-full h-40 p-6 bg-gray-900 border border-white/10 focus:border-[#35CB87] focus:ring-1 focus:ring-[#35CB87] outline-none transition-all mono-font resize-none text-white"
        />
        <Button 
          variant="primary" 
          onClick={handleAnalyze} 
          className={`self-end ${loading ? 'opacity-50 cursor-wait' : ''}`}
        >
          {loading ? 'Processing...' : 'Scan Project'}
        </Button>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 animate-in fade-in duration-500">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
               <div className="text-6xl font-black text-[#35CB87] mono-font">{result.viabilityScore}</div>
               <div className="uppercase font-bold tracking-widest text-sm mono-font text-white">Viability Index</div>
            </div>
            <p className="text-white/80 mono-font text-sm leading-relaxed">{result.summary}</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="uppercase font-bold text-xs tracking-widest text-[#35CB87] mb-3 mono-font">Risk Assessment</h3>
              <ul className="space-y-2">
                {result.risks.map((risk: string, i: number) => (
                  <li key={i} className="text-sm border-l-2 border-white/10 pl-3 mono-font text-white">{risk}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="uppercase font-bold text-xs tracking-widest text-white mb-3 mono-font">Strategic Steps</h3>
              <ul className="space-y-2">
                {result.suggestions.map((suggestion: string, i: number) => (
                  <li key={i} className="text-sm bg-white/5 p-3 rounded mono-font text-white">↳ {suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIAnalyzer;