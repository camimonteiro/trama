# Brief

## Ideia (como foi descrita pelo time)
Uma ferramenta de AI para designers que conecta a criação de **craft** e de **interfaces** a **dados, métricas e embasamento de user experience e design**.

## Problema
[A DEFINIR] — qual dor, de quem, com que evidência?

## Público
[A DEFINIR]

## Hipóteses
> **Proposta de 2026-11-24**, consolidada a partir do [mapa de suposições](../analysis/2026-11-17-assumption-map.md) (S-xx) e do [desk research](../analysis/2026-11-17-desk-research-data-informed-design.md) (F1–F11). O Lucas revisa e complementa no PR [#32](https://github.com/camimonteiro/trama/pull/32) ([ADR-0016](../decisions/ADR-0016-mandatory-pr-review-trial.md)). Pelo [DDR-0004](../decisions/DDR-0004-lean-discovery-desk-research-prototyping.md), a validação acontece com protótipos e testes de conceito ([#20](https://github.com/camimonteiro/trama/issues/20)). Os limiares de sucesso estão `[A DEFINIR]` pela dupla.

| ID | Hipótese | Base | Como validar | Status |
|---|---|---|---|---|
| H-01 | **Acreditamos que** product designers deixam de embasar decisões de interface por falta de tempo e de domínio de dados, não por falta de interesse. Também acreditamos que um copiloto que reúne e interpreta o embasamento no momento da decisão reduz esse esforço. **Saberemos que é verdade quando**, no teste de conceito, designers apontarem tempo e dados como barreira e disserem que usariam o embasamento do protótipo numa decisão real. | S-01, S-06 · F1, F2, F3 | Teste de conceito (#20). Limiar: `[A DEFINIR]` | não validada |
| H-02 | **Acreditamos que** a dor mais forte é defender e negociar decisões com stakeholders, mais do que descobrir o que fazer. **Saberemos que é verdade quando** designers, diante de uma decisão real que já foi contestada, escolherem o embasamento "para argumentar" como o valor principal do copiloto. | S-02 · sem evidência nas fontes | Teste de conceito (#20) com uma decisão contestada trazida pelo participante. Limiar: `[A DEFINIR]` | não validada (a mais arriscada: nenhuma evidência) |
| H-03 | **Acreditamos que** designers só usam uma recomendação de AI numa decisão quando ela mostra a fonte e o grau de certeza. **Saberemos que é verdade quando** a mesma recomendação for aceita mais vezes com fonte e certeza visíveis do que sem elas. | S-05 · F4, F6, F7, F8 | Teste de conceito (#20) comparando as duas versões. Limiar: `[A DEFINIR]` | não validada |
| H-04 | **Acreditamos que** um modelo de AI de mercado, que aplica heurísticas e diretrizes já pesquisadas e se limita a detectar padrões (em vez de julgar livremente o que é "bom"), entrega recomendações confiáveis o bastante para o MVP. **Saberemos que é verdade quando** as recomendações coincidirem com a avaliação de especialistas num conjunto de telas, com poucos falsos positivos. | S-10, S-12 · F8, F9 | Evals em `ai/evals/` contra a avaliação de especialistas; mapeamento de fontes (#10). Limiar de acerto: `[A DEFINIR]` (referência: a Baymard exige 95% para automatizar uma diretriz, F8) | não validada (evidência contrária: 20–70% de acerto em F8) |
| H-05 | **Acreditamos que** o público inicial são product designers plenos e seniores em empresas de tecnologia, que já usam AI por conta própria e sem diretrizes da empresa. **Saberemos que é verdade quando** esse perfil se reconhecer nas dores de H-01 e H-02 nos testes de conceito, mais do que outros perfis. | S-03 · F11 | Recrutamento e testes de conceito (#20) com perfis variados | não validada |

A diferenciação frente às ferramentas existentes (S-07) entra como hipótese quando o benchmark ([#9](https://github.com/camimonteiro/trama/issues/9)) estiver pronto.

## Métricas de sucesso
[A DEFINIR]

## Fora de escopo
[A DEFINIR]
