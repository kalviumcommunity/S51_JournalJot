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
  const [showCalendar, setShowCalendar] = useState(false); // State for toggling calendar visibility

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className='text-box'>
      <div className="navbar">
        <div className='icons'>
        <button id='publish'>Publish</button>
            <button id='new-note'>➕</button>
          <button id='bold'>B</button>
          <button id='italic'>I</button>
          <img src={bullet} alt="Image" id='bullet'/>
          <img src={number} alt="Image" id='number'/>
          <img src={divider} alt="Image" id='divider'/>
          <button id='attach'>🔗</button>
          <img src={embed} alt="Image" id='embed'/>
          {/* <div className='calendar-container'> 
            {showCalendar && <Calendar onChange={onChange} value={value} />}
            <button className='calendar' onClick={toggleCalendar}>🗓️</button>     
          </div> */}

{showCalendar ? (
            <button className='calendar' onClick={toggleCalendar}>❌</button> // Close button
          ) : (
            <button className='calendar' onClick={toggleCalendar}>🗓️</button> // Calendar button
          )}
          
          {showCalendar && (
            <div className='calendar-container'>
              <Calendar onChange={onChange} value={value} className='calendar' />
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Main;
