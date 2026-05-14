# Caos

**Caos** é uma aplicação de inteligência artificial pessoal, modular e expansível. O projeto nasce da extração das funcionalidades do antigo Sphere / AI ON / ModeON, reorganizadas em uma arquitetura limpa.

A proposta é criar uma IA com interface moderna estilo ChatGPT, identidade visual baseada em uma esfera viva, memória persistente, módulos de criação, automação, programação, permissões e execução segura.

## Objetivo

Transformar várias ideias separadas em um único sistema organizado:

- Chat com IA contextual.
- Sidebar por modos: Chat, Código, Projetos, Memória, Imagem, Voz, Automação e Dev Mode.
- Esfera energética como identidade visual e estado interno.
- Memória persistente com busca e RAG futuro.
- Criação e edição de projetos completos.
- Sistema de permissões antes de ações externas.
- Runtime seguro com sandbox, logs e rollback.
- Evolução futura com modelos locais de texto, imagem e áudio.
- Módulo ModeON como camada futura de disciplina e foco.

## Estrutura

```txt
core/       regras fixas, segurança, permissões, integridade
agent/      comportamento da IA, modos, roteamento e prompts
runtime/    execução segura, sandbox, logs e pipeline de mudanças
memory/     memória curta, longa, evolução e busca
modules/    funcionalidades: voz, imagem, projetos, automação, ModeON
ui/web/     interface web principal
docs/       visão, arquitetura e mapa de funcionalidades
tests/      testes automatizados
```

## Princípio central

O Caos pode parecer vivo, ativo e evolutivo, mas sua execução deve ser controlada:

```txt
usuário → core imutável → supervisor → agent → runtime → sandbox → produção
```

A IA pode propor, simular e testar mudanças. A aplicação real só muda com validação e permissão.

## Estado inicial

Este repositório foi criado como nova base limpa do projeto Caos. A implementação será evoluída por módulos, sem copiar a desorganização do projeto antigo.
