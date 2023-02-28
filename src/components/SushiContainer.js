import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, isEatenArray, handleCanEat, iterateThroughSushi, currentFourIndex}) {
  const sushiElements = sushis.map((sushi, index) => {
    return <Sushi key={index} name={sushi.name} img_url={sushi.img_url} price={sushi.price} isEatenArray={isEatenArray} handleCanEat={handleCanEat} index={index} />
  })


  return (
    <div className="belt">
      {sushiElements.slice(currentFourIndex, currentFourIndex + 4)}
      <MoreButton iterateThroughSushi={iterateThroughSushi} />
    </div>
  );
}

export default SushiContainer;
