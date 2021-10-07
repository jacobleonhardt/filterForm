import React, { useState } from 'react';
import DisplayBox from './Components/DisplayBox/index.js';
import logo from './logo.svg';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="app">
      <main className="app__body">
        <DisplayBox setIsOpen={setIsOpen} isOpen={isOpen} />
      </main>
    </div>
  );
}

export default App;
