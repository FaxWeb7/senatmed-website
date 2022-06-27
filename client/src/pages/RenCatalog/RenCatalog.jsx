import ItemBg from "../../components/ui/ItemBg"
import RenCatalogList from "./RenCatalogList"
import { MainList } from "../../utils/MainList"

const RenCatalog = () => {
  document.title = 'Рентгенология | Сенатмед'
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = `рентгенология, рентген`;
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <RenCatalogList list={MainList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default RenCatalog