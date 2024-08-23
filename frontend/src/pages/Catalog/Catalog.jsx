import Background from '../../components/ui/Background'
import CatalogList from '../../components/screens/Catalog/CatalogList'
import { CtgList } from '../../utils/CtgList'

const Catalog = () => {
  document.title = 'Каталог | Сенатмед';
  document.querySelector('meta[name="description"]').content = 'Каталог ООО "Сенатмед"'
  document.querySelector('meta[name="keywords"]').content = 'акушерство, гинекология, акушерство и гинекология, офтальмологическое оборудование, офтальмология,  гибкая эндоскопия, мобильный кабинеты, нейрохирургия, урология, хирургия, Компьютерная томография, томография, диагностика, медицина, мобильные комплексы Функциональная диагностика, Реабилитация, нейрореабилитация, Ультразвуковая диагностика, УЗИ, узи, мобильный комплексы, рентгенология';
  window.scrollTo({ top: 0, behavior: 'auto' })
  return (
    <>
      <Background title="Каталог"/>
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <CatalogList list={CtgList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog