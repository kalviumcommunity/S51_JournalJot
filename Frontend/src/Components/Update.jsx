import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Update.css';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import app from '../Firebase.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'quill-emoji';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'quill-emoji/dist/quill-emoji.css';
import Modal from 'react-modal';
import { FaRegImage } from 'react-icons/fa6';

const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register({
  'formats/emoji': EmojiBlot,
  'modules/emoji-shortname': ShortNameEmoji,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/emoji-textarea': TextAreaEmoji,
}, true);

Modal.setAppElement('#root'); // Ensure this is called once in your app

function Update() {
    const [date, setDate] = useState(null);
    const [titleValue, setTitleValue] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const storage = getStorage(app);

    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }

    const fetcher = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/getjournalbyid/${id}`, {
                headers: { authorization: `Bearer ${getCookie("token")}` }
            });
            const journalData = res.data[0];
            setContent(journalData.content);
            setTitleValue(journalData.title);
            setDate(new Date(journalData.date));
            setUrl(journalData.imageUrl);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetcher();
    }, []);

    const handleFileChange = (e) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/api/updatejournal/${id}`, {
            title: titleValue,
            content: content,
            date: date,
            email: getCookie("email"),
            imageUrl: url
        }, {
            headers: { authorization: `Bearer ${getCookie("token")}` }
        })
        .then((response) => {
            console.log(response.data);
            navigate(`/viewer/${id}`);
        })
        .catch((error) => console.error(error));
    }

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    }

    const handleQuill = (data) => {
        setContent(data);
    }

    const openModal = (e) => {
        e.preventDefault(); // Prevents the form submission
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

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

    return (
        <>
            <Navbar className="nav-entry" />
            <form onSubmit={handleSubmit}>
                <div className="content">
                    <div className="calendar">
                        <div className='Calen'>
                            Date:
                            <DatePicker 
                                className="calen" 
                                onChange={setDate} 
                                value={date} 
                                calendarIcon 
                                clearIcon 
                            />
                        </div>
                        <textarea 
                            className="title" 
                            value={titleValue} 
                            onChange={handleTitleChange} 
                            placeholder='Enter Title'
                        ></textarea>
                        <div>
                            <button title='Change Image' onClick={openModal} style={{ cursor: 'pointer' }} ><FaRegImage /></button>
                        </div>
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="modal"
                overlayClassName="overlay"
            >
                <button className="modal-close-button" onClick={closeModal}>Close</button>
                <img src={url} alt="journal" className="modal-image" />
                <input type="file" onChange={handleFileChange} />
                {isLoading && <p>File upload <b>{progress}%</b></p>}
            </Modal>
        </>
    );
}

export default Update;
