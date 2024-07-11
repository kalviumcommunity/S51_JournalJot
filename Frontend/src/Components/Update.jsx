import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Entry.css';
import { Calendar } from 'primereact/calendar';
import Editor from './Editor'
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function Update() {
    const [date, setDate] = useState(null);
    const [editorState, setEditorState] = useState(null);
    const [titleValue, setTitleValue]=useState('')
    const [content, setContent] = useState('');
    const navigate = useNavigate()
    const {id} = useParams();
    const [data , setData] = useState();

    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    const formatDate = (dateString) => {
        const dateObj = new Date(dateString); // Parse the ISO 8601 string
        return dateObj.toLocaleDateString('en-US', { // Format according to 'dd/mm/yy'
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
      };

    const fetcher = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/api/getjournalbyid/${id}`,{headers:{authorization:`Bearer ${getCookie("token")}`}})
          console.log(res.data)
          setContent(res.data[0].content)
          setTitleValue(res.data[0].title)
          setDate(res.data[0].date)
          setData(res.data[0])
        }catch (err){
          console.log(err)
        }
      }
    useEffect(() => {
      const loadEditor = async () => {
        const { EditorState } = await import('draft-js'); // Import EditorState dynamically
        setEditorState(EditorState.createEmpty());
      };
      fetcher()
      loadEditor();
    }, []);
  
    function getCookie(name) {
      let cookieArray = document.cookie.split('; ');
      let cookie = cookieArray.find((row) => row.startsWith(name + '='));
      return cookie ? cookie.split('=')[1] : null;
  }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
        axios.patch(`http://localhost:3000/api/updatejournal/${id}`,{
          title:titleValue,content:content,date:date , email : getCookie("email")},{headers:{authorization:`Bearer ${getCookie("token")}`}})
     .then((response) =>{ console.log(response.data);
    navigate(`/viewer/${id}`)})
    .catch((error) => console.error(error))
    }
  
    const onEditorStateChange = (editorState) => {
      setEditorState(editorState);
    };
  
    const handleTitleChange = (event)=>{
      setTitleValue(event.target.value);
    }
  
    const handleQuill = (data)=>{
      console.log(data)
      setContent(data)
    }
  
  
    return (
      <>
        <Navbar className="nav-entry"/>
        <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="calendar">
            <div className='Calen'>
              Date:{date ? `${date.split("T")[0]}` : `no date selected`}
              {/* <Calendar className="calen" value={date}  dateFormat="dd/mm/yy" /> */}
            </div>
            <textarea className="title" value={titleValue} onChange={handleTitleChange} placeholder='Enter Title'></textarea>
            <button className='save' type='submit'>Save</button>
          </div>
          <Editor value={content} onChange={handleQuill} />
        </div>
        </form>
      </>
    );
}

export default Update