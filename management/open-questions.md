# Questões abertas

Tudo o que ainda não foi decidido fica aqui. **Quando uma questão é respondida, ela vira uma decisão** ([ADR/DDR](decisions/README.md)): crie o registro a partir do [template](decisions/_template.md), mude o status para `decided` e linke a decisão.

Status: `open` · `decided` · `dropped`

| ID | Questão | Contexto | Responsável | Status | Decisão |
|---|---|---|---|---|---|
| OQ-001 | Contexto, prazos, marcos e requisitos de entrega do curso Salto | Orientações do curso resumidas em [salto-guidelines](vision/salto-guidelines.md); entrega final em 2027-04-24. O que o PDF não cobre foi para a OQ-011. | Camille | decided | [ADR-0010](decisions/ADR-0010-project-schedule.md) |
| OQ-002 | Usuário do GitHub do Danilo Campos | Necessário para convidá-lo como colaborador/revisor. | Camille | open | — |
| OQ-003 | Nome definitivo do produto | "Trama" é temporário. Verificar marca (INPI), domínio (registro.br) e conflito com ferramentas existentes. Renomear o repo muda a URL do Pages. | Time | open | — |
| OQ-004 | Licença definitiva do repositório | Hoje sem licença (todos os direitos reservados). | Time | open | — |
| OQ-005 | Backend/serverless para chamar modelos de AI sem expor chaves | O Pages é estático. Opções a avaliar: Cloudflare Workers, Vercel Functions, Supabase Edge Functions. | Time + Danilo | open | — |
| OQ-006 | Provedor(es) de modelo de AI usados no produto | A interface `AIProvider` permite trocar; falta escolher o primeiro e o modelo de custos. | Time | open | — |
| OQ-007 | Quais agentes o time usa (o Lucas usa Claude Code? em qual plano?) e se esses agentes leem `.claude/skills/` e `AGENTS.md` sem ajuste | Afeta o deck e a configuração de skills. | Camille + Lucas | decided | [ADR-0011](decisions/ADR-0011-claude-primary-agent-model-agnostic.md) |
| OQ-008 | Identidade visual definitiva | A atual é provisória ([DDR-0002](decisions/DDR-0002-provisional-visual-identity.md)). | Time | open | — |
| OQ-009 | Usuário do GitHub da Camille e URL final do Pages | Confirmado no `gh auth login`: `camimonteiro` → https://camimonteiro.github.io/trama/ | Camille | decided | [ADR-0007](decisions/ADR-0007-public-repo-no-license.md) |
| OQ-010 | Formato da ferramenta: web responsiva/PWA, app mobile nativo, plugin do Figma, extensão de navegador ou combinação | Ainda não definido. Enquanto isso, `app/` é só protótipo web ([ADR-0001](decisions/ADR-0001-product-stack.md)). Discussão: [issue #1](https://github.com/camimonteiro/trama/issues/1). | Time | open | — |
| OQ-011 | Formato, critérios de avaliação e forma de apresentação da entrega final (2027-04-24); existem entregas intermediárias obrigatórias? | O PDF de orientações não informa. Pode mudar o Marco 4 e o cronograma ([ADR-0010](decisions/ADR-0010-project-schedule.md)). | Camille | open | — |
| OQ-012 | Como outros agentes e modelos (Codex, Cursor, Gemini CLI etc.) leem `AGENTS.md` e as skills, e qual a melhor estrutura de pastas para as skills funcionarem em todos? | Resto da OQ-007, que definiu o Claude como agente principal ([ADR-0011](decisions/ADR-0011-claude-primary-agent-model-agnostic.md)). Necessário para testar outros modelos. | Camille + Lucas | open | — |
