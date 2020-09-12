import axios from 'axios';

const KEY = 'AIzaSyABg7YOL7-1Z740vtnpBswKKm49MXSzYVg';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
export default youtube;