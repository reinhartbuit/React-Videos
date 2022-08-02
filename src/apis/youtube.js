const KEY = 'AIzaSyAMd-DqAR0tSBWR3Sz0AW3ZULAkFsa8q_s';

import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
