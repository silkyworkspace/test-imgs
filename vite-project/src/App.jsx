import './App.css'
import ImageLists from './components/ImageLists/ImageLists'

function App() {

  return (
    <>
      {/* ネコだけ */}
      <ImageLists names={['cat']} />

      {/* ネコとウサギ */}
      <ImageLists names={['cat', 'rabbit']} />

      {/* ネコとウサギとイヌ */}
      <ImageLists names/>
    </>
  )
}

export default App
