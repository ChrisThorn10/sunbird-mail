
import React, { useState, useEffect } from 'react';
import { useDrag } from "react-dnd";
import { isPropertySignature } from 'typescript';


const Layout = (props : any) => {

  // Drag Hook.  When a layout is dragged over a content section it passes the properties of that item
  const [{ isDragging }, dragRef] = useDrag({
    type: "layout",
    item: { props },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });

  return (
      <div ref={dragRef}>
          <img src={props.imgSrc} alt={props.imgAlt} style={{width: "60%", marginBottom: "10px", border: isDragging ? "10px solid aquamarine" : "none"}} />
      </div>      
  );
}

export default Layout;
