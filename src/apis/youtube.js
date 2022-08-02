import axios from 'axios';
const KEY = 'AIzaSyAMd-DqAR0tSBWR3Sz0AW3ZULAkFsa8q_s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
