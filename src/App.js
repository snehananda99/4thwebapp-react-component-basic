import React from 'react';

// import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Homepage from './component/Home/Homepage';
import Category from './component/Category/Category';
import About from './component/About/About';
import Servicepage from './component/Service/Servicepage';
import Contact from './component/Contact/Contact';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
    <div className='app'>
      {/* App */}
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Servicepage />}/>
        <Route path='/about' element={<Contact />}/>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App