import React from "react"


export default function ContentSection(props) {
    const buttonStyle = {
        position: 'relative', 
        bottom: '-130px', 
        right: '-180px',
        width: '40px',
        height: '40px',
        opacity: '.5'
      };
      
    return (
        <div id={"contentSection" + (props.index + 1)} style={{border: '1px solid black', width: '600px', height: '300px', margin: '0 auto', marginTop:'-1px'}}>
            <h2>Content Section {props.index + 1}</h2>
            <p>Select a Layout</p>
            <button onClick={props.addContent} style={buttonStyle}>+</button>

            {/* Hide the remove button on the first content module */}
            {(props.index !== 0 || props.numContentSections > 1) && (
            <button onClick={props.removeContent.bind(this, props.index)} style={buttonStyle}>-</button>
            )}

        </div>
    )
}
