type tweetData = {
    tweet: string;
};
  
interface tweetFormProp {
    postTweet: (value: tweetData) => void;
  }