import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useState, useEffect } from "react";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [budget, setBudget] = useState(100);
  const [currentFourIndex, setCurrentIndex] = useState(0);
  const [plates, setPlates] = useState([]);
  const [isEatenArray, setIsEatenArray] = useState([]);

  

  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((sushisArray) => {
      setSushis(sushisArray);
      setIsEatenArray(Array(sushisArray.length).fill(false));
    })

  }, []);
  


  function handleCanEat(price, key) {
    if (isEatenArray[key] === false && budget - price >= 0) {
      setBudget(budget - price);

      const updatedIsEatenArray = [...isEatenArray];
      updatedIsEatenArray[key] = true;

      setIsEatenArray(updatedIsEatenArray);
      setPlates([...plates, 1]);
    }

  }

  function iterateThroughSushi() {
    setCurrentIndex(currentFourIndex + 4);
  }




  return (
    <div className="app">
      <SushiContainer sushis={sushis} isEatenArray={isEatenArray} handleCanEat={handleCanEat} iterateThroughSushi={iterateThroughSushi} currentFourIndex={currentFourIndex}/>
      <Table budget={budget} plates={plates} />
    </div>
  );
}

export default App;
