import logo from '../../assets/icons/senatmed-logo-white.webp';

const Top = () => {
  return (
    <section className="top">
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
      <div className="container">
        <div className="top__inner">
          <div className="top__logo">
            <img src={logo} width="530px" alt="senatmed сенатмед" />
          </div>
          <div className="top__title">
            <h1 className="top__title-text">продажа медицинского оборудования</h1>
          </div>
          <div className="top__button">
            <a className="top__button-link" href="/catalog">
              посмотреть каталог
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="top__divider"></div>
    </section>
  )
}

export default Top