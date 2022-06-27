import ItemBg from "../../components/ui/ItemBg"
import { MainList } from "../../utils/MainList"
import HirrCatalogList from "./HirrCatalogList"

const HirrCatalog = () => {
  document.title = 'Хирургия | Сенатмед'
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = 'хирургия, медицина';
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <HirrCatalogList list={MainList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HirrCatalog