# ADR-0014 — Revisão de PR: teste local quando necessário

- **Status:** aceita
- **Data:** 2026-11-03
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio
- **Origem:** [weekly de 2026-11-03](../rituals/2026-11-03-weekly.md)

## Contexto
O GitHub mostra o diff, mas não tem pré-visualização ao vivo nem simuladores de mobile. Para conferir uma mudança visual (hub, decks, app), quem revisa precisa rodar o projeto na própria máquina. O Lucas perguntou se dava para fazer isso pela nuvem.

## Decisão
- Mudanças **visuais** (`site/`, `app/`) são testadas **localmente** por quem revisa quando houver dúvida sobre o resultado (`npm run site` ou `cd app && npm run dev`).
- Mudanças de **documentação** e de código sem impacto visual podem ser revisadas só pelo diff.
- Como o MVP ainda não tem usuários, o time é pragmático: o teste local é uma ferramenta, não uma etapa obrigatória de todo PR.
- PRs pequenos, para facilitar a revisão. A revisão humana continua necessária, também para pegar alucinações dos modelos.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| **Teste local quando necessário (escolhida)** | Leve; adequado a um projeto sem usuários | Algum erro visual pode passar |
| Teste local obrigatório em todo PR | Mais seguro | Lento para PRs de documentação |
| Pré-visualização por PR na nuvem | Sem setup local | Exige configurar um serviço; não avaliado |

## Embasamento
- **Fato (decisão do time, weekly de 2026-11-03):** consenso de usar servidor local quando necessário, mantendo flexibilidade no MVP.
- **Sugestão (não avaliada):** pré-visualização por PR em nuvem (por exemplo, deploy de preview) pode ser retomada se a revisão visual ficar frequente.

## Consequências
- Quem abre um PR visual deve dizer na seção "Como revisar / testar" do template se vale rodar localmente e o que olhar.
- Quando o produto tiver usuários, rever esta decisão.
