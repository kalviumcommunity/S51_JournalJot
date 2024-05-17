import React, { useState } from 'react';
import "./Navbar.css";
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button } from '@chakra-ui/react';
import menu from "../assets/ham.png";
import close from "../assets/close.png";
import { Link } from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

function Navbar() {  

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');
  const [isProfileModal , setProfileModal]=useState(false);

  const handleProfileClick = () => {
    setProfileModal(true);
  }

  const handleCloseProfileModal = () => {
    setProfileModal(false);
  }

  return (
    <>
      <nav> 
        <div className='profile' onClick={handleProfileClick}>👤</div>
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
              Log Out
            </Button>
          </ModalBody>
          {/* <ModalFooter> 
            <Button onClick={handleCloseProfileModal}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>

      
    </>
  )
}

export default Navbar;
