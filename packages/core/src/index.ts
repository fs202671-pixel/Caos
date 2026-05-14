export type RiskLevel = 'low' | 'medium' | 'high';

export function classifyRisk(action: string): RiskLevel {
  const text = action.toLowerCase();
  if (text.includes('delete') || text.includes('remove') || text.includes('apagar')) return 'high';
  if (text.includes('write') || text.includes('file') || text.includes('execute')) return 'medium';
  return 'low';
}

export function canModifyCore(path: string): boolean {
  return !path.startsWith('core/') && !path.includes('/core/');
}
