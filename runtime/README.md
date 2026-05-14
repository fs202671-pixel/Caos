# runtime

Camada de execução controlada.

Recebe ações estruturadas do agent, valida com o core, executa ferramentas permitidas e registra tudo.

## Fluxo

1. Receber ação.
2. Classificar risco.
3. Validar permissão.
4. Executar em sandbox quando necessário.
5. Registrar logs.
6. Aplicar ou rejeitar.

## Nunca fazer

- Executar texto bruto como comando.
- Aplicar patch sem validação.
- Permitir alteração direta em produção sem aprovação.
