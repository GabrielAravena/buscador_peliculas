import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=ad0fd6f342d01de1eb17149748487b82';
const baseURLById = 'https://api.themoviedb.org/3/movie/';

export const apiCall = (url, data, headers, method) => axios({
    method, 
    url: baseURL + url,
    data,
    headers
});

export const apiCallById = (url, data, headers, method) => axios({
    method, 
    url: baseURLById + url + '?api_key=ad0fd6f342d01de1eb17149748487b82',
    data,
    headers
});
