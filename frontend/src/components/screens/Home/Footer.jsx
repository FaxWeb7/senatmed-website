const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer__list">
            <li className="footer__list-item">Полное наименование  предприятия: <h5 style={{opacity: 0.8, color: '#fff'}}>Общество с ограниченной ответственностью «СЕНАТМЕД»</h5></li>
            <li className="footer__list-item">Юридический адрес: <h5 style={{opacity: 0.8, color: '#fff'}}>108811, г. Москва, г. Московский, ул. Солнечная, д. 3 А, стр. 1, ком. 16</h5></li>
            <li className="footer__list-item">Почтовый адрес: <h5 style={{opacity: 0.8, color: '#fff'}}>108811, г. Москва, г. Московский, ул. Солнечная, д. 3 А, стр. 1, ком. 16</h5></li>
            <li className="footer__list-item">ИНН: <h5 style={{opacity: 0.8, color: '#fff'}}>7751163033</h5></li>
            <li className="footer__list-item">Телефон: <h5 style={{opacity: 0.8, color: '#fff'}}>+7 (926) 579-03-93</h5></li>
            <li className="footer__list-item">Электронная почта: <h5 style={{opacity: 0.8, color: '#fff'}}>senatmed.info@yandex.ru</h5></li>
          </ul>
          <p className="footer__text" style={{alignSelf: 'flex-end'}}>Разработка сайта <a className="footer__link" href="https://vk.com/fw_dev" target="_blank" rel="noreferrer">FaxWeb</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer