import React, { useState, useEffect } from 'react';
import './App.css';
import ContentSection from './ContentSection';
import Layout from './Layout';
import Hero1 from '../src/assets/layouts/hero-1.jpg'


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

  function applyContent(i : number, layout : any) {
    const newElem = new Image(600, 300);
    newElem.src=Hero1;
    let elem = document.getElementById(`contentSection${i}`)?.replaceChildren(newElem)
  }

  return (
    <div className="App">
      <div id="AppLayoutContainer">
        <div className="Layout" style={{overflow: "auto"}}>
          <h1>Layout Panel</h1>
          <p>Select a Layout</p>
            <Layout />
        </div>
      </div>
      <div id="AppTemplateContainer">
      {contentSections}
      </div>
      
      
    </div>
  );
}

export default App;
