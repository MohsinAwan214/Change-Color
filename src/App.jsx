import './App.css'
// ColorChanger.js
import React, { useState } from 'react';

const ColorChanger = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const changeColor = (color) => {
        setBackgroundColor(color);
    };

    return (
      <div style={{display:'flex',justifyContent:'center',height:'100vh',width:'100vw',textAlign:'center'}}>

        <div style={{ backgroundColor, minHeight: '100vh',width:'100vw',transition: 'background-color 0.5s',}}>
            <h1 className='heading'>Change Background Color</h1>
            <div className='box'>
            <button className='a b' onClick={() => changeColor('red')}>Red</button>
            <button className='a c' onClick={() => changeColor('green')}>Green</button>
            <button className='a d' onClick={() => changeColor('blue')}>Blue</button>
            <button className='a e' onClick={() => changeColor('yellow')}>Yellow</button>
            <button className='a f' onClick={() => changeColor('Gray')}>Gray</button>
            </div>
        </div>
      </div>
    );
};




function App() {

  return (
    <div>
<ColorChanger />
    </div>
  )
    
    
  
}

export default App


