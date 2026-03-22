import type { BookPage as BookPageType } from '../content/book'
import PageIllustration from './PageIllustration'

type BookPageProps = {
  page: BookPageType
  index: number
  total: number
}

function BookPage({ page, index, total }: BookPageProps) {
  return (
    <article className="book-page" aria-label={page.title}>
      <header className="book-page__header">
        <p className="book-page__kicker">{page.kicker}</p>
        <p className="book-page__counter">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
      </header>

      <div className="book-page__body">
        <div className="book-page__copy">
          <h2>{page.title}</h2>
          <p>{page.body}</p>
        </div>

        <figure className="book-page__figure">
          <PageIllustration kind={page.illustration} />
          <figcaption>{page.aside}</figcaption>
        </figure>
      </div>
    </article>
  )
}

export default BookPage