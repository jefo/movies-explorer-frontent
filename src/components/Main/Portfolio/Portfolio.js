import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a className='portfolio__link'
              href='https://maximtsirlin.github.io/how-to-learn/'
              target='_blank'
              rel="noreferrer">Статичный сайт
            </a>
            <div className='portfolio__arrow' />
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link'
              href='https://maximtsirlin.github.io/russian-travel/'
              target='_blank'
              rel="noreferrer">Адаптивный сайт
            </a>
            <div className='portfolio__arrow' />
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link'
              href='https://github.com/maximtsirlin/react-mesto-api-full-gha'
              target='_blank'
              rel="noreferrer">Одностраничное приложение
            </a>
            <div className='portfolio__arrow' />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;