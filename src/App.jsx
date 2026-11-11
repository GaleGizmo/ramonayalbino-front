import './App.css'
import RamonayAlbinoDesktop from './assets/background-horizontal.jpg'
import RamonayAlbinoMobile from './assets/background-vertical.jpg'

function App() {
  return (
    <main className="construction-page">
      <section className="construction-card">
        <picture>
          <source media="(max-width: 640px)" srcSet={RamonayAlbinoMobile} />
          <img
            src={RamonayAlbinoDesktop}
            alt="Ilustración de una página en construcción"
          />
        </picture>
      </section>
    </main>
  )
}

export default App