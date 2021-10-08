import React, { useState } from 'react';
import DisplayBox from './Components/DisplayBox/index.js';
import './App.css';
import 'normalize.css';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const open = (e) => {
    setIsOpen(!isOpen)
}

  return (
    <div className="app">
      <main className="app__body">
        <DisplayBox isOpen={isOpen} open={open} />
      </main>
    </div>
  );
}

export default App;
