import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {characterAPI} from './../api/character'
const initialState: characterStateType = {
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
    },
    results: []
}

export const getCharacters = createAsyncThunk('character/getCharacters', (arg, thunkAPI) => {
    characterAPI.getCharacters()
        .then(res => {
            console.log(res.data)
            thunkAPI.dispatch(setCharacters(res.data))
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
            state = action.payload
        }

    }
})

export const characterReducer = slice.reducer
const  {setCharacters} = slice.actions

//types
export type characterStateType = {
    info: infoPageType
    results: Array<characterType>
}

type infoPageType = {
    count: number
    pages: number
    next: string,
    prev: string
}

type characterType = {
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
