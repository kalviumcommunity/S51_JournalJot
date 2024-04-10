import React from 'react'
import menu from "../assets/menu.png"
import bullet from '../assets/bullet.jpg'
import number from '../assets/number.png'
import divider from '../assets/divider.png'
import embed from '../assets/embed.png'
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
            <button ><img src={bullet} alt="Image" id='bullet'/></button>
            <button><img src={number} alt="Image" id='number'/></button>
            <button><img src={number} alt="Image" id='divider'/></button>
            <button id='attach'>📎</button>
            <button><img src={embed} alt="Image" id='embed'/></button>
            <div id='begin'>Begin journey</div>
        </div>
    </div>
    
  )
}

export default Main