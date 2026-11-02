# ADR-0002 — Hospedagem no GitHub Pages via GitHub Actions

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro
- **Origem:** planejamento inicial

## Contexto
O processo precisa de uma página principal (hub) que também hospede o produto em desenvolvimento, os decks e outros artefatos.

## Decisão
Publicar no **GitHub Pages** por um workflow próprio do Actions (`.github/workflows/pages.yml`) que monta:
- `site/` na raiz (hub, `decks/`, `assets/`);
- `design/tokens/tokens.css` em `/assets/tokens.css`;
- o build de `app/` em `/app/`.

## Embasamento
- Workflows customizados no Pages: https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Disponibilidade do Pages por plano (Free só em repositórios públicos): https://docs.github.com/pages/getting-started-with-github-pages/about-github-pages

## Consequências
- Tudo que é publicado é estático e público.
- Renomear o repo muda a URL do Pages ([OQ-003](../open-questions.md)).
