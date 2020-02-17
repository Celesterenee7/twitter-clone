import React from "react";

const newTweetFormStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

function NewTweetForm(){
  let _tweet = null;

  function handleNewTweetFormSubmission(event) {
    event.preventDefault();
    console.log(_tweet.value);
    _tweet.value = '';
  }

  return (
    <div style={newTweetFormStyles}>
    <form onSubmit={handleNewTweetFormSubmission}>
    <textarea
    id='tweet'
    ref={(textarea) => {_tweet = textarea;}}/>
    <br></br>
    <button type='submit'>Post!</button>
    </form>
    </div>
  );
}

export default NewTweetForm;
