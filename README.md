# Trama

> Nome temporário — ver [DDR-0001](management/decisions/DDR-0001-temporary-name.md) e [OQ-003](management/open-questions.md).

Ferramenta de AI para designers que conecta a criação de **craft** e de **interfaces** a **dados, métricas e embasamento de UX e design**.

Projeto final do curso **Salto** (Aprender Design). Contexto, prazos e requisitos do curso estão em aberto: [OQ-001](management/open-questions.md).

## Time
| Pessoa | Papel | GitHub |
|---|---|---|
| Camille Monteiro | Product designer | _a confirmar_ |
| Lucas Sampaio | Product designer | [`sampaio-lucas`](https://github.com/sampaio-lucas) |
| Danilo Campos | Mentor | _pendente_ ([OQ-002](management/open-questions.md)) |

## Links
- **Hub do projeto (GitHub Pages):** `https://<usuario>.github.io/trama/`
- **Deck de onboarding:** `/trama/decks/onboarding/`
- **Produto:** `/trama/app/`

## Mapa do repositório
| Pasta | Para quê |
|---|---|
| `management/` | Gestão: visão, roadmap, decisões (ADR/DDR), questões abertas, pesquisa, análises, rituais |
| `design/` | Identidade, tokens e assets de design |
| `ai/` | Prompts, fontes de heurísticas/dados de UX e evals — **agnóstico de provedor** |
| `app/` | O produto (Vite + React + TypeScript) |
| `site/` | Hub publicado no GitHub Pages, decks e artefatos |
| `.github/` | Workflows, templates de issue/PR, CODEOWNERS |
| `.claude/` | **[Claude-only]** configuração e skills do Claude Code |

## Trabalhando com AI
Qualquer agente de AI deve começar por [`AGENTS.md`](AGENTS.md). O que é exclusivo do Claude Code está marcado como **[Claude-only]**.

## Como contribuir
Veja [`CONTRIBUTING.md`](CONTRIBUTING.md): issue → branch → PR → review → merge → deploy automático.

## Rodando localmente
```bash
# produto
cd app && npm install && npm run dev
# hub e decks (qualquer servidor estático)
npm run site
```
