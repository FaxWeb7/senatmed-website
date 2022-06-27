import ItemBg from "../../components/ui/ItemBg"
import { MainList } from "../../utils/MainList"
import PhizCatalogList from "./PhizCatalogList"

const PhizCatalog = () => {
  document.title = 'Физиотерапия и реабилитация | Сенатмед'
  document.querySelector('meta[name="description"]').content = document.title;
  document.querySelector('meta[name="keywords"]').content = 'физиотерапия, медицина, Реабилитация, нейрореабилитация,';
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