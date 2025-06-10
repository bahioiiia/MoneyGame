import { useState } from 'react'
import Game from './components/Game';
import MainPanel from './components/MainPanel';
import Banknotes from './components/Banknotes';
import SelectedBanknotes from './components/SelectedBanknotes';

import './App.css'

function App() {

  return (
      <div class="container">

        <header class="element mainPanel">
          <MainPanel />
        </header>

        <div class="element banknotes">
          <Banknotes />
        </div>

        <div class="element selectedBanknotes">
          <SelectedBanknotes />
        </div>
      <footer class="footer">
        <p>Made with ❤️ for Solomiia</p>
      </footer>
    </div>
  )
}

export default App
