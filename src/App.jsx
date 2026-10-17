import SplashCursor from './components/SplashCursor.jsx';

const LINKS = [
  {
    href: 'https://sudoku.auer.page',
    title: 'Sudoku',
    text: 'Klassisches Zahlengitter mit vier Schwierigkeitsgraden.',
    icon: '9'
  },
  {
    href: 'https://10.auer.page',
    title: 'Zehner-Paare',
    text: 'Streiche Zahlenpaare weg: gleiche Zahlen oder Summe 10.',
    icon: '10'
  },
  {
    href: 'https://wind.auer.page',
    title: 'Wind Südtirol',
    text: 'Live-Wind, Luftqualität und Pollen als animiertes Seidenband.',
    icon: '〰'
  }
];

export default function App() {
  return (
    <>
      <SplashCursor zIndex={0} />
      <main className="page">
        <header className="hero">
          <h1>auer.page</h1>
          <p>Kleine Spiele und Werkzeuge. Beweg die Maus – oder den Finger.</p>
        </header>
        <ul className="cards">
          {LINKS.map(link => (
            <li key={link.href}>
              <a className="card" href={link.href}>
                <span className="card__icon" aria-hidden="true">{link.icon}</span>
                <span className="card__body">
                  <span className="card__title">{link.title}</span>
                  <span className="card__text">{link.text}</span>
                </span>
                <span className="card__arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
        <footer className="credits">
          Hintergrund: <a href="https://reactbits.dev">SplashCursor</a> von David Haz (React Bits), basierend auf{' '}
          <a href="https://github.com/PavelDoGreat/WebGL-Fluid-Simulation">WebGL Fluid Simulation</a> von Pavel Dobryakov
          {' · '}
          <a href="/THIRD_PARTY_LICENSES.txt">Lizenzen</a>
        </footer>
      </main>
    </>
  );
}
