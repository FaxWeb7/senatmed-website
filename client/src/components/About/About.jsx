const About = () => {
  return (
    <section className="about">
      <div className="min-container">
        <div className="about__inner">
          <div className="about__content">
            <h1 className="about__content-title">Сенатмед – вершины медицинской эволюции</h1>
            <p className="about__content-text">ООО “Сенатмед” в индивидуальном порядке решает каждую поставленную задачу. <br /> Продажа медицинского оборудования осуществляется на выгодных условиях: цена уточняется по запросу, так как мы не делаем лишних наценок. <br /> Поставки осуществляются напрямую из Москвы или от производителя – отправляйте запрос на электронную почту или звоните по телефону +7 (926) 579-03-93 для связи с нашим менеджером.</p>
            <a className="about__content-link" href="/catalog">посмотреть каталог</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About