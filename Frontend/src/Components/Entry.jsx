import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Entry.css';
import { Calendar } from 'primereact/calendar';
import Editor from './Editor'
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function Entry() {
  const [date, setDate] = useState(null);
  const [editorState, setEditorState] = useState(null);
  const [titleValue, setTitleValue]=useState('')
  const [content, setContent] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const loadEditor = async () => {
      const { EditorState } = await import('draft-js'); 
      setEditorState(EditorState.createEmpty());
    };
    loadEditor();
  }, []);

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}

  const handleSubmit=(e)=>{
    e.preventDefault();
      axios.post('http://localhost:3000/api/addjournal',{
        title:titleValue,content:content,date:date , email : getCookie('email')},{headers:{authorization:`Bearer ${getCookie("token")}`}})
   .then((response) =>{ console.log(response.data);
  navigate('/home')})
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
            Date:
            <Calendar className="calen" value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
          </div>
          <textarea className="title" value={titleValue} onChange={handleTitleChange} placeholder='Enter Title'></textarea>
          <button className='save' type='submit'>Save</button>
        </div>
        <div className='text-entry'>
         <Editor value={content} onChange={handleQuill} />
        </div>
      </div>
      </form>
    </>
  );
}

export default Entry;