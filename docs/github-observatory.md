# GitHub Observatory → now

`github-observatory` is an observation producer. It currently emits JSONL such as `data/repositories.jsonl`, containing repository metadata and a `collected_at` timestamp.

The mapping into `ObservationRecord` is deliberately mechanical:

```text
github-observatory/data/repositories.jsonl
        ↓
ObservationRecord
        ↓
LatestStore
        ↓
NowState
```

Example:

```json
{
  "id": "github:repository:bonsai/axe-hex:2026-09-07T00:55:35Z",
  "subject": { "type": "github.repository", "id": "bonsai/axe-hex", "label": "axe-hex" },
  "source": { "type": "github-observatory", "uri": "https://github.com/bonsai/axe-hex" },
  "observedAt": "2026-09-07T00:55:35Z",
  "data": { "repo_id": "R_kg...", "language": "TypeScript", "stars": 0, "forks": 0, "open_issues": 0, "size": 123 },
  "provenance": { "collector": "github-observatory" }
}
```

## Boundary

The observatory owns collection and raw facts.

`now` owns the common projection contract:

- ObservationRecord = one observed fact snapshot
- LatestStore = newest snapshot
- NowState = current projection

No ML score, interpretation, recommendation, or decision is required for this adapter. Those remain downstream concerns.

The same mapping can later be used for commits, PR activity, workflow runs, RSS items, or other observation producers.
