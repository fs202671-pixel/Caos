# modules

Funcionalidades expansíveis do Caos.

Cada módulo deve ser isolado, ter permissões próprias, logs próprios e integração controlada com o agent e o runtime.

## Módulos planejados

- chat
- code
- projects
- image
- voice
- automation
- modeon
- devmode

## Regra

Módulos não executam ações críticas diretamente. Toda ação passa pelo runtime.
