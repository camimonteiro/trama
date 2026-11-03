# ADR-0011 — Claude como agente principal, projeto agnóstico de modelo

- **Status:** aceita
- **Data:** 2026-11-03
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio
- **Origem:** [OQ-007](../open-questions.md)

## Contexto
A [OQ-007](../open-questions.md) perguntava quais agentes de AI o time usa e se eles leem `AGENTS.md` e `.claude/skills/` sem ajuste. A resposta afeta o deck, a configuração de skills e a forma de escrever instruções no repositório. A [ADR-0003](ADR-0003-ai-agnostic-strategy.md) já definia a estratégia agnóstica, mas sem dizer qual ferramenta é a principal.

## Decisão
O **Claude** é a AI principal do time. Mesmo assim, o projeto continua **o mais agnóstico possível**, para que o time possa testar e comparar o desempenho de diferentes modelos.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| Claude como principal, projeto agnóstico (escolhida) | Um padrão de trabalho para o time; mantém a liberdade de comparar modelos | Exige disciplina para não acoplar instruções e código ao Claude |
| Só Claude, sem preocupação com portabilidade | Pode usar todos os recursos exclusivos do Claude Code sem alternativa | Impede comparar modelos; troca futura custaria caro |
| Nenhum agente principal | Neutralidade total | Sem padrão de trabalho; mais atrito entre as pessoas do time |

## Embasamento
- **Fato (decisão do time):** o Claude é a AI principal, e o time quer testar o desempenho em diferentes modelos.
- **Fato (repositório):** a estrutura da [ADR-0003](ADR-0003-ai-agnostic-strategy.md) já sustenta isso: `AGENTS.md` como fonte única, `CLAUDE.md` só importa o `AGENTS.md`, skills no formato aberto [Agent Skills](https://agentskills.io/specification) e chamadas de modelo do produto via `AIProvider` em `app/src/ai/`.
- **Não respondido nesta decisão:** o plano do Claude usado por cada pessoa e se outros agentes leem `.claude/skills/` sem configuração extra. Isso foi para a [OQ-012](../open-questions.md).

## Consequências
- Instruções, skills e fluxos podem assumir o Claude Code como ferramenta padrão, mas o que for exclusivo dele continua marcado como **[Claude-only]** e com alternativa genérica ([ADR-0003](ADR-0003-ai-agnostic-strategy.md)).
- O código do produto não pode depender de um provedor: toda chamada passa pela interface `AIProvider`. A escolha do(s) provedor(es) do produto continua na [OQ-006](../open-questions.md).
- Comparar modelos vai pedir um método (casos, critérios, registro de resultados); `ai/evals/` é o lugar natural para isso quando o time for testar.
