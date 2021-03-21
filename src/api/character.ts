import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character',
    withCredentials: true,
    headers: {"Access-Control-Allow-Origin": "*"}

})

export const characterAPI = {
    getCharacters(page: number = 1) {
        return instance.get(`?page=${page}`)
    }
}
