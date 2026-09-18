import type { ObservationRecord } from "./observation.js";

export interface LatestKey {
  subjectType: string;
  subjectId: string;
  key?: string;
}

export interface LatestStore {
  get(key: LatestKey): Promise<ObservationRecord | undefined>;
  put(observation: ObservationRecord): Promise<void>;
}

export class MemoryLatestStore implements LatestStore {
  private readonly records = new Map<string, ObservationRecord>();

  async get(key: LatestKey): Promise<ObservationRecord | undefined> {
    return this.records.get(latestKey(key));
  }

  async put(observation: ObservationRecord): Promise<void> {
    const key = latestKey({
      subjectType: observation.subject.type,
      subjectId: observation.subject.id,
    });
    const current = this.records.get(key);

    if (!current || observation.observedAt >= current.observedAt) {
      this.records.set(key, observation);
    }
  }
}

function latestKey(key: LatestKey): string {
  return [key.subjectType, key.subjectId, key.key ?? ""].join(":");
}
