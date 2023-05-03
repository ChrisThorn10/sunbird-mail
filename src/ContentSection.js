import React from "react"
import { useDrop } from "react-dnd";


export default function ContentSection(props) {
    const buttonStyle = {
        position: 'relative', 
        bottom: '-240px', 
        right: '-180px',
        width: '40px',
        height: '40px',
        opacity: '.5'
      };

      const [{ isOver }, dropRef] = useDrop({
        accept: "layout",
        drop: (item) => props.applyContent(props.index +1, item),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      });
      
    return (
        <div  
            style={{border: isOver ? "5px solid aquamarine" : '1px solid black', width: '600px', height: '300px', margin: '0 auto', marginTop:'-1px', backgroundColor: isOver ? "#C5FFEB" : "#FFFFFF"}}
            ref={dropRef}
            >
            <div style={{height: 0}}>
                {/* Hide the remove button only on the first content module */}
                    <button onClick={props.addContent} style={buttonStyle}>+</button>
                {(props.index !== 0 || props.numContentSections > 1) && (
                    <button onClick={props.removeContent.bind(this, props.index)} style={buttonStyle}>-</button>
                    )}
            </div>
            <div id={"contentSection" + (props.index + 1)}>
                <h2>Content Section {props.index + 1}</h2>
                <p>Select a Layout</p>
            </div>
            
        </div>
        
    )
}
