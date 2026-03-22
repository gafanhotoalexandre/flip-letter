# Flip Letter

Livrinho interativo construido em React, Vite e TypeScript. Um objeto de cena quente, responsivo e com peso editorial, pensado para funcionar bem desde celulares de gama media ate desktops grandes.

## Conceito

O eixo poetico e `as apalpadelas`: inseguranca inicial, construcao paciente, certeza amadurecida.

- O eu de 2024 aparece como alguem tateando.
- O eu de hoje olha para tras e percebe que a inseguranca era apenas o alicerce secando.
- Cinco paginas curtas, cada uma com texto enxuto e ilustracao vetorial minimalista.

## Stack

- Vite 8
- React 19
- TypeScript strict
- CSS puro (mobile-first, unidades fluidas, breakpoints por conteudo)

Sem biblioteca de animacao ou page flip. A transicao entre paginas usa um crossfade + slide horizontal sutil (estilo Kindle), controlado por CSS `opacity` e `transform` — propriedades composited que nao forcam repaint.

## Experiencia

- Cena editorial com atmosfera quente e foco no livro
- Transicao de pagina tipo Kindle (rapida e leve)
- Navegacao por botoes, setas do teclado e swipe na tela
- CSS mobile-first: base para 360px, expansao em 64rem
- Respeito a `prefers-reduced-motion`
- Alvos de toque >= 44px
- Ilustracoes em SVG inline, sem dependencia de assets externos

## Estrutura

```
src/
  App.tsx              # Cena principal, navegacao e swipe
  App.css              # Layout editorial, transicao Kindle, controles
  index.css            # Tokens globais, tipografia, fundo
  main.tsx             # Ponto de entrada
  content/
    book.ts            # Conteudo tipado das cinco paginas
  components/
    BookPage.tsx       # Pagina individual do livro
    PageIllustration.tsx  # SVGs minimalistas por pagina
```

## Como rodar

```bash
npm install
npm run dev
```

Build de producao:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Como editar o conteudo

O ponto central e `src/content/book.ts`. Cada pagina tem:

- `kicker` — rotulo discreto
- `title` — titulo da pagina
- `body` — texto principal
- `aside` — legenda da ilustracao
- `illustration` — tipo do SVG (`footsteps`, `hands`, `umbrella`, `bench`, `hourglass`)

Para alterar a arte, edite o SVG correspondente em `src/components/PageIllustration.tsx`.

## Direcao de design

- Tipografia serifada (Fraunces) para titulos, sans (IBM Plex Sans) para corpo
- Papel quente, sombras profundas, fundo escuro com atmosfera
- Ritmo de leitura acima de enfeite
- Animacao como suporte narrativo, nao como gimmick
- Nenhum `filter: blur()`, `backdrop-filter` ou pseudo-elemento pesado

## Publicacao

App estatico do Vite. Deploy direto em Vercel, Netlify ou qualquer hospedagem de arquivos estaticos.

```bash
npm run build
# publicar a pasta dist/
```

## Proximos refinamentos possiveis

- Trocar SVGs placeholders por ilustracoes finais
- Adicionar capa e contracapa dedicadas
- Self-host das fontes para conexoes lentas
- Revisao poetica ainda mais severa dos textos
