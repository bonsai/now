export interface ObservationRecord {
  id: string;
  subject: {
    type: string;
    id: string;
    label?: string;
  };
  source: {
    type: string;
    uri?: string;
  };
  observedAt: string;
  data: Record<string, unknown>;
  provenance?: {
    collector: string;
    version?: string;
  };
}
