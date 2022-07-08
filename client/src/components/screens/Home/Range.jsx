import { Link } from "react-router-dom"

const Range = () => {
  return (
    <section className="range">
      <div className="range__top-divider"></div>
      <div className="min-container">
        <div className="range__inner">
          <div className="range__title">
            <h1 className="range__title-text">Узнать весь асортимент</h1>
          </div>
          <div className="range__button"><Link className="range__link" to="/catalog">перейти в каталог</Link></div>
        </div>
      </div>
      <div className="range__bottom-divider"></div>
    </section>
  )
}

export default Range