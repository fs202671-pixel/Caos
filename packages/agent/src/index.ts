export type AgentMode = 'chat' | 'code' | 'projects' | 'memory' | 'image' | 'voice' | 'automation' | 'dev';

export function routeByMode(mode: AgentMode, input: string) {
  return {
    mode,
    input,
    intent: inferIntent(mode, input),
  };
}

function inferIntent(mode: AgentMode, input: string): string {
  if (mode === 'projects') return 'project_generation';
  if (mode === 'memory' || input.includes('@memoria')) return 'memory_query';
  if (mode === 'code') return 'code_task';
  return 'chat';
}
