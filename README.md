# now

A small common foundation for turning observations into a current state.

```
WORLD
  ↓
OBSERVE
  ↓
ObservationRecord
  ↓
Latest
  ↓
NowState
  ↓
AXE / HEX
  ↓
JEV
  ↓
AW
  ↓
ACTION
  ↓
RESULT → OBSERVE
```

## Boundary

- **Observation**: what was observed, with source and time.
- **Latest**: the newest observation for a subject/key.
- **Now**: a current-state projection assembled from latest observations.
- **Analysis**: interpretation belongs above observations.
- **Decision**: belongs to axe-hex / Jev.
- **Execution**: belongs to AW.

The same substrate can receive GitHub Observatory data, web/RSS data, and other crawlers.

This repository intentionally keeps the interface small. Storage, crawling, analysis, and decision engines are replaceable.
