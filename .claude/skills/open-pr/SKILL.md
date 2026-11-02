---
name: open-pr
description: Create a branch, commit with Conventional Commits and open a pull request following the project conventions (title "<type>: <Título em português>", Portuguese description). Use when work is ready for review.
---

# Abrir PR

1. Confirme que não está na `main`. Se estiver, crie a branch: `git switch -c <type>/<short-english-description>` (types: feat, fix, docs, design, chore, research).
2. Revise o diff (`git diff`) e separe em commits pequenos, em inglês, no padrão Conventional Commits.
3. Faça uma revisão do diff com o checklist de `.github/PULL_REQUEST_TEMPLATE.md` e corrija o que encontrar.
4. `git push -u origin HEAD`.
5. Abra o PR com título `<type>: <Título em português>` ([ADR-0009](../../../management/decisions/ADR-0009-issue-and-pr-title-pattern.md)) e **descrição em português** seguindo o template. O título vira o commit da `main` no squash:
   `gh pr create --title "<type>: <Título em português>" --body-file <arquivo>` (ou pela interface do GitHub).
6. Linke a issue (`Closes #N`) e peça review da outra pessoa designer.
7. Nunca faça merge sem aprovação nem push direto na `main`.
