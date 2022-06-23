import ItemBg from "../../components/ItemBg/ItemBg"
import { MainList } from "../MainList"
import MobileCatalogList from "./MobileCatalogList"
import './scss/mobilecatalog.scss'

const MobileCatalog = () => {
  document.title = 'Мобильные кабинеты | Сенатмед'
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