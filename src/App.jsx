import { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [sonidoTxt, setSonidoTxt] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      activarSonido(e.key.toUpperCase());
    })
  }, [])

  const arraySonidos = [
    {
      keyCode:81,
      text:'Q',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'     
    },
        {
      keyCode: 87,
      text: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'      
    },
   {
      keyCode: 69,
      text: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'      
    },
    {
      keyCode: 65,
      text: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'      
    },
    {
      keyCode: 83,
      text: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'      
    },
    {
      keyCode: 68,
      text: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'     
    },
    {
      keyCode: 90,
      text: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' 
    },
    {
      keyCode: 88,
      text: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' 
    },
        {
      keyCode: 67,
      text: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' 
    }
  ];

  function activarSonido( selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setSonidoTxt(selector);
  }
  
  return (
    <main>
      <div id="drum-machine">
        <div id="display">
          <p>Nombre: {sonidoTxt} </p>
        </div>
        <div className='drum-pads'>
          {arraySonidos.map( (sonido) => 
            <div 
              key={sonido.src}
              onClick={() => {activarSonido(sonido.text)}}                 className='drum-pad css-button-3d--sky' 
              id={sonido.src} >
              {sonido.text}
              <audio 
                className='clip' 
                id={sonido.text} 
                src={sonido.src}></audio>
            </div> 
          )}
        </div>

      </div>
    </main>
  )
}
