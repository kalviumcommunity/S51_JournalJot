import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Entry.css';
import { Calendar } from 'primereact/calendar';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Entry() {
  const [date, setDate] = useState(null);
  const [editorState, setEditorState] = useState(null);

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

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="calendar">
          <div>
            Date:
            <Calendar className="calen" value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
          </div>
          
          <button className='save'>Save</button>
        </div>
        
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange} // Pass the function to handle editor state changes
        />
        <div className="title">Enter Title...</div>
      </div>
    </>
  );
}

export default Entry;
