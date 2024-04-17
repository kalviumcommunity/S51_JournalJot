import React , {useState} from 'react';
import menu from "../assets/menu.png";
import bullet from '../assets/bullet.jpg';
import number from '../assets/number.webp';
import divider from '../assets/divider.png';
import embed from '../assets/embed.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import '../Components/Main.css';

function Main() {
  const [value, onChange] = useState(new Date()); 
  const [showCalendar, setShowCalendar] = useState(false);
  const [tooltip, setTooltip] = useState('');

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleHover = (message) => {
    setTooltip(message);
  };

  const handleLeave = () => {
    setTooltip('');
  };

  return (
    <>
    <div className='main-page'>
    <div className='nav-box'>
      <div className="navbar">
        <div className='icons'>
          <button id='publish'>Publish</button>
          <button
            id='new-note'
            onMouseEnter={() => handleHover('New Note')}
            onMouseLeave={handleLeave}
          >➕</button>
          <button
            id='bold'
            onMouseEnter={() => handleHover('Bold')}
            onMouseLeave={handleLeave}
          >B</button>
          <button
            id='italic'
            onMouseEnter={() => handleHover('Italic')}
            onMouseLeave={handleLeave}
          >I</button>
          <img src={bullet} alt="Bullet" id='bullet'
            onMouseEnter={() => handleHover('Bullet')}
            onMouseLeave={handleLeave}
          />
          <img src={number} alt="Number" id='number'
            onMouseEnter={() => handleHover('Numbered')}
            onMouseLeave={handleLeave}
          />
          <img src={divider} alt="Divider" id='divider'
            onMouseEnter={() => handleHover('Divider')}
            onMouseLeave={handleLeave}
          />
          <button
            id='attach'
            onMouseEnter={() => handleHover('Attach')}
            onMouseLeave={handleLeave}
          >🔗</button>
          <img src={embed} alt="Embed" id='embed'
            onMouseEnter={() => handleHover('Embed Video')}
            onMouseLeave={handleLeave}
          />
        </div>
      </div>
      {tooltip && <div className="tooltip">{tooltip}</div>}
    </div> 
    <div className='text-box'>
      <p>Write Here...</p>
      {showCalendar ? (
            <button className='calendar' onMouseEnter={() => handleHover('Close')}
            onMouseLeave={handleLeave} onClick={toggleCalendar}>❌</button>
          ) : (
            <button className='calendar' onMouseEnter={() => handleHover('Open')}
            onMouseLeave={handleLeave} onClick={toggleCalendar}>🗓️</button>
          )}

          {showCalendar && (
            <div className='calendar-container'>
              <Calendar onChange={onChange} value={value} className='calendar' />
            </div>
          )}
    </div>
    </div>
    </>
                                 
  );
}

export default Main;
