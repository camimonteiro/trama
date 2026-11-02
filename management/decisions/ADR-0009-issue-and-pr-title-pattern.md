# ADR-0009 — Padrão de título de issues e PRs

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro
- **Origem:** criação dos cards de discovery (#4 a #21) e ajuste da #1

## Contexto
A [ADR-0005](ADR-0005-language-policy.md) pedia títulos de PR em inglês e não dizia nada sobre títulos de issue. Ao criar os cards do discovery, o time preferiu ler o board em português, mas sem perder o tipo de trabalho visível no título.

## Decisão
Issues e PRs usam o mesmo formato de título: **`<tipo>: <Título em português>`**.

- **Tipo**, em inglês e minúsculas:
  - Issues: a label padrão do card (`task`, `research`, `decision`, `bug`). A mesma label também é aplicada à issue.
  - PRs: o tipo do Conventional Commits (`feat`, `fix`, `docs`, `design`, `chore`, `research`), o mesmo da branch.
- **Título**, em português, começando com letra maiúscula e com verbo no infinitivo quando for ação.

Exemplos:
- Issue: `research: Benchmark de ferramentas de AI para designers`
- Issue: `decision: Definir o formato da ferramenta (OQ-010)`
- PR: `feat: Adicionar upload de tela`
- PR: `docs: Registrar padrão de título de issues e PRs (ADR-0009)`

Esta ADR substitui a parte da ADR-0005 sobre títulos de PR. O resto da ADR-0005 continua valendo: commits, branches, código e arquivos em inglês.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| Títulos todos em inglês (ADR-0005) | Histórico da `main` todo em inglês | Board e PRs mais difíceis de ler para o time |
| Título em português sem prefixo | Leitura mais limpa | O tipo some do título, só aparece na label |
| **`<tipo>: <Título em português>`** | Tipo visível e leitura em português; mesmo formato para issues e PRs | O histórico da `main` mistura idiomas (ver consequências) |

## Embasamento
- Pedido do time ao revisar os cards do discovery (decisão de preferência, não de pesquisa).
- Conventional Commits: https://www.conventionalcommits.org/pt-br/v1.0.0/
- Templates de issue com título pré-preenchido (`title:`): https://docs.github.com/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository

## Consequências
- Com squash merge ([ADR-0004](ADR-0004-git-workflow.md)), o GitHub usa o título do PR como mensagem do commit na `main`. Por isso **os commits da `main` passam a ter descrição em português** (`feat: Adicionar upload de tela (#12)`); os commits feitos dentro das branches continuam em inglês.
- Os templates de issue trazem o prefixo pré-preenchido; o template de PR, a skill `open-pr`, o `AGENTS.md`, o `CONTRIBUTING.md` e o deck de onboarding foram atualizados.
- Issues e PRs antigos não são renomeados, exceto a #1, que foi ajustada junto com os cards do discovery.
