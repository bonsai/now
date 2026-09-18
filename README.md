# now

**now = Observation Data Viewer / Dashboard**

A small common viewer layer for understanding what has come back from data-producing workflows.

```
WORLD / GitHub / Web / APIs
            ↓
      Data AW / Collector
            ↓
      ObservationRecord
            ↓
     History / repo-memory
            ↓
       ┌────┴────┐
       ↓         ↓
    Latest     Recap
       \         /
        \       /
         ↓     ↓
          NOW
     Data Viewer
     Dashboard
       │
   ┌───┴───────────┐
   ↓               ↓
 Issues         WF Errors
   │               │
   └───────┬───────┘
           ↓
      AXE / HEX
           ↓
          JEV
           ↓
           AW
           ↓
         RESULT
           ↺
        OBSERVE
```

## What now does

`now` answers:

> **「何をやろうとして、何が起きて、今どうなっているか？」**

It is a **viewer, not a decision engine**.

### Issue view

Show the current and recent state of Issues:

- open / closed
- created / updated time
- labels
- linked PR
- recent changes
- stale / recently active state

### WF Error view

Show workflow execution results:

- workflow
- run
- job
- failed step
- failure message / log reference
- observed time
- previous result
- rerun result

GitHub Actions exposes workflow runs, jobs, steps, and logs, including failed-step logs, so these can be represented as observations. citeturn0search0turn0search1

## Boundary

- **Data AW / github-observatory**: collect facts.
- **Observation**: preserve what was observed, where, and when.
- **History**: retain observations over time.
- **Latest**: expose the newest observation.
- **now**: visualize and navigate the observations.
- **axe-hex**: choose what to inspect.
- **Jev**: make decisions.
- **AW executor**: act.
- **wf-errors**: can become a collector/view over workflow failure observations.

No diagnosis, recommendation, ranking, or decision belongs in the viewer layer.

## Shared substrate

The same ObservationRecord can carry:

- GitHub repository observations
- Issue observations
- Pull request observations
- Workflow / job / step observations
- WF error observations
- Web / RSS observations
- other crawler or API observations

The interface stays small; collectors, storage, analysis, and decision engines remain replaceable.
