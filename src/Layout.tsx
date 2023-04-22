
import React, { useState, useEffect } from 'react';
import Hero1 from '../src/assets/layouts/hero-1.jpg'
import { useDrag } from "react-dnd";

function Layout() {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "layout",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className="Layout" style={{overflow: "auto"}}>
      <h1>Layout Panel</h1>
      <p>Select a Layout</p>
      <div
        ref={dragRef}
      >
        <img src={Hero1} alt="fireSpot" style={{width: "60%", marginBottom: "10px", border: isDragging ? "10px solid aquamarine" : "none"}} />
      </div>
    </div>
  );
}

export default Layout;
