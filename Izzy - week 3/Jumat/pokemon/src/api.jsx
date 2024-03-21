import axios from 'axios'
export const pokemon = 'https://pokeapi.co/api/v2/pokemon'

export const get = axios.create([
    {
        baseURL: '',
    }
]);
