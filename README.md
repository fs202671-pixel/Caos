# Caos

Caos é uma aplicação de IA pessoal modular, evolutiva e controlada. O projeto nasce da reorganização dos códigos enviados em ZIPs e do antigo Sphere, mas agora com uma base limpa no repositório `Caos`.

## Objetivo atual

O objetivo neste momento **não é considerar o frontend pronto ou aprovado**.

O objetivo agora é:

- extrair os códigos dos ZIPs enviados;
- identificar versões evolutivas sem chamar tudo de duplicata;
- remover somente duplicatas reais;
- preservar funcionalidades úteis;
- organizar tudo em uma estrutura limpa;
- subir no GitHub sem transformar o Caos em outro repositório bagunçado.

## Relação entre os repositórios

```txt
Aura-sphere-                    laboratório antigo / fonte histórica
Somente-o-frontend-visual-do-caos-  referência visual e experimentos
Caos                             base limpa onde a reconstrução começa
```

Os três fazem parte da mesma evolução do projeto, mas o `Caos` será usado como base organizada.

## Estrutura alvo

```txt
apps/
  web/        frontend em construção
  api/        backend/API local

packages/
  core/       permissões, segurança e regras fixas
  agent/      modos, roteamento e comportamento da IA
  runtime/    execução controlada, logs e sandbox
  memory/     memória curta, longa e busca futura
  modules/    ferramentas e capacidades da IA

migration/
  incoming/   inventário dos arquivos recebidos
  extracted/  partes extraídas dos ZIPs
  mapping/    mapas do que veio de onde
  archive/    histórico preservado sem poluir a raiz

docs/         documentação e decisões técnicas
workspace/    área futura para projetos criados pela IA
```

## Regra de migração

Nada entra no Caos apenas porque existe em um ZIP.

Cada parte deve passar por:

```txt
Auditoria → Deduplicação → Extração → Organização → Integração
```

## Estado atual

Já existe uma documentação inicial de arquitetura e checklist de migração.

A próxima etapa é subir os códigos extraídos dos ZIPs em camadas, começando por uma base organizada e rastreável.

## Prioridade imediata

1. Criar a estrutura limpa de pastas.
2. Registrar o inventário dos ZIPs enviados.
3. Subir arquivos de código úteis sem duplicatas.
4. Separar histórico bruto de código ativo.
5. Depois iniciar a reconstrução real do frontend, backend e módulos.
