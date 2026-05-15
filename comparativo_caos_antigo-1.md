# Comparativo Aura/Sphere antigo vs Caos atual
## Resumo honesto
- Arquivos no ZIP antigo: **1986**
- Arquivos no Caos atual: **111**
- Módulos Python no backend antigo/bridge: **155**
- Arquivos frontend antigos detectados: **216**
- Arquivos Python atuais do Caos: **20**
- Arquivos web atuais do Caos: **39**
- Tarefas numeradas antigas detectadas no documento-base: **75** (maior número: 75)

## Percentuais estimados
- **Uso de visão/ideias do projeto antigo:** ~80-90%
- **Uso/adaptação de arquitetura/conceitos:** ~55-65%
- **Reaproveitamento direto de código antigo:** ~5-10%
- **Cobertura funcional da visão antiga no Caos atual:** ~47%

Esses números não significam que o app está 100% pronto. Significam quanto da visão antiga já virou estrutura/funcionalidade no Caos atual.

## Status por área

- `interface_chat_sidebar_esfera`: **implementado_base** (~80%)
- `onboarding_login_google`: **pendente** (~0%)
- `personalizacao_ia`: **parcial** (~25%)
- `permissoes`: **implementado_base** (~70%)
- `memoria`: **implementado_base** (~75%)
- `dev_mode`: **parcial** (~45%)
- `projetos_codigo`: **parcial_avancado** (~65%)
- `voz`: **parcial** (~35%)
- `imagem`: **parcial** (~30%)
- `automacao`: **parcial** (~45%)
- `auto_pensamento`: **visual_simulado** (~25%)
- `seguranca_core_sandbox`: **parcial_avancado** (~60%)
- `modeon`: **parcial** (~35%)
- `integracoes_apps`: **parcial** (~30%)
- `multiplataforma`: **implementado_base** (~70%)
- `plataformas_comercio_social`: **parcial** (~45%)
- `autonomia_configuravel`: **implementado_base** (~65%)

## Tarefas antigas
O documento antigo tinha pelo menos **75 tarefas numeradas únicas**. Muitas eram de segurança/governança/auto-evolução. No Caos atual, elas foram parcialmente agrupadas em módulos, mas nem todas estão finalizadas.

Estimativa: das tarefas antigas numeradas, cerca de **35-45%** viraram base funcional ou estrutura no Caos; **55-65%** ainda precisam ser implementadas ou endurecidas para produção.

## Principais pendências vindas do antigo
- onboarding e login Google real
- personalização completa da IA
- voz avançada com TTS/STT real e vozes salvas
- imagem com modelo real, não apenas SVG/local placeholder
- sandbox Docker forte e política por ferramenta
- rollback real e versionamento de agente
- logs imutáveis/append-only robustos
- testes de robustez, degradação e anomalia
- observabilidade completa
- auto-evolução offline real
- pipeline de patch real com diff, testes, aprovação e rollback
- integração MemPalace com embeddings reais/GraphRAG avançado
- ModeON completo com bloqueio real e detecção de distração
- integrações reais OAuth/API para plataformas externas
- execução real de plugins/habilidades em ambiente isolado
- deploy/empacotamento desktop/mobile/TV
