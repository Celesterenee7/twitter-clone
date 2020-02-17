import React from "react";
import Bio from "./Bio";
import Title from "./Title"

function LeftBox(){

  var leftBoxStyles = {
    border: 'solid',
    marginBottom: '5px'
  }
  return (
    <div style={leftBoxStyles}>
    <Title/>
    <Bio/>
    </div>
  );
}

export default LeftBox;
