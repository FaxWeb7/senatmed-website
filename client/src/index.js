import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Catalog from './pages/Catalog/Catalog';
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatalogItem from './components/screens/Catalog/CatalogItem';
import { CtgList } from './utils/CtgList';
import UziCatalog from './pages/UziCatalog/UziCatalog';
import Error from './components/screens/404/Error'
import Terms from './components/screens/TermsOfUse/Terms'
import Privacy from './components/screens/PrivacyPolicy/Privacy'
import { MainList } from './utils/MainList';
import UziCatalogItem from './pages/UziCatalog/UziCatalogItem';
import UziItem from './pages/UziCatalog/UziItem';
import MobileCatalog from './pages/MobileCatalog/MobileCatalog';
import MobileCatalogItem from './pages/MobileCatalog/MobileCatalogItem';
import MobileItem from './pages/MobileCatalog/MobileItem';
import RenCatalog from './pages/RenCatalog/RenCatalog';
import RenCatalogItem from './pages/RenCatalog/RenCatalogItem';
import RenItem from './pages/RenCatalog/RenItem';
import PhizCatalog from './pages/PhizCatalog/PhizCatalog';
import PhizCatalogItem from './pages/PhizCatalog/PhizCatalogItem';
import PhizItem from './pages/PhizCatalog/PhizItem';
import HirrCatalog from './pages/Hirurgiya/HirrCatalog';
import HirrCatalogItem from './pages/Hirurgiya/HirrCatalogItem';
import HirrItem from './pages/Hirurgiya/HirrItem';
import { Fragment } from 'react'

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Main />} exact/>
          <Route path="/terms-of-use" element={<Terms />} exact/>
          <Route path="/privacy-policy" element={<Privacy />} exact/>
          <Route path="/catalog" element={<Catalog />} exact/>
          <Route path="/catalog/uzi-apparats" element={<UziCatalog />} exact/>
          <Route path="/catalog/mobile-complex" element={<MobileCatalog />} exact/>
          <Route path="/catalog/rentgenologiya" element={<RenCatalog />} exact/>
          <Route path="/catalog/phiziotherapy" element={<PhizCatalog />} exact/>
          <Route path="/catalog/hirurgiya" element={<HirrCatalog />} exact/>
          {CtgList.map(({link, title, titleItem, imgItem, description}, index) => {
            return(
              <Route key={index} path={link} element={<CatalogItem titleItem={titleItem} description={description} imgItem={imgItem} title={title} />} exact/>
            )
          })}
          {MainList.map(( { uzi, mobile, rent, phiz, hirr }, index) => {
            return(
              <Fragment key={index}>
                {uzi.map(({ link, list }, index) => {
                  return(
                    <Fragment key={index}>
                      {list.map(({ linkItem, images, model, subtitleItem, itemDesc, oss, slider, tech, vis, pre }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<UziItem images={images} model={model} subtitleItem={subtitleItem} itemDesc={itemDesc} oss={oss} tech={tech ? tech : null} vis={vis ? vis : null} pre={pre ? pre : null} slider={slider}/>} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<UziCatalogItem list={list} />} exact/>
                    </Fragment>
                  )
                })}
                {mobile.map(({ link, list, antitle }, index) => {
                  return(
                    <Fragment key={index}>
                      {list.map(({ linkItem, model, imgItem, description, ob, gallery }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<MobileItem model={model} img={imgItem}description={description} ob={ob} gallery={gallery} />} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<MobileCatalogItem list={list} title={antitle} />} exact/>
                    </Fragment>
                  )
                })}
                {rent.map(({ link, list, antitle }, index) => {
                  return(
                    <Fragment key={index}>
                      {list.map(({ linkItem, images, model, itemDesc, pre, tech }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<RenItem model={model} images={images} description={itemDesc} pre={pre} tech={tech} />} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<RenCatalogItem list={list} title={antitle} />} exact/>
                    </Fragment>
                  )
                })}
                {phiz.map(({ link, list, antitle }, index) => {
                  return(
                    <Fragment key={index}>
                      {list.map(({ linkItem, images, model, itemDesc, pre, tech, price }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<PhizItem model={model} images={images} description={itemDesc} pre={pre} tech={tech} price={price} />} exact/>
                        )
                      })} 
                      <Route key={index} path={link} element={<PhizCatalogItem list={list} title={antitle} />} exact/>
                    </Fragment>
                  ) 
                })}
                {hirr.map(({ link, list, antitle }, index) => {
                  return(
                    <Fragment key={index}>
                      {list.map(({ linkItem, images, model, itemDesc, pre, tech, price }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<HirrItem model={model} images={images} description={itemDesc} pre={pre} tech={tech} price={price} />} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<HirrCatalogItem list={list} title={antitle} />} exact/>
                    </Fragment>
                  )
                })}
              </Fragment>
            )
          })}
          <Route path="*" element={<Error />}/>
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
