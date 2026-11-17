# ADR-0013 — Bypass de admin só em emergências

- **Status:** aceita
- **Data:** 2026-11-03
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio
- **Origem:** [weekly de 2026-11-03](../rituals/2026-11-03-weekly.md); complementa a [ADR-0008](ADR-0008-admin-merge-bypass.md)

## Contexto
A [ADR-0008](ADR-0008-admin-merge-bypass.md) liberou o merge de PR sem aprovação para admins, porque uma ausência travaria o fluxo. Com o Lucas no repositório como revisor, essa justificativa enfraquece.

## Decisão
- A configuração do ruleset da [ADR-0008](ADR-0008-admin-merge-bypass.md) **não muda**.
- O uso do bypass fica restrito a **emergências**. O padrão volta a ser: o Lucas revisa (localmente quando necessário, ver [ADR-0014](ADR-0014-pr-review-local-testing.md)), aprova e faz o **squash and merge**.
- Agentes continuam sem usar o bypass por conta própria.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| **Manter o bypass, mas só para emergências (escolhida)** | Review vira a regra; ainda dá para destravar | Depende de disciplina, não de regra técnica |
| Remover o bypass do ruleset | Garante review sempre | Uma ausência pode travar uma correção urgente |
| Manter o uso livre | Mais rápido | Review deixa de ser o padrão |

## Embasamento
- **Fato (decisão do time, weekly de 2026-11-03):** a Camille disse que o bypass ficará restrito a emergências agora que o time tem outra pessoa. O Lucas vai revisar e aprovar os PRs.
- **Em aberto:** o que conta como "emergência" não foi definido. Sugestão: site fora do ar ou correção que bloqueia o trabalho, com aviso na thread do Slack ([ADR-0012](ADR-0012-async-communication-slack-threads.md)).

## Consequências
- PRs da Camille passam a esperar o review do Lucas, e vice-versa.
- Se o bypass for usado, vale explicar o motivo no PR.
