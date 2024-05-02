import React, { useState } from 'react';
import "./Navbar.css";
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import menu from "../assets/ham.png";
import close from "../assets/close.png";
import { Link } from 'react-router-dom';

function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');


  return (
    <>
      <nav>
        <div className='profile'>👤</div>
        <h1 className='head'>Journal Jot</h1>
        <img className='menu' src={menu} alt="" onClick={onOpen} />
      </nav>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><p id='dashboard'>Dashboard <img className='close' onClick={onClose} src={close} alt="" /></p></DrawerHeader>
          <DrawerBody>
            <Link to='/main'><p>Home</p></Link>
            <Link to='/entry'><p>New Entry</p></Link>
            <p onClick={() => openModal('privacy')}>Privacy Policy</p>
            <p onClick={() => openModal('about')}>About Us</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      
    </>
  )
}

export default Navbar;
