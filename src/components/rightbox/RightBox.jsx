import React from "react";
import AddFriend from './AddFriend'

function RightBox(){

  var rightBoxStyles = {
    border: 'solid',
    backgroundColor: 'skyBlue',
    marginLeft: '5px'
  }
  return (
    <div style={rightBoxStyles}>
    <AddFriend/>
    <AddFriend/>
    <AddFriend/>
    </div>
  );
}

export default RightBox;
