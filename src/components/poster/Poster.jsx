import './Poster.css'

const POSTER_ALT =
  'Cartel de Ramona y Albino Christmas Fest, 12 de diciembre de 2026 en O Marquiño. ' +
  '13:00 apertura de puertas. 14:00 concierto del dúo Ramona y Albino. ' +
  '15:30 concurso de lucs navideños. 16h karaoke. Adquiere ya tu entrada.'

function Poster() {
  return (
    <section className="poster" aria-label="Cartel de Ramona y Albino Xmas Fest">
      <img
        className="poster-image"
        src="/XMASFEST.jpg"
        alt={POSTER_ALT}
        width="1190"
        height="1683"
        fetchPriority="high"
      />
    </section>
  )
}

export default Poster
