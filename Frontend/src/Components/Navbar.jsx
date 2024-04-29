import React from 'react'
import "./Navbar.css"
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, RadioGroup, Stack, Radio, Button } from '@chakra-ui/react'; // Import necessary Chakra UI components
import menu from "../assets/menu (1).png"

function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to track whether drawer is open or closed


  return (
    <>
    <nav>
        <div className='profile'>👤</div>
        <h1>Journal Jot</h1>
        <img className='menu' src={menu} alt="" />
    </nav>

    
    </>
  )
}

export default Navbar