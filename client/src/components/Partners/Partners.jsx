import phillips from '../../assets/partners/phillips.webp'
import siemens from '../../assets/partners/siemens.webp'
import healthcare from '../../assets/partners/phillips.webp'
import mindray from '../../assets/partners/mindray.webp'
import samsung from '../../assets/partners/samsung.webp'
import medrad from '../../assets/partners/medrad.webp'
import italray from '../../assets/partners/italray.webp'
import medonica from '../../assets/partners/medonica.webp'
import sanosite from '../../assets/partners/sonosite.webp'
import hologic from '../../assets/partners/hologic.webp'
import xstrahl from '../../assets/partners/xstrahl.webp'
import olympus from '../../assets/partners/olympus.webp'
import renmedprom from '../../assets/partners/renmedprom.webp'
import drager from '../../assets/partners/drager.webp'
import gelpik from '../../assets/partners/gelpik.webp'
import leonid from '../../assets/partners/leonid.webp'
import storz from '../../assets/partners/storz.webp'
import medin from '../../assets/partners/medin.webp'
import mrt from '../../assets/partners/mrp.webp'
import topcon from '../../assets/partners/topcon.webp'
import merivaara from '../../assets/partners/merivaara.webp'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <section className="partners" id="partners">
      <div className="container" data-aos="fade-down" data-aos-duration="700" data-aos-anchor="#partner-anchor">
        <div className="partners__inner">
          <div className="partners__title"><h1 className="partners__title-text" id="partner-anchor">Наши партнёры</h1></div>
          <ul className="partners__list">
            <li className="partners__list-item"><img className="partners__list-img" src={phillips} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={siemens} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={healthcare} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={mindray} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={samsung} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={medrad} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={italray} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={medonica} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={sanosite} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={hologic} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={xstrahl} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={olympus} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={renmedprom} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={drager} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={gelpik} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={leonid} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={storz} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={medin} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={mrt} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={topcon} alt="senatmed сенатмед" /></li>
            <li className="partners__list-item"><img className="partners__list-img" src={merivaara} alt="senatmed сенатмед" /></li>
          </ul>
        </div>
        <Slider {...settings} className="partners__list-mini">
          <li className="partners__list-item"><img className="partners__list-img" src={phillips} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={siemens} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={healthcare} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={mindray} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={samsung} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={medrad} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={italray} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={medonica} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={sanosite} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={hologic} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={xstrahl} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={olympus} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={renmedprom} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={drager} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={gelpik} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={leonid} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={storz} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={medin} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={mrt} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={topcon} alt="senatmed сенатмед" /></li>
          <li className="partners__list-item"><img className="partners__list-img" src={merivaara} alt="senatmed сенатмед" /></li>
        </Slider>
      </div>
    </section>
  )
}

export default Partners