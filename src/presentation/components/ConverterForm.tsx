import React, { useState, useMemo, useEffect } from 'react';
import { UNITS } from '../../domain/models/UnitRegistry';
import { UnitCategory, ConverterInput, ConverterOutput } from '../../domain/models/Unit';
import { ConvertValueUseCase } from '../../application/useCases/ConvertValue';
import { ArrowRightLeft } from 'lucide-react';

export const ConverterForm: React.FC = () => {
  const [category, setCategory] = useState<UnitCategory>('length');
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('ft');
  const [result, setResult] = useState<ConverterOutput | null>(null);

  const availableUnits = useMemo(() => UNITS[category], [category]);
  const useCase = useMemo(() => new ConvertValueUseCase(), []);

  useEffect(() => {
    const defaultFrom = UNITS[category][0].id;
    const defaultTo = UNITS[category][1]?.id || defaultFrom;
    setFromUnit(defaultFrom);
    setToUnit(defaultTo);
  }, [category]);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      try {
        const input: ConverterInput = {
          value: numValue,
          fromUnit,
          toUnit,
          unitCategory: category
        };
        const out = useCase.execute(input);
        setResult(out);
      } catch (e) {
        setResult(null);
      }
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit, category, useCase]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="glass-panel p-6 md:p-8 rounded-3xl w-full max-w-2xl mx-auto space-y-6 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col space-y-6">
        {/* Category Selector */}
        <div className="flex justify-center space-x-2 p-1 bg-slate-800/50 rounded-xl backdrop-blur-md border border-slate-700/50">
          {(Object.keys(UNITS) as UnitCategory[]).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex-1 capitalize py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                category === cat 
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg scale-[1.02]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Input/Output Grids */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center mt-6">
          
          {/* FROM */}
          <div className="flex flex-col space-y-2">
            <label className="text-slate-400 text-sm font-medium px-1">From</label>
            <div className="bg-slate-900/50 border border-slate-700 focus-within:border-brand-500 rounded-xl flex overflow-hidden transition-colors">
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-transparent text-white px-4 py-3 outline-none text-xl font-medium"
                placeholder="0.0"
              />
              <div className="border-l border-slate-700 bg-slate-800/50">
                <select 
                  value={fromUnit} 
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="bg-transparent text-brand-200 px-3 py-3 outline-none cursor-pointer hover:bg-slate-700/50 appearance-none font-medium h-full max-w-[120px]"
                >
                  {availableUnits.map(u => (
                    <option key={`from-${u.id}`} value={u.id} className="bg-slate-900 text-white">
                      {u.symbol} - {u.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* SWAP BUTTON */}
          <button 
            onClick={handleSwap}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 shadow-md text-slate-300 hover:text-white transition-all transform hover:scale-110 active:scale-95 group mx-auto my-2 md:my-0 mt-8 md:mt-6"
            title="Swap Units"
          >
             <ArrowRightLeft className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>

          {/* TO/RESULT */}
          <div className="flex flex-col space-y-2">
            <label className="text-slate-400 text-sm font-medium px-1">To</label>
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl flex overflow-hidden h-14 items-center">
              <div className="flex-1 px-4 py-3 text-2xl font-semibold text-white truncate text-right text-transparent bg-clip-text bg-gradient-to-l from-brand-300 to-indigo-300">
                {result ? result.convertedValue : '0.0'}
              </div>
              <div className="border-l border-slate-700 bg-slate-800/50 h-full">
                <select 
                  value={toUnit} 
                  onChange={(e) => setToUnit(e.target.value)}
                  className="bg-transparent text-brand-200 px-3 py-3 outline-none cursor-pointer hover:bg-slate-700/50 appearance-none font-medium h-full max-w-[120px]"
                >
                  {availableUnits.map(u => (
                    <option key={`to-${u.id}`} value={u.id} className="bg-slate-900 text-white">
                      {u.symbol} - {u.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Formula Display */}
        {result && result.formulaUsed && (
          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-brand-300 border border-slate-700 font-mono tracking-wider shadow-sm break-all text-center">
              ℹ️ {result.formulaUsed}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
