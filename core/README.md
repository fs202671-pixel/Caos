# core

Camada fixa do Caos.

Responsável por segurança, permissões, integridade e regras que o agente não pode alterar em runtime.

## Responsabilidades

- Classificar risco de ações.
- Validar permissões.
- Bloquear intenção proibida.
- Proteger arquivos críticos.
- Definir limites máximos do sistema.

## Regra principal

O agente pode sugerir mudanças, mas não pode modificar o core diretamente.
