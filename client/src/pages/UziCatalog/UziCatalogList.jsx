const UziCatalogList = ({ list }) => {
  return (
    <ul className="catalog__list mobile">
      {list.map(({ uzi }, index) => {
        return(
          <>
            {uzi.map(({ link, img },index) => {
              return(
                <li key={index} className="catalog__item uzi" data-aos="zoom-in" data-aos-duration="700">
                  <a href={link} className="catalog__item-pict uzi" rel="noreferrer">{img}</a>
                  <a href={link} className="catalog__item-link uzi" rel="noreferrer">подробнее</a>
                </li>
              )
            })}
          </>
        )
      })}
    </ul>
  )
}

export default UziCatalogList