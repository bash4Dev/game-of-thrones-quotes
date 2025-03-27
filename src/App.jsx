import Container from "./components/Container"

const App = () => {
  const colors = [
    '#d4af37',
    '#e5c56c',
    '#b08d2b',
    '#d4b837',
    '#d4a637',
    '#f0e0a8',
    '#8a7d4d',
    '#cd7f32',
    '#d4c237',
    '#9c8d4a',
    '#c5a642',
    '#a89858',
    '#ffe08c'
  ];

  const colorIndex = Math.floor(Math.random() * colors.length);
  document.documentElement.style.setProperty(
    '--main-color', 
    colors[colorIndex]
  );

  return (
    <div>
      <Container />
    </div>
  )
}

export default App
