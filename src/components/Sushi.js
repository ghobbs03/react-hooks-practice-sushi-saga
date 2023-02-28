import React from "react";

function Sushi({name, img_url, price, isEatenArray, handleCanEat, index}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleCanEat(price, index)}>
        {/* Tell me if this sushi has been eaten! */}
        {isEatenArray[index] ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
