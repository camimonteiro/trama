# ADR-0003 — Estratégia agnóstica de AI

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro
- **Origem:** pedido da Camille no planejamento

## Contexto
O processo é todo integrado com AI, mas o time não quer depender de uma única ferramenta.

## Decisão
1. **`AGENTS.md`** é a fonte única de instruções para agentes.
2. **`CLAUDE.md`** só importa o `AGENTS.md` (`@AGENTS.md`) e acrescenta o que é exclusivo do Claude Code.
3. Skills no formato aberto **SKILL.md** (Agent Skills), mantidas em `.claude/skills/`.
4. Tudo que é exclusivo de uma ferramenta é marcado como **[Claude-only]** (ou equivalente) e vem acompanhado de uma alternativa genérica.
5. No produto, chamadas de modelo passam pela interface `AIProvider` em `app/src/ai/`.

## Embasamento
- AGENTS.md: https://agents.md
- Memória e imports do Claude Code (`@path`): https://code.claude.com/docs/en/memory
- Especificação Agent Skills: https://agentskills.io/specification
- **Não verificado:** quais ferramentas leem `.claude/skills/` sem configuração extra. Há relatos não oficiais de que versões recentes do Claude Code leem o AGENTS.md diretamente. Ver [OQ-007](../open-questions.md).

## Consequências
- Trocar de agente não exige reescrever as regras do projeto.
- Talvez seja preciso usar symlinks ou configuração para outros agentes acharem as skills.
