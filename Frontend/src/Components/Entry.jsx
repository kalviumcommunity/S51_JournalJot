import React , {useState} from 'react'
import Navbar from './Navbar'
import "./Entry.css";
import { Calendar } from 'primereact/calendar';
        

function Entry() {

  const [date, setDate] = useState(null);
  return (
    <>
      <Navbar/>
      <div className='content'>
        <div className='calendar'>
        Date:<Calendar className='calen' value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        </div>
        {/* <div className='title'>Enter Title...</div>     */}
      </div>
    </>
  )
}

export default Entry