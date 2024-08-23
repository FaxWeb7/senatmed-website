import { Link } from 'react-router-dom';
import Logo from '../../../assets/icons/senatmed-logo.webp';

const Header = () => {
  return (
    <header className="header-wrapper" id="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <div className="header__top-phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              +7 (926) 579-03-93
            </div>
            <div className="header__top-mail">
              <a className="header__top-link" href="mailto:senatmed.info@yandex.ru">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                senatmed.info@yandex.ru
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/"><img src={Logo} alt="senatmed Сенатмед" /></Link> 
            </div>
            <div className="header__catalog">
              <Link className="header__catalog-link" to="/catalog">каталог</Link>
            </div>
            <div className="header__mobile-nav">
              <span className="header__mobile-text">Выбрать страницу</span>
              <span className="header__mobile-button">
                <button className="header__menu-btn" onClick={() => {document.querySelector('.header__mobile-nav').classList.toggle('opened')}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>
                
              </span>
              <ul className="header__mobile-list">
                <div className="header__li-wrapper">
                  <li className="header__mobile-item"><Link className="header__mobile-link" to="/catalog">каталог</Link></li>
                  <li className="header__mobile-item"><Link className="header__mobile-link" to="/terms-of-use">пользовательское соглашение</Link></li>
                  <li className="header__mobile-item"><Link className="header__mobile-link" to="/privacy-policy">политика конфиденциальности</Link></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header