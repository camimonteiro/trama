# Referências da identidade provisória

> Proposta inicial e ajustável ([DDR-0002](../../management/decisions/DDR-0002-provisional-visual-identity.md), [OQ-008](../../management/open-questions.md)). As leituras abaixo são **interpretações de design**, não análises formais das marcas citadas. Confira nos links.

## Ferramentas olhadas
| Ferramenta | Link | O que levamos como princípio |
|---|---|---|
| Figma | https://www.figma.com | Interface neutra para que o trabalho do designer seja o protagonista; cor usada com propósito |
| Linear | https://linear.app | Densidade de informação com hierarquia tipográfica clara; motion curto e funcional |
| Framer | https://www.framer.com | Motion como parte da narrativa; transições que conectam estados |
| Maze | https://maze.co | Linguagem de pesquisa e dados acessível para designers |
| Dovetail | https://dovetail.com | Pesquisa organizada em evidências e insights rastreáveis |

## Escolhas
- **Cor principal: terracota** (pedido do time). Calor e materialidade, no sentido de craft e argila, contrastando com o azul/roxo comum em ferramentas de tecnologia. Escala 50–900 em `tokens.css`, com contraste medido (WCAG 2.x):
  - `terracotta-500` `#C2603F`: cor de marca, só para gráficos e texto grande (3.90:1 no fundo claro).
  - `terracotta-600` `#A84E31`: texto/links no tema claro (5.18:1); texto branco sobre ela, 5.53:1.
  - `terracotta-400` `#D27654`: acento no tema escuro (5.72:1).
- **Neutros quentes ("sand")** em vez de cinzas frios, para combinar com a terracota.
- **Tipografia** (Google Fonts, gratuitas):
  - *Fraunces* (display, serifada variável): toque editorial e artesanal → https://fonts.google.com/specimen/Fraunces
  - *Inter* (texto e UI) → https://fonts.google.com/specimen/Inter
  - *JetBrains Mono* (código e comandos git) → https://fonts.google.com/specimen/JetBrains+Mono
- **Cores de apoio** (sage, indigo, ochre) só para diferenciar branches nos diagramas.
- **Motion:** easing `ease-out` expressivo (`cubic-bezier(0.22, 1, 0.36, 1)`), 160/320/640 ms, sempre respeitando `prefers-reduced-motion`.

## Referência de acessibilidade
- WCAG 2.2, contraste mínimo 1.4.3: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
