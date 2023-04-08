import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ContentSection from './ContentSection';

function App() {
  let contentSections: React.ReactElement[] = [];
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
            />
        );
      };

  return (
    <div className="App">
      {contentSections}
    </div>
  );
}

export default App;
