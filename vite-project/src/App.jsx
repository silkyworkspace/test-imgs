import './App.css'
import ImageLists from './components/ImageLists/ImageLists'
import TextBreak from './components/textBreak/textBreak'

function App() {

  return (
    <>
      {/* ネコだけ */}
      <ImageLists names={['cat']} />

      {/* ネコとウサギ */}
      <ImageLists names={['cat', 'rabbit']} />

      {/* ネコとウサギとイヌ */}
      <ImageLists names/>

      <TextBreak />
    </>
  )
}

export default App
