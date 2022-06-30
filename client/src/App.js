import AOS from 'aos';
import './app.scss'
import Header from './components/screens/Home/Header';
import Footer from './components/screens/Home/Footer';
import Mail from './components/screens/Home/Mail';


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