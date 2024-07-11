import React ,{useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import "./Main.css"
import symbol from "../assets/in.png"
import { Link } from 'react-router-dom'

function Main() {
  const [data,setData] = useState()
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}
  const fetcher = async () =>{
    console.log("hey")
    try {
      const res = await axios.get(`http://localhost:3000/api/getjournal/${getCookie("email")}`,{headers:{authorization:`Bearer ${getCookie("token")}`}})
      console.log(res.data ,"jes")
      setData(res.data)
    }catch (err){
      console.log(err)
    }
  }
  const  addOneDay = (dateString)=> {
    const date = new Date(dateString);
  
    date.setDate(date.getDate() + 1);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  useEffect(()=>{
    console.log("ll ")
    fetcher()
  },[])
  return (
    <>
    <Navbar/>
    <div className='main-content'>
      {data &&
        data.map((item,index)=>{
          return (
            <div className='block' key = {index}>
              <p className='main-date'>{addOneDay(item.date.split("T")[0])}</p>
              <Link to={`/viewer/${item._id}`} ><p className='main-title'>{item.title}<img className='symbol' src={symbol} alt="symbol" /></p></Link>
            </div>
          )
        })
      }
      
    </div>
    <Link to="/entry"><p className='plus'> + </p></Link>
    </>
  )
}

export default Main