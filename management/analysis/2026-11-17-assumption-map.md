# Mapa de suposições e hipóteses iniciais

- **Card:** [#6](https://github.com/camimonteiro/trama/issues/6) · Fase 0, Enquadrar
- **Pessoas:** Camille Monteiro e Lucas Sampaio (rascunho preparado com apoio de agente de AI)
- **Status:** **rascunho, aberto à contribuição do Lucas** (PR [#32](https://github.com/camimonteiro/trama/pull/32)).
  - **2026-11-17:** apresentado na [weekly](../rituals/2026-11-17-weekly.md); a priorização ficou para depois do contexto e do desk research.
  - **2026-11-24:** evidência atualizada com o [desk research](2026-11-17-desk-research-data-informed-design.md) (#8). As formas de teste foram ajustadas ao [DDR-0004](../decisions/DDR-0004-lean-discovery-desk-research-prototyping.md), que trocou entrevistas por protótipos e testes de conceito.
  - As classificações continuam sendo proposta. As hipóteses de trabalho estão no [brief](../vision/brief.md).

## Objetivo
Deixar explícito o que acreditamos sobre a ideia: quem tem a dor, qual dor, por que AI e por que dados/embasamento. Depois, separar o que é mais arriscado e tem menos evidência, para orientar o [plano de pesquisa do discovery](../research/2026-11-discovery/plan.md).

## Método
- **Mapeamento de suposições** em três categorias:
  - **desejabilidade:** as pessoas querem isso?
  - **viabilidade:** faz sentido como produto ou negócio?
  - **factibilidade:** conseguimos construir?

  É a mesma divisão de *Testing Business Ideas* (David J. Bland e Alex Osterwalder, 2019).
- Cada suposição recebe duas notas:
  - **Risco**: quanto o projeto sofre se ela estiver errada (alto, médio, baixo).
  - **Evidência**: o quanto já sabemos (nenhuma, fraca, moderada, forte). Fonte secundária sozinha chega no máximo a *moderada*: ela não valida a suposição, só aumenta ou reduz a confiança.
- O que tiver **risco alto e evidência nenhuma ou fraca** é prioridade para teste.
- **De onde saíram as suposições:**
  - a ideia no [brief](../vision/brief.md);
  - as perguntas e os stickies das páginas "Strategy" e "Design Plan" do board do FigJam ([link](https://www.figma.com/board/H3yLVSmrjKlMDxO1DOYMgW/Projeto));
  - as motivações da dupla na seção "Team" do board;
  - as questões abertas.
- **Evidência:** códigos F1–F11 são as fontes do [desk research](2026-11-17-desk-research-data-informed-design.md#fontes).

## Suposições

### Desejabilidade: quem tem a dor e qual dor
| ID | Suposição | Fonte | Risco | Evidência (24/11) | Como testar |
|---|---|---|---|---|---|
| S-01 | Product designers têm dificuldade de embasar decisões de interface com dados, métricas, pesquisa e heurísticas. | Ideia do brief; motivações da dupla (seção Team) | alto | **moderada**: 63% citam falta de tempo como maior desafio para pesquisar (F3); 18% não sabem se as mudanças de design foram melhorias (F1); analytics feitos para marketing, não para UX (F2) | Teste de conceito (#20) |
| S-02 | A dor mais forte é **defender e negociar** decisões com stakeholders, mais do que descobrir o que fazer. | Seção Team: "negociar e influenciar melhor os projetos" | alto | **nenhuma**: nenhuma fonte trata disso | Teste de conceito (#20): usar uma decisão real que já foi contestada |
| S-03 | Existe um público definível de designers com essa dor: por senioridade, tipo de empresa ou acesso a dados. | Board "Strategy" (Público); stickies "Usuários" e "Tamanho do público (Brasil x mundo)" | alto | **fraca**: no Brasil, os mais engajados com AI são designers de produto plenos e seniores, em empresas de tecnologia (F11) | Recrutamento dos testes de conceito (#20) |
| S-04 | Designers querem o embasamento **dentro do fluxo de craft**, sem ir para outra ferramenta. | Ideia ("conectar craft e dados"); [OQ-010](../open-questions.md) | médio | **nenhuma** | Teste de conceito do sandbox (#20, [DDR-0005](../decisions/DDR-0005-mvp-scope-prototype-copilot.md)) |

### Desejabilidade: por que AI
| ID | Suposição | Fonte | Risco | Evidência (24/11) | Como testar |
|---|---|---|---|---|---|
| S-05 | Designers confiam numa recomendação gerada por AI o bastante para usá-la numa decisão, desde que ela mostre as fontes. | Ideia (ferramenta de AI) | alto | **fraca**, e o risco aumentou. A confiança hoje é baixa: só 32% dizem que podem confiar na saída da AI (F4). Mostrar a origem é necessidade apontada em F6 e F7. Ainda não sabemos se mostrar a fonte *resolve* a confiança. | Teste de conceito (#20): comparar a recomendação com e sem a fonte |
| S-06 | A AI reduz o esforço de juntar dados e pesquisa a ponto de mudar o hábito de quem hoje não embasa decisões. | Ideia; board "Strategy" (Entrega de valor: "Melhora a experiência?") | alto | **fraca**: o esforço é a barreira principal (F3, 63%); 78% sentem ganho de eficiência com AI (F4). Não há evidência de mudança de hábito. | Teste de conceito (#20) |

### Viabilidade: valor e diferenciação
| ID | Suposição | Fonte | Risco | Evidência (24/11) | Como testar |
|---|---|---|---|---|---|
| S-07 | Há espaço para diferenciação frente às ferramentas de AI para designers que já existem. | Board "Strategy" (Entrega de valor: "estratégia de diferenciação"); "Concorrentes" | alto | **fraca**: nenhuma fonte descreve uma ferramenta que ligue a decisão de design ao embasamento (implicação do #8); a análise de concorrentes está no #9 | Benchmark (#9) |
| S-08 | "Experiência" e "dados proprietários" são diferenciais defensáveis. | Board "Design Plan" (Proposta de valor) | médio | **nenhuma** | Benchmark (#9); fase Concept |
| S-09 | Alguém (o designer ou a empresa) perceberia valor suficiente para adotar ou pagar. | Board "Strategy" (Problema de negócio); "Design Plan" (Monetização) | médio | **fraca**, com alerta: 60% usam AI em contas pessoais e só 7% estão em empresas com integração avançada (F11). Isso sugere uma adoção que começa pelo designer, não pela empresa. | Fase Concept |

### Factibilidade: por que dados e como construir
| ID | Suposição | Fonte | Risco | Evidência (24/11) | Como testar |
|---|---|---|---|---|---|
| S-10 | Existem fontes públicas e confiáveis (heurísticas, pesquisas, benchmarks) suficientes para a AI embasar recomendações. | Board "Strategy" (Insumos); issue [#10](https://github.com/camimonteiro/trama/issues/10) | alto | **moderada**, com limite: há diretrizes pesquisadas, mas só uma parte pode ser automatizada com segurança. A Baymard automatiza 154 de 700+ diretrizes, as que passam de 95% de acerto (F8). | Mapeamento de fontes (#10) |
| S-11 | Dá para usar dados e métricas do produto do próprio usuário (analytics, pesquisas) com integração e privacidade viáveis. | Ideia ("dados, métricas") | alto | **fraca**, e o risco aumentou: 17% dos designers citam compliance e LGPD como preocupação, e o uso de AI em contas pessoais com dados sensíveis quebra a governança (F11) | Teste de conceito (#20): quais dados o designer tem; spike técnico |
| S-12 | Um modelo de AI de mercado, com contexto e fontes (sem treinamento próprio), entrega embasamento de qualidade suficiente. | Board "Strategy" (Insumos: "treinamento de modelos"); [ADR-0003](../decisions/ADR-0003-ai-agnostic-strategy.md) | alto | **fraca e contrária**: ferramentas de avaliação por AI acertam de 20% a 70% (F8); a precisão "plummets" quando o modelo julga qualidade (F8); a utilidade cai ao longo das iterações (F9). Detectar padrões funciona melhor (F8, F9). | Evals em `ai/evals/` comparando com a avaliação de especialistas |
| S-13 | Dois designers com apoio de AI constroem um MVP funcional no prazo, incluindo o backend para as chaves. | [ADR-0010](../decisions/ADR-0010-project-schedule.md); [OQ-005](../open-questions.md); [OQ-014](../open-questions.md) | médio | fraca. O escopo diminuiu com o [DDR-0005](../decisions/DDR-0005-mvp-scope-prototype-copilot.md) (só protótipos, sem código de produção) | Spike técnico no Marco 2 |
| S-14 | ~~Conseguimos recrutar designers suficientes para os perfis A e B até a semana 4 (07/12).~~ | [Plano de pesquisa](../research/2026-11-discovery/plan.md) | — | **suspensa**: o [DDR-0004](../decisions/DDR-0004-lean-discovery-desk-research-prototyping.md) tirou as entrevistas desta etapa | — |

## Matriz risco × evidência (24/11)
| | Evidência nenhuma | Evidência fraca | Evidência moderada |
|---|---|---|---|
| **Risco alto** | S-02 | S-03, S-05, S-06, S-07, S-11, S-12 | S-01, S-10 |
| **Risco médio** | S-04, S-08 | S-09, S-13 | — |

O que mudou desde 17/11:
- **S-01 e S-10 ganharam evidência.** A dor e a disponibilidade de fontes têm apoio nas fontes secundárias.
- **S-05, S-11 e S-12 ficaram mais arriscadas.** A confiança na AI é baixa, há o risco de LGPD e a precisão dos modelos é baixa quando eles julgam qualidade.
- **S-02 continua sem nenhuma evidência.** É a suposição de alto risco mais "cega" do mapa.

## Hipóteses de trabalho
A proposta de 3 a 5 hipóteses está no [brief](../vision/brief.md#hipóteses). Ela consolida as suposições de alto risco (S-01, S-02, S-03, S-05, S-06, S-10, S-12). A **S-07** (diferenciação) entra quando o benchmark (#9) estiver pronto. O Lucas revisa e complementa no PR [#32](https://github.com/camimonteiro/trama/pull/32) (decisão colegiada, [ADR-0016](../decisions/ADR-0016-mandatory-pr-review-trial.md)).
