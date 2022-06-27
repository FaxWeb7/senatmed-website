import ItemBg from "../../components/ui/ItemBg"
import { MainList } from "../../utils/MainList"
import MobileCatalogList from "./MobileCatalogList"
import './scss/mobilecatalog.scss'

const MobileCatalog = () => {
  document.title = 'Мобильные кабинеты | Сенатмед'
  document.querySelector('meta[name="description"]').content = `Мобильные кабинеты ООО "Сенатмед"`;
  document.querySelector('meta[name="keywords"]').content = 'мобильный кабинеты, медицина, мобильные комплексы';
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <MobileCatalogList list={MainList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileCatalog