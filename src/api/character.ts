import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character',
    withCredentials: true,
})

export const characterAPI = {
    getCharacters(page: number = 1) {
        return instance.get(`?page=${page}`)
    }
}
