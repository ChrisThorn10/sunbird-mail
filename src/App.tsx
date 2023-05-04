import React, { useState, useEffect } from 'react';
import './App.css';
import ContentSection from './ContentSection';
import LayoutList from './LayoutList';

function App() {
  let contentSections : React.ReactElement[] = [];
  const [numContentSections, setNumContentSections] = useState(1)
  
  const addContentSection = () => {
    setNumContentSections(numContentSections + 1)
  }

  const removeContentSection = (i : number) => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Content Section?"
    )

    if (confirmBox === true) {
      contentSections.splice(i, 1)
      setNumContentSections(numContentSections - 1)
    }
  }

  for (var i = 0; i < numContentSections; i += 1) {
    contentSections.push(
      <ContentSection 
        key={i}
        index={i} 
        addContent={addContentSection} 
        removeContent={removeContentSection} 
        numContentSections={numContentSections}
        applyContent={applyContent}
        />
    );
  };

  // Function to handle change when a layout is dropped over a content section
  function applyContent(i : number, layoutInfo : any) {
    const newElem = new Image(600, 300);
    newElem.src=layoutInfo.props.imgSrc;
    let elem = document.getElementById(`contentSection${i}`)?.replaceChildren(newElem)
  }

  return (
    <div className="App">
      <div id="AppLayoutContainer">
        <LayoutList/>
      </div>
      <div id="AppTemplateContainer">
      {contentSections}
      </div>
    </div>
  );
}

export default App;
