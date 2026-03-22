export type IllustrationKind =
  | 'footsteps'
  | 'hands'
  | 'umbrella'
  | 'bench'
  | 'hourglass'

export type BookPage = {
  id: string
  kicker: string
  title: string
  body: string
  aside: string
  illustration: IllustrationKind
}

export const bookPages: BookPage[] = [
  {
    id: 'partida',
    kicker: 'Página 1',
    title: 'O Ponto de Partida',
    body:
      'Meu foco sempre foi erguer lógicas e resolver impasses. O social ficava para depois — até aquele aplicativo improvável. Dia 4 de março, você sugeriu, eu topei sem pensar. Uma caminhada sem pretensão desviou o rumo de tudo.',
    aside: 'Dois pares de tênis, um mesmo destino.',
    illustration: 'footsteps',
  },
  {
    id: 'escuro',
    kicker: 'Página 2',
    title: 'O Escuro e o Frio na Barriga',
    body:
      'Eu ainda andava às apalpadelas. Ajudar você a atravessar a avenida, segurando sua mão, foi o primeiro passo firme. Depois, o beijo na porta de casa. E a semana longe logo em seguida — servindo ao essencial: compilar o que eu já sentia e ainda não sabia nomear.',
    aside: 'Um toque. O corpo entendendo antes da fala.',
    illustration: 'hands',
  },
  {
    id: 'pedra-angular',
    kicker: 'Página 3',
    title: 'A Pedra Angular',
    body:
      'Festa de São José. A cidade apagou, os desencontros no escuro, o tatear até nos acharmos. Conhecer o seu mundo dissolveu as inseguranças. Naquela noite, escapando da chuva de carona, a ficha caiu: eu estava prestes a te amar absurdamente.',
    aside: 'Quando a luz da cidade falhou..',
    illustration: 'umbrella',
  },
  {
    id: 'construcao',
    kicker: 'Página 4',
    title: 'A Construção',
    body:
      'Não vivo com saudade do que fomos. Vivo com alívio por termos chegado aqui. Hoje, somos porto seguro no meio da correria. Ainda assim, a raiz de tudo segue naquela cena: nós dois no banco da praça, você juntando coragem para perguntar, e eu, bobamente confuso, tentando entender a sorte que tinha.',
    aside: 'O amor ficando de pé.',
    illustration: 'bench',
  },
  {
    id: 'promessa',
    kicker: 'Página 5',
    title: 'A Promessa',
    body:
      'Nesses dois anos, entendi que nada disso é magia. É código suado, dedicação e vontade diária de te ver sorrir. Seja minha namorada, Marília. Hoje e sempre. Até o dia em que eu vá até você apenas para dizer: seja minha esposa.',
    aside: 'A história continua carregando. E eu continuo escolhendo você.',
    illustration: 'hourglass',
  },
]