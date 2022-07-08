import ItemBg from "../../ui/ItemBg";
import { Link } from 'react-router-dom'

const BrendCatalog = ({ ctgItem, mainTitle }) => {
  document.title = `${mainTitle} | Сенатмед`
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = `медицина, ${mainTitle}, сенатмед, senatmed`;
  window.scrollTo({ top: 0, behavior: 'auto' })
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <ul className={ctgItem.length > 2 ? "catalog__list" : "catalog__list mobile"}>
              {ctgItem.map(({ link, img }, index) => {
                return(
                  <li key={index} className="catalog__item uzi mobile" data-aos="zoom-in" data-aos-duration="700">
                    <Link to={`${link}`} className="catalog__item-pict uzi mobile" rel="noreferrer">{img}</Link>
                    <Link to={`${link}`} className="catalog__item-link uzi mobile" rel="noreferrer">подробнее</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrendCatalog