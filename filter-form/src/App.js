import React, { useState } from 'react';
import DisplayBox from './Components/DisplayBox/index.js';
import './App.css';
import 'normalize.css';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const open = (e) => {
    if(!(e.target).closest('.form')) setIsOpen(!isOpen)
}

  return (
    <div className="app" onClick={e => open(e)}>
      <main className="app__body">
        <DisplayBox isOpen={isOpen} />
      </main>
    </div>
  );
}

export default App;
