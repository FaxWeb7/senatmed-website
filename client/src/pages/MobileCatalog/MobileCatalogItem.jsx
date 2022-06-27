import ItemBg from "../../components/ui/ItemBg"
import './scss/mobilecatalogitem.scss'

const MobileCatalogItem = ({ list, title }) => {
  document.title = `Мобильные кабинеты ${title} | Сенатмед`
  return (
    <>
    <ItemBg title={title} />
    <section className="uzi mobile">
      <div className="container">
        <div className="uzi__inner mobile">
          <ul className="uzi__list mobile">
            {list.map(({ linkItem, img, model }, index) => {
              return(
                <li className="uzi__list-item mobile" key={index}>
                  <a href={linkItem} className="uzi__item-pict mobile">{img}</a>
                  <h2 className="uzi__item-title mobile">{model}</h2>
                  <button id="order-btn" className="uzi__order-btn mobile">
                    <a href={linkItem} className="uzi__item-link">Подробнее</a>
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

export default MobileCatalogItem