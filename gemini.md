# Data Schema & Maintenance

## JSON Data Schema
Domain: Unit Conversion

```json
{
  "ConverterInputTemplate": {
    "value": "number",
    "fromUnit": "string",
    "toUnit": "string",
    "unitCategory": "string"
  },
  "ConverterOutputTemplate": {
    "originalValue": "number",
    "convertedValue": "number",
    "formulaUsed": "string"
  }
}
```

## Input Shape
- **value**: Float/Integer
- **fromUnit**: String identifier (e.g., 'meters', 'celsius')
- **toUnit**: String identifier (e.g., 'feet', 'fahrenheit')
- **unitCategory**: Enum string (e.g., 'length', 'temperature', 'weight', 'volume')

## Output Shape
- **convertedValue**: Float (rounded/formatted logic applied)
- **formulaUsed**: Optional transparency string.

## Maintenance Log
- Defined core unit conversion schema based on user discovery (React/DDD Unitverse UI).
