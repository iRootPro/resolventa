import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCharacters, getFavorites, searchByName, setSearch} from "../../reducers/character";
import Table from './Table';
import styles from './styles.module.css'
import {RootState} from "../../app/store";
import {Button} from "antd";
import Manage from "./Manage";
import {useHistory, useLocation} from 'react-router-dom';

const Character = () => {
    const favorites = useSelector<RootState, Array<number>>(state => state.character.favorites)
    const search = useSelector<RootState, string>(state => state.character.search)
    const dispatch = useDispatch()
    const history = useHistory()
    const locations = useLocation()
    let searchName
    if (locations.pathname.includes('/search')) {
        if (locations.pathname.split('/').length === 3) {
            searchName = locations.pathname.split('/')[2]
            dispatch(searchByName(searchName))
        }
    }

    useEffect(() => {
        dispatch(getCharacters(search))
    }, [])

    const handleClickFavorite = () => {
        dispatch(getFavorites(favorites.join(',')))
    }

    const handleClickAll = () => {
        dispatch(getCharacters(search))
        history.push('/')
    }

    return (
        <>
            <div className={styles.wrap}>
                <span className={styles.header}>Character</span>
                <div>
                    <Button className={styles.allButton} onClick={handleClickAll}>All</Button>
                    <Button className={styles.favoriteButton} onClick={handleClickFavorite}
                            disabled={favorites.length === 0}>Favorite</Button>
                </div>
                <Manage/>
                <Table/>
            </div>
        </>
    );
};

export default Character;
