import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Catalog from './pages/Catalog/Catalog';
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatalogItem from './components/CatalogItem/CatalogItem';
import { CtgList } from './pages/Catalog/CtgList';
import UziCatalog from './pages/UziCatalog/UziCatalog';
import Error from './components/Error/Error'
import Terms from './components/Terms/Terms'
import Privacy from './components/Privacy/Privacy'
import { MainList } from './pages/MainList';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
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
          {CtgList.map(({link, title, titleItem, imgItem, description}, index) => {
            return(
              <Route key={index} path={link} element={<CatalogItem titleItem={titleItem} description={description} imgItem={imgItem} title={title} />} exact/>
            )
          })}
          {MainList.map(( { uzi, mobile, rent, phiz }, index) => {
            return(
              <>
                {uzi.map(({ link, list }, index) => {
                  return(
                    <>
                      {list.map(({ linkItem, images, model, subtitleItem, itemDesc, oss, slider }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<UziItem images={images} model={model} subtitleItem={subtitleItem} itemDesc={itemDesc} oss={oss} slider={slider}/>} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<UziCatalogItem list={list} />} exact/>
                    </>
                  )
                })}
                {mobile.map(({ link, list, antitle }, index) => {
                  return(
                    <>
                      {list.map(({ linkItem, model, imgItem, description, ob, gallery }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<MobileItem model={model} img={imgItem}description={description} ob={ob} gallery={gallery} />} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<MobileCatalogItem list={list} title={antitle} />} exact/>
                    </>
                  )
                })}
                {rent.map(({ link, list, antitle }, index) => {
                  return(
                    <>
                      {list.map(({ linkItem, images, model, itemDesc, pre, tech }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<RenItem model={model} images={images} description={itemDesc} pre={pre} tech={tech} />} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<RenCatalogItem list={list} title={antitle} />} exact/>
                    </>
                  )
                })}
                {phiz.map(({ link, list, antitle }, index) => {
                  return(
                    <>
                      {list.map(({ linkItem, images, model, itemDesc, pre, tech, price }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<PhizItem model={model} images={images} description={itemDesc} pre={pre} tech={tech} price={price} />} exact/>
                        )
                      })} 
                      <Route key={index} path={link} element={<PhizCatalogItem list={list} title={antitle} />} exact/>
                    </>
                  ) 
                })}
              </>
            )
          })}
          <Route path="*" element={<Error />}/>
        </Routes>
      </App>
    </BrowserRouter>
    
  </React.StrictMode>
);
