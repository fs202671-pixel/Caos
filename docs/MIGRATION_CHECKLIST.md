# Caos • Checklist de Migração

## Objetivo

Extrair funcionalidades do Sphere e das versões antigas sem carregar:

- duplicatas
- backups inúteis
- arquivos temporários
- estruturas quebradas
- dependências desnecessárias

---

# Etapa 1 • Auditoria

## Arquivos recebidos

- [x] identificar zips principais
- [x] identificar versões repetidas
- [x] separar histórico evolutivo
- [ ] mapear módulos exclusivos
- [ ] identificar dependências críticas
- [ ] identificar frontend ativo
- [ ] identificar backend funcional

---

# Etapa 2 • Consolidação

## Frontend

- [ ] extrair layout principal
- [ ] extrair orb
- [ ] extrair sidebar
- [ ] extrair sistema de chat
- [ ] extrair navegação mobile
- [ ] consolidar design tokens
- [ ] remover componentes mortos

## Backend

- [ ] mapear APIs
- [ ] mapear runtime
- [ ] mapear automações
- [ ] mapear permissões
- [ ] separar serviços
- [ ] remover lógica quebrada

---

# Etapa 3 • Modularização

## Módulos planejados

- [ ] chat
- [ ] memória
- [ ] automações
- [ ] projetos
- [ ] social
- [ ] voz
- [ ] imagem
- [ ] integrações
- [ ] analytics
- [ ] dev mode

---

# Etapa 4 • Estrutura limpa

- [ ] padronizar pastas
- [ ] padronizar nomes
- [ ] remover duplicatas
- [ ] remover assets repetidos
- [ ] criar documentação técnica
- [ ] criar mapa de dependências

---

# Etapa 5 • Runtime

- [ ] sandbox
- [ ] fila de tarefas
- [ ] logs
- [ ] eventos
- [ ] observabilidade
- [ ] rollback

---

# Etapa 6 • UI Viva

## Desktop

- [ ] dashboard principal
- [ ] overlays
- [ ] memória lateral
- [ ] widgets vivos
- [ ] ações rápidas

## Mobile

- [ ] orb central
- [ ] bottom navigation
- [ ] modo voz
- [ ] atalhos rápidos
- [ ] experiência compacta

---

# Regra central

Nada entra no Caos apenas porque existe no Sphere.

Tudo deve passar por:

```txt
Auditoria → Limpeza → Modularização → Integração
```

---

# Estado atual

Sphere = laboratório histórico
Caos = reconstrução arquitetural

O objetivo é preservar evolução sem preservar desorganização.
