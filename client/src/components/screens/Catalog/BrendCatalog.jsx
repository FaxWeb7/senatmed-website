import ItemBg from "../../ui/ItemBg";

const BrendCatalog = ({ ctgItem, mainTitle }) => {
  document.title = `${mainTitle} | Сенатмед`
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = `медицина, ${mainTitle}, сенатмед, senatmed`;
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
                    <a href={link} className="catalog__item-pict uzi mobile" rel="noreferrer">{img}</a>
                    <a href={link} className="catalog__item-link uzi mobile" rel="noreferrer">подробнее</a>
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