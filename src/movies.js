import axios from 'axios';
require('dotenv').config();
const key = process.env.REACT_APP_MOVIEDB_API_KEY;

export function getMovies() {
        return axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/popular?api_key=` + `${key}` + `&language=en-US&page=1`,
        }).then((response) => {
            return response;
        }).catch(function (error) {
            return error;
        })
}
