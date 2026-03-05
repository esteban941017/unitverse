import React from 'react';

export const AdBanner: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700/50 rounded-xl flex items-center justify-center p-4 min-h-[100px] shadow-inner relative overflow-hidden group hover:border-brand-500/50 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/80 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-in-out"></div>
      <div className="text-center z-10">
        <p className="text-slate-500 text-xs tracking-[0.2em] uppercase font-semibold">Advertisement</p>
        <p className="text-slate-400 text-sm mt-1">AdProvider integration pending</p>
      </div>
    </div>
  );
};
