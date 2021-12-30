import React from "react";
import "../../App.css";

const LastResults = ({ scoreTracker }) => {
  console.log(scoreTracker);

  const fifth = scoreTracker.slice(-5, -4);
  const fourth = scoreTracker.slice(-4, -3);
  const third = scoreTracker.slice(-3, -2);
  const second = scoreTracker.slice(-2, -1);
  const first = scoreTracker.slice(-1);

  return (
    <div>
      <h3>
        Victory History of the Last 5 Games <br />
        {first} - {second} - {third} - {fourth} - {fifth}
      </h3>
    </div>
  );
};

export default LastResults;
