import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button } from '@chakra-ui/react';
import menu from "../assets/ham.png";
import close from "../assets/close.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

function Navbar() {  

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');
  const [isProfileModal , setProfileModal]=useState(false);
  const [profilePic, setProfilePic] = useState('');

  const handleProfileClick = () => {
    setProfileModal(true);
  }
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

  const handleCloseProfileModal = () => {
    setProfileModal(false);
  }
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}
const navigate = useNavigate()

const Submit = (e) => {
  e.preventDefault()
  setCookie('token', '',0);
  setCookie('email', '',0);
  navigate('/')
}
  useEffect(()=>{
    const fetcher = async () => {
      try {
          const res = await axios.get(`http://localhost:3000/api/getprofile/${getCookie("email")}`, {
              headers: { authorization: `Bearer ${getCookie("token")}` }
          });
          console.log(res)
          setProfilePic(res.data[0].ProfilePic);
      } catch (err) {
          console.log(err);
      }
  }
  fetcher()
  },[])

  return (
    <>
      <nav className='navbar'> 
        <div className='profile' onClick={handleProfileClick}><img src={profilePic} alt="profilepic" /></div>
        <h1 className='head'>Journal Jot</h1>
        <img className='menu' src={menu} alt="" onClick={onOpen} />
      </nav>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><p id='dashboard'>Dashboard <img className='close' onClick={onClose} src={close} alt="" /></p></DrawerHeader>
          <DrawerBody>
            <Link to='/home'><p>Home</p></Link>
            <Link to='/entry'><p>New Entry</p></Link>
            <Link to='/privacy'><p>Privacy Policy</p></Link>
            <Link to='/about'><p>About Us</p></Link>
            <Link to='/'><p>Landing page</p></Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={isProfileModal} onClose={handleCloseProfileModal}>
        <ModalOverlay />
        <ModalContent className='profile1' style={{ width: '12vw' }}>
          {/* <ModalHeader>Profile</ModalHeader> */}
          <ModalCloseButton className='close'/>
          <ModalBody>
            <Link to='/editprofile'>
              <Button className='editprofile-button' colorScheme="blue" mr={3} onClick={handleCloseProfileModal}>
                Edit Profile
              </Button>
            </Link>
            <Button className='logout-button' colorScheme="red" mr={3} onClick={handleCloseProfileModal}>
              <button onClick={Submit}>Log Out</button>
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      
    </>
  )
}

export default Navbar;
