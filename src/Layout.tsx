
import React, { useState, useEffect } from 'react';
import Hero1 from '../src/assets/layouts/hero-1.jpg'

function Layout() {
  return (
    <div className="Layout" style={{overflow: "auto"}}>
      <h1>Layout Panel</h1>
      <p>Select a Layout</p>
      <div draggable>
        <img src={Hero1} alt="fireSpot" style={{width: "60%", paddingBottom: "10px"}} />
      </div>
      <div draggable>
        <img src={Hero1} alt="fireSpot" style={{width: "60%", paddingBottom: "10px"}} />
      </div>
      <div draggable>
        <img src={Hero1} alt="fireSpot" style={{width: "60%", paddingBottom: "10px"}} />
      </div>
    </div>
  );
}

export default Layout;
