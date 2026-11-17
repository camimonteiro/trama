# Plano de pesquisa — Discovery (Marco 1)

- **Autoria:** Lucas Sampaio ([issue #7](https://github.com/camimonteiro/trama/issues/7))
- **Fonte:** board "Design Plan" no FigJam ([link](https://www.figma.com/board/H3yLVSmrjKlMDxO1DOYMgW/Projeto?node-id=47-34)), lido em 2026-11-17
- **Registro no repositório:** Camille Monteiro, com apoio de agente de AI
- **Status:** em construção. As seções de Objetivo, Amostra e Hipóteses estão previstas para a semana 2 (23–27/11) e ainda estão vazias no board.

> Este arquivo transcreve o board, sem acrescentar nada. Campo vazio no board aparece aqui como `[A DEFINIR]`. Quando o board mudar, este arquivo precisa ser atualizado.

## Pergunta de pesquisa
Quais perguntas precisamos responder para definir problema e público, e com quais métodos? (issue #7)

## Ordem das atividades (ajuste de escopo)
As issues diziam "#8 depende de #7". No board, a ordem fica assim:

1. **Cold research** (desk research, [#8](https://github.com/camimonteiro/trama/issues/8)) e **mapa de suposições** ([#6](https://github.com/camimonteiro/trama/issues/6)) na semana 1. Eles montam o contexto e as hipóteses.
2. **Plano de pesquisa exploratória** na semana 2, que usa os dois.

A [weekly de 2026-11-03](../../rituals/2026-11-03-weekly.md) combinou que as tarefas do discovery podem ser ajustadas no caminho, por isso este ajuste não precisa de ADR.

## Cronograma do discovery (board)
Período do discovery no board: **16/11 a 18/12/2026**, com a análise depois do recesso.

| Semana | Datas | Fase | O que acontece |
|---|---|---|---|
| 1 | 16–20/11 | Contexto | Público, Necessidades, Concorrentes, Cold Research |
| 2 | 23–27/11 | Plano de pesquisa (exploratória) | Objetivo, Amostra, Hipóteses |
| 3 | 30/11–04/12 | Mentoria + Preparação da pesquisa | 1ª mentoria; research assets |
| 4–5 | 07–18/12 | Pesquisa exploratória | Entrevistas com os perfis A e B |
| 6–7 | 21/12–01/01 | Recesso | — |
| 8 | 04–08/01/2027 | Análise | Principais insights |

> Essas datas divergem do [ADR-0010](../../decisions/ADR-0010-project-schedule.md), adotado na weekly de 03/11. A questão está na [OQ-014](../../open-questions.md).

## Semana 1 — Contexto
| Bloco | Pergunta do board | Conteúdo no board |
|---|---|---|
| Público | Para quem estamos projetando? | "Usuários"; "Tamanho do público (Brasil x mundo)" |
| Necessidades | Que problema estamos resolvendo? | [A DEFINIR] |
| Concorrentes | Que plataformas resolvem esse problema ou semelhante? | [A DEFINIR] (ver o benchmark, [#9](https://github.com/camimonteiro/trama/issues/9)) |
| Cold Research | O que sabemos sobre o tópico? | "IA interfaces"; "Heurísticas de UX e IA"; "Ciclos de pesquisa e uso de dados quali e quanti" |

O Cold Research corresponde ao desk research do [#8](https://github.com/camimonteiro/trama/issues/8): [análise](../../analysis/2026-11-17-desk-research-data-informed-design.md) (PR [#33](https://github.com/camimonteiro/trama/pull/33)).

## Semana 2 — Plano de pesquisa (exploratória)
| Bloco | Pergunta do board | Conteúdo |
|---|---|---|
| Objetivo | O que queremos saber, de forma macro? | [A DEFINIR] |
| Amostra | Com quem vamos falar? | [A DEFINIR] |
| Hipóteses | O que achamos sobre o problema mapeado? | [A DEFINIR]. Vêm do mapa de suposições ([#6](https://github.com/camimonteiro/trama/issues/6)) e da tabela de hipóteses do [brief](../../vision/brief.md). |

## Semana 3 — Mentoria e preparação
**1ª mentoria.** O que queremos com ela, segundo o board:
- entender melhor o problema e as nossas principais hipóteses;
- ajudar no direcionamento da pesquisa;
- ampliar a nossa visão sobre a pesquisa com usuários.

**Research assets** (do que precisamos?):
| Asset | Issue relacionada |
|---|---|
| Metodologia | [A DEFINIR] |
| Roteiro | [#11](https://github.com/camimonteiro/trama/issues/11) |
| Agendas | [#12](https://github.com/camimonteiro/trama/issues/12) (recrutamento) |
| Tags para análise | [A DEFINIR] |

## Semanas 4–5 — Pesquisa exploratória
| Perfil | Quem vamos entrevistar? | Vagas no board |
|---|---|---|
| Perfil A | [A DEFINIR] | 6 stickies ("Usuário 1" a "Usuário 5" e mais um "Usuário 6") |
| Perfil B | [A DEFINIR] | 6 stickies ("Usuário 6" a "Usuário 10" e mais um "Usuário 6") |

O número de entrevistas por perfil é [A DEFINIR]: os rótulos se repetem entre os dois perfis.

Execução: [#13](https://github.com/camimonteiro/trama/issues/13) (entrevistas). A síntese ([#15](https://github.com/camimonteiro/trama/issues/15)) fica em `synthesis.md`, nesta pasta.

## Semana 8 — Análise
"Principais insights: o que encontramos com a pesquisa?" [A DEFINIR]

## Fases seguintes (resumo do board)
Fora do Marco 1. Aparecem aqui para dar contexto, e as datas dependem da [OQ-014](../../open-questions.md).

| Fase | Período no board | Conteúdo |
|---|---|---|
| Concept | 11/01–26/02/2027 | Concept design (proposta de valor: "Experiência", "Dados proprietários"; monetização; jornadas/JTBD; identidade); 2ª mentoria e plano de pesquisa conceitual (25–29/01); preparação com protótipo (01–05/02); pesquisa conceitual com os perfis A e B (08–19/02); análise (22–26/02) |
| Strategy | 01/03–24/04/2027 | Desenho de estratégia, MVP e roadmap (01–05/03: MVP, distribuição, métricas de sucesso, evolução); 3ª mentoria e construção do MVP (a partir de 08/03) |

O jeito de prototipar na fase Concept (Figma ou código) depende da [OQ-013](../../open-questions.md).
