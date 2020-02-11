import React from "react";
import Bio from "./Bio";
import Title from "./Title"

function LeftBox(){

  var leftBoxStyles = {
    backgroundColor: 'coral',
    border: 'solid',
    textAlign: 'left',
    marginRight: '10px'
  }
  return (
    <div style={leftBoxStyles}>
    <Title/>
    <Bio/>
    </div>
  );
}

export default LeftBox;
