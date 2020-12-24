import axios from 'axios';

const KEY = 'your-youtube-key';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    type: 'video',
    videoEmbeddable: true,
    part: 'snippet'
  }
});
