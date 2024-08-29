import './App.scss'
import { Banner } from './Components/Banner/Banner'
import { Destination } from './Components/Desination/Destination'
import { Footer } from './Components/Footer/Footer'
import { Introduce } from './Components/Introduce/Introduce'
import Navbar from './Components/Navbar/Navbar'
import { Portiforlio } from './Components/Portfolio/Portiforlio'
import { Questions } from './Components/Questions/Questions'
import { Reviews } from './Components/Reviews/Reviews'
import { Subscribe } from './Components/Subscribe/Subscribe'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <Introduce />
      <Destination />
      <Portiforlio />
      <Reviews />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
