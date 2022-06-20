import phillips from '../../assets/partners/phillips.webp'
import affinity50 from '../../assets/catalog/uzi/phillips/affinity-50.png'
import affinity501 from '../../assets/catalog/uzi/phillips/affinity501.jfif'
import affinity502 from '../../assets/catalog/uzi/phillips/affinity502.jfif'
import affinity503 from '../../assets/catalog/uzi/phillips/affinity503.jfif'
import affinity504 from '../../assets/catalog/uzi/phillips/affinity504.jfif'
import affinity505 from '../../assets/catalog/uzi/phillips/affinity505.webp'
import oss1 from '../../assets/catalog/uzi/phillips/oss1.webp'
import oss2 from '../../assets/catalog/uzi/phillips/oss2.webp'
import oss3 from '../../assets/catalog/uzi/phillips/oss3.webp'
import oss4 from '../../assets/catalog/uzi/phillips/oss4.webp'

export const MainList = [
  {
    uzi: [
      {
        link: "/catalog/uzi-apparats/phillips",
        img: <img className="catalog__item-img" src={phillips} alt="сенатмед senatmed" />,
        list: [
          {
            linkItem: "/catalog/uzi-apparats/phillips/affinity50",
            img: <img class="uzi__item-img" src={affinity50} alt="senatmed сенатмед" />,
            from: 'Phillips Нидерланды',
            model: 'Affinity 50',
            description: 
            <>
              <li className="uzi__description-item">Сбалансированная работа</li>
              <li className="uzi__description-item">Невероятно эффективный рабочий процесс</li>
              <li className="uzi__description-item">Высокая производительность</li>
              <li className="uzi__description-item">Сочетание комфорта и возможностей</li>
            </>,
            images: [
              {
                item: <img src={affinity501} alt="senatmed Сенатмед" />
              },
              {
                item: <img src={affinity502} alt="senatmed Сенатмед" />
              },
              {
                item: <img src={affinity503} alt="senatmed Сенатмед" />
              },
              {
                item: <img src={affinity504} alt="senatmed Сенатмед" />
              },
              {
                item: <img src={affinity505} alt="senatmed Сенатмед" />
              },
            ]
            ,
            subtitleItem: 'Ультразвуковая система',
            itemDesc: "Affiniti 50 — это инновационная ультразвуковая система, которая отвечает потребностям отделений ультразвуковой диагностики, работающих с большой нагрузкой, и позволяет своевременно получать надежные результаты.",
            oss: [
              {
                img: <img src={oss1} alt="senatmed сенатмед" className="uzi-item-oss-item-img" />,
                title: 'Сбалансированная работа',
                text: 'Вы всегда нацелены на то, чтобы предоставить своим пациентам медицинскую помощь самого высокого качества. В то же время, от вас требуется экономить время и ресурсы и принимать все больше пациентов. Чтобы удовлетворить всем этим требованиям, вам необходимо получать диагностическую информацию быстро, но не в ущерб качеству. Вам нужны специализированные функции, но без усложнения работы с системой. Вам нужна эргономичная система, но при этом она должна выдерживать ежедневную нагрузку при работе с большим потоком пациентов.'
              },
              {
                img: <img src={oss2} alt="senatmed сенатмед" className="uzi-item-oss-item-img" />,
                title: 'Невероятно эффективный рабочий процесс',
                text: 'С системой Philips Affiniti 50 рабочий процесс становится невероятно эффективным. Эта система отвечает самым насущным потребностям в быстром сканировании и эффективном получении результатов; в ней реализованы те инновационные решения, благодаря которым те, кто ценит качество изображений и надежность клинических приложений, выбирают именно ультразвуковое оборудование Philips.'
              },
              {
                img: <img src={oss3} alt="senatmed сенатмед" className="uzi-item-oss-item-img" />,
                title: 'Высокая производительность',
                text: 'Система Affiniti 50 — это сочетание превосходных рабочих характеристик и эффективного рабочего процесса. Благодаря точному формированию луча система помогает обеспечить превосходное пространственное и контрастное разрешения, высокую однородность отображения тканей, а также низкие уровни артефактов и шума на изображении. С помощью тканеспецифичных предварительных настроек (TSP) можно автоматически отрегулировать более 7500 параметров, что позволяет оптимизировать работу датчика в зависимости от конкретного типа исследования и получить изображения отличного качества.'
              },
              {
                img: <img src={oss4} alt="senatmed сенатмед" className="uzi-item-oss-item-img" />,
                title: 'Сочетание комфорта и возможностей',
                text: 'Для того чтобы соответствовать задачам ежедневной практики, при разработке системы Affiniti 50 был учтен опыт клиентов Philips. Мы хорошо понимаем проблемы, связанные с ограниченностью пространства, большим потоком пациентов, временными ограничениями и сканированием сложных пациентов. Поэтому при создании системы мы продумали каждую ее деталь, стремясь помочь вам снизить рабочую нагрузку.'
              }
            ]
          },
        ]
      },
    ]
  }
]