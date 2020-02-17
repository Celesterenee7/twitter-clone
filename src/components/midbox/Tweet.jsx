import React from 'react';
import PropTypes from 'prop-types';

function Tweet(props){
  return (
    <div>
      <h3>{props.messages}</h3>
    </div>
  );
}

Tweet.propTypes = {
  messages: PropTypes.string.isRequired,

};

export default Tweet;
