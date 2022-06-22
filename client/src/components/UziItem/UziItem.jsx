import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './uziitem.scss'

const UziItem = ({ images, model, subtitleItem, itemDesc, oss, slider }) => {
  document.title = `${model} | Сенатмед`;
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const settings2 = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 2800,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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
              {oss != null && (
                <>
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
                </>
              )}
            </div>
            {slider != null && (
              <>
              <div className="slider2-wrapper">
                <h1 className="slider-titlee">Датчики для сканера</h1>
                <p className="slider-textt">Высокотехнологичные датчики обеспечивают высокое качество визуализации по всей глубине сканирования. К сканеру производятся датчики с различными параметрами. В зависимости от Ваших потребностей мы предоставим по Вашему запросу информацию о датчиках, подходящих по частотам, углу сканирования и другим характеристикам.</p>
              </div>
              <Slider {...settings2} className="uzi-item-slider2">
                {slider.map(({ img, title, text }, index) => {
                  return(
                    <li className="slider2-item">
                      {img}
                      <h2 className="slider2-title">{title}</h2>
                      <h4 className="slider2-text">{text}</h4>
                    </li>
                  )
                })}
              </Slider>
              </>
              )}
          </div>
        </div>
      </section>
    </>
  )
}

export default UziItem