import type { InternetMode, PlannedAction, RiskLevel } from '../types';

export function classifyRisk(label: string): RiskLevel {
  const text = label.toLowerCase();
  if (text.includes('excluir') || text.includes('apagar') || text.includes('deletar')) return 'high';
  if (text.includes('arquivo') || text.includes('projeto') || text.includes('executar')) return 'medium';
  return 'low';
}

export function canRunAction(action: PlannedAction, internetMode: InternetMode): boolean {
  if (action.risk === 'high') return false;
  if (action.requiresConfirmation) return false;
  if (internetMode === 'OFF' && action.label.toLowerCase().includes('internet')) return false;
  return true;
}

export function explainPermission(action: PlannedAction): string {
  if (action.risk === 'high') return 'Ação de alto risco: exige aprovação explícita.';
  if (action.requiresConfirmation) return 'Ação precisa de confirmação antes de executar.';
  return 'Ação liberada para execução segura.';
}
