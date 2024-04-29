import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home.jsx';
import Main from './Components/Main.jsx';
import Entry from './Components/Entry.jsx';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} /> 
        <Route path='/entry' element={<Entry/>}/>
      </Routes>
         
    </Router>
    </>
  )
}

export default App
