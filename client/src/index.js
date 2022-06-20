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
          {CtgList.map(({link, title, titleItem, imgItem, description}, index) => {
            return(
              <Route key={index} path={link} element={<CatalogItem titleItem={titleItem} description={description} imgItem={imgItem} title={title} />} exact/>
            )
          })}
          {MainList.map(( { uzi }, index) => {
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
              </>
            )
          })}
          <Route path="*" element={<Error />}/>
        </Routes>
      </App>
    </BrowserRouter>
    
  </React.StrictMode>
);
