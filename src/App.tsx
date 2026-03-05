// import React from 'react';
import { ConverterForm } from './presentation/components/ConverterForm';
import { AdBanner } from './presentation/components/AdBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-500/10 to-transparent pointer-events-none"></div>
      
      {/* Header Banner */}
      <div className="w-full bg-slate-900/50 border-b border-slate-800 p-2 flex justify-center backdrop-blur-sm z-50 sticky top-0">
         <div className="max-w-7xl w-full flex justify-between items-center px-4">
           <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-indigo-400 tracking-wider flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
             UNITVERSE
           </span>
         </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-4 py-12 z-10 w-full max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-indigo-500 animate-[gradient_8s_linear_infinite] pb-2 drop-shadow-md">
            Unitverse
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            A precise, serverless unit conversion engine powered by modern UI primitives and Domain-Driven logic.
          </p>
        </div>

        <ConverterForm />

        <div className="w-full grid md:grid-cols-2 gap-4 mt-8 opacity-80 hover:opacity-100 transition-opacity">
           <AdBanner />
           <AdBanner />
        </div>
      </main>
      
      <footer className="w-full border-t border-slate-800 text-center py-6 text-slate-500 text-sm z-10 bg-black/40 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} Unitverse AI Labs. Engineered via B.L.A.S.T Protocol.</p>
      </footer>
    </div>
  );
}

export default App;
