import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://affinity-app-93155edf85e1.herokuapp.com/'
})

export default instance;