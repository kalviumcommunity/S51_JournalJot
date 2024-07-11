import React ,{useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import axios from "axios"
import './Viewer.css'

function Viewer() {
    const {id} = useParams();
    const [data , setData] = useState();

    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }

    const fetcher = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/api/getjournalbyid/${id}`,{headers:{authorization:`Bearer ${getCookie("token")}`}})
          console.log(res.data)
          setData(res.data[0])
        }catch (err){
          console.log(err)
        }
      }
        const navigate = useNavigate();
      const handledelete = async () => {
        try {
          const res = await axios.delete(`http://localhost:3000/api/deletejournal/${id}`,{headers:{authorization:`Bearer ${getCookie("token")}`}})
        //   setData(res.data[0])
          navigate("/home")
        }catch (err){
          console.log(err)
        }
      }

      const handleupdate = async () => {
        try {
          const res = await axios.update(`http://localhost:3000/api/deletejournal/${id}`,{headers:{authorization:`Bearer ${getCookie("token")}`}})
        //   setData(res.data[0])
          navigate("/home")
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
        fetcher()
      },[])
  return (
    <>
    {/* <Navbar/> */}
    <div className='viewer'>
        <div className='viewer-head'>
            <div>{`Date : ${data&&addOneDay(data.date.split("T")[0])}`}</div>
            <p className='viewer-title'>{`${data&&data.title}`}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data&&data.content }}></div>
        <div className='button-container'>
            <Link to={`/update/${id}`}><button className='viewer-update' onClick={handleupdate}>Update</button></Link>
            <button className='viewer-delete' onClick={handledelete}>Delete</button>
        </div>
    </div>
    </>
  )
}

export default Viewer