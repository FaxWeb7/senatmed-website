import ItemBg from "../../ui/ItemBg"
import { Link } from 'react-router-dom'

const BrendCatalogItem = ({ list, title }) => {
  document.title = `${title} | Сенатмед`
  window.scrollTo({ top: 0, behavior: 'auto' })
  return (
    <>
    <ItemBg title={`${title}`} />
    <section className="uzi">
      <div className="container">
        <div className="uzi__inner">
          <ul className="uzi__list">
            {list.map(({ linkItem, img, from, model, description  }, index) => {
              return(
                <li className="uzi__list-item" key={index}>
                  <Link to={`${linkItem}`} className="uzi__item-pict">{img}</Link>
                  <h5 className="uzi__item-from">{from ? from : null}</h5>
                  <h2 className="uzi__item-title">{model ? model : null}</h2>
                  <ul className="uzi__description-list" style={{marginTop: "10px"}}>
                    {description ? description : null}
                  </ul>
                  <button id="order-btn" className="uzi__order-btn">
                    <Link to={`${linkItem}`} className="uzi__item-link">Подробнее</Link>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default BrendCatalogItem