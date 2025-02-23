import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import MyRouter from './MyRouter';


function App() {
  return (
  <div>
    <Router>
      <MyRouter />
    </Router>
  </div>

  )
}

export default App
