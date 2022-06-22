import "./npoitem.scss";
import ItemBg from "../ItemBg/ItemBg";

const NpoItem = ({ model, img, description, ob, gallery }) => {
  document.title = `${model} | Сенатмед`;
  return (
    <>
      <ItemBg title={model} />
      <section className="npoitem">
        <div className="container">
          <div className="npoitem__inner">
            <div className="npoitem__top">
              {img}
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
                      <li className="npo__gallery-item">
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

export default NpoItem;
