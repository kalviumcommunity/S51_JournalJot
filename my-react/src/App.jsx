import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home.jsx';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
         
    </Router>
    </>
  )
}

export default App
