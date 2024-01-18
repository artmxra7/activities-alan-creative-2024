import axios from 'axios';

export const API_KEY = 'api_key=d0c781ee59f64c7d04f3d3c42b5abbdd';
export const URLPOPULARMOVIE = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
export const URLTVSHOW = 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&';
export const URLNOWPLAYING = 'https://api.themoviedb.org/3/movie/now_playing?';
export const URLSEARCHMOVIE = 'https://api.themoviedb.org/3/search/movie?query=';
export const URLSEARCHTVSHOW = 'https://api.themoviedb.org/3/search/tv?query=';
export const URLMOVIECREDITS = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?`
}
export const URLMOVIE = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}?`
}
export const URLTVSHOWCREDITS = (id) => {
    return `https://api.themoviedb.org/3/tv/${id}/credits?`
}
export const URLTVSHOWS = (id) => {
    return `https://api.themoviedb.org/3/tv/${id}?`
}

export const instance = axios.create([
    {
        baseURL: '',
    }
]);


