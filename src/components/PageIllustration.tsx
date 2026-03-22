import type { IllustrationKind } from '../content/book'

type PageIllustrationProps = {
  kind: IllustrationKind
}

function PageIllustration({ kind }: PageIllustrationProps) {
  const commonProps = {
    className: 'page-illustration',
    viewBox: '0 0 320 220',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    role: 'img',
    'aria-hidden': true,
  }

  switch (kind) {
    case 'footsteps':
      return (
        <svg {...commonProps}>
          {/* two paths converging to a meeting point */}
          <path d="M55 190 Q95 145 125 115 Q145 95 160 78" />
          <path d="M265 190 Q225 145 195 115 Q175 95 160 78" />
          {/* step marks along left path */}
          <line x1="70" y1="175" x2="78" y2="182" />
          <line x1="93" y1="150" x2="101" y2="155" />
          <line x1="114" y1="127" x2="122" y2="131" />
          <line x1="137" y1="103" x2="144" y2="106" />
          {/* step marks along right path */}
          <line x1="250" y1="175" x2="242" y2="182" />
          <line x1="227" y1="150" x2="219" y2="155" />
          <line x1="206" y1="127" x2="198" y2="131" />
          <line x1="183" y1="103" x2="176" y2="106" />
          {/* meeting point */}
          <circle cx="160" cy="78" r="5" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'hands':
      return (
        <svg {...commonProps}>
          {/* left arm reaching */}
          <path d="M25 148 C65 145 105 130 140 110" />
          {/* left hand tapering to touch */}
          <path d="M140 110 C148 102 155 96 160 86" />
          {/* right arm reaching */}
          <path d="M295 148 C255 145 215 130 180 110" />
          {/* right hand tapering to touch */}
          <path d="M180 110 C172 102 165 96 160 86" />
          {/* contact point */}
          <circle cx="160" cy="86" r="4" fill="currentColor" stroke="none" />
          {/* warmth arc */}
          <path d="M148 74 C153 64 167 64 172 74" />
        </svg>
      )
    case 'umbrella':
      return (
        <svg {...commonProps}>
          {/* canopy */}
          <path d="M73 105 C93 58 129 38 160 38 C191 38 227 58 247 105" />
          {/* scalloped edge */}
          <path d="M73 105 C87 118 103 118 116 105 C130 118 146 118 160 105 C174 118 190 118 204 105 C218 118 234 118 247 105" />
          {/* shaft */}
          <path d="M160 38 V155" />
          {/* handle curl */}
          <path d="M160 155 C160 172 176 177 184 167" />
          {/* rain — evenly spaced */}
          <path d="M80 18 L76 36" />
          <path d="M120 10 L116 28" />
          <path d="M200 10 L204 28" />
          <path d="M240 18 L244 36" />
          <path d="M55 58 L51 76" />
          <path d="M265 58 L269 76" />
        </svg>
      )
    case 'bench':
      return (
        <svg {...commonProps}>
          {/* backrest */}
          <path d="M75 105 H245" />
          {/* seat */}
          <path d="M70 125 H250" />
          {/* backrest supports */}
          <path d="M120 105 V125" />
          <path d="M200 105 V125" />
          {/* legs */}
          <path d="M85 125 L78 175" />
          <path d="M235 125 L242 175" />
          {/* ground */}
          <path d="M60 175 H260" />
          {/* left figure */}
          <circle cx="130" cy="82" r="9" fill="currentColor" stroke="none" />
          <path d="M130 91 V105" />
          {/* right figure */}
          <circle cx="190" cy="82" r="9" fill="currentColor" stroke="none" />
          <path d="M190 91 V105" />
          {/* connection arc between them */}
          <path d="M139 88 C152 96 168 96 181 88" />
        </svg>
      )
    case 'hourglass':
      return (
        <svg {...commonProps}>
          {/* top bar */}
          <path d="M105 38 H215" />
          {/* bottom bar */}
          <path d="M105 182 H215" />
          {/* left glass curve */}
          <path d="M120 38 C120 78 160 88 160 110 C160 132 120 142 120 182" />
          {/* right glass curve */}
          <path d="M200 38 C200 78 160 88 160 110 C160 132 200 142 200 182" />
          {/* top sand level */}
          <path d="M138 65 Q160 58 182 65" />
          {/* bottom sand pile */}
          <path d="M135 162 Q160 150 185 162" />
          {/* sand flow */}
          <circle cx="160" cy="100" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="160" cy="118" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="160" cy="136" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

export default PageIllustration