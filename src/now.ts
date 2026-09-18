import type { ObservationRecord } from "./observation.js";

export interface NowState {
  subject: {
    type: string;
    id: string;
    label?: string;
  };
  asOf: string;
  observations: ObservationRecord[];
}

export function projectNow(
  subject: NowState["subject"],
  observations: ObservationRecord[],
): NowState {
  const relevant = observations
    .filter(
      (o) =>
        o.subject.type === subject.type &&
        o.subject.id === subject.id,
    )
    .sort((a, b) => b.observedAt.localeCompare(a.observedAt));

  return {
    subject,
    asOf: relevant[0]?.observedAt ?? new Date(0).toISOString(),
    observations: relevant,
  };
}
