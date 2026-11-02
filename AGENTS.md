# AGENTS.md — instruções para qualquer agente de AI

Fonte única de instruções para agentes (Claude Code, Codex, Cursor, Gemini CLI etc.). Formato aberto: https://agents.md.
Itens exclusivos de uma ferramenta são marcados, por exemplo **[Claude-only]**.

## Projeto
Trama (nome temporário): ferramenta de AI para designers que conecta craft e criação de interfaces a dados, métricas e embasamento de UX/design. Projeto final do curso Salto (Aprender Design). Time: Camille Monteiro e Lucas Sampaio (product designers); mentor: Danilo Campos.

## Regras de idioma (ADR-0005)
- **Português:** conteúdo de documentação (`management/`, `README`, decks, hub) e **descrições** de PR e issues.
- **Inglês:** código, nomes de pastas e arquivos, branches, mensagens de commit, títulos de PR, identificadores, comentários de código, configuração.

## Mapa do repositório
- `management/` — visão, roadmap, `open-questions.md`, `decisions/` (ADR/DDR), research, analysis, rituals, glossary.
- `design/` — `identity/` (referências), `tokens/tokens.css` (fonte de tokens para hub e decks).
- `ai/` — prompts, fontes e evals do produto. Nunca acoplar a um provedor específico.
- `app/` — produto em Vite + React + TypeScript. Chamadas de modelo **só** via `app/src/ai/` (interface `AIProvider`). Nunca colocar chave de API no front-end.
- `site/` — GitHub Pages: `index.html` (hub), `artifacts.json`, `decks/<name>/`.

## Esteira (ADR-0004)
1. Toda tarefa nasce como issue no GitHub Projects.
2. Branch a partir da `main`: `type/short-description` (`feat`, `fix`, `docs`, `design`, `chore`, `research`).
3. Commits em Conventional Commits, em inglês: `feat: add screen upload`.
4. PR: título em inglês, descrição em português usando o template. Precisa de 1 aprovação humana.
5. Antes do review humano, o agente revisa o diff com o checklist do template de PR.
6. Squash merge. O deploy para o Pages é automático.
7. **Nunca** faça push direto na `main`, force-push em branch compartilhada nem merge sem aprovação.

## Decisões e questões abertas
- Questão sem resposta → adicionar linha em `management/open-questions.md` (`OQ-xxx`, status `open`).
- Questão respondida → criar `management/decisions/ADR-xxxx-slug.md` (técnica) ou `DDR-xxxx-slug.md` (design) a partir de `_template.md`, marcar a OQ como `decided` e linkar a decisão.
- Não invente fatos, datas ou requisitos do curso. Use o marcador `[A DEFINIR]` e abra uma OQ.

## Publicar artefatos
- Novo deck: `site/decks/<name>/index.html`, usando os tokens de `/assets/tokens.css`.
- Registrar todo artefato em `site/artifacts.json` para aparecer no hub.

## Skills
Procedimentos reutilizáveis ficam em `.claude/skills/<name>/SKILL.md` (formato aberto Agent Skills, https://agentskills.io). Agentes que não carregam esse caminho podem ler o arquivo como instruções em texto.
- `record-decision` — registrar ADR/DDR e fechar a OQ.
- `open-pr` — branch, commits e PR na convenção.
- `publish-artifact` — publicar deck/artefato e registrar no hub.
- `synthesize-research` — notas de pesquisa → insights.

## Comandos
- Produto: `cd app && npm install && npm run dev | npm run build`
- Site local: `npm run site`
