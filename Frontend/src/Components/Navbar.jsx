import React,{useState} from 'react'
import "./Navbar.css"
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, RadioGroup, Stack, Radio, Button } from '@chakra-ui/react'; // Import necessary Chakra UI components
import menu from "../assets/menu (1).png"
import close from "../assets/close.png"
import {Link} from 'react-router-dom'

// import * as React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to track whether drawer is open or closed

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // }

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // }


  return (
    <>
    <nav>
        <div className='profile'>👤</div>
        <h1>Journal Jot</h1>
        <img className='menu' onClick={onOpen}src={menu} alt="" />
    </nav>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><p id='dashboard'>Dashboard <img className='close' onClick={onClose} src={close} alt="" /></p></DrawerHeader>
          <DrawerBody>
          <p>All Entries</p>
          <Link to='/entry'><p>New Entry</p></Link>
          <p>Calendar</p>  
          {/* Render the MUI date picker calendar */}
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      


    
    </>
  )
}

export default Navbar