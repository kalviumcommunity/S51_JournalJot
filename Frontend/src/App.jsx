import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home.jsx';
import Main from './Components/Main.jsx';
import Entry from './Components/Entry.jsx';
import Privacy from './Components/Privacy.jsx'
import About from './Components/About.jsx';
import Profile from './Components/Profile.jsx';
import EditProfile from './Components/EditProfile.jsx';
import Viewer from './Components/Viewer.jsx';
import Update from './Components/Update.jsx';


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
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/viewer/:id' element={<Viewer/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
         
    </Router>
    </>
  )
}

export default App
