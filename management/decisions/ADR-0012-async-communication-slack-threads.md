# ADR-0012 — Comunicação assíncrona em threads na DM do Slack

- **Status:** aceita
- **Data:** 2026-11-03
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio
- **Origem:** [weekly de 2026-11-03](../rituals/2026-11-03-weekly.md)

## Contexto
O time trabalha de forma assíncrona e só se encontra na weekly. Faltava combinar um canal para conversas rápidas fora do GitHub. O Lucas sugeriu criar canais temáticos no Slack.

## Decisão
A comunicação assíncrona fora do GitHub acontece em **threads na mensagem direta (DM) do Slack** entre a Camille e o Lucas, com uma thread por assunto. O time **não cria canais** novos.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| **Threads na DM (escolhida)** | Não depende de criar canais; assuntos separados por thread | Tudo fica numa conversa só; achar uma thread antiga dá mais trabalho |
| Canais temáticos no Slack | Organização por tema | Restrições do ambiente corporativo para criar canais |

## Embasamento
- **Fato (decisão do time, weekly de 2026-11-03):** a Camille argumentou que, por restrições do ambiente corporativo, o time não deve criar canais novos. O time concordou em usar threads na DM.

## Consequências
- O Slack serve para conversa, não para registro. O que for decidido lá vira ADR/DDR, e o que ficar pendente vira OQ ou pauta da weekly ([rituais](../rituals/README.md)).
- Agentes não leem o Slack por padrão. Para registrar uma decisão, alguém traz o conteúdo (ou o link) para o repositório.
