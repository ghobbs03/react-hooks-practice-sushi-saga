import React from "react";

function MoreButton({iterateThroughSushi}) {
  return <button onClick={() => iterateThroughSushi()}>More sushi!</button>;
}

export default MoreButton;
