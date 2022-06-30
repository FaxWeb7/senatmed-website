import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Catalog from './pages/Catalog/Catalog';
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CatalogItem from './components/screens/Catalog/CatalogItem';
import { CtgList } from './utils/CtgList';
import Error from './components/screens/404/Error'
import Terms from './components/screens/TermsOfUse/Terms'
import Privacy from './components/screens/PrivacyPolicy/Privacy'
import { MainList } from './utils/MainList';
import { Fragment } from 'react'
import BrendItem from './components/screens/Catalog/BrendItem';
import BrendCatalogItem from './components/screens/Catalog/BrendCatalogItem';
import BrendCatalog from './components/screens/Catalog/BrendCatalog';


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

          {MainList.map(({ctgItem, mainLink, mainTitle}, index) => {
            return(
              <Fragment key={index}>
                <Route path={mainLink} element={<BrendCatalog ctgItem={ctgItem} mainTitle={mainTitle} />} exact />
                {ctgItem.map(({link, list, antitle}, index) => {
                  return(
                    <Fragment key={index}> 
                      {list.map(({ linkItem, images, model, subtitleItem, itemDesc, ob, gallery, oss, slider, tech, vis, pre, price, custom }, index) => {
                        return(
                            <Route key={index} path={linkItem} element={<BrendItem images={images ? images : null} model={model ? model : null} subtitleItem={subtitleItem ? subtitleItem : null} itemDesc={itemDesc ? itemDesc : null} oss={oss ? oss : null} tech={tech ? tech : null} vis={vis ? vis : null} pre={pre ? pre : null} slider={slider ? slider : null} price={price ? price : null} ob={ob ? ob : null} gallery={gallery ? gallery : null} custom={custom ? custom : null} />} exact/>
                        )
                      })}
                      <Route key={index} path={link} element={<BrendCatalogItem list={list} title={`${mainTitle} ${antitle}`} />} exact/>
                    </Fragment>
                  )
                })}
              </Fragment>
            )
            })}
            
          {CtgList.map(({link, title, titleItem, imgItem, description}, index) => {
            return(
              <Route key={index} path={link} element={<CatalogItem titleItem={titleItem} description={description} imgItem={imgItem} title={title} />} exact/>
            )
          })}
          <Route path="*" element={<Error />}/>
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
