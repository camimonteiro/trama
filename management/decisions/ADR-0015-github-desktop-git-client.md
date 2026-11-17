# ADR-0015 — GitHub Desktop como cliente Git do time

- **Status:** aceita
- **Data:** 2026-11-03
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio
- **Origem:** [weekly de 2026-11-03](../rituals/2026-11-03-weekly.md)

## Contexto
Clonar o repositório e acompanhar as mudanças pelo terminal é uma barreira para quem não usa Git no dia a dia. O time também usa agentes de AI que operam o Git em linguagem natural.

## Decisão
As pessoas do time usam o **GitHub Desktop** para clonar o repositório, ver o histórico e as alterações e fazer fetch e push. Agentes de AI continuam usando a linha de comando (`git`, `gh`), seguindo a esteira da [ADR-0004](ADR-0004-git-workflow.md).

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| **GitHub Desktop (escolhida)** | Visual; sem SSH ou comandos | Menos recursos que a linha de comando |
| Só terminal | Completo | Curva de aprendizado alta |
| Só via agente de AI | Linguagem natural | Fica difícil conferir o estado local sem uma interface |

## Embasamento
- **Fato (decisão do time, weekly de 2026-11-03):** a Camille mostrou o GitHub Desktop e o time concordou em usá-lo.
- GitHub Desktop: https://docs.github.com/desktop

## Consequências
- O GitHub Desktop não muda as regras: branches, commits e PRs seguem a [ADR-0004](ADR-0004-git-workflow.md) e a [ADR-0009](ADR-0009-issue-and-pr-title-pattern.md).
- O Lucas precisa clonar o repositório pelo GitHub Desktop e vincular a pasta ao agente ([ata](../rituals/2026-11-03-weekly.md)).
