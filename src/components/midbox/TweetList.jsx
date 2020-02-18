import React from "react";
import Tweet from "./Tweet";
import PropTypes from 'prop-types';

function TweetList(props){
  return (
    <div>
    {props.tweetList.map((tweet, index) =>
      <Tweet messages={tweet.messages}
      key={index} />
    )}
    </div>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
