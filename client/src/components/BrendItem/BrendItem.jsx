import ItemBg from "../ItemBg/ItemBg"

const BrendItem = ({ list }) => {
  document.title = "УЗИ-аппараты | Сенатмед"
  return (
    <>
    <ItemBg title="УЗИ-аппараты" />
      <section className="uzi">
        <div className="container">
          <div className="uzi__inner">
            <ul className="uzi__list">
              {list.map(({ linkItem, img, from, model, description  }, index) => {
                return(
                  <li className="uzi__list-item" key={index}>
                    <a href={linkItem} className="uzi__item-pict">
                      {img}
                    </a>
                    <h5 className="uzi__item-from">{from}</h5>
                    <h2 className="uzi__item-title">{model}</h2>
                    <ul className="uzi__description-list" style={{marginTop: "10px"}}>
                      {description}
                    </ul>
                    <button id="order-btn" className="uzi__order-btn"><a href={linkItem} className="uzi__item-link">Подробнее</a></button>
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

export default BrendItem