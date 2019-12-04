import axios from 'axios';

const KEY = 'AIzaSyBSoVtgkFsQc2hOWyp2QfsbO5DlXrFA0jk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});