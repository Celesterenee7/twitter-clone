import React from "react";
import PropTypes from 'prop-types';

const newTweetFormStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

function NewTweetForm(props){
  let _messages = null;

  function handleNewTweetFormSubmission(event) {
    event.preventDefault();
    props.onNewTweetCreation({messages: _messages.value});
    _messages.value = '';
  }

  return (
    <div style={newTweetFormStyles}>
    <form onSubmit={handleNewTweetFormSubmission}>
    <textarea
    id='tweet'
    ref={(textarea) => {_messages = textarea;}}/>
    <br></br>
    <button type='submit'>Post!</button>
    </form>
    </div>
  );
}

NewTweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;
