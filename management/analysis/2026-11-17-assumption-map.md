# Mapa de suposições e hipóteses iniciais

- **Card:** [#6](https://github.com/camimonteiro/trama/issues/6) · Fase 0, Enquadrar
- **Pessoas:** Camille Monteiro e Lucas Sampaio (rascunho preparado com apoio de agente de AI)
- **Status:** **rascunho para o workshop da [weekly de 2026-11-17](../rituals/2026-11-17-weekly.md).** As classificações abaixo são uma proposta, não uma decisão do time.

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
  - **Evidência**: o quanto já sabemos (nenhuma, fraca, forte).
- O que tiver **risco alto e evidência nenhuma ou fraca** é prioridade para a pesquisa.
- **De onde saíram as suposições** (todas desta proposta):
  - a ideia no [brief](../vision/brief.md);
  - as perguntas e os stickies das páginas "Strategy" e "Design Plan" do board do FigJam ([link](https://www.figma.com/board/H3yLVSmrjKlMDxO1DOYMgW/Projeto));
  - as motivações da dupla na seção "Team" do board;
  - as questões abertas.

  Cada suposição indica a sua fonte. Nenhuma tem evidência externa ainda: o desk research ([#8](https://github.com/camimonteiro/trama/issues/8)) é o primeiro teste.

## Como usar na weekly (≈30 min)
1. **Revisar (10 min).** Ler a tabela, ajustar o texto, cortar o que não faz sentido e incluir o que faltou.
2. **Classificar (10 min).** Concordar ou trocar o risco e a evidência propostos.
3. **Priorizar (10 min).** Escolher as 3 a 5 mais arriscadas e registrar abaixo. Elas viram as hipóteses H-01..H-n do brief e entram no plano exploratório do Lucas (semana 2).

## Suposições (proposta)

### Desejabilidade: quem tem a dor e qual dor
| ID | Suposição | Fonte | Risco | Evidência | Como testar |
|---|---|---|---|---|---|
| S-01 | Product designers têm dificuldade de embasar decisões de interface com dados, métricas, pesquisa e heurísticas. | Ideia do brief; motivações da dupla (seção Team) | alto | fraca (só a experiência do time) | Desk research (#8); entrevistas (#13) |
| S-02 | A dor mais forte é **defender e negociar** decisões com stakeholders, mais do que descobrir o que fazer. | Seção Team: "negociar e influenciar melhor os projetos" | alto | nenhuma | Entrevistas (#13): pedir histórias de decisões contestadas |
| S-03 | Existe um público definível de designers com essa dor: por senioridade, tipo de empresa ou acesso a dados. | Board "Strategy" (Público); stickies "Usuários" e "Tamanho do público (Brasil x mundo)" | alto | nenhuma | Survey (#14); perfis A e B nas entrevistas |
| S-04 | Designers querem o embasamento **dentro do fluxo de craft**, sem ir para outra ferramenta. | Ideia ("conectar craft e dados"); [OQ-010](../open-questions.md) | médio | nenhuma | Entrevistas (#13): mapear o fluxo atual (#17) |

### Desejabilidade: por que AI
| ID | Suposição | Fonte | Risco | Evidência | Como testar |
|---|---|---|---|---|---|
| S-05 | Designers confiam numa recomendação gerada por AI o bastante para usá-la numa decisão, desde que ela mostre as fontes. | Ideia (ferramenta de AI) | alto | nenhuma | Desk research (#8, tema "IA interfaces"); teste de conceito (#20) |
| S-06 | A AI reduz o esforço de juntar dados e pesquisa a ponto de mudar o hábito de quem hoje não embasa decisões. | Ideia; board "Strategy" (Entrega de valor: "Melhora a experiência?") | alto | nenhuma | Entrevistas (#13); teste de conceito (#20) |

### Viabilidade: valor e diferenciação
| ID | Suposição | Fonte | Risco | Evidência | Como testar |
|---|---|---|---|---|---|
| S-07 | Há espaço para diferenciação frente às ferramentas de AI para designers que já existem. | Board "Strategy" (Entrega de valor: "estratégia de diferenciação"); "Concorrentes" | alto | nenhuma | Benchmark (#9) |
| S-08 | "Experiência" e "dados proprietários" são diferenciais defensáveis. | Board "Design Plan" (Proposta de valor) | médio | nenhuma | Benchmark (#9); fase Concept |
| S-09 | Alguém (o designer ou a empresa) perceberia valor suficiente para adotar ou pagar. | Board "Strategy" (Problema de negócio); "Design Plan" (Monetização) | médio | nenhuma | Entrevistas (#13); fase Concept |

### Factibilidade: por que dados e como construir
| ID | Suposição | Fonte | Risco | Evidência | Como testar |
|---|---|---|---|---|---|
| S-10 | Existem fontes públicas e confiáveis (heurísticas, pesquisas, benchmarks) suficientes para a AI embasar recomendações. | Board "Strategy" (Insumos); issue [#10](https://github.com/camimonteiro/trama/issues/10) | alto | fraca | Mapeamento de fontes (#10); desk research (#8) |
| S-11 | Dá para usar dados e métricas do produto do próprio usuário (analytics, pesquisas) com integração e privacidade viáveis. | Ideia ("dados, métricas") | alto | nenhuma | Entrevistas (#13): quais dados o designer acessa; spike técnico |
| S-12 | Um modelo de AI de mercado, com contexto e fontes (sem treinamento próprio), entrega embasamento de qualidade suficiente. | Board "Strategy" (Insumos: "treinamento de modelos"); [ADR-0003](../decisions/ADR-0003-ai-agnostic-strategy.md) | alto | nenhuma | Evals em `ai/evals/`; protótipo |
| S-13 | Dois designers com apoio de AI constroem um MVP funcional no prazo, incluindo o backend para as chaves. | [ADR-0010](../decisions/ADR-0010-project-schedule.md); [OQ-005](../open-questions.md); [OQ-014](../open-questions.md) | médio | fraca | Spike técnico no Marco 2 |
| S-14 | Conseguimos recrutar designers suficientes para os perfis A e B até a semana 4 (07/12). | [Plano de pesquisa](../research/2026-11-discovery/plan.md) | médio | nenhuma | Recrutamento (#12) |

## Matriz risco × evidência (proposta)
| | Evidência nenhuma | Evidência fraca |
|---|---|---|
| **Risco alto** | S-02, S-03, S-05, S-06, S-07, S-11, S-12 | S-01, S-10 |
| **Risco médio** | S-04, S-08, S-09, S-14 | S-13 |

## Top 3–5 mais arriscadas (definir na weekly)
| # | Suposição | Por quê | Primeiro teste |
|---|---|---|---|
| 1 | [A DEFINIR] | | |
| 2 | [A DEFINIR] | | |
| 3 | [A DEFINIR] | | |

Candidatas sugeridas para a discussão: **S-01** (sem ela não existe problema), **S-02** (define qual dor resolver), **S-03** (define o público), **S-05** (por que AI) e **S-07** (diferenciação).

## Próximo passo
Depois da weekly, as suposições priorizadas viram hipóteses H-01..H-n no [brief](../vision/brief.md), no formato "Acreditamos que… Saberemos que é verdade quando…". Todas começam com status *não validada*.
