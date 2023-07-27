import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Component/Header';
import About from './Pages/About';
import Navbar from './Component/Navbar';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Interest from './Pages/Interest';
import Courses from './Pages/Courses';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/interests' element={<Interest/>} />
          <Route path='/course' element={<Courses/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
