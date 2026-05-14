import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bot,
  Brain,
  Code2,
  Cpu,
  FolderKanban,
  Image,
  Mic,
  PlayCircle,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import './styles.css';

type Mode = 'chat' | 'code' | 'projects' | 'memory' | 'image' | 'voice' | 'automation' | 'dev';
type SphereState = 'logic' | 'creative' | 'learning' | 'active' | 'alert' | 'coherent';

type Message = {
  id: number;
  role: 'user' | 'ai';
  text: string;
  mode: Mode;
};

type MemoryItem = {
  id: number;
  text: string;
  type: 'user' | 'conversation' | 'system' | 'code' | 'event';
};

const modes: Array<{ id: Mode; label: string; icon: React.ReactNode; description: string }> = [
  { id: 'chat', label: 'Chat', icon: <Bot size={18} />, description: 'Conversa contextual e respostas naturais.' },
  { id: 'code', label: 'Código', icon: <Code2 size={18} />, description: 'Criação, correção e explicação de código.' },
  { id: 'projects', label: 'Projetos', icon: <FolderKanban size={18} />, description: 'Gerar estruturas completas de sistemas.' },
  { id: 'memory', label: 'Memória', icon: <Brain size={18} />, description: 'Buscar, editar e organizar memórias.' },
  { id: 'image', label: 'Imagem', icon: <Image size={18} />, description: 'Prompts, estilos, variações e galeria.' },
  { id: 'voice', label: 'Voz', icon: <Mic size={18} />, description: 'Texto para fala e vozes personalizadas.' },
  { id: 'automation', label: 'Automação', icon: <Workflow size={18} />, description: 'Fluxos, gatilhos e tarefas encadeadas.' },
  { id: 'dev', label: 'Dev Mode', icon: <Cpu size={18} />, description: 'Logs, módulos, permissões e arquitetura.' },
];

const modeToSphere: Record<Mode, SphereState> = {
  chat: 'logic',
  code: 'coherent',
  projects: 'active',
  memory: 'learning',
  image: 'creative',
  voice: 'creative',
  automation: 'active',
  dev: 'alert',
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'ai',
    mode: 'chat',
    text:
      'Caos iniciado. Eu sou a nova base limpa: chat, memória, projetos, voz, imagem, automação e segurança sob o mesmo núcleo.',
  },
];

function createAiReply(mode: Mode, input: string): string {
  const trimmed = input.trim();
  const prefix: Record<Mode, string> = {
    chat: 'Modo Chat: vou responder como assistente contextual.',
    code: 'Modo Código: vou tratar isso como tarefa técnica, com estrutura e implementação.',
    projects: 'Modo Projetos: vou transformar a ideia em arquivos, etapas e arquitetura.',
    memory: 'Modo Memória: vou registrar, buscar ou relacionar isso como dado persistente.',
    image: 'Modo Imagem: vou converter isso em direção visual, estilo e geração futura.',
    voice: 'Modo Voz: vou pensar em fala, tom, ritmo e configuração vocal.',
    automation: 'Modo Automação: vou quebrar isso em gatilhos, ações e validações.',
    dev: 'Dev Mode: vou analisar permissões, logs, módulos e riscos.',
  };

  if (trimmed.startsWith('/limpar memória')) {
    return 'Comando reconhecido: limpeza de memória deve exigir confirmação antes de apagar dados persistentes.';
  }

  if (trimmed.includes('@memoria')) {
    return `${prefix[mode]} Menção @memoria detectada. No backend real, eu buscaria memórias relevantes antes de responder.`;
  }

  if (trimmed.includes('@projeto') || mode === 'projects') {
    return `${prefix[mode]} Sugestão inicial: criar uma árvore de arquivos, gerar diff, classificar risco e pedir aprovação antes de escrever.`;
  }

  return `${prefix[mode]} Recebi: “${trimmed}”. Nesta versão inicial, a resposta é simulada; a próxima camada conectará agent, memory e runtime.`;
}

function App() {
  const [activeMode, setActiveMode] = useState<Mode>('chat');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [memories, setMemories] = useState<MemoryItem[]>([
    { id: 1, type: 'system', text: 'Caos usa sidebar como contexto principal da IA.' },
    { id: 2, type: 'system', text: 'A esfera representa estado interno e presença visual.' },
  ]);
  const [internetMode, setInternetMode] = useState<'OFF' | 'ASK' | 'AUTO'>('ASK');

  const currentMode = modes.find((mode) => mode.id === activeMode)!;
  const sphereState = modeToSphere[activeMode];

  const visibleThoughts = useMemo(
    () => [
      `modo ativo: ${currentMode.label}`,
      `estado visual: ${sphereState}`,
      `internet: ${internetMode}`,
      'permissões: aguardando ação externa',
    ],
    [currentMode.label, internetMode, sphereState]
  );

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      text: input,
      mode: activeMode,
    };

    const aiMessage: Message = {
      id: Date.now() + 1,
      role: 'ai',
      text: createAiReply(activeMode, input),
      mode: activeMode,
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setMemories((prev) => [
      ...prev,
      { id: Date.now() + 2, type: 'conversation', text: `[${currentMode.label}] ${input}` },
    ]);
    setInput('');
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Sparkles size={20} /></div>
          <div>
            <strong>Caos</strong>
            <span>AI OS</span>
          </div>
        </div>

        <nav className="mode-list">
          {modes.map((mode) => (
            <button
              key={mode.id}
              className={mode.id === activeMode ? 'mode active' : 'mode'}
              onClick={() => setActiveMode(mode.id)}
            >
              {mode.icon}
              <span>{mode.label}</span>
            </button>
          ))}
        </nav>

        <div className="permission-card">
          <div className="card-title"><ShieldCheck size={16} /> Permissões</div>
          <div className="segmented">
            {(['OFF', 'ASK', 'AUTO'] as const).map((mode) => (
              <button
                key={mode}
                className={internetMode === mode ? 'selected' : ''}
                onClick={() => setInternetMode(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <span className="eyebrow">Modo ativo</span>
            <h1>{currentMode.label}</h1>
            <p>{currentMode.description}</p>
          </div>
          <button className="ghost-button"><Settings size={18} /> Configurações</button>
        </header>

        <section className="hero-grid">
          <div className={`sphere ${sphereState}`}>
            <div className="sphere-core" />
            <div className="ring ring-one" />
            <div className="ring ring-two" />
          </div>

          <div className="thought-panel">
            <div className="card-title"><PlayCircle size={16} /> Pensamento visível</div>
            {visibleThoughts.map((thought) => (
              <p key={thought}>// {thought}</p>
            ))}
          </div>
        </section>

        <section className="content-grid">
          <div className="chat-panel">
            <div className="messages">
              {messages.map((message) => (
                <article key={message.id} className={`message ${message.role}`}>
                  <span>{message.role === 'ai' ? 'Caos' : 'Você'} · {message.mode}</span>
                  <p>{message.text}</p>
                </article>
              ))}
            </div>

            <div className="composer">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && sendMessage()}
                placeholder={`Enviar mensagem em ${currentMode.label}... use @memoria, @projeto ou /limpar memória`}
              />
              <button onClick={sendMessage}>Enviar</button>
            </div>
          </div>

          <aside className="memory-panel">
            <div className="card-title"><Brain size={16} /> Memória local</div>
            {memories.slice(-6).map((memory) => (
              <div className="memory-item" key={memory.id}>
                <strong>{memory.type}</strong>
                <p>{memory.text}</p>
              </div>
            ))}
          </aside>
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
