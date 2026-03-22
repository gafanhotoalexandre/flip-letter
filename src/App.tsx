import { useEffect, useRef, useState } from 'react'
import './App.css'
import BookPage from './components/BookPage'
import { bookPages } from './content/book'

const TRANSITION_MS = 200

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const exitTimer = useRef<number | null>(null)
  const touchStartX = useRef(0)

  const totalPages = bookPages.length
  const activePage = bookPages[currentPage]

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
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
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
  }, [currentPage, isExiting, totalPages])

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

  return (
    <main className="scene-shell">
      <section className="scene-copy" aria-label="Contexto do livro">
        <p className="scene-copy__eyebrow">às apalpadelas</p>
        <h1>Dois anos de construção, um livro para dizer com calma.</h1>
        <p className="scene-copy__lead">
          O eu de hoje olha para o eu de 2024 e entende o que faltava nomear:
          a insegurança era só o alicerce secando.
        </p>

        <div className="scene-copy__notes">
          <p>
            Cinco páginas. Cinco pontos de apoio. Um percurso que saiu do acaso,
            atravessou o escuro e virou certeza.
          </p>
        </div>
        <p className="scene-copy__nav">Navegue pelas setas, pelos botões ou deslize na tela.</p>
      </section>

      <section className="book-stage" aria-label="Livro interativo">
        <div className="book-aura" aria-hidden="true" />

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
            className="book-button"
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
            className="book-button"
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
