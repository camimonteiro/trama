# ADR-0016 — Review de PR obrigatória, em caráter de teste

- **Status:** aceita (em teste)
- **Data:** 2026-11-24
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio
- **Origem:** [weekly de 2026-11-24](../rituals/2026-11-24-weekly.md); complementa a [ADR-0013](ADR-0013-admin-bypass-emergencies-only.md)

## Contexto
A [ADR-0013](ADR-0013-admin-bypass-emergencies-only.md) restringiu o bypass de admin a emergências, mas a Camille ainda consegue fazer merge sem aprovação ([ADR-0008](ADR-0008-admin-merge-bypass.md)). Os escopos da dupla se cruzam (plano de pesquisa, suposições, desk research), e uma pessoa pode decidir algo sem a outra saber. O Lucas temia que a review obrigatória gerasse backlog de PRs.

## Decisão
- Todo PR passa por **review e aprovação da outra pessoa** antes do merge. Decisões que aparecem num PR são **colegiadas**.
- Para não travar o fluxo:
  - trabalho em andamento fica em **PR em rascunho** e recebe alterações aos poucos;
  - quando um trabalho depende de outro ainda em review, vale usar **branches empilhadas** (um PR sobre a branch do outro).
- É um **teste**. Se a review virar gargalo, a dupla flexibiliza a regra numa weekly e registra um novo ADR.
- O ruleset não muda: o bypass da [ADR-0008](ADR-0008-admin-merge-bypass.md) continua só para emergências ([ADR-0013](ADR-0013-admin-bypass-emergencies-only.md)).

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| **Review obrigatória, em teste, com rascunhos e branches empilhadas (escolhida)** | Alinhamento e aprendizado mútuo; visibilidade entre escopos | Mais espera; exige disciplina |
| Merge livre de documentação, review só para código | Mais rápido | Decisões de discovery passam sem a outra pessoa ver |
| Exigir a regra no ruleset (remover o bypass) | Garantia técnica | Uma ausência trava correções urgentes |

## Embasamento
- **Fato (decisão do time, weekly de 2026-11-24):** review como ponto de alinhamento e aprendizado; testar o fluxo e flexibilizar se travar.
- PRs em rascunho: https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests
- **Em aberto:** o critério de "travar" não foi definido. Sugestão: rever na retro do Marco 1.

## Consequências
- PRs ficam abertos por mais tempo. Vale manter PRs pequenos e indicar a ordem de merge na descrição.
- Com branches empilhadas, depois do squash merge do PR de baixo, o de cima precisa ser rebaseado ou ter a base trocada para a `main`.
