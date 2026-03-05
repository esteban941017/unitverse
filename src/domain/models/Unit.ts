export type UnitCategory = 'length' | 'temperature' | 'weight' | 'volume';

export interface ConverterInput {
  value: number;
  fromUnit: string;
  toUnit: string;
  unitCategory: UnitCategory;
}

export interface ConverterOutput {
  originalValue: number;
  convertedValue: number;
  formulaUsed?: string;
}

export interface UnitDefinition {
  id: string;
  name: string;
  symbol: string;
  category: UnitCategory;
  // Factor applied relative to the base unit in its category.
  // E.g., for Length where meters is base (factor = 1):
  // miles factor = 1609.34
  multiplierToBase: number; 
}
