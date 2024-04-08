import React from 'react'
import menu from "../assets/menu.png"
import bullet from '../assets/bullet.jpg'
import '../Components/Main.css'

function Main() {
  return (
    <div>
        <div id='main-div'>
            <button id='publish'>Publish</button><br />
            <button id='new-note'>➕</button>
            <button className="menu1">
                <img src={menu} alt="Image" className="menu2"/>
            </button>
        </div>
        <h1>Title</h1>
        <div>
            <button id='bold'>B</button>
            <button id='italic'>I</button>
            <button className="menu1"><img src={bullet} alt="Image" id='bullet'/></button>
            <button id='number'></button>
            <button id='divider'></button>
            <button id='attach-files'></button>
            <button id='embed-video'></button>
        </div>
    </div>
    
  )
}

export default Main