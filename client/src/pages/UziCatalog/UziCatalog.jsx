import UziCatalogList from "./UziCatalogList"
import ItemBg from "../../components/ui/ItemBg"
import { MainList } from "../../utils/MainList"
import './scss/uzicatalog.scss'

const UziCatalog = () => {
  document.title = 'Ультразвуковая диагностика | Сенатмед'
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = `медицина, диагностика, Ультразвуковая диагностика, УЗИ, узи`;
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