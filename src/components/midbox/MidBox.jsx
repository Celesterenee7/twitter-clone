import React from "react";
import AddPost from './AddPost'

function MidBox(){

  var midBoxStyles = {
    border: 'solid',
    backgroundColor: 'pink',
    marginLeft: '5px',
    marginRight: '5px',
  }
  
  return (
    <div style={midBoxStyles}>
    <form>
    <label>
    Search:
    <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
    </form>
    <AddPost/>
    <AddPost/>
    <AddPost/>
    </div>
  );
}

export default MidBox;
