import { useEffect, useRef, useState } from 'react'
import './App.css'
import BookPage from './components/BookPage'
import { bookPages } from './content/book'

const TRANSITION_MS = 200
const FOCUS_TRANSITION_MS = 260

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [bookFocusState, setBookFocusState] = useState<
    'closed' | 'opening' | 'open' | 'closing'
  >('closed')
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const exitTimer = useRef<number | null>(null)
  const focusTimer = useRef<number | null>(null)
  const touchStartX = useRef(0)
  const focusToggleRef = useRef<HTMLButtonElement | null>(null)
  const closeFocusRef = useRef<HTMLButtonElement | null>(null)
  const wasBookFocused = useRef(false)

  const totalPages = bookPages.length
  const activePage = bookPages[currentPage]
  const isBookFocused = bookFocusState !== 'closed'

  function isDesktopViewport() {
    return window.innerWidth >= 1024
  }

  function clearFocusTimer() {
    if (focusTimer.current !== null) {
      window.clearTimeout(focusTimer.current)
      focusTimer.current = null
    }
  }

  function openBookFocus() {
    if (isDesktopViewport() || isExiting || isBookFocused) return

    clearFocusTimer()
    setBookFocusState('opening')
    focusTimer.current = window.setTimeout(() => {
      setBookFocusState('open')
      focusTimer.current = null
    }, 20)
  }

  function closeBookFocus() {
    if (!isBookFocused || bookFocusState === 'closing') return

    clearFocusTimer()
    setBookFocusState('closing')
    focusTimer.current = window.setTimeout(() => {
      setBookFocusState('closed')
      focusTimer.current = null
    }, FOCUS_TRANSITION_MS)
  }

  function navigateTo(targetPage: number) {
    if (isExiting || targetPage === currentPage) return
    if (targetPage < 0 || targetPage >= totalPages) return

    setDirection(targetPage > currentPage ? 'next' : 'prev')
    setIsExiting(true)

    if (exitTimer.current !== null) {
      window.clearTimeout(exitTimer.current)
    }

    exitTimer.current = window.setTimeout(() => {
      setCurrentPage(targetPage)
      setIsExiting(false)
      exitTimer.current = null
    }, TRANSITION_MS)
  }

  useEffect(() => {
    return () => {
      if (exitTimer.current !== null) {
        window.clearTimeout(exitTimer.current)
      }

      clearFocusTimer()
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (!isBookFocused || bookFocusState === 'closing') {
          return
        }

        clearFocusTimer()
        setBookFocusState('closing')
        focusTimer.current = window.setTimeout(() => {
          setBookFocusState('closed')
          focusTimer.current = null
        }, FOCUS_TRANSITION_MS)
        return
      }

      const target =
        event.key === 'ArrowRight'
          ? currentPage + 1
          : event.key === 'ArrowLeft'
            ? currentPage - 1
            : null

      if (target === null || isExiting) return
      if (target < 0 || target >= totalPages) return

      setDirection(target > currentPage ? 'next' : 'prev')
      setIsExiting(true)

      if (exitTimer.current !== null) {
        window.clearTimeout(exitTimer.current)
      }

      exitTimer.current = window.setTimeout(() => {
        setCurrentPage(target)
        setIsExiting(false)
        exitTimer.current = null
      }, TRANSITION_MS)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [bookFocusState, currentPage, isBookFocused, isExiting, totalPages])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        clearFocusTimer()
        setBookFocusState('closed')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isBookFocused) {
      document.body.style.overflow = ''
      if (wasBookFocused.current) {
        focusToggleRef.current?.focus()
      }
      wasBookFocused.current = false
      return
    }

    document.body.style.overflow = 'hidden'
    wasBookFocused.current = true
    if (bookFocusState === 'open') {
      closeFocusRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [bookFocusState, isBookFocused])

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleTouchEnd(event: React.TouchEvent) {
    const dx = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) {
      navigateTo(currentPage + (dx < 0 ? 1 : -1))
    }
  }

  const surfaceClass = isExiting
    ? `book-surface is-exiting--${direction}`
    : 'book-surface'
  const sceneClass = [
    'scene-shell',
    isBookFocused ? 'has-book-focus' : '',
    isBookFocused ? `is-book-focus-${bookFocusState}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={sceneClass}>
      {isBookFocused ? (
        <button
          type="button"
          className="book-overlay"
          aria-label="Fechar leitura em foco"
          onClick={closeBookFocus}
        />
      ) : null}

      <section
        className="scene-copy"
        aria-label="Contexto do livro"
        aria-hidden={isBookFocused}
      >
        <p className="scene-copy__eyebrow">às apalpadelas</p>
        <h1>Dois anos de construção, um livro para dizer com calma.</h1>
        {/* <p className="scene-copy__lead">
          O eu de hoje olha para o eu de 2024 e entende o que faltava nomear:
          a insegurança era só o alicerce secando.
        </p> */}

        <div className="scene-copy__notes">
          <p>
            Cinco páginas. Cinco pontos de apoio.
          </p>
        </div>
        {/* <p className="scene-copy__nav">Navegue pelas setas, pelos botões ou deslize na tela.</p> */}
      </section>

      <section
        id="book-stage"
        className="book-stage"
        aria-label="Livro interativo"
        data-focused={isBookFocused}
      >
        <div className="book-aura" aria-hidden="true" />

        <button
          ref={focusToggleRef}
          type="button"
          className="book-focus-tab"
          aria-controls="book-stage"
          aria-expanded={isBookFocused}
          onClick={openBookFocus}
        >
          Foco
        </button>

        {isBookFocused ? (
          <button
            ref={closeFocusRef}
            type="button"
            className="book-focus-close"
            onClick={closeBookFocus}
          >
            Fechar
          </button>
        ) : null}

        <div className="book-frame">
          <div
            className={surfaceClass}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <BookPage page={activePage} index={currentPage} total={totalPages} />
          </div>
        </div>

        <div className="book-toolbar">
          <button
            type="button"
            className="book-button sr-only-focusable"
            onClick={() => navigateTo(currentPage - 1)}
            disabled={currentPage === 0 || isExiting}
          >
            Voltar
          </button>

          <div className="book-progress" aria-live="polite">
            <span>{activePage.title}</span>
            <div className="book-progress__track" aria-hidden="true">
              <span
                className="book-progress__fill"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            className="book-button sr-only-focusable"
            onClick={() => navigateTo(currentPage + 1)}
            disabled={currentPage === totalPages - 1 || isExiting}
          >
            Avançar
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
