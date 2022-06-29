import ItemBg from "../../components/ui/ItemBg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pre0 from '../../assets/catalog/rentgenologiya/gelpik/pre0.png';

const FurnItem = ({ images, model, description, pre, tech, price }) => {
  document.title = `${model} | Сенатмед`;
  document.querySelector('meta[name="description"]').content = `${model} ООО "Сенатмед"`;
  document.querySelector('meta[name="keywords"]').content = `${model}, медицина, мебель, медицинская мебель`;
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  
  return (
    <>
      <ItemBg title={`${model}`} />
      <section className="uzi-item">
        <div className="min-uzi-container">
          <div className="uzi-item__inner">
            <div className="uzi-item-content">
              <div className="uzi-slider-wrapper">
                <div className="slider-wrapper">
                  <Slider {...settings} className="uzi-item-slider">
                    {images.map(({item}, index) => {
                      return(
                        <li className="uzi-item-slider-item" key={index}>{item}</li>
                      )
                    })}
                  </Slider>
                </div>
              </div>
              <div className="uzi-item-desc">
                <div className="desc-wrapper">
                  <h1 className="uzi-item-title">{model}</h1>
                  <h3 className="uzi-item-price">{price}</h3>
                </div>
                <p className="uzi-item-text">{description}</p>
                <a className="uzi-item-link" href="#mail">Свяжитесь с нами</a>
              </div>
            </div>
            {pre !== null &&(
              <div className="fl">
                <h1 className="fl__title">Преимущества</h1>
                <ul className="fl__list">
                  {pre.map(({ title, text }, index) => {
                    return(
                      <li className={text !== null ? 'fl__item' : 'fl__item aic' } key={index}>
                        <img className='fl__img' src={pre0} alt='senatmed сенатмед' />
                        <div className="fl__item-content">
                          <h2 className={text !== null ? 'fl__item-title' : 'fl__item-title aic'}>{title}</h2>
                          {text ? <p className="fl__text">{text}</p> : null}
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
          </div>
        </div>
      </section>
    </>
  )
}

export default FurnItem