import './App.scss'
import { Banner } from './Components/Banner/Banner'
import { Destination } from './Components/Desination/Destination'
import { Introduce } from './Components/Introduce/Introduce'
import Navbar from './Components/Navbar/Navbar'
import { Portiforlio } from './Components/Portfolio/Portiforlio'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <Introduce />
      <Destination />
      <Portiforlio />
    </div>
  )
}

export default App
