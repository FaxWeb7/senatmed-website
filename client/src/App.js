import AOS from 'aos';
import './app.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Mail from './components/Mail/Mail';


const App = ({ children }) => {
  AOS.init()
  return (
    <>
      <div className="wrapper" id="wrapper">
        <Header />
        <main className='main'>
        {children}
        </main>
        <Mail />
        <Footer />
      </div>
    </>
  )
}

export default App