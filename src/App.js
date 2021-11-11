import React, { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Routes } from './components/Routes'

function App() {

  const [ darkTheme, setDarkTheme ] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-blue-400 min-h-screen">
        < Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        < Routes />
        < Footer />
      </div>
    </div>
  );
}

export default App;