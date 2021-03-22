import React, {useEffect} from 'react';
import styles from './styles.module.css'
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {
    addFavoriteState,
    changeCurrentPage,
    characterType, getCharacters,
    getFavorites,
    infoPageType,
    removeFromFavorite,
} from "../../../reducers/character";
import Item from "./Item";
import Paginator from "./Paginator";

const Table = () => {
    const characters = useSelector<RootState, Array<characterType>>(state => state.character.results)
    const favoriteMode = useSelector<RootState, boolean>(state => state.character.favoriteMode)
    const favorites = useSelector<RootState, Array<number>>(state => state.character.favorites)
    const pagesInfo = useSelector<RootState, infoPageType>(state => state.character.info)
    const search = useSelector<RootState, string>(state => state.character.search)
    const dispatch = useDispatch()
    const addFavorite = (id: number) => {
        dispatch(addFavoriteState(id))
    }

    const removeFavoriteId = (id: number) => {
        dispatch(removeFromFavorite(id))
    }

    useEffect(() => {
        if (favorites.length !== 0 && favoriteMode) {
            dispatch(getFavorites(favorites.join(',')))
        } else dispatch(getCharacters(search))

    }, [favorites])

    let content
    if (characters.length !== 0) {
        content = characters.map(character => <Item
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            status={character.status}
            addFavorite={addFavorite}
            removeFavoriteId={removeFavoriteId}
        />)
    }


    const changePage = (page: number, search: string) => {
        dispatch(changeCurrentPage({page, search}))
    }
    return (
        <div className={styles.wrap}>
            <Header/>
            {content && content}
            {!favoriteMode && <Paginator pagesInfo={pagesInfo} changePage={changePage}/>}
        </div>
    );
};

export default Table;
