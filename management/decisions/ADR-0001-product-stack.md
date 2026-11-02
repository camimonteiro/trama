# ADR-0001 — Stack do produto: Vite + React + TypeScript

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro (com proposta do Claude)
- **Origem:** planejamento inicial

## Contexto
O produto precisa de uma base de software desde o início, mas com custo baixo de manutenção para um time de designers, e publicável no GitHub Pages (estático).

## Decisão
Usar **Vite + React + TypeScript** em `app/`, gerando um build estático publicado em `/app/` no Pages.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| Vite + React + TS | Build estático direto para o Pages; ecossistema amplo de UI | Sem backend próprio (chamadas de AI exigem um serviço à parte) |
| Next.js | Rotas de API, SSR | No Pages só funciona com export estático; deploy completo pediria Vercel |
| Só estrutura de pastas | Adia a escolha | Atrasa a prática da esteira com código real |

## Embasamento
- Vite: https://vite.dev/guide/
- Deploy estático do Vite no GitHub Pages: https://vite.dev/guide/static-deploy#github-pages
- Export estático do Next.js: https://nextjs.org/docs/app/guides/static-exports

## Consequências
- A chave de API de modelos **não pode** ficar no front-end. O backend/serverless é uma questão aberta: [OQ-005](../open-questions.md).
- Pode ser revisto se o produto precisar de SSR ou rotas de API próprias.
