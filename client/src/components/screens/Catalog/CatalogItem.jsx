import ItemBg from '../../ui/ItemBg'

const CatalogItem = ({ title, titleItem, description, imgItem }) => {
  document.title = `${title} | Сенатмед`;
  document.querySelector('meta[name="description"]').content = `${title} ООО "Сенатмед"`;
  document.querySelector('meta[name="keywords"]').content = 'акушерство, гинекология, акушерство и гинекология, офтальмологическое оборудование, офтальмология,  гибкая эндоскопия, мобильный кабинеты, нейрохирургия, урология, хирургия, Компьютерная томография, томография, диагностика, медицина, мобильные комплексы Функциональная диагностика, Реабилитация, нейрореабилитация, Ультразвуковая диагностика, УЗИ, узи, мобильный комплексы, рентгенология';
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