import React from "react";
import Tweet from "./Tweet";
var masterTweetList = [
  {
    messages: 'Thato and Haley',

  },
  {
    messages: 'Sleater and Kinney',

  },
  {
    messages: 'Imani & Jacob',

  }
];

function TweetList(){
  return (
    <div>
    {masterTweetList.map((tweet, index) =>
      <Tweet messages={tweet.messages} />
    )}
    </div>
  );
}

export default TweetList;
