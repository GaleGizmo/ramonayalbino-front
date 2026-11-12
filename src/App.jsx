import { useState } from 'react'
import './App.css'
import RamonayAlbinoDesktop from './assets/background-horizontal.jpg'
import RamonayAlbinoMobile from './assets/background-vertical.jpg'
import Poster from './components/poster/Poster'

function App() {
  const [registerActive, setRegisterActive] = useState(false)
  return (
    <main className="main-page">
    
        <picture>
          <source media="(min-width: 768px)" srcSet={RamonayAlbinoDesktop} />
          <img
            src={RamonayAlbinoMobile}
            alt="Ilustración de una página en construcción"
            className='app-background'
          />
        </picture>
        {!registerActive && <Poster></Poster>}

    </main>
  )
}

export default App