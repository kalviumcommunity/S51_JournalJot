import React , {useState} from 'react';
import menu from "../assets/menu.png";
import bullet from '../assets/bullet.jpg';
import number from '../assets/number.webp';
import divider from '../assets/divider.png';
import embed from '../assets/embed.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import Calendar CSS
import '../Components/Main.css';

function Main() {
  const [value, onChange] = useState(new Date()); // State for the calendar value

  return (
    <div className='text-box'>
      <div className="navbar">
        <div className='icons'>
        <button id='publish'>Publish</button><br />
            <button id='new-note'>➕</button>
          <button id='bold'>B</button>
          <button id='italic'>I</button>
          <img src={bullet} alt="Image" id='bullet'/>
          <img src={number} alt="Image" id='number'/>
          <img src={divider} alt="Image" id='divider'/>
          <button id='attach'>🔗</button>
          <img src={embed} alt="Image" id='embed'/>
        </div>
      </div>
      <div className='calendar-container'> 
          <Calendar onChange={onChange} value={value} /> 
      </div>
    </div>
  );
}

export default Main;
