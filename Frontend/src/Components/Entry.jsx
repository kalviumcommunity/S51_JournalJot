import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Entry.css';
import { Calendar } from 'primereact/calendar';
import Editor from './Editor';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import app from '../Firebase.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';

function Entry() {
  const [date, setDate] = useState(null);
  const [editorState, setEditorState] = useState(null);
  const [titleValue, setTitleValue] = useState('');
  const [content, setContent] = useState('');
  const storage = getStorage(app);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEditor = async () => {
      const { EditorState } = await import('draft-js');
      setEditorState(EditorState.createEmpty());
    };
    loadEditor();
  }, []);

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setIsLoading(true);
      const storageRef = ref(storage, `/image/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on("state_changed",
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setUrl(downloadUrl);
            setIsLoading(false);
          });
        }
      );
    }
  }

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      axios.post('http://localhost:3000/api/addjournal', {
        title: titleValue,
        content: content,
        date: date,
        email: getCookie('email'),
        imageUrl: url
      }, {
        headers: { authorization: `Bearer ${getCookie("token")}` }
      })
        .then((response) => {
          console.log(response.data);
          navigate('/home');
        })
        .catch((error) => console.error(error));
    } else {
      console.error('Image URL is not set');
    }
  }

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  }

  const handleQuill = (data) => {
    setContent(data);
  }

  return (
    <>
      <Navbar className="nav-entry" />
      <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="calendar">
            <div className='Calen'>
              Date:
              <Calendar className="calen" value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
            </div>
            <textarea className="title" value={titleValue} onChange={handleTitleChange} placeholder='Enter Title'></textarea>
            <input type="file" onChange={handleFileChange} />
            {isLoading && <p>File upload <b>{progress}%</b></p>}
            <button className='save' type='submit' disabled={isLoading}>Save</button>
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
