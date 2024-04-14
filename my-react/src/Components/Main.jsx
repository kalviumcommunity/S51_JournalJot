// import React from 'react'
// import menu from "../assets/menu.png"
// import bullet from '../assets/bullet.jpg'
// import number from '../assets/number.png'
// import divider from '../assets/divider.png'
// import embed from '../assets/embed.png'
// import '../Components/Main.css'

// function Main() {
//   return (
//     <>
//     <div className='text-box'>
//         <div id='main-div'>
//             <button id='publish'>Publish</button><br />
//             <div>
//               <button id='new-note'>➕</button>
//               <img src={menu} alt="Image" className="menu2"/>
//             </div>
//         </div>
//         <div className='icons'>
//             <button id='bold'>B</button>
//             <button id='italic'>I</button>
//             <img src={bullet} alt="Image" id='bullet'/>
//             <img src={number} alt="Image" id='number'/>
//             <img src={number} alt="Image" id='divider'/>
//             <button id='attach'>🔗</button>
//             <img src={embed} alt="Image" id='embed'/>
//         </div>
//     </div>
//     </>
    
    
//   )
// }

// export default Main


import React from 'react';
import menu from "../assets/menu.png";
import bullet from '../assets/bullet.jpg';
import number from '../assets/number.webp';
import divider from '../assets/divider.png';
import embed from '../assets/embed.png';
import '../Components/Main.css';

function Main() {
  return (
    <div className='text-box'>
      <div className="navbar">
        <div className='icons'>
        <button id='publish'>Publish</button><br />
            <button id='new-note'>➕</button>
          <button id='bold'>B</button>
          <button id='italic'>I</button>
          <img src={bullet} alt="Image" id='bullet'/>
          <img src={number} alt="Image" id='number'/>
          <img src={divider} alt="Image" id='divider'/>
          <button id='attach'>🔗</button>
          <img src={embed} alt="Image" id='embed'/>
        </div>
      </div>
      {/* <div className="text-area">
      </div> */}
    </div>
  );
}

export default Main;
