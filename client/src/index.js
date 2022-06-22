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
import { MainList } from './pages/UziCatalog/MainList';
import BrendItem from './components/BrendItem/BrendItem';
import UziItem from './components/UziItem/UziItem';
import RenCatalog from './pages/MobileCatalog/MobileCatalog';
import NpoCatalog from './components/NpoCatalog/NpoCatalog';
import NpoItem from './components/NpoItem/NpoItem';

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
          <Route path="/catalog/mobile-complex" element={<RenCatalog />} exact/>
          {CtgList.map(({link, title, titleItem, imgItem, description}, index) => {
            return(
              <Route key={index} path={link} element={<CatalogItem titleItem={titleItem} description={description} imgItem={imgItem} title={title} />} exact/>
            )
          })}
          {MainList.map(( { uzi, mobile }, index) => {
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
                      <Route key={index} path={link} element={<BrendItem list={list} />} exact/>
                    </>
                  )
                })}
                {mobile.map(({ link, list, antitle }, index) => {
                  return(
                    <>
                      {list.map(({ linkItem, model, imgItem, description, ob, gallery, subtitle }, index) => {
                        return(
                          <Route key={index} path={linkItem} element={<NpoItem model={model} img={imgItem}description={description} ob={ob} gallery={gallery} />} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<NpoCatalog list={list} title={antitle} />} exact/>
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
