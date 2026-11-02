# AI do produto (agnóstico de provedor)

Tudo o que o produto usa de AI, sem acoplar a um provedor específico.

- `prompts/` — prompts versionados (um arquivo por tarefa, em inglês para o modelo; comentários de contexto em PT).
- `sources/` — fontes de embasamento (heurísticas, guidelines, referências de UX/design) com link e licença de uso.
- `evals/` — casos de teste para avaliar respostas da ferramenta (entrada → critério de qualidade).

No código, o acesso a modelos passa pela interface `AIProvider` em `app/src/ai/`. Provedor e backend: [OQ-005](../management/open-questions.md), [OQ-006](../management/open-questions.md).
