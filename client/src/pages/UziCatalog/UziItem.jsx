import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './scss/uziitem.scss'
import pre0 from '../../assets/catalog/rentgenologiya/gelpik/pre0.png';
import { useOutside } from "../../hooks/useOutside";

const UziItem = ({ images, model, subtitleItem, itemDesc, oss, slider, tech, vis, pre }) => {
  document.title = `${model} | Сенатмед`;
  document.querySelector('meta[name="description"]').content = `${model} ООО "Сенатмед"`;
  document.querySelector('meta[name="keywords"]').content = `${model}, диагностика, медицина, Ультразвуковая диагностика, УЗИ, узи`;
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

  const {ref, isShow, setIsShow} = useOutside(false)
  
  return (
    <>
      {/* <ItemBg title=""></ItemBg> */}
      {isShow && (
        <div className="modal">
          {/* <h1>hi</h1> */}
        </div>
      )}
      <section className="uzi-item">
        <div className="min-uzi-container">
          <div className="uzi-item__inner">
            <div className="uzi-item-content">
              <div className="uzi-slider-wrapper">
                <div className="slider-wrapper">
                  <Slider {...settings} className="uzi-item-slider" ref={ref}>
                    {images.map(({item}, index) => {
                      return(
                        <li className="uzi-item-slider-item" onClick={() => setIsShow(!isShow)} key={index}>{item}</li>
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
            {pre !== null &&(
              <div className="fl">
                <h1 className="fl__title">Преимущества</h1>
                <ul className="fl__list">
                  {pre.map(({ title, text }, index) => {
                    return(
                      <li className="fl__item" key={index}>
                        <img className='fl__img' src={pre0} alt='senatmed сенатмед' />
                        <div className="fl__item-content">
                          <h2 className="fl__item-title">{title}</h2>
                          <p className="fl__text">{text}</p>
                        </div>
                      </li>
                      )}
                    )}
                </ul>
              </div>
            )}
            {tech !== null &&(
              <div className="tech">
                <h1 className="tech__title">Характеристики</h1>
                <ul className="tech__list">
                  {tech.map(({ el }, index) => {
                    return(
                      <li className="tech__item" key={index}>
                        <div className="tech__line"></div>
                        <p className="tech__text">{el}</p>
                      </li>
                      )}
                    )}
                </ul>
              </div>
            )}
            {vis !== null &&(
              <div className="tech">
                <h1 className="tech__title">Режимы визуализации</h1>
                <ul className="tech__list">
                  {vis.map(({ el }, index) => {
                    return(
                      <li className="tech__item" key={index}>
                        <div className="tech__line"></div>
                        <p className="tech__text">{el}</p>
                      </li>
                      )}
                    )}
                </ul>
              </div>
            )}
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