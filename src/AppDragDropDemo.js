import './App.css';
import { useState } from "react";


  function Card() {
    const [isDragging, setIsDragging] = useState(false);

    function handleDragStart(e) {
      setIsDragging(true);
      const data = JSON.stringify({ type: "card" });
      e.dataTransfer.setData("text/plain", data);
    }

    function handleDragEnd(e) {
      setIsDragging(false);
      e.dataTransfer.clearData();
    }

    return (
      <div 
        className="card"
        style={{
          backgroundColor: isDragging ? "#fbb" : "palegoldenrod"
        }}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Card
      </div>
    );
  }

  function Box({ card, moveCard }) {
    const [isOver, setIsOver] = useState(false);

    function handleDragOver(e) {
      if (e.dataTransfer.types[0] === "text/plain") {
        setIsOver(true);
        e.preventDefault();
      }
    }

    function handleDrop(e) {
      const dataJSON = e.dataTransfer.getData("text/plain");
      let data;
      try {
        data = JSON.parse(dataJSON);
      } catch {}
      if (data && data.type === "card") {
        moveCard();
      }
    }
  

    function handleDragLeave() {
      setIsOver(false);
    }

    return (
      <div 
        className="box"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12)" }}
      >
        {card ? <Card /> : "Box"}
      </div>
    );
  }

  export default function AppDragDropDemo() {
    const [index, setIndex] = useState(1);
  
    function moveCard(i) {
      setIndex(i);
    }
  
    return (
      <div className="app">
        <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
        <Box card={index === 2} moveCard={moveCard.bind(null, 2)}></Box>
        <Box card={index === 3} moveCard={moveCard.bind(null, 3)}></Box>
      </div>
    );
  }
  