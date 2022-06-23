import ItemBg from "../../components/ItemBg/ItemBg"
import { MainList } from "../MainList"
import PhizCatalogList from "./PhizCatalogList"

const PhizCatalog = () => {
  document.title = 'Физиотерапия и реабилитация | Сенатмед'
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <PhizCatalogList list={MainList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PhizCatalog