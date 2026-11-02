# ADR-0010 — Cronograma do projeto e marcos até a entrega de 24/04/2027

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro (com apoio de agente de AI)
- **Origem:** [OQ-001](../open-questions.md), issue [#5](https://github.com/camimonteiro/trama/issues/5)

## Contexto
O roadmap não tinha datas porque faltava o contexto do curso Salto (OQ-001). As orientações iniciais do curso ([resumo](../vision/salto-guidelines.md)) dizem pouco sobre o calendário:
- o prazo de 09/10/2026 para definir dupla, ideia e mentor, já cumprido;
- 3 mentorias de 1 hora, agendadas pela dupla.

A Camille informou a data de entrega final: **24/04/2027**. Não há milestones no GitHub nem datas nos cards.

## Decisão
Dividir as cerca de 25 semanas, de 02/11/2026 a 24/04/2027, em 5 marcos, que viram milestones no GitHub. Os cards no Projects ganham os campos `Start date` e `Target date`.

| Marco | Período | Entrega | Mentoria |
|---|---|---|---|
| 0 · Fundação | até 06/11/2026 | Repositório, esteira, hub, deck de onboarding | — |
| 1 · Descoberta | 03/11 → 22/12/2026 | Problema, público, pesquisa e hipóteses priorizadas | 1ª, ~22/12 |
| Recesso | 23/12/2026 → 04/01/2027 | — | — |
| 2 · Conceito | 05/01 → 12/02/2027 | Formato da ferramenta (OQ-010), proposta de valor, fluxos, protótipo testado | 2ª, ~10/02 |
| 3 · MVP | 15/02 → 26/03/2027 | Primeira versão funcional em `/app/` | — |
| 4 · Entrega final | 29/03 → 24/04/2027 | Refinamento, narrativa, material de apresentação | 3ª, ~09/04 |

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| Marcos em blocos de tempo iguais | Simples | Ignora o recesso; pouco tempo para refinar no fim |
| **Marcos por fase, com folga no fim (escolhida)** | Segue o fluxo descoberta → conceito → MVP; deixa ~4 semanas para fechar | Descoberta apertada (~7 semanas) |
| Esperar o calendário completo do curso | Não presume nada | Trava o discovery, que já está em andamento |

## Embasamento
- **Fato verificado:**
  - prazo de 09/10 e 3 mentorias de 1 hora: PDF do curso;
  - entrega em 24/04/2027: informada pela Camille.
- **Planejamento do time (hipótese):**
  - todas as outras datas;
  - o recesso de fim de ano;
  - as datas sugeridas para as mentorias.

  Elas podem mudar quando o curso divulgar o calendário ou os requisitos da entrega ([OQ-011](../open-questions.md)).

## Consequências
- O [roadmap](../roadmap.md), o hub e os milestones do GitHub passam a ter datas. A fonte da verdade das datas por card é o GitHub Projects.
- Se o curso divulgar entregas intermediárias ou um formato de entrega, revisamos este cronograma num novo ADR que substitui este.
- As mentorias com o Danilo precisam ser agendadas com antecedência (a 1ª até o início de dezembro).
