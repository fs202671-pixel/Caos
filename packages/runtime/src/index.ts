type RuntimeAction = {
  id: string;
  label: string;
  risk: 'low' | 'medium' | 'high';
};

export function validateAction(action: RuntimeAction) {
  return {
    allowed: action.risk === 'low',
    needsConfirmation: action.risk !== 'low',
    action,
  };
}
