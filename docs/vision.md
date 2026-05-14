# Visão do Caos

Caos é uma IA pessoal modular com presença visual, memória e capacidade de criar, programar, automatizar e evoluir de forma controlada.

## Produto principal

O produto principal é uma aplicação web com experiência semelhante ao ChatGPT, mas com identidade própria:

- Uma esfera energética central representa o estado da IA.
- A sidebar define o modo ativo.
- O chat interpreta contexto, histórico e intenção.
- A memória permite continuidade real entre sessões.
- O usuário controla permissões para ações externas.

## Funções extraídas do projeto original

### Chat e linguagem

- Conversar naturalmente.
- Explicar, traduzir, resumir e reescrever.
- Gerar ideias, textos e respostas técnicas.
- Adaptar tom e nível de detalhe ao modo ativo.

### Modos da sidebar

- **Chat:** conversa geral.
- **Código:** criação, correção e explicação de código.
- **Projetos:** geração de estruturas completas de sistemas.
- **Memória:** visualizar, editar, apagar e buscar memórias.
- **Imagem:** geração e histórico de imagens.
- **Voz:** texto para fala, vozes salvas e ajustes.
- **Automação:** fluxos automáticos e tarefas encadeadas.
- **Dev Mode:** logs, prompts, módulos e arquitetura interna.

### Memória

- Memória de curto prazo.
- Memória de longo prazo.
- Memória de evolução.
- Busca simples no MVP.
- Busca semântica/RAG em versões futuras.

### Segurança e permissões

- Internet OFF, ASK e AUTO.
- Confirmação antes de acessar internet, arquivos, microfone ou câmera.
- Classificação de risco por ação.
- Logs e auditoria.
- Bloqueio de modificação direta do core.

### Criação de projetos

- Criar pastas e arquivos.
- Editar arquivos existentes.
- Gerar estrutura completa de apps.
- Exibir diff antes de aplicar.
- Usar sandbox antes de produção.

### Voz

- Ajuste de tom, velocidade e expressividade.
- Preview de voz.
- Galeria de vozes salvas.
- Exportação de áudio.
- Suporte futuro a modelos locais.

### Imagem

- Prompt para gerar imagens.
- Estilos: realista, anime, conceitual e fantasia.
- Galeria e download.
- Arquitetura preparada para modelos locais.

### Automação

- Fluxos encadeados.
- Gatilhos.
- Execuções controladas.
- Logs por etapa.

### ModeON

ModeON será tratado como módulo futuro dentro do Caos ou produto derivado. Ele concentra funções de disciplina, foco, bloqueio de distrações e IA adaptativa comportamental.

## MVP recomendado

### v0.1

- Interface web com sidebar, chat e esfera.
- Estado global de modo ativo.
- Histórico local de conversas.
- Memória local básica.
- Sistema inicial de permissões.
- Documentação da arquitetura.

### v0.2

- Backend local.
- API de memória.
- Roteador de agente.
- Módulo Projetos com explorador de arquivos.
- Logs e Dev Mode.

### v0.3

- Sandbox de execução.
- Diff e aprovação de patches.
- Integração com modelos locais via Ollama/llama.cpp.
- RAG com embeddings locais.

### v1.0

- Voz, imagem, automação e ModeON integrados.
- Sistema de evolução controlada.
- Observabilidade completa.
- Backup/exportação da IA.
