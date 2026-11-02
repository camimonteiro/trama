# ADR-0008 — Admin pode fazer merge de PR sem aprovação

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro
- **Origem:** pedido da Camille após configurar a proteção da `main` ([ADR-0004](ADR-0004-git-workflow.md))

## Contexto
O time tem duas pessoas. Com 1 aprovação obrigatória para todos, qualquer ausência trava o merge, inclusive de mudanças simples de documentação.

## Decisão
No ruleset `protect-main`, o papel **Repository admin** entra na lista de bypass no modo **"For pull requests only"**:
- Admins podem fazer o merge de um PR **sem aprovação**.
- **Push direto** na `main` continua bloqueado para todo mundo, inclusive admins.
- Colaboradores com papel de escrita continuam precisando de **1 aprovação**.
- Agentes de AI nunca usam o bypass por conta própria.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| Bypass de admin só para PRs | Não trava; mantém o fluxo por PR | Admin pode pular review |
| Bypass "Always" | Mais flexível | Permite push direto na main |
| Remover a aprovação obrigatória | Simples | Ninguém precisaria de review |

## Embasamento
- Bypass em rulesets: https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#granting-bypass-permissions-for-your-branch-or-tag-ruleset
- Configuração conferida pela API em 2026-11-02: `bypass_actors = [RepositoryRole 5 (admin), bypass_mode: pull_request]`.

## Consequências
- O GitHub não diferencia autoria: a exceção vale para qualquer PR em que a admin fizer o merge.
- O review continua sendo o padrão. O bypass é para destravar, não para substituir.
