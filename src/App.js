import React from 'react'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState} from './context/firebase/FirebaseState'

function App() {
  return (
    <FirebaseState>
        <AlertState>
          <Router>
            <Navbar />
            <Alert />
              <div className="container pt-4">
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/about' element={<About />} />
                </Routes>
            </div>
          </Router>
        </AlertState>
      </FirebaseState>
  );
}

export default App;
