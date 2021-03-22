import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character',
})

export const characterAPI = {
    getCharacters(name: string = '') {
        return instance.get(`?page=1&name=${name}`)
    },

    changePage(page: number, name: string = '') {
        return instance.get(`?page=${page}&name=${name}`)
    },
    getFavorites(ids: string) {
        return instance.get(`/${ids}`)
    },
    searchName(name: string) {
        return instance.get(`?name=${name}`)
    }
}
