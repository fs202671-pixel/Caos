# Relatório de extração do Aura-sphere-

## Fonte

Arquivo analisado: `Aura-sphere--main.zip`.

## Conteúdo encontrado

- App React real em `.migration-backup/src`.
- Frontend Vite em `.migration-backup/packages/frontend`.
- Backend FastAPI em `.migration-backup/packages/bridge`.
- Módulo de memória em `.migration-backup/packages/mempalace`.
- Scripts, documentação, vault Obsidian, artefatos e backups.

## Decisão

Não copiar tudo para o Caos.

O antigo contém código útil, mas também muitos backups, documentação duplicada, scripts antigos e arquivos gerados. Copiar tudo manteria a bagunça original.

## Estratégia

1. Recriar arquitetura limpa.
2. Extrair conceitos funcionais.
3. Criar web app novo.
4. Criar API local mínima.
5. Separar core, agent, runtime, memory e modules.
6. Deixar pontos de integração para importar trechos específicos depois.

## Funcionalidades preservadas

- Chat.
- Sidebar de modos.
- Esfera visual.
- Memória local.
- Dev Mode.
- Projetos.
- Voz.
- Imagem.
- Automação.
- ModeON.
- Permissões.
- Logs.
- Sandbox futuro.
