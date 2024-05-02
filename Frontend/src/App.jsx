import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home.jsx';
import Main from './Components/Main.jsx';
import Entry from './Components/Entry.jsx';
import Privacy from './Components/Privacy.jsx'
import About from './Components/About.jsx'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Main />} /> 
        <Route path='/entry' element={<Entry/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
         
    </Router>
    </>
  )
}

export default App
