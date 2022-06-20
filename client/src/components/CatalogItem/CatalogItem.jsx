import ItemBg from '../ItemBg/ItemBg'

const CatalogItem = ({ title, titleItem, description, imgItem }) => {
  document.title = `${title} | Сенатмед`;
  return (
    <>
      <ItemBg title={titleItem}/>
      <section className="catalog-page">
        <div className="container">
          <div className="catalog-page__inner">
            {imgItem}
            {description}
          </div>
        </div>
      </section>
    </>
  )
}

export default CatalogItem