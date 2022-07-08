import car from "../../../assets/offer/car.webp"
import endo from "../../../assets/offer/endoskop.webp"
import chair from "../../../assets/offer/chair.webp"
import { Link } from "react-router-dom"

const Offer = () => {
  return (
    <section className="offer">
      <div className="max-container">
        <div className="offer__inner">
          <div className="offer__title">
            <h1 className="offer__title-text">Мы предлагаем вам</h1>
          </div>
          <ul className="offer__list">
            <li className="offer__item" data-aos="fade-up" data-aos-duration="1000">
              <div className="offer__img-wrapper">
                <img className="offer__img" src={car} alt="senatmed сенатмед" />
              </div>
              <div className="offer__content" id="aos-anchor1">
                <h2 className="offer__item-title">Передвижные медицинские комплексы</h2>
                <h3 className="offer__item-text">Передвижные медицинские комплексы от компании “Сенатмед” позволяют на высоком уровне оказывать помощь в различных областях медицины в выездных условиях. Они оснащены всеми необходимыми системами жизнеобеспечения, современным, в том числе инновационным, медицинским оборудованием, медицинской мебелью, а также всем необходимым хозяйственным инвентарем. </h3>
                <Link to="/catalog/mobile-complex" className="offer__item-link">
                  подробнее
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
                <div className="just"></div>  
              </div>
            </li>
            <li className="offer__item" data-aos="fade-up" data-aos-duration="1000">
              <div className="offer__img-wrapper">
                <img className="offer__img" src={endo} alt="senatmed сенатмед" />
              </div>
              <div className="offer__content" id="aos-anchor2">
                <h2 className="offer__item-title">Эндоскопическое оборудование</h2>
                <h3 className="offer__item-text">Компания «Сенатмед» реализует эндоскопическое оборудование для обследования пищевода, желудка, ДПК, органов мочеполовой системы, прямой кишки, бронхов и т.д. В наличии представлены эндоскопы различного типа, а также видеосистемы к ним. <br /> При обращении к нам, специалисты компании помогут подготовить документы для закупки через торговую площадку в соответствии с ФЗ-44 и ФЗ-223. Также окажем помощь в выборе, доставке, установке и настройке оборудования.</h3>
                <Link to="/catalog/endoskopiya" className="offer__item-link">
                  подробнее
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
                <div className="just"></div>
              </div>
            </li>
            <li className="offer__item" style={{marginTop: -80}} data-aos="fade-up" data-aos-duration="1000">
              <div className="offer__img-wrapper">
                <img className="offer__img" src={chair} alt="senatmed сенатмед" />
              </div>
              <div className="offer__content" id="aos-anchor3">
                <h2 className="offer__item-title">Операционные столы</h2>
                <h3 className="offer__item-text">Компания «Сенатмед» реализует  медицинские столы для лечебно-диагностических организаций на выгодных условиях. У нас представлены модели практически под любую задачу, в том числе, палатные, прикроватные, процедурные, инструментальные и т.д.</h3>
                <Link to="/catalog/furniture" className="offer__item-link">
                  подробнее
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
                <div className="just"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Offer