import { ConverterInput, ConverterOutput } from '../models/Unit';
import { UNITS } from './../models/UnitRegistry';

export class ConversionEngine {
  static convert(input: ConverterInput): ConverterOutput {
    const { value, fromUnit, toUnit, unitCategory } = input;
    
    if (fromUnit === toUnit) {
      return {
        originalValue: value,
        convertedValue: value,
        formulaUsed: `Identical units`
      };
    }

    if (unitCategory === 'temperature') {
      return this.convertTemperature(value, fromUnit, toUnit);
    }

    const categoryUnits = UNITS[unitCategory];
    const fromDef = categoryUnits.find(u => u.id === fromUnit);
    const toDef = categoryUnits.find(u => u.id === toUnit);

    if (!fromDef || !toDef) {
       throw new Error("Invalid units for conversion");
    }

    // Convert to base unit, then to target unit
    const baseValue = value * fromDef.multiplierToBase;
    const convertedValue = baseValue / toDef.multiplierToBase;

    // Adjust for floating point precision issues
    const finalValue = Math.round(convertedValue * 1000000) / 1000000;

    return {
      originalValue: value,
      convertedValue: finalValue,
      formulaUsed: `(val * ${fromDef.multiplierToBase}) / ${toDef.multiplierToBase}`
    };
  }

  private static convertTemperature(value: number, fromUnit: string, toUnit: string): ConverterOutput {
    let baseCelsius = value;
    let formulaIn = 'C = input';

    // Step 1: Convert to Celsius
    if (fromUnit === 'f') {
      baseCelsius = (value - 32) * 5 / 9;
      formulaIn = '(F - 32) * 5/9 = C';
    } else if (fromUnit === 'k') {
      baseCelsius = value - 273.15;
      formulaIn = 'K - 273.15 = C';
    }
    
    // Step 2: Convert from Celsius to Target
    let finalValue = baseCelsius;
    let formulaOut = '';
    
    if (toUnit === 'f') {
      finalValue = (baseCelsius * 9 / 5) + 32;
      formulaOut = `(C * 9/5) + 32 = F`;
    } else if (toUnit === 'k') {
      finalValue = baseCelsius + 273.15;
      formulaOut = `C + 273.15 = K`;
    } else {
      formulaOut = `C = target`;
    }

    const rounded = Math.round(finalValue * 1000000) / 1000000;

    return {
      originalValue: value,
      convertedValue: rounded,
      formulaUsed: `${formulaIn} -> ${formulaOut}`
    };
  }
}
