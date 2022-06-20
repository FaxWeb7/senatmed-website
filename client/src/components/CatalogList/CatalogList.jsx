const CatalogList = ({list}) => {
  return (
    <ul className="catalog__list">
      {list.map(({ link, img, title }, index) => {
        return(
          <li key={index} className="catalog__item" data-aos="zoom-in" data-aos-duration="700">
            <a href={link} className="catalog__item-pict" rel="noreferrer">{img}</a>
            <a href={link} className="catalog__item-title-link" rel="noreferrer"><h3 className="catalog__item-title">{title}</h3></a>
            <a href={link} className="catalog__item-link" rel="noreferrer">подробнее</a>
          </li>
        )
      })}
    </ul>
  )
}

export default CatalogList