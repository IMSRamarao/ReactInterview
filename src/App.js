import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import CountryStateSelection from './Components/InterviewQuestion1';
import MaxCharFinder from './Components/InterviewQuestion2';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/CountryStateSelection'>CountryStateSelection</Link>
        </li>
        <li>
          <Link to='/MaxCharFinder'>MaxCharFinder</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/CountryStateSelection' element={<CountryStateSelection />} exact/>
      <Route path='MaxCharFinder' element={<MaxCharFinder />} />
      <Route path='/about' element={<About />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
