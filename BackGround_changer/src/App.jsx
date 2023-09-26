import { useState } from "react";


const App = () => {
  const [color, setcolor] = useState('olive');

  const handleColorChange = (newColor) => {
    setcolor(newColor)
  }

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className=" fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white 
        px-3 py-2 rounded-2xl">
          <ColorButton color='red' onClick={() => handleColorChange('red')} />
          <ColorButton color='green' onClick={() => handleColorChange('green')} />
          <ColorButton color='blue' onClick={() => handleColorChange('blue')} />
          <ColorButton color='yellow' onClick={() => handleColorChange('yellow')} />
          <ColorButton color='pink' onClick={() => handleColorChange('pink')} />
          <ColorButton color='aqua' onClick={() => handleColorChange('aqua')} />
          <ColorButton color='Brown' onClick={() => handleColorChange('Brown')} />
          <ColorButton color='magenta' onClick={() => handleColorChange('magenta')} />

        </div>

      </div>

    </div>
  )
}

const ColorButton = ({ color, onClick }) => (
  <button
    onClick={onClick}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{ backgroundColor: color }}
  >
    {color.charAt(0).toUpperCase() + color.slice(1)}
  </button>
);


export default App;