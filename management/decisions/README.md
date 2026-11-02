# Decisões

Registro curto e versionado das decisões do projeto, no formato ADR ([Michael Nygard](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), [adr.github.io](https://adr.github.io)).

- **ADR** — Architecture/technical Decision Record: decisões técnicas e de processo.
- **DDR** — Design Decision Record: adaptação do ADR para decisões de design.

Numeração sequencial e independente por tipo. Arquivos: `ADR-0001-short-slug.md`. Uma decisão nunca é apagada: quando muda, a nova a **substitui** e a antiga recebe o status "substituída por".

Use o [`_template.md`](_template.md). Toda decisão costuma nascer de uma [questão aberta](../open-questions.md).

| ID | Título | Status |
|---|---|---|
| [ADR-0001](ADR-0001-product-stack.md) | Stack do produto: Vite + React + TypeScript | aceita |
| [ADR-0002](ADR-0002-hosting-github-pages.md) | Hospedagem no GitHub Pages via Actions | aceita |
| [ADR-0003](ADR-0003-ai-agnostic-strategy.md) | Estratégia agnóstica de AI | aceita |
| [ADR-0004](ADR-0004-git-workflow.md) | Fluxo git: branches, commits, PRs e proteção da main | aceita |
| [ADR-0005](ADR-0005-language-policy.md) | Política de idioma | aceita (títulos de PR: ver ADR-0009) |
| [ADR-0006](ADR-0006-project-management-github-projects.md) | Gestão no GitHub Projects | aceita |
| [ADR-0007](ADR-0007-public-repo-no-license.md) | Repositório público, sem licença por ora | aceita |
| [ADR-0008](ADR-0008-admin-merge-bypass.md) | Admin pode fazer merge de PR sem aprovação | aceita |
| [ADR-0009](ADR-0009-issue-and-pr-title-pattern.md) | Padrão de título de issues e PRs | aceita |
| [ADR-0010](ADR-0010-project-schedule.md) | Cronograma do projeto e marcos até a entrega de 24/04/2027 | aceita |
| [ADR-0008](ADR-0008-admin-merge-bypass.md) | Admin pode fazer merge de PR sem aprovação | aceita |
| [DDR-0001](DDR-0001-temporary-name.md) | Nome temporário: Trama | aceita |
| [DDR-0002](DDR-0002-provisional-visual-identity.md) | Identidade visual provisória (terracota) | aceita |
| [DDR-0003](DDR-0003-decks-html-gsap.md) | Decks em HTML + GSAP em `site/decks/<name>/` | aceita |
