# Roadmap

> Cronograma definido no [ADR-0017](decisions/ADR-0017-revised-project-schedule.md), que substitui o [ADR-0010](decisions/ADR-0010-project-schedule.md). Ele segue o board "Design Plan" no [FigJam](https://www.figma.com/board/H3yLVSmrjKlMDxO1DOYMgW/Projeto?node-id=47-26). Só a entrega final (2027-04-24) é data do curso; as demais são planejamento do time. Datas por card ficam no [GitHub Projects](https://github.com/users/camimonteiro/projects/1) e os marcos são [milestones](https://github.com/camimonteiro/trama/milestones). O andamento é revisado na weekly (segundas, 21h–22h), o único momento síncrono do time ([rituais](rituals/README.md)).

| Marco | O que entrega | Período | Mentoria |
|---|---|---|---|
| 0. Fundação | Repo, esteira, hub, deck de onboarding | até 2026-11-06 | — |
| 1. Descoberta (Discovery) | Contexto (público, necessidades, concorrentes, desk research), concept design (proposta de valor, monetização, jornadas, identidade) e conceito refinado após a mentoria | 2026-11-16 → 2026-12-18 | 1ª (semana de 2026-12-07) |
| Recesso | — | 2026-12-21 → 2027-01-01 | — |
| 2. Pesquisa (Research) | Pesquisa conceitual com 6 pessoas usuárias, a partir de um protótipo, e principais insights | 2027-01-04 → 2027-01-29 | — |
| 3. Definição (Definition) | Conceito revisado; estratégia e MVP (escopo, distribuição, métricas de sucesso, evolução) | 2027-02-01 → 2027-02-26 | 2ª (semana de 2027-02-01) |
| 4. MVP | MVP refinado (protótipos, ver [DDR-0005](decisions/DDR-0005-mvp-scope-prototype-copilot.md)) | 2027-03-01 → 2027-03-19 | 3ª (semana de 2027-03-01) |
| 5. Entrega final | Narrativa e apresentação (formato: [OQ-011](open-questions.md)) | 2027-03-22 → 2027-04-24 | — |

## Critérios de saída
Um marco termina quando todos os critérios dele estão cumpridos. Os mesmos critérios estão na descrição de cada [milestone](https://github.com/camimonteiro/trama/milestones). Quando mudar um, atualize o outro.

### 0. Fundação (concluído)
- Repositório e esteira configurados ([ADR-0004](decisions/ADR-0004-git-workflow.md))
- Hub publicado no GitHub Pages
- Deck de onboarding publicado no hub

### 1. Descoberta
- Público e problema registrados em DDR e no [brief](vision/brief.md) ([#18](https://github.com/camimonteiro/trama/issues/18))
- Conceito inicial documentado em `management/analysis/` ([#16](https://github.com/camimonteiro/trama/issues/16))
- Conceito apresentado ao mentor, com ata ([#21](https://github.com/camimonteiro/trama/issues/21))
- Conceito refinado e hipóteses prontas para a pesquisa conceitual ([#36](https://github.com/camimonteiro/trama/issues/36))

### 2. Pesquisa
- Metodologia, roteiro, screener, consentimento e tags prontos ([#11](https://github.com/camimonteiro/trama/issues/11))
- Protótipo navegável publicado para a pesquisa ([#37](https://github.com/camimonteiro/trama/issues/37))
- Pesquisa conceitual feita com 6 pessoas do público definido, com notas anonimizadas ([#12](https://github.com/camimonteiro/trama/issues/12), [#20](https://github.com/camimonteiro/trama/issues/20))
- Síntese com os principais insights e as hipóteses confirmadas ou refutadas ([#15](https://github.com/camimonteiro/trama/issues/15))

### 3. Definição
- Resultados da pesquisa apresentados ao mentor, com ata ([#38](https://github.com/camimonteiro/trama/issues/38))
- Conceito revisado em `management/analysis/` e hipóteses do brief com status e evidência ([#39](https://github.com/camimonteiro/trama/issues/39))
- Formato da ferramenta decidido ([OQ-010](open-questions.md), [#1](https://github.com/camimonteiro/trama/issues/1))
- Estratégia e MVP definidos: escopo do MVP em DDR, distribuição, métricas de sucesso e evolução ([#19](https://github.com/camimonteiro/trama/issues/19))

### 4. MVP
- Estratégia e MVP apresentados ao mentor, com ata ([#40](https://github.com/camimonteiro/trama/issues/40))
- Ajustes da mentoria aplicados, MVP publicado no hub (`/app/`) e changelog atualizado ([#41](https://github.com/camimonteiro/trama/issues/41))

### 5. Entrega final
- Narrativa e apresentação prontas no formato exigido pelo curso ([A DEFINIR], [OQ-011](open-questions.md))
- Projeto entregue até 2027-04-24

## Etapas por semana
| Semana | Datas | Etapa |
|---|---|---|
| 0 | 16–20/11/2026 | Desk research ([#8](https://github.com/camimonteiro/trama/issues/8), concluída) |
| 1 | 23–27/11 | Contexto: público, necessidades, concorrentes, desk research e hipóteses |
| 2 | 30/11–04/12 | Concept design: proposta de valor, monetização, jornadas/JTBD, identidade |
| 3–4 | 07–18/12 | 1ª mentoria e refinamento pós-mentoria |
| 5–6 | 21/12–01/01/2027 | Recesso |
| 7 | 04–08/01 | Preparação da pesquisa: metodologia, roteiro, agendas, tags de análise, protótipo |
| 8–9 | 11–22/01 | Pesquisa conceitual (meta: 6 pessoas) |
| 10 | 25–29/01 | Análise: principais insights |
| 11–12 | 01–12/02 | 2ª mentoria e revisão conceitual |
| 13–14 | 15–26/02 | Desenho da estratégia + MVP |
| 15–17 | 01–19/03 | 3ª mentoria e refinamento do MVP |
| 18–22 | 22/03–24/04 | Entrega final (fora do board; ver [ADR-0017](decisions/ADR-0017-revised-project-schedule.md)) |

> A numeração das semanas aqui é contínua. No board ela pula a semana 2, então a semana de 30/11 aparece como "3" e as seguintes ficam um número à frente.
