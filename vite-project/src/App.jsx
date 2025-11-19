import './App.css'
import AccordionList from './components/AccordionMenu/AccordionMenu'
import ImageLists from './components/ImageLists/ImageLists'
import MixBlendMode from './components/MixBlendMode/MixBlendMode'
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

      <AccordionList />

      <MixBlendMode />
    </>
  )
}

export default App
