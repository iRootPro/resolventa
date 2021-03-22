import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {characterAPI} from './../api/character'
import {saveState} from "../helpers/localStorage";

const initialState: characterStateType = {
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
    },
    results: [],
    favorites: [],
    favoriteMode: false,
    search: ''
}

export const getCharacters = createAsyncThunk('character/getCharacters', (arg: string, thunkAPI) => {
    characterAPI.getCharacters(arg)
        .then(res => {
            thunkAPI.dispatch(setCharacters(res.data))
        })
        .catch(e => {
            console.log(e)
        })
})

export const changeCurrentPage = createAsyncThunk('character/changePage', (arg: searchType, thunkAPI) => {
    characterAPI.changePage(arg.page, arg.search)
        .then(res => {
            thunkAPI.dispatch(setCharacters(res.data))
        })
        .catch(e => {
            console.log(e)
        })
})

export const getFavorites = createAsyncThunk('character/getFavorite', (arg: string, thunkAPI) => {
    characterAPI.getFavorites(arg)
        .then(res => {
            thunkAPI.dispatch(setCharactersFavorite(res.data))
        })
        .catch(e => {
            console.log(e)
        })
})

export const searchByName = createAsyncThunk('character/searchByName', (arg: string, thunkAPI) => {
    characterAPI.searchName(arg)
        .then(res => {
            thunkAPI.dispatch(setCharacters(res.data))
            thunkAPI.dispatch(setSearch(arg))
        })
        .catch(e => {
            console.log(e)
        })
})

const slice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers: {
        setCharacters(state, action: PayloadAction<characterStateType>) {
            state.info = action.payload.info
            state.results = action.payload.results
            state.favoriteMode = false
        },
        addFavoriteState(state, action: PayloadAction<number>) {
            state.favorites.push(action.payload)
            saveState(state.favorites)

        },
        setCharactersFavorite(state, action: PayloadAction<Array<characterType>>) {
            if (Array.isArray(action.payload))
                state.results = action.payload
            else state.results = [action.payload]
            state.favoriteMode = true
        },
        restoreFavorites(state, action: PayloadAction<Array<number>>) {
            state.favorites = action.payload
        },
        removeFromFavorite(state, action: PayloadAction<number>) {
            const newFavorites = state.favorites.filter(fav => fav !== action.payload)
            state.favorites = newFavorites
            saveState(state.favorites)
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        }
    }
})

export const characterReducer = slice.reducer
const {setCharacters, setCharactersFavorite} = slice.actions
export const {addFavoriteState, restoreFavorites, removeFromFavorite, setSearch} = slice.actions

//types
export type characterStateType = {
    info: infoPageType
    results: Array<characterType>
    favorites: Array<number>
    favoriteMode: boolean,
    search: string
}

export type infoPageType = {
    count: number
    pages: number
    next: string,
    prev: string
}

export type characterType = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: originType
    location: locationType
    image: string
    episode: Array<string>
    url: string
    created: string
}

type originType = {
    origin: string
    url: string
}

type locationType = {
    name: string
    url: string
}

type searchType = {
    page: number
    search: string
}
