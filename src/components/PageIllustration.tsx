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
          {/* left dashed path */}
          <path d="M50 210 Q60 180 90 150 T160 100" strokeDasharray="8 12" strokeLinecap="round" />
          {/* right dashed path */}
          <path d="M270 210 Q260 180 230 150 T160 100" strokeDasharray="8 12" strokeLinecap="round" />
          {/* destination pin */}
          <path d="M160 100 C 180 70 180 40 160 40 C 140 40 140 70 160 100 Z" strokeLinejoin="round" />
          <circle cx="160" cy="65" r="5" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'hands':
      return (
        <svg {...commonProps}>
          {/* Left Hand Reaching (simpler, open palm line) */}
          <path
            d="M30 140 C 60 140, 80 135, 100 125 M100 125 C 115 115, 130 105, 155 105 M100 125 Q 110 135, 120 140"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Hand Reaching (symmetrical to left) */}
          <path
            d="M290 140 C 260 140, 240 135, 220 125 M220 125 C 205 115, 190 105, 165 105 M220 125 Q 210 135, 200 140"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          {/* ground line */}
          <path d="M30 180 H290" strokeLinecap="round" />
          {/* backrest */}
          <rect x="90" y="100" width="140" height="20" rx="4" />
          {/* seat */}
          <rect x="80" y="130" width="160" height="12" rx="6" />
          {/* legs */}
          <path d="M95 142 L85 180 M225 142 L235 180 M130 142 V180 M190 142 V180" strokeLinecap="round" />
          {/* left figure */}
          <circle cx="130" cy="70" r="10" />
          <path d="M130 80 V120 M130 120 L145 130 V155" strokeLinecap="round" strokeLinejoin="round" />
          {/* right figure */}
          <circle cx="170" cy="75" r="9" />
          <path d="M170 84 V120 M170 120 L155 130 V155" strokeLinecap="round" strokeLinejoin="round" />
          {/* arm around shoulder */}
          <path d="M130 95 C 145 85 165 95 170 95" strokeLinecap="round" />
          {/* floating heart */}
          <path d="M150,45 C150,45 142,37 142,30 C142,24 150,24 150,30 C150,24 158,24 158,30 C158,37 150,45 150,45 Z" fill="currentColor" stroke="none" />
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