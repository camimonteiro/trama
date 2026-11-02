# ADR-0004 — Fluxo git: branches, commits, PRs e proteção da main

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro
- **Origem:** planejamento inicial

## Decisão
- Trunk-based simples: `main` sempre publicável; trabalho em branches curtas `type/short-description`.
- Commits no padrão Conventional Commits, em inglês.
- PR com template, **1 aprovação** obrigatória, review prévia por um agente de AI.
- **Squash merge**.
- Ruleset na `main`: sem push direto, PR obrigatório e 1 aprovação. Exceção para admins ao fazer merge de PR: [ADR-0008](ADR-0008-admin-merge-bypass.md).

## Embasamento
- Conventional Commits: https://www.conventionalcommits.org/pt-br/v1.0.0/
- GitHub flow: https://docs.github.com/get-started/using-github/github-flow
- Rulesets: https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
- Pro Git (pt-BR): https://git-scm.com/book/pt-br/v2

## Consequências
- O histórico da `main` fica com um commit por PR.
- Com duas pessoas, cada uma depende da outra para aprovar. A combinação de rituais de review fica em [OQ-001](../open-questions.md).
