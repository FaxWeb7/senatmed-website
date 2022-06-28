import ItemBg from "../../components/ui/ItemBg"
import { MainList } from "../../utils/MainList"
import FurnCatalogList from "./FurnCatalogList"

const FurnCatalog = () => {
  document.title = 'Медицинская мебель | Сенатмед'
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = 'медицина, мебель, медицинская мебель';
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <FurnCatalogList list={MainList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default FurnCatalog