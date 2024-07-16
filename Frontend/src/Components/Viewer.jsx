import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import Navbar from './Navbar';
import axios from 'axios';
import Modal from 'react-modal';
import './Viewer.css';

Modal.setAppElement('#root'); // to prevent screen readers from reading the main content when modal is open

function Viewer() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
            console.log(res.data);
            setData(res.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/deletejournal/${id}`, {
                headers: { authorization: `Bearer ${getCookie("token")}` }
            });
            navigate("/home");
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/api/updatejournal/${id}`, {
                headers: { authorization: `Bearer ${getCookie("token")}` }
            });
            navigate("/home");
        } catch (err) {
            console.log(err);
        }
    };

    const addOneDay = (dateString) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        fetcher();
    }, []);

    return (
            
        <div >
            <div className='viewer'>
            <Navbar/>       
                <div className='viewer-head'>
                    <div>{`Date: ${data && addOneDay(data.date.split("T")[0])}`}</div>
                    <p className='viewer-title'>{`${data && data.title}`}</p>
                    <div className='viewer-image'>
                    <button onClick={() => setModalIsOpen(true)} style={{ cursor: 'pointer' }} >Image</button>
                </div>
                </div>
                
                <div className='viewer-content' dangerouslySetInnerHTML={{ __html: data && data.content }}></div>
                <div className='button-container'>
                    <Link to={`/update/${id}`}>
                        <button className='viewer-update' onClick={handleUpdate}><MdEditDocument /></button>
                    </Link>
                    <button className='viewer-delete' onClick={handleDelete}><MdDelete /></button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Image Modal"
                className="modal"
                overlayClassName="overlay"
            >
                <button className="modal-close-button" onClick={() => setModalIsOpen(false)}>Close</button>
                <img src={data && data.imageUrl} alt="journal" className="modal-image" />
            </Modal>
        </div>
    );
}

export default Viewer;
