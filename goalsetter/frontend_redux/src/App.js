import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Headers from './comppnents/Headers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddGoals from './pages/AddGoals';
import Notfound from './Notfound';
import Show from './pages/Show';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route path='/add-goals' element={<AddGoals />} />
          <Route path='/show' element={<Show />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
