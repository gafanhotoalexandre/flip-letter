# Flip Letter

## Stack
- Vite 8
- React 19
- TypeScript em modo strict
- CSS puro com tokens visuais e componentes pequenos

## Objetivo do projeto
- Este projeto e um livrinho interativo, poetico e responsivo.
- O foco principal e a experiencia editorial: ritmo, silencio visual, contraste, atmosfera e legibilidade.
- O livro deve parecer um objeto importante em cena, nao apenas um card com texto.

## Regras de implementacao
- Use sempre componentes funcionais com `function ComponentName() {}`.
- Nao use `any`.
- Prefira tipos pequenos e dados tipados para o conteudo.
- Mantenha a logica da navegacao separada do conteudo textual.
- Preserve a arquitetura simples: componentes em `src/components`, conteudo em `src/content`, estilos globais em `src/index.css` e estilos da cena em `src/App.css`.
- Evite dependencias novas sem necessidade real. Este projeto deve continuar leve.

## UI e frontend
- Preserve CSS puro. Nao migrar para Tailwind sem pedido explicito.
- Escreva CSS mobile-first: estilos base para telas pequenas, `@media (min-width)` para expandir.
- Use unidades fluidas (`rem`, `%`, `clamp()`) para tipografia e espacamento. Evite `px` para layout.
- Breakpoints devem ser definidos por conteudo, nao por modelos de dispositivo.
- Evite layouts genericos. A interface precisa ter direcao visual clara, acabamento editorial e boa leitura em mobile.
- Animacoes devem usar apenas propriedades composited (`opacity`, `transform`). Nao usar `filter: blur()`, `backdrop-filter` ou propriedades que forcam layout/repaint.
- Trate animacoes como suporte narrativo, nunca como truque principal. Se houver conflito com responsividade ou acessibilidade, prefira a versao mais estavel.
- Sempre considerar `prefers-reduced-motion`.
- Manter foco visivel, contraste suficiente e navegacao por teclado.
- Alvos de toque devem ter no minimo 44px (2.75rem).
- Testar em viewports de 360px (gama media) e 1440px (desktop).

## Conteudo
- Ao editar o texto, agir como editor: cortar excesso, melhorar cadencia e dar peso as frases.
- Nao inflar a escrita com adjetivos ou romantizacao vazia.
- O conceito central do projeto e `as apalpadelas`: inseguranca inicial, construcao paciente e certeza amadurecida.

## O que evitar
- Nao reintroduzir o template padrao do Vite.
- Nao adicionar formularios, bibliotecas de estado ou bibliotecas de page flip sem necessidade.
- Nao espalhar texto fixo em muitos componentes. O conteudo deve continuar centralizado.
- Nao trocar a direcao visual quente e intimista por defaults brancos ou gradientes genericos.