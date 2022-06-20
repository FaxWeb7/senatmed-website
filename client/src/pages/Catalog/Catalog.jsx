import Background from '../../components/Background/Background'
import CatalogList from '../../components/CatalogList/CatalogList'
import { CtgList } from './CtgList'

const Catalog = () => {
  document.title = 'Каталог | Сенатмед';
  return (
    <>
      <Background title="Каталог"/>
      <div className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <CatalogList list={CtgList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog