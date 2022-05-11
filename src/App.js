import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element></Route>
        <Route path='/reviews' element></Route>
        <Route path='/contact-us' element></Route>
        <Route path='/login' element></Route>
        <Route path='*' element></Route>
      </Routes>
    </div>
  );
}

export default App;
