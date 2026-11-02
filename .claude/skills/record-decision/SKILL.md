---
name: record-decision
description: Record a project decision as an ADR (technical/process) or DDR (design) and close the related open question. Use when the team answers an open question or makes a decision worth keeping.
---

# Registrar decisão

1. Identifique se a decisão é técnica/processo (**ADR**) ou de design (**DDR**).
2. Descubra o próximo número em `management/decisions/` (sequência própria por tipo, 4 dígitos).
3. Copie `management/decisions/_template.md` para `management/decisions/<ADR|DDR>-XXXX-short-english-slug.md`.
4. Preencha **em português**: contexto, decisão, alternativas, embasamento (com links; separe fato verificado de sugestão) e consequências. Não invente fatos. O que faltar vira nova OQ.
5. Adicione a linha na tabela de `management/decisions/README.md`.
6. Em `management/open-questions.md`, mude a OQ de origem para `decided` e linke a decisão.
7. Se a decisão substitui outra, marque a antiga como "substituída por <link>". Nunca apague a antiga.
8. Commit: `docs(decisions): add ADR-XXXX short title`.
