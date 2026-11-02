---
name: publish-artifact
description: Publish a deck, document or visual artifact on the project hub (GitHub Pages) and register it in site/artifacts.json. Use when a new deck or artifact should appear on the hub.
---

# Publicar artefato

1. Decks: crie `site/decks/<english-slug>/index.html`. Use `../../assets/tokens.css` para os tokens (cópia de `design/tokens/tokens.css` no build; localmente, rode `npm run sync-tokens`).
2. Outros artefatos (PDF, imagem, HTML): `site/assets/artifacts/<english-slug>.<ext>`. Links externos (Figma etc.) não precisam de arquivo.
3. Adicione uma entrada em `site/artifacts.json`:
   ```json
   { "title": "Título em português", "type": "deck|doc|decision|prototype|link", "date": "YYYY-MM-DD", "href": "decks/<slug>/", "description": "Uma frase em português." }
   ```
4. Abra o hub localmente (`npm run site`) e confira o card.
5. Commit: `docs(site): publish <slug>`.
