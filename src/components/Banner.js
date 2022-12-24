import React from 'react';
import '../styles/Hero.css';

function Banner() {
  return (
    <div className='Banner' id='Banner' style={{textAlign: 'center', backgroundColor: '#01a4ff', color: 'white', padding: '10px 30px', position: 'relative', display: 'block'}}>
        This page is currently in progress
        <p style={{backgroundColor: 'black', borderRadius: '100%', width: 20, height: 20, position: 'absolute', right: 20, top: 10, margin: 0, cursor: 'pointer'}} onClick={function closeBanner() {document.getElementById('Banner').classList.toggle('displayNone')}}>X</p>
    </div>
    )
}
    
export default Banner