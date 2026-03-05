import { UnitCategory, UnitDefinition } from './Unit';

export const UNITS: Record<UnitCategory, UnitDefinition[]> = {
  length: [
    { id: 'm', name: 'Meter', symbol: 'm', category: 'length', multiplierToBase: 1 },
    { id: 'km', name: 'Kilometer', symbol: 'km', category: 'length', multiplierToBase: 1000 },
    { id: 'cm', name: 'Centimeter', symbol: 'cm', category: 'length', multiplierToBase: 0.01 },
    { id: 'mm', name: 'Millimeter', symbol: 'mm', category: 'length', multiplierToBase: 0.001 },
    { id: 'in', name: 'Inch', symbol: 'in', category: 'length', multiplierToBase: 0.0254 },
    { id: 'ft', name: 'Foot', symbol: 'ft', category: 'length', multiplierToBase: 0.3048 },
    { id: 'yd', name: 'Yard', symbol: 'yd', category: 'length', multiplierToBase: 0.9144 },
    { id: 'mi', name: 'Mile', symbol: 'mi', category: 'length', multiplierToBase: 1609.344 },
  ],
  weight: [
    { id: 'kg', name: 'Kilogram', symbol: 'kg', category: 'weight', multiplierToBase: 1 },
    { id: 'g', name: 'Gram', symbol: 'g', category: 'weight', multiplierToBase: 0.001 },
    { id: 'mg', name: 'Milligram', symbol: 'mg', category: 'weight', multiplierToBase: 0.000001 },
    { id: 'lb', name: 'Pound', symbol: 'lb', category: 'weight', multiplierToBase: 0.45359237 },
    { id: 'oz', name: 'Ounce', symbol: 'oz', category: 'weight', multiplierToBase: 0.02834952 },
  ],
  volume: [
    { id: 'l', name: 'Liter', symbol: 'L', category: 'volume', multiplierToBase: 1 },
    { id: 'ml', name: 'Milliliter', symbol: 'mL', category: 'volume', multiplierToBase: 0.001 },
    { id: 'gal', name: 'Gallon (US)', symbol: 'gal', category: 'volume', multiplierToBase: 3.78541 },
    { id: 'qt', name: 'Quart (US)', symbol: 'qt', category: 'volume', multiplierToBase: 0.946353 },
    { id: 'pt', name: 'Pint (US)', symbol: 'pt', category: 'volume', multiplierToBase: 0.473176 },
    { id: 'cup', name: 'Cup (US)', symbol: 'cup', category: 'volume', multiplierToBase: 0.236588 },
  ],
  temperature: [
    { id: 'c', name: 'Celsius', symbol: '°C', category: 'temperature', multiplierToBase: 1 }, // Temperature requires custom formula, multiplier is ignored
    { id: 'f', name: 'Fahrenheit', symbol: '°F', category: 'temperature', multiplierToBase: 1 },
    { id: 'k', name: 'Kelvin', symbol: 'K', category: 'temperature', multiplierToBase: 1 },
  ]
};
