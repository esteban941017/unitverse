# Project Constitution

## Data Schemas
(Pending definition in gemini.md)

## Behavioral Rules
- Priority: Reliability over speed
- Logic: Never guess at business logic
- Compliance: Must adhere to B.L.A.S.T and A.N.T architectures

## Architectural Invariants
- 3-Layer Architecture:
  1. Architecture (Layer 1): SOP files in markdown
  2. Navigation (Layer 2): Routing logic
  3. Tools (Layer 3): Deterministic TypeScript/Python scripts
- All changes in business logic must be documented in `architecture/` SOPs before modifying code in `tools/`.
- No new scripts can be built in `tools/` until Data Schema is defined in `gemini.md` and Phase 1 is validated.
