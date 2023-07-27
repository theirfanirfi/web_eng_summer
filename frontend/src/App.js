import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/HomePage'
const App = () => {
 return( 
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/home" element={<Home />} />
  </Routes>
  </BrowserRouter>

  )

}


export default App;
