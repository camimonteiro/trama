# DDR-0003 — Decks em HTML + GSAP, em `site/decks/<name>/`

- **Status:** aceita
- **Data:** 2026-11-02
- **Pessoas envolvidas:** Camille Monteiro
- **Origem:** planejamento inicial

## Decisão
- Decks são páginas HTML próprias, animadas com **GSAP**.
- Todos ficam em **`site/decks/<name>/`**: um deck por pasta, com URL estável e registro em `site/artifacts.json`. O primeiro é `site/decks/onboarding/`.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| HTML + GSAP | Controle total de motion | Mais código próprio |
| Reveal.js + Auto-Animate | Navegação, modo apresentador e PDF prontos | Motion mais padronizado |
| `/deck` e `/decks` separados | — | Ambíguo; o onboarding seria um caso especial |

## Embasamento
- GSAP é 100% gratuito, inclusive os plugins antes pagos, desde 30/04/2025: https://webflow.com/blog/gsap-becomes-free · https://gsap.com/pricing
- Release 3.13 (plugins no pacote público): https://gsap.com/blog/3-13/

## Consequências
Os decks respeitam `prefers-reduced-motion` e funcionam por teclado, clique e toque.
