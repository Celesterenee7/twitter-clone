import React from "react";

function AddFriend(){
  var addFriendStyles = {
    backgroundColor: 'skyBlue',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  }
  var addButtonStyle = {
    color: 'red',
    align: 'center'

  }


  return (
    <div style={addFriendStyles}>
    <h2> This is a name </h2>
    <p> here is some info about this potential new friend </p>
    <button style={addButtonStyle}> Click me </button>
    </div>
  );
}

export default AddFriend;
