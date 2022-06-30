import "./scss/mobileitem.scss";
import ItemBg from "../../components/ui/ItemBg";

const MobileItem = ({ model, images, description, ob, gallery }) => {
  document.title = `${model} | Сенатмед`;
  document.querySelector('meta[name="description"]').content = `${model} ООО "Сенатмед"`;
  document.querySelector('meta[name="keywords"]').content = `мобильные кабинеты, ${model}  медицина, мобильные комплексы`
  return (
    <>
      <ItemBg title={model} />
      <section className="npoitem">
        <div className="container">
          <div className="npoitem__inner">
            <div className="npoitem__top">
              {images}
              <div className="npoitem__content">
                <h1 className="npoitem__title">Описание</h1>
                <p className="npoitem__text">{description}</p>
              </div>
            </div>
            {ob != null && (
              <>
                <div className="npoitem__ob">
                  <h2 className="npoitem__ob-title">
                    Основное медицинское оборудование
                  </h2>
                  <ul className="npo__ob-list">
                    {ob.map(({ img, text }, index) => {
                      return(
                        <li className="npo__ob-item" key={index}>
                          {img}
                          <p className="npo__ob-text">
                            {text}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </>
            )}
            {gallery != null && (
              <div className="npoitem__gallery">
                <h1 className="npoitem__gallery-title">Галерея</h1>
                <ul className="npoitem__gallery-list">
                  {gallery.map(({ img }, index) => {
                    return(
                      <li className="npo__gallery-item" key={index}>
                        {img}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileItem;
