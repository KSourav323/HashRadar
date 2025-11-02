import Landing from "./pages/landing.jsx"
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './style/App.css'

function App(){

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
            <Routes>
              <Route path="/" element={<Landing/>} />
            </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
 