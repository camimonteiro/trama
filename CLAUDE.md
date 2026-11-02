<!-- [Claude-only] Este arquivo só é lido pelo Claude Code. A fonte de verdade para qualquer agente é o AGENTS.md. -->
@AGENTS.md

## Específico do Claude Code [Claude-only]
- Skills do projeto ficam em `.claude/skills/<name>/SKILL.md` (formato aberto Agent Skills). Use-as quando a tarefa bater com a descrição delas.
- Antes de pedir review humana de um PR, rode `/code-review` no diff.
- Permissões compartilhadas ficam em `.claude/settings.json`; preferências pessoais vão em `.claude/settings.local.json` (não versionado).
