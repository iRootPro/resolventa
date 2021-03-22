import React from 'react';
import styles from './styles.module.css'
import cn from 'classnames'
import {useSelector} from "react-redux";
import {RootState} from "../../../../app/store";

const Item = ({name, image, gender, status, id, addFavorite, removeFavoriteId}: propsType) => {
    const favoriteMode = useSelector<RootState, boolean>(state => state.character.favoriteMode)
    const handleNameClick = () => {
        if (favoriteMode) {
            removeFavoriteId(id)
        } else {
            addFavorite(id)
        }
    }
    return (
        <>
            <div className={styles.wrap}>
                <span className={cn(styles.cell, styles.name)} onClick={handleNameClick}>{name}</span>
                <span className={styles.cell}><img src={image} alt="image" className={styles.image}/></span>
                <span className={styles.cell}>{gender}</span>
                <span className={styles.cell}>{status}</span>
            </div>
        </>
    );
};

export default Item;

type propsType = {
    name: string
    image: string
    gender: string
    status: string
    id: number
    addFavorite: (id: number) => void
    removeFavoriteId: (id: number) => void
}
