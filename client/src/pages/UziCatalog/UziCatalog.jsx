import UziCatalogList from "./UziCatalogList"
import ItemBg from "../../components/ItemBg/ItemBg"
import { MainList } from "../MainList"
import './scss/uzicatalog.scss'

const UziCatalog = () => {
  document.title = 'Ультразвуковая диагностика | Сенатмед'
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <UziCatalogList list={MainList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default UziCatalog