import { useState } from 'react'
import './App.css'
import Canvas from './components/canvas/Canvas'
import Webpage from './components/webpage/Webpage'

function App() {
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);

  const handleClick = () => {
    setIsCanvasVisible(e=> !e);
    document.body.style.cursor = "crosshair";
  }

  return (
    <>
      <label htmlFor="isAnnotateNeeded" style={{display: 'flex', alignItems: 'center', gap: "1em", zIndex:'4', border:"2px solid red", backgroundColor:'yellow', position:'absolute', top:'0', left:'0'}}>
        <div id='isAnnotateNeeded'>Annotator</div>
        <input type="checkbox" onClick={handleClick}/>
      </label>
      <Webpage/>
      {isCanvasVisible && <Canvas/>}
    </>
  )
}

export default App
