# CAOS • Estrutura Mestra

## Visão

Caos é uma IA pessoal modular com interface viva, memória persistente, automações e execução segura.

O projeto nasce da reorganização do Sphere em uma arquitetura limpa e expansível.

---

# Núcleo do sistema

```txt
Usuário
   ↓
UI / Orb
   ↓
Agent Layer
   ↓
Core Supervisor
   ↓
Runtime Engine
   ↓
Modules
   ↓
Sandbox / External Actions
```

---

# Estrutura principal

```txt
caos/
│
├── core/
├── agent/
├── runtime/
├── memory/
├── modules/
├── ui/
├── migration/
├── docs/
├── tests/
└── assets/
```

---

# CORE

Responsável pelas regras fixas do sistema.

## Objetivos

- permissões
- validações
- segurança
- integridade
- supervisão
- controle de execução
- autenticação futura
- rollback

## Estrutura

```txt
core/
├── permissions/
├── policies/
├── validator/
├── supervisor/
└── safety/
```

---

# AGENT

Camada cognitiva do Caos.

## Responsabilidades

- personalidade
- contexto
- roteamento
- escolha de ferramentas
- modos
- interpretação
- planejamento

## Estrutura

```txt
agent/
├── orchestrator/
├── prompts/
├── modes/
├── planner/
├── router/
└── context/
```

## Modos planejados

- Chat
- Código
- Projetos
- Memória
- Automação
- Voz
- Imagem
- Research
- Dev Mode
- Focus / ModeON

---

# MEMORY

Sistema de memória persistente.

## Tipos

- memória curta
- memória longa
- contexto ativo
- histórico
- embeddings futuros
- RAG futuro

## Estrutura

```txt
memory/
├── short/
├── long/
├── vector/
├── recall/
└── evolution/
```

---

# RUNTIME

Execução controlada das ações.

## Responsabilidades

- executar tarefas
- automações
- pipelines
- logs
- sandbox
- fila de execução
- observabilidade

## Estrutura

```txt
runtime/
├── queue/
├── executor/
├── sandbox/
├── logs/
├── workflows/
└── events/
```

---

# MODULES

Ferramentas e capacidades.

## Estrutura

```txt
modules/
├── social/
├── voice/
├── image/
├── projects/
├── automations/
├── coding/
├── integrations/
├── analytics/
└── modeon/
```

---

# UI

Interface principal do Caos.

## Identidade visual

- dark premium
- preto profundo
- glow violeta/azul/verde
- orb viva
- glass blur
- mobile first
- sensação de sistema operacional de IA

## Conceitos centrais

- orb como presença ativa
- chat como centro
- módulos orbitando o núcleo
- painéis vivos
- overlays suaves
- navegação modular

## Estrutura

```txt
ui/
├── web/
│   ├── app/
│   ├── components/
│   ├── layouts/
│   ├── orb/
│   ├── chat/
│   ├── memory/
│   ├── projects/
│   └── automation/
│
└── mobile/
```

---

# MIGRATION

Ponte entre Sphere e Caos.

Objetivo:

Extrair funcionalidades úteis do Sphere sem carregar a desorganização estrutural.

## Processo

1. mapear funcionalidades
2. separar módulos úteis
3. limpar dependências
4. modularizar
5. integrar no Caos

## Categorias

```txt
migration/
├── extracted/
├── cleaned/
├── archived/
└── mapping/
```

---

# EXPERIÊNCIA DO USUÁRIO

## Desktop

- sidebar viva
- painel contextual
- widgets flutuantes
- memória lateral
- ações rápidas
- multitarefa

## Mobile

- orb central
- bottom navigation
- experiência minimalista
- voz rápida
- comandos rápidos

---

# PRINCÍPIOS

## O chat é o centro

Mesmo com múltiplos módulos, tudo deve convergir para conversa contextual.

## A orb representa estado

A orb não é decoração.
Ela representa:

- atividade
- processamento
- foco
- contexto
- memória
- sincronização
- energia do sistema

## Segurança acima da autonomia

Toda ação externa deve passar por:

```txt
Permissão → Simulação → Validação → Execução
```

---

# ROADMAP INICIAL

## Fase 1

- arquitetura limpa
- UI principal
- chat base
- sistema de modos
- orb animada
- memória local

## Fase 2

- automações
- projetos
- integrações
- runtime
- voice mode

## Fase 3

- RAG
- multiagentes
- workflows inteligentes
- modelos locais
- evolução contextual

---

# ESTADO DO PROJETO

Sphere = laboratório antigo
Caos = arquitetura definitiva

O objetivo não é apagar a evolução anterior.
O objetivo é reorganizar e transformar em um sistema coerente, modular e expansível.
