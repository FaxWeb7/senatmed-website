import React from 'react'

const PhizCatalogList = ({ list }) => {
  return (
    <ul className="catalog__list mobile">
      {list.map(({ phiz }, index) => {
        return(
          <>
            {phiz.map(({ link, img },index) => {
              return(
                <li key={index} className="catalog__item uzi mobile" data-aos="zoom-in" data-aos-duration="700">
                  <a href={link} className="catalog__item-pict uzi mobile" rel="noreferrer">{img}</a>
                  <a href={link} className="catalog__item-link uzi mobile" rel="noreferrer">подробнее</a>
                </li>
              )
            })}
          </>
        )
      })}
    </ul>
  )
}

export default PhizCatalogList