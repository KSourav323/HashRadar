import Landing from "./pages/landing.jsx"


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './style/App.css'

function App(){

  return (
        <Router>
            <Routes>
              <Route path="/" element={<Landing/>} />
            </Routes>
        </Router>
  )
}

export default App
 