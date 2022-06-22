import ItemBg from "../../components/ItemBg/ItemBg"
import { MainList } from "../UziCatalog/MainList"
import MobileCatalogList from "../../components/MobileCatalogList/MobileCatalogList"
import './mobilecatalog.scss'

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