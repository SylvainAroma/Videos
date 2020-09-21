import axios from "axios";

const KEY = "AIzaSyAmXGiJKgyD6tPRtChhkER74zM1bAhaU5Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
