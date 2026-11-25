# ADR-0017 — Novo cronograma: Discovery, Research, Definition e MVP

- **Status:** aceita
- **Data:** 2026-11-24
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio (com apoio de agente de AI)
- **Origem:** [OQ-014](../open-questions.md), [OQ-015](../open-questions.md); [weekly de 2026-11-17](../rituals/2026-11-17-weekly.md) e [weekly de 2026-11-24](../rituals/2026-11-24-weekly.md); issue [#7](https://github.com/camimonteiro/trama/issues/7)
- **Substitui:** [ADR-0010](ADR-0010-project-schedule.md)

## Contexto
O [ADR-0010](ADR-0010-project-schedule.md) dividiu o projeto em Fundação, Descoberta, Conceito, MVP e Entrega final. O board "Design Plan" do Lucas no FigJam propôs outras datas (OQ-014). Na weekly de 24/11, a dupla trocou a pesquisa exploratória com entrevistas por desk research e prototipação rápida ([DDR-0004](DDR-0004-lean-discovery-desk-research-prototyping.md)), limitou o MVP a protótipos ([DDR-0005](DDR-0005-mvp-scope-prototype-copilot.md)) e quis apresentar um modelo inicial ao mentor ainda em dezembro. O Lucas atualizou o board com essas definições.

## Decisão
O board "Design Plan" (FigJam, lido em 2026-11-24) passa a ser o cronograma do projeto. Os marcos ficam assim:

| Marco | Período | Etapas | Mentoria |
|---|---|---|---|
| 0 · Fundação | até 06/11/2026 | Repositório, esteira, hub, deck de onboarding | — |
| 1 · Descoberta (Discovery) | 16/11 → 18/12/2026 | Contexto (23–27/11); Concept design (30/11–04/12); 1ª mentoria e refinamento pós-mentoria (07–18/12) | 1ª, semana de 07/12 |
| Recesso | 21/12/2026 → 01/01/2027 | — | — |
| 2 · Pesquisa (Research) | 04/01 → 29/01/2027 | Preparação da pesquisa (04–08/01); pesquisa conceitual com 6 pessoas (11–22/01); análise (25–29/01) | — |
| 3 · Definição (Definition) | 01/02 → 26/02/2027 | 2ª mentoria e revisão conceitual (01–12/02); desenho da estratégia + MVP (15–26/02) | 2ª, semana de 01/02 |
| 4 · MVP | 01/03 → 19/03/2027 | 3ª mentoria e refinamento do MVP | 3ª, semana de 01/03 |
| 5 · Entrega final | 22/03 → 24/04/2027 | Narrativa e apresentação | — |

As 3 mentorias ficam distribuídas uma por bloco: Discovery, Definition e MVP. Isso responde à OQ-015. O dia exato de cada uma é combinado com o Danilo.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| Manter o ADR-0010 | Já estava nos milestones e no hub | Previa pesquisa exploratória antes do conceito, o que o DDR-0004 descartou; 1ª mentoria só em ~22/12 |
| Board antigo do Lucas (Discovery → Concept → Strategy) | Detalhado por semana | Ainda tinha entrevistas exploratórias e a 1ª mentoria antes de haver conceito |
| **Board atualizado (escolhida)** | Segue o DDR-0004 e o DDR-0005; leva um conceito ao mentor em dezembro; testa o conceito com pessoas usuárias em janeiro | Pouco tempo para o Contexto (uma semana); de 22/03 a 24/04 o board não detalha as etapas |

## Embasamento
- **Fato verificado:**
  - entrega final em 24/04/2027 e 3 mentorias de 1 hora: [orientações do Salto](../vision/salto-guidelines.md);
  - etapas e datas: board "Design Plan" no [FigJam](https://www.figma.com/board/H3yLVSmrjKlMDxO1DOYMgW/Projeto?node-id=47-26), lido em 2026-11-24.
- **Leitura do board (interpretação nossa):**
  - os blocos Research e Definition aparecem com o ano "2026", mas as semanas são de 2027;
  - a numeração das semanas pula a semana 2 (a semana de 30/11 aparece como "3"). Este ADR usa as datas, não os números;
  - o board para em 19/03. O Marco 5 (22/03 → 24/04) vem do ADR-0010 e depende da [OQ-011](../open-questions.md).
- **Planejamento do time (hipótese):** todas as datas, menos a entrega final. Elas podem mudar se o curso divulgar entregas intermediárias.

## Consequências
- O ADR-0010 passa a "substituída por ADR-0017". O [roadmap](../roadmap.md), o hub, o [plano de pesquisa](../research/2026-11-discovery/plan.md) e os milestones do GitHub seguem este ADR.
- A apresentação ao mentor muda de ~14/12 (weekly de 24/11) para a semana de 07/12, como está no board.
- As issues de entrevista exploratória e survey ([#13](https://github.com/camimonteiro/trama/issues/13), [#14](https://github.com/camimonteiro/trama/issues/14)) são encerradas. As entrevistas voltam como pesquisa conceitual, em janeiro.
- O Contexto tem uma semana só. Se público, necessidades e concorrentes não fecharem até 27/11, o Concept design começa com eles em aberto.
- Quando o board mudar de novo, um novo ADR substitui este.
