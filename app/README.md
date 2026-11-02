# app — produto Trama

Vite + React + TypeScript ([ADR-0001](../management/decisions/ADR-0001-product-stack.md)). Publicado em `/trama/app/`.

> **Protótipo web.** O formato final da ferramenta ainda não foi decidido ([OQ-010](../management/open-questions.md)).

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # build de produção (usado pelo GitHub Actions)
```

- Tokens de design: importados de `../design/tokens/tokens.css` em `src/index.css`.
- AI: qualquer chamada de modelo passa por `src/ai/` (interface `AIProvider`). Hoje o provedor ativo é um mock.
