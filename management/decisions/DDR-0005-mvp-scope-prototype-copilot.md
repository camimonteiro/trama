# DDR-0005 — Escopo do MVP: copiloto de design focado em protótipos

- **Status:** aceita
- **Data:** 2026-11-24
- **Pessoas envolvidas:** Camille Monteiro, Lucas Sampaio
- **Origem:** [weekly de 2026-11-24](../rituals/2026-11-24-weekly.md); relacionada à [OQ-010](../open-questions.md)

## Contexto
A ideia do Trama é conectar craft a dados, métricas e embasamento de UX ([brief](../vision/brief.md)). Sem limite de escopo, o MVP poderia crescer para geração de código de produção, handoff para devs e gestão de projetos, o que não cabe no prazo da dupla ([ADR-0010](ADR-0010-project-schedule.md)).

## Decisão
O MVP é um **copiloto de design**: traz dados, insights e embasamento crítico, e entrega **protótipos com histórico de versões**.
- **Dentro do escopo:**
  - protótipos, com fidelidade em etapas: wireframes de média fidelidade com componentes genéricos primeiro, design systems depois;
  - versionamento dos protótipos, para rastrear a evolução com base em dados e personas.
- **Fora do escopo (adiado):** código de produção, contratos de handoff e recursos de gestão de projetos.

## Alternativas consideradas
| Opção | Prós | Contras |
|---|---|---|
| **Protótipos + versionamento (escolhida)** | Cabe no prazo; foca no diferencial (embasamento) | Não mostra o caminho até produção |
| Protótipos + código de produção e handoff | Ciclo completo | Escopo grande; compete com ferramentas de código |
| Incluir gestão de projetos | Atende PMs | Desvia do foco em craft |

## Embasamento
- **Fato (decisão do time, weekly de 2026-11-24):** escopo limitado a protótipos e histórico de versões; foco em craft e colaboração.
- **Direção de interface (hipótese, a validar no conceito):** o repositório é a base de inteligência, e por cima dele fica um sandbox visual com:
  - protótipo em um dispositivo no centro;
  - painel de chat, com envio de prints;
  - painel de outputs e insights;
  - barra inferior de inspeção (métricas e arquitetura);
  - menu de versões e changelog.

## Consequências
- O conceito e o modelo para o mentor (~14/12) partem deste escopo.
- A direção de sandbox web alimenta a [OQ-010](../open-questions.md), que continua aberta até a fase Concept.
- Código de produção e handoff podem voltar depois do MVP, num novo DDR.
