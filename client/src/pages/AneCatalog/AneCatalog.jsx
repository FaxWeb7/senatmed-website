import ItemBg from "../../components/ui/ItemBg"
import { MainList } from "../../utils/MainList"
import AneCatalogList from "./AneCatalogList"

const AneCatalog = () => {
  document.title = 'Анестезиология | Сенатмед'
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = 'медицина, анестезиология';
  return (
    <>
      <ItemBg title="Выберите бренд" />
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <AneCatalogList list={MainList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AneCatalog