import About from '../../components/screens/Home/About'
import Offer from '../../components/screens/Home/Offer'
import Partners from '../../components/screens/Home/Partners'
import Range from '../../components/screens/Home/Range'
import Top from '../../components/screens/Home/Top'

const Main = () => {
  window.scrollTo({ top: 0, behavior: 'auto' })
  document.title = "Сенатмед: продажа медицинского оборудования"
  return (
    <>
      <Top />
      <About />
      <Offer />
      <Range />
      <Partners />
    </>
  )
}

export default Main