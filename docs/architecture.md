# Arquitetura do Caos

A arquitetura do Caos separa criatividade da IA e controle determinístico. A IA pode sugerir ações, mas segurança, permissões e execução passam por camadas fixas.

## Camadas

```txt
user
  ↓
core
  ↓
supervisor
  ↓
agent
  ↓
runtime
  ↓
sandbox
  ↓
production
```

## core/

Camada imutável em runtime.

Responsabilidades:

- Regras de segurança.
- Permissões máximas.
- Classificação de risco.
- Bloqueio de comandos perigosos.
- Integridade do core por hash/checksum.
- Proteção contra auto-modificação.

O agente não pode editar o core diretamente.

## agent/

Camada mutável e evolutiva da IA.

Responsabilidades:

- Roteamento por modo da sidebar.
- Interpretação de intenção.
- Planejamento de ações.
- Geração de respostas.
- Geração de código e patches.
- Sugestões de automação.

O agent propõe; ele não executa ações críticas sozinho.

## runtime/

Camada de execução controlada.

Responsabilidades:

- Receber ações estruturadas.
- Validar permissões.
- Executar ferramentas permitidas.
- Criar logs.
- Testar mudanças em sandbox.
- Fazer rollback.

## memory/

Camada de memória persistente.

Tipos:

- Curto prazo: sessão atual.
- Longo prazo: dados úteis sobre usuário e projeto.
- Evolução: histórico de mudanças, versões e aprendizado controlado.

## modules/

Funcionalidades isoladas:

- `chat/`
- `code/`
- `projects/`
- `image/`
- `voice/`
- `automation/`
- `modeon/`
- `devmode/`

Cada módulo deve ter permissões, logs e limites próprios.

## ui/web/

Interface principal.

Componentes esperados:

- Sidebar de modos.
- Chat central.
- Esfera visual.
- Painel de memória.
- Dev Mode.
- Explorador de projetos.
- Barra de ações.

## Fluxo de ação segura

1. Usuário pede algo.
2. Agent interpreta intenção.
3. Core classifica risco.
4. Runtime verifica permissões.
5. Se necessário, pede confirmação.
6. Sandbox testa.
7. Usuário aprova.
8. Runtime aplica.
9. Logs registram tudo.

## Regras fundamentais

- Nunca executar texto bruto como comando.
- Converter linguagem natural em ação estruturada.
- Ações de alto risco exigem confirmação explícita.
- Core não pode ser alterado pelo agente.
- Toda evolução deve passar por sandbox.
- Logs críticos devem ser append-only.
