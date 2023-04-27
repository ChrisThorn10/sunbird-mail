
import React, { useState, useEffect } from 'react';
import Hero1 from '../src/assets/layouts/hero-1.jpg'
import { useDrag } from "react-dnd";
import { isPropertySignature } from 'typescript';

const Layout = () => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "layout",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
      <div ref={dragRef}>
        <img src={Hero1} alt="Hero1" style={{width: "60%", marginBottom: "10px", border: isDragging ? "10px solid aquamarine" : "none"}} />
      </div>
  );
}

export default Layout;
