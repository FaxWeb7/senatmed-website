import { Link } from 'react-router-dom'

const CatalogList = ({list}) => {
  return (
    <ul className="catalog__list">
      {list.map(({ link, img, title }, index) => {
        return(
          <li key={index} className="catalog__item" data-aos="zoom-in" data-aos-duration="700">
            <Link to={`${link}`} className="catalog__item-pict">{img}</Link>
            <Link to={`${link}`} className="catalog__item-title-link"><h3 className="catalog__item-title">{title}</h3></Link>
            <Link to={`${link}`} className="catalog__item-link">подробнее</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CatalogList