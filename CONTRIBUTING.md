# Como contribuir

Resumo da esteira. A versão completa e animada está no [deck de onboarding](site/decks/onboarding/).

1. **Issue** — crie (ou pegue) uma issue no GitHub Projects. Coluna: Backlog → In progress.
2. **Branch** — a partir da `main` atualizada:
   ```bash
   git switch main && git pull
   git switch -c feat/short-description
   ```
   Tipos: `feat`, `fix`, `docs`, `design`, `chore`, `research`. Nomes em inglês.
3. **Commits** — pequenos, em inglês, no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/):
   `docs: add research synthesis for interviews round 1`
4. **PR** — título em inglês, descrição em **português** usando o template. Mova a issue para In review.
5. **Review** — o agente de AI revisa primeiro (checklist do template; **[Claude-only]** `/code-review`), depois a outra pessoa designer aprova. Danilo é marcado em decisões estruturais.
6. **Merge** — *squash and merge*. O GitHub Actions publica o hub e o app no Pages.
7. **Decisões** — se o PR decide algo, inclua o ADR/DDR e atualize `management/open-questions.md`.

A `main` é protegida: não aceita push direto e exige 1 aprovação.
