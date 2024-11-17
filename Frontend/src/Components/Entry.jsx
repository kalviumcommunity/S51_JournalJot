import React, { useState } from 'react';
import Navbar from './Navbar';
import './Entry.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import app from '../Firebase.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'quill-emoji';
import 'quill-emoji/dist/quill-emoji.css'; // Ensure you have this line to import emoji styles

const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register({
  'formats/emoji': EmojiBlot,
  'modules/emoji-shortname': ShortNameEmoji,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/emoji-textarea': TextAreaEmoji,
}, true);

function Entry() {
  const [date] = useState(new Date()); // Initial date set to current date
  const [titleValue, setTitleValue] = useState('');
  const [content, setContent] = useState('');
  const storage = getStorage(app);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Format date to DD-MM-YY
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'header': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['emoji'],
      ['link'],
      ['clean']
    ],
    'emoji-toolbar': true,
    'emoji-textarea': true,
    'emoji-shortname': true,
  }

  const formats = [
    'font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'color', 'background', 'list', 'indent', 'align', 'link', 'image', 'clean', 'emoji'
  ]

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
        },(error) => {
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
    console.log("Save button clicked");
      axios.post('http://localhost:3000/api/addjournal', {
        title: titleValue,
        content: content,
        date: date,
        email: getCookie('email'),
        imageUrl: url || null
      }, {
        headers: { authorization: `Bearer ${getCookie("token")}` }
      })
        .then((response) => {
          console.log(response.data);
          navigate('/home');
        })
        .catch((error) => console.error(error));
  }

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  }

  const handleQuill = (value) => {
    setContent(value);
  }

  return (
    <>
      <Navbar className="nav-entry" />
      <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="calendar">
            <div className='Calen'>
              Date: <span>{formattedDate}</span> 
            </div>
            <textarea 
              className="title" 
              value={titleValue} 
              onChange={handleTitleChange} 
              placeholder='Enter Title'
            ></textarea>
            <input type="file" onChange={handleFileChange} />
            {isLoading && <p>File upload <b>{progress}%</b></p>}
            <button className='save' type='submit' disabled={isLoading}>Save</button>
          </div>
          <div className='text-entry'>
            <ReactQuill
              value={content}
              onChange={handleQuill}
              modules={modules}
              formats={formats}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Entry;
