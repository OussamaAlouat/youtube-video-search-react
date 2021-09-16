import axios from 'axios'
const KEY = 'AIzaSyDfsNqszZ4UmRpnCRQDHDDBOP3C4NHB6IQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResult: 5,
        key: KEY
    }
});