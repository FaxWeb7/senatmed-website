import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './uziitem.scss'
import ItemBg from "../ItemBg/ItemBg";

const UziItem = ({ images, model, subtitleItem, itemDesc, oss }) => {
  document.title = `${model} | Сенатмед`;
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  
  return (
    <>
      {/* <ItemBg title=""></ItemBg> */}
      <section className="uzi-item">
        <div className="min-uzi-container">
          <div className="uzi-item__inner">
            <div className="uzi-item-content">
              <div className="uzi-slider-wrapper">
                <div className="slider-wrapper">
                  <Slider {...settings} className="uzi-item-slider">
                    {images.map(({item}, index) => {
                      return(
                        <li className="uzi-item-slider-item">{item}</li>
                      )
                    })}
                  </Slider>
                </div>
              </div>
              <div className="uzi-item-desc">
                <div className="desc-wrapper">
                  <h1 className="uzi-item-title">{model}</h1>
                  <h2 className="uzi-item-subtitle">{subtitleItem}</h2>
                </div>
                <p className="uzi-item-text">{itemDesc}</p>
                <a className="uzi-item-link" href="#mail">Свяжитесь с нами</a>
              </div>
            </div>
            <div className="uzi-item-oss">
              <h1 className="uzi-item-oss-title">Особенности</h1>
              <ul className="uzi-item-oss-list">
                {oss.map(({ img, title, text }, index) => {
                  return(
                    <li className="uzi-item-oss-item" key={index}>
                      {img}
                      <h2 className="uzi-item-oss-item-title">{title}</h2>
                      <p className="uzi-item-oss-item-text">{text}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UziItem