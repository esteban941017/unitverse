import { ConverterInput, ConverterOutput } from '../../domain/models/Unit';
import { ConversionEngine } from '../../domain/services/ConversionEngine';

export class ConvertValueUseCase {
  execute(input: ConverterInput): ConverterOutput {
    // Note: The usecase layer can handle additional validation, logging, or event dispatching.
    // For now, it simply calls the deterministic logic engine per the B.L.A.S.T SOP.
    try {
      if (isNaN(input.value)) {
        throw new Error("Input value must be a valid number");
      }
      return ConversionEngine.convert(input);
    } catch (error) {
      console.error("[ConvertValueUseCase] Execution Error: ", error);
      throw error;
    }
  }
}
