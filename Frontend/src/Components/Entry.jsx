import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Entry.css';
import { Calendar } from 'primereact/calendar';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Entry() {
  const [date, setDate] = useState(null);
  const [editorState, setEditorState] = useState(null);
  const [titleValue, setTitleValue]=useState('')
  // const [contentValue, setContentValue]= useState('')

  useEffect(() => {
    const loadEditor = async () => {
      const { EditorState } = await import('draft-js'); // Import EditorState dynamically
      setEditorState(EditorState.createEmpty());
    };
    loadEditor();
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleTitleChange = (event)=>{
    setTitleValue(event.target.value);
  }

  // const handleContentChange = (event)=>{
  //   setContentValue(event.target.value);
  // }

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="calendar">
          <div>
            Date:
            <Calendar className="calen" value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
          </div>
          <textarea className="title" value={titleValue} onChange={handleTitleChange} placeholder='Enter Title'></textarea>
          <button className='save'>Save</button>
        </div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange} // Pass the function to handle editor state changes
        />
        {/* <textarea className='text-area' value={contentValue} onChange={handleContentChange} placeholder='Start your journey !!'></textarea> */}
      </div>
    </>
  );
}

export default Entry;
