import type { Mode, PlannedAction, SphereState } from '../types';

export const modeToSphere: Record<Mode, SphereState> = {
  chat: 'logic',
  code: 'coherent',
  projects: 'active',
  memory: 'learning',
  image: 'creative',
  voice: 'creative',
  automation: 'active',
  dev: 'alert',
};

export function createAiReply(mode: Mode, input: string): string {
  const text = input.trim();
  const prefix: Record<Mode, string> = {
    chat: 'Modo Chat: resposta contextual.',
    code: 'Modo Código: tarefa técnica.',
    projects: 'Modo Projetos: estrutura, arquivos e arquitetura.',
    memory: 'Modo Memória: registro, busca e relação de dados.',
    image: 'Modo Imagem: direção visual e geração futura.',
    voice: 'Modo Voz: fala, tom e ritmo.',
    automation: 'Modo Automação: gatilhos e ações.',
    dev: 'Dev Mode: logs, módulos e riscos.',
  };

  if (text.startsWith('/limpar memória')) {
    return 'Comando reconhecido. Limpeza de memória exige confirmação antes de apagar dados persistentes.';
  }

  if (text.includes('@memoria')) {
    return `${prefix[mode]} Menção @memoria detectada. A próxima versão buscará memórias relevantes antes de responder.`;
  }

  if (text.includes('@projeto') || mode === 'projects') {
    return `${prefix[mode]} Plano: gerar árvore de arquivos, criar diff, classificar risco e pedir aprovação antes da escrita.`;
  }

  return `${prefix[mode]} Recebi: “${text}”. Esta camada ainda é simulada, mas já segue a arquitetura agent → runtime.`;
}

export function planActions(mode: Mode, input: string): PlannedAction[] {
  const text = input.toLowerCase();
  const actions: PlannedAction[] = [];

  if (mode === 'projects' || text.includes('crie um projeto')) {
    actions.push({ id: 'project-scaffold', label: 'Gerar estrutura de projeto', risk: 'medium', requiresConfirmation: true });
  }

  if (text.includes('apagar') || text.includes('deletar')) {
    actions.push({ id: 'delete-data', label: 'Excluir dados ou arquivos', risk: 'high', requiresConfirmation: true });
  }

  if (mode === 'memory' || text.includes('@memoria')) {
    actions.push({ id: 'memory-search', label: 'Consultar memória local', risk: 'low', requiresConfirmation: false });
  }

  return actions;
}
