export type RecordKind = 'user' | 'conversation' | 'system' | 'code' | 'event';

export type RecordItem = {
  id: string;
  kind: RecordKind;
  text: string;
  createdAt: string;
};

export function makeRecord(kind: RecordKind, text: string): RecordItem {
  return {
    id: `${Date.now()}`,
    kind,
    text,
    createdAt: new Date().toISOString(),
  };
}

export function findRecords(items: RecordItem[], query: string): RecordItem[] {
  const needle = query.toLowerCase();
  return items.filter((item) => item.text.toLowerCase().includes(needle));
}
