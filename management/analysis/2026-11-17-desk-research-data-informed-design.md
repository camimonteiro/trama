# Desk research: design orientado a dados

- **Card:** [#8](https://github.com/camimonteiro/trama/issues/8) · Fase 1, Entender
- **Responsável:** Camille Monteiro (com apoio de agente de AI para busca e leitura das fontes)
- **Data:** 2026-11-17. Todas as fontes foram acessadas nessa data.
- **Status:** primeira rodada, revista em 2026-11-24 para seguir o [DDR-0004](../decisions/DDR-0004-lean-discovery-desk-research-prototyping.md) (discovery enxuto) e o [DDR-0005](../decisions/DDR-0005-mvp-scope-prototype-copilot.md) (escopo do MVP). Pode ser ampliada depois da consolidação das hipóteses ([#6](https://github.com/camimonteiro/trama/issues/6)).

## Pergunta de pesquisa
Como designers usam (ou deixam de usar) dados, métricas, pesquisa e heurísticas para embasar decisões de interface hoje? Que barreiras aparecem?

## Método e recorte
- Revisão de fontes secundárias públicas, cobrindo os três temas de *cold research* do [plano de pesquisa do discovery](../research/2026-11-discovery/plan.md):
  - (A) ciclos de pesquisa e uso de dados quali e quanti;
  - (B) heurísticas de UX e AI;
  - (C) interfaces de AI e AI no trabalho de design.
- **Fora do recorte:** a análise de concorrentes fica no benchmark ([#9](https://github.com/camimonteiro/trama/issues/9)). Necessidades do público e modelos de distribuição, que o DDR-0004 também inclui no discovery, ficam para outra rodada.
- **Critério de fonte:** artigos da Nielsen Norman Group (NN/g), relatórios anuais de mercado, um artigo acadêmico revisado por pares e uma pesquisa brasileira divulgada pela imprensa. Toda fonte foi aberta e lida. Números aparecem só quando a fonte os publica.
- **Cuidados de leitura:**
  - Maze e Figma vendem ferramentas para o mesmo público. Os relatórios deles são dados de pesquisa publicados por fornecedores, não estudos independentes.
  - A pesquisa da NN/g sobre pesquisa quantitativa é de 2018 e tem viés de amostra declarado pela própria autora.
  - O relatório completo da Figma fica atrás de um formulário. Os números daqui vêm do post oficial que resume o relatório.
  - O que é inferência nossa está marcado como **[hipótese]**.

## Fontes
| # | Fonte | Tipo | Ano | Amostra / base |
|---|---|---|---|---|
| F1 | Kate Moran, [Quantitative UX Research in Practice](https://www.nngroup.com/articles/quant-research-practice/), NN/g | Survey | 2018 | 429 profissionais de UX (viés declarado: público da NN/g) |
| F2 | Jen Cardello, [Three Uses for Analytics in User-Experience Practice](https://www.nngroup.com/articles/analytics-user-experience/), NN/g | Artigo | 2013 | — |
| F3 | Maze, [The 2025 trends shaping the user research industry](https://maze.co/blog/future-user-research-2025/) | Relatório de mercado (fornecedor) | 2025 (página com dados de 2026) | 800+ profissionais de pesquisa, produto e design |
| F4 | Andrew Hogan, [Figma's 2025 AI report: Perspectives from designers and developers](https://www.figma.com/blog/figma-2025-ai-report-perspectives/), Figma ([relatório](https://www.figma.com/reports/ai-2025/)) | Relatório de mercado (fornecedor) | 2025 | 2.500 usuários da Figma, 7 países |
| F5 | Huei-Hsin Wang e Megan Brown, [Good from Afar, But Far from Good: AI Prototyping in Real Design Contexts](https://www.nngroup.com/articles/ai-prototyping/), NN/g | Estudo qualitativo (avaliação heurística) | 2025 | 1 projeto, 8 ferramentas |
| F6 | Feifei Liu e Kate Moran, [AI-Powered Tools for UX Research: Issues and Limitations](https://www.nngroup.com/articles/ai-powered-tools-limitations/), NN/g | Avaliação de ferramentas | 2023 | — |
| F7 | Kate Moran e Maria Rosala, [Accelerating Research with AI](https://www.nngroup.com/articles/research-with-ai/), NN/g | Guia | 2024 (revisado em jan/2026) | — |
| F8 | Kate Moran, [Demand Accuracy in Your AI Tools: Lessons from Baymard Institute](https://www.nngroup.com/articles/baymard-ai-tool-accuracy/), NN/g | Entrevista e dados da Baymard | 2026 | Testes da Baymard e de pesquisadores da Microsoft |
| F9 | Duan, Warner, Li e Hartmann, [Generating Automatic Feedback on UI Mockups with Large Language Models](https://arxiv.org/abs/2403.13139), ACM CHI 2024 | Artigo acadêmico | 2024 | 51 UIs, 3 conjuntos de guidelines, 12 designers |
| F10 | Raluca Budiu, [A Research Agenda for Generative AI in UX](https://www.nngroup.com/articles/genai-ux-research-agenda/), NN/g | Artigo | 2025 | — |
| F11 | Larissa Santiago, [Uso de IA cresce no design, mas falta estrutura corporativa](https://www.meioemensagem.com.br/marketing/uso-de-ia-cresce-no-design-mas-falta-estrutura-corporativa), Meio & Mensagem, sobre pesquisa da Môre com o Ibpad | Pesquisa divulgada pela imprensa | 2025 | Não informada na matéria |

## Achados

### A. Uso de dados quali e quanti
1. **Designers são quem mais faz pesquisa fora do time de research.** Em 2025, "designers (70%), product managers (42%) e marketers (18%)" tiveram papel mais ativo na coleta de insights (F3).
2. **A demanda por pesquisa cresce, e o tempo não acompanha.**
   - 55% dos times viram a demanda por pesquisa aumentar em 2025; a página informa "quase 66%" para 2026 (F3).
   - Falta de tempo e de banda é o maior desafio para 63% dos respondentes (F3).
3. **Quem não é pesquisador recebe ferramenta, mas pouco apoio.** 61% das organizações dão ferramentas e templates para quem não é pesquisador. Menos da metade oferece treinamento estruturado (46%) ou apoio de pesquisadores especializados (45%) (F3).
4. **A pesquisa vem ganhando peso nas decisões, mas a partir de uma base pequena.**
   - Organizações em que a pesquisa é essencial para estratégia e operação: de 8% (2025) para 22% (2026).
   - Organizações em que a pesquisa raramente é usada nas decisões: de 13% para 6% (F3).
5. **Pesquisa quantitativa é minoria.**
   - Só 27% faziam um ou mais estudos quantitativos por projeto; 44%, "às vezes" (F1).
   - Analytics, teste de usabilidade qualitativo e entrevistas empatam como métodos mais usados (67% cada) (F1).
6. **Muita gente não sabe se a mudança de design funcionou.**
   - Só 24% avaliam o sucesso de uma mudança com dados quali e quanti juntos.
   - 18% "não sabem" se as mudanças de design foram melhorias (F1).
7. **As ferramentas de analytics não foram feitas para UX.**
   - Elas foram "purpose-built for marketing activities, not UX" e podem virar "a distracting black hole of 'interesting' data without any actionable insight" (F2).
   - Recomendação da fonte: começar pelo processo de UX e montar um plano de medição que ligue objetivos, ações dos usuários e métricas (F2).

### B. Heurísticas de UX e AI
1. **A AI já ajuda na avaliação heurística, com limites.** Num plugin do Figma com GPT-4, o feedback foi útil para "catching subtle errors, improving text, and considering UI semantics", mas "decreased in utility over iterations" (F9).
2. **A precisão das ferramentas de avaliação por AI é baixa e quase nunca é publicada.**
   - Num teste de 2023, o GPT-4 teve 20% de acerto e 80% de falsos positivos (F8).
   - Em 2025, quatro ferramentas ficaram entre 50% e 70% de acerto (F8).
   - "The vast majority of tools don't even publish an accuracy rate" (F8).
   - A Baymard só automatiza 154 das mais de 700 diretrizes, as que passam de 95% de acerto (F8).
3. **Detectar padrões funciona melhor que julgar qualidade.** A precisão "plummets dramatically" quando o modelo precisa avaliar se um padrão é bom ou ruim (F8).
4. **Ainda faltam benchmarks de avaliação feita por AI.** A NN/g lista como pergunta aberta: "What percentage of actual usability issues do these tools detect? Do they surface false positives?" (F10).

### C. Interfaces de AI e AI no trabalho de design
1. **Quase todo designer usa AI; poucos confiam no resultado.**
   - No Brasil, 94% dos designers usam AI no trabalho e 66% usam todo dia (F11).
   - No mundo, 78% dizem que a AI aumenta muito a eficiência, mas só 32% dizem que podem confiar no resultado (F4).
2. **Designers estão menos satisfeitos com AI que desenvolvedores.**
   - Satisfação: 69% entre designers, 82% entre desenvolvedores.
   - Melhora na qualidade do trabalho: 54% e 68% (F4).
   - Só 31% dos designers usam AI no trabalho central de design (F4).
3. **Protótipo feito por AI é "good from afar, but far from good".** Com prompts detalhados, os resultados chegam perto dos humanos, mas ainda falham em hierarquia, contraste, espaçamento e agrupamento. Os resultados também são "biased toward mainstream design conventions" (F5).
4. **Ferramentas de AI para pesquisa não têm contexto nem citam a origem.**
   - "AI insight generators severely lack context" (F6).
   - Sem citação da origem, os achados não podem ser verificados (F6).
   - O guia mais recente recomenda verificar as fontes primárias e não usar a AI como checadora de fatos (F7).
5. **Medir o impacto de produtos com AI é difícil.** Só 9% dos times de AI têm crescimento de receita como objetivo principal; 76% citam objetivos vagos, e "measuring impact remains elusive" (F4).
6. **No Brasil, o uso de AI é individual e sem governança.**
   - 60% usam contas pessoais, sem diretrizes da empresa; só 7% estão em empresas com integração avançada (F11).
   - Análise de dados já é o 4º uso mais comum (55%) (F11).
   - A matéria fala em "shadow design": decisões tomadas em ambientes não monitorados, difíceis de auditar (F11).

## Barreiras (consolidado)
| Barreira | Evidência |
|---|---|
| Falta de tempo e de banda para pesquisar | F3 (63%) |
| Pouco conhecimento de métodos quantitativos e de análise | F1 |
| Dificuldade de recrutar amostras grandes | F1 (37%, a barreira mais citada) |
| Ferramentas de analytics feitas para marketing, não para UX | F2 |
| Não saber medir se uma mudança deu certo | F1 (18% não sabem) |
| Pouco apoio a quem não é pesquisador | F3 |
| Pouca confiança e precisão na AI | F4 (32% confiam), F8 (20–70% de acerto) |
| AI sem contexto do projeto e sem citar fontes | F6, F7 |
| Uso de AI sem governança nem rastreabilidade | F11 |

## Implicações para o Trama (hipóteses)
- **[hipótese]** O espaço está entre "AI que gera interface" e "AI que pesquisa". Nenhuma das fontes descreve uma ferramenta que ligue a decisão de design ao embasamento: diretriz, dado, pesquisa.
- **[hipótese]** Confiança é requisito de produto. Toda recomendação precisaria mostrar de onde veio e qual o grau de certeza, porque os designers não confiam na saída da AI (F4) e as ferramentas não publicam a precisão (F8).
- **[hipótese]** Usar heurísticas conhecidas (regras previamente pesquisadas) dá mais segurança que pedir para a AI julgar livremente o que é "bom" (F8).
- **[hipótese]** A dor pode estar mais em **interpretar e conectar** dados que já existem do que em coletar dados novos (F2, F1).
- **[hipótese]** Para o público brasileiro, o uso individual e sem governança (F11) sugere uma adoção que começa pelo designer, não pela empresa. Isso tem implicações de privacidade e LGPD caso a ferramenta acesse dados do produto.

### Ligação com o escopo do MVP ([DDR-0005](../decisions/DDR-0005-mvp-scope-prototype-copilot.md))
O MVP é um copiloto de design que traz embasamento e entrega protótipos com histórico de versões. As hipóteses acima viram perguntas para o modelo inicial que vamos apresentar ao mentor (~14/12):

| Achado | O que significa para o copiloto **[hipótese]** | Onde aparece na interface (direção do DDR-0005) |
|---|---|---|
| Pouca confiança na AI e precisão quase nunca publicada (F4, F8) | Cada insight mostra a fonte e o grau de certeza; o designer decide o que aplicar | Painel de outputs e insights |
| Heurísticas pesquisadas são mais confiáveis que julgamento livre da AI (F8, F9) | As recomendações partem de diretrizes e heurísticas conhecidas e dizem qual regra aplicaram | Painel de insights; barra de inspeção |
| Analytics sem plano de medição viram dado sem ação (F2); designers não sabem se a mudança funcionou (F1) | O copiloto ajuda a **interpretar** dados que já existem e a ligar cada versão a um objetivo e a uma métrica | Barra de inspeção (métricas) |
| Uso de AI sem rastreabilidade ("shadow design", F11) | O histórico de versões registra **por que** cada mudança foi feita e com base em quê | Menu de versões e changelog |
| Saída genérica e enviesada para convenções comuns (F5) | Começar por wireframes de média fidelidade com componentes genéricos é coerente com o que a AI faz bem; o craft fica com o designer | Protótipo no centro |

## Relação com o mapa de suposições ([#6](https://github.com/camimonteiro/trama/issues/6))
Referência: [rascunho do mapa](2026-11-17-assumption-map.md). A evidência de fontes secundárias **não valida** nenhuma suposição sozinha, só aumenta ou reduz a confiança.

| Suposição | Efeito do desk research |
|---|---|
| S-01: designers têm dificuldade de embasar decisões | **Ganha evidência** (fraca → moderada): F1, F2, F3 |
| S-02: a dor principal é defender e negociar decisões | **Sem evidência** nas fontes; vai para os testes de conceito (#20) |
| S-03: há um público definível | **Indício**: designers de produto plenos e seniores, em empresas de tecnologia, são os mais engajados com AI no Brasil (F11) |
| S-05: designers confiariam em AI se ela mostrar as fontes | **Ganha relevância e risco**: a confiança é baixa (F4), e mostrar as fontes aparece como necessidade em F6 e F7 |
| S-07: há espaço de diferenciação | **Indício** a favor (ver implicações); a análise de concorrentes fica no benchmark (#9) |
| S-10: existem fontes públicas confiáveis | **Indício** a favor, com limite: automatizar diretrizes só funciona para uma parte delas (F8) |
| S-12: um modelo de mercado com contexto basta | **Risco maior**: os números de precisão de F8 e a queda de utilidade ao longo das iterações em F9 |

## Lacunas: o que validar com protótipos
Pelo [DDR-0004](../decisions/DDR-0004-lean-discovery-desk-research-prototyping.md), as entrevistas e o survey (#11–#14) saíram desta etapa. As lacunas abaixo vão para os protótipos e os testes de conceito da fase Concept ([#20](https://github.com/camimonteiro/trama/issues/20)):
- **Defender decisões (S-02):** mostrar o protótipo a designers e perguntar se o embasamento que ele traz ajudaria a defender uma decisão real diante de stakeholders.
- **Confiança (S-05):** testar se mostrar a fonte e o grau de certeza muda a disposição de usar a recomendação.
- **Dados acessíveis (S-11):** descobrir quais dados o designer de fato tem (analytics, pesquisa, NPS) e em que formato. Isso define o que o copiloto consegue ler. Se não der para responder nos testes de conceito, é candidata a voltar a entrevistas no Concept, como prevê o DDR-0004.

Lacunas das próprias fontes:
- Faltam dados recentes e locais sobre pesquisa quantitativa feita por designers: F1 é de 2018 e de fora do Brasil.
- Faltam a amostra e a metodologia da pesquisa Môre/Ibpad (F11). Vale procurar o relatório original.
- Os números completos do relatório da Figma (F4) estão atrás de um formulário.
