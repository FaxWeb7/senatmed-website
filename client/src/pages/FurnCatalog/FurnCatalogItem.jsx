import ItemBg from "../../components/ui/ItemBg"

const FurnCatalogItem = ({ list, title }) => {
  document.title = `Медицинская мебель ${title} | Сенатмед`
  return (
    <>
      <ItemBg title={`Медицинская мебель ${title}`} />
      <section className="uzi">
        <div className="container">
          <div className="uzi__inner">
          <ul className="uzi__list">
            {list.map(({ linkItem, img, model, description }, index) => {
                return(
                  <li className="uzi__list-item" key={index}>
                    <a href={linkItem} className="uzi__item-pict">{img}</a>
                    <h2 className="uzi__item-title min">{model}</h2>
                    <ul className="uzi__description-list" style={{marginTop: "10px"}}>
                      {description}</ul>
                    <button id="order-btn" className="uzi__order-btn">
                      <a href={linkItem}className="uzi__item-link">Подробнее</a>
                    </button>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default FurnCatalogItem